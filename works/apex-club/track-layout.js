// Distinct authored loops. Both begin with an open straight before the first landmark.
export function circuitPoints(scene){
 if(scene==='citadel')return [[1080,160,0],[1080,165,340],[930,175,620],[630,185,640],[570,215,920],[280,225,990],[100,205,650],[-190,190,640],[-220,180,960],[-570,155,940],[-720,150,600],[-1080,170,490],[-1130,185,100],[-850,200,-130],[-1060,220,-450],[-870,230,-780],[-410,205,-820],[-250,175,-580],[100,150,-620],[390,150,-950],[790,155,-850],[1080,160,-490]];
 return [[1100,165,0],[1100,170,400],[840,180,740],[420,190,900],[-80,180,930],[-580,165,840],[-960,150,510],[-1100,150,70],[-970,155,-410],[-630,175,-780],[-160,190,-930],[350,180,-880],[800,160,-660],[1090,160,-350]];
}
export function roadHalfWidth(scene,t){
 if(scene!=='citadel')return 38;
 // Smoothly narrowed gate approaches with wider courtyard exits.
 const gates=[.025,.275,.525,.775];let proximity=1;
 for(const g of gates){const d=Math.abs(t-g);proximity=Math.min(proximity,Math.min(d,1-d)/.02);}
 return 30+8*Math.min(1,proximity);
}
