// Original mesh-built aircraft, projected into Canvas 2D. No downloaded models or textures.
// x: wingspan, y: nose-to-tail, z: height above the wing. Simulation coordinates stay unchanged.
const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const unit = v => { const n = Math.hypot(...v) || 1; return v.map(x => x / n); };
const cross = (a, b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const sub = (a, b) => a.map((v, i) => v - b[i]);
const dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);
const material = (rgb, shine = .25, glow = false) => ({ rgb, shine, glow });
const M = {
  silver: material([211, 218, 225], .8), white: material([239, 234, 218], .48),
  steel: material([103, 126, 150], .85), dark: material([24, 33, 47], .28),
  black: material([8, 14, 24], .08), red: material([181, 30, 43], .53),
  blue: material([33, 100, 204], .65), gold: material([209, 153, 52], .65),
  amber: material([178, 121, 37], 1), glass: material([19, 69, 104], 1),
  cyan: material([109, 236, 255], .5, true), hot: material([255, 87, 64], .4, true),
};

function face(model, points, mat, edge = true) {
  const normal = unit(cross(sub(points[1], points[0]), sub(points[2], points[0])));
  model.faces.push({ points, normal, mat, edge });
}

// Beveled armor: a separate top, sloped rim and darker vertical side walls.
function armor(model, contour, bottom, top, mat, bevel = .1, map = p => p) {
  let points = contour.map(p => [...p]);
  const area = points.reduce((sum, p, i) => { const q=points[(i+1)%points.length]; return sum+p[0]*q[1]-q[0]*p[1]; }, 0);
  if (area < 0) points.reverse();
  const center = points.reduce((a,p) => [a[0]+p[0]/points.length,a[1]+p[1]/points.length], [0,0]);
  const low = points.map(([x,y]) => map([x,y,bottom]));
  const rim = points.map(([x,y]) => map([x,y,top-Math.min(1.5,(top-bottom)*.4)]));
  const high = points.map(([x,y]) => map([x+(center[0]-x)*bevel,y+(center[1]-y)*bevel,top]));
  face(model, high, mat);
  for (let i=0;i<points.length;i++) {
    const j=(i+1)%points.length;
    face(model,[low[i],low[j],rim[j],rim[i]],mat);
    face(model,[rim[i],rim[j],high[j],high[i]],mat);
  }
}

// Seven-sided longitudinal sections give the fuselage curved shoulders and real volume.
function fuselage(model, x, sections, mat) {
  const rings = sections.map(([y,w,h,z]) => [[0,z+h],[-w*.72,z+h*.7],[-w,z],[-w*.65,z-2],[w*.65,z-2],[w,z],[w*.72,z+h*.7]].map(([xx,zz])=>[x+xx,y,zz]));
  for(let k=0;k<rings.length-1;k++) for(let i=0;i<7;i++) {
    const j=(i+1)%7;
    face(model,[rings[k][i],rings[k+1][i],rings[k+1][j],rings[k][j]],mat);
  }
  face(model,rings[0],mat); face(model,[...rings.at(-1)].reverse(),mat);
}

function panel(model, points, mat) {
  // Mirroring a top decal reverses its winding; keep both wings facing the camera.
  if(cross(sub(points[1],points[0]),sub(points[2],points[0]))[2]<0) points=[...points].reverse();
  face(model, points, mat, false);
}
function flat(model, points, z, mat) { panel(model, points.map(([x,y])=>[x,y,z]), mat); }
function rect(model,x,y,w,h,z,mat) { flat(model,[[x,y],[x+w,y],[x+w,y+h],[x,y+h]],z,mat); }
function mirrored(model, points, bottom, top, mat, bevel=.08) {
  for(const s of [-1,1]) armor(model,points.map(([x,y])=>[x*s,y]),bottom,top,mat,bevel);
}
function fin(model,x,y,height,mat,cant=0) {
  armor(model,[[y-12,5],[y+7,height],[y+27,8],[y+23,4]],x-1.15,x+1.15,mat,.12,p=>[p[2]+p[1]*cant,p[0],p[1]]);
}
function engine(model,x,y,width,mat) {
  fuselage(model,x,[[y-27,width*.7,3,1],[y-20,width,9,0],[y+14,width,9,0],[y+24,width*.86,5,-1]],mat);
  // Inlet throat, intake lip and the separate titanium exhaust collar.
  armor(model,[[x-width*.6,y-25],[x+width*.6,y-25],[x+width*.75,y-16],[x-width*.75,y-16]],8,10,M.steel);
  rect(model,x-width*.46,y-23,width*.92,6,10.15,M.black);
  fuselage(model,x,[[y+16,width*.9,6,-1],[y+20,width*.93,6,-1],[y+24,width*.82,5,-1]],M.steel);
  fuselage(model,x,[[y+24,width*.82,5,-1],[y+31,width*.7,4,-1]],M.dark);
  for(let i=0;i<4;i++) {
    rect(model,x-width*.55,y-5+i*3,width*1.1,1.35,9.05,M.black);
    rect(model,x-width*.52,y-4.8+i*3,width, .42,9.1,M.silver);
  }
  model.engines.push([x,y+31,1,width*.62]);
}
function cannon(model,x,y,mat,length=31) {
  fuselage(model,x,[[y-length,1.4,1,3],[y-length+3,2.2,2,3],[y+6,2.6,3,2]],M.dark);
  fuselage(model,x,[[y-5,3.4,4,1],[y+12,3.2,3,1]],mat);
  for(let i=0;i<3;i++) rect(model,x-1.8,y-length+6+i*3,3.6,1,5.1,M.steel);
}
function canopy(model,long=false) {
  const nose=long?-46:-40;
  fuselage(model,0,[[nose,1,1,10],[nose+8,5.3,3,11],[-18,6,3,12],[-9,4,1,10]],M.dark);
  fuselage(model,0,[[nose+2,.5,1,11],[nose+9,4.5,4,12],[-20,5,4,13],[-11,3.2,1,11]],M.amber);
  // Curved canopy's reflection and transverse frame, both attached to its surface.
  panel(model,[[-2.4,nose+11,15.6],[-1,nose+8,15.5],[-.5,-22,17.2],[-1.7,-20,16.8]],M.white);
  panel(model,[[-4.2,-24,15.4],[-4.1,-22.8,15.4],[4.1,-22.8,15.4],[4.2,-24,15.4]],M.dark);
}
function markings(model,s,x,y,z,id) {
  const X=v=>s*(x+v);
  flat(model,[[X(-6),y],[X(5),y+5],[X(4),y+8],[X(-7),y+3]],z,M.white);
  for(let i=0;i<id+1;i++) rect(model,X(-3+i*2.1),y+10,1.05,4,z+.02,M.silver);
  // Small service fasteners remain visible in the hangar without outlining every face.
  for(const yy of [y-5,y+19]) for(const xx of [-7,6]) {
    const px=X(xx);flat(model,[[px-.45,yy],[px,yy-.45],[px+.45,yy],[px,yy+.45]],z+.05,M.steel);
  }
}
function servicePanel(model,points,z,paint) {
  const center=points.reduce((a,p)=>[a[0]+p[0]/points.length,a[1]+p[1]/points.length],[0,0]);
  flat(model,points,z,M.dark);
  flat(model,points.map(([x,y])=>[x+(center[0]-x)*.1,y+(center[1]-y)*.1]),z+.025,material(paint.rgb.map(v=>v*.76),.38));
}

function makeAirframe(id) {
  const model={faces:[],engines:[],id}; const paint=[M.red,M.blue,M.gold][id];
  if(id===0) {
    // Scarlet interceptor: swept wings, long needle nose and split engine nacelles.
    mirrored(model,[[8,-24],[28,-17],[51,8],[57,25],[42,28],[13,12]],-3,3,paint);
    mirrored(model,[[28,-10],[46,9],[49,19],[35,13],[19,-6]],3.05,4.6,paint);
    mirrored(model,[[42,14],[52,20],[55,24],[45,25],[39,20]],3.1,4.8,M.white);
    mirrored(model,[[10,20],[22,24],[28,45],[21,43],[9,32]],0,4,M.silver);
    for(const s of [-1,1]) {
      engine(model,s*18,13,8.6,paint); cannon(model,s*43,1,M.silver,31);
      fin(model,s*13,20,24,paint,s*.12); markings(model,s,34,0,4.7,0);
      panel(model,[[s*14,-11,4.7],[s*22,-8,4.7],[s*28,5,4.7],[s*18,0,4.7]],M.white);
      servicePanel(model,[[s*32,-1],[s*39,6],[s*42,13],[s*36,11],[s*31,6]],4.75,paint);
      rect(model,s*26-1,13,2,5,4.75,M.white);
    }
    fuselage(model,0,[[-72,.2,.4,2],[-56,3.8,3,3],[-37,7,6,3],[-8,10,11,1],[20,7,8,0],[48,1,1,1]],paint);
    fuselage(model,0,[[-73,.15,.3,2],[-64,2.1,2,3],[-57,3.5,3,3]],M.white);
    panel(model,[[0,1,12.1],[2,7,10.5],[1,38,4],[-1,38,4],[-2,7,10.5]],M.white);
    canopy(model);
  } else if(id===1) {
    // Cobalt striker: forward-reaching wings and a pair of long accelerator rails.
    mirrored(model,[[8,-13],[39,-29],[53,-40],[50,-14],[30,12],[13,17]],-2,3.8,paint);
    mirrored(model,[[32,-24],[50,-38],[46,-18],[31,0],[19,7]],3.85,5.2,M.silver);
    mirrored(model,[[10,24],[33,15],[42,41],[31,35],[11,40]],-1,4,paint);
    for(const s of [-1,1]) {
      engine(model,s*20,15,7.7,paint); cannon(model,s*45,-10,paint,38);
      fin(model,s*15,21,27,paint,s*.2); markings(model,s,30,-12,5.35,1);
      servicePanel(model,[[s*34,-23],[s*44,-31],[s*41,-18],[s*34,-8]],5.35,paint);
      armor(model,[[s*11,-12],[s*17,-18],[s*17,10],[s*12,15]],6,9.5,M.dark);
      rect(model,s*14-1,-9,2,17,9.65,M.cyan);
    }
    fuselage(model,0,[[-78,.2,.5,2],[-56,3.6,4,3],[-28,7,8,2],[0,9,10,1],[28,6,5,1],[45,2,1,2]],M.silver);
    fuselage(model,0,[[-68,.8,1,5],[-40,3,4,8],[-6,4,4,8],[30,2.5,2,6]],paint);
    canopy(model,true);
  } else {
    // Armored gunship: broad shoulders, four gun barrels and oversized engines.
    mirrored(model,[[9,-30],[34,-28],[56,-7],[58,19],[42,27],[12,17]],-5,4.5,paint);
    mirrored(model,[[29,-23],[41,-16],[45,14],[32,17],[25,3]],4.6,7,M.silver);
    mirrored(model,[[12,24],[35,28],[40,42],[11,39]],-2,4.5,paint);
    for(const s of [-1,1]) {
      engine(model,s*22,13,10.5,paint);
      for(const dx of [-2.1,2.1]) cannon(model,s*47+dx,-4,M.steel,29);
      fin(model,s*18,22,22,M.silver,s*.16); markings(model,s,40,-2,7.1,2);
      servicePanel(model,[[s*31,-14],[s*36,-13],[s*39,8],[s*33,11]],7.15,paint);
      armor(model,[[s*7,-11],[s*12,-14],[s*13,11],[s*8,16]],7,11,paint);
      for(let i=0;i<3;i++) rect(model,s*10-1,-7+i*4,2,1.5,11.1,M.black);
    }
    fuselage(model,0,[[-58,2,2,3],[-46,6.2,6,3],[-27,11,9,2],[8,12,11,0],[33,9,5,0],[42,5,2,1]],M.silver);
    fuselage(model,0,[[-55,1,1,5],[-42,3.8,4,7],[-5,5,5,9],[29,4,3,5]],paint);
    canopy(model);
  }
  for(const s of [-1,1]) {
    const x=s*(id===2?54:id===1?48:51),y=id===1?-30:18;
    rect(model,x-1,y,2,3,5.4,s<0?M.hot:M.cyan);
  }
  return model;
}
const AIRFRAMES = [0,1,2].map(makeAirframe);
const LIGHT=unit([-.55,-.65,1]), HALF=unit([LIGHT[0],LIGHT[1],LIGHT[2]+1]);

function camera(bank,showcase,time) {
  const roll=showcase?-.3+Math.sin(time*.45)*.14:bank*.48;
  const pitch=showcase?.53:.18, yaw=showcase?-.37+Math.sin(time*.28)*.09:bank*.065;
  const cr=Math.cos(roll),sr=Math.sin(roll),cp=Math.cos(pitch),sp=Math.sin(pitch),cy=Math.cos(yaw),sy=Math.sin(yaw);
  return ([x,y,z])=>{ const xx=x*cr+z*sr, zz=z*cr-x*sr, yy=y*cp-zz*sp; return [xx*cy-yy*sy,xx*sy+yy*cy,y*sp+zz*cp]; };
}
function shade(mat,normal,tint=0) {
  if(mat.glow) return `rgb(${mat.rgb.join(',')})`;
  const diffuse=.42+Math.max(0,dot(normal,LIGHT))*.64;
  const spec=Math.pow(Math.max(0,dot(normal,HALF)),22)*mat.shine*155;
  return `rgb(${mat.rgb.map((v,i)=>Math.round(clamp(v*diffuse+spec+tint+[1,3,6][i],0,255))).join(',')})`;
}
function paintMesh(c,model,transform) {
  const visible=[];
  for(const f of model.faces) {
    const n=transform(f.normal); if(n[2]<=.015) continue;
    const pts=f.points.map(transform);
    visible.push({f,n,pts,depth:pts.reduce((a,p)=>a+p[2],0)/pts.length});
  }
  visible.sort((a,b)=>a.depth-b.depth);
  c.lineJoin='round'; c.lineWidth=.32;
  for(const {f,n,pts} of visible) {
    c.beginPath();c.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)c.lineTo(pts[i][0],pts[i][1]);c.closePath();
    c.fillStyle=shade(f.mat,n);
    if(f.mat.shine>.45&&!f.mat.glow) {
      const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);
      if(right-left+bottom-top>12) {
        const gloss=c.createLinearGradient(left,top,right,bottom);
        gloss.addColorStop(0,shade(f.mat,n,18));gloss.addColorStop(.42,shade(f.mat,n,3));gloss.addColorStop(1,shade(f.mat,n,-23));
        c.fillStyle=gloss;
      }
    }
    c.fill();
    if(f.edge){c.strokeStyle='rgba(6,14,26,.48)';c.stroke();}
  }
}

// Nine cached banking poses per hull: bounded memory, one image draw during combat.
const spriteCache=new Map();
function sprite(model,bank) {
  if(typeof OffscreenCanvas==='undefined') return null;
  const pose=Math.round(clamp(bank,-1,1)*4),key=`${model.id}:${pose}`;
  if(spriteCache.has(key))return spriteCache.get(key);
  const canvas=new OffscreenCanvas(288,352),ctx=canvas.getContext('2d');
  if(!ctx)return null;
  ctx.translate(144,192);ctx.scale(2,2);paintMesh(ctx,model,camera(pose/4,false,0));
  spriteCache.set(key,canvas);return canvas;
}
function exhaust(c,model,transform,time,boost,showcase) {
  for(const [x,y,z,w] of model.engines) {
    const length=(showcase?26:35)*(boost?1.6:1),flicker=1+Math.sin(time*43+x)*.075;
    const origin=transform([x,y,z]),tip=transform([x,y+length*flicker,z]);
    const gradient=c.createLinearGradient(origin[0],origin[1],tip[0],tip[1]);
    gradient.addColorStop(0,'#f0ffff');gradient.addColorStop(.18,'#a3f7ff');gradient.addColorStop(.48,boost?'#aa95ff':'#2bb6ff');gradient.addColorStop(1,'#2288ff00');
    const pts=[[x-w,y,z],[x+w,y,z],[x+w*.58,y+length*.44,z],[x,y+length*flicker,z],[x-w*.58,y+length*.44,z]].map(transform);
    c.beginPath();c.moveTo(pts[0][0],pts[0][1]);for(const p of pts.slice(1))c.lineTo(p[0],p[1]);c.closePath();c.fillStyle=gradient;c.fill();
    for(let i=0;i<3;i++) {
      const yy=y+5+i*6,ww=w*(.5-i*.11),p=[[x,yy-2,z],[x+ww,yy,z],[x,yy+2.5,z],[x-ww,yy,z]].map(transform);
      c.beginPath();c.moveTo(p[0][0],p[0][1]);for(const q of p.slice(1))c.lineTo(q[0],q[1]);c.closePath();c.fillStyle=`rgba(220,252,255,${.74-i*.17})`;c.fill();
    }
  }
}

/** Faceted 3D hulls; scale=1 preserves the existing gameplay hit core and positioning. */
export function drawAirframe(c,x,y,shipId=0,scale=1,time=0,bank=0,{showcase=false,boost=false}={}) {
  const model=AIRFRAMES[clamp(shipId|0,0,2)],transform=camera(bank,showcase,time);
  c.save();c.translate(x,y);c.scale(scale*.66,scale*.66);
  // Soft projected shadow separates the fuselage from terrain or the hangar platform.
  c.save();c.translate(8,12);c.scale(1,.78);c.fillStyle='#02081340';
  c.beginPath();c.ellipse(0,0,showcase?46:41,58,0,0,TAU);c.fill();c.restore();
  exhaust(c,model,transform,time,boost,showcase);
  const cached=showcase?null:sprite(model,bank);
  if(cached)c.drawImage(cached,-72,-96,144,176);else paintMesh(c,model,transform);
  c.restore();
}
