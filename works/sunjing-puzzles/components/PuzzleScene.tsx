'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import type { LockPiece, BoardPiece, Vec3 } from '@/lib/game';
import { NAMES } from '@/lib/game';

type Props = {
  pieces: LockPiece[];
  mode: 'lock' | 'huarong';
  removed: number[];
  exits: Record<number, number>;
  board: BoardPiece[];
  selected: number | string | null;
  onSelect: (id: number | string) => void;
  onSlide: (id: string, dx: number, dy: number) => void;
  resetView: number;
  zoom: number;
};
function voxelGeometry(cells: Vec3[]) {
  const occupied = new Set(cells.map((c) => c.join(',')));
  const positions: number[] = [],
    normals: number[] = [],
    uvs: number[] = [];
  const faces = [
    {
      n: [1, 0, 0],
      v: [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 1],
        [1, 0, 1],
      ],
    },
    {
      n: [-1, 0, 0],
      v: [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ],
    },
    {
      n: [0, 1, 0],
      v: [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
        [0, 1, 0],
      ],
    },
    {
      n: [0, -1, 0],
      v: [
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
      ],
    },
    {
      n: [0, 0, 1],
      v: [
        [1, 0, 1],
        [1, 1, 1],
        [0, 1, 1],
        [0, 0, 1],
      ],
    },
    {
      n: [0, 0, -1],
      v: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
      ],
    },
  ];
  for (const [x, y, z] of cells)
    for (const f of faces) {
      if (occupied.has([x + f.n[0], y + f.n[1], z + f.n[2]].join(',')))
        continue;
      for (const i of [0, 1, 2, 0, 2, 3]) {
        const v = f.v[i];
        positions.push((x + v[0]) * 0.48, (y + v[1]) * 0.48, (z + v[2]) * 0.48);
        normals.push(...f.n);
        uvs.push(v[0], v[1]);
      }
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.computeBoundingSphere();
  return g;
}
function woodMaterial(color: string, axis = 0) {
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.52,
    metalness: 0.015,
  });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader =
      'varying vec3 vWoodPosition;\n' +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvWoodPosition = position;',
      );
    const a =
      axis === 0
        ? 'vWoodPosition.y * 28.0 + vWoodPosition.z * 17.0'
        : 'vWoodPosition.x * 28.0 + ' +
          (axis === 1 ? 'vWoodPosition.z' : 'vWoodPosition.y') +
          ' * 17.0';
    const longitudinal =
      axis === 0
        ? 'vWoodPosition.x'
        : axis === 1
          ? 'vWoodPosition.y'
          : 'vWoodPosition.z';
    shader.fragmentShader =
      'varying vec3 vWoodPosition;\n' +
      shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>\nfloat grainCoord = ${a};\nfloat grain = sin(grainCoord + sin(${longitudinal} * 1.6 + grainCoord * .04) * 2.8);\nfloat fineGrain = sin(grainCoord * 4.3 + sin(${longitudinal} * 2.1) * 2.0);\ndiffuseColor.rgb *= .94 + grain * .055 + fineGrain * .025;`,
      );
  };
  m.customProgramCacheKey = () => `wood-${axis}`;
  return m;
}
function textTexture(
  text: string,
  bg: string | null,
  color: string,
  size = 48,
) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d')!;
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 256, 256);
  }
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${size}px "Songti SC", "STSong", serif`;
  ctx.fillText(text, 128, 130);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
export default function PuzzleScene(props: Props) {
  const host = useRef<HTMLDivElement>(null);
  const latest = useRef(props);
  useEffect(() => {
    latest.current = props;
  }, [props]);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    // WebGL setup is external I/O; report failure to the fallback UI.
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      queueMicrotask(() => setError(true));
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.32;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 80);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 7;
    controls.maxDistance = 19;
    controls.maxPolarAngle = Math.PI * 0.79;
    controls.minPolarAngle = 0.18;
    controls.rotateSpeed = 0.65;
    controls.enableRotate = props.mode === 'lock';
    controls.enableZoom = false;
    const setCamera = () => {
      if (props.mode === 'lock') {
        camera.position.set(8.5, 6.6, 9.5);
        controls.target.set(0, 0, 0);
      } else {
        camera.position.set(0, 11.5, 7);
        controls.target.set(0, 0, 0);
      }
      camera.zoom = latest.current.zoom / 100;
      camera.updateProjectionMatrix();
      controls.update();
    };
    setCamera();
    scene.add(new THREE.HemisphereLight(0xf4edd2, 0x718569, 2.1));
    const sun = new THREE.DirectionalLight(0xffe6b9, 4.2);
    sun.position.set(-3, 7, 5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -6;
    sun.shadow.camera.right = 6;
    sun.shadow.camera.top = 6;
    sun.shadow.camera.bottom = -6;
    sun.shadow.normalBias = 0.025;
    sun.shadow.bias = -0.001;
    sun.shadow.radius = 4;
    scene.add(sun);
    const rim = new THREE.DirectionalLight(0xc0d7b5, 1.8);
    rim.position.set(5, 3, -4);
    scene.add(rim);
    const objects = new Map<number | string, THREE.Group>();
    const pickable: THREE.Object3D[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];
    const trackMesh = (g: THREE.BufferGeometry, m: THREE.Material) => {
      geometries.push(g);
      materials.push(m);
      return new THREE.Mesh(g, m);
    };
    if (props.mode === 'lock') {
      const floor = trackMesh(
        new THREE.CircleGeometry(4.1, 96),
        new THREE.ShadowMaterial({ opacity: 0.24 }),
      );
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -2.45;
      floor.receiveShadow = true;
      scene.add(floor);
      for (const radius of [3.05, 3.15]) {
        const ring = trackMesh(
          new THREE.RingGeometry(radius, radius + 0.008, 100),
          new THREE.MeshBasicMaterial({
            color: 0x6b8266,
            transparent: true,
            opacity: 0.22,
            side: THREE.DoubleSide,
          }),
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = -2.4;
        scene.add(ring);
      }
      for (const p of props.pieces) {
        const group = new THREE.Group();
        const mesh = trackMesh(
          voxelGeometry(p.cells),
          woodMaterial(p.color, p.axis),
        );
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.piece = p.id;
        group.add(mesh);
        pickable.push(mesh);
        const edges = trackMesh(
          new THREE.EdgesGeometry(mesh.geometry, 35),
          new THREE.LineBasicMaterial({
            color: 0xd6e6b5,
            transparent: true,
            opacity: 0,
          }),
        );
        const lines = new THREE.LineSegments(
          edges.geometry,
          edges.material as THREE.LineBasicMaterial,
        );
        lines.name = 'selection';
        group.add(lines);
        const max = Math.max(...p.cells.map((c) => c[p.axis]));
        const end = p.cells.filter((c) => c[p.axis] === max);
        const center = [0, 0, 0];
        end.forEach((c) => c.forEach((v, i) => (center[i] += v / end.length)));
        center[p.axis] = max + 1.13;
        const labelTexture = textTexture(
          String(p.id + 1).padStart(2, '0'),
          null,
          '#584224',
          60,
        );
        textures.push(labelTexture);
        const lm = new THREE.MeshBasicMaterial({
          map: labelTexture,
          transparent: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -4,
        });
        materials.push(lm);
        const label = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.58), lm);
        geometries.push(label.geometry);
        label.position.set(
          ...(center.map(
            (v, i) => (v + (i === p.axis ? 0 : 0.5)) * 0.48,
          ) as Vec3),
        );
        if (p.axis === 0) label.rotation.y = Math.PI / 2;
        if (p.axis === 1) label.rotation.x = -Math.PI / 2;
        group.add(label);
        scene.add(group);
        objects.set(p.id, group);
      }
    } else {
      const board = trackMesh(
        new RoundedBoxGeometry(4.7, 0.22, 5.7, 3, 0.09),
        woodMaterial('#725031', 2),
      );
      board.position.y = -0.22;
      board.receiveShadow = true;
      scene.add(board);
      const inset = trackMesh(
        new THREE.BoxGeometry(4.18, 0.07, 5.18),
        woodMaterial('#463c29', 2),
      );
      inset.position.y = -0.065;
      inset.receiveShadow = true;
      scene.add(inset);
      for (const [x, z, w, d] of [
        [-2.21, 0, 0.18, 5.6],
        [2.21, 0, 0.18, 5.6],
        [0, -2.71, 4.6, 0.18],
        [-1.69, 2.71, 1.23, 0.18],
        [1.69, 2.71, 1.23, 0.18],
      ]) {
        const rail = trackMesh(
          new RoundedBoxGeometry(w, 0.22, d, 2, 0.035),
          woodMaterial('#ad7e48', 2),
        );
        rail.position.set(x, 0.04, z);
        rail.castShadow = true;
        scene.add(rail);
      }
      const exitTex = textTexture('出 口', null, '#b8cca3', 42);
      textures.push(exitTex);
      const exit = trackMesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshBasicMaterial({
          map: exitTex,
          transparent: true,
          depthWrite: false,
        }),
      );
      exit.rotation.x = -Math.PI / 2;
      exit.position.set(0, -0.04, 3.08);
      scene.add(exit);
      for (const p of latest.current.board) {
        const group = new THREE.Group();
        const color =
          p.id === 'cao' ? '#b58d53' : p.id === 'guan' ? '#c3a16b' : '#d1b27b';
        const m = woodMaterial(color, 2);
        const mesh = trackMesh(
          new RoundedBoxGeometry(p.w - 0.1, 0.34, p.h - 0.1, 3, 0.045),
          m,
        );
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.piece = p.id;
        group.add(mesh);
        pickable.push(mesh);
        const tex = textTexture(
          NAMES[p.id],
          null,
          p.id === 'cao' ? '#523822' : '#665035',
          p.w === 2 ? 62 : 55,
        );
        textures.push(tex);
        const label = trackMesh(
          new THREE.PlaneGeometry(
            Math.min(p.w - 0.1, 1.7),
            Math.min(p.h - 0.1, 1.7),
          ),
          new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            depthWrite: false,
          }),
        );
        label.rotation.x = -Math.PI / 2;
        label.position.y = 0.178;
        group.add(label);
        group.position.set(p.x + p.w / 2 - 2, 0.17, p.y + p.h / 2 - 2.5);
        scene.add(group);
        objects.set(p.id, group);
      }
    }
    const ray = new THREE.Raycaster(),
      pointer = new THREE.Vector2();
    let start = { x: 0, y: 0, id: null as number | string | null };
    const hit = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.set(
        ((e.clientX - r.left) / r.width) * 2 - 1,
        (-(e.clientY - r.top) / r.height) * 2 + 1,
      );
      ray.setFromCamera(pointer, camera);
      return (
        ray.intersectObjects(pickable).find((h) => h.object.parent?.visible)
          ?.object.userData.piece ?? null
      );
    };
    const down = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      start = { x: e.clientX, y: e.clientY, id: hit(e) };
      if (props.mode === 'huarong' && start.id !== null)
        latest.current.onSelect(start.id);
    };
    const up = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      const dx = e.clientX - start.x,
        dy = e.clientY - start.y;
      if (Math.hypot(dx, dy) < 8) {
        const id = hit(e);
        if (id !== null) latest.current.onSelect(id);
      } else if (props.mode === 'huarong' && typeof start.id === 'string') {
        if (Math.abs(dx) > Math.abs(dy))
          latest.current.onSlide(start.id, Math.sign(dx), 0);
        else latest.current.onSlide(start.id, 0, Math.sign(dy));
      }
    };
    renderer.domElement.addEventListener('pointerdown', down);
    renderer.domElement.addEventListener('pointerup', up);
    const contextLost = (e: Event) => {
      e.preventDefault();
      setError(true);
    };
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    const observer = new ResizeObserver(() => {
      const w = el.clientWidth,
        h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    observer.observe(el);
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    let lastReset = latest.current.resetView;
    let frame = 0;
    const target = new THREE.Vector3();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (document.hidden) return;
      const p = latest.current;
      if (lastReset !== p.resetView) {
        lastReset = p.resetView;
        setCamera();
      }
      if (camera.zoom !== p.zoom / 100) {
        camera.zoom = p.zoom / 100;
        camera.updateProjectionMatrix();
      }
      objects.forEach((g, id) => {
        const mesh = g.children[0] as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        const selected = p.selected === id;
        material.emissive.set(selected ? 0x665226 : 0);
        material.emissiveIntensity = selected ? 0.16 : 0;
        if (props.mode === 'lock') {
          const piece = p.pieces.find((q) => q.id === id)!;
          const gone = p.removed.includes(Number(id));
          target.set(0, 0, 0);
          if (gone)
            target.setComponent(piece.axis, (p.exits[Number(id)] || 1) * 12);
          g.position.lerp(target, reduced ? 1 : 0.11);
          g.visible = g.position.length() < 10;
          const edge = g.getObjectByName('selection') as THREE.LineSegments;
          if (edge)
            (edge.material as THREE.LineBasicMaterial).opacity =
              selected && !gone ? 0.5 : 0;
        } else {
          const piece = p.board.find((q) => q.id === id)!;
          target.set(
            piece.x + piece.w / 2 - 2,
            selected ? 0.24 : 0.17,
            piece.y + piece.h / 2 - 2.5,
          );
          g.position.lerp(target, reduced ? 1 : 0.2);
        }
      });
      controls.update();
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(() => {
      animate();
      setReady(true);
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener('pointerdown', down);
      renderer.domElement.removeEventListener('pointerup', up);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [props.mode, props.pieces]);
  return (
    <>
      <figure
        className="scene-host"
        ref={host}
        aria-label={
          props.mode === 'lock'
            ? '可旋转的六木孔明锁，使用右侧编号和方向按钮也可操作'
            : '三维华容道棋盘，点击棋子后按方向键移动'
        }
      />
      {!ready && !error && (
        <div className="scene-loading">
          <span>正在摆好木作…</span>
        </div>
      )}
      {error && (
        <div className="error-fallback">
          <strong>暂时无法显示 3D 木作</strong>
          <span>
            请开启浏览器硬件加速后刷新页面。
            <br />
            右侧编号与方向按钮仍可操作。
          </span>
          <button onClick={() => location.reload()}>重新加载</button>
        </div>
      )}
    </>
  );
}
