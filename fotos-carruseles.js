/* Fotos de los carruseles que reemplazan a las de posts.js, en la web y en el kit de Instagram (Instagram/Kit). Se aplica después de cargar posts.js. Clave: "<id del tema>/<n.º de post 0-2>", valor: {n.º de lámina: url} o {n.º de lámina: {c, img, pos}} para cambiar también el tipo de lámina. */
window.MU_OVR = {
  /* 23 nov: la foto original (manos con semillas) parecía pastillas */
  "residencias-2026-11-18/2": {0: "https://images.unsplash.com/photo-1611417041461-2060f649193d?w=1600&q=85&auto=format&fit=crop"},
  /* 23 nov: fotos que no calzaban con la historia o no dejaban leer el texto */
  "lectura-2026-11-20/0": {0: "https://images.unsplash.com/photo-1532789339108-2ebc484efbf1?w=1600&q=85&auto=format&fit=crop"},
  "lectura-2026-11-20/2": {0: "https://images.unsplash.com/photo-1758691031958-29541f3207a5?w=1600&q=85&auto=format&fit=crop"},
  "soledad-mayores-2026-11-22/0": {0: "https://images.unsplash.com/photo-1603129473525-4cd6f36fe057?w=1600&q=85&auto=format&fit=crop"},
  "soledad-mayores-2026-11-22/2": {0: "https://images.unsplash.com/photo-1763467669416-3b82470c7e73?w=1600&q=85&auto=format&fit=crop"},
  /* 23 nov: las linternas y luego la madre de espaldas no calzaban; se eligió la niña de perfil */
  "casafamilia-2026-11-19/2": {0: "https://images.unsplash.com/photo-1690433272636-96d42722cd5c?w=1600&q=85&auto=format&fit=crop"},
  /* 23 nov: la portada de Ideas era solo color; se le pone foto */
  "casafamilia-2026-11-19/1": {0: {c: "photo", img: "https://images.unsplash.com/photo-1780461159717-04ebb5eb3293?w=1600&q=85&auto=format&fit=crop"}},
  /* 23 nov: la pieza con luz cálida parecía un hotel */
  "casafamilia-2026-11-19/0": {0: "https://images.unsplash.com/photo-1729684964917-904bca805fa9?w=1600&q=85&auto=format&fit=crop"},
  /* 26 nov: portadas de la historia 03 con foto */
  "redes-2026-11-19/1": {0: {c: "photo", img: "https://images.unsplash.com/photo-1752652013112-6734bf1a682a?w=1600&q=85&auto=format&fit=crop"}},
  "redes-2026-11-19/2": {0: {c: "photo", img: "https://images.unsplash.com/photo-1517940322679-2b003a168fd2?w=1600&q=85&auto=format&fit=crop"}},
};
(function(){ for(const k in window.MU_OVR){ const [id,p]=k.split('/'), t=(window.MU_POSTS||[]).find(x=>x.id===id); if(t&&t.posts[+p]) for(const i in MU_OVR[k]) { const sl=t.posts[+p].slides[+i], v=MU_OVR[k][i]; if(sl){ if(typeof v==='string') sl.img=v; else Object.assign(sl,v); } } } })();
