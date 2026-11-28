/* Más Uno · web-v4 */
(function(){
const $app=document.getElementById('app'), NEWS=window.MU_NEWS, CAT=window.MU_CAT, POSTS=window.MU_POSTS, IG=window.MU_IG;
const U=(id,w=1800)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const IMG={banner:U('1721245446685-89c2c80b8b95',2800), bannerAlt:'Una mujer y un hombre sonríen con el pulgar arriba en el campo, con cerros detrás',  home:U('1653185460299-fbef9466c1e7',2200), orgs:U('1758599668429-121d54188b9c',2000)};
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
const FOCO=EX.foco||{}, fid=u=>{const m=String(u).match(/photo-([0-9a-f]+-[0-9a-f]+)/)||String(u).match(/pexels-photo-(\d+)/);return m?m[1]:undefined;};
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
/* videos: TED, YouTube y Vimeo, siempre con reseña (videos.js) */
const VNAME={ted:'TED',youtube:'YouTube',vimeo:'Vimeo'};
const VURL={ted:v=>`https://www.ted.com/talks/${v.id}`,youtube:v=>`https://www.youtube.com/watch?v=${v.id}`,vimeo:v=>`https://vimeo.com/${v.id}`};
const VSRC={ted:v=>`https://embed.ted.com/talks/${v.id}?language=es`,youtube:v=>`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`,vimeo:v=>`https://player.vimeo.com/video/${v.id}?dnt=1`};
const vframe=v=>`<iframe src="${VSRC[v.p](v)}" title="${esc(v.t)}" loading="lazy" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
function vcard(v){
  const url=VURL[v.p](v), name=VNAME[v.p];
  const media=window.MU_PUBLICA?`<a class="vframe vthumb" href="${url}" target="_blank" rel="noopener">${v.p==='youtube'?`<img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy">`:''}<span class="vplay">▶</span></a>`
    :v.p==='youtube'?`<button class="vframe vthumb" type="button" data-yt="${esc(v.id)}" aria-label="Ver ${esc(v.t)}"><img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy"><span class="vplay">▶</span></button>`
    :`<div class="vframe">${vframe(v)}</div>`;
  return `<div class="vcard reveal">${media}<div class="vcap">
    <div class="vmeta"><span class="vsrc vsrc-${v.p}">${name}</span>${esc([v.dur,v.lang].filter(Boolean).join(' · '))}</div>
    <b>${esc(v.t)}</b><small>${esc([v.a,v.y].filter(Boolean).join(' · '))}</small>
    ${v.de||v.por?`<p class="vde">${esc([v.de,v.por].filter(Boolean).join(' '))}</p>`:''}
    <a class="vver" href="${url}" target="_blank" rel="noopener">Ver en ${name} ↗</a></div></div>`;
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-yt]');if(!b)return;const d=document.createElement('div');d.className='vframe';d.innerHTML=vframe({p:'youtube',id:b.dataset.yt,t:b.getAttribute('aria-label')||''});b.replaceWith(d);});
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
// el texto corrido, abreviado: en cada capítulo se ve el primer párrafo y sus datos o citas;
// el resto queda plegado detrás de «Seguir leyendo». Dos fotos a todo el ancho entre capítulos.
function article(n){
  const bl=n.blocks, secs=[{h:null,b:[]}];
  bl.forEach(b=>{ if(b.k==='h'&&b.h!=='Lo que se ha probado') secs.push({h:b,b:[]}); else secs[secs.length-1].b.push(b); });
  const S=secs.filter(x=>x.h||x.b.length), at=[Math.floor(S.length*.34),Math.floor(S.length*.7)];
  // se ve solo el primer párrafo; el análisis completo queda plegado (pedido 28 nov: menos «entenderlo», más relevancia)
  let intro='',out='',done=false;
  S.forEach((sec,si)=>{
    if(si&&si===at[0]&&n.img2) out+=`</div><figure class="bleed"><img src="${n.img2}" ${fp(n.img2)} alt="" loading="lazy"></figure><div class="narrow">`;
    else if(si&&si===at[1]&&n.img3&&at[1]!==at[0]) out+=`</div><figure class="bleed"><img src="${n.img3}" ${fp(n.img3)} alt="" loading="lazy"></figure><div class="narrow">`;
    if(sec.h) out+=block(sec.h);
    sec.b.forEach(b=>{ if(!done&&b.k==='p'){intro=block(b,true);done=true;} else out+=block(b); });
  });
  const n2=S.length-1;
  return `<article class="article wrap"><div class="narrow">${intro}<button type="button" class="leer-mas leer-todo" onclick="const d=document.getElementById('analisis');d.hidden=!d.hidden;this.textContent=d.hidden?'Leer el análisis completo (${n2} capítulos) ↓':'Cerrar el análisis ↑'">Leer el análisis completo (${n2} capítulos) ↓</button></div><div id="analisis" hidden><div class="narrow">${out}</div></div></article>`;
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
const hoyOf=n=>{const A=(window.MU_ACCION||{})[n.id];if(A&&A.hoy)return A.hoy;const t=postsOf(n);const sl=t&&t.posts[0].slides.find(x=>/Haz esto hoy/.test(x.h));return sl?stripH(sl.h).replace(/^Haz esto hoy\s*/,''):'';};
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
  const inner=`<div class="ph"><img src="${n.img.replace('w=1600','w='+(big?1400:1000))}" ${fp(n.img.replace('w=1600','w='+(big?1400:1000)))} alt="" loading="lazy"></div>`;
  const txt=`<div class="meta"><span class="chip">${esc(AREA[n.area].name)}</span><span class="dotsep"></span><span>${esc(n.fecha)}</span></div><h3>${esc(n.titulo)}</h3><p>${esc(n.bajada||n.resumen||'')}</p>`;
  return big?`<a class="feature reveal" href="#n-${n.id}">${inner}<div>${txt}</div></a>`:`<a class="card reveal" href="#n-${n.id}">${inner}${txt}</a>`;
}

/* organizaciones con logo (el ícono de su sitio; si no hay, sus iniciales) */
const orgUrl=o=>o.w||o.ig||o.w2||'';
const iniciales=t=>String(t).replace(/^(Fundación|Corporación|Asociación)\s+/i,'').split(/[\s·]+/).filter(w=>w.length>2).slice(0,2).map(w=>w[0].toUpperCase()).join('')||'+1';
const orgLogo=o=>{const u=orgUrl(o), h=u&&!/instagram\.com/.test(u)?host(u):'';
  return `<span class="olog" data-i="${esc(iniciales(o.n))}">${h?`<img src="https://www.google.com/s2/favicons?domain=${esc(h)}&sz=128" alt="" loading="lazy" onload="if(this.naturalWidth<32)this.remove()" onerror="this.remove()">`:''}</span>`;};
const orgCard=o=>{const u=orgUrl(o);return `<a class="ocard" ${u?`href="${esc(u)}" target="_blank" rel="noopener"`:''}>${orgLogo(o)}<div><b>${esc(o.n)}</b><small>${esc(String(o.d||'').split('. ')[0].replace(/\.$/,''))}.</small></div><span class="ogo">↗</span></a>`;};
const importaBox=n=>{const I=(window.MU_IMPORTA||{})[n.id];if(!I)return '';
  return `<section class="importa" id="s-importa"><div class="wrap">
    <div class="imp-head"><span class="eyebrow">01 · Por qué importa</span><h2>Esto no es <em>problema de otros.</em></h2></div>
    <div class="imp-cifras">${I.cifras.map(([d,h,f],j)=>`<div class="imp-c c${j}"><b>${esc(d)}</b><p>${esc(h)}</p><small>${esc(f)}</small></div>`).join('')}</div>
    <div class="imp-filas">
      <div class="imp-f f0"><span>Para Chile</span><p>${esc(I.chile)}</p></div>
      <div class="imp-f f1"><span>A quién golpea más</span><p>${esc(I.golpe)}</p></div>
      <div class="imp-f f2"><span>Hazte cargo</span><p>${esc(I.tu)}</p></div>
    </div>
    <button type="button" class="btn acc" data-jump="s-accion">Ok. ¿Qué hago yo? ↓</button>
  </div></section>`;};
const compromisoBox=n=>{const I=(window.MU_IMPORTA||{})[n.id],C=I&&I.compromiso;if(!C)return '';
  const o=(n.orgs||[]).find(x=>x.n===C.o), u=o&&orgUrl(o);
  return `<div class="compromiso"><span class="eyebrow">Si de verdad te quieres hacer cargo</span><h3>${esc(C.t)}</h3><p>${esc(C.x)}</p>${u?`<a class="btn acc" href="${esc(u)}" target="_blank" rel="noopener">Comprométete con ${esc(o.n.split(' · ')[0])} ↗</a>`:''}</div>`;};
const ideasDe=n=>{const A=(window.MU_ACCION||{})[n.id];return A&&A.ideas?A.ideas:(n.ideas||[]);};

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
  $app.innerHTML=`<section class="intro intro-full"><div class="ih-hero">
    <div class="ih-media" id="ih-media">${fotosInicio()}
      <span class="ih-like" id="ih-like" aria-hidden="true"><b>+1</b><em>Ellos ya se sumaron.</em></span></div>
    <div class="wrap intro-in"><div class="intro-txt">
      <span class="live"><i></i>${HOY} en Más Uno · ${esc(f.fecha)}</span>
      <p class="intro-kicker">Ya sabes lo que pasa en Chile.</p>
      <h1>¿Y tú, qué vas a <em>hacer?</em></h1>
      <p class="intro-lede">Un niño al que nadie le lee un cuento. Una vecina que pasa el calor sola. Alguien que lleva meses buscando pega. No tienes que salvar a nadie: tienes que aparecer. Cada día te contamos una historia y te decimos, sin vueltas, qué puedes hacer tú. <b>Uno más. Eso es todo.</b></p>
      <div class="hero-cta"><button class="btn lime" type="button" data-jump="hoy-home">Dime qué puedo hacer hoy</button><a class="btn line" href="#n-${f.id}">${esHoy?'La historia de hoy':'La última historia'}</a></div>
      <ol class="intro-pasos" aria-label="Cómo funciona Más Uno"><li><b>1</b><span>Te contamos una historia de lo que pasa en Chile.</span></li><li><b>2</b><span>Te decimos algo concreto que puedes hacer tú.</span></li><li><b>3</b><span>Te mostramos quién ya está en esto, cerca tuyo.</span></li></ol>
    </div></div>
  </div>
  <div class="wrap intro-today">
    <span class="it-label">${HOY} · ${esc(f.fecha)}</span>
    <div class="it-grid">${hoy.map((n,j)=>`<a class="it-row" href="#n-${n.id}"><span class="it-n">0${j+1}</span><div><small>${esc(AREA[n.area].name)}</small><b>${esc(n.titulo)}</b></div><span class="it-go">→</span></a>`).join('')}</div>
  </div></section>
  <div class="ticker" aria-hidden="true"><div class="ticker-in">${tick}${tick}</div></div>`+`
  <section class="accion" id="hoy-home"><div class="wrap">
    <div class="hoy-grid">
      <a class="hoy-noticia reveal" href="#n-${f.id}"><div class="ph"><img src="${f.img.replace('w=1600','w=1000')}" ${fp(f.img)} alt="" loading="lazy"></div>
        <div class="hn-txt"><span class="eyebrow">${HOY} · ${esc(AREA[f.area].name)}</span><b>${esc(f.titulo)}</b><p>${esc(f.bajada||'')}</p><span class="hn-leer">Lee la historia →</span></div></a>
      <div class="hoy-col">${hoyBox(f,'big')}</div>
    </div>
  </div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">${helper()}</div></section>
  <section class="minga minga-v2"><div class="wrap">
    <div class="minga-head"><span class="eyebrow">+1 · La minga social</span><h2><span class="nw">Lo que solos no podemos,</span><br><em class="nw">lo movemos entre todos.</em></h2>
      <p class="minga-lede">En Chiloé, cuando una familia tiene que mover su casa, no llama a una empresa: llama a la minga.</p></div>
    ${mingaMapa()}
    <div class="minga-in">
      <div class="minga-txt">
        <p>Llegan los vecinos con bueyes, manos y ganas, y entre todos tiran la casa por el campo o la hacen flotar por el mar hasta su nuevo lugar. Nadie cobra. Se devuelve la mano cuando otro la necesita, y el día termina en una mesa larga.</p>
        <p>Más Uno es eso, pero con lo que está pasando en Chile hoy. No somos una fundación y no te pedimos plata: te contamos qué pasa y te mostramos quién ya está tirando del carro, para que te sumes.</p>
      </div>
      <p class="minga-cierre">¿Por qué +1? Porque no hacen falta héroes. <em>Hace falta uno más.</em> Y ese puedes ser tú.</p>
    </div>
    <ol class="minga-pasos"><li><b>Alguien lo necesita.</b><span>Una historia te muestra quién.</span></li><li><b>Pones una mano.</b><span>Una llamada, una hora, un libro, una visita.</span></li><li><b>Se devuelve la mano.</b><span>Hoy ayudas tú; mañana, otro.</span></li><li><b>Se termina en una mesa.</b><span>No es ayuda de uno a otro: es entre todos.</span></li></ol>
  </div></section>
  <section class="wrap stats">
    <div class="stat"><b>47%</b><span>de quienes no ayudan dice que no sabe dónde ni cómo. Para eso estamos.</span></div>
    <div class="stat"><b>${fmt(CAT.rows.length)}</b><span>organizaciones en todo Chile que ya están haciendo algo.</span></div>
    <div class="stat"><b>16</b><span>regiones. Siempre hay alguien trabajando cerca tuyo.</span></div>
    <div class="stat"><b>+1</b><span>No hacen falta héroes. Hace falta uno más.</span></div>
  </section>
  <section class="sec" id="semana"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Las últimas historias</span><h2>Lo que está <em>pasando</em></h2></div><p>Cada una parte por lo que puedes hacer tú. Si quieres entender más, sigues leyendo.</p></div>
    ${newsCard(f,true)}<div class="cards">${rest.slice(0,6).map(n=>newsCard(n)).join('')}</div>
    ${NEWS.length>7?`<div class="more" style="margin-top:56px"><a class="btn line" href="#historias">Todas las historias</a></div>`:''}
  </div></section>
  <section class="sec band-sand"><div class="wrap">${dudas()}</div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Temas</span><h2>¿Qué te <em>mueve</em>?</h2></div><p>Elige lo que te toca. En cada tema hay gente en todo Chile esperando una mano más.</p></div>
    ${areaGrid()}
  </div></section>
  <section class="wrap" style="padding-top:clamp(64px,10vw,120px);padding-bottom:clamp(64px,10vw,120px)">${orgCta()}</section>`;
  wireHelper(); likeFoto();
}
const areaGrid=(only)=>`<div class="tgrid">${CAT.areas.filter(a=>!only||only.includes(a[0])).map(a=>{const A=AREA[a[0]],k=NEWS.filter(n=>n.areas.includes(a[0])).length;
  return `<a class="tcard reveal" href="#tema-${a[0]}"><img src="${A.img}" ${fp(A.img)} alt="" loading="lazy"><div><b>${esc(a[1])}</b><span>${esc(A.frase||'')}</span><small>${fmt(COUNT[A.i])} organizaciones${k?` · ${k} ${k===1?'historia':'historias'}`:''}</small></div></a>`}).join('')}</div>`;

/* la foto del inicio: el vecino del techo con el pulgar arriba, y el +1 saliendo de su mano */
/* fotos del inicio: un carrusel con el mismo texto; cada foto tiene su cara (para encuadrar) y su mano (donde sale el +1) */
const UU=(id,w=1600)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const FOTOS=[
  {u:UU('1721245446685-89c2c80b8b95',2800),w:1000,h:667,cara:[.58,.42],mano:[.545,.25],txt:'Ellos ya se sumaron.',alt:'Una mujer y un hombre sonríen con el pulgar arriba en el campo, con cerros detrás'},
  {u:UU('1634089916298-9fa27180526c',2800),w:1000,h:667,cara:[.48,.3],mano:[.64,.2],txt:'Ella ya se sumó.',alt:'Una mujer mayor sonríe con los dos pulgares arriba'},
  {u:UU('1662945812236-604cdf61cf8e',2000),w:1000,h:1490,cara:[.5,.42],mano:[.6,.33],txt:'Él ya se sumó.',alt:'Un joven en el pasto levanta el pulgar'},
  {u:UU('1778098678756-e761c9df9938',2800),w:1200,h:800,cara:[.51,.47],mano:[.559,.43],txt:'Él ya se sumó.',alt:'Un vecino arriba del techo de una casa, con una pala, levanta el pulgar'},
  {u:UU('1780733066160-5b4c3acccefa',2800),w:1000,h:667,cara:[.52,.5],mano:[.93,.36],txt:'',cartel:{x:.529,y:.492,w:.066,h:.05,rot:-9,txt:'La minga social'},alt:'Un grupo de personas saluda con los brazos en alto, visto desde arriba'},
  {u:UU('1755549476789-4672eb1a6229',2000),w:1000,h:1500,cara:[.51,.36],mano:[.5,.1],txt:'Él ya se sumó.',alt:'Un hombre con gorra sonríe y levanta el pulgar'}
];
const fotosInicio=()=>FOTOS.map((f,i)=>`<img class="ih-img${i?'':' on'}" data-i="${i}" src="${i?'':f.u}" data-src="${f.u}" alt="${esc(f.alt)}" ${i?'loading="lazy" aria-hidden="true"':'fetchpriority="high"'}>`+(f.cartel?`<span class="ih-cartel${i?'':' on'}" data-i="${i}" aria-hidden="true">${esc(f.cartel.txt)}</span>`:'')).join('');
let FOTO_I=0;
function likeFoto(){
  const box=document.getElementById('ih-media'), like=document.getElementById('ih-like'); if(!box) return;
  const imgs=[...box.querySelectorAll('.ih-img')];
  const place=()=>{
    const cw=box.clientWidth, ch=box.clientHeight, movil=cw<760;
    imgs.forEach((img,i)=>{
      const F=FOTOS[i], r=F.w/F.h; let w,h,left,top;
      if(!movil&&r<1){ // foto vertical en escritorio: a la derecha, a toda la altura, con el borde izquierdo fundido
        h=ch*1.08; w=h*r; left=cw-w; top=Math.min(0,Math.max(ch-h,.5*ch-F.cara[1]*h));
      }else{
        w=movil?Math.max(cw,ch*r)*1.2:Math.max(cw*.95,ch*r*1.02); h=w/r;
        const tx=movil?.5:.72, ty=movil?.55:.5, maxL=movil?0:cw*.3;
        left=Math.min(maxL,Math.max(cw-w,tx*cw-F.cara[0]*w)); top=Math.min(0,Math.max(ch-h,ty*ch-F.cara[1]*h));
      }
      img.classList.toggle('fade-l',left>0);
      Object.assign(img.style,{width:w+'px',height:h+'px',left:left+'px',top:top+'px'});
      img.dataset.geo=JSON.stringify([left,top,w,h]);
      const c=F.cartel&&box.querySelector(`.ih-cartel[data-i="${i}"]`);
      if(c) Object.assign(c.style,{left:(left+F.cartel.x*w)+'px',top:(top+F.cartel.y*h)+'px',width:(F.cartel.w*w)+'px',height:(F.cartel.h*h)+'px',fontSize:(w*.0095)+'px',transform:`translate(-50%,-50%) rotate(${F.cartel.rot}deg)`});
      // nitidez: pide la foto al tamaño real que necesita esta pantalla (también retina)
      const need=Math.min(4200,Math.ceil(w*(window.devicePixelRatio||1)/400)*400), src=img.getAttribute('src')||img.dataset.src, cur=+((src.match(/[?&]w=(\d+)/)||[])[1]||0);
      const want=need>cur*1.05?src.replace(/([?&]w=)\d+/,'$1'+need):src;
      if(i===FOTO_I||img.getAttribute('src')) { if(img.getAttribute('src')!==want) img.src=want; } else img.dataset.src=want;
    });
    const g=JSON.parse(imgs[FOTO_I].dataset.geo), F=FOTOS[FOTO_I];
    like.style.left=Math.min(box.clientWidth-90,g[0]+F.mano[0]*g[2])+'px'; like.style.top=Math.max(box.clientWidth<760?150:190,g[1]+F.mano[1]*g[3])+'px';
    like.querySelector('em').textContent=F.txt;
    // si la frase se sale por la derecha, va al otro lado del +1
    like.classList.toggle('solo',!F.txt);
    like.classList.remove('izq'); const x=g[0]+F.mano[0]*g[2];
    if(x+14+like.scrollWidth>box.clientWidth-8) like.classList.add('izq');
  };
  const ir=n=>{ like.classList.remove('on');
    setTimeout(()=>{ imgs[FOTO_I].classList.remove('on'); box.querySelectorAll('.ih-cartel').forEach(c=>c.classList.remove('on')); FOTO_I=(n+imgs.length)%imgs.length;
      const im=imgs[FOTO_I]; if(!im.getAttribute('src')) im.src=im.dataset.src;
      im.classList.add('on'); box.querySelectorAll('.ih-cartel').forEach(c=>c.classList.toggle('on',+c.dataset.i===FOTO_I)); place(); dots.forEach((d,j)=>d.classList.toggle('on',j===FOTO_I));
      setTimeout(()=>like.classList.add('on'),700); },300); };
  // puntitos para elegir la foto
  let nav=box.querySelector('.ih-dots');
  if(!nav){nav=document.createElement('div');nav.className='ih-dots';nav.innerHTML=FOTOS.map((f,i)=>`<button type="button" aria-label="Foto ${i+1}"></button>`).join('');box.parentElement.appendChild(nav);}
  const dots=[...nav.querySelectorAll('button')]; dots.forEach((d,j)=>{d.classList.toggle('on',j===FOTO_I);d.onclick=()=>{ir(j);reiniciar();};});
  place();
  if(!window.__likeRZ){window.__likeRZ=true;addEventListener('resize',()=>{if(document.getElementById('ih-media'))likeFoto()},{passive:true});}
  requestAnimationFrame(()=>setTimeout(()=>like.classList.add('on'),500));
  // pasa sola cada 6 segundos (no si la persona prefiere menos movimiento)
  const quieto=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reiniciar(){clearInterval(window.__fotoT); if(!quieto) window.__fotoT=setInterval(()=>{ if(!document.getElementById('ih-media')){clearInterval(window.__fotoT);return;} if(!document.hidden) ir(FOTO_I+1); },6000);}
  reiniciar();
  // precarga la siguiente
  setTimeout(()=>{const n=imgs[(FOTO_I+1)%imgs.length]; if(!n.getAttribute('src')) n.src=n.dataset.src;},2500);
}

/* la foto de la minga, grande y limpia, con una sola frase */
const mingaMapa=()=>`<figure class="minga-mapa">
  <div class="mm-box"><img src="img/minga.webp" alt="Vista desde arriba de una minga en Chiloé: cientos de personas rodean una casa blanca que llevan hacia el mar" loading="lazy">
    <p class="mm-frase">Nadie mueve una casa <em>solo.</em></p></div>
  <figcaption>Una minga en Chiloé: los vecinos acompañan el traslado de una casa hasta el mar.</figcaption></figure>`;

/* ---------- ¿por dónde empiezo? ---------- */
function helper(pre={}){
  return `<div class="helper" id="helper"><div class="helper-in">
    <div><h2>¿Quieres hacer <em>más?</em></h2><p class="muted">Qué te importa, cuánto tiempo tienes y dónde vives. Te decimos algo concreto que puedes hacer y quién lo está haciendo cerca tuyo.</p></div>
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
/* ---------- dudas: lo que frena a la gente ---------- */
// cada respuesta: párrafos separados por \n\n
const DUDAS=[
  ['No tengo tiempo.','Es verdad, y no te vamos a pedir que lo saques de donde no hay. Pero conviene separar dos cosas: tiempo y constancia. Una llamada de diez minutos a la misma persona cada semana pesa más que una tarde entera una vez al año, porque lo que le cambia la vida a alguien rara vez es un gesto grande: es saber que alguien va a volver.\n\nPor eso cada historia parte con algo que se hace hoy. Si después descubres que te da para más, subes un peldaño. Si no, lo que hiciste igual cuenta.'],
  ['No tengo plata.','Casi nada de lo que proponemos cuesta dinero: acompañar, llamar, enseñar lo que sabes, prestar tu oficio, correr la voz. Eso es lo que más les falta a muchas organizaciones.\n\nLa plata también ayuda, y si algún día puedes darla, un aporte mensual chico vale más que una donación grande una sola vez: les permite planificar. Pero no es la puerta de entrada.'],
  ['Es una gota en el mar. El problema es demasiado grande.','El problema es grande, eso no está en duda. Pero preguntarse si tu acción resuelve la pobreza o la soledad en Chile es injusto con cualquier acción, incluso con la de los expertos. La pregunta útil es otra: ¿le cambia algo a una persona concreta? Para la señora que recibió tu llamada durante la ola de calor, la respuesta es sí.\n\nY ninguna de las organizaciones que te mostramos funciona con unos pocos héroes. Funcionan con cientos de manos chicas y constantes. Eso es una minga: nadie mueve la casa solo.'],
  ['¿Esto no le corresponde al Estado?','Muchas veces sí, y es legítimo exigirlo. Pero no es una cosa o la otra. Los cambios en las políticas públicas toman años, y el niño que hoy está en una residencia o la persona mayor que hoy vive sola no pueden esperar ese tiempo.\n\nAdemás, hay cosas que ninguna institución puede entregar: un vecino que pregunta, un adulto que vuelve cada semana, una comunidad que se da cuenta. Eso lo hacemos entre nosotros o no lo hace nadie.'],
  ['¿Y si hago más daño que bien?','Es una pregunta seria, y qué bueno que te la hagas. Pasa: hay voluntariados que van una vez, se sacan la foto y no vuelven, y el niño que se encariñó vive un abandono más. La investigación sobre mentoría lo muestra: cuando la relación con un niño se corta antes de tiempo, puede dejarlo peor que si nunca hubiera empezado (Grossman y Rhodes, 2002).\n\nLa forma de evitarlo no es complicada: entra a través de una organización seria, que te prepare y te acompañe; promete solo lo que puedes cumplir, y si algo cambia, avisa y cierra bien.'],
  ['No sé hacer nada útil.','Casi todo lo que se necesita no es técnico: escuchar sin apuro, leer en voz alta, acompañar a un trámite, enseñar lo que sabes de tu pega. Y lo que sí es técnico, las organizaciones lo enseñan.\n\nLo que no te pueden enseñar es a aparecer, y a seguir apareciendo. Eso es lo más escaso y lo más valioso que puedes llevar.'],
  ['Me da miedo. No sé si me la puedo emocionalmente.','Es honesto decirlo, y es mejor saberlo antes que después. Hay temas que pegan fuerte: niños enfermos, abuso, personas que mueren solas. No todos tenemos que estar en primera fila, y no sirve forzarse.\n\nHay muchas formas de sumar sin exponerte: difundir, juntar lo que se necesita, apoyar desde tu profesión, aportar a una organización. Y si eliges estar cerca, busca organizaciones que acompañen a sus voluntarios. Las serias lo hacen.'],
  ['¿Ayudar no es puro asistencialismo?','Depende de cómo se haga. Regalar algo una vez y desaparecer puede aliviar más a quien da que a quien recibe. Lo que buscamos es otra cosa: relaciones que duran, organizaciones que trabajan con las personas y no por ellas, y comunidades que se sostienen entre sí.\n\nPor eso cada historia termina en quienes llevan años en el tema. Ellos saben lo que sirve y lo que no. Tu mano se suma a algo que ya funciona.'],
  ['¿Y si me comprometo y después no puedo seguir?','Pasa, y no te hace mala persona. Lo que importa es cómo te vas: avisa con tiempo, despídete si hay alguien que te espera, y deja que la organización prepare el relevo.\n\nAntes de empezar, sé realista contigo. Vale más una hora al mes que cumples durante un año que cuatro a la semana que abandonas a los dos meses.'],
  ['¿Cómo sé que la organización es seria?','Las que destacamos en cada historia las revisamos: existen, están activas y reciben a personas como tú. El buscador es más amplio: es la base nacional de organizaciones de abril de 2025, y algunos datos pueden haber cambiado.\n\nAntes de comprometerte, mira si su web o sus redes están al día, pregunta qué harías tú y cómo te van a preparar, y si vas a donar, pide que te expliquen en qué se usa. Una organización seria responde esas preguntas sin problema.'],
  ['¿Qué gana Más Uno con esto?','Nada en plata: no recibimos donaciones ni manejamos voluntarios. Contamos lo que pasa en Chile y te mostramos quién ya está trabajando en eso, para que tu ayuda llegue directo a ellos.\n\nLo que queremos es simple: que la próxima vez que leas una noticia que te duela, en vez de pasar de largo, sepas qué hacer.']
];
// las que van al final de cada historia
const DUDAS_HISTORIA=[2,4,0,6,8,9].map(i=>DUDAS[i]);
const dudas=(lista=DUDAS,titulo='Lo sabemos: <em>te cuesta.</em>',lede='No eres el único. Estas son las razones más honestas que escuchamos para no hacer nada. Las tomamos en serio, porque detrás de cada una hay algo verdadero.')=>
  `<div class="dudas"><div class="dudas-head"><span class="eyebrow">Tus dudas</span><h2>${titulo}</h2><p>${lede}</p></div>
  <div class="dudas-list">${lista.map(([q,a],i)=>`<details class="duda"${i===0?' open':''}><summary>${esc(q)}<span aria-hidden="true">+</span></summary>${a.split('\n\n').map(x=>`<p>${esc(x)}</p>`).join('')}</details>`).join('')}</div></div>`;
// botones que bajan a una parte de la página sin cambiar la ruta (#n-…)
document.addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(!b)return;e.preventDefault();const el=document.getElementById(b.dataset.jump);if(el){const y=el.getBoundingClientRect().top+scrollY-130;scrollTo({top:y,behavior:'smooth'});}});
const share=(t)=>`<button class="btn line sm" type="button" onclick="MU.share(${esc(JSON.stringify(t))})">Compártela</button>`;
const minutos=n=>Math.max(3,Math.round((n.blocks||[]).reduce((s,b)=>s+String(b.h||'').split(/\s+/).length+(b.li||[]).join(' ').split(/\s+/).length,0)/200));

function news(n){
  const t=postsOf(n), i=NEWS.indexOf(n), nx=NEWS[(i+1)%NEWS.length], pv=NEWS[(i-1+NEWS.length)%NEWS.length];
  const MV=(window.MU_VIDEOS||{})[n.id], ESVIDEO=m=>tedSlug(m.u)||/video|charla|ted\b/i.test(m.tipo||'')||/youtube\.com|youtu\.be|vimeo\.com/.test(m.u||'');
  const vids=MV||(n.mas||[]).filter(m=>tedSlug(m.u)).map(m=>({p:'ted',id:tedSlug(m.u),t:m.t,a:m.a,y:m.y,de:m.d})), LS=(window.MU_LECTURAS||{})[n.id]||[], lect=m=>{const L=LS.find(x=>x.k===m.t)||{};return {...m,t:L.t||m.t,a:L.a||m.a,u:L.u||m.u||'',r:L.r||m.d||''};},
    books=(n.mas||[]).filter(m=>m.tipo==='Libro').map(lect), refs=(n.mas||[]).filter(m=>m.tipo!=='Libro'&&!(MV?ESVIDEO(m):tedSlug(m.u))).map(lect);
  const COL=['#2E3230','#B9472F','#5E7A70','#7A4E3A','#3C4A55'];
  const H=n.historia||{p:[]};
  const quote=H.quote||((H.p.join(' ').match(/«([^»]{20,180})»/)||[])[1]);
  const hayMas=vids.length||books.length||refs.length;
  const toc=[(window.MU_IMPORTA||{})[n.id]&&['s-importa','Por qué importa'],['s-accion','Qué puedes hacer'],n.quePaso&&n.quePaso.length&&['s-paso','Qué pasó'],['s-entender','Para entenderlo'],hayMas&&['s-profundizar','Para profundizar'],H.p.length&&['s-historia','Una historia'],['organizaciones','Quién trabaja en esto'],['s-dudas','Tus dudas']].filter(Boolean);
  const top3=n.orgs.filter(o=>o.w||o.ig).slice(0,3);
  $app.innerHTML=hero({img:n.img,short:true,eyebrow:`${esc(n.fecha)} · ${esc(AREA[n.area].name)}`,title:esc(n.titulo),lede:esc(((window.MU_IMPORTA||{})[n.id]||{}).gancho||((window.MU_ACCION||{})[n.id]||{}).resumen||n.bajada),
      meta:`<div class="hero-cta"><button class="btn acc" type="button" data-jump="s-accion">¿Qué puedo hacer yo?</button><button class="btn line" type="button" data-jump="${(window.MU_IMPORTA||{})[n.id]?'s-importa':'s-paso'}">Por qué importa</button></div>`})+
  `<nav class="toc" aria-label="En esta historia"><div class="wrap toc-in"><span class="toc-mark">+1</span>${toc.map(([id,l])=>`<button type="button" data-jump="${id}">${l}</button>`).join('')}</div></nav>`+
  importaBox(n)+
  /* 1 · lo primero: qué puedes hacer tú */
  `<section class="accion" id="s-accion"><div class="wrap">
    <div class="accion-head"><span class="eyebrow">+1 · Tu parte</span><h2>¿Y tú, qué vas a <em>hacer?</em></h2>
      <p>No te pedimos que lo arregles todo. Una cosa, hoy.</p></div>
    ${hoyBox(n,'big')}
    ${top3.length?`<div class="accion-sub"><h3>Súmate a quienes ya están en esto</h3><button type="button" data-jump="organizaciones">Ver todas cerca tuyo ↓</button></div>
    <div class="orgs-logo">${top3.map(orgCard).join('')}</div>`:''}
    ${ideasDe(n).length?`<div class="accion-sub"><h3>¿Quieres hacer más?</h3></div>
    <ol class="ideas-cortas">${ideasDe(n).map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:''}
    ${compromisoBox(n)}
  </div></section>`+
  /* 2 · qué pasó */
  (n.quePaso&&n.quePaso.length?`<section class="wrap" id="s-paso"><div class="narrow"><div class="parte"><span class="parte-n">02</span><div><span class="eyebrow">Qué pasó</span><h2>La noticia, en corto</h2></div></div><div class="noticia reveal">${n.quePaso.map(p=>`<p>${esc(p)}</p>`).join('')}${n.origen?`<span class="src">Fuente: ${linkify(n.origen)}</span>`:''}</div></div></section>`:'')+
  /* 3 · para entenderlo */
  `<section class="wrap" id="s-entender"><div class="narrow"><div class="parte"><span class="parte-n">03</span><div><h2>Para entenderlo</h2><p class="parte-sub">Si quieres ir al fondo. Si no, sigue bajando.</p></div></div></div></section>`+
  (n.blocks?article(n):`<article class="article wrap"><div class="narrow">${n.texto.map((p,j)=>`<p class="${j===0?'first':''}">${esc(p)}</p>`).join('')}<span class="src">Fuente: El Mercurio, Sociedad (A7), jueves 19 de noviembre de 2026</span></div></article>`)+
  `<div class="wrap"><div class="narrow"><div class="tags">${(n.tags||[]).map(x=>`<a href="#tag-${tslug(x)}">${esc(x)}</a>`).join('')}</div></div></div>`+
  (hayMas?`<section class="sec profundizar" id="s-profundizar"><div class="wrap">
    <div class="parte parte-ancha"><span class="parte-n">04</span><div><span class="eyebrow">Para profundizar</span><h2>Para ver, leer y seguir pensando</h2></div></div>
    ${vids.length?`<h3 class="para">Para ver</h3><div class="vids">${vids.map(vcard).join('')}</div>`:''}
    ${books.length||refs.length?`<h3 class="para">Para leer</h3>`:''}
    ${books.length?`<div class="shelf">${books.map((b,j)=>`<${b.u?`a href="${esc(b.u)}" target="_blank" rel="noopener"`:'div'} class="book"><div class="bcover" data-ol="${esc(b.t)}|${esc((b.a.split(/,| y /)[0]||'').trim().split(' ').pop())}" style="background:${COL[j%COL.length]}"><span class="t">${esc(b.t)}</span><span class="a">${esc(b.a)}</span></div><b>${esc(b.t)}</b><small>${esc([b.a,b.y].filter(Boolean).join(' · '))}</small>${b.r?`<p class="lres">${esc(b.r)}</p>`:''}${b.u?`<span class="lver">${/openlibrary/.test(b.u)?'Ver el libro':'Ver más'} ↗</span>`:''}</${b.u?'a':'div'}>`).join('')}</div>`:''}
    ${refs.length?`<div class="refs">${refs.map(r=>{const inner=`<span>${esc(r.tipo)}</span><div><b>${esc(r.t)}</b><small>${esc([r.a,r.y].filter(Boolean).join(' · '))}${r.u?' · '+esc(host(r.u)):''}</small>${r.r?`<p class="lres">${esc(r.r)}</p>`:''}</div>`;return r.u?`<a class="ref" href="${r.u}" target="_blank" rel="noopener">${inner}</a>`:`<div class="ref">${inner}</div>`}).join('')}</div>`:''}
  </div></section>`:'')+
  (H.p.length?`<section class="story" id="s-historia"><div class="ph"><img src="${n.img3||n.img2||n.img}" ${fp(n.img3||n.img2||n.img)} alt="" loading="lazy"></div><div class="story-in reveal"><span class="eyebrow">Una historia</span>
    <h2>${esc(storyName(H))}</h2>${quote?`<blockquote>«${esc(quote.replace(/[.»]+$/,''))}»${H.who?`<footer style="font-family:var(--sans);font-size:14px;margin-top:10px;color:rgba(237,234,227,.7)">${esc(H.who)}</footer>`:''}</blockquote>`:''}
    ${H.p.map(p=>`<p>${esc(quote?p.replace(/\s*«[^»]*»\.?/,'').trim():p)}</p>`).join('')}${H.extra?`<p>${linkify(H.extra)}</p>`:''}${H.src?src(H.src):''}</div></section>`:'')+
  `<section class="sec" id="organizaciones"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">${esc(AREA[n.area].name)}</span><h2>¿Quién trabaja en esto <em>cerca tuyo?</em></h2></div><p>No tienes que inventar nada: ya hay gente tirando del carro. Escríbeles, pregunta cómo sumarte y parte.</p></div>
    <div class="picks">${n.orgs.map(o=>`<div class="pick reveal"><div class="pick-top">${orgLogo(o)}<h4>${esc(o.n)}</h4></div><p>${esc(o.d)}</p><div class="links">${[o.w&&[o.w,host(o.w)],o.w2&&[o.w2,host(o.w2)],o.ig&&[o.ig,'Instagram'],o.e&&['mailto:'+o.e,o.e],o.t&&['tel:'+o.t.replace(/[^\d+]/g,''),o.t]].filter(Boolean).map(([u,l])=>`<a href="${u}" ${u.startsWith('http')?'target="_blank" rel="noopener"':''}>${esc(l)}</a>`).join('')}</div></div>`).join('')}</div>
    <form class="finder" id="nf" onsubmit="event.preventDefault()">
      <label><small>Tu región</small><select name="r"><option value="">Todo Chile</option>${regOpts(store.get('mu-r'))}</select></label>
      <label><small>Tema</small><select name="a"><option value="*">${esc(n.areas.map(a=>AREA[a].name).join(', '))}</option>${areaOpts('')}</select></label>
      <label class="grow"><small>Nombre</small><input name="q" placeholder="Fundación, corporación, agrupación…"></label>
    </form><div id="nres"></div>
    <p class="steps-note">¿Tu organización trabaja en esto y no aparece? <a href="#suma">Súmala a Más Uno</a>.</p>
  </div></section>
  <section class="sec band-sand" id="s-dudas"><div class="wrap">${((window.MU_ACCION||{})[n.id]||{}).faq?dudas(MU_ACCION[n.id].faq,'Lo que te puede <em>frenar.</em>','Las dudas más comunes sobre esta historia, respondidas sin vueltas.'):dudas(DUDAS_HISTORIA)}</div></section>
  <section class="wrap"><div class="cierre reveal"><span class="cierre-mark">+1</span><div><span class="eyebrow">Antes de irte</span>
    <h2>¿Ya lo hiciste? <em>Cuéntale a alguien.</em></h2><p>Así se arma una minga: uno pone la mano y el que está al lado se anima. Mándale esta historia a una persona que pueda sumarse.</p>
    <div class="hero-cta">${share(n.titulo)}<button class="btn acc sm" type="button" data-jump="s-accion">Volver a qué puedo hacer</button></div></div></div></section>
  <section class="wrap" style="padding-bottom:clamp(64px,10vw,110px)"><div class="next">
    ${[pv,nx].map((x,j)=>`<a class="nextcard" href="#n-${x.id}"><img src="${x.img.replace('w=1600','w=900')}" ${fp(x.img.replace('w=1600','w=900'))} alt="" loading="lazy"><div><small>${j?'Siguiente historia':'Historia anterior'}</small><b>${esc(x.titulo)}</b></div></a>`).join('')}
  </div></section>`;
  wireCarousels($app); covers(); tocSpy();
  const f=document.getElementById('nf'), box=document.getElementById('nres');
  const run=()=>{store.set('mu-r',f.r.value);const a=f.a.value;results(box,search({areas:a==='*'?(n.kwOnly?null:n.areas):[a],kw:a==='*'?n.kw:[],need:a==='*'&&n.kwOnly,reg:f.r.value,q:f.q.value}),12);};
  f.r.onchange=run; f.a.onchange=run; let tm; f.q.oninput=()=>{clearTimeout(tm);tm=setTimeout(run,200)}; run();
}
function tocSpy(){
  const bs=[...document.querySelectorAll('.toc button[data-jump]')]; if(!bs.length||!('IntersectionObserver' in window)) return;
  const secs=bs.map(b=>document.getElementById(b.dataset.jump)).filter(Boolean);
  const set=id=>bs.forEach(b=>{const on=b.dataset.jump===id;b.classList.toggle('on',on);if(on)b.scrollIntoView({block:'nearest',inline:'center'});});
  const o=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)set(e.target.id)})},{rootMargin:'-140px 0px -60% 0px'});
  secs.forEach(x=>o.observe(x));
}
function pageHead(eyebrow,title,lede){return `<section class="pagehead wrap"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1>${lede?`<p class="lede">${lede}</p>`:''}</section>`;}
function historias(){
  $app.innerHTML=pageHead('Historias','Historias que te piden <em>una mano.</em>','Cada una parte por lo que puedes hacer tú. Después, si quieres: qué pasó, por qué importa y quién ya está en esto.')+
  `<section class="wrap" style="padding-bottom:110px"><div class="cards" style="margin-top:0">${NEWS.map(n=>newsCard(n)).join('')}</div></section>`;
}
function temas(){
  $app.innerHTML=pageHead('Temas','¿Qué te <em>mueve?</em>','Elige lo que te toca. En cada tema te decimos qué puedes hacer tú y quién ya está trabajando en eso.')+
  `<section class="wrap" style="padding-bottom:110px">${areaGrid()}</section>`;
}
function tema(slug){
  const A=AREA[slug]; if(!A) return temas();
  const rel=NEWS.filter(n=>n.areas.includes(slug));
  $app.innerHTML=hero({img:A.img.replace('w=1200','w=2000'),short:true,eyebrow:'Tema',title:esc(A.name),lede:esc(A.frase||''),
      meta:`<div class="hero-cta"><button class="btn acc" type="button" data-jump="t-accion">¿Qué puedo hacer yo?</button></div>`})+
  `<section class="accion" id="t-accion"><div class="wrap"><div class="accion-head"><span class="eyebrow">+1 · Tu parte</span><h2>¿Y tú, qué vas a <em>hacer?</em></h2><p>Según el tiempo que tengas. Parte por la primera: se hace hoy.</p></div>
    <div class="steps">${(A.acc||[]).map(x=>`<div class="step reveal"><span class="eyebrow">${esc(TIEMPOS.find(t=>t.k===x.t).t)}</span><p style="margin-top:8px">${esc(x.x)}</p></div>`).join('')}</div></div></section>`+
  (rel.length?`<section class="sec band-sand"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Historias</span><h2>Lo que hemos contado</h2></div></div><div class="cards" style="margin-top:0">${rel.map(n=>newsCard(n)).join('')}</div></div></section>`:'')+
  `<section class="wrap" style="padding-top:clamp(64px,10vw,110px);padding-bottom:clamp(64px,10vw,110px)">${orgCta({area:slug})}</section>`;
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
  $app.innerHTML=pageHead('¿Qué puedo hacer yo?','Quieres ayudar. <em>Te cuesta.</em> Es normal.','No sabes por dónde partir, no tienes tiempo, te da susto equivocarte. Le pasa a casi la mitad de Chile. Aquí lo hacemos simple: tres preguntas, una acción, alguien cerca tuyo que ya está en esto.')+
  `<section class="wrap" style="padding-bottom:64px">${helper()}</section>
  <section class="sec band-sand"><div class="wrap">${dudas()}</div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">+1 · Haz esto hoy</span><h2>Una cosa por historia. <em>Elige una.</em></h2></div></div>
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
  share(t){const d={title:t+' · Más Uno',text:t+'. Mira lo que puedes hacer tú:',url:location.href};
    if(navigator.share){navigator.share(d).catch(()=>{});return;}
    try{navigator.clipboard.writeText(location.href).then(()=>alert('Copiamos el link. Pégalo donde quieras.'));}catch(e){prompt('Copia este link:',location.href);}},
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
  
  else if(k==='ayudar'){ayudar();document.title='¿Qué puedo hacer yo? · Más Uno';nav='ayudar';}
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
