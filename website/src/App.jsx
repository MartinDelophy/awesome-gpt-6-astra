import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fetchCatalogJson } from '../shared/catalog-client.js';
import { previewPath } from '../shared/preview-version.js';
import { ArrowUpRight, ArrowClockwise, Asterisk, SquaresFour, Browsers, AppWindow, Wrench, GameController, Cube, DotsThree, Info, GithubLogo, PaperPlaneTilt, MagnifyingGlass, X, List, CheckCircle, WarningCircle, CaretDown, ArrowRight, ImageBroken, Code } from '@phosphor-icons/react';

const REPO = 'https://github.com/MartinDelophy/awesome-gpt-6-astra';
const STORAGE = 'astra-catalog-v1';
const categories = [
  ['all', SquaresFour, '全部作品', 'All works'], ['website', Browsers, '网站', 'Websites'],
  ['app', AppWindow, '应用', 'Apps'], ['tool', Wrench, '工具', 'Tools'],
  ['game', GameController, '游戏', 'Games'], ['experiment', Cube, '交互实验', 'Experiments'],
  ['other', DotsThree, '其他作品', 'Other works'],
];
const copy = {
  zh: {
    title:'优秀作品，从这里发现。', subtitle:'探索 GPT-6 Astra 创作者的作品与构建方式。',
    search:'搜索作品、作者或关键词…', source:'目录顺序', az:'名称 A–Z', count:n=>`${n} 件作品`,
    about:'关于项目', submit:'提交作品', experience:'体验', code:'源码', view:'查看作品', details:'作品详情',
    synced:'自动同步', pending:'正在同步', stale:'显示最近可用目录', tryAgain:'重新同步', noPreview:'暂无预览',
    noResults:'暂时没有找到作品', noResultsHint:'换一个关键词，或返回全部作品继续探索。', reset:'浏览全部作品',
    emptyCategory:'这个分类，等待下一份好作品。', emptyCategoryHint:'目录会自动更新。也欢迎你推荐值得收录的作品。',
    loadMore:'加载更多作品', footer:'社区创作，开放探索。', repository:'查看开源目录',
    update:'目录每 5 分钟自动检查更新', syncError:'暂时无法获取新目录，已保留最近可用的作品。',
    aboutTitle:'关于这个作品集', aboutBody:'Astra 是一份由社区维护的作品集，收录用 GPT-6 Astra 构建的游戏、网站、应用、工具与交互实验。',
    sourceTitle:'来自开源，保持更新', sourceBody:'作品直接同步自上游开源仓库。上游新增、修改或移除作品后，网站会在后续自动检查中更新；无需手动编辑官网或重新部署。',
    note:'社区项目，与 OpenAI 无隶属关系。模型参与情况以原作者说明为准，作品的权利与许可归原作者。',
    author:'创作者', category:'分类', close:'关闭', openMenu:'打开导航', lastChecked:'上次成功检查', justNow:'刚刚',
    minutes:n=>`${n} 分钟前`, noData:'暂时无法获取作品目录', noDataHint:'请稍后重试，也可以直接查看上游开源目录。',
    outOf:(n,total)=>`显示 ${n} / ${total} 件作品`,
  },
  en: {
    title:'Great work. Worth discovering.', subtitle:'Explore what the GPT-6 Astra community is creating, and how it is built.',
    search:'Search works, creators, or keywords…', source:'Directory order', az:'Name A–Z', count:n=>`${n} works`,
    about:'About the project', submit:'Submit a work', experience:'Explore', code:'Source', view:'View work', details:'Work details',
    synced:'Auto-synced', pending:'Syncing', stale:'Last available catalog', tryAgain:'Check for updates', noPreview:'Preview unavailable',
    noResults:'No matching works yet', noResultsHint:'Try another keyword, or explore the complete collection.', reset:'Explore all works',
    emptyCategory:'The next great work belongs here.', emptyCategoryHint:'This directory updates automatically. Recommend a work you would love to see.',
    loadMore:'Load more works', footer:'Community made. Open to explore.', repository:'View the open-source directory',
    update:'Automatically checks for updates every 5 minutes', syncError:'New updates are temporarily unavailable. Your last available collection is still here.',
    aboutTitle:'About this collection', aboutBody:'Astra is a community-curated collection of games, websites, apps, tools, and interactive experiments built with GPT-6 Astra.',
    sourceTitle:'Open source. Always evolving.', sourceBody:'Works are read directly from the upstream repository. Additions, edits, and removals appear on subsequent automatic checks, without manual website updates or redeployments.',
    note:'A community project, not affiliated with OpenAI. Model involvement is based on creator disclosures. Each work retains its original ownership and license.',
    author:'Creator', category:'Category', close:'Close', openMenu:'Open navigation', lastChecked:'Last successful check', justNow:'just now',
    minutes:n=>`${n} min ago`, noData:'The collection is temporarily unavailable', noDataHint:'Please try again shortly, or browse the upstream repository.',
    outOf:(n,total)=>`Showing ${n} of ${total} works`,
  },
};
function safeUrl(value) { try { const u=new URL(value); return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password?u.href:null; } catch{return null;} }
function validCatalog(value) { return value&&Array.isArray(value.works)&&value.works.every(w=>typeof w.id==='string'&&typeof w.name==='string')&&value.source; }
function savedCatalog() { try {const c=JSON.parse(localStorage.getItem(STORAGE)); if(validCatalog(c))return {...c,source:{...c.source,stale:true,status:'stale'}};}catch{} return null; }

function useCatalog() {
  const [catalog,setCatalog]=useState(savedCatalog),[loading,setLoading]=useState(true),[error,setError]=useState(false);
  const flight=useRef(null),lastAttempt=useRef(0),mounted=useRef(true);
  const refresh=useCallback(async()=>{
    if(flight.current)return;
    const controller=new AbortController();flight.current=controller;lastAttempt.current=Date.now();
    if(mounted.current)setLoading(true);
    try{
      const data=await fetchCatalogJson('/api/catalog',{signal:controller.signal});
      if(!validCatalog(data)||data.source.status==='unavailable')throw new Error('invalid-catalog');
      if(mounted.current){
        setCatalog(current=>data.source.stale&&current?.source?.lastSuccessfulAt>data.source.lastSuccessfulAt?{...current,source:{...current.source,stale:true}}:data);
        setError(Boolean(data.source.stale));
        if(!data.source.stale)try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{}
      }
    }catch{
      if(mounted.current){
        setError(true);setCatalog(c=>c?{...c,source:{...c.source,stale:true}}:c);
        try{
          const fallback=await fetchCatalogJson('/data/catalog-fallback.json',{timeoutMs:5000});
          if(mounted.current&&validCatalog(fallback))setCatalog(c=>c||{...fallback,source:{...fallback.source,stale:true,status:'fallback'}});
        }catch{}
      }
    }finally{flight.current=null;if(mounted.current)setLoading(false);}
  },[]);
  useEffect(()=>{
    mounted.current=true;refresh();
    const timer=setInterval(()=>{if(!document.hidden)refresh();},300000);
    const onVisible=()=>{if(!document.hidden&&Date.now()-lastAttempt.current>60000)refresh();};
    document.addEventListener('visibilitychange',onVisible);window.addEventListener('focus',onVisible);
    return()=>{mounted.current=false;clearInterval(timer);document.removeEventListener('visibilitychange',onVisible);window.removeEventListener('focus',onVisible);};
  },[refresh]);
  return {catalog,loading,error,refresh};
}
function External({href,children,...props}) {const safe=safeUrl(href);return safe?<a href={safe} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>:null;}

function WorkCard({work,index,language,onDetails,refreshToken}) {
  const t=copy[language];const [failedSrc,setFailedSrc]=useState(null),[loadedSrc,setLoadedSrc]=useState(null);
  const previewSrc=previewPath(work),failed=failedSrc===previewSrc,loaded=loadedSrc===previewSrc;
  const cat=categories.find(c=>c[0]===work.category)||categories.at(-1),KindIcon=cat[1];
  const target=safeUrl(work.demoUrl)||safeUrl(work.sourceUrl)||safeUrl(work.repoUrl)||REPO;
  useEffect(()=>{setFailedSrc(null);},[refreshToken]);
  return <article className="work-card">
    <a href={target} target="_blank" rel="noopener noreferrer" className={`work-preview ${loaded?'loaded':''} ${failed?'image-failed':''}`} aria-label={`${work.name} — ${work.demoUrl?t.experience:t.view}`}>
      {!failed&&<img key={previewSrc} src={previewSrc} alt={`${work.name} ${language==='zh'?'作品预览':'preview'}`} loading={index<2?'eager':'lazy'} decoding="async" onLoad={()=>setLoadedSrc(previewSrc)} onError={()=>setFailedSrc(previewSrc)}/>}
      {!loaded&&!failed&&<span className="preview-loading"><KindIcon size={28} weight="light"/><span>{work.name}</span></span>}
      {failed&&<span className="preview-empty"><KindIcon size={38} weight="light"/><strong>{work.name}</strong><small><ImageBroken size={14}/>{t.noPreview}</small></span>}
      <span className="preview-visit"><ArrowUpRight size={21}/></span>
    </a>
    <div className="work-meta"><div className="work-identity"><button className="work-name" onClick={()=>onDetails(work)} title={work.name}>{work.name}</button>
      <p><span>{cat[language==='zh'?2:3]}</span>{work.author?.name&&<><span className="meta-dot">·</span>{work.author.url?<External href={work.author.url}>{work.author.name}</External>:<span>{work.author.name}</span>}</>}</p>
    </div><div className="work-actions"><External href={target} className="experience-link">{work.demoUrl?t.experience:t.view}<ArrowUpRight size={16}/></External>{work.sourceUrl&&<><span className="action-divider"/><External href={work.sourceUrl} className="source-link" aria-label={`${work.name} ${t.code}`}>{t.code}</External></>}</div></div>
  </article>;
}

export function App() {
  const initial=useRef(new URLSearchParams(location.search)).current;
  const [language,setLanguage]=useState(initial.get('lang')==='en'?'en':'zh');
  const [category,setCategory]=useState(categories.some(c=>c[0]===initial.get('type'))?initial.get('type'):'all');
  const [query,setQuery]=useState(initial.get('q')||''),[sort,setSort]=useState(initial.get('sort')==='name'?'name':'source');
  const [limit,setLimit]=useState(30),[menuOpen,setMenuOpen]=useState(false),[details,setDetails]=useState(null),[tick,setTick]=useState(Date.now());
  const searchRef=useRef(null),aboutRef=useRef(null),detailRef=useRef(null);
  const {catalog,loading,error,refresh}=useCatalog(),t=copy[language],works=catalog?.works||[];
  const counts=useMemo(()=>works.reduce((c,w)=>{const key=categories.some(v=>v[0]===w.category)?w.category:'other';c[key]=(c[key]||0)+1;return c;},{all:works.length}),[works]);
  const filtered=useMemo(()=>{
    const needle=query.trim().toLocaleLowerCase();
    return works.filter(w=>(category==='all'||(w.category||'other')===category)&&(!needle||[w.name,w.description,w.author?.name,w.sourceCategory,w.category].filter(Boolean).join(' ').toLocaleLowerCase().includes(needle)))
      .sort((a,b)=>sort==='name'?a.name.localeCompare(b.name,language==='zh'?'zh-CN':'en'):(a.sourceOrder??0)-(b.sourceOrder??0));
  },[works,category,query,sort,language]);
  useEffect(()=>setLimit(30),[category,query,sort]);
  useEffect(()=>{
    const p=new URLSearchParams();if(category!=='all')p.set('type',category);if(query)p.set('q',query);if(sort!=='source')p.set('sort',sort);if(language==='en')p.set('lang','en');
    history.replaceState(null,'',`${location.pathname}${p.size?`?${p}`:''}`);document.documentElement.lang=language==='zh'?'zh-CN':'en';
  },[category,query,sort,language]);
  useEffect(()=>{
    const onKey=e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchRef.current?.focus();}if(e.key==='Escape')setMenuOpen(false);};
    window.addEventListener('keydown',onKey);const timer=setInterval(()=>setTick(Date.now()),60000);
    return()=>{window.removeEventListener('keydown',onKey);clearInterval(timer);};
  },[]);
  useEffect(()=>{if(details)detailRef.current?.showModal();},[details]);
  const reset=()=>{setCategory('all');setQuery('');setMenuOpen(false);};
  const stamp=catalog?.source?.lastSuccessfulAt||catalog?.source?.checkedAt;
  const age=stamp?Math.max(0,Math.floor((tick-new Date(stamp).getTime())/60000)):null;
  const checked=age===0?t.justNow:age!==null&&age<60?t.minutes(age):stamp?new Date(stamp).toLocaleString(language==='zh'?'zh-CN':'en',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}):'—';

  return <div className="app-shell">
    <a className="skip-link" href="#works">{language==='zh'?'跳到作品':'Skip to works'}</a>
    {menuOpen&&<button className="mobile-scrim" aria-label={t.close} onClick={()=>setMenuOpen(false)}/>}
    <aside className={`sidebar ${menuOpen?'is-open':''}`} aria-label={language==='zh'?'主导航':'Main navigation'}>
      <button className="brand" onClick={reset} aria-label="Astra — Home"><span className="brand-word">Astra<Asterisk size={24} weight="bold"/></span><span className="brand-tagline">COMMUNITY SHOWCASE</span></button>
      <nav className="categories">{categories.filter(c=>c[0]!=='other'||counts.other).map(([id,Icon,zh,en])=><button key={id} className={`nav-item ${category===id?'active':''}`} aria-current={category===id?'page':undefined} onClick={()=>{setCategory(id);setMenuOpen(false);}}><Icon size={21} weight={category===id?'regular':'light'}/><span>{language==='zh'?zh:en}</span><span className="nav-count">{counts[id]||0}</span></button>)}</nav>
      <div className="sidebar-secondary"><button className="nav-item" onClick={()=>{setMenuOpen(false);aboutRef.current.showModal();}}><Info size={21} weight="light"/><span>{t.about}</span></button><External className="nav-item" href={REPO}><GithubLogo size={21} weight="light"/><span>GitHub</span><ArrowUpRight size={14}/></External></div>
      <div className="sidebar-bottom"><External className="nav-item" href={`${REPO}/issues/new/choose`}><PaperPlaneTilt size={22} weight="light"/><span>{t.submit}</span><ArrowUpRight size={14}/></External></div>
    </aside>
    <main className="main-content">
      <header className="page-header"><div className="heading-row"><button className="mobile-menu" onClick={()=>setMenuOpen(true)} aria-label={t.openMenu}><List size={25}/></button><p className="eyebrow">AWESOME GPT-6 ASTRA</p><div className="language-toggle" aria-label="Language"><button className={language==='zh'?'selected':''} onClick={()=>setLanguage('zh')} lang="zh-CN">中文</button><span>/</span><button className={language==='en'?'selected':''} onClick={()=>setLanguage('en')} lang="en">EN</button></div></div><h1>{t.title}</h1><p className="subtitle">{t.subtitle}</p></header>
      <div className="toolbar"><label className="search-box"><MagnifyingGlass size={21} weight="light"/><span className="sr-only">{t.search}</span><input ref={searchRef} value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search} type="search"/>{query?<button onClick={()=>setQuery('')} aria-label={language==='zh'?'清空搜索':'Clear search'}><X size={17}/></button>:<kbd>⌘ K</kbd>}</label><label className="sort-box"><span className="sr-only">{language==='zh'?'作品排序':'Sort works'}</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="source">{t.source}</option><option value="name">{t.az}</option></select><CaretDown size={15}/></label></div>
      <div className="collection-status" aria-live="polite"><span>{t.count(filtered.length)}</span><span className={`sync-status ${error?'is-stale':''}`} title={`${t.update} · ${t.lastChecked} ${checked}`}>{loading?<ArrowClockwise className="spin" size={13}/>:error?<WarningCircle size={14}/>:<CheckCircle size={14}/>} {loading?t.pending:error?t.stale:t.synced}<span className="status-time">· {checked}</span><button onClick={refresh} disabled={loading} aria-label={t.tryAgain}><ArrowClockwise size={14}/></button></span></div>
      {error&&catalog&&<div className="sync-notice" role="status"><WarningCircle size={17}/><span>{t.syncError}</span></div>}
      <section id="works" className="works-section" aria-label={language==='zh'?'作品集':'Collection'}>
        {!catalog&&loading?<div className="gallery skeleton-gallery" aria-busy="true">{Array.from({length:4},(_,i)=><div className="skeleton-card" key={i}><div/><span/><small/></div>)}</div>:filtered.length?<><div className="gallery" data-count={Math.min(filtered.length,5)}>{filtered.slice(0,limit).map((w,i)=><WorkCard work={w} index={i} key={w.id} language={language} onDetails={setDetails} refreshToken={catalog?.source?.lastSuccessfulAt}/>)}</div>{filtered.length>limit&&<div className="load-more"><p>{t.outOf(Math.min(limit,filtered.length),filtered.length)}</p><button onClick={()=>setLimit(n=>n+30)}>{t.loadMore}<ArrowRight size={18}/></button></div>}</>:<div className="empty-state"><div className="empty-icon">{!catalog?<WarningCircle size={34} weight="light"/>:<MagnifyingGlass size={34} weight="light"/>}</div><h2>{!catalog?t.noData:query?t.noResults:t.emptyCategory}</h2><p>{!catalog?t.noDataHint:query?t.noResultsHint:t.emptyCategoryHint}</p><button onClick={!catalog?refresh:reset}>{!catalog?t.tryAgain:t.reset}<ArrowRight size={17}/></button>{!catalog&&<External href={REPO}>{t.repository}<ArrowUpRight size={15}/></External>}</div>}
      </section>
      <footer className="page-footer"><div><span>{t.footer}</span><External href={REPO}>{t.repository}<ArrowUpRight size={13}/></External></div><span className="footer-sync">{t.update}</span></footer>
    </main>
    <dialog ref={aboutRef} className="info-dialog" onClick={e=>{if(e.target===e.currentTarget)aboutRef.current.close();}}><div className="dialog-content"><button className="dialog-close" onClick={()=>aboutRef.current.close()} aria-label={t.close}><X size={22}/></button><span className="dialog-eyebrow">ASTRA / COMMUNITY SHOWCASE</span><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p><h3>{t.sourceTitle}</h3><p>{t.sourceBody}</p><External className="dialog-link" href={REPO}>MartinDelophy/awesome-gpt-6-astra<ArrowUpRight size={16}/></External><div className="dialog-update"><CheckCircle size={16}/><span>{t.update}<br/>{t.lastChecked}：{checked}</span></div><p className="legal-note">{t.note}</p></div></dialog>
    <dialog ref={detailRef} className="info-dialog" onClose={()=>setDetails(null)} onClick={e=>{if(e.target===e.currentTarget)detailRef.current.close();}}>{details&&<div className="dialog-content"><button className="dialog-close" onClick={()=>detailRef.current.close()} aria-label={t.close}><X size={22}/></button><span className="dialog-eyebrow">{t.details}</span><h2>{details.name}</h2><p>{details.description}</p><dl className="detail-facts"><div><dt>{t.author}</dt><dd>{details.author?.url?<External href={details.author.url}>{details.author.name}<ArrowUpRight size={13}/></External>:details.author?.name||'—'}</dd></div><div><dt>{t.category}</dt><dd>{details.sourceCategory}</dd></div></dl><div className="detail-actions"><External href={details.demoUrl||details.sourceUrl} className="primary-button">{details.demoUrl?t.experience:t.view}<ArrowUpRight size={18}/></External>{details.sourceUrl&&<External className="secondary-button" href={details.sourceUrl}><Code size={18}/>{t.code}</External>}</div></div>}</dialog>
  </div>;
}
