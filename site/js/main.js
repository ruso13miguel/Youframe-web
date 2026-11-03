const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fino = matchMedia("(hover:hover) and (pointer:fine)").matches;
const waLink = (msg) => WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}` : INSTAGRAM;

/* ---------------- ilustraciones de ejemplo (canvas) ---------------- */
function rnd(seed){let s=seed%2147483647;if(s<=0)s+=2147483646;return()=>(s=s*16807%2147483647)/2147483647}
function cerros(c,w,h,base,amp,col,r,steps=12){c.fillStyle=col;c.beginPath();c.moveTo(0,h);let y=base;for(let i=0;i<=steps;i++){y=base-amp*(.4+r()*.6)*(i%2?1:.6);c.lineTo(w*i/steps,y)}c.lineTo(w,h);c.closePath();c.fill()}
function pintar(cv,k,seed=7){
  const c=cv.getContext("2d"),w=cv.width,h=cv.height,r=rnd(seed*97+k.length*13);let g;
  c.clearRect(0,0,w,h);
  switch(k){
  case"atardecer":
    g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,"#2a1b3d");g.addColorStop(.45,"#c2553a");g.addColorStop(.7,"#f2a65a");g.addColorStop(1,"#f6d58e");c.fillStyle=g;c.fillRect(0,0,w,h);
    c.fillStyle="rgba(255,230,170,.95)";c.beginPath();c.arc(w*.6,h*.58,w*.13,0,7);c.fill();
    cerros(c,w,h,h*.66,h*.12,"#7a3a35",r);cerros(c,w,h,h*.76,h*.1,"#4a2430",r,9);cerros(c,w,h,h*.88,h*.08,"#22141e",r,7);break;
  case"ciudad":
    g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,"#070b1e");g.addColorStop(.6,"#1a1f45");g.addColorStop(1,"#2d2140");c.fillStyle=g;c.fillRect(0,0,w,h);
    for(let i=0;i<60;i++){c.fillStyle=`rgba(255,255,255,${r()*.6})`;c.fillRect(r()*w,r()*h*.4,1.5,1.5)}
    cerros(c,w,h,h*.45,h*.1,"#11152e",r,8);cerros(c,w,h,h*.62,h*.08,"#0b0e22",r,10);
    for(let i=0;i<900;i++){const x=r()*w,y=h*.5+Math.pow(r(),.7)*h*.5;c.fillStyle=r()>.3?`rgba(255,${190+r()*50|0},${110+r()*60|0},${.5+r()*.5})`:"rgba(200,220,255,.7)";c.fillRect(x,y,1.6+r()*1.4,1.6+r()*1.4)}break;
  case"flores":
    c.fillStyle="#1d2a1c";c.fillRect(0,0,w,h);
    const pal=["#e94f37","#f6c344","#f28fad","#ffffff","#f08a24","#a14ac2"];
    for(let i=0;i<46;i++){const x=r()*w,y=r()*h,s=12+r()*30,col=pal[r()*pal.length|0];for(let p=0;p<7;p++){c.fillStyle=col;c.beginPath();c.ellipse(x+Math.cos(p)*s*.6,y+Math.sin(p)*s*.6,s*.5,s*.28,p,0,7);c.fill()}c.fillStyle="#3b2a12";c.beginPath();c.arc(x,y,s*.22,0,7);c.fill()}break;
  case"sepia": case"sepia-nuevo":
    const nuevo=k==="sepia-nuevo";
    g=c.createRadialGradient(w/2,h*.4,10,w/2,h/2,h*.75);g.addColorStop(0,nuevo?"#d9cbb4":"#cdb48a");g.addColorStop(1,nuevo?"#6f6352":"#5a4326");c.fillStyle=g;c.fillRect(0,0,w,h);
    c.fillStyle=nuevo?"#2c2f3a":"#3b2b1a";c.beginPath();c.ellipse(w/2,h*.38,w*.15,h*.15,0,0,7);c.fill();
    c.beginPath();c.moveTo(w*.18,h);c.quadraticCurveTo(w*.2,h*.58,w/2,h*.56);c.quadraticCurveTo(w*.8,h*.58,w*.82,h);c.fill();
    c.fillStyle=nuevo?"#c69c7e":"#a07c55";c.beginPath();c.ellipse(w/2,h*.4,w*.11,h*.12,0,0,7);c.fill();
    c.fillStyle=nuevo?"#e7e2d6":"#d8c4a0";c.beginPath();c.moveTo(w*.44,h*.56);c.lineTo(w/2,h*.68);c.lineTo(w*.56,h*.56);c.fill();
    if(nuevo){c.fillStyle="#7a2230";c.beginPath();c.moveTo(w*.485,h*.58);c.lineTo(w*.515,h*.58);c.lineTo(w*.505,h*.68);c.lineTo(w*.495,h*.68);c.fill()}
    if(!nuevo){c.strokeStyle="rgba(255,245,220,.55)";for(let i=0;i<14;i++){c.lineWidth=.5+r()*1.5;c.beginPath();const x=r()*w;c.moveTo(x,r()*h);c.lineTo(x+(r()-.5)*80,r()*h);c.stroke()}
      for(let i=0;i<5;i++){c.fillStyle=`rgba(90,60,25,${.2+r()*.3})`;c.beginPath();c.arc(r()*w,r()*h,10+r()*40,0,7);c.fill()}
      c.fillStyle="rgba(255,240,210,.25)";c.beginPath();c.moveTo(w,0);c.lineTo(w*.7,0);c.lineTo(w,h*.25);c.fill();
      const id=c.getImageData(0,0,w,h),d=id.data;for(let i=0;i<d.length;i+=4){const n=(r()-.5)*40;d[i]+=n;d[i+1]+=n;d[i+2]+=n}c.putImageData(id,0,0)}
    break;
  case"pareja":
    g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,"#f3b47a");g.addColorStop(.55,"#f6d1a1");g.addColorStop(.56,"#6a8ea3");g.addColorStop(1,"#c9a77c");c.fillStyle=g;c.fillRect(0,0,w,h);
    c.fillStyle="rgba(255,240,200,.9)";c.beginPath();c.arc(w*.5,h*.52,w*.09,0,7);c.fill();
    c.fillStyle="#2a1a17";[[.42,1],[.56,.93]].forEach(([x,s])=>{c.beginPath();c.arc(w*x,h*.6,w*.035*s,0,7);c.fill();c.fillRect(w*x-w*.035*s,h*.63,w*.07*s,h*.2*s);c.fillRect(w*x-w*.025*s,h*.8,w*.05*s,h*.12)});
    c.strokeStyle="#2a1a17";c.lineWidth=6;c.beginPath();c.moveTo(w*.46,h*.7);c.lineTo(w*.52,h*.7);c.stroke();break;
  case"cafetal":
    g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,"#bcd6e6");g.addColorStop(.4,"#e9e2c8");c.fillStyle=g;c.fillRect(0,0,w,h);
    cerros(c,w,h,h*.4,h*.08,"#6f8f6a",r,6);cerros(c,w,h,h*.55,h*.1,"#3f6b3a",r,7);
    c.fillStyle="#2f5a2c";c.fillRect(0,h*.62,w,h*.38);
    for(let y=h*.64;y<h;y+=18)for(let x=(y/18%2)*12;x<w;x+=24){c.fillStyle=r()>.1?"#1f4a22":"#b5282c";c.beginPath();c.arc(x,y,7+r()*3,0,7);c.fill()}
    c.fillStyle="#f2efe6";c.fillRect(w*.62,h*.5,w*.14,h*.07);c.fillStyle="#a23a2a";c.beginPath();c.moveTo(w*.6,h*.5);c.lineTo(w*.69,h*.45);c.lineTo(w*.78,h*.5);c.fill();break;
  case"mar":
    g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,"#7fb7d6");g.addColorStop(.5,"#d8ecf2");g.addColorStop(.51,"#1d6e8a");g.addColorStop(.8,"#3aa3b5");g.addColorStop(.81,"#e8d6ab");g.addColorStop(1,"#d9c08d");c.fillStyle=g;c.fillRect(0,0,w,h);
    c.strokeStyle="rgba(255,255,255,.6)";for(let i=0;i<20;i++){c.lineWidth=1+r()*2;c.beginPath();const y=h*.52+r()*h*.28,x=r()*w;c.moveTo(x,y);c.quadraticCurveTo(x+30,y-4,x+70,y);c.stroke()}
    c.fillStyle="#2c3b25";c.save();c.translate(w*.18,h*.9);c.rotate(-.2);c.fillRect(-4,-h*.5,8,h*.5);for(let i=0;i<7;i++){c.beginPath();c.ellipse(0,-h*.5,70,12,i*.9,0,7);c.fill()}c.restore();break;
  case"abstracto":
    c.fillStyle="#0e0d10";c.fillRect(0,0,w,h);
    for(let i=0;i<9;i++){g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,"#7a5a20");g.addColorStop(.5,"#e8cb7a");g.addColorStop(1,"#a7822f");c.strokeStyle=g;c.globalAlpha=.25+r()*.6;c.lineWidth=6+r()*40;c.lineCap="round";c.beginPath();c.moveTo(r()*w,r()*h);c.bezierCurveTo(r()*w,r()*h,r()*w,r()*h,r()*w,r()*h);c.stroke()}
    c.globalAlpha=1;c.fillStyle="#f2eadb";c.beginPath();c.arc(w*.68,h*.3,w*.06,0,7);c.fill();break;
  case"led": case"arco": case"tocador":
    g=c.createRadialGradient(w*.45,h*.35,10,w/2,h/2,h*.7);g.addColorStop(0,"#e9ecef");g.addColorStop(.6,"#9aa0a7");g.addColorStop(1,"#5b6066");c.fillStyle=g;c.fillRect(0,0,w,h);
    c.fillStyle="rgba(255,255,255,.35)";c.beginPath();c.moveTo(w*.15,0);c.lineTo(w*.35,0);c.lineTo(w*.05,h);c.lineTo(-w*.15,h);c.fill();
    if(k==="tocador"){c.fillStyle="#fff7df";for(let i=0;i<6;i++){[[w*.06,h*(.12+i*.15)],[w*.94,h*(.12+i*.15)]].forEach(([x,y])=>{c.shadowColor="#FFE9B8";c.shadowBlur=24;c.beginPath();c.arc(x,y,w*.035,0,7);c.fill()})}c.shadowBlur=0}
    break;
  }
}
function pintarObra(cv,o,i){
  if(o.src){const im=new Image();im.onload=()=>{const c=cv.getContext("2d");setTimeout(()=>cv.alListo&&cv.alListo());const s=Math.max(cv.width/im.width,cv.height/im.height);c.drawImage(im,(cv.width-im.width*s)/2,(cv.height-im.height*s)/2,im.width*s,im.height*s)};im.src=o.src}
  else pintar(cv,o.k,i+3);
}

/* ---------------- loader ---------------- */
const loader=document.getElementById("loader"),barraL=loader.querySelector(".barra i"),pctL=loader.querySelector(".pct");
let carga=0,listo=false;
function tickLoader(){carga+= (listo?100-carga:(92-carga))*.06; barraL.style.transform=`scaleX(${carga/100})`; pctL.textContent=String(Math.round(carga)).padStart(3,"0"); if(listo&&carga>99.3){loader.classList.add("fuera");return}requestAnimationFrame(tickLoader)}
tickLoader();
const terminar=()=>{listo=true};
Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,2500))]).then(()=>setTimeout(terminar,400));
setTimeout(terminar,3500);

/* ---------------- scroll suave ---------------- */
let lenis=null;
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger)}
if(window.Lenis&&!reduce){lenis=new Lenis({lerp:.085,smoothWheel:true});
  if(window.gsap){lenis.on("scroll",ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
  else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href");if(id.length<2)return;const el=document.querySelector(id);if(!el)return;e.preventDefault();lenis?lenis.scrollTo(el,{duration:1.6}):el.scrollIntoView({behavior:"smooth"})}));
const nav=document.querySelector("nav.top");
addEventListener("scroll",()=>nav.classList.toggle("solida",scrollY>innerHeight*.5),{passive:true});

/* ---------------- túnel 3D ---------------- */
const tunel=document.getElementById("tunel"),heroTxt=document.getElementById("heroTxt");
const caps=[...document.querySelectorAll(".capitulo")],marcas=[...document.querySelectorAll(".medidor span")];
let prog=0,progSuave=0;
function leerProg(){const r=tunel.getBoundingClientRect(),tot=tunel.offsetHeight-innerHeight;prog=Math.min(1,Math.max(0,-r.top/tot))}
addEventListener("scroll",leerProg,{passive:true});leerProg();

const meshesObra=[];
function iniciar3D(){
  if(!window.THREE)return;
  const cv=document.getElementById("gl");
  const ren=new THREE.WebGLRenderer({canvas:cv,antialias:true,powerPreference:"high-performance"});
  ren.setPixelRatio(Math.min(devicePixelRatio,1.75));ren.outputEncoding=THREE.sRGBEncoding;
  const esc=new THREE.Scene();esc.background=new THREE.Color(0x0B0A0C);esc.fog=new THREE.Fog(0x0B0A0C,8,46);
  const cam=new THREE.PerspectiveCamera(55,1,.1,200);
  const LARGO=172,Z0=14;

  // luces
  esc.add(new THREE.AmbientLight(0x6b5a44,.55));
  const luzCam=new THREE.PointLight(0xffe2b0,1.6,22,1.6);esc.add(luzCam);
  const hemi=new THREE.HemisphereLight(0xffe9b8,0x0b0a0c,.35);esc.add(hemi);

  // materiales de marco
  const MAT={
    "Oro":new THREE.MeshStandardMaterial({color:0xc9a24a,metalness:.75,roughness:.32,emissive:0x2a1d06}),
    "Plata":new THREE.MeshStandardMaterial({color:0xcfd3d8,metalness:.8,roughness:.25,emissive:0x15171a}),
    "Negro mate":new THREE.MeshStandardMaterial({color:0x1a181c,metalness:.2,roughness:.7}),
    "Madera":new THREE.MeshStandardMaterial({color:0x8c6a3a,metalness:.1,roughness:.6,emissive:0x140c04}),
    "Lienzo":new THREE.MeshStandardMaterial({color:0xf4efe6,metalness:0,roughness:.9,emissive:0x2a2620})
  };
  const paspartu=new THREE.MeshBasicMaterial({color:0xf4efe6});

  // pasillo
  const pared=new THREE.MeshStandardMaterial({color:0x151317,roughness:.95});
  const piso=new THREE.MeshStandardMaterial({color:0x0f0e11,roughness:.3,metalness:.4});
  const pl=(w,h,m)=>new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);
  const pI=pl(LARGO+20,8,pared);pI.position.set(-5,1,-LARGO/2+4);pI.rotation.y=Math.PI/2;esc.add(pI);
  const pD=pl(LARGO+20,8,pared);pD.position.set(5,1,-LARGO/2+4);pD.rotation.y=-Math.PI/2;esc.add(pD);
  const pP=pl(10,LARGO+20,piso);pP.rotation.x=-Math.PI/2;pP.position.set(0,-2.4,-LARGO/2+4);esc.add(pP);
  const pT=pl(10,LARGO+20,pared);pT.rotation.x=Math.PI/2;pT.position.set(0,4.4,-LARGO/2+4);esc.add(pT);
  const ledM=new THREE.MeshBasicMaterial({color:0xe8cb7a});
  [[-4.95,-2.35],[4.95,-2.35],[-4.95,4.35],[4.95,4.35]].forEach(([x,y])=>{const b=new THREE.Mesh(new THREE.BoxGeometry(.04,.04,LARGO+20),ledM);b.position.set(x,y,-LARGO/2+4);esc.add(b)});
  // arcos dorados cada tramo
  for(let z=-10;z>-LARGO;z-=22){const a=new THREE.Mesh(new THREE.TorusGeometry(4.6,.025,6,80,Math.PI),ledM);a.position.set(0,1,z);esc.add(a)}

  // cuadros
  const geoP=new THREE.PlaneGeometry(1,1);
  const N=18;
  for(let i=0;i<N;i++){
    const o=OBRAS[i%OBRAS.length],lado=i%2?1:-1,z=-6-i*8.6;
    const g=new THREE.Group();
    const ancho=2.1+((i*7)%3)*.25,alto=ancho*1.25;
    const marco=new THREE.Mesh(new THREE.BoxGeometry(ancho+.32,alto+.32,.14),MAT[o.marco]);g.add(marco);
    const pas=new THREE.Mesh(new THREE.PlaneGeometry(ancho,alto),paspartu);pas.position.z=.072;g.add(pas);
    const cvO=document.createElement("canvas");cvO.width=400;cvO.height=500;pintarObra(cvO,o,i);
    const tex=new THREE.CanvasTexture(cvO);tex.encoding=THREE.sRGBEncoding;tex.anisotropy=4;
    cvO.alListo=()=>tex.needsUpdate=true;
    setTimeout(()=>tex.needsUpdate=true,1200);
    const art=new THREE.Mesh(geoP,new THREE.MeshBasicMaterial({map:tex}));art.scale.set(ancho*.84,alto*.84,1);art.position.z=.075;g.add(art);
    art.userData={o,i};meshesObra.push(art);
    // foco de luz sobre el cuadro
    const foco=new THREE.Mesh(new THREE.PlaneGeometry(ancho+1.4,alto+1.4),new THREE.MeshBasicMaterial({map:haloTex(),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.55}));foco.position.z=-.02;g.add(foco);
    g.position.set(lado*4.7,1.1,z);g.rotation.y=-lado*Math.PI/2*.82;
    g.userData.base=g.rotation.y;esc.add(g);
  }

  // espejo portal
  const portal=new THREE.Group();portal.position.set(0,1,6);esc.add(portal);
  const aro=new THREE.Mesh(new THREE.TorusGeometry(2.6,.11,24,160),MAT["Oro"]);aro.scale.set(1,1.38,1);portal.add(aro);
  const aro2=new THREE.Mesh(new THREE.TorusGeometry(2.42,.02,8,160),new THREE.MeshBasicMaterial({color:0xffe9b8}));aro2.scale.set(1,1.38,1);portal.add(aro2);
  const cvE=document.createElement("canvas");cvE.width=512;cvE.height=512;{const c=cvE.getContext("2d");let g=c.createRadialGradient(220,200,10,256,256,300);g.addColorStop(0,"#cfd2d6");g.addColorStop(.55,"#6c7076");g.addColorStop(1,"#2a2c30");c.fillStyle=g;c.fillRect(0,0,512,512);c.fillStyle="rgba(255,255,255,.18)";c.beginPath();c.moveTo(90,0);c.lineTo(190,0);c.lineTo(40,512);c.lineTo(-60,512);c.fill();g=c.createRadialGradient(256,256,180,256,256,256);g.addColorStop(0,"rgba(255,233,184,0)");g.addColorStop(1,"rgba(255,233,184,.9)");c.fillStyle=g;c.fillRect(0,0,512,512)}
  const texE=new THREE.CanvasTexture(cvE);texE.encoding=THREE.sRGBEncoding;
  const luna=new THREE.Mesh(new THREE.CircleGeometry(2.5,96),new THREE.MeshBasicMaterial({map:texE,transparent:true}));luna.scale.set(1,1.38,1);luna.position.z=-.01;portal.add(luna);
  const halo=new THREE.Mesh(new THREE.PlaneGeometry(10,12),new THREE.MeshBasicMaterial({map:haloTex(),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.6}));halo.position.z=-.2;portal.add(halo);

  // luz de salida
  const salida=new THREE.Mesh(new THREE.PlaneGeometry(14,14),new THREE.MeshBasicMaterial({map:haloTex(),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));salida.position.set(0,1,-LARGO+2);esc.add(salida);

  // polvo dorado
  const nP=innerWidth<700?500:1200,pos=new Float32Array(nP*3);
  for(let i=0;i<nP;i++){pos[i*3]=(Math.random()-.5)*9;pos[i*3+1]=-2+Math.random()*6.2;pos[i*3+2]=Z0+4-Math.random()*(LARGO+12)}
  const gp=new THREE.BufferGeometry();gp.setAttribute("position",new THREE.BufferAttribute(pos,3));
  const polvo=new THREE.Points(gp,new THREE.PointsMaterial({color:0xe8cb7a,size:.035,transparent:true,opacity:.8,depthWrite:false,blending:THREE.AdditiveBlending}));esc.add(polvo);

  function haloTex(){if(haloTex.t)return haloTex.t;const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d"),g=x.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,"rgba(255,233,184,.9)");g.addColorStop(.35,"rgba(255,220,150,.35)");g.addColorStop(1,"rgba(255,220,150,0)");x.fillStyle=g;x.fillRect(0,0,256,256);haloTex.t=new THREE.CanvasTexture(c);return haloTex.t}

  function tam(){const w=cv.clientWidth,h=cv.clientHeight;ren.setSize(w,h,false);cam.aspect=w/h;cam.fov=w<h?72:55;cam.updateProjectionMatrix()}
  addEventListener("resize",tam);tam();

  // interacción
  const ray=new THREE.Raycaster(),m=new THREE.Vector2(),mSuave=new THREE.Vector2();let hover=null;
  const tip=document.getElementById("tip"),cur=document.getElementById("cur");
  cv.parentElement.addEventListener("pointermove",e=>{const r=cv.getBoundingClientRect();m.x=(e.clientX-r.left)/r.width*2-1;m.y=-(e.clientY-r.top)/r.height*2+1;tip.style.left=e.clientX+"px";tip.style.top=e.clientY+"px"});
  cv.parentElement.addEventListener("pointerleave",()=>{m.set(0,0);hover=null;tip.style.opacity=0;cur.classList.remove("grande")});
  cv.parentElement.addEventListener("click",()=>{if(hover)abrirCaja(hover.userData.o,hover.userData.i)});

  let t=0;
  function frame(){
    t+=.016;progSuave+=(prog-progSuave)*(reduce?1:.08);
    const p=progSuave,z=Z0-p*(LARGO-4);
    mSuave.x+=(m.x-mSuave.x)*.05;mSuave.y+=(m.y-mSuave.y)*.05;
    cam.position.set(mSuave.x*.6+Math.sin(t*.4)*.08,1+mSuave.y*.35+Math.sin(t*.7)*.04,z);
    cam.lookAt(mSuave.x*1.2,1+mSuave.y*.4,z-10);
    luzCam.position.set(cam.position.x,cam.position.y+.6,z-2.5);
    // portal: el espejo se abre al acercarse
    const a=Math.min(1,Math.max(0,(p-.005)/.04));
    luna.material.opacity=1-a;halo.material.opacity=.6*(1-a*.6);
    aro.rotation.z=Math.sin(t*.3)*.02;
    polvo.rotation.z=Math.sin(t*.1)*.02;
    // cuadros respiran
    for(const art of meshesObra){const g=art.parent;g.rotation.y=g.userData.base+Math.sin(t*.6+art.userData.i)*.015}
    // hover
    if(fino&&p>.04&&p<.97){ray.setFromCamera(m,cam);const hit=ray.intersectObjects(meshesObra)[0];const nh=hit&&hit.distance<14?hit.object:null;
      if(nh!==hover){hover=nh;if(hover){tip.querySelector("b").textContent=hover.userData.o.t;tip.querySelector("small").textContent=hover.userData.o.tipo+" · "+hover.userData.o.med;tip.style.opacity=1;cur.classList.add("grande");cv.style.cursor="pointer"}else{tip.style.opacity=0;cur.classList.remove("grande");cv.style.cursor=""}}}
    // textos
    heroTxt.style.opacity=Math.max(0,1-p/.035);heroTxt.style.transform=`translateY(${-p*900}px)`;
    caps.forEach(c=>{const d=+c.dataset.de,h=+c.dataset.a,mid=(d+h)/2,half=(h-d)/2;const v=Math.max(0,1-Math.abs(p-mid)/half);c.style.opacity=Math.min(1,v*1.6);c.style.transform=`translateY(calc(-50% + ${(p-mid)*-600}px))`});
    const sec=p<.05?0:p<.25?1:p<.8?2:3;marcas.forEach((s,i)=>s.classList.toggle("on",i===sec));
    if(tunel.getBoundingClientRect().bottom>0)ren.render(esc,cam);
    requestAnimationFrame(frame);
  }
  frame();
}
iniciar3D();

/* ---------------- cursor ---------------- */
const cur=document.getElementById("cur");
if(fino){let cx=innerWidth/2,cy=innerHeight/2,x=cx,y=cy;addEventListener("pointermove",e=>{cx=e.clientX;cy=e.clientY});(function mv(){x+=(cx-x)*.2;y+=(cy-y)*.2;cur.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(mv)})();
  document.addEventListener("pointerover",e=>{const el=e.target.closest("a,button,[data-cursor],.carril");if(el){cur.classList.add("grande");cur.querySelector("span").textContent=el.classList.contains("carril")?"ARRASTRA":"VER"}});
  document.addEventListener("pointerout",e=>{const el=e.target.closest("a,button,[data-cursor],.carril");if(el&&!el.contains(e.relatedTarget))cur.classList.remove("grande")})}

/* ---------------- caja de detalle ---------------- */
const caja=document.getElementById("caja");
function abrirCaja(o,i){pintarObra(document.getElementById("cCaja"),o,i);
  document.getElementById("cajaT").textContent=o.t;document.getElementById("cajaTipo").textContent=o.tipo;
  document.getElementById("cajaMed").textContent=o.med;document.getElementById("cajaNota").hidden=!!o.src;document.getElementById("cajaMarco").textContent=o.marco;
  document.getElementById("cajaWa").href=waLink(`Hola YouFrame, vi "${o.t}" en la web y quiero un cuadro así (${o.med}, marco ${o.marco.toLowerCase()}).`);
  caja.classList.add("abierta");lenis&&lenis.stop();document.getElementById("cerrar").focus()}
function cerrarCaja(){caja.classList.remove("abierta");lenis&&lenis.start()}
document.getElementById("cerrar").onclick=cerrarCaja;caja.addEventListener("click",e=>{if(e.target===caja)cerrarCaja()});addEventListener("keydown",e=>{if(e.key==="Escape")cerrarCaja()});

/* ---------------- colección arrastrable ---------------- */
const pistaC=document.getElementById("pistaC"),carril=document.getElementById("carril"),barraC=document.getElementById("barraC");
PRODUCTOS.forEach((p,i)=>{const el=document.createElement("article");el.className="pieza "+p.c;
  el.innerHTML=`<div class="marco"><div class="lienzo"><canvas width="400" height="500"></canvas></div></div><div class="meta"><div><h3>${p.t}</h3><p>${p.d}</p></div><span class="num">${String(i+1).padStart(2,"0")} / ${String(PRODUCTOS.length).padStart(2,"0")}</span></div>`;
  pistaC.appendChild(el);pintar(el.querySelector("canvas"),p.k,i+11)});
let px=0,pxObj=0,arrastre=null,vel=0;
const maxX=()=>Math.max(0,pistaC.scrollWidth-carril.clientWidth);
carril.addEventListener("pointerdown",e=>{arrastre={x:e.clientX,y:e.clientY,base:pxObj,mov:false};vel=0;carril.classList.add("agarrando")});
addEventListener("pointermove",e=>{if(!arrastre)return;const dx=e.clientX-arrastre.x;if(Math.abs(dx)>4)arrastre.mov=true;const nuevo=arrastre.base-dx;vel=nuevo-pxObj;pxObj=nuevo});
addEventListener("pointerup",()=>{if(!arrastre)return;arrastre=null;carril.classList.remove("agarrando");pxObj+=vel*10});
const paso=()=>pistaC.children[0].getBoundingClientRect().width+parseFloat(getComputedStyle(pistaC).gap);
document.getElementById("next").onclick=()=>pxObj+=paso();document.getElementById("prev").onclick=()=>pxObj-=paso();
(function anim(){pxObj=Math.min(maxX()+60,Math.max(-60,pxObj));if(!arrastre)pxObj+= (Math.min(maxX(),Math.max(0,pxObj))-pxObj)*.15;px+=(pxObj-px)*(reduce?1:.12);
  pistaC.style.transform=`translate3d(${-px}px,0,0)`;const m=maxX()||1,f=Math.min(1,Math.max(0,px/m));barraC.style.width=(18+f*82)+"%";
  [...pistaC.children].forEach((c,i)=>{const r=c.getBoundingClientRect(),cx=(r.left+r.width/2)/innerWidth-.5;c.querySelector(".marco").style.transform=`perspective(900px) rotateY(${cx*-14}deg)`});
  requestAnimationFrame(anim)})();

/* ---------------- personalizador ---------------- */
const ACAB={oro:["linear-gradient(135deg,#6e5222,#e8cb7a 28%,#a7822f 52%,#f3dc95 74%,#7a5a20)","#7a5a20","Oro"],
  plata:["linear-gradient(135deg,#7d838a,#eef1f4 28%,#9ea4ab 52%,#ffffff 74%,#6f757c)","#8d939a","Plata"],
  negro:["linear-gradient(135deg,#050506,#2b282c 40%,#0b0a0c 70%,#363238)","#0b0a0c","Negro mate"],
  madera:["linear-gradient(135deg,#4b3216,#9c7340 28%,#6a4a22 52%,#b58a52 74%,#4b3216)","#4b3216","Madera"]};
const f3d=document.getElementById("f3d"),esce=document.getElementById("escenario"),brillo=document.getElementById("brillo");
let sel={marco:"oro",tam:"50 × 70 cm",esc:.8,img:OBRAS[0]};
function aplicar(){const a=ACAB[sel.marco];f3d.style.setProperty("--acabado",a[0]);f3d.style.setProperty("--acabado-lado",a[1]);
  const W=esce.clientWidth*sel.esc*.7;f3d.style.width=W+"px";f3d.style.height=W*1.25+"px";
  document.getElementById("lblMarco").textContent=a[2];document.getElementById("lblTam").textContent=sel.tam;document.getElementById("lblImg").textContent=sel.img.t;
  document.getElementById("resumen").textContent=`marco ${a[2].toLowerCase()}, ${sel.tam}`;
  document.getElementById("pedirEste").href=waLink(`Hola YouFrame, quiero cotizar un cuadro con marco ${a[2].toLowerCase()} de ${sel.tam}. Les envío mi foto.`)}
function grupoChips(id,cb){const g=document.getElementById(id);g.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;g.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));cb(b);aplicar()})}
grupoChips("chMarco",b=>{sel.marco=b.dataset.v;if(window.gsap&&!reduce)gsap.fromTo(f3d,{rotateY:-30},{rotateY:0,duration:1.2,ease:"expo.out"})});
grupoChips("chTam",b=>{sel.tam=b.dataset.v;sel.esc=+b.dataset.s});
const chImg=document.getElementById("chImg");OBRAS.slice(0,5).forEach((o,i)=>{const b=document.createElement("button");b.type="button";b.className="chip solo";b.dataset.i=i;b.textContent=o.t.split(" ")[0]==="El"?o.t.split(" ").slice(0,2).join(" "):o.t.split(" ")[0];b.setAttribute("aria-pressed",i===0);chImg.appendChild(b)});
grupoChips("chImg",b=>{sel.img=OBRAS[+b.dataset.i];pintarObra(document.getElementById("cPerso"),sel.img,+b.dataset.i)});
pintarObra(document.getElementById("cPerso"),OBRAS[0],0);aplicar();addEventListener("resize",aplicar);
let rx=0,ry=0,trx=-6,try_=18;
esce.addEventListener("pointermove",e=>{const r=esce.getBoundingClientRect();try_=((e.clientX-r.left)/r.width-.5)*50;trx=-((e.clientY-r.top)/r.height-.5)*30});
esce.addEventListener("pointerleave",()=>{trx=-6;try_=18});
(function rot(){rx+=(trx-rx)*.08;ry+=(try_-ry)*.08;if(!reduce)f3d.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;brillo.style.backgroundPosition=`${ry*3}px 0`;brillo.style.transform=`translateX(${ry*1.2}%)`;requestAnimationFrame(rot)})();

/* ---------------- antes / después ---------------- */
pintar(document.getElementById("cViejo"),"sepia",5);pintar(document.getElementById("cNuevo"),"sepia-nuevo",5);
const cmp=document.getElementById("comparar");let mov=false;
const setCorte=x=>{const r=cmp.getBoundingClientRect(),v=Math.min(100,Math.max(0,(x-r.left)/r.width*100));cmp.style.setProperty("--corte",v+"%");cmp.setAttribute("aria-valuenow",Math.round(v))};
cmp.addEventListener("pointerdown",e=>{mov=true;setCorte(e.clientX)});addEventListener("pointermove",e=>mov&&setCorte(e.clientX));addEventListener("pointerup",()=>mov=false);
cmp.addEventListener("keydown",e=>{let v=+cmp.getAttribute("aria-valuenow");if(e.key==="ArrowLeft")v-=5;else if(e.key==="ArrowRight")v+=5;else return;v=Math.min(100,Math.max(0,v));cmp.style.setProperty("--corte",v+"%");cmp.setAttribute("aria-valuenow",v)});

/* ---------------- WhatsApp ---------------- */
document.getElementById("ctaWa").href=waLink("Hola YouFrame, quiero cotizar un cuadro.");

/* ---------------- revelados de texto ---------------- */
if(window.gsap&&window.ScrollTrigger&&!reduce){
  document.querySelectorAll(".split").forEach(h=>{h.innerHTML=h.textContent.split(" ").map(w=>`<span class="rev"><span>${w}</span></span>`).join(" ");
    gsap.from(h.querySelectorAll(".rev>span"),{yPercent:110,duration:1.1,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:h,start:"top 88%"}})});
  gsap.utils.toArray(".paso,.envios>div,.pieza").forEach((el,i)=>gsap.from(el,{y:40,opacity:0,duration:1,ease:"expo.out",delay:(i%4)*.08,scrollTrigger:{trigger:el,start:"top 92%"}}));
  gsap.from("#escenario",{scale:.85,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:"#escenario",start:"top 85%"}});
  gsap.fromTo("#halo",{scale:.6,opacity:0},{scale:1.1,opacity:1,ease:"none",scrollTrigger:{trigger:"#pedir",start:"top bottom",end:"center center",scrub:true}});
}
