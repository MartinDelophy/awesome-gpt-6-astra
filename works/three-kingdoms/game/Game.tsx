'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  Map,
  Users,
  ScrollText,
  HelpCircle,
  Flag,
  Coins,
  Wheat,
  Castle,
  Swords,
  Shield,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Save,
  RotateCcw,
  Check,
  Compass,
  Sun,
  Volume2,
  VolumeX,
  Download,
  Upload,
  Maximize,
  Minimize,
  Plus,
  Minus,
  LocateFixed,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import * as E from './engine';
import Portrait from './Portrait';
import { Input } from '@/components/ui/input';
import type { Game as State, Playable, Action } from './engine';
const fmt = (n: number) => Math.round(n).toLocaleString('zh-CN');
const compact = (n: number) =>
  n >= 10000 ? `${(n / 10000).toFixed(1)}万` : fmt(n);
const icons = {
  farm: Wheat,
  market: TrendingUp,
  recruit: Users,
  train: Swords,
  wall: Shield,
};
declare const __TERRAIN_URL__: string;
const terrain =
  typeof __TERRAIN_URL__ !== 'undefined' ? __TERRAIN_URL__ : '/terrain.jpg';
const gameFileName = '三分天下-存档.json';
export default function Game() {
  const [g, setG] = useState<State>(() => E.newGame());
  const [query, setQuery] = useState('');
  const [rosterFilter, setRosterFilter] = useState('mine');
  const [detail, setDetail] = useState<E.Officer | null>(null);
  const [administrator, setAdministrator] = useState('auto');
  const [selected, setSelected] = useState('chengdu');
  const [view, setView] = useState('map');
  const [setup, setSetup] = useState(false);
  const [faction, setFaction] = useState<Playable>('shu');
  const [ready, setReady] = useState(false);
  const [help, setHelp] = useState(false);
  const [restart, setRestart] = useState(false);
  const [attack, setAttack] = useState(false);
  const [target, setTarget] = useState('');
  const [requestedTroops, setTroops] = useState(8000);
  const [officer, setOfficer] = useState('guan');
  const [notice, setNotice] = useState('先发展城池，再率军逐鹿天下。');
  const [saving, setSaving] = useState('本地自动存档');
  const [sound, setSound] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [busy, setBusy] = useState(false);
  const [full, setFull] = useState(false);
  const imported = useRef<HTMLInputElement>(null);
  const lock = useRef(false);
  const shell = useRef<HTMLDivElement>(null);
  const mapScroll = useRef<HTMLDivElement>(null);
  // Hydration and save feedback synchronize with browser-only local storage.
  /* eslint-disable react/react-compiler */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(E.STORAGE_KEY);
      if (raw) {
        const saved = E.loadGame(raw);
        setG(saved);
        setFaction(saved.player);
        setAdministrator('auto');
        setSelected(E.owned(saved, saved.player)[0]?.id || 'chengdu');
        setNotice('已续接上次战局。');
      } else setSetup(true);
    } catch {
      setSetup(true);
      setSaving('存档不可用，可手动导出');
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready || setup) return;
    try {
      localStorage.setItem(E.STORAGE_KEY, JSON.stringify(g));
      setSaving('进度已自动保存');
    } catch {
      setSaving('请导出存档保存进度');
    }
  }, [g, ready, setup]);
  /* eslint-enable react/react-compiler */
  useEffect(() => {
    const onFull = () => setFull(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFull);
    return () => document.removeEventListener('fullscreenchange', onFull);
  }, []);
  const city = E.getCity(g, selected);
  const mine = city.owner === g.player;
  const me = E.FACTIONS[g.player];
  const resources = g.resources[g.player];
  const income = E.income(g);
  const myCities = E.owned(g, g.player);
  const totalTroops =
    myCities.reduce((n, c) => n + c.troops, 0) +
    g.armies
      .filter((a) => a.owner === g.player)
      .reduce((n, a) => n + a.troops, 0);
  const visibleOfficers = (
    rosterFilter === 'mine'
      ? me.officers
      : rosterFilter === 'all'
        ? E.ALL_OFFICERS
        : E.FACTIONS[rosterFilter as Playable].officers
  ).filter((o) => `${o.name}${o.role}${o.specialty}`.includes(query.trim()));
  const available = me.officers.filter((o) => E.officerAvailable(g, o.id));
  const targets = E.neighbors(selected).map((id) => E.getCity(g, id));
  const targetCity = g.cities.find((c) => c.id === target);
  const chosenOfficer = E.getOfficer(officer);
  const marchLimit = Math.max(
    1000,
    Math.floor(
      Math.min(
        city.troops - 1000,
        chosenOfficer ? E.leaderCapacity(chosenOfficer) : 1000,
      ) / 500,
    ) * 500,
  );
  const troops = Math.max(1000, Math.min(requestedTroops, marchLimit));
  const forecast =
    targetCity && mine ? E.predict(g, selected, target, troops, officer) : null;
  function ping(low = false) {
    if (!sound) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const context = new AudioCtx();
      const osc = context.createOscillator(),
        gain = context.createGain();
      osc.connect(gain);
      gain.connect(context.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(low ? 220 : 540, context.currentTime);
      gain.gain.setValueAtTime(0.045, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);
      osc.start();
      osc.stop(context.currentTime + 0.2);
      osc.onended = () => {
        void context.close();
      };
    } catch {}
  }
  function update(fn: (state: State) => State, success: string) {
    if (lock.current) return;
    lock.current = true;
    try {
      const next = fn(g);
      setG(next);
      setNotice(success);
      ping();
    } catch (error) {
      setNotice((error as Error).message);
    } finally {
      lock.current = false;
    }
  }
  function start() {
    setAdministrator('auto');
    const fresh = E.newGame(faction);
    setG(fresh);
    setSelected(E.FACTIONS[faction].capital);
    setView('map');
    setSetup(false);
    setNotice('建议：征募兵卒 → 选择相邻城池出征 → 结束回合。');
    ping();
  }
  function openMarch(destination?: string) {
    const origin = E.getCity(g, selected);
    if (origin.owner !== g.player) return;
    setTarget(
      destination ||
        E.neighbors(selected).find(
          (id) => E.getCity(g, id).owner !== g.player,
        ) ||
        E.neighbors(selected)[0],
    );
    setOfficer(
      available.slice().sort((a, b) => E.combatSkill(b) - E.combatSkill(a))[0]
        ?.id || '',
    );
    setTroops(
      Math.max(
        1000,
        Math.floor(
          Math.min(origin.troops - 1000, origin.troops * 0.75) / 1000,
        ) * 1000,
      ),
    );
    setAttack(true);
  }
  function nextTurn() {
    if (lock.current || busy) return;
    lock.current = true;
    setBusy(true);
    setTimeout(() => {
      try {
        const next = E.endTurn(g);
        setG(next);
        setNotice(
          next.status === 'playing'
            ? `第 ${next.turn} 回合开始。请查看下方战报。`
            : next.status === 'won'
              ? '天下一统！你的征程已载入史册。'
              : '最后一城失守，可另启新局再战。',
        );
        ping(true);
      } catch (error) {
        setNotice((error as Error).message);
      } finally {
        setBusy(false);
        lock.current = false;
      }
    }, 420);
  }
  function exportSave() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(g, null, 2)], { type: 'application/json' }),
    );
    a.download = gameFileName;
    a.click();
    URL.revokeObjectURL(a.href);
    setNotice('存档已导出，可在其他浏览器中导入。');
  }
  async function importSave(file?: File) {
    if (!file) return;
    try {
      const saved = E.loadGame(await file.text());
      setG(saved);
      setFaction(saved.player);
      setAdministrator('auto');
      setSelected(E.owned(saved, saved.player)[0]?.id || 'chengdu');
      setNotice('存档已载入。');
      setHelp(false);
    } catch (error) {
      setNotice((error as Error).message);
    }
    if (imported.current) imported.current.value = '';
  }
  function selectCity(id: string) {
    setSelected(id);
    setAdministrator('auto');
    ping();
  }
  const actionDisabled = (type: Action) =>
    E.actionError(g, type, selected, g.player, g.ap, administrator) || busy;
  return (
    <div className="game-shell" ref={shell}>
      <header className="topbar">
        <div className="brand">
          <span className="brand-seal">
            三<br />国
          </span>
          <div>
            <h1>三分天下</h1>
            <span>群 雄 逐 鹿</span>
          </div>
        </div>
        <div className="top-divider" />
        <div className="ruler">
          <Portrait officer={me.officers[0]} className="ruler-avatar" />
          <span
            className="mini-seal"
            style={{ color: me.color, borderColor: me.color }}
          >
            {me.seal}
          </span>
          <div>
            <strong>{me.name}势力</strong>
            <small>{me.title}</small>
          </div>
        </div>
        <div className="treasury">
          <div>
            <Coins />
            <span>
              <small>金钱</small>
              <strong>{fmt(resources.gold)}</strong>
            </span>
            <em>+{fmt(income.gold)}</em>
          </div>
          <div>
            <Wheat />
            <span>
              <small>军粮</small>
              <strong>{fmt(resources.food)}</strong>
            </span>
            <em>
              {income.food >= 0 ? '+' : ''}
              {fmt(income.food)}
            </em>
          </div>
          <div className="troop-total">
            <Users />
            <span>
              <small>总兵力</small>
              <strong>{fmt(totalTroops)}</strong>
            </span>
          </div>
        </div>
        <button
          className="icon-button"
          aria-label={sound ? '关闭音效' : '开启音效'}
          title={sound ? '关闭音效' : '开启音效'}
          onClick={() => setSound(!sound)}
        >
          {sound ? <Volume2 /> : <VolumeX />}
        </button>
        <button
          className="icon-button help-icon"
          aria-label="玩法与存档"
          title="玩法与存档"
          onClick={() => setHelp(true)}
        >
          <HelpCircle />
        </button>
      </header>
      <div className="game-body">
        <nav className="rail" aria-label="游戏视图">
          {[
            ['map', '天下', Map],
            ['officers', '武将', Users],
            ['chronicle', '战报', ScrollText],
          ].map(([id, label, Icon]) => {
            const I = Icon as typeof Map;
            return (
              <button
                key={id as string}
                className={view === id ? 'active' : ''}
                onClick={() => setView(id as string)}
                aria-label={label as string}
              >
                <I />
                <span>{label as string}</span>
              </button>
            );
          })}
          <div className="rail-spacer" />
          <button onClick={exportSave} aria-label="导出存档">
            <Save />
            <span>存档</span>
          </button>
          <button onClick={() => setRestart(true)} aria-label="另启新局">
            <RotateCcw />
            <span>新局</span>
          </button>
          <span className="rail-bottom">建安十三年</span>
        </nav>
        <main className="world">
          <div className="world-head">
            <div>
              <span className="eyebrow">天下大势</span>
              <h2>
                {view === 'map'
                  ? '江山如画'
                  : view === 'officers'
                    ? '帐下群英'
                    : '征战纪事'}
              </h2>
            </div>
            <div className="scenario">
              <span className="live-dot" /> 英雄集结{' '}
              <span className="scenario-sep">/</span>
              <span>自由推演</span>
            </div>
          </div>
          <div
            className={`map-viewport ${view === 'map' ? '' : 'map-hidden'}`}
            ref={mapScroll}
          >
            <div
              className="world-map"
              style={{
                width: `${zoom * 100}%`,
                height: `${zoom * 100}%`,
                backgroundImage: `url(${terrain})`,
              }}
            >
              <div className="map-shade" />
              <span className="region region-west">益 州</span>
              <span className="region region-north">司 隶</span>
              <span className="region region-east">扬 州</span>
              <span className="region region-center">荆 州</span>
              <svg
                className="road-map"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {E.ROADS.map(([a, b]) => {
                  const c = E.getCity(g, a),
                    d = E.getCity(g, b),
                    highlight = selected === a || selected === b;
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={c.x}
                      y1={c.y}
                      x2={d.x}
                      y2={d.y}
                      className={highlight ? 'road active-road' : 'road'}
                    />
                  );
                })}
                {g.armies.map((a) => {
                  const c = E.getCity(g, a.from),
                    d = E.getCity(g, a.to);
                  return (
                    <line
                      key={a.id}
                      x1={c.x}
                      y1={c.y}
                      x2={d.x}
                      y2={d.y}
                      className="march-road"
                      style={{ stroke: E.FACTIONS[a.owner].color }}
                    />
                  );
                })}
              </svg>
              {g.cities.map((c) => (
                <button
                  key={c.id}
                  className={`city ${c.id === selected ? 'selected' : ''} ${c.owner === g.player ? 'owned' : ''}`}
                  style={
                    {
                      left: `${c.x}%`,
                      top: `${c.y}%`,
                      '--faction': E.FACTIONS[c.owner].color,
                    } as CSSProperties
                  }
                  onClick={() => selectCity(c.id)}
                  aria-label={`${c.name}，${E.FACTIONS[c.owner].name}势力，驻军${fmt(c.troops)}`}
                  aria-pressed={c.id === selected}
                >
                  <span className="city-halo" />
                  <span className="city-pin">
                    <Castle size={20} />
                  </span>
                  <span className="city-banner">
                    <i>{E.FACTIONS[c.owner].seal}</i>
                    <strong>{c.name}</strong>
                  </span>
                  <span className="city-troops">{compact(c.troops)}</span>
                </button>
              ))}
              {g.armies.map((a) => {
                const c = E.getCity(g, a.from),
                  d = E.getCity(g, a.to);
                return (
                  <div
                    className="march-token"
                    key={a.id}
                    style={{
                      left: `${(c.x + d.x) / 2}%`,
                      top: `${(c.y + d.y) / 2}%`,
                      color: E.FACTIONS[a.owner].color,
                    }}
                    title={`${compact(a.troops)}兵向${d.name}行军`}
                  >
                    <Flag size={16} />
                    <span>{compact(a.troops)}</span>
                  </div>
                );
              })}
              <div className="compass">
                <Compass />
                <span>北</span>
              </div>
            </div>
          </div>
          {view === 'map' && (
            <>
              <div className="map-caption">
                <span className="caption-line" />
                建安十三年 · 风云初起<small>选择城池，运筹帷幄</small>
              </div>
              <div className="map-tools">
                <button
                  aria-label="放大地图"
                  disabled={zoom >= 1.8}
                  onClick={() => setZoom(Math.min(1.8, zoom + 0.2))}
                >
                  <Plus />
                </button>
                <button
                  aria-label="缩小地图"
                  disabled={zoom <= 1}
                  onClick={() => setZoom(Math.max(1, zoom - 0.2))}
                >
                  <Minus />
                </button>
                <button
                  aria-label="重置地图视野"
                  onClick={() => {
                    setZoom(1);
                    mapScroll.current?.scrollTo(0, 0);
                  }}
                >
                  <LocateFixed />
                </button>
                <button
                  aria-label={full ? '退出全屏' : '全屏游戏'}
                  onClick={() => {
                    if (document.fullscreenElement)
                      void document.exitFullscreen();
                    else
                      void shell.current
                        ?.requestFullscreen?.()
                        .catch(() =>
                          setNotice('此浏览器不支持全屏，可使用窗口最大化。'),
                        );
                  }}
                >
                  {full ? <Minimize /> : <Maximize />}
                </button>
              </div>
            </>
          )}
          {view === 'officers' && (
            <section className="officer-view">
              <div className="roster-heading">
                <div>
                  <span className="eyebrow">百将风云 · 108 人图鉴</span>
                  <p className="section-intro">
                    统率领军，武力破阵，智略济世。
                  </p>
                </div>
                <span className="roster-count">
                  {visibleOfficers.length}
                  <small> 位武将</small>
                </span>
              </div>
              <div className="roster-controls">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜索姓名、定位或专长"
                  aria-label="搜索武将"
                />
                <Select
                  value={rosterFilter}
                  onValueChange={(v) => setRosterFilter(v || 'mine')}
                >
                  <SelectTrigger className="game-select">
                    <SelectValue>
                      {
                        {
                          mine: '我方武将',
                          all: '天下群英',
                          wei: '曹操势力',
                          shu: '刘备势力',
                          wu: '孙权势力',
                        }[rosterFilter]
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries({
                      mine: '我方武将',
                      all: '天下群英',
                      wei: '曹操势力',
                      shu: '刘备势力',
                      wu: '孙权势力',
                    }).map(([v, t]) => (
                      <SelectItem key={v} value={v}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="officer-grid">
                {visibleOfficers.map((o) => (
                  <button
                    className="officer-card"
                    key={o.id}
                    onClick={() => setDetail(o)}
                    aria-label={`查看${o.name}，统率${o.command}，武力${o.war}，智略${o.int}`}
                  >
                    <div className="officer-portrait">
                      <Portrait officer={o} />
                      <small>{o.specialty}</small>
                    </div>
                    <div className="officer-card-info">
                      <span
                        className="eyebrow"
                        style={{ color: E.FACTIONS[o.faction].color }}
                      >
                        {E.FACTIONS[o.faction].name} · {o.role}
                      </span>
                      <h3>{o.name}</h3>
                      <div className="officer-stats">
                        <span>
                          统 <b>{o.command}</b>
                        </span>
                        <span>
                          武 <b>{o.war}</b>
                        </span>
                        <span>
                          智 <b>{o.int}</b>
                        </span>
                      </div>
                      <p
                        className={
                          E.officerAvailable(g, o.id) ? 'available' : 'away'
                        }
                      >
                        <span className="live-dot" />
                        {g.armies.some((a) => a.officer === o.id)
                          ? '领军出征'
                          : E.officerAvailable(g, o.id)
                            ? '本阵待命'
                            : `休整 ${E.restRemaining(g, o.id)} 回合`}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              {!visibleOfficers.length && (
                <div className="roster-empty">
                  没有找到对应武将，试试其他姓名或势力。
                </div>
              )}
              <div className="note-panel">
                <Flag />
                <p>
                  统率决定带兵上限；战力综合统率45%、武力35%、智略20%。智略还能节省行军军粮和内政金钱。执行一次指令后，下回合休整，再下一回合可用。
                </p>
              </div>
            </section>
          )}
          {view === 'chronicle' && (
            <section className="chronicle-view">
              {g.logs.map((l) => (
                <div className={`chronicle-item ${l.kind}`} key={l.id}>
                  <span>第 {l.turn} 回合</span>
                  <i />
                  <p>{l.text}</p>
                </div>
              ))}
            </section>
          )}
          <div className="world-bottom">
            <div className="legend">
              {(['wei', 'shu', 'wu', 'qun'] as const).map((f) => (
                <span key={f}>
                  <i style={{ background: E.FACTIONS[f].color }} />
                  {E.FACTIONS[f].name}
                  <b>{E.owned(g, f).length}</b>
                </span>
              ))}
            </div>
            <span className="map-note">战略示意图</span>
          </div>
        </main>
        <aside className="city-panel">
          <div className="city-panel-title">
            <span className="eyebrow">城 池 情 报</span>
            <span className={`ownership ${mine ? 'friendly' : ''}`}>
              {mine
                ? '我方领地'
                : city.owner === 'qun'
                  ? '群雄割据'
                  : '敌方领地'}
            </span>
          </div>
          <div className="city-name-row">
            <div>
              <h2>{city.name}</h2>
              <p>
                <Flag size={13} /> {E.FACTIONS[city.owner].name}势力
                {city.occupation > 0 && (
                  <span className="occupation">安民中 · 产出减半</span>
                )}
              </p>
            </div>
            <div
              className="city-emblem"
              style={{ color: E.FACTIONS[city.owner].color }}
            >
              <Castle size={36} />
            </div>
          </div>
          <div className="garrison">
            <div>
              <span>城池驻军</span>
              <strong>
                {fmt(city.troops)}
                <small>兵</small>
              </strong>
            </div>
            <Users />
          </div>
          <div className="city-stats">
            <Stat label="士气" value={city.morale} />
            <Stat label="城防" value={city.wall} />
            <div className="economy-row">
              <span>
                <Wheat />
                农业 <b>Lv.{city.farm}</b>
              </span>
              <span>
                <Coins />
                商业 <b>Lv.{city.market}</b>
              </span>
            </div>
          </div>
          <div className="command-title">
            <h3>{mine ? '城池指令' : '城池概况'}</h3>
            <span>{mine ? '每次消耗 1 政令' : '沿道路进军此城'}</span>
          </div>
          {mine && (
            <div className="advisor-picker">
              <label htmlFor="administrator-select">执行武将</label>
              <Select
                value={administrator}
                onValueChange={(v) => setAdministrator(v || 'auto')}
              >
                <SelectTrigger
                  id="administrator-select"
                  className="game-select"
                >
                  <SelectValue>
                    {administrator === 'auto'
                      ? '自动择优任命'
                      : E.getOfficer(administrator)?.name || '选择武将'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">自动择优任命</SelectItem>
                  {available.map((o) => (
                    <SelectItem key={o.id} value={o.id}>
                      <Portrait officer={o} className="option-avatar" />
                      {o.name} · 智 {o.int}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {mine ? (
            <div className="actions">
              {(Object.keys(E.ACTIONS) as Action[]).map((type) => {
                const a = E.ACTIONS[type],
                  Icon = icons[type],
                  error = actionDisabled(type),
                  quote = E.actionQuote(
                    g,
                    type,
                    selected,
                    g.player,
                    administrator,
                  );
                return (
                  <button
                    className="action-button"
                    disabled={!!error}
                    title={
                      typeof error === 'string'
                        ? error
                        : `${a.description} · ${quote.officer?.name || '无可用武将'}执行 · 智略减费${quote.discount}%`
                    }
                    key={type}
                    onClick={() =>
                      update(
                        (s) => E.act(s, type, selected, administrator),
                        `${quote.officer?.name}执行：${a.description}，休整至第${g.turn + 2}回合。`,
                      )
                    }
                  >
                    <span className="action-icon">
                      <Icon size={18} />
                    </span>
                    <span>
                      <strong>{a.name}</strong>
                      <small>
                        {quote.officer?.name || '等待武将'} ·{' '}
                        {type === 'farm'
                          ? '农业 +1'
                          : type === 'market'
                            ? '商业 +1'
                            : type === 'recruit'
                              ? '兵 +2,500'
                              : type === 'train'
                                ? '士气 +12'
                                : '城防 +12'}
                      </small>
                    </span>
                    <span className="action-cost">
                      {quote.gold}
                      <Coins size={12} />
                    </span>
                  </button>
                );
              })}
              <button
                className="march-button"
                disabled={
                  g.ap < 1 ||
                  city.troops < 2000 ||
                  !available.length ||
                  g.status !== 'playing' ||
                  busy
                }
                onClick={() => openMarch()}
              >
                <Swords size={18} /> 调兵出征 <ArrowRight size={17} />
              </button>
            </div>
          ) : (
            <div className="enemy-actions">
              <p>从相邻的己方城池派遣军队，战胜守军即可占领。</p>
              {myCities
                .filter((c) => E.neighbors(c.id).includes(selected))
                .map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      const destination = selected;
                      setSelected(c.id);
                      setTarget(destination);
                      const best = available
                        .slice()
                        .sort((a, b) => E.combatSkill(b) - E.combatSkill(a))[0];
                      setOfficer(best?.id || '');
                      setTroops(
                        Math.max(
                          1000,
                          Math.floor(((c.troops - 1000) * 0.8) / 1000) * 1000,
                        ),
                      );
                      setAttack(true);
                    }}
                  >
                    <Swords size={17} />
                    <span>从{c.name}出征</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              {!myCities.some((c) => E.neighbors(c.id).includes(selected)) && (
                <small>尚无相邻的己方城池，需先打通道路。</small>
              )}
            </div>
          )}
          <div className="domination">
            <div>
              <span>天下归心</span>
              <b>
                {myCities.length}
                <small> / 15 城</small>
              </b>
            </div>
            <div className="domination-track">
              <i style={{ width: `${(myCities.length / 15) * 100}%` }} />
            </div>
            <p>占领全部城池，即可一统天下</p>
          </div>
        </aside>
      </div>
      <footer className="command-bar">
        <div className="date-block">
          <Sun />
          <div>
            <strong>{E.dateLabel(g.turn)}</strong>
            <span>
              第 {g.turn} 回合 ·{' '}
              {
                [
                  '春',
                  '春',
                  '春',
                  '夏',
                  '夏',
                  '夏',
                  '秋',
                  '秋',
                  '秋',
                  '冬',
                  '冬',
                  '冬',
                ][(g.turn - 1) % 12]
              }
            </span>
          </div>
        </div>
        <div className="latest-report">
          <span>
            <ScrollText size={14} /> 军 情
          </span>
          <p title={g.logs[0]?.text}>
            {g.logs.find((l) => l.kind === 'war')?.text || g.logs[0]?.text}
          </p>
        </div>
        <div className="ap-block">
          <span>
            剩余政令{' '}
            <b>
              {g.ap}
              <small> / {E.maxAP(g)}</small>
            </b>
          </span>
          <div>
            {Array.from({ length: E.maxAP(g) }, (_, i) => (
              <i key={i} className={i < g.ap ? 'filled' : ''} />
            ))}
          </div>
        </div>
        <button
          className="end-turn"
          disabled={busy || setup || g.status !== 'playing'}
          onClick={nextTurn}
        >
          <span>{busy ? '战局推演中…' : '结束回合'}</span>
          <ChevronRight size={20} />
        </button>
      </footer>
      <div className="status-bar">
        <output aria-live="polite">{notice}</output>
        <span>
          <Check size={12} />
          {saving}
        </span>
      </div>
      <Dialog open={setup} onOpenChange={setSetup}>
        <DialogContent
          className="game-dialog setup-dialog"
          showCloseButton={false}
        >
          <div className="setup-top">
            <span className="eyebrow">建安十三年 · 英雄集结</span>
            <DialogTitle>逐鹿天下</DialogTitle>
            <DialogDescription>
              山河未定，英雄并起。择一方势力，书写你的三国。
            </DialogDescription>
          </div>
          <div className="faction-options">
            {E.PLAYABLE.map((f) => (
              <button
                key={f}
                className={f === faction ? 'chosen' : ''}
                style={{ '--faction': E.FACTIONS[f].color } as CSSProperties}
                onClick={() => setFaction(f)}
                aria-pressed={f === faction}
              >
                <Portrait
                  officer={E.FACTIONS[f].officers[0]}
                  className="faction-portrait"
                />
                <h3>{E.FACTIONS[f].name}</h3>
                <small>{E.FACTIONS[f].title}</small>
                <p>{E.FACTIONS[f].desc}</p>
                <span className="faction-choice">
                  {f === faction ? (
                    <>
                      <Check size={14} />
                      已选择
                    </>
                  ) : (
                    '选择势力'
                  )}
                </span>
              </button>
            ))}
          </div>
          <button className="gold-button" onClick={start}>
            起 兵 出 征 <ArrowRight size={18} />
          </button>
          <p className="setup-footnote">108 位名将 · 原创头像 · 三方均衡开局</p>
        </DialogContent>
      </Dialog>
      <Dialog open={attack} onOpenChange={setAttack}>
        <DialogContent className="game-dialog march-dialog">
          <DialogTitle>
            <Swords size={22} /> 调兵出征
          </DialogTitle>
          <DialogDescription>
            由{city.name}出发，结束本回合后抵达。出征消耗 1 政令。
          </DialogDescription>
          <label className="field-label" htmlFor="march-target">
            目标城池
          </label>
          <Select value={target} onValueChange={(v) => setTarget(v || '')}>
            <SelectTrigger id="march-target" className="game-select">
              <SelectValue>
                {targetCity
                  ? `${targetCity.name} · ${targetCity.owner === g.player ? '友军增援' : E.FACTIONS[targetCity.owner].name + '势力'} · ${fmt(targetCity.troops)}兵`
                  : '选择城池'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {targets.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name} ·{' '}
                  {c.owner === g.player ? '友军' : E.FACTIONS[c.owner].name} ·{' '}
                  {fmt(c.troops)}兵
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label className="field-label" htmlFor="march-officer">
            领军武将
          </label>
          <Select value={officer} onValueChange={(v) => setOfficer(v || '')}>
            <SelectTrigger id="march-officer" className="game-select">
              <SelectValue>
                {available.find((o) => o.id === officer)?.name || '无可用武将'}
                {available.find((o) => o.id === officer)
                  ? ` · 统率 ${available.find((o) => o.id === officer)?.command}`
                  : ''}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {available.map((o) => (
                <SelectItem key={o.id} value={o.id}>
                  <Portrait officer={o} className="option-avatar" />
                  {o.name} · 统{o.command} 武{o.war} 智{o.int}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {chosenOfficer && (
            <div className="commander-summary">
              <Portrait officer={chosenOfficer} />
              <div>
                <b>{chosenOfficer.name}</b>
                <span>
                  {chosenOfficer.specialty} · {chosenOfficer.role}
                </span>
                <small>
                  带兵上限 {fmt(E.leaderCapacity(chosenOfficer))} · 军粮节省{' '}
                  {Math.round(chosenOfficer.int * 0.2)}%
                </small>
              </div>
            </div>
          )}
          <div className="troop-picker">
            <span className="troop-label">出征兵力</span>
            <strong>
              {fmt(troops)}
              <small> 兵</small>
            </strong>
          </div>
          <Slider
            aria-label="出征兵力"
            value={[troops]}
            onValueChange={(v) => setTroops(Array.isArray(v) ? v[0] : v)}
            min={1000}
            max={marchLimit}
            step={500}
            disabled={city.troops < 2000}
          />
          <div className="slider-labels">
            <span>1,000</span>
            <span>留守 {fmt(city.troops - troops)} 兵</span>
          </div>
          {targetCity && (
            <div
              className={`forecast ${targetCity.owner === g.player || forecast?.win ? 'favorable' : 'risky'}`}
            >
              <span>
                {targetCity.owner === g.player
                  ? '友军增援'
                  : forecast?.win
                    ? '预计胜势'
                    : '预计失利'}
              </span>
              <strong>
                {targetCity.owner === g.player
                  ? '合兵一处，守望相助'
                  : forecast?.win
                    ? `预计余部 ${fmt(forecast.survivors)} 兵`
                    : `预计撤回 ${fmt(forecast?.retreat || 0)} 兵`}
              </strong>
              <small>
                军粮消耗{' '}
                {fmt(chosenOfficer ? E.marchFood(troops, chosenOfficer) : 0)} ·
                政令 1
              </small>
              <p>其他部队的抵达可能改变最终战况。</p>
            </div>
          )}
          <button
            className="gold-button"
            disabled={
              !!E.marchError(g, selected, target, troops, officer) || busy
            }
            onClick={() => {
              update(
                (s) => E.march(s, selected, target, troops, officer),
                '军令已下，部队将在结束回合后抵达。',
              );
              setAttack(false);
            }}
          >
            确认出征 <Flag size={17} />
          </button>
          {E.marchError(g, selected, target, troops, officer) && (
            <p className="form-error">
              {E.marchError(g, selected, target, troops, officer)}
            </p>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={help} onOpenChange={setHelp}>
        <DialogContent className="game-dialog help-dialog">
          <DialogTitle>军师锦囊</DialogTitle>
          <DialogDescription>内修政理，外御强敌。</DialogDescription>
          <Tabs defaultValue="rules">
            <TabsList>
              <TabsTrigger value="rules">玩法说明</TabsTrigger>
              <TabsTrigger value="saves">存档管理</TabsTrigger>
            </TabsList>
            <TabsContent value="rules">
              <ol className="rules">
                <li>
                  <b>经营城池</b>
                  <p>
                    金钱与军粮在回合结束时入库。发展商贸增加金钱，开垦农田增加军粮。兵卒每回合消耗军粮。指定谋士办理内政可节省至多20%金钱。新占城池连续两次结算产出减半。
                  </p>
                </li>
                <li>
                  <b>整军备战</b>
                  <p>
                    征兵增加 2,500
                    兵力，会稀释老兵士气；练兵与修城各提升12点。3道政令在占领8城、13城时分别增加至4道、5道。
                  </p>
                </li>
                <li>
                  <b>调兵遣将</b>
                  <p>
                    点击己方城池，选择「调兵出征」。只能沿道路进军相邻城池，也能向友城增援。至少留守
                    1,000
                    兵，每支部队受主将统率限制。武将执行军令后，下回合休整。
                  </p>
                </li>
                <li>
                  <b>推进战局</b>
                  <p>
                    结束回合后电脑势力同时下令，部队依轮换先后次序抵达并结算；对向行军不在途中交战。占领全部
                    15 城且无敌军在外，即获胜。
                  </p>
                </li>
              </ol>
              <p className="prototype-note">
                均衡开局：三方各3城、36,000兵、4,200金、18,000粮；行军道路与中立城防守对称，公平争夺荆州。旧存档保留原战局，新数值即时生效。
                <br />
                本作是受经典三国策略游戏启发的原创简化原型，采用架空英雄集结剧本；不包含《三国志11》的原版素材与完整系统。
              </p>
            </TabsContent>
            <TabsContent value="saves">
              <div className="save-panel">
                <Save size={30} />
                <h3>随时收兵，随时再战</h3>
                <p>
                  每次行动后自动保存到当前浏览器。可导出 JSON
                  存档备份，或带到另一台设备继续。导入会替换当前战局。
                </p>
                <button className="gold-button" onClick={exportSave}>
                  <Download size={17} />
                  导出当前存档
                </button>
                <button
                  className="outline-button"
                  onClick={() => imported.current?.click()}
                >
                  <Upload size={17} />
                  导入存档
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!detail}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent className="game-dialog officer-detail-dialog">
          {detail && (
            <>
              <div className="officer-detail-top">
                <Portrait officer={detail} />
                <div>
                  <span className="eyebrow">
                    {E.FACTIONS[detail.faction].name}势力 · {detail.specialty}
                  </span>
                  <DialogTitle>{detail.name}</DialogTitle>
                  <DialogDescription>{detail.role}</DialogDescription>
                  <span className="detail-status">
                    {E.officerAvailable(g, detail.id)
                      ? '本阵待命'
                      : `休整至第 ${g.officerReadyAt[detail.id] || g.turn + 1} 回合`}
                  </span>
                </div>
              </div>
              <div className="detail-stats">
                {(
                  [
                    ['统率', detail.command],
                    ['武力', detail.war],
                    ['智略', detail.int],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <div>
                      <i style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="detail-benefits">
                <p>
                  <b>统兵上限</b>
                  <span>{fmt(E.leaderCapacity(detail))} 兵</span>
                </p>
                <p>
                  <b>综合统军</b>
                  <span>{E.combatSkill(detail).toFixed(1)} / 99</span>
                </p>
                <p>
                  <b>行军节粮</b>
                  <span>{Math.round(detail.int * 0.2)}%</span>
                </p>
                <p>
                  <b>内政减费</b>
                  <span>
                    {Math.round(
                      Math.min(0.2, Math.max(0, detail.int - 50) * 0.004) * 100,
                    )}
                    %
                  </span>
                </p>
              </div>
              <p className="prototype-note">
                统率、武力、智略共同决定出征战力。可在城池指令中任命内政武将，或在出征时选为主将。数值为本作原创设定。
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      <input
        type="file"
        accept=".json,application/json"
        hidden
        ref={imported}
        onChange={(event) => void importSave(event.target.files?.[0])}
      />
      <AlertDialog open={restart} onOpenChange={setRestart}>
        <AlertDialogContent className="game-dialog">
          <AlertDialogTitle>另启新局</AlertDialogTitle>
          <AlertDialogDescription>
            当前自动存档将被新战局替换。需要保留时，请先导出存档。
          </AlertDialogDescription>
          <div className="confirm-buttons">
            <AlertDialogCancel>继续当前战局</AlertDialogCancel>
            <button
              className="gold-button"
              onClick={() => {
                setRestart(false);
                setSetup(true);
              }}
            >
              选择新势力
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={g.status !== 'playing' && !setup} onOpenChange={() => {}}>
        <DialogContent
          className="game-dialog result-dialog"
          showCloseButton={false}
        >
          <Flag size={44} />
          <DialogTitle>
            {g.status === 'won' ? '山河一统' : '卷土重来'}
          </DialogTitle>
          <DialogDescription>
            {g.status === 'won'
              ? `${me.name}历经 ${g.turn - 1} 回合，终使十五城尽归一统。`
              : '城池已失，壮志未酬。整顿兵马，再争天下。'}
          </DialogDescription>
          <button className="gold-button" onClick={() => setSetup(true)}>
            再启征程 <ArrowRight size={18} />
          </button>
          <button className="outline-button" onClick={exportSave}>
            导出此役存档
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-row">
      <span>{label}</span>
      <div>
        <i style={{ width: `${value}%` }} />
      </div>
      <b>
        {value}
        <small> / 100</small>
      </b>
    </div>
  );
}
