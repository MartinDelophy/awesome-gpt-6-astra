// Handling values drive both the garage display and the race simulation.
export const craftDefs = [
  {name:'COMET',title:'Lightweight',tag:'Agile handling',description:'Lightweight and responsive. Built for quick direction changes.',style:'sport',scale:[.9,.95,1.04],accel:235,max:525,turn:1.25,drift:1.18,armor:45,mass:.8,color:0x66d9be},
  {name:'APEX',title:'All-rounder',tag:'Well balanced',description:'Balanced speed and handling. A great kart for your first race.',style:'sport',scale:[1,1,1],accel:210,max:560,turn:1,drift:1,armor:72,mass:1,color:0xffb24c},
  {name:'BOLT',title:'Speedster',tag:'Top speed',description:'High top speed and a wide body. Plan your corner entries early.',style:'sport',scale:[1.1,1.05,.98],accel:180,max:595,turn:.85,drift:.8,armor:120,mass:1.3,color:0xb6a1f6},
  {name:'SLIDE',title:'Drift specialist',tag:'Drift expert',description:'Low body kit and a double rear wing. Drift charges 40% faster than APEX.',style:'drift',scale:[1.05,.94,1.07],accel:220,max:535,turn:1.16,drift:1.4,armor:60,mass:.95,color:0xff87a7},
  {name:'RALLY',title:'Off-road',tag:'Heavy duty',description:'Off-road tires, roll cage and spotlights. Extra mass reduces collision knockback.',style:'rally',scale:[1.08,1.02,1],accel:195,max:550,turn:.94,drift:1.05,armor:110,mass:1.65,color:0xf1cc65},
  {name:'VINTAGE',title:'Classic',tag:'Quick launch',description:'Round headlights and a chrome grille. Quick acceleration with a lower top speed.',style:'retro',scale:[.94,1,1.08],accel:265,max:510,turn:1.1,drift:1.12,armor:55,mass:.9,color:0x99cbd4},
];
