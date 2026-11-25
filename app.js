/* Más Uno · web-v4 */
(function(){
const $app=document.getElementById('app'), NEWS=window.MU_NEWS, CAT=window.MU_CAT, POSTS=window.MU_POSTS, IG=window.MU_IG;
const U=(id,w=1800)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const IMG={banner:U('1790008882005-6ea2c9b7e75a',2200), home:U('1653185460299-fbef9466c1e7',2200), orgs:U('1758599668429-121d54188b9c',2000)};
const IGURL='https://www.instagram.com/masuno/';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Number(n).toLocaleString('es-CL');
const tslug=t=>String(t).replace('#','').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-');
// rutas simples (#n-lectura, #tema-ninez, #organizaciones-ninez): funcionan también en la página publicada
const H=()=>decodeURIComponent(location.hash.replace(/^#\/?/,''));
const qs=()=>{const h=H(), m=h.match(/^organizaciones-(.+)$/);return {a:m?m[1]:'', n:window.__claim||''};};
document.addEventListener('click',e=>{const a=e.target.closest('[data-claim]');window.__claim=a?a.dataset.claim:'';});
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return u}};
const EX=window.MU_EXTRA;
const AREA=Object.fromEntries(CAT.areas.map((a,i)=>[a[0],{i,slug:a[0],name:a[1],...(EX.areas[a[0]]||{})}]));
// punto de encuadre de cada foto (generador/masuno_extra.json → foco), para que al recortarla queden las caras
const FOCO=EX.foco||{}, fid=u=>(String(u).match(/photo-([0-9a-f]+-[0-9a-f]+)/)||[])[1];
const fp=u=>`style="object-position:${FOCO[fid(u)]||'50% 35%'}"`;
const COUNT=CAT.areas.map((a,i)=>CAT.rows.reduce((s,r)=>s+(r[1]===i),0));
const TIEMPOS=EX.tiempos;
const postsOf=n=>POSTS.find(p=>p.id===n.post);
const IGICON='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/></svg>';
const store={get(k){try{return localStorage.getItem(k)||''}catch(e){return ''}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- texto ---------- */
// enlaza las URL de una línea de fuente y las muestra por su dominio
const linkify=s=>esc(s).replace(/https?:\/\/[^\s·]+/g,u=>{const c=u.replace(/[.,;)]+$/,''),rest=u.slice(c.length);return `<a href="${c}" target="_blank" rel="noopener">${esc(host(c))}</a>${rest}`});
const src=s=>s?`<span class="src">Fuente: ${linkify(s)}</span>`:'';
const tedSlug=u=>(String(u).match(/ted\.com\/talks\/([^?/#]+)/)||[])[1];
const tedFrame=(m)=>window.MU_PUBLICA?`<a class="vlink" href="${m.u}" target="_blank" rel="noopener"><span class="vplay">▶</span><div class="vcap"><small>Charla TED</small><b>${esc(m.t)}</b><small>${esc([m.a,m.y].filter(Boolean).join(' · '))}${m.d?'. '+esc(m.d):''}</small></div></a>`:`<div><div class="vframe"><iframe src="https://embed.ted.com/talks/${tedSlug(m.u)}?language=es" title="${esc(m.t)}" loading="lazy" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>
  <div class="vcap"><b>${esc(m.t)}</b><small>${esc([m.a,m.y].filter(Boolean).join(' · '))}${m.d?'. '+esc(m.d):''}</small></div></div>`;
function block(b,first){
  switch(b.k){
    case 'h': return b.h==='Lo que se ha probado'?'':`<h2>${esc(b.h)}</h2>`;
    case 'ask': return `<p class="ask">${esc(b.h)}</p>`;
    case 'dato': return `<div class="dato"><b>${esc(b.d)}</b><div><p>${esc(b.h)}</p>${src(b.src)}</div></div>`;
    case 'q': return `<blockquote class="pull"><p>«${esc(b.h)}»</p><footer>${esc(b.who)}</footer>${src(b.src)}</blockquote>`;
    case 'ul': return `<ul class="list">${b.li.map(x=>{const m=x.match(/^([^:]{3,40}):\s*(.*)$/);return `<li>${m?`<b>${esc(m[1])}.</b> ${esc(m[2].charAt(0).toUpperCase()+m[2].slice(1))}`:esc(x)}</li>`}).join('')}</ul>${src(b.src)}`;
    case 'ev': return `<div class="ev"><span class="tag ${b.tipo==='Funciona'?'si':'deb'}">${esc(b.tipo)}</span><div><b>${esc(b.t)}</b><p>${esc(b.h)}</p>${src(b.src)}</div></div>`;
    case 'media': return tedSlug(b.u)?`<div class="inline-media">${tedFrame({t:b.t,u:b.u})}</div>`
      :`<p>${esc(b.tipo)}: ${b.u?`<a href="${b.u}" target="_blank" rel="noopener">${esc(b.t)}</a>`:esc(b.t)}.</p>`;
    default: return `<p class="${first?'first':''}">${esc(b.h)}</p>${src(b.src)}`;
  }
}
// el texto corrido, con dos fotos a todo el ancho entre capítulos
function article(n){
  const bl=n.blocks, hs=bl.map((b,i)=>b.k==='h'&&b.h!=='Lo que se ha probado'?i:-1).filter(i=>i>0);
  const at=[hs[Math.floor(hs.length*.34)],hs[Math.floor(hs.length*.7)]];
  let out='',firstP=true;
  bl.forEach((b,i)=>{
    if(i===at[0]&&n.img2) out+=`</div><figure class="bleed reveal"><img src="${n.img2}" ${fp(n.img2)} alt="" loading="lazy"></figure><div class="narrow">`;
    else if(i===at[1]&&n.img3&&at[1]!==at[0]) out+=`</div><figure class="bleed reveal"><img src="${n.img3}" ${fp(n.img3)} alt="" loading="lazy"></figure><div class="narrow">`;
    out+=block(b,b.k==='p'&&firstP); if(b.k==='p') firstP=false;
  });
  return `<article class="article wrap"><div class="narrow">${out}</div></article>`;
}

/* ---------- instagram ---------- */
// los carruseles usan la paleta de la web: el tinte azul de las fotos pasa a verde
const igfix=h=>h.replace(/rgba\(30,59,209,\.35\)/g,'rgba(185,71,47,.15)').replace(/rgba\(20,35,140,\.93\)/g,'rgba(46,50,48,.9)');
const igPost=p=>igfix(IG.post(p)).replace('<div class="av"><span></span></div>','<div class="av">+1</div>');
const cover=n=>{const t=postsOf(n);return t?igfix(IG.slide(t.posts[0].slides[0])):''};
function carousels(n){
  const t=postsOf(n); if(!t) return '';
  return `<section class="sec band-sand" id="instagram"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">En Instagram</span><h2>Esta historia, en tres carruseles</h2></div>
    <a class="ig-handle" href="${IGURL}" target="_blank" rel="noopener">${IGICON}@masuno</a></div>
    <div class="igwrap"><div class="feed">${t.posts.map(igPost).join('')}</div></div></div></section>`;
}
function wireCarousels(root){
  root.querySelectorAll('.igwrap .ig').forEach(ig=>{
    const car=ig.querySelector('.car'), dots=[...ig.querySelectorAll('.pager i')], n=dots.length;
    const box=document.createElement('div'); box.className='carbox'; car.before(box); box.append(car);
    const prev=Object.assign(document.createElement('button'),{className:'carbtn prev',innerHTML:'‹',type:'button'}); prev.setAttribute('aria-label','Lámina anterior');
    const next=Object.assign(document.createElement('button'),{className:'carbtn next',innerHTML:'›',type:'button'}); next.setAttribute('aria-label','Lámina siguiente');
    box.append(prev,next);
    const upd=()=>{const i=Math.round(car.scrollLeft/car.clientWidth);dots.forEach((d,j)=>d.classList.toggle('on',j===i));prev.hidden=i<=0;next.hidden=i>=n-1;};
    prev.onclick=()=>car.scrollBy({left:-car.clientWidth,behavior:'smooth'});
    next.onclick=()=>car.scrollBy({left:car.clientWidth,behavior:'smooth'});
    car.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true}); upd();
    const cap=ig.querySelector('.cap');
    if(cap){const b=Object.assign(document.createElement('button'),{className:'capmore',type:'button',textContent:'más'});b.onclick=()=>{cap.classList.toggle('open');b.textContent=cap.classList.contains('open')?'menos':'más'};cap.after(b);}
  });
}

/* ---------- catastro ---------- */
const RX=/\s*;\s*|\s*,\s+(?=https?:|www\.|\+?\d|[\w.-]+@)|\s+(?=https?:\/\/)/;
function contacto(s){
  const out={links:[],addr:[]};
  if(!s) return out;
  s.split(RX).map(x=>x.trim().replace(/^[>\s<|]+|[>\s<|]+$/g,'').replace(/^(Teléfonos?|tel)\s*:\s*/i,'').replace(/^tel:/i,'')).filter(Boolean).forEach(p=>{
    if(/instagram\.com/i.test(p)){const h=(p.match(/instagram\.com\/([^/?#\s]+)/i)||[])[1];out.links.push([p.startsWith('http')?p:'https://'+p,'Instagram'+(h?' · @'+h:'')]);}
    else if(/facebook\.com/i.test(p)) out.links.push([p.startsWith('http')?p:'https://'+p,'Facebook']);
    else if(/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(p)) out.links.push(['mailto:'+p,p]);
    else if(/^(https?:\/\/|www\.)\S+$/i.test(p)||/^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(p)) {const u=p.startsWith('http')?p:'https://'+p;out.links.push([u,host(u)]);}
    else if(/^\+?[\d\s()-]{7,}$/.test(p)) out.links.push(['tel:'+p.replace(/[^\d+]/g,''),p]);
    else{const em=p.match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g)||[];em.forEach(e=>out.links.push(['mailto:'+e.toLowerCase(),e.toLowerCase()]));const rest=p.replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g,'').trim();if(rest&&!em.length)out.addr.push(rest);else if(rest&&/[a-z]{3}/i.test(rest)&&!/^\d/.test(rest))out.addr.push(rest);}
  });
  // sin duplicados
  const seen=new Set(); out.links=out.links.filter(l=>!seen.has(l[0])&&seen.add(l[0]));
  return out;
}
const LINKC=new Map(); const hasLink=r=>{let v=LINKC.get(r);if(v===undefined){v=contacto(r[5]).links.length>0;LINKC.set(r,v);}return v;};
const SHORT=u=>/^mailto:/.test(u)?'Correo':/^tel:/.test(u)?'Teléfono':/instagram\.com/i.test(u)?'Instagram':/facebook\.com/i.test(u)?'Facebook':'Sitio web';
function orgRow(r){
  const a=CAT.areas[r[1]][1], sub=CAT.subs[r[2]], rr=r.regs||(r[3]>=0?[r[3]]:[]), reg=rr.length>3?rr.length+' regiones':rr.map(i=>CAT.regiones[i]).join(', '), act=CAT.acts[r[4]], c=contacto(r[5]);
  return `<div class="org"><span class="org-tag">${esc(sub&&sub!==a?sub:a)}</span><h4>${esc(nice(r[0]))}</h4>${reg?`<div class="where">${esc(reg)}</div>`:''}
    ${act?`<p>${esc(act)}</p>`:''}
    ${c.links.length?`<div class="links">${c.links.map(([u,t])=>`<a href="${esc(u)}" title="${esc(t)}" ${u.startsWith('http')?'target="_blank" rel="noopener"':''}>${SHORT(u)}</a>`).join('')}</div>`
      :`${c.addr.length?`<div class="addr">${esc(nice(c.addr.join(', ')))}</div>`:''}<div class="claim">¿Es tu organización? <a href="#suma" data-claim="${esc(r[0])}">Completa sus datos</a></div>`}</div>`;
}
// filtra y ordena: primero las que coinciden con la noticia y tienen contacto
function search({areas,kw,reg,q,need}){
  const nq=(q||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const ai=areas&&areas.length?new Set(areas.map(a=>AREA[a].i)):null, k=(kw||[]).map(x=>x.toLowerCase());
  const rg=reg===''||reg==null?null:+reg;
  const res=[];
  for(const r of CAT.rows){
    if(ai&&!ai.has(r[1])) continue;
    if(rg!==null&&r[3]!==rg&&!(r[3]===16&&rg!==16)) continue;
    if(nq&&!r[0].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(nq)) continue;
    const sub=CAT.subs[r[2]].toLowerCase(), act=CAT.acts[r[4]].toLowerCase();
    const hs=k.some(x=>sub.includes(x)), ha=k.some(x=>act.includes(x)); if(need&&!hs&&!ha) continue;
    const score=(hs?3:0)+(ha?2:0)+(hasLink(r)?1:0)+(r[3]===rg?0.5:0);
    res.push([score,r]);
  }
  res.sort((a,b)=>b[0]-a[0]||a[1][0].localeCompare(b[1][0],'es'));
  const by=new Map(), out=[];
  for(const [,r] of res){const key=r[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');const o=by.get(key);
    if(o){if(r[3]>=0&&!o.regs.includes(r[3]))o.regs.push(r[3]);continue;}
    const x=r.slice();x.regs=r[3]>=0?[r[3]]:[];by.set(key,x);out.push(x);}
  return out;
}
const regOpts=sel=>CAT.regiones.map((r,i)=>`<option value="${i}" ${String(i)===String(sel)?'selected':''}>${esc(r==='Nacional'?'Alcance nacional':r)}</option>`).join('');
const areaOpts=sel=>CAT.areas.map(a=>`<option value="${a[0]}" ${a[0]===sel?'selected':''}>${esc(a[1])}</option>`).join('');
function results(box,list,step=24){
  let shown=0;
  const draw=()=>{
    shown+=step;
    box.innerHTML=`<p class="count"><b>${fmt(list.length)}</b> ${list.length===1?'organización':'organizaciones'}</p>
      <div class="olist">${list.slice(0,shown).map(orgRow).join('')}</div>
      ${list.length>shown?`<div class="more"><button class="btn line sm" type="button">Mostrar más organizaciones</button></div>`:''}`;
    const b=box.querySelector('.more button'); if(b) b.onclick=draw;
  };
  if(!list.length){box.innerHTML='<p class="count">No encontramos organizaciones con esos filtros. Prueba con otra región o sin el nombre.</p>';return;}
  draw();
}

/* ---------- piezas comunes ---------- */
const stripH=h=>String(h).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const hoyOf=n=>{const t=postsOf(n);const sl=t&&t.posts[0].slides.find(x=>/Haz esto hoy/.test(x.h));return sl?stripH(sl.h).replace(/^Haz esto hoy\s*/,''):'';};
const hoyBox=(n,cls='')=>{const h=hoyOf(n);return h?`<div class="hoy ${cls}"><span class="hoy-mark">+1</span><div><span class="eyebrow">Haz esto hoy</span><p>${esc(h)}</p></div></div>`:''};
const SMALL=new Set(['de','del','la','las','el','los','y','e','o','u','en','a','al','para','por','con','sin','su','sus']);
const nice=t=>t===t.toUpperCase()&&/[A-ZÁÉÍÓÚÑ]{4}/.test(t)?t.toLowerCase().replace(/[^\s]+/g,(w,i)=>/\w\.\w/.test(w)?w.toUpperCase():i&&SMALL.has(w)?w:w.charAt(0).toUpperCase()+w.slice(1)):t;
const storyName=H=>{const m=(H.p[0]||'').match(/^([A-ZÁÉÍÓÚ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚ][a-záéíóúñ]+)+(?: y [A-ZÁÉÍÓÚ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚ][a-záéíóúñ]+)*)?)/);return m?m[1]:'Una historia';};
function hero({img,eyebrow,title,lede,meta,short}){
  return `<section class="hero ${short?'short':''}"><img src="${img}" ${fp(img)} alt="" fetchpriority="high"><div class="wrap hero-in">
    ${eyebrow?`<span class="eyebrow">${eyebrow}</span>`:''}<h1>${title}</h1>${lede?`<p class="lede">${lede}</p>`:''}${meta||''}</div></section>`;
}
const areaChip=n=>`<a class="chip" href="#organizaciones-${n.area}">${esc(AREA[n.area].name)}</a>`;
function newsCard(n,big){
  const inner=`<div class="ph"><img src="${n.img.replace('w=1600','w='+(big?1400:1000))}" ${fp(n.img.replace('w=1600','w='+(big?1400:1000)))} alt="" loading="lazy"><span class="igcover-tag">${IGICON}Carrusel</span><div class="igcover" aria-hidden="true">${cover(n)}</div></div>`;
  const txt=`<div class="meta"><span class="chip">${esc(AREA[n.area].name)}</span><span class="dotsep"></span><span>${esc(n.fecha)}</span></div><h3>${esc(n.titulo)}</h3><p>${esc(n.bajada||n.resumen||'')}</p>`;
  return big?`<a class="feature reveal" href="#n-${n.id}">${inner}<div>${txt}</div></a>`:`<a class="card reveal" href="#n-${n.id}">${inner}${txt}</a>`;
}

/* ---------- Casa Familia: sin desarrollo, se arma con sus posts ---------- */
(function(){
  const n=NEWS.find(x=>x.id==='cancer-infantil'), t=postsOf(n); if(!t) return;
  const clean=c=>c.split('\n\n').map(s=>s.trim()).filter(s=>s&&!/^#|Link en la bio|Guárdalo/.test(s));
  const strip=h=>h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const tx=clean(t.posts[0].cap);
  n.bajada=tx[0]; n.resumen=tx[0]; n.texto=tx.slice(1);
  const h=clean(t.posts[2].cap);
  n.historia={p:h.filter(x=>!/^¿/.test(x)),src:'El Mercurio, Sociedad (A7), jueves 19 de noviembre de 2026',quote:'Es muy fuerte estar lejos de la casa, alejados de nuestra familia.',who:'Luis Alberto Gana'};
  n.ideas=t.posts[1].slides.filter(s=>/Idea/.test(s.h)).map(s=>strip(s.h).replace(/^Idea\s*/,''));
  n.tags=['#cancerinfantil','#cuidadoras','#donasangre','#voluntariado'];
})();

/* ---------- páginas ---------- */
function home(){
  const [f,...rest]=NEWS;
  const hoy=NEWS.filter(n=>n.fecha===f.fecha);
  const today=new Date(), iso=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  const esHoy=f.iso===iso, HOY=esHoy?'Hoy':'Lo último', recientes=NEWS.slice(0,8);
  const tick=recientes.map(n=>`<span>${esc(n.titulo)}</span><i>+1</i>`).join('')+[...new Set(recientes.flatMap(n=>(n.tags||[]).slice(0,2)))].map(t=>`<span>${esc(t)}</span><i>+1</i>`).join('');
  $app.innerHTML=`<section class="intro"><div class="wrap intro-in">
    <div class="intro-txt">
      <span class="live"><i></i>${HOY} en Más Uno · ${esc(f.fecha)}</span>
      <h1>Chile necesita <em>que te sumes.</em></h1>
      <p class="intro-lede">Hay un niño al que nadie le lee un cuento. Una mamá que no tiene con quién dejar a su hijo para ir a trabajar. Alguien que lleva meses buscando empleo. No tienes que cambiarlo todo: basta con poner una mano. <b>Conocer para transformar.</b></p>
      <div class="hero-cta"><a class="btn lime" href="#ayudar">Quiero sumarme</a><a class="btn line" href="#n-${f.id}">${esHoy?'La historia de hoy':'La última historia'}</a></div>
    </div>
    <figure class="intro-foto"><img src="${IMG.banner}" ${fp(IMG.banner)} alt="Personas de distintas edades juntas en un campo al atardecer"></figure>
  </div>
  <div class="wrap intro-today">
    <span class="it-label">${HOY} · ${esc(f.fecha)}</span>
    <div class="it-grid">${hoy.map((n,j)=>`<a class="it-row" href="#n-${n.id}"><span class="it-n">0${j+1}</span><div><small>${esc(AREA[n.area].name)}</small><b>${esc(n.titulo)}</b></div><span class="it-go">→</span></a>`).join('')}</div>
  </div></section>
  <div class="ticker" aria-hidden="true"><div class="ticker-in">${tick}${tick}</div></div>`+`
  <section class="wrap stats">
    <div class="stat"><b>47%</b><span>de quienes no ayudan dice no saber dónde ni cómo.</span></div>
    <div class="stat"><b>${fmt(CAT.rows.length)}</b><span>organizaciones en el catastro, por tema y región.</span></div>
    <div class="stat"><b>16</b><span>regiones. Siempre hay alguien trabajando cerca tuyo.</span></div>
    <div class="stat"><b>+1</b><span>Un acto concreto basta para empezar.</span></div>
  </section>
  <section class="minga"><div class="wrap minga-in">
    <div><span class="eyebrow">La minga social</span><h2>Lo que solos no podemos, <em>lo movemos entre todos.</em></h2>
      <figure class="minga-foto"><div><img src="img/minga.webp" alt="Cientos de personas acompañan el traslado de una casa durante una minga en Chiloé, junto al mar" loading="lazy"></div>
      <figcaption>Una minga en Chiloé: cientos de personas acompañan el traslado de una casa hasta el mar.</figcaption></figure></div>
    <div class="minga-txt">
      <p>En Chiloé, cuando una familia necesita cambiar su casa de lugar, no contrata una empresa: llama a la minga. Los vecinos llegan con sus bueyes, sus manos y sus ganas, y entre todos tiran la casa por el campo, o la hacen flotar por el mar, hasta su nuevo sitio. Nadie cobra. Se devuelve la mano cuando otro la necesite, y el día termina en una mesa compartida.</p>
      <p>La palabra viene del quechua <i>minka</i>, y en Chile también se dice mingaco: trabajo colectivo y voluntario para un bien común, que se ha practicado por siglos en el campo, en las cosechas y en las construcciones de los pueblos.</p>
      <p class="minga-cierre">Más Uno quiere ser eso: una minga social. Cada historia es una casa que hay que mover. Tú pones una mano, alguien más pone otra, y las organizaciones que ya están tirando del carro hacen el resto.</p>
    </div>
    <ol class="minga-pasos"><li><b>Alguien lo necesita.</b><span>Una noticia nos muestra quién.</span></li><li><b>Cada uno pone una mano.</b><span>Una hora, un libro, un dato, una visita.</span></li><li><b>Se devuelve la mano.</b><span>Hoy ayudas tú; mañana, otro.</span></li><li><b>Se termina en una mesa.</b><span>Comunidad: no ayuda de uno a otro, sino entre todos.</span></li></ol>
  </div></section>
  <section class="wrap">${hoyBox(f,'wide')}</section>
  <section class="sec" id="semana"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Las últimas historias</span><h2>Lo que está <em>pasando</em></h2></div><p>Las historias que publicamos en Instagram, contadas con calma y con las organizaciones que ya están haciendo algo.</p></div>
    ${newsCard(f,true)}<div class="cards">${rest.slice(0,6).map(n=>newsCard(n)).join('')}</div>
    ${NEWS.length>7?`<div class="more" style="margin-top:56px"><a class="btn line" href="#historias">Todas las historias</a></div>`:''}
  </div></section>
  <section class="sec band-sand"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Temas</span><h2>¿Qué te <em>mueve</em>?</h2></div><p>Cada historia pertenece a un tema más grande. En cada uno hay organizaciones de todo Chile que reciben ayuda.</p></div>
    ${areaGrid()}
  </div></section>
  <section class="sec"><div class="wrap">${helper()}</div></section>
  <section class="sec band-sand"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">En Instagram</span><h2>Empieza en el feed, <em>sigue aquí</em></h2></div><a class="ig-handle" href="${IGURL}" target="_blank" rel="noopener">${IGICON}@masuno</a></div>
    <div class="igwrap"><div class="igrow">${NEWS.slice(0,7).map(n=>`<a class="igtile" href="#n-${n.id}" aria-label="${esc(n.titulo)}">${cover(n)}</a>`).join('')}</div></div>
  </div></section>
  <section class="wrap" style="padding-top:clamp(64px,10vw,120px);padding-bottom:clamp(64px,10vw,120px)">${orgCta()}</section>`;
  wireHelper();
}
const areaGrid=(only)=>`<div class="tgrid">${CAT.areas.filter(a=>!only||only.includes(a[0])).map(a=>{const A=AREA[a[0]],k=NEWS.filter(n=>n.areas.includes(a[0])).length;
  return `<a class="tcard reveal" href="#tema-${a[0]}"><img src="${A.img}" ${fp(A.img)} alt="" loading="lazy"><div><b>${esc(a[1])}</b><span>${esc(A.frase||'')}</span><small>${fmt(COUNT[A.i])} organizaciones${k?` · ${k} ${k===1?'historia':'historias'}`:''}</small></div></a>`}).join('')}</div>`;

/* ---------- ¿por dónde empiezo? ---------- */
function helper(pre={}){
  return `<div class="helper" id="helper"><div class="helper-in">
    <div><span class="eyebrow">Cómo ayudar</span><h2>¿Por dónde empiezo?</h2><p class="muted">Elige un tema, el tiempo que tienes y dónde vives. Te mostramos algo concreto que puedes hacer y quién lo está haciendo cerca tuyo.</p></div>
    <div class="hq"><span class="hn">01</span><b>¿Qué te importa?</b><div class="chips" data-k="a">${CAT.areas.map(a=>`<button type="button" data-v="${a[0]}" class="${pre.a===a[0]?'on':''}">${esc(a[1])}</button>`).join('')}</div></div>
    <div class="hq"><span class="hn">02</span><b>¿Cuánto tiempo tienes?</b><div class="chips" data-k="t">${TIEMPOS.map((t,i)=>`<button type="button" data-v="${t.k}" class="${(pre.t||'hoy')===t.k?'on':''}">${esc(t.t)}</button>`).join('')}</div></div>
    <div class="hq"><span class="hn">03</span><b>¿Dónde vives?</b><select class="hsel"><option value="">Todo Chile</option>${regOpts(store.get('mu-r'))}</select></div>
    <div class="hres" id="hres"></div>
  </div></div>`;
}
function wireHelper(){
  const H=document.getElementById('helper'); if(!H) return;
  const st={a:(H.querySelector('[data-k="a"] .on')||{}).dataset?.v||'',t:(H.querySelector('[data-k="t"] .on')||{}).dataset?.v||'hoy'};
  const sel=H.querySelector('.hsel'), out=H.querySelector('#hres');
  const draw=()=>{
    store.set('mu-r',sel.value);
    if(!st.a){out.innerHTML='<p class="muted">Elige un tema para ver qué puedes hacer.</p>';return;}
    const A=AREA[st.a], acc=(A.acc||[]).find(x=>x.t===st.t), rel=NEWS.filter(n=>n.areas.includes(st.a));
    const orgs=search({areas:[st.a],reg:sel.value}).filter(hasLink).slice(0,4);
    out.innerHTML=`<div class="hgrid"><div class="hact"><span class="eyebrow">${esc(TIEMPOS.find(x=>x.k===st.t).t)}</span><p>${esc(acc?acc.x:'')}</p>
      ${rel.length?`<div class="hrel">${rel.map(n=>`<a href="#n-${n.id}"><img src="${n.img.replace('w=1600','w=300')}" ${fp(n.img.replace('w=1600','w=300'))} alt=""><span>${esc(n.titulo)}</span></a>`).join('')}</div>`:''}</div>
      <div class="horgs"><span class="eyebrow">Quién lo está haciendo${sel.value?' en '+esc(CAT.regiones[+sel.value]):''}</span>${orgs.length?orgs.map(r=>{const c=contacto(r[5]);return `<div class="horg"><b>${esc(nice(r[0]))}</b><small>${esc(CAT.subs[r[2]]||A.name)}</small><div class="links">${c.links.slice(0,2).map(([u,l])=>`<a href="${esc(u)}" ${u.startsWith('http')?'target="_blank" rel="noopener"':''}>${esc(l)}</a>`).join('')}</div></div>`}).join(''):'<p class="muted">No encontramos organizaciones con contacto en esta región. Prueba con todo Chile.</p>'}
      <a class="btn sm" href="#organizaciones-${st.a}">Ver todas las organizaciones de ${esc(A.name.toLowerCase())}</a></div></div>`;
  };
  H.querySelectorAll('.chips').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;c.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));st[c.dataset.k]=b.dataset.v;draw();}));
  sel.onchange=draw; draw();
}

/* ---------- portadas de libros (Open Library) ---------- */
function covers(){
  if(window.MU_COVERS){document.querySelectorAll('.bcover[data-ol]').forEach(el=>{const src=window.MU_COVERS[el.dataset.ol];if(src){const img=new Image();img.alt='';img.onload=()=>{el.classList.add('img');el.appendChild(img)};img.src=src;}});return;}
  document.querySelectorAll('.bcover[data-ol]').forEach(el=>{
    const [t,a]=el.dataset.ol.split('|');
    fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(t)}&author=${encodeURIComponent(a)}&limit=1&fields=cover_i`)
      .then(r=>r.json()).then(d=>{const id=d.docs&&d.docs[0]&&d.docs[0].cover_i;if(!id)return;const img=new Image();img.alt='';img.onload=()=>{el.classList.add('img');el.appendChild(img)};img.src=`https://covers.openlibrary.org/b/id/${id}-M.jpg`;}).catch(()=>{});
  });
}
function orgCta(n){ /* n: noticia o {area} */
  return `<div class="cta reveal"><img src="${IMG.orgs}" ${fp(IMG.orgs)} alt="" loading="lazy"><div class="cta-in"><span class="eyebrow">Organizaciones</span>
    <h2>${fmt(CAT.rows.length)} organizaciones en todo Chile</h2><p>Fundaciones, corporaciones, agrupaciones y clubes que ya trabajan en lo que te importa. Busca por tema y por región.</p>
    <form class="finder two" onsubmit="event.preventDefault();MU.go(this)">
      <label><small>Tema</small><select name="a"><option value="">Todos los temas</option>${areaOpts(n?n.area:'')}</select></label>
      <label><small>Región</small><select name="r"><option value="">Todo Chile</option>${regOpts(store.get('mu-r'))}</select></label>
      <label class="grow"><small>&nbsp;</small><button class="btn acc" style="margin:0;justify-content:center">Buscar organizaciones</button></label>
    </form></div></div>`;
}
function news(n){
  const t=postsOf(n), i=NEWS.indexOf(n), nx=NEWS[(i+1)%NEWS.length], pv=NEWS[(i-1+NEWS.length)%NEWS.length];
  const vids=(n.mas||[]).filter(m=>tedSlug(m.u)), books=(n.mas||[]).filter(m=>m.tipo==='Libro'), refs=(n.mas||[]).filter(m=>!tedSlug(m.u)&&m.tipo!=='Libro');
  const COL=['#2E3230','#B9472F','#5E7A70','#7A4E3A','#3C4A55'];
  const H=n.historia||{p:[]};
  const quote=H.quote||((H.p.join(' ').match(/«([^»]{20,180})»/)||[])[1]);
  $app.innerHTML=hero({img:n.img,eyebrow:`${esc(n.fecha)} · ${esc(AREA[n.area].name)}`,title:esc(n.titulo),lede:esc(n.bajada),
      meta:`<div class="hero-meta"><span>${esc(n.noticia||'')}</span></div>`})+
  (n.quePaso&&n.quePaso.length?`<section class="wrap"><div class="narrow"><div class="noticia reveal"><span class="eyebrow">La noticia · ${esc(n.fecha)}</span>${n.quePaso.map(p=>`<p>${esc(p)}</p>`).join('')}${n.origen?`<span class="src">Fuente: ${linkify(n.origen)}</span>`:''}</div></div></section>`:'')+
  (n.blocks?article(n):`<article class="article wrap"><div class="narrow">${n.texto.map((p,j)=>`<p class="${j===0?'first':''}">${esc(p)}</p>`).join('')}<span class="src">Fuente: El Mercurio, Sociedad (A7), jueves 19 de noviembre de 2026</span></div></article>`)+
  `<div class="wrap"><div class="narrow"><div class="tags">${(n.tags||[]).map(x=>`<a href="#tag-${tslug(x)}">${esc(x)}</a>`).join('')}</div></div></div>`+
  (vids.length||books.length||refs.length?`<section class="sec"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Para profundizar</span><h2>Para ver, leer y seguir pensando</h2></div></div>
    ${vids.length?`<div class="vids">${vids.map(tedFrame).join('')}</div>`:''}
    ${books.length?`<div class="shelf">${books.map((b,j)=>`<div class="book"><div class="bcover" data-ol="${esc(b.t)}|${esc((b.a.split(/,| y /)[0]||'').trim().split(' ').pop())}" style="background:${COL[j%COL.length]}"><span class="t">${esc(b.t)}</span><span class="a">${esc(b.a)}</span></div><b>${esc(b.t)}</b><small>${esc([b.a,b.y].filter(Boolean).join(' · '))}${b.d?'. '+esc(b.d):''}</small></div>`).join('')}</div>`:''}
    ${refs.length?`<div class="refs">${refs.map(r=>{const inner=`<span>${esc(r.tipo)}</span><div><b>${esc(r.t)}</b><small>${esc([r.a,r.y].filter(Boolean).join(' · '))}${r.d?'. '+esc(r.d):''}${r.u?' · '+esc(host(r.u)):''}</small></div>`;return r.u?`<a class="ref" href="${r.u}" target="_blank" rel="noopener">${inner}</a>`:`<div class="ref">${inner}</div>`}).join('')}</div>`:''}
  </div></section>`:'')+
  (H.p.length?`<section class="story"><div class="ph"><img src="${n.img3||n.img2||n.img}" ${fp(n.img3||n.img2||n.img)} alt="" loading="lazy"></div><div class="story-in reveal"><span class="eyebrow">Una historia</span>
    <h2>${esc(storyName(H))}</h2>${quote?`<blockquote>«${esc(quote.replace(/[.»]+$/,''))}»${H.who?`<footer style="font-family:var(--sans);font-size:14px;margin-top:10px;color:rgba(237,234,227,.7)">${esc(H.who)}</footer>`:''}</blockquote>`:''}
    ${H.p.map(p=>`<p>${esc(quote?p.replace(/\s*«[^»]*»\.?/,'').trim():p)}</p>`).join('')}${H.extra?`<p>${linkify(H.extra)}</p>`:''}${H.src?src(H.src):''}</div></section>`:'')+
  (n.ideas&&n.ideas.length?`<section class="sec"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Por dónde empezar</span><h2>De lo más simple a lo que cambia una vida</h2></div></div>
    ${hoyBox(n)}<div class="steps">${n.ideas.map(x=>`<div class="step reveal"><p>${esc(x)}</p></div>`).join('')}</div></div></section>`:'')+
  carousels(n)+
  `<section class="sec" id="organizaciones"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">${esc(AREA[n.area].name)}</span><h2>¿Quién trabaja en esto cerca tuyo?</h2></div><p>Organizaciones que ya están haciendo algo, y en tu región, las que trabajan en este tema.</p></div>
    <div class="picks">${n.orgs.map(o=>`<div class="pick reveal"><h4>${esc(o.n)}</h4><p>${esc(o.d)}</p><div class="links">${[o.w&&[o.w,host(o.w)],o.w2&&[o.w2,host(o.w2)],o.ig&&[o.ig,'Instagram'],o.e&&['mailto:'+o.e,o.e],o.t&&['tel:'+o.t.replace(/[^\d+]/g,''),o.t]].filter(Boolean).map(([u,l])=>`<a href="${u}" ${u.startsWith('http')?'target="_blank" rel="noopener"':''}>${esc(l)}</a>`).join('')}</div></div>`).join('')}</div>
    <form class="finder" id="nf" onsubmit="event.preventDefault()">
      <label><small>Tu región</small><select name="r"><option value="">Todo Chile</option>${regOpts(store.get('mu-r'))}</select></label>
      <label><small>Tema</small><select name="a"><option value="*">${esc(n.areas.map(a=>AREA[a].name).join(', '))}</option>${areaOpts('')}</select></label>
      <label class="grow"><small>Nombre</small><input name="q" placeholder="Fundación, corporación, agrupación…"></label>
    </form><div id="nres"></div>
    <p class="steps-note">¿Tu organización trabaja en esto y no aparece? <a href="#suma">Súmala a Más Uno</a>.</p>
  </div></section>
  <section class="wrap" style="padding-bottom:clamp(64px,10vw,110px)"><div class="next">
    ${[pv,nx].map((x,j)=>`<a class="nextcard" href="#n-${x.id}"><img src="${x.img.replace('w=1600','w=900')}" ${fp(x.img.replace('w=1600','w=900'))} alt="" loading="lazy"><div><small>${j?'Siguiente historia':'Historia anterior'}</small><b>${esc(x.titulo)}</b></div></a>`).join('')}
  </div></section>`;
  wireCarousels($app); covers();
  const f=document.getElementById('nf'), box=document.getElementById('nres');
  const run=()=>{store.set('mu-r',f.r.value);const a=f.a.value;results(box,search({areas:a==='*'?(n.kwOnly?null:n.areas):[a],kw:a==='*'?n.kw:[],need:a==='*'&&n.kwOnly,reg:f.r.value,q:f.q.value}),12);};
  f.r.onchange=run; f.a.onchange=run; let tm; f.q.oninput=()=>{clearTimeout(tm);tm=setTimeout(run,200)}; run();
}
function pageHead(eyebrow,title,lede){return `<section class="pagehead wrap"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1>${lede?`<p class="lede">${lede}</p>`:''}</section>`;}
function historias(){
  $app.innerHTML=pageHead('Historias','Historias que piden algo de nosotros.','Lo que publicamos en Instagram, contado con calma: qué pasó, por qué importa y quién ya está haciendo algo.')+
  `<section class="wrap" style="padding-bottom:110px"><div class="cards" style="margin-top:0">${NEWS.map(n=>newsCard(n)).join('')}</div></section>`;
}
function temas(){
  $app.innerHTML=pageHead('Temas','¿Qué te mueve?','Cada historia pertenece a un tema más grande. Elige uno para ver sus historias, qué puedes hacer y quién trabaja en eso.')+
  `<section class="wrap" style="padding-bottom:110px">${areaGrid()}</section>`;
}
function tema(slug){
  const A=AREA[slug]; if(!A) return temas();
  const rel=NEWS.filter(n=>n.areas.includes(slug));
  $app.innerHTML=hero({img:A.img.replace('w=1200','w=2000'),short:true,eyebrow:'Tema',title:esc(A.name),lede:esc(A.frase||'')})+
  (rel.length?`<section class="sec"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Historias</span><h2>Lo que hemos contado</h2></div></div><div class="cards" style="margin-top:0">${rel.map(n=>newsCard(n)).join('')}</div></div></section>`:'')+
  `<section class="sec band-sand"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Qué puedes hacer</span><h2>Según el tiempo que tengas</h2></div></div>
    <div class="steps">${(A.acc||[]).map(x=>`<div class="step reveal"><span class="eyebrow">${esc(TIEMPOS.find(t=>t.k===x.t).t)}</span><p style="margin-top:8px">${esc(x.x)}</p></div>`).join('')}</div></div></section>
  <section class="wrap" style="padding-top:clamp(64px,10vw,110px);padding-bottom:clamp(64px,10vw,110px)">${orgCta({area:slug})}</section>`;
}
function tag(t){
  const T=[...new Set(NEWS.flatMap(n=>n.tags||[]))].find(x=>tslug(x)===t)||('#'+t), rel=NEWS.filter(n=>(n.tags||[]).includes(T));
  document.title=T+' · Más Uno';
  $app.innerHTML=pageHead('Etiqueta',esc(T),rel.length?`${rel.length} ${rel.length===1?'historia':'historias'} con esta etiqueta, también en Instagram.`:'')+
  `<section class="wrap" style="padding-bottom:110px"><div class="cards" style="margin-top:0">${rel.map(n=>newsCard(n)).join('')}</div>
  <div class="tags" style="margin-top:56px">${[...new Set(NEWS.flatMap(n=>n.tags||[]))].map(x=>`<a href="#tag-${tslug(x)}">${esc(x)}</a>`).join('')}</div></section>`;
}
function instagram(){
  $app.innerHTML=pageHead('Instagram','@masuno','Cada historia empieza en un carrusel. Aquí están los de esta semana; cada uno lleva a su historia completa.')+
  NEWS.map((n,j)=>{const t=postsOf(n);return t?`<section class="sec ${j%2?'':'band-sand'}" style="padding:64px 0"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">${esc(n.fecha)}</span><h2><a href="#n-${n.id}" style="text-decoration:none">${esc(n.titulo)}</a></h2></div><a class="btn sm line" href="#n-${n.id}">La historia completa</a></div>
    <div class="igwrap"><div class="feed">${t.posts.map(igPost).join('')}</div></div></div></section>`:''}).join('')+
  `<section class="wrap" style="padding-top:64px;padding-bottom:110px;text-align:center"><a class="btn acc" href="${IGURL}" target="_blank" rel="noopener">Seguir a @masuno en Instagram</a></section>`;
  wireCarousels($app);
}
function ayudar(){
  $app.innerHTML=pageHead('Cómo ayudar','Nadie puede hacerlo todo. Todos podemos hacer algo.','En Chile la voluntad de ayudar existe, pero casi la mitad de quienes no ayudan dice no saber dónde ni cómo. Empieza por aquí.')+
  `<section class="wrap" style="padding-bottom:64px">${helper()}</section>
  <section class="sec band-sand"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Haz esto hoy</span><h2>Una acción por historia</h2></div></div>
    <div class="hoys">${NEWS.map(n=>`<a class="hoycard reveal" href="#n-${n.id}"><small>${esc(n.titulo)}</small><p>${esc(hoyOf(n))}</p></a>`).join('')}</div></div></section>
  <section class="wrap" style="padding-top:clamp(64px,10vw,110px);padding-bottom:clamp(64px,10vw,110px)">${orgCta()}</section>`;
  wireHelper();
}
function orgs(){
  const q=qs();
  $app.innerHTML=hero({img:IMG.orgs,short:true,eyebrow:'Organizaciones',title:'Quienes ya están haciendo algo.',lede:`${fmt(CAT.rows.length)} organizaciones de todo Chile, por tema y por región. Primero aparecen las que tienen web, redes o correo para contactarlas.`})+
  `<section class="sec" style="padding-top:48px"><div class="wrap">
    <form class="finder" id="of" onsubmit="event.preventDefault()">
      <label><small>Tema</small><select name="a"><option value="">Todos los temas</option>${areaOpts(q.a||'')}</select></label>
      <label><small>Región</small><select name="r"><option value="">Todo Chile</option>${regOpts(store.get('mu-r'))}</select></label>
      <label class="grow"><small>Nombre</small><input name="q" value="${esc(q.q||'')}" placeholder="Fundación, club, agrupación…"></label>
    </form><div id="ores"></div>
    <div class="cta" style="min-height:0;margin-top:72px;background:var(--acc)"><div class="cta-in" style="max-width:none;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;width:100%">
      <div><h2 style="font-size:clamp(28px,3vw,40px);margin:0 0 6px">¿Tienes una organización?</h2><p style="margin:0">Súmala, o completa sus datos para que la gente pueda contactarte.</p></div><a class="btn light" href="#suma">Suma tu organización</a></div></div>
  </div></section>`;
  const f=document.getElementById('of'), box=document.getElementById('ores');
  const run=()=>{store.set('mu-r',f.r.value);
    results(box,search({areas:f.a.value?[f.a.value]:null,reg:f.r.value,q:f.q.value}));};
  f.a.onchange=run; f.r.onchange=run; let tm; f.q.oninput=()=>{clearTimeout(tm);tm=setTimeout(run,220)}; run();
}
function suma(){
  const q=qs();
  $app.innerHTML=`<section class="pagehead wrap"><span class="eyebrow">Suma tu organización</span><h1>${q.n?'Completa los datos de tu organización.':'Que te encuentren quienes quieren ayudar.'}</h1>
    <p class="lede">Cada historia de Más Uno termina en las organizaciones que trabajan en ese tema. Si la tuya está en esto, queremos mostrarla.</p></section>
  <section class="wrap" style="padding-bottom:110px"><div class="narrow" id="sform"><form class="form" onsubmit="event.preventDefault();MU.sent()">
    ${q.n?`<div class="notice">Estás completando los datos de <b>${esc(q.n)}</b>.</div>`:''}
    <h3>La organización</h3>
    <label>Nombre<input required value="${esc(q.n||'')}"></label>
    <div class="row2"><label>Región<select required><option value="">Elige</option>${regOpts('')}</select></label><label>Comuna<input></label></div>
    <label>¿Qué hacen? En dos o tres líneas<textarea rows="3" required></textarea></label>
    <fieldset style="border:0;padding:0;margin:0"><legend style="font-size:14.5px;font-weight:500;margin-bottom:10px">Temas en los que trabajan</legend><div class="checks">${CAT.areas.map(a=>`<label><input type="checkbox"> ${esc(a[1])}</label>`).join('')}</div></fieldset>
    <h3>Cómo se puede ayudar</h3>
    <div class="checks">${['Voluntariado','Socios o aportes mensuales','Donaciones en especie','Trabajo profesional pro bono','Prácticas o empleo','Difusión'].map(x=>`<label><input type="checkbox"> ${x}</label>`).join('')}</div>
    <h3>Contacto público</h3>
    <div class="row2"><label>Sitio web<input placeholder="https://"></label><label>Instagram<input placeholder="@"></label></div>
    <div class="row2"><label>Correo<input type="email"></label><label>Teléfono<input type="tel"></label></div>
    <h3>Quién la registra</h3>
    <div class="row2"><label>Tu nombre<input required></label><label>Tu cargo<input></label></div>
    <label>Tu correo (no se publica)<input type="email" required></label>
    <label class="consent"><input type="checkbox" required> Represento a esta organización y autorizo publicar los datos de contacto que indiqué.</label>
    <div><button class="btn acc">Enviar</button></div>
    <p class="steps-note" style="margin:0">Prototipo: este formulario todavía no envía los datos.</p>
  </form></div></section>`;
}
window.MU={
  go(f){if(f.r)store.set('mu-r',f.r.value);const a=f.a?f.a.value:'';location.hash='organizaciones'+(a?'-'+a:'');},
  sent(){document.getElementById('sform').innerHTML='<div class="thanks"><h3>Gracias.</h3><p>Revisaremos los datos y tu organización aparecerá en Más Uno con su contacto.</p><p class="steps-note">Prototipo: todavía no se envió nada.</p><a class="btn" href="#organizaciones">Ver organizaciones</a></div>';scrollTo({top:0,behavior:'smooth'});}
};

/* ---------- rutas ---------- */
const top=document.getElementById('top');
const onScroll=()=>{const solid=scrollY>40||!document.querySelector('#app>.hero,#app>.intro');top.classList.toggle('solid',solid)};
addEventListener('scroll',onScroll,{passive:true});
let io;
function reveal(){
  io&&io.disconnect();
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));return;}
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
}
function route(){
  const h=H(), m=h.match(/^(n|tema|tag|organizaciones)-(.+)$/), k=m?m[1]:h, arg=m?m[2]:'';
  let nav='home';
  if(k==='n'){const n=NEWS.find(x=>x.id===arg); if(n){news(n);document.title=n.titulo+' · Más Uno';nav='';} else {home();document.title='Más Uno';}}
  else if(k==='organizaciones'){orgs();document.title='Organizaciones · Más Uno';nav='orgs';}
  else if(k==='historias'){historias();document.title='Historias · Más Uno';nav='historias';}
  else if(k==='temas'){temas();document.title='Temas · Más Uno';nav='temas';}
  else if(k==='tema'){tema(arg);document.title=(AREA[arg]?AREA[arg].name+' · ':'')+'Más Uno';nav='temas';}
  else if(k==='tag'){tag(arg);nav='';}
  else if(k==='instagram'){instagram();document.title='Instagram · Más Uno';nav='instagram';}
  else if(k==='ayudar'){ayudar();document.title='Cómo ayudar · Más Uno';nav='ayudar';}
  else if(k==='suma'){suma();document.title='Suma tu organización · Más Uno';nav='suma';}
  else {home();document.title='Más Uno · La minga social';}
  document.querySelectorAll('.nav a[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===nav));
  document.body.classList.remove('menu');
  scrollTo(0,0);
  onScroll(); reveal();
}
addEventListener('hashchange',()=>{window.__muKeep=false;route()});
document.getElementById('burger').onclick=()=>document.body.classList.toggle('menu');
route();
})();
