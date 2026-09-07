'use client';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Undo2,
  Lightbulb,
  Move3D,
  MousePointer2,
  Check,
  Box,
  Grid2X2,
  Expand,
  Minimize,
  Leaf,
  Sparkles,
  CircleHelp,
  Save,
  Target,
  Timer,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import PuzzleScene from '@/components/PuzzleScene';
import {
  GAMES,
  NAMES,
  canSlide,
  canRemove,
  nextRemoval,
  solvedBoard,
} from '@/lib/game';
import type { GameId, Snapshot, LockPiece } from '@/lib/game';
import boardData from '@/lib/boards.json';
import lockData from '@/lib/lock.json';
const PIECES = lockData as LockPiece[];
const initial = (id: GameId): Snapshot => ({
  removed: [],
  exits: {},
  board: structuredClone(
    id === 'huarong-classic' ? boardData.classic : boardData.beginner,
  ),
  moves: 0,
});
const formatTime = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
const directionName = (axis: number, sign: number) =>
  ['X', 'Y', 'Z'][axis] + (sign > 0 ? '＋' : '－');
type Hint = { id: string; dx: number; dy: number };
function validSave(s: unknown): s is Snapshot {
  if (!s || typeof s !== 'object') return false;
  const a = s as Snapshot;
  if (
    !Array.isArray(a.removed) ||
    a.removed.some((id) => !PIECES.some((p) => p.id === id)) ||
    new Set(a.removed).size !== a.removed.length ||
    !a.exits ||
    typeof a.exits !== 'object' ||
    !Number.isInteger(a.moves) ||
    a.moves < 0 ||
    !Array.isArray(a.board) ||
    a.board.length !== 10
  )
    return false;
  const cells = new Set<string>();
  const ids = new Set<string>();
  for (const p of a.board) {
    const base = boardData.classic.find((q) => q.id === p.id);
    if (
      !base ||
      ids.has(p.id) ||
      p.w !== base.w ||
      p.h !== base.h ||
      !Number.isInteger(p.x) ||
      !Number.isInteger(p.y) ||
      p.x < 0 ||
      p.y < 0 ||
      p.x + p.w > 4 ||
      p.y + p.h > 5
    )
      return false;
    ids.add(p.id);
    for (let x = p.x; x < p.x + p.w; x++)
      for (let y = p.y; y < p.y + p.h; y++) {
        const k = x + ',' + y;
        if (cells.has(k)) return false;
        cells.add(k);
      }
  }
  return true;
}
export default function Home() {
  const [gameId, setGameId] = useState<GameId>('lock');
  const [snap, setSnap] = useState<Snapshot>(() => initial('lock'));
  const [history, setHistory] = useState<Snapshot[]>([]);
  const [selected, setSelected] = useState<number | string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState<Hint | null>(null);
  const [thinking, setThinking] = useState(false);
  const [dialog, setDialog] = useState<'help' | 'culture' | 'success' | null>(
    null,
  );
  const [view, setView] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const requestRef = useRef(0);
  const messageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const game = GAMES.find((g) => g.id === gameId)!;
  const isLock = gameId === 'lock';
  const complete = isLock
    ? snap.removed.length === PIECES.length
    : solvedBoard(snap.board);
  const selectedPiece = isLock ? PIECES.find((p) => p.id === selected) : null;
  const tell = useCallback((text: string) => {
    setMessage(text);
    if (messageTimer.current) clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setMessage(''), 4400);
  }, []);
  // Read device-local progress after hydration; ignore a pending read after unmount.
  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      try {
        const data = JSON.parse(
          localStorage.getItem('sunjing:last-game') || 'null',
        );
        if (
          data &&
          GAMES.some((g) => g.id === data.gameId) &&
          validSave(data.snap)
        ) {
          setGameId(data.gameId);
          setSnap(data.snap);
          setSeconds(
            Number.isFinite(data.seconds)
              ? Math.max(0, Math.floor(data.seconds))
              : 0,
          );
          setStarted(data.snap.moves > 0);
        }
      } catch {}
      setHydrated(true);
    });
    return () => {
      active = false;
      if (messageTimer.current) clearTimeout(messageTimer.current);
    };
  }, []);
  // Persist the current position and report storage availability.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        'sunjing:last-game',
        JSON.stringify({ gameId, snap, seconds }),
      );
      queueMicrotask(() => setSaved(true));
    } catch {
      queueMicrotask(() => setSaved(false));
    }
  }, [gameId, snap, seconds, hydrated]);
  useEffect(() => {
    if (!started || complete || dialog) return;
    const t = setInterval(() => {
      if (!document.hidden) setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(t);
  }, [started, complete, dialog]);
  useEffect(() => {
    const listener = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', listener);
    return () => document.removeEventListener('fullscreenchange', listener);
  }, []);
  useEffect(() => () => workerRef.current?.terminate(), []);
  function cancelHint() {
    requestRef.current++;
    workerRef.current?.terminate();
    workerRef.current = null;
    setThinking(false);
    setHint(null);
  }
  function record(next: Snapshot) {
    cancelHint();
    setHistory((h) => [...h, snap]);
    setSnap(next);
    setStarted(true);
    if (
      isLock ? next.removed.length === PIECES.length : solvedBoard(next.board)
    )
      setDialog('success');
  }
  function select(id: number | string) {
    setSelected(id);
    setMessage('');
    setStarted(true);
  }
  function remove(sign: number) {
    if (!isLock || complete) return;
    if (typeof selected !== 'number') {
      tell('先点击一根木块，或选择右侧的编号。');
      return;
    }
    const result = canRemove(PIECES, snap.removed, selected, sign);
    if (!result.ok) {
      tell(
        `暂时卡住了。${String((result.blocker ?? 0) + 1).padStart(2, '0')} 号木挡住了这条路径，换个顺序试试。`,
      );
      return;
    }
    record({
      ...snap,
      removed: [...snap.removed, selected],
      exits: { ...snap.exits, [selected]: sign },
      moves: snap.moves + 1,
    });
    setSelected(null);
    tell(
      `${String(selected + 1).padStart(2, '0')} 号木已取出。再观察一下新的空隙。`,
    );
  }
  function slide(id: string, dx: number, dy: number) {
    if (isLock || complete) return;
    if (!canSlide(snap.board, id, dx, dy)) {
      tell('这个方向没有足够的空位，再看看旁边。');
      return;
    }
    record({
      ...snap,
      board: snap.board.map((p) =>
        p.id === id ? { ...p, x: p.x + dx, y: p.y + dy } : p,
      ),
      moves: snap.moves + 1,
    });
    setSelected(id);
    setMessage('');
  }
  function moveSelected(dx: number, dy: number) {
    if (typeof selected === 'string') slide(selected, dx, dy);
    else tell('先选择一枚棋子，再按方向移动。');
  }
  function undo() {
    if (!history.length) return;
    cancelHint();
    const last = history[history.length - 1];
    setSnap(last);
    setHistory((h) => h.slice(0, -1));
    setSelected(null);
    setMessage('');
    setDialog(null);
  }
  function reset() {
    cancelHint();
    setSnap(initial(gameId));
    setHistory([]);
    setSelected(null);
    setSeconds(0);
    setStarted(false);
    setMessage('');
    setDialog(null);
    setView((v) => v + 1);
  }
  function switchGame(id: GameId) {
    if (id === gameId) {
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    cancelHint();
    setGameId(id);
    setSnap(initial(id));
    setHistory([]);
    setSelected(null);
    setSeconds(0);
    setStarted(false);
    setMessage('');
    setZoom(100);
    setView((v) => v + 1);
  }
  function showHint() {
    if (complete) return;
    if (isLock) {
      const next = nextRemoval(PIECES, snap.removed);
      if (next) {
        setSelected(next.id);
        const p = PIECES.find((p) => p.id === next.id)!;
        tell(
          `试试 ${String(next.id + 1).padStart(2, '0')} 号木，沿 ${directionName(p.axis, next.sign)} 方向抽出。`,
        );
      }
      return;
    }
    if (hint) {
      slide(hint.id, hint.dx, hint.dy);
      return;
    }
    cancelHint();
    setThinking(true);
    const request = ++requestRef.current;
    try {
      const worker = new Worker('/solver-worker.js');
      workerRef.current = worker;
      worker.onmessage = ({ data }) => {
        if (data.request !== requestRef.current) return;
        setThinking(false);
        worker.terminate();
        workerRef.current = null;
        const next = data.result?.moves?.[0];
        if (next) {
          setHint(next);
          setSelected(next.id);
        } else
          tell(
            data.error
              ? '暂时没能计算提示，请再试一次。'
              : '当前局面没有找到解法，可以撤销后再试。',
          );
      };
      worker.onerror = () => {
        setThinking(false);
        worker.terminate();
        workerRef.current = null;
        tell('提示计算暂时不可用，请再试一次。');
      };
      worker.postMessage({ request, board: snap.board });
    } catch {
      setThinking(false);
      tell('浏览器暂时无法计算提示。');
    }
  }
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (stageRef.current?.requestFullscreen)
        await stageRef.current.requestFullscreen();
      else tell('当前浏览器不支持全屏，可以使用右上角放大。');
    } catch {
      tell('当前浏览器未能进入全屏，可以使用右上角放大。');
    }
  }
  useEffect(() => {
    function keydown(e: KeyboardEvent) {
      if (
        dialog ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        (e.target instanceof HTMLElement &&
          (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) ||
            e.target.closest('[role="slider"]')))
      )
        return;
      if (e.key === 'Escape') {
        setSelected(null);
        return;
      }
      if (e.key === 'r' || e.key === 'R') {
        reset();
        return;
      }
      if (e.key === 'z' || e.key === 'Z') {
        undo();
        return;
      }
      if (isLock) {
        if (/^[1-6]$/.test(e.key)) {
          const id = Number(e.key) - 1;
          if (PIECES.some((p) => p.id === id) && !snap.removed.includes(id))
            select(id);
        }
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          e.preventDefault();
          remove(1);
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          e.preventDefault();
          remove(-1);
        }
      } else {
        const d: Record<string, number[]> = {
          ArrowUp: [0, -1],
          ArrowDown: [0, 1],
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0],
        };
        if (d[e.key] && typeof selected === 'string') {
          e.preventDefault();
          moveSelected(d[e.key][0], d[e.key][1]);
        }
      }
    }
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  });
  const hintText = hint
    ? `${NAMES[hint.id]}向${hint.dx > 0 ? '右' : hint.dx < 0 ? '左' : hint.dy > 0 ? '下' : '上'}移动一格。`
    : '';
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="榫境首页">
          <span className="brand-mark">榫</span>
          <div>
            <div className="brand-name serif">榫境</div>
            <div className="brand-en">SUNJING PUZZLES</div>
          </div>
        </Link>
        <nav className="topnav" aria-label="主导航">
          <button
            className="nav-item active"
            onClick={() =>
              stageRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }
          >
            解谜工坊
          </button>
          <button
            className="nav-item nav-culture"
            onClick={() => setDialog('culture')}
          >
            榫卯小记
          </button>
          <button className="nav-item" onClick={() => setDialog('help')}>
            玩法指南 <ArrowUpRight size={13} />
          </button>
        </nav>
        <div className="header-meta">
          <i className="status-dot" />
          <span>慢一点，巧一点。</span>
          <button
            className="round-button"
            aria-label="查看操作帮助"
            onClick={() => setDialog('help')}
          >
            <CircleHelp size={16} />
          </button>
        </div>
      </header>
      <main>
        <div className="intro">
          <div>
            <div className="eyebrow">THE ART OF UNLOCKING</div>
            <h1 className="serif">解一方木，得一方趣。</h1>
            <p>转动、观察、尝试。让古老巧思，在指尖重新发生。</p>
          </div>
          <div className="intro-note">
            <Leaf size={14} /> 不赶时间，只动脑筋
          </div>
        </div>
        <div className="workbench">
          <section
            className={`stage ${isLock ? '' : 'board-stage'}`}
            ref={stageRef}
            aria-label="三维游戏区域"
          >
            <div className="stage-top">
              <span className="stage-pill">
                <i className="status-dot" /> {isLock ? '榫卯机关' : '移动棋局'}
              </span>
              <span className="stage-pill">
                {isLock ? '360° 自由探索' : '3D 木作棋盘'}
              </span>
            </div>
            <span className="stage-overline">{game.label}</span>
            <span className="stage-watermark" aria-hidden="true">
              {isLock ? '榫卯之趣' : '方寸乾坤'}
            </span>
            <PuzzleScene
              pieces={PIECES}
              mode={isLock ? 'lock' : 'huarong'}
              removed={snap.removed}
              exits={snap.exits}
              board={snap.board}
              selected={selected}
              onSelect={select}
              onSlide={slide}
              resetView={view}
              zoom={zoom}
            />
            <div className="scene-tools">
              <button
                className="scene-tool"
                aria-label="缩小木作"
                title="缩小"
                onClick={() => setZoom((z) => Math.max(70, z - 10))}
                disabled={zoom <= 70}
              >
                <span>−</span>
              </button>
              <button
                className="scene-tool"
                aria-label="放大木作"
                title="放大"
                onClick={() => setZoom((z) => Math.min(140, z + 10))}
                disabled={zoom >= 140}
              >
                <span>＋</span>
              </button>
              <button
                className="scene-tool"
                aria-label={fullscreen ? '退出全屏' : '全屏查看'}
                title="全屏"
                onClick={toggleFullscreen}
              >
                {fullscreen ? <Minimize /> : <Expand />}
              </button>
            </div>
            <div className="stage-caption">
              {game.stage}
              <small>{game.english}</small>
            </div>
            {message && <output className="stage-status">{message}</output>}
            <div className="zoom-slider">
              <div className="zoom-label">ZOOM {zoom}%</div>
              <Slider
                aria-label="模型缩放"
                min={70}
                max={140}
                step={5}
                value={[zoom]}
                onValueChange={(v) => setZoom(Array.isArray(v) ? v[0] : v)}
              />
            </div>
            <div className="stage-bottom">
              <span className="gesture-note">
                <MousePointer2 size={14} />
                {isLock ? '拖动旋转 · 点击选择木块' : '点击选择 · 轻扫移动棋子'}
              </span>
              <button
                className="view-reset"
                onClick={() => {
                  setView((v) => v + 1);
                  setZoom(100);
                }}
              >
                <RotateCcw />
                还原视角
              </button>
            </div>
          </section>
          <aside
            className={`panel ${isLock ? '' : 'huarong-panel'}`}
            aria-label="解谜控制台"
          >
            <div className="panel-head-section">
              <div className="panel-heading">
                <span className="eyebrow">
                  PUZZLE{' '}
                  {GAMES.findIndex((g) => g.id === gameId) + 1 < 10 ? '0' : ''}
                  {GAMES.findIndex((g) => g.id === gameId) + 1}
                </span>
                <span className="level-tag">{game.level}</span>
              </div>
              <h2 className="serif">{isLock ? '孔明锁' : '华容道'}</h2>
              <p className="panel-desc">{game.objective}</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-label">
                    {isLock ? '已解木块' : '当前步数'}
                  </span>
                  <span className="stat-value">
                    {isLock ? snap.removed.length : snap.moves}
                    <small>{isLock ? `/ ${PIECES.length}` : '步'}</small>
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-label">用时</span>
                  <span className="stat-value">{formatTime(seconds)}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">{isLock ? '步数' : '目标'}</span>
                  <span className="stat-value">
                    {isLock ? snap.moves : <Target size={18} />}
                  </span>
                </div>
              </div>
            </div>
            <div className="panel-controls">
              <div className="section-label">
                {isLock ? '选择一根木块' : '选择一枚棋子'}
                <span>
                  {isLock
                    ? '编号 01—' + String(PIECES.length).padStart(2, '0')
                    : '也可点击棋盘'}
                </span>
              </div>
              {isLock ? (
                <>
                  <div className="piece-grid">
                    {PIECES.map((p) => (
                      <button
                        key={p.id}
                        aria-label={`${p.id + 1} 号木${snap.removed.includes(p.id) ? '，已取出' : ''}`}
                        aria-pressed={selected === p.id}
                        disabled={snap.removed.includes(p.id) || complete}
                        className={`piece-button ${selected === p.id ? 'selected' : ''} ${snap.removed.includes(p.id) ? 'removed' : ''}`}
                        onClick={() => select(p.id)}
                      >
                        {snap.removed.includes(p.id) ? (
                          <Check />
                        ) : (
                          String(p.id + 1).padStart(2, '0')
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="move-controls">
                    <button
                      className="move-button"
                      disabled={!selectedPiece || complete}
                      onClick={() => remove(-1)}
                    >
                      <ArrowLeft />{' '}
                      {selectedPiece
                        ? directionName(selectedPiece.axis, -1)
                        : '反向'}{' '}
                      抽出
                    </button>
                    <button
                      className="move-button"
                      disabled={!selectedPiece || complete}
                      onClick={() => remove(1)}
                    >
                      {selectedPiece
                        ? directionName(selectedPiece.axis, 1)
                        : '正向'}{' '}
                      抽出 <ArrowRight />
                    </button>
                  </div>
                  <p className="selected-label">
                    {selectedPiece
                      ? `已选 ${String(selectedPiece.id + 1).padStart(2, '0')} 号木 · 沿木块长轴尝试抽出`
                      : '细看交接处，找到第一根可以活动的木。'}
                  </p>
                </>
              ) : (
                <>
                  <div className="huarong-selector">
                    {snap.board.map((p) => (
                      <button
                        key={p.id}
                        aria-pressed={selected === p.id}
                        className={selected === p.id ? 'selected' : ''}
                        disabled={complete}
                        onClick={() => select(p.id)}
                      >
                        {NAMES[p.id]}
                      </button>
                    ))}
                  </div>
                  <div className="direction-pad">
                    {[
                      { dx: 0, dy: -1, label: '向上', icon: <ArrowUp /> },
                      { dx: -1, dy: 0, label: '向左', icon: <ArrowLeft /> },
                      { dx: 0, dy: 1, label: '向下', icon: <ArrowDown /> },
                      { dx: 1, dy: 0, label: '向右', icon: <ArrowRight /> },
                    ].map((d) => (
                      <button
                        key={d.label}
                        aria-label={d.label}
                        className="move-button"
                        disabled={typeof selected !== 'string' || complete}
                        onClick={() => moveSelected(d.dx, d.dy)}
                      >
                        {d.icon}
                      </button>
                    ))}
                  </div>
                  {hint && (
                    <output className="hint-detail">
                      {hintText}点击「走这一步」尝试。
                    </output>
                  )}
                </>
              )}
            </div>
            <div className="panel-actions">
              <button
                className="hint-button"
                onClick={complete ? () => setDialog('success') : showHint}
                disabled={thinking}
              >
                {complete ? <Check /> : thinking ? <Timer /> : <Lightbulb />}
                {complete
                  ? '已解开，查看成果'
                  : thinking
                    ? '正在寻找解法…'
                    : hint
                      ? '走这一步'
                      : '给我一点提示'}
              </button>
              <div className="sub-actions">
                <button
                  className="text-action"
                  disabled={!history.length}
                  onClick={undo}
                >
                  <Undo2 />
                  撤销一步
                </button>
                <button className="text-action" onClick={reset}>
                  <RotateCcw />
                  重新开始
                </button>
              </div>
            </div>
            <div className="panel-foot">
              <Sparkles />
              {complete
                ? '巧思已解，下一方天地等你探索'
                : '每一次尝试，都是接近答案的一步'}
            </div>
          </aside>
        </div>
        <div className="under-stage">
          <div className="step-guide">
            <span>
              <b>1</b>
              {isLock ? '转动，观察结构' : '观察，找到空位'}
            </span>
            <span>
              <b>2</b>
              {isLock ? '点击，选中木块' : '点击，选中棋子'}
            </span>
            <span>
              <b>3</b>
              {isLock ? '抽出，解开机关' : '移动，打开出口'}
            </span>
          </div>
          <div className="auto-save">
            <Save />
            {saved ? '进度已保存在此设备' : '无需登录，即点即玩'}
          </div>
        </div>
        <section className="collection" aria-label="选择游戏">
          <div className="collection-head">
            <div className="collection-title">
              <h3 className="serif">一器一局，各有巧思</h3>
              <span>THE COLLECTION</span>
            </div>
            <span className="collection-note">探索 {GAMES.length} 个关卡</span>
          </div>
          <div className="cards">
            {GAMES.map((g, i) => (
              <button
                className={`game-card ${gameId === g.id ? 'active' : ''}`}
                key={g.id}
                onClick={() => switchGame(g.id)}
                aria-pressed={gameId === g.id}
              >
                <div className="card-emblem">
                  {i === 0 ? <Box /> : i === 1 ? <Grid2X2 /> : <Move3D />}
                </div>
                <div className="card-main">
                  <div className="card-top">
                    {i === 0 ? '空间解构' : i === 1 ? '轻松入门' : '经典挑战'}
                    <span
                      className="difficulty"
                      aria-label={`难度 ${g.difficulty} 级`}
                    >
                      {[1, 2, 3].map((n) => (
                        <i className={n <= g.difficulty ? 'on' : ''} key={n} />
                      ))}
                    </span>
                  </div>
                  <h4>{g.title}</h4>
                  <div className="card-sub">{g.desc}</div>
                </div>
                {gameId === g.id ? (
                  <Check className="card-arrow" />
                ) : (
                  <ArrowUpRight className="card-arrow" />
                )}
              </button>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <span className="footer-brand">
          <Leaf /> 榫境 SUNJING · 在指尖，遇见东方巧思
        </span>
        <span className="footer-text">以木为器 · 以巧为钥</span>
        <span>慢慢玩，慢慢解。</span>
      </footer>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent
          className={`modal-content ${dialog === 'success' ? 'success-content' : ''}`}
        >
          {dialog === 'help' && (
            <>
              <DialogTitle>动手之前，一点小窍门。</DialogTitle>
              <DialogDescription>
                当前局内的移动可以撤销。放心尝试，让每一步都有新发现。
              </DialogDescription>
              <Tabs
                defaultValue={isLock ? 'lock' : 'board'}
                className="settings-tabs"
              >
                <TabsList>
                  <TabsTrigger value="lock">孔明锁</TabsTrigger>
                  <TabsTrigger value="board">华容道</TabsTrigger>
                </TabsList>
                <TabsContent value="lock">
                  <div className="help-list">
                    <div className="help-step">
                      <b>1</b>
                      <div>
                        <strong>转一转，看清交接处</strong>
                        在展台上拖动鼠标或手指，观察每根木块。用 ＋ / −
                        调整大小。
                      </div>
                    </div>
                    <div className="help-step">
                      <b>2</b>
                      <div>
                        <strong>选一根，沿长轴试着抽出</strong>
                        点击木块或右侧编号，再点击正向 /
                        反向抽出。木块互相阻挡时，需要先找到关键木。
                      </div>
                    </div>
                    <div className="help-step">
                      <b>3</b>
                      <div>
                        <strong>取出全部木块，即可过关</strong>
                        数字键选择木块；方向键抽出；Z 撤销；R 重置。
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="board">
                  <div className="help-list">
                    <div className="help-step">
                      <b>1</b>
                      <div>
                        <strong>给曹操留出一条路</strong>
                        棋盘下方中央是出口。把曹操的 2 × 2
                        大方块移到那里，即可过关。
                      </div>
                    </div>
                    <div className="help-step">
                      <b>2</b>
                      <div>
                        <strong>每次移动一格，不可越过棋子</strong>
                        点击棋子后按方向按钮或键盘方向键，也可直接在棋子上轻扫。
                      </div>
                    </div>
                    <div className="help-step">
                      <b>3</b>
                      <div>
                        <strong>没有头绪时，用一点提示</strong>
                        系统会为当前局面寻找解法。再次点击「走这一步」即可执行提示；每移动一格计一步。
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <p className="note-block">
                当前关卡会自动保存在此设备。切换关卡会开启新的一局；重新开始会清空当前进度。
              </p>
            </>
          )}
          {dialog === 'culture' && (
            <>
              <span className="eyebrow">NOTES ON CRAFT</span>
              <DialogTitle>不施钉胶，自有乾坤。</DialogTitle>
              <DialogDescription>
                榫是凸出的部分，卯是与之相合的孔槽。形状彼此咬合，让木与木之间产生巧妙的约束。
              </DialogDescription>
              <div className="help-list">
                <div className="help-step">
                  <b>
                    <Box size={14} />
                  </b>
                  <div>
                    <strong>孔明锁 · 从结构里找答案</strong>
                    看似牢固的一体，往往藏着一个可以先行移动的构件。观察空隙，比用力更有用。
                  </div>
                </div>
                <div className="help-step">
                  <b>
                    <Grid2X2 size={14} />
                  </b>
                  <div>
                    <strong>华容道 · 为下一步留下空间</strong>
                    棋子不能越过彼此。先让路，再前进，有时暂时后退才能打开新的局面。
                  </div>
                </div>
              </div>
              <p className="note-block">
                本作孔明锁是基于榫卯互锁原理的教学改编，采用沿木块长轴抽出的规则。名称沿用民间称谓，不作特定历史人物发明或古物复原的认定。
              </p>
            </>
          )}
          {dialog === 'success' && (
            <>
              <div className="success-icon">
                <Check size={30} />
              </div>
              <span className="eyebrow">BEAUTIFULLY UNLOCKED</span>
              <DialogTitle>巧思已解，豁然开朗。</DialogTitle>
              <DialogDescription>
                你解开了「{game.title}」。
                <br />
                这次用了 {snap.moves} 步，{formatTime(seconds)}。
              </DialogDescription>
              <button
                className="hint-button"
                onClick={() => {
                  setDialog(null);
                  switchGame(
                    GAMES[
                      (GAMES.findIndex((g) => g.id === gameId) + 1) %
                        GAMES.length
                    ].id,
                  );
                }}
              >
                探索下一局 <ArrowRight />
              </button>
              <button
                className="text-action"
                style={{ justifyContent: 'center' }}
                onClick={reset}
              >
                <RotateCcw />
                再玩一次
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <output className="sr-only" aria-live="polite">
        {isLock
          ? `已取出 ${snap.removed.length} 根木块`
          : `已移动 ${snap.moves} 步`}
      </output>
    </div>
  );
}
