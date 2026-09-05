import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { posix } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

export const REPOSITORY = 'MartinDelophy/awesome-gpt-6-astra';
export const README_URL = `https://github.com/${REPOSITORY}/blob/main/README.md`;
export const RAW_URL = `https://raw.githubusercontent.com/${REPOSITORY}/main/README.md`;
export const REFRESH_SECONDS = 300;
const parser = unified().use(remarkParse).use(remarkGfm);
const SKIP_SECTION = /^(?:从这里开始|开始使用|每个作品记录什么|一起维护|许可|贡献|贡献指南|提交|致谢|关于|目录$|start here|getting started|what an entry|help maintain|contribut|license|acknowledg|about|submission|table of contents)/i;
const NON_WORK = /^(?:提交|参与贡献|贡献指南|反馈问题|English|简体中文|submit|contribut|report|license|readme)(?:\b|你的|作品|游戏|问题|$)/i;
const META_LABEL = /^(?:作者|创作者|平台|开发资料|源码|体验|试玩|演示|技术|截图|预览|author|creator|platform|resources?|source|demo|preview|screenshot|technology|built with|GPT[ -]?6(?:\s+Astra)?)\s*[:：]/i;
const SOURCE_LABEL = /^(?:开发资料|源码|源代码|仓库|resources?|source(?: code)?|repository|repo)\s*[:：]/i;
const SOURCE_LINK = /源码|源代码|source|repository|\brepo\b/i;

function plain(node) {
  if (!node) return '';
  if (node.type === 'image' || node.type === 'imageReference') return node.alt || '';
  if (node.type === 'html') return '';
  if (typeof node.value === 'string') return node.value;
  return (node.children || []).map(plain).join('');
}

function descendants(node, predicate) {
  const found = [];
  const visit = (current) => {
    if (!current) return;
    if (predicate(current)) found.push(current);
    for (const child of current.children || []) visit(child);
  };
  visit(node);
  return found;
}

/** Resolve GitHub Markdown paths without allowing non-HTTP schemes or credentials. */
export function safeUrl(input, { repository = REPOSITORY, branch = 'main', readmePath = 'README.md', image = false } = {}) {
  if (typeof input !== 'string' || !input.trim()) return null;
  const value = input.trim();
  if (/[\u0000-\u0020\u007f\\]/.test(value) || value.startsWith('#')) return null;
  try {
    let resolved;
    if (/^[a-z][a-z\d+.-]*:/i.test(value) || value.startsWith('//')) {
      resolved = new URL(value, 'https://github.com');
    } else {
      const match = value.match(/^([^?#]*)(.*)$/);
      const path = posix.normalize(posix.join('/', posix.dirname(readmePath), match[1])).replace(/^\/+/, '');
      resolved = new URL(`https://${image ? 'raw.githubusercontent.com' : 'github.com'}/${repository}/${image ? '' : 'blob/'}${branch}/${path}${match[2]}`);
    }
    if (!['http:', 'https:'].includes(resolved.protocol) || resolved.username || resolved.password) return null;
    return resolved.href;
  } catch {
    return null;
  }
}

function isRepositoryUrl(value) {
  if (!value) return false;
  const url = new URL(value);
  return ['github.com', 'gitlab.com', 'bitbucket.org'].includes(url.hostname);
}

function repositoryRoot(value) {
  if (!isRepositoryUrl(value)) return null;
  const url = new URL(value);
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length < 2 || /^(issues|pulls|settings|new|topics|search)$/.test(segments[0])) return null;
  return `${url.origin}/${segments[0]}/${segments[1]}`;
}

function isNonWorkLink(link) {
  if (NON_WORK.test(link.text)) return true;
  const url = new URL(link.url);
  return url.hostname === 'github.com' && /\/(?:issues|pulls?|discussions|actions|settings)(?:\/|$)|\/(?:CONTRIBUTING|LICENSE|CODE_OF_CONDUCT)(?:\.md)?$/i.test(url.pathname);
}

export function classifyWork(sourceCategory, description = '', parents = '') {
  const classify = (text) => {
    if (/网站|网页|落地页|官网|\bwebsites?\b|\blanding pages?\b|\bweb design\b/i.test(text)) return 'website';
    if (/应用|移动端|桌面端|\bapps?\b|\bapplications?\b|\bmobile\b|\bdesktop\b/i.test(text)) return 'app';
    if (/工具|效率|自动化|\btools?\b|\butilities\b|\bproductivity\b|\bautomation\b/i.test(text)) return 'tool';
    if (/艺术|实验|可视化|粒子|创意编程|\bexperiments?\b|\bcreative coding\b|\bvisualizations?\b|\bart\b/i.test(text)) return 'experiment';
    if (/游戏|动作|街机|解谜|益智|策略|模拟|冒险|跳跃|竞速|\bgames?\b|arcade|puzzle|strategy|simulation|\brpg|adventure|racing|platformer/i.test(text)) return 'game';
    return null;
  };
  // Broad “experimental games” sections may contain art and games: the description clarifies it.
  if (/实验玩法|experimental.*multiplayer/i.test(sourceCategory)) return classify(description) || 'experiment';
  return classify(sourceCategory) || classify(description) || classify(parents) || 'other';
}

function stableId(name, authorName) {
  return `work-${createHash('sha256').update(`${name.normalize('NFKC').toLowerCase()}\0${authorName.normalize('NFKC').toLowerCase()}`).digest('hex').slice(0, 16)}`;
}

/** Read linked project entries from lists and GFM tables; explanatory links are excluded. */
export function parseCatalogMarkdown(markdown, options = {}) {
  if (typeof markdown !== 'string' || !markdown.trim() || Buffer.byteLength(markdown) > 2_000_000) throw new Error('Invalid catalogue document');
  const tree = parser.parse(markdown);
  const definitions = new Map(descendants(tree, n => n.type === 'definition').map(n => [n.identifier.toLowerCase(), n]));
  const urlOptions = { repository: REPOSITORY, branch: 'main', readmePath: 'README.md', ...options };
  const sourceReadme = safeUrl(urlOptions.readmePath, { ...urlOptions, readmePath: 'README.md' });
  const headings = [];
  const works = [];
  const seen = new Map();
  let hasCatalogueStructure = false;

  function links(node) {
    return descendants(node, n => ['link', 'linkReference'].includes(n.type)).map(n => {
      const definition = n.type === 'linkReference' ? definitions.get(n.identifier.toLowerCase()) : n;
      return { text: plain(n).trim(), url: safeUrl(definition?.url, urlOptions), node: n };
    }).filter(link => link.url);
  }

  function images(node) {
    return descendants(node, n => ['image', 'imageReference'].includes(n.type)).map(n => {
      const definition = n.type === 'imageReference' ? definitions.get(n.identifier.toLowerCase()) : n;
      return safeUrl(definition?.url, { ...urlOptions, image: true });
    }).filter(Boolean);
  }

  function addWork({ name, description, titleLink, metadata, category, authorCell, sourceCell, demoCell, imageCell }) {
    name = name?.trim();
    if (!name || name.length > 240 || !titleLink || isNonWorkLink({ text: name, url: titleLink })) return;
    let author = { name: '', url: null };
    let sourceUrl = null;
    let demoUrl = null;
    let imageUrl = imageCell ? images(imageCell)[0] || links(imageCell)[0]?.url || null : null;
    if (authorCell) author = { name: plain(authorCell).trim(), url: links(authorCell)[0]?.url || null };
    if (sourceCell) sourceUrl = links(sourceCell)[0]?.url || null;
    if (demoCell) demoUrl = links(demoCell).find(link => !isRepositoryUrl(link.url))?.url || null;
    for (const paragraph of metadata || []) {
      const text = plain(paragraph).trim();
      const paragraphLinks = links(paragraph);
      if (/^(?:作者|创作者|author|creator|by)\s*[:：]/i.test(text)) {
        author = { name: paragraphLinks[0]?.text || text.replace(/^[^:：]+[:：]\s*/, ''), url: paragraphLinks[0]?.url || null };
      }
      if (SOURCE_LABEL.test(text)) sourceUrl ||= paragraphLinks.find(link => SOURCE_LINK.test(link.text))?.url || paragraphLinks[0]?.url || null;
      if (/^(?:体验|试玩|演示|在线|demo|live|play|website)\s*[:：]/i.test(text)) demoUrl ||= paragraphLinks.find(link => !isRepositoryUrl(link.url))?.url || null;
      imageUrl ||= images(paragraph)[0] || null;
    }
    if (isRepositoryUrl(titleLink)) sourceUrl ||= titleLink;
    else demoUrl ||= titleLink;
    const sourceCategory = category || headings.at(-1)?.text || '其他作品';
    const work = {
      id: stableId(name, author.name),
      name,
      description: (description || '').replace(/^[\s—–\-:：·]+/, '').trim(),
      category: classifyWork(sourceCategory, description, headings.map(h => h.text).join(' ')),
      sourceCategory,
      author,
      demoUrl,
      sourceUrl: sourceUrl || sourceReadme,
      repoUrl: repositoryRoot(sourceUrl),
      imageUrl,
      sourceOrder: works.length,
    };
    const canonical = new URL(titleLink);
    canonical.hash = '';
    const dedupeKey = `${canonical.href.replace(/\/$/, '')}\0${name.normalize('NFKC').toLowerCase()}`;
    if (seen.has(dedupeKey) || works.some(existing => existing.id === work.id)) return;
    seen.set(dedupeKey, work);
    works.push(work);
  }

  function readList(list) {
    for (const item of list.children) {
      const paragraph = item.children.find(n => n.type === 'paragraph');
      if (!paragraph) continue;
      const text = plain(paragraph).trim();
      const paragraphLinks = links(paragraph);
      const title = paragraphLinks[0];
      const nested = item.children.filter(n => n.type === 'list');
      const metadata = nested.flatMap(n => descendants(n, p => p.type === 'paragraph'));
      const titleText = title?.text || '';
      const description = text.slice(titleText.length).replace(/^[\s—–\-:：·]+/, '').trim();
      const startsWithTitle = titleText && text.startsWith(titleText);
      const hasDescriptionSeparator = /^[\s]*(?:—|–|-|:|：|·)/.test(text.slice(titleText.length));
      const hasMetadata = metadata.some(n => META_LABEL.test(plain(n).trim()));
      if (title && startsWithTitle && !META_LABEL.test(text) && (hasMetadata || (hasDescriptionSeparator && description.length >= 3))) {
        addWork({ name: titleText, description, titleLink: title.url, metadata: [paragraph, ...metadata] });
      } else {
        // Grouped lists can nest entries under plain category labels.
        for (const childList of nested) readList(childList);
      }
    }
  }

  function readTable(table) {
    const header = table.children[0]?.children.map(cell => plain(cell).trim().toLowerCase()) || [];
    const col = (re) => header.findIndex(value => re.test(value));
    const titleIndex = col(/^(?:作品(?:名称)?|项目(?:名称)?|名称|游戏(?:名称)?|网站|工具|应用|name|project|work|game|website|app|tool|title)$/i);
    if (titleIndex < 0) return;
    const descIndex = col(/描述|简介|亮点|说明|玩法|description|summary|about|overview/i);
    const authorIndex = col(/作者|创作者|author|creator/i);
    const categoryIndex = col(/分类|类别|类型|category|type|genre/i);
    const sourceIndex = col(/源码|源代码|仓库|source|repository|repo/i);
    const demoIndex = col(/试玩|体验|演示|入口|链接|demo|live|play|link/i);
    const imageIndex = col(/图片|截图|预览|封面|image|screenshot|preview|cover/i);
    hasCatalogueStructure = true;
    for (const row of table.children.slice(1)) {
      const cell = row.children[titleIndex];
      const title = links(cell)[0];
      const fallbackLink = [demoIndex, sourceIndex].filter(i => i >= 0).flatMap(i => links(row.children[i]))[0];
      const titleLink = title?.url || fallbackLink?.url;
      if (!titleLink) continue;
      addWork({
        name: plain(cell), description: descIndex >= 0 ? plain(row.children[descIndex]) : '', titleLink,
        category: categoryIndex >= 0 ? plain(row.children[categoryIndex]) : null,
        authorCell: authorIndex >= 0 ? row.children[authorIndex] : null,
        sourceCell: sourceIndex >= 0 ? row.children[sourceIndex] : null,
        demoCell: demoIndex >= 0 ? row.children[demoIndex] : null,
        imageCell: imageIndex >= 0 ? row.children[imageIndex] : null,
      });
    }
  }

  for (const node of tree.children) {
    if (node.type === 'heading') {
      while (headings.length && headings.at(-1).depth >= node.depth) headings.pop();
      const text = plain(node).trim();
      headings.push({ depth: node.depth, text, skip: SKIP_SECTION.test(text) });
      if (/^(?:作品目录|游戏目录|项目目录|作品集|全部作品|作品列表|projects|works|games|showcase|catalogue|catalog|collection)$/i.test(text)) hasCatalogueStructure = true;
    }
    if (headings.some(h => h.skip)) continue;
    if (node.type === 'list') readList(node);
    if (node.type === 'table') readTable(node);
  }
  // An explicit empty collection is valid (all entries may have been removed).
  // A changed, unrecognizable document must never silently wipe the last good data.
  if (!works.length && !hasCatalogueStructure) throw new Error('Unrecognized catalogue format');
  return works;
}

function readFallback() {
  try {
    const snapshot = JSON.parse(readFileSync(new URL('../public/data/catalog-fallback.json', import.meta.url), 'utf8'));
    return Array.isArray(snapshot.works) ? snapshot : null;
  } catch { return null; }
}

/** Isolated, injectable cache used by the live service and meaningful failure tests. */
export function createCatalogService({
  fetchImpl = globalThis.fetch,
  now = Date.now,
  fallback = readFallback(),
  cacheTtlMs = REFRESH_SECONDS * 1000,
  retryDelayMs = 30_000,
  timeoutMs = 8_000,
} = {}) {
  let lastGood = null;
  let cachedResult = null;
  let nextFetchAt = 0;
  let inFlight = null;
  let etag = null;

  async function refresh() {
    const controller = new AbortController();
    let timer;
    const startedAt = now();
    try {
      const operation = (async () => {
        const response = await fetchImpl(RAW_URL, {
          headers: { Accept: 'text/plain', 'User-Agent': 'Astra-Showcase/1.0', ...(etag ? { 'If-None-Match': etag } : {}) },
          signal: controller.signal,
          redirect: 'error',
        });
        if (response.status === 304 && lastGood) return { unchanged: true };
        if (!response.ok) throw new Error('Upstream response unavailable');
        const contentLength = Number(response.headers.get('content-length'));
        if (contentLength > 2_000_000) throw new Error('Catalogue document too large');
        const markdown = await response.text();
        const works = parseCatalogMarkdown(markdown);
        const bytes = Buffer.from(markdown);
        const revision = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
        return { works, revision, etag: response.headers.get('etag') };
      })();
      const result = await Promise.race([
        operation,
        new Promise((_, reject) => { timer = setTimeout(() => { controller.abort(); reject(new Error('Upstream timed out')); }, timeoutMs); }),
      ]);
      const checkedAt = new Date(now()).toISOString();
      etag = result.unchanged ? etag : result.etag;
      lastGood = {
        works: result.unchanged ? lastGood.works : result.works,
        source: {
          repository: REPOSITORY, url: README_URL, checkedAt, lastSuccessfulAt: checkedAt,
          revision: result.unchanged ? lastGood.source.revision : result.revision,
          stale: false, status: 'fresh',
        },
        refreshAfterSeconds: REFRESH_SECONDS,
      };
      cachedResult = lastGood;
      nextFetchAt = now() + cacheTtlMs;
    } catch {
      const previous = lastGood || fallback;
      cachedResult = {
        works: previous?.works || [],
        source: {
          repository: REPOSITORY, url: README_URL,
          ...(previous?.source || {}),
          checkedAt: new Date(startedAt).toISOString(),
          lastSuccessfulAt: previous?.source?.lastSuccessfulAt || previous?.source?.checkedAt || null,
          stale: true,
          status: lastGood ? 'stale' : fallback ? 'fallback' : 'unavailable',
          error: '暂时无法连接 GitHub；当前显示最近可用的作品记录。',
        },
        refreshAfterSeconds: Math.ceil(retryDelayMs / 1000),
      };
      nextFetchAt = now() + retryDelayMs;
    } finally {
      clearTimeout(timer);
      inFlight = null;
    }
    return cachedResult;
  }

  async function loadCatalog() {
    if (cachedResult && now() < nextFetchAt) return cachedResult;
    if (inFlight) return inFlight;
    inFlight = refresh();
    return inFlight;
  }

  async function handleCatalog(request) {
    if (request?.method && !['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    const catalog = await loadCatalog();
    const body = request?.method === 'HEAD' ? null : JSON.stringify(catalog);
    const remainingTtl = Math.max(0, Math.floor((nextFetchAt - now()) / 1000));
    const cdnCache = catalog.source.stale ? 'no-store' : `public, s-maxage=${remainingTtl}`;
    return new Response(body, {
      status: catalog.source.status === 'unavailable' ? 503 : 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        // Give the CDN only the origin cache's remaining freshness budget. A cached
        // origin result must never start a second five-minute freshness interval.
        'Cache-Control': 'no-store',
        'Vercel-CDN-Cache-Control': cdnCache,
        'CDN-Cache-Control': cdnCache,
      },
    });
  }
  return { loadCatalog, handleCatalog };
}

const defaultService = createCatalogService();
export const loadCatalog = defaultService.loadCatalog;
export const handleCatalog = defaultService.handleCatalog;
