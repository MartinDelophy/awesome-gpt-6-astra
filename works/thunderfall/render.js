// Original procedural artwork. All coordinates use the game's 480 × 800 stage.
const W = 480, H = 800, TAU = Math.PI * 2;
const SHIPS = [
  { bright: '#a5f8ff', light: '#5edbf3', metal: '#427993', dark: '#132a44', flame: '#54e8ff' },
  { bright: '#efdcff', light: '#bb9bff', metal: '#756497', dark: '#282240', flame: '#bf99ff' },
  { bright: '#fff0be', light: '#edc47c', metal: '#887157', dark: '#302c30', flame: '#ffb655' },
];
const LOOT = { pulse: ['#60baff', 'P'], laser: ['#6eecb7', 'L'], arc: ['#c59aff', 'A'], nova: ['#ffd576', 'N'] };
const PAL = [
  ['#071422', '#15354a', '#31697b'], ['#071b22', '#143835', '#468772'],
  ['#0b1b30', '#284251', '#799baf'], ['#1c1521', '#3f2b31', '#bd653d'],
  ['#090d23', '#212143', '#7076b1'],
];
const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const hash = (n) => { const f = Math.sin(n * 127.1 + 311.7) * 43758.5453; return f - Math.floor(f); };
const mod = (n, d) => ((n % d) + d) % d;

function poly(c, points, fill, stroke, width = 1) {
  c.beginPath();
  c.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) c.lineTo(points[i][0], points[i][1]);
  c.closePath();
  if (fill) { c.fillStyle = fill; c.fill(); }
  if (stroke) { c.strokeStyle = stroke; c.lineWidth = width; c.stroke(); }
}
function line(c, points, color, width = 1) {
  c.beginPath(); c.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) c.lineTo(points[i][0], points[i][1]);
  c.strokeStyle = color; c.lineWidth = width; c.stroke();
}
function circle(c, x, y, r, fill, stroke, width = 1) {
  c.beginPath(); c.arc(x, y, Math.max(0, r), 0, TAU);
  if (fill) { c.fillStyle = fill; c.fill(); }
  if (stroke) { c.strokeStyle = stroke; c.lineWidth = width; c.stroke(); }
}
function halo(c, x, y, r, color) {
  const g = c.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, color); g.addColorStop(1, 'transparent');
  c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
}
function plate(c, x, y, w, h, fill, edge, cut = 5) {
  poly(c, [[x + cut,y],[x+w-cut,y],[x+w,y+cut],[x+w,y+h-cut],[x+w-cut,y+h],[x+cut,y+h],[x,y+h-cut],[x,y+cut]], fill, edge);
}

function sea(c, t) {
  const y = mod(t * 26, 124);
  c.strokeStyle = '#85cbd5'; c.lineWidth = 1;
  for (let row = -1; row < 8; row++) {
    const py = row * 124 + y;
    for (let j = 0; j < 7; j++) {
      const x = hash(row * 17 + j) * W;
      c.globalAlpha = .055 + j * .008;
      line(c, [[x-20,py+j*11],[x+3,py+j*11-2],[x+34,py+j*11]], '#8bdfe5');
    }
  }
  c.globalAlpha = 1;
  for (let side = 0; side < 2; side++) {
    c.save(); if (side) { c.translate(W, 0); c.scale(-1, 1); }
    for (let n = -1; n < 4; n++) {
      const yy = n * 310 + mod(t * 36, 310);
      poly(c, [[0,yy],[53,yy+10],[53,yy+38],[95,yy+38],[95,yy+61],[52,yy+61],[52,yy+181],[75,yy+181],[75,yy+208],[42,yy+208],[42,yy+260],[0,yy+272]], '#172c38', '#294956');
      line(c, [[13,yy+12],[13,yy+251]], '#47606a');
      for (let q = 0; q < 5; q++) {
        plate(c, 22, yy+73+q*19, 23, 12, q%2 ? '#29404b' : '#34444a', '#435966', 2);
        c.fillStyle = '#83c3cc'; c.fillRect(49, yy+82+q*19, 2, 4);
      }
      line(c, [[54,yy+42],[89,yy+42],[89,yy+56]], '#b98a5f', 2);
      circle(c, 89, yy+55, 2, '#d6b66f');
    }
    c.restore();
  }
  c.globalAlpha = .15;
  line(c, [[240,0],[240,H]], '#4b9caf'); c.globalAlpha = 1;
}

function canyon(c, t, ice = false) {
  const scroll = mod(t * 32, 260), rim = ice ? '#628296' : '#396953';
  const dark = ice ? '#182e43' : '#17302b', face = ice ? '#28475a' : '#1d4939';
  for (let side = 0; side < 2; side++) {
    c.save(); if (side) { c.translate(W, 0); c.scale(-1, 1); }
    for (let n = -2; n < 4; n++) {
      const yy = n * 260 + scroll, seed = n + side * 51;
      const a = 70 + hash(seed) * 48, b = 34 + hash(seed+3) * 50;
      poly(c, [[0,yy-20],[a-20,yy],[a+8,yy+48],[b,yy+111],[a-16,yy+180],[a+4,yy+225],[0,yy+282]], dark, '#304e4e');
      poly(c, [[0,yy],[a-20,yy],[a+8,yy+48],[a-27,yy+76],[21,yy+56]], face, rim);
      poly(c, [[20,yy+70],[a-27,yy+76],[b,yy+111],[a-16,yy+180],[14,yy+153]], ice ? '#304b60' : '#28513c');
      poly(c, [[0,yy+164],[a-16,yy+180],[a+4,yy+225],[43,yy+248],[0,yy+223]], face, rim);
      line(c, [[a-20,yy],[a+8,yy+48],[b,yy+111],[a-16,yy+180],[a+4,yy+225]], rim, 2);
      if (ice) {
        poly(c, [[22,yy+7],[a-20,yy],[a+8,yy+48],[a-14,yy+42],[a-32,yy+19]], '#7699a8');
        for (let j = 0; j < 3; j++) line(c, [[28+j*12,yy+160],[32+j*15,yy+209]], '#47667c');
      } else {
        for (let j = 0; j < 7; j++) circle(c, 8+hash(seed*22+j)*40, yy+18+j*31, 5+hash(j+seed)*6, '#326446');
      }
    }
    c.restore();
  }
  if (ice) {
    for (let i = 0; i < 28; i++) {
      const x = hash(i+70)*W, y = mod(hash(i+30)*H+t*(8+hash(i)*12), H);
      c.globalAlpha = .12 + hash(i+23)*.2; circle(c, x, y, hash(i+4)*1.2+.5, '#bbdaeb');
    }
    c.globalAlpha = 1;
  } else {
    c.globalAlpha = .2;
    for (let i = 0; i < 10; i++) {
      const y = mod(i*91+t*39, 880)-40;
      line(c, [[145+Math.sin(y*.008)*20,y],[255+Math.cos(y*.009)*34,y+8],[325,y+3]], '#4f9690');
    }
    c.globalAlpha = 1;
  }
}

function factory(c, t) {
  const offset = mod(t * 38, 196);
  for (let y = -196; y < H; y += 196) {
    const yy = y + offset;
    line(c, [[0,yy],[W,yy]], '#4b3b41');
    for (const x of [26, 110, 368, 452]) {
      line(c, [[x,yy],[x,yy+196]], '#3d323b');
      c.fillStyle = '#342e37'; c.fillRect(x-8, yy+45, 16, 106);
      c.fillStyle = '#704233'; c.fillRect(x-3, yy+52, 6, 91);
      c.fillStyle = '#be7545'; c.fillRect(x-1, yy+52, 2, 91);
    }
    for (const x of [-20, 408]) {
      plate(c, x, yy+12, 90, 146, '#292833', '#60515a', 11);
      plate(c, x+14, yy+27, 59, 67, '#131c28', '#8d674a', 7);
      for (let k = 0; k < 6; k++) {
        c.fillStyle = k%2 ? '#6e4939' : '#ae673d'; c.fillRect(x+20, yy+36+k*8, 47, 3);
      }
      circle(c, x+45, yy+126, 12, '#171e29', '#574956', 3);
      circle(c, x+45, yy+126, 3, '#e6a061');
    }
    c.globalAlpha = .25;
    line(c, [[180,yy+20],[153,yy+47],[153,yy+137],[180,yy+165]], '#967361');
    line(c, [[300,yy+20],[327,yy+47],[327,yy+137],[300,yy+165]], '#967361');
    c.globalAlpha = 1;
  }
}

function orbit(c, t) {
  halo(c, 330, 200, 290, '#30255055');
  for (let i = 0; i < 82; i++) {
    const depth = hash(i+88), x = hash(i+13)*W, y = mod(hash(i)*H+t*(7+depth*25), H);
    c.globalAlpha = .15+depth*.5;
    c.fillStyle = i%7 === 0 ? '#c8b6f0' : '#9fbad9'; c.fillRect(x,y,depth > .8 ? 1.6 : .8,depth > .8 ? 2.4 : 1.3);
  }
  c.globalAlpha = 1;
  const yy = mod(t * 20, 1160)-260;
  c.save(); c.translate(320, yy);
  c.rotate(-.3);
  c.beginPath(); c.ellipse(0,0,285,85,0,0,TAU); c.strokeStyle='#55577744'; c.lineWidth=18; c.stroke();
  c.beginPath(); c.ellipse(0,0,285,85,0,0,TAU); c.strokeStyle='#8782a04d'; c.lineWidth=1; c.stroke();
  for (let i = 0; i < 24; i++) {
    const a = i/24*TAU;
    line(c, [[Math.cos(a)*272,Math.sin(a)*79],[Math.cos(a)*296,Math.sin(a)*91]], '#9495b138', 2);
  }
  c.restore();
}

function background(c, stage, time) {
  const p = PAL[stage], gradient = c.createLinearGradient(0,0,W,H);
  gradient.addColorStop(0,p[1]); gradient.addColorStop(.46,p[0]); gradient.addColorStop(1,p[1]);
  c.fillStyle = gradient; c.fillRect(0,0,W,H);
  if (stage === 0) sea(c,time);
  else if (stage === 1 || stage === 2) canyon(c,time,stage === 2);
  else if (stage === 3) factory(c,time);
  else orbit(c,time);
  // Broad shadows keep the bullet lanes calm while preserving visible terrain.
  const shade = c.createLinearGradient(0,0,W,0);
  shade.addColorStop(0,'#03091366'); shade.addColorStop(.2,'transparent');
  shade.addColorStop(.8,'transparent'); shade.addColorStop(1,'#03091366');
  c.fillStyle=shade; c.fillRect(0,0,W,H);
  c.strokeStyle='#b4d7e10b'; c.lineWidth=1;
  for (let y=0;y<H;y+=4) { c.beginPath(); c.moveTo(0,y+.5); c.lineTo(W,y+.5); c.stroke(); }
}

function flame(c, x, y, width, height, color, time) {
  const flicker = .88 + Math.sin(time*41+x)*.08 + Math.sin(time*63)*.04;
  const g = c.createLinearGradient(x,y,x,y+height);
  g.addColorStop(0,'#ecfdff'); g.addColorStop(.22,color); g.addColorStop(1,'transparent');
  poly(c, [[x-width,y],[x+width,y],[x+width*.48,y+height*.52],[x,y+height*flicker],[x-width*.48,y+height*.52]], g);
}

/** Draw one of three original hulls, facing up. Usable by isolated preview canvases. */
export function drawShip(c, x, y, shipId = 0, scale = 1, time = 0, bank = 0) {
  const id = clamp(shipId|0,0,2), p = SHIPS[id];
  c.save(); c.translate(x,y); c.rotate(clamp(bank,-1,1)*.13); c.scale(scale,scale);
  if (id === 0) {
    flame(c,-9,22,4,29,p.flame,time); flame(c,9,22,4,29,p.flame,time+.4);
    poly(c,[[-3,-31],[-12,-10],[-29,12],[-30,20],[-10,12],[-8,26],[8,26],[10,12],[30,20],[29,12],[12,-10],[3,-31]],p.dark,'#83c7dd',.8);
    poly(c,[[-4,-24],[-11,-8],[-26,14],[-11,7],[-7,-4]],p.metal);
    poly(c,[[4,-24],[11,-8],[26,14],[11,7],[7,-4]],p.light);
    poly(c,[[0,-34],[5,-16],[7,16],[0,25],[-7,16],[-5,-16]],p.light,p.bright,.6);
    poly(c,[[0,-31],[0,22],[-5,15],[-4,-16]],p.metal);
    line(c,[[-25,14],[-14,3],[-12,-2]],p.bright,.7);
    line(c,[[25,14],[14,3],[12,-2]],p.bright,.7);
    poly(c,[[-17,12],[-18,23],[-11,20],[-9,9]],p.metal);
    poly(c,[[17,12],[18,23],[11,20],[9,9]],p.light);
  } else if (id === 1) {
    flame(c,-18,18,3.5,27,p.flame,time); flame(c,18,18,3.5,27,p.flame,time+.3);
    poly(c,[[0,-31],[11,-9],[30,4],[36,22],[17,17],[6,24],[0,20],[-6,24],[-17,17],[-36,22],[-30,4],[-11,-9]],p.dark,p.bright,.7);
    poly(c,[[-2,-24],[-11,-7],[-29,7],[-31,17],[-19,12],[-5,13]],p.metal);
    poly(c,[[2,-24],[11,-7],[29,7],[31,17],[19,12],[5,13]],p.light);
    poly(c,[[0,-32],[7,-8],[6,19],[0,25],[-6,19],[-7,-8]],'#c5b7d5',p.bright,.6);
    poly(c,[[0,-29],[0,20],[-4,13],[-4,-7]],p.metal);
    for(const s of [-1,1]) { line(c,[[s*12,-2],[s*23,7],[s*26,13]],p.bright,1); circle(c,s*20,7,2.2,p.flame); }
  } else {
    flame(c,-13,22,5,24,p.flame,time); flame(c,13,22,5,24,p.flame,time+.2);
    poly(c,[[-7,-27],[-12,-8],[-31,-2],[-32,24],[-17,18],[-10,28],[10,28],[17,18],[32,24],[31,-2],[12,-8],[7,-27]],p.dark,p.bright,.8);
    plate(c,-31,-2,14,25,p.metal,p.light,3); plate(c,17,-2,14,25,p.light,p.bright,3);
    poly(c,[[-7,-27],[-11,-2],[-9,23],[0,27],[9,23],[11,-2],[7,-27]],p.light,p.bright,.6);
    poly(c,[[0,-26],[0,24],[-7,20],[-8,-1],[-5,-25]],p.metal);
    for(const s of [-1,1]) { line(c,[[s*24,-7],[s*24,10]],'#e4d6b7',2); c.fillStyle=p.dark; c.fillRect(s*24-3,12,6,7); }
    line(c,[[-12,6],[-28,10]],p.bright); line(c,[[12,6],[28,10]],p.bright);
  }
  poly(c,[[0,-16],[3,-10],[2,1],[0,4],[-2,1],[-3,-10]],'#102737','#d1f8ff',.6);
  line(c,[[0,-14],[1,-9],[1,-3]],'#eeffff',.8);
  c.restore();
}

function enemy(c, e, time) {
  if(e.dead) return;
  if(e.type==='boss') { boss(c,e,time); return; }
  const w=e.w||e.r*2||34, h=e.h||w*1.15, s=w/40;
  c.save(); c.translate(e.x,e.y); c.scale(s,Math.min(1.8,h/42));
  const lit=e.flash>0, edge=lit?'#fff9e3':'#dd8c70', metal=lit?'#e4bea3':'#745c5d';
  if(e.type==='mine') {
    c.rotate(time*.6+(e.age||0));
    for(let i=0;i<6;i++) { c.save(); c.rotate(i/6*TAU); poly(c,[[-3,-7],[-3,-16],[0,-20],[3,-16],[3,-7]],'#8f665d','#e1a382'); c.restore(); }
    circle(c,0,0,10,'#25283a',edge,1.5); circle(c,0,0,4,'#ffbd82');
  } else if(e.type==='carrier') {
    plate(c,-22,-22,44,43,'#303344',edge,6);
    plate(c,-14,-17,28,33,metal,'#9b7670',3);
    for(let s=-1;s<=1;s+=2) { plate(c,s*19-5,-12,10,24,'#171f31','#b08b7a',2); c.fillStyle='#ffa779'; c.fillRect(s*19-2,4,4,8); }
    poly(c,[[0,24],[-8,10],[-6,-6],[6,-6],[8,10]],'#bea298');
    circle(c,0,0,3,'#ffe4c1');
  } else if(e.type==='gunship'||e.type==='laser') {
    const laser=e.type==='laser';
    poly(c,[[-5,24],[-12,8],[-23,5],[-20,-16],[-8,-10],[0,-21],[8,-10],[20,-16],[23,5],[12,8],[5,24]],'#242d40',edge);
    poly(c,[[-18,-12],[-8,-6],[-6,15],[-15,4]],metal); poly(c,[[18,-12],[8,-6],[6,15],[15,4]],'#a08177');
    plate(c,-5,-12,10,30,laser?'#bb716b':'#a89083','#e5b798',2);
    for(const s of [-1,1]) { line(c,[[s*17,0],[s*17,16]],'#c7afa1',3); circle(c,s*17,17,2,laser?'#ff796c':'#ffc194'); }
    circle(c,0,2,3,laser?'#ff7b82':'#ffdbb2');
  } else {
    const interceptor=e.type==='interceptor';
    poly(c,[[0,24],[-8,7],[-21,4],[-17,-16],[-7,-6],[0,-15],[7,-6],[17,-16],[21,4],[8,7]],'#283043',edge,.8);
    poly(c,[[0,21],[-5,3],[-4,-12],[0,-17],[4,-12],[5,3]],metal);
    poly(c,[[-7,2],[-17,-10],[-17,2],[-6,8]],'#a58579');
    poly(c,[[7,2],[17,-10],[17,2],[6,8]],'#826666');
    poly(c,[[0,10],[-2,3],[0,-4],[2,3]],'#ffcf9e');
    if(interceptor) { line(c,[[-13,5],[-15,16]],'#ffad81',2); line(c,[[13,5],[15,16]],'#ffad81',2); }
    flame(c,-6,-10,2,-14,'#fd8d5b',time); flame(c,6,-10,2,-14,'#fd8d5b',time+.2);
  }
  c.restore();
  if((e.hp||0)<(e.maxHp||1)&&e.type!=='scout'&&e.type!=='mine') {
    c.fillStyle='#091321cc'; c.fillRect(e.x-w/2,e.y-h/2-8,w,3);
    c.fillStyle='#efbd8b'; c.fillRect(e.x-w/2,e.y-h/2-8,w*clamp(e.hp/e.maxHp),3);
  }
}

function boss(c,e,t) {
  const stage=clamp(e.stage??0,0,4), s=(e.w||220)/220;
  const hull=e.flash>0?'#e5c0ae':['#586376','#536d67','#65788e','#7e6265','#696488'][stage];
  const trim=['#d9a27b','#b2cb92','#bde3f0','#f1a269','#d3b9f4'][stage];
  c.save(); c.translate(e.x,e.y); c.scale(s,s);
  // Different major silhouettes remain identifiable through dense bullet patterns.
  if(stage===0) poly(c,[[-108,-21],[-92,-54],[-55,-45],[-34,-65],[34,-65],[55,-45],[92,-54],[108,-21],[96,41],[57,35],[35,64],[-35,64],[-57,35],[-96,41]],'#263347',trim,1.2);
  if(stage===1) poly(c,[[-111,-48],[-80,-62],[-65,-29],[-29,-53],[29,-53],[65,-29],[80,-62],[111,-48],[105,39],[78,60],[62,14],[32,50],[-32,50],[-62,14],[-78,60],[-105,39]],'#293b3e',trim,1.2);
  if(stage===2) poly(c,[[-103,-13],[-80,-53],[-52,-22],[-23,-59],[23,-59],[52,-22],[80,-53],[103,-13],[94,54],[72,64],[57,14],[22,39],[0,76],[-22,39],[-57,14],[-72,64],[-94,54]],'#243649',trim,1.2);
  if(stage===3) { circle(c,0,0,88,'#322c39',trim,2); circle(c,0,0,68,'#1d2535','#6e4c47',15); }
  if(stage===4) {
    poly(c,[[-114,-48],[-87,-67],[-78,-27],[-31,-39],[0,-68],[31,-39],[78,-27],[87,-67],[114,-48],[108,51],[87,70],[73,28],[35,44],[0,70],[-35,44],[-73,28],[-87,70],[-108,51]],'#242c46',trim,1.3);
    circle(c,0,0,78,null,'#b7a4eb66',1.5);
  }
  for(const side of [-1,1]) {
    c.save(); c.scale(side,1);
    poly(c,[[36,-35],[79,-46],[98,-17],[85,31],[58,18],[40,36]],hull,'#93a4b0',.7);
    poly(c,[[47,-29],[78,-40],[87,-16],[67,-5],[45,0]],'#a6a3a3');
    poly(c,[[50,8],[76,-2],[83,20],[61,13],[43,29]],'#414856');
    plate(c,64,-11,21,43,'#283143',trim,4);
    plate(c,69,12,11,35,'#546170',trim,2);
    circle(c,74,45,5,'#ffac86','#ffddd0',1.5);
    for(let j=0;j<4;j++) line(c,[[42+j*6,-20],[43+j*6,-10]],'#3e4956',2);
    c.fillStyle=trim; c.fillRect(91,-8,3,10);
    c.restore();
  }
  poly(c,[[0,-59],[27,-32],[32,25],[19,53],[0,65],[-19,53],[-32,25],[-27,-32]],hull,trim);
  poly(c,[[0,-51],[0,56],[-19,44],[-24,22],[-21,-29]],'#354353');
  poly(c,[[0,-46],[18,-28],[18,-2],[0,12],[-18,-2],[-18,-28]],'#172537','#8f9bab',1);
  circle(c,0,-9,11,'#f7ad8f33',trim,2);
  circle(c,0,-9,5,'#fff0db');
  for(let i=0;i<3;i++) { line(c,[[-13,21+i*7],[13,21+i*7]],'#131e32',3); line(c,[[-9,20+i*7],[9,20+i*7]],trim,1); }
  if((e.age??2)<2||e.transition>0) {
    // A temporary outlined field communicates blocked damage without masking hazards.
    const entering=(e.age??2)<2, progress=entering?clamp(e.age/2):clamp(1-e.transition/1.15);
    poly(c,[[-84,-79],[84,-79],[121,-42],[121,41],[80,81],[-80,81],[-121,41],[-121,-42]],'#a6c8ff0a','#afceff90',1.5);
    c.save(); c.setLineDash([11,9]); c.lineDashOffset=-t*13;
    c.beginPath(); c.ellipse(0,0,126,88,0,0,TAU); c.strokeStyle='#cfddff70'; c.lineWidth=1.3; c.stroke(); c.restore();
    for(const side of [-1,1]) {
      line(c,[[side*96,-61],[side*113,-41],[side*113,-19]],'#e2eaff',2);
      line(c,[[side*96,63],[side*113,43],[side*113,21]],'#e2eaff',2);
    }
    c.fillStyle='#0d1931e6'; c.fillRect(-65,92,130,22);
    c.fillStyle='#dce8ff'; c.font='600 13px system-ui, sans-serif'; c.textAlign='center'; c.textBaseline='middle';
    c.fillText(entering?'入场护盾 · 暂时免伤':'相位护盾 · 暂时免伤',0,103);
    c.fillStyle='#93c3ff'; c.fillRect(-60,117,120*progress,2);
  }
  c.restore();
}

function beam(c,b,time,reduced) {
  const age=b.age||0, warn=b.warn??1, duration=b.duration??1;
  if(age>warn+duration) return;
  c.save(); c.translate(b.x,b.y); c.rotate((b.angle??Math.PI/2)-Math.PI/2);
  const len=b.length||900, width=b.width||18, color=b.color||'#ff735f';
  if(age<warn) {
    c.globalAlpha=.35+.35*clamp(age/warn);
    c.setLineDash([9,8]); c.lineDashOffset=reduced?0:-time*26;
    line(c,[[0,0],[0,len]],'#ffbba0',2); c.setLineDash([]);
    c.globalAlpha=.06+.09*clamp(age/warn); c.fillStyle=color; c.fillRect(-width/2,0,width,len);
    c.globalAlpha=1; circle(c,0,0,5,null,'#ffe0b5',1.5);
  } else {
    const fade=clamp((warn+duration-age)*9), pulse=reduced?1:.9+Math.sin(time*35)*.1;
    c.globalAlpha=.11*fade; c.fillStyle=color; c.fillRect(-width*1.2,0,width*2.4,len);
    c.globalAlpha=.86*fade; c.fillRect(-width*.5*pulse,0,width*pulse,len);
    c.globalAlpha=fade; c.fillStyle='#fff4e7'; c.fillRect(-width*.16,0,width*.32,len);
    circle(c,0,0,width*.72,'#fff3e3');
  }
  c.restore();
}

function projectile(c,b,player=false) {
  const x=b.x,y=b.y,r=Math.max(1.2,b.r||3), type=b.type||'aim';
  const color=b.color||(player?'#80e8ff':'#ff8b70');
  if(player) {
    c.strokeStyle=color; c.lineWidth=type==='laser'?r*1.8:r*1.25; c.lineCap='round';
    c.beginPath(); c.moveTo(x,y); c.lineTo(b.prevX??x,(b.prevY??y)+Math.min(19,Math.abs(b.vy||500)*.018)); c.stroke();
    c.strokeStyle='#e9fbff'; c.lineWidth=Math.max(1,r*.5); c.stroke();
    if(type==='nova') circle(c,x,y,r,'#fff3ba',color,1.5);
    c.lineCap='butt'; return;
  }
  if(type==='drift'||type==='spiral'||type==='fast') {
    const vx=b.vx||0,vy=b.vy||0,norm=Math.hypot(vx,vy)||1;
    line(c,[[x-vx/norm*14,y-vy/norm*14],[x,y]],color+'66',r*.95);
  }
  if(type==='mine') {
    c.save(); c.translate(x,y); c.rotate((b.age||0)*2);
    poly(c,[[0,-r*1.6],[r*1.5,0],[0,r*1.6],[-r*1.5,0]],'#71374e','#ffbd8e',1.5);
    circle(c,0,0,r*.55,'#fff0c8'); c.restore();
  } else {
    circle(c,x,y,r+1.1,'#432839','#ff9b7d',.9);
    circle(c,x,y,r*.75,color); circle(c,x-r*.13,y-r*.2,r*.4,'#fff0cf');
  }
}

function drop(c,d,t,reduced) {
  const [color,label]=d.kind==='weapon'?(LOOT[d.weapon]||LOOT.pulse):d.kind==='repair'?['#b6f2cd','+']:d.kind==='shield'?['#8fd8ff','S']:['#f4b599','B'];
  const age=d.age||0, ttl=d.ttl||10, fade=age>ttl-2?(.64+.36*(reduced?1:Math.sin(t*8)**2)):1;
  c.save(); c.translate(d.x,d.y); c.globalAlpha=fade;
  circle(c,0,0,20,'#071320dd',color+'45',1);
  c.beginPath(); c.arc(0,0,21,-Math.PI/2,-Math.PI/2+TAU*clamp(1-age/ttl)); c.lineWidth=2; c.strokeStyle=color; c.stroke();
  const turn=reduced?0:Math.sin(age*2)*.12;
  c.save(); c.rotate(turn); plate(c,-13,-13,26,26,'#182941',color,5); c.restore();
  c.fillStyle=color; c.font='bold 18px ui-monospace, Menlo, monospace'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(label,0,1);
  c.fillStyle='#e8f3fc'; c.font='9px ui-monospace, Menlo, monospace'; c.fillText(Math.max(0,Math.ceil(ttl-age))+'s',0,32);
  c.restore();
}

function effect(c,e,reduced) {
  const p=clamp((e.age||0)/(e.ttl||.5)), remain=1-p, size=e.size||22, color=e.color||'#ffc088';
  if(!remain) return;
  c.save(); c.globalAlpha=remain;
  if(e.type==='text') {
    c.font='bold 13px ui-monospace, Menlo, monospace'; c.textAlign='center'; c.textBaseline='middle';
    c.strokeStyle='#0b1324'; c.lineWidth=3; c.strokeText(e.text||'',e.x,e.y-p*24);
    c.fillStyle=color; c.fillText(e.text||'',e.x,e.y-p*24);
  } else if(e.type==='lightning'&&e.points?.length) {
    const pts=e.points.map(v=>Array.isArray(v)?v:[v.x,v.y]);
    line(c,pts,color,5); line(c,pts,'#f8f4ff',1.5);
  } else if(e.type==='explosion') {
    circle(c,e.x,e.y,size*(.3+p*.8),null,color,2*remain+.3);
    if(p<.5) { circle(c,e.x,e.y,size*(.45-p*.4),'#fff0ca'); circle(c,e.x,e.y,size*(.7-p*.4),null,'#ffd7a5',3); }
    if(!reduced) for(let j=0;j<7;j++) {
      const a=j/7*TAU+hash(j+size)*.5, len=size*(.5+p), r=size*(.15+p*.85);
      line(c,[[e.x+Math.cos(a)*r,e.y+Math.sin(a)*r],[e.x+Math.cos(a)*len,e.y+Math.sin(a)*len]],color,2*remain);
    }
  } else if(e.type==='ring') circle(c,e.x,e.y,size*(.15+p),null,color,3*remain+1);
  else { circle(c,e.x,e.y,Math.max(1,size*remain*.18),color); }
  c.restore();
}

/** Paint the game without owning simulation, canvas sizing, DOM, or timers. */
export function drawFrame(c,game,{idleTime=0,reducedMotion=false}={}) {
  const t=game.time||0, stage=clamp(game.stageIndex|0,0,4), idle=game.mode==='hangar';
  c.save();
  c.beginPath(); c.rect(0,0,W,H); c.clip();
  background(c,stage,reducedMotion?0:idle?idleTime:t);
  if(idle) {
    c.save(); c.translate(240,230);
    c.strokeStyle='#92d3e020'; c.lineWidth=1;
    for(const r of [73,116,146]) { c.beginPath(); c.arc(0,0,r,0,TAU); c.stroke(); }
    for(let i=0;i<16;i++) { const a=i/16*TAU; line(c,[[Math.cos(a)*139,Math.sin(a)*139],[Math.cos(a)*146,Math.sin(a)*146]],'#a3d8e14a'); }
    line(c,[[-184,0],[-157,0]],'#a3d8e133'); line(c,[[157,0],[184,0]],'#a3d8e133'); c.restore();
    drawShip(c,240,220+(reducedMotion?0:Math.sin(idleTime)*4),game.player?.shipId||0,2.7,reducedMotion?0:idleTime);
    c.restore(); return;
  }
  c.save();
  const shake=reducedMotion?0:Math.min(9,game.shake||0);
  if(shake) c.translate(Math.sin(t*93)*shake,Math.cos(t*107)*shake*.6);
  for(const b of game.beams||[]) beam(c,b,t,reducedMotion);
  for(const s of game.shots||[]) projectile(c,s,true);
  for(const e of game.enemies||[]) enemy(c,e,reducedMotion?0:t);
  const player=game.player;
  if(player&&player.health>0) {
    if(player.shield>0) {
      c.globalAlpha=.16+.19*clamp(player.shield/(player.maxShield||100));
      c.beginPath(); c.ellipse(player.x,player.y,32,37,0,0,TAU); c.fillStyle='#58b6e722'; c.fill(); c.strokeStyle='#9beaff'; c.lineWidth=1.5; c.stroke(); c.globalAlpha=1;
    }
    if(player.overdriveTime>0) { circle(c,player.x,player.y,40,null,'#ffda8499',1.5); circle(c,player.x,player.y,45,null,'#ffe3a333'); }
    c.globalAlpha=player.invulnerable>0?(reducedMotion?.62:.48+.52*Math.abs(Math.sin(t*20))):1;
    drawShip(c,player.x,player.y,player.shipId,1,reducedMotion?0:t,player.bank||0);
    c.globalAlpha=1;
    // The visible centre is the small gameplay hitbox, not the wing silhouette.
    circle(c,player.x,player.y,4.4,'#061121','#cefcff',1.1);
    circle(c,player.x,player.y,1.8,'#e5ffff');
  }
  for(const b of game.bullets||[]) projectile(c,b);
  for(const d of game.drops||[]) drop(c,d,t,reducedMotion);
  for(const e of game.effects||[]) effect(c,e,reducedMotion);
  c.restore();
  if(game.flash>0&&!reducedMotion) { c.globalAlpha=Math.min(.18,game.flash*.18); c.fillStyle='#d5f0ff'; c.fillRect(0,0,W,H); c.globalAlpha=1; }
  c.restore();
}
