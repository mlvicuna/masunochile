/* Más Uno · videos de cada historia («Para ver»).
   Los mantiene a mano la tarea diaria (y Claude cuando se corrige). Reemplazan a las charlas y videos del .docx.
   Cada video: p = 'ted' | 'youtube' | 'vimeo'; id = slug de TED, id de YouTube o número de Vimeo;
   t = título; a = autor o canal; y = año; dur = duración; lang = idioma;
   de y por = la reseña, que se muestra como un solo párrafo, sin etiquetas: de = qué muestra (1-2 frases); por = por qué está en esta historia (1 frase).
   Todos llevan reseña, también los de TED. Comprueba cada id antes de agregarlo (ver INSTRUCCIONES.md). */
window.MU_VIDEOS={
'cuidadoras':[
 {p:'youtube',id:'9H0-fuaMaPQ',t:'Discapacidad en Chile: cuidadoras 24/7',a:'La Tercera · #HistoriasLT',y:'2018',dur:'10 min',lang:'En español',
  de:'Reportaje de La Tercera que sigue el día a día de madres que cuidan sin pausa a hijos con discapacidad severa y muestra lo que dejaron para hacerlo: el trabajo, el descanso, la vida propia.',
  por:'Pone imagen a la semana que describe la carta de esta historia: cumplir con todo, todo el tiempo.'},
 {p:'youtube',id:'7MuHKy7gkRk',t:'Testimonios de madres y padres cuidadores',a:'Defensoría de la Niñez',y:'2021',dur:'5 min',lang:'En español',
  de:'Madres y padres de niños pequeños cuentan, en entrevistas hechas para el Informe Anual 2021 de la Defensoría de la Niñez, cómo viven su rol de cuidadores y qué apoyo les falta.',
  por:'Son las voces de quienes cuidan, contadas por ellos mismos.'},
 {p:'youtube',id:'UIaXz8pqq7Y',t:'Autocuidado en personas cuidadoras',a:'CNN Chile · Sana Mente',y:'2023',dur:'5 min',lang:'En español',
  de:'Segmento sobre cómo la discapacidad de un hijo cambia la vida de toda la familia y por qué quien cuida también necesita cuidarse.',
  por:'Responde a la pregunta de fondo de esta historia: quién se ocupa de la que cuida.'},
 {p:'ted',id:'andrew_solomon_love_no_matter_what',t:'Amor, pase lo que pase',a:'Andrew Solomon',y:'2013',lang:'En inglés, con subtítulos en español',
  de:'El escritor Andrew Solomon resume los años que pasó entrevistando a familias cuyos hijos son muy distintos a ellos —con autismo, sordera o síndrome de Down— y lo que aprendió del amor de esos padres.',
  por:'Habla de criar a un hijo «diferente», que es la experiencia de las mamás de esta historia.'}
],
'lengua-de-senas':[
 {p:'youtube',id:'auWzCBXD9HA',t:'Descubre cómo saludar y responder en lengua de señas chilena',a:'Signo Cultura',y:'2023',dur:'7 min',lang:'En lengua de señas chilena y español',
  de:'Lección breve con los saludos básicos que se necesitan para conversar con una persona sorda que usa lengua de señas chilena.',
  por:'Es el «Haz esto hoy» de esta historia: con este video se puede aprender a saludar ahora mismo.'},
 {p:'youtube',id:'2K3O2LIrXIw',t:'El canto de las manos (tráiler)',a:'Gustavo Dudamel',y:'2025',dur:'3 min',lang:'En español',
  de:'Tráiler del documental de María Valverde, con los ensayos y la función de «Fidelio» de Beethoven junto a los artistas sordos del Coro de Manos Blancas de Venezuela.',
  por:'Es la película de la noticia: muestra cómo se ve una ópera cantada con las manos.'},
 {p:'ted',id:'christine_sun_kim_the_enchanting_music_of_sign_language',t:'La música encantadora del lenguaje de señas',a:'Christine Sun Kim',y:'2015',lang:'En lengua de señas americana con intérprete, subtítulos en español',
  de:'La artista sorda Christine Sun Kim cuenta cómo descubrió que la lengua de señas se parece a la música y cómo convirtió el sonido en dibujo.',
  por:'Dice, desde una persona sorda, lo mismo que la ópera del documental: que la música también se puede ver.'},
 {p:'youtube',id:'xtWdXy0UE44',t:'Distintos como todos',a:'Pablo Esquer G.',y:'2013',dur:'70 min',lang:'En español y lengua de señas chilena',
  de:'Documental chileno sobre la cultura sorda y sordociega en Chile, contado por sus protagonistas.',
  por:'Muestra que la lengua de señas chilena no es solo una herramienta, sino una comunidad con cultura propia.'}
],
'inclusion-escolar':[
 {p:'ted',id:'temple_grandin_the_world_needs_all_kinds_of_minds',t:'El mundo necesita todo tipo de mentes',a:'Temple Grandin',lang:'En inglés, con subtítulos en español',
  de:'Temple Grandin, científica autista que cambió la forma de tratar al ganado en Estados Unidos, explica cómo piensa ella —en imágenes— y por qué hay mentes que funcionan distinto.',
  por:'Ayuda a ver a un niño autista no como un alumno «con menos», sino con otra forma de pensar que el curso puede aprovechar.'},
 {p:'youtube',id:'quu6ku5fblA',t:'Autismo, el gran desconocido',a:'Pau Brunet · TEDxSitges',y:'2023',dur:'12 min',lang:'En español',
  de:'Pau, un niño autista de 10 años que estudia en una escuela pública, cuenta en formato de entrevista cómo vive su autismo desde adentro.',
  por:'Es la voz de un niño en edad escolar: lo que necesita de sus compañeros y profesores, dicho por él.'},
 {p:'vimeo',id:'63580513',t:'Sí, estoy aquí',a:'Documental de docentes de Zaragoza',y:'2013',dur:'53 min',lang:'En español',
  de:'Documental hecho por profesoras de dos colegios públicos de Zaragoza que combinan un aula de apoyo especializado con la clase de siempre. Muestra el día a día de niños autistas en la escuela.',
  por:'Muestra en la práctica cómo se ve una inclusión que funciona: apoyo especializado sin sacar al niño de su curso.'}
],
'areas-verdes':[
 {p:'youtube',id:'Fk8H5QTo-Rs',t:'La cruda realidad de la desigualdad en espacios verdes',a:'Reportajes T13',y:'2020',dur:'10 min',lang:'En español',
  de:'Reportaje de Teletrece sobre la desigualdad en el acceso a áreas verdes en Chile, entre comunas con plazas y parques y otras que casi no los tienen.',
  por:'Es el lado chileno de esta historia: por qué la plaza con árboles cerca de la casa no está repartida de forma pareja.'},
 {p:'youtube',id:'UvHo42SVKxs',t:'Terapia del bosque: caminatas que sanan',a:'Sana Mente · CNN Chile',y:'2023',dur:'5 min',lang:'En español',
  de:'Presenta la terapia de bosque, una caminata lenta y contemplativa nacida en Japón, y cómo la Fundación Floresta la usa en Chile con personas que viven un cáncer.',
  por:'Pone en imágenes lo que explica la historia: el contacto con lo verde baja el estrés y ayuda a sanar.'},
 {p:'ted',id:'nalini_nadkarni_life_science_in_prison',t:'Ciencia de la vida en la cárcel',a:'Nalini Nadkarni',lang:'En inglés, con subtítulos en español',
  de:'Una ecóloga que estudia la copa de los árboles cuenta cómo llevó plantas, ciencia y naturaleza a cárceles de Estados Unidos, y qué cambió en los internos.',
  por:'Muestra que la naturaleza le hace bien incluso a quienes viven en los lugares más grises, que es lo que le falta a muchas comunas.'}
],
'calor-mayores':[
 {p:'youtube',id:'WSFSIzNmb9s',t:'Ola de calor: por qué los adultos mayores son los más afectados y qué síntomas vigilar',a:'CNN Chile',y:'2026',dur:'7 min',lang:'En español',
  de:'Entrevista del 25 de noviembre de 2026 al urgenciólogo Felipe Rivera, del Hospital Clínico de la Universidad de Chile: por qué el calor afecta más a las personas mayores y cuáles son las señales de un golpe de calor.',
  por:'Es lo práctico de esta historia: qué fijarte cuando llamas o visitas a una persona mayor durante la ola de calor.'},
 {p:'youtube',id:'YhU45EgFb6Y',t:'Eric Klinenberg sobre la importancia de la «infraestructura social»',a:'Johns Hopkins University',y:'2018',dur:'2 min',lang:'En inglés',
  de:'El sociólogo Eric Klinenberg, autor de «Palaces for the People», explica qué es la infraestructura social: los lugares y vínculos que hacen que los vecinos se encuentren.',
  por:'Klinenberg es quien estudió la ola de calor de Chicago de 1995 y descubrió que sobrevivieron más quienes vivían donde alguien tocaba la puerta.'},
 {p:'ted',id:'robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness',t:'¿Qué hace que una vida sea buena?',a:'Robert Waldinger',lang:'En inglés, con subtítulos en español',
  de:'El director del Estudio de Harvard sobre el Desarrollo Adulto, que ha seguido a cientos de personas durante más de 75 años, cuenta qué fue lo que más predijo una vida larga y sana.',
  por:'Su respuesta —las buenas relaciones— es el fondo de esta historia: los vínculos protegen la salud, también frente al calor.'}
],
'orientacion-jovenes':[
 {p:'youtube',id:'bfp3vN2B5zo',t:'Aprender a elegir: ¿qué carrera estudiar?',a:'Liliana Llamas · TEDxBariloche',y:'2018',dur:'12 min',lang:'En español',
  de:'Una socióloga que trabaja en orientación vocacional propone otra forma de elegir qué estudiar: partir por la vida y la persona que uno quiere ser, no solo por la lista de carreras.',
  por:'Son las preguntas que un adulto puede ayudar a hacerse a un joven cuando le cuenta cómo es su trabajo.'},
 {p:'youtube',id:'Yi7MTFkXmQs',t:'Fundación Portas: la educación superior transforma realidades',a:'¿Cuál es tu huella? · TVN y 24 Horas',y:'2024',dur:'6 min',lang:'En español',
  de:'Nota sobre la Fundación Portas, que acompaña a estudiantes en la educación superior con apoyo económico, psicológico y social, tutores voluntarios y un área de empleabilidad.',
  por:'Muestra cómo se ve en Chile el acompañamiento de adultos voluntarios a jóvenes que no tienen a quién preguntarle.'},
 {p:'ted',id:'angela_lee_duckworth_grit_the_power_of_passion_and_perseverance',t:'Grit: el poder de la pasión y la perseverancia',a:'Angela Lee Duckworth',lang:'En inglés, con subtítulos en español',
  de:'Una psicóloga que fue profesora explica por qué la perseverancia sostenida en el tiempo predice el éxito tanto como el talento.',
  por:'El talento está repartido; lo que muchas veces falta es alguien que ayude a sostener el esfuerzo cuando cuesta.'}
],
'violencia-mujer':[
 {p:'ted',id:'leslie_morgan_steiner_why_domestic_violence_victims_don_t_leave',t:'Por qué las víctimas de violencia doméstica no se van',a:'Leslie Morgan Steiner',lang:'En inglés, con subtítulos en español',
  de:'Leslie Morgan Steiner vivió años de violencia con su pareja. Cuenta desde adentro cómo empezó, por qué no se fue y cómo logró salir.',
  por:'Responde la pregunta que más se escucha —«¿por qué no se va?»— y explica por qué salir es tan difícil y tan riesgoso.'},
 {p:'youtube',id:'qZPsIfQOPf8',t:'Violencia en el pololeo',a:'Reportajes T13',y:'2017',dur:'17 min',lang:'En español',
  de:'Reportaje de Teletrece sobre la violencia en las relaciones de pololeo entre jóvenes chilenos.',
  por:'La violencia no parte en el matrimonio: muchas veces empieza en el pololeo, cuando todavía cuesta nombrarla.'},
 {p:'ted',id:'jackson_katz_violence_against_women_it_s_a_men_s_issue',t:'La violencia contra las mujeres, un asunto de hombres',a:'Jackson Katz',lang:'En inglés, con subtítulos en español',
  de:'Un educador que trabaja con hombres jóvenes y deportistas explica por qué la violencia contra las mujeres no es un «tema de mujeres» y qué pueden hacer los testigos.',
  por:'Pone el foco en el entorno: amigos, compañeros y familia que pueden decir algo a tiempo.'}
],
'otra-oferta':[
 {p:'youtube',id:'JtZyKPGrVUM',t:'Niños y jóvenes reclutados por bandas de crimen organizado: ¿cómo y por qué ocurre?',a:'Buenos días a todos · TVN',y:'2023',dur:'37 min',lang:'En español',
  de:'Conversación con tres expertos sobre cómo las bandas reclutan a niños y jóvenes, cómo darse cuenta de que un niño está en riesgo y cómo prevenirlo.',
  por:'Explica el camino que describe esta historia: no es un salto de un día, es una oferta que llega cuando no hay otra.'},
 {p:'ted',id:'rita_pierson_every_kid_needs_a_champion',t:'Todo niño necesita un campeón',a:'Rita Pierson',lang:'En inglés, con subtítulos en español',
  de:'Una profesora con 40 años de aula explica, con humor, por qué los niños no aprenden de alguien que no los quiere, y qué significa ser el adulto que cree en ellos.',
  por:'Es la otra oferta: un adulto presente que le muestra a un niño que vale más de lo que le ofrece la banda.'},
 {p:'ted',id:'gary_slutkin_let_s_treat_violence_like_a_contagious_disease',t:'Tratemos la violencia como una enfermedad contagiosa',a:'Gary Slutkin',lang:'En inglés, con subtítulos en español',
  de:'Un epidemiólogo que combatió epidemias en África explica por qué la violencia se contagia como una enfermedad y cómo personas del mismo barrio pueden cortar la cadena.',
  por:'Muestra que la prevención funciona mejor cuando la hacen adultos cercanos, con credibilidad en el barrio.'}
],
'incendios':[
 {p:'youtube',id:'akXBZYi78Ww',t:'Casas se salvaron de los incendios: plan de los vecinos ayudó a prevenir la catástrofe',a:'Meganoticias',y:'2024',dur:'3 min',lang:'En español',
  de:'Nota de febrero de 2024 sobre un grupo de casas que se salvó en el megaincendio de la Región de Valparaíso, donde los vecinos se habían preparado.',
  por:'Es la idea de esta historia en un caso real: un barrio que se prepara antes cambia lo que pasa cuando llega el fuego.'},
 {p:'youtube',id:'ihIO0DM_Cwo',t:'Prevención de incendios forestales: «Comunidades Preparadas» y «Escuelas Preparadas»',a:'Conaf',y:'2025',dur:'3 min',lang:'En español',
  de:'Video de Conaf que presenta sus programas «Comunidades Preparadas» y «Escuelas Preparadas», con los que vecinos y colegios se organizan para prevenir incendios.',
  por:'Es la puerta de entrada concreta para tu barrio: así se organiza una comunidad con apoyo de Conaf.'},
 {p:'ted',id:'paul_hessburg_why_wildfires_have_gotten_worse_and_what_we_can_do_about_it',t:'Por qué los incendios forestales han empeorado y qué podemos hacer',a:'Paul Hessburg',lang:'En inglés, con subtítulos en español',
  de:'Un ecólogo forestal explica cómo un siglo de apagar todos los incendios llenó los bosques de combustible, y qué hay que hacer para convivir con el fuego.',
  por:'Explica por qué los incendios son cada vez más grandes y por qué la prevención empieza mucho antes del verano.'}
],
'violencia-escolar':[
 {p:'youtube',id:'fj_RRxtED4Q',t:'Cómo puedes saber si tu hijo sufre bullying',a:'Tiina Mäkelä · AprendemosJuntos',y:'2018',dur:'5 min',lang:'En español',
  de:'La coordinadora del programa finlandés KiVa para España y América Latina explica cómo darse cuenta de que un niño está sufriendo acoso escolar.',
  por:'KiVa es el programa del que habla esta historia, el que pone a los testigos en el centro.'},
 {p:'youtube',id:'KNNjVQMzWEs',t:'KiVa, el programa contra el acoso escolar de Finlandia',a:'Macmillan Education',y:'2017',dur:'2 min',lang:'En español',
  de:'Presentación breve de KiVa, el programa contra el acoso escolar creado por la Universidad de Turku, en Finlandia (video de la editorial que lo distribuye en España).',
  por:'Muestra cómo funciona un programa que trabaja con todo el curso, no solo con el agresor y la víctima.'},
 {p:'ted',id:'monica_lewinsky_the_price_of_shame',t:'El precio de la vergüenza',a:'Monica Lewinsky',lang:'En inglés, con subtítulos en español',
  de:'Monica Lewinsky, que vivió una humillación pública mundial a los 24 años, habla del costo de la vergüenza en internet y de lo que viven quienes la sufren.',
  por:'Hoy el acoso escolar sigue en el celular: esta charla muestra qué le hace a una persona y por qué importa quien mira y no dice nada.'}
],
'soledad-mayores':[
 {p:'vimeo',id:'463068022',t:'Llama a la puerta',a:'Fundación «la Caixa» y Cruz Roja Española',y:'2020',dur:'4 min',lang:'En español',
  de:'Pieza de la Fundación «la Caixa» sobre la soledad oculta de las personas mayores y su programa con Cruz Roja Española, que invita a algo tan simple como acercarse y tocar la puerta.',
  por:'Es justo lo que propone esta historia para las fiestas: una visita o una llamada que rompa la soledad.'},
 {p:'youtube',id:'QMxHLyXhTRs',t:'Fundación Amanoz y el acompañamiento telefónico para personas mayores',a:'CNN Chile',y:'2021',dur:'12 min',lang:'En español',
  de:'Alejandra Valdés, directora de la Fundación Amanoz, explica su programa de acompañamiento telefónico para combatir la soledad de las personas mayores.',
  por:'Es una forma concreta de sumarse en Chile: una conversación regular, por teléfono, con la misma persona.'},
 {p:'ted',id:'susan_pinker_the_secret_to_living_longer_may_be_your_social_life',t:'El secreto para vivir más puede estar en tu vida social',a:'Susan Pinker',lang:'En inglés, con subtítulos en español',
  de:'Una psicóloga visita un pueblo de Cerdeña con muchos centenarios y muestra que el contacto cara a cara está entre lo que más predice una vida larga.',
  por:'Explica por qué la soledad no es solo tristeza: también enferma.'}
],
'reingreso':[
 {p:'ted',id:'victor_rios_help_for_kids_the_education_system_ignores',t:'Ayuda para los chicos que el sistema educativo ignora',a:'Víctor Ríos',lang:'En inglés, con subtítulos en español',
  de:'Un sociólogo que dejó la escuela de joven cuenta qué lo hizo volver —un profesor que lo vio— y propone mirar a los estudiantes por sus fortalezas, no por sus riesgos.',
  por:'Es la idea central de esta historia: un adulto que no se rinde puede pesar más que cualquier programa.'},
 {p:'youtube',id:'fWsaWlzm5Tc',t:'Académica ante deserción escolar: «Estamos pidiendo demasiado a las escuelas»',a:'24 Horas TVN',y:'2022',dur:'13 min',lang:'En español',
  de:'Ruth Arce, de la Universidad Diego Portales, analiza el aumento de la deserción escolar en Chile después de la pandemia, cuando más de 50 mil estudiantes dejaron el colegio.',
  por:'Pone el problema en contexto chileno: quiénes se van, por qué, y por qué la escuela sola no alcanza.'},
 {p:'ted',id:'rita_pierson_every_kid_needs_a_champion',t:'Todo niño necesita un campeón',a:'Rita Pierson',lang:'En inglés, con subtítulos en español',
  de:'Una profesora con 40 años de aula explica, con humor, por qué la relación con un adulto es lo primero para que un niño aprenda.',
  por:'Ayuda a entender por qué un estudiante se queda cuando siente que a alguien le importa que esté.'}
],
'reinsercion':[
 {p:'youtube',id:'XUnkbtBVU3U',t:'¿Cómo es la reinserción carcelaria en Colina 1?',a:'CHV Noticias',y:'2026',dur:'9 min',lang:'En español',
  de:'Reportaje de agosto de 2026 desde el Centro de Educación y Trabajo de Colina 1, con historias de internos que trabajan y estudian antes de salir.',
  por:'Muestra en Chile lo que dice esta historia: el trabajo y los primeros meses afuera son decisivos para no volver.'},
 {p:'ted',id:'shaka_senghor_why_your_worst_deeds_don_t_define_you',t:'Por qué tus peores actos no te definen',a:'Shaka Senghor',lang:'En inglés, con subtítulos en español',
  de:'Shaka Senghor pasó 19 años preso por homicidio. Cuenta cómo cambió y qué necesitó para dejar de ser definido por lo peor que hizo.',
  por:'Es la voz de alguien que hizo el camino de salida del delito.'},
 {p:'ted',id:'bryan_stevenson_we_need_to_talk_about_an_injustice',t:'Tenemos que hablar de una injusticia',a:'Bryan Stevenson',lang:'En inglés, con subtítulos en español',
  de:'Un abogado que defiende a condenados en Estados Unidos explica por qué cada persona es más que lo peor que ha hecho.',
  por:'Ayuda a mirar la reinserción sin prejuicio, que es lo primero para darle a alguien una segunda oportunidad.'}
],
'acogida':[
 {p:'youtube',id:'NQqnRi0y5OA',t:'Las interacciones «servir y devolver» dan forma a la estructura cerebral',a:'Center on the Developing Child, Universidad de Harvard',y:'2016',dur:'2 min',lang:'Con subtítulos en español',
  de:'Video animado de Harvard que explica el «servir y devolver»: cómo las respuestas diarias de un adulto a los gestos de una guagua construyen su cerebro.',
  por:'Explica por qué una familia de acogida, aunque sea temporal, deja algo que dura: cada respuesta cuenta.'},
 {p:'youtube',id:'nxtMY1ypACg',t:'130 Hermanos (tráiler)',a:'Fundación Kumelén',y:'2022',dur:'2 min',lang:'En español',
  de:'Tráiler del documental chileno «130 Hermanos», sobre Melba y Víctor, un matrimonio que en 40 años ha acogido a más de 130 niños y niñas, además de sus seis hijos.',
  por:'Es una familia de acogida chilena de verdad, con las llegadas y las despedidas de las que habla esta historia.'},
 {p:'youtube',id:'6vOk3wzVjlM',t:'Nadie los espera: 600 niños sin familia de acogida',a:'24 Horas Reportajes · TVN',y:'2026',dur:'14 min',lang:'En español',
  de:'Reportaje de mayo de 2026: más de 600 niños de hasta 4 años viven en residencias en Chile porque faltan familias de acogida.',
  por:'Muestra por qué se necesitan más familias como las de esta historia, y qué pasa cuando no las hay.'}
],
'donacion-organos':[
 {p:'youtube',id:'jWWfMKn_Vo0',t:'Trasplantes de órganos: preocupación por la drástica caída de donantes',a:'Reportajes CHV',y:'2025',dur:'13 min',lang:'En español',
  de:'Reportaje de enero de 2025 sobre la caída de la donación de órganos en Chile y lo que significa para las más de 2 mil personas en lista de espera.',
  por:'Explica el problema de esta historia con cifras y caras: la decisión de una familia cambia la vida de otras.'},
 {p:'ted',id:'dan_ariely_are_we_in_control_of_our_own_decisions',t:'¿Controlamos nuestras decisiones?',a:'Dan Ariely',lang:'En inglés, con subtítulos en español',
  de:'El economista conductual Dan Ariely muestra, entre otros ejemplos, cómo la donación de órganos en Europa depende de la opción que viene marcada por defecto.',
  por:'Sirve para entender la ley chilena del donante universal: la opción por defecto ayuda, pero no basta si la familia no sabe qué querías.'},
 {p:'youtube',id:'_DQBoAqtVx0',t:'El modelo español en la donación y el trasplante de órganos',a:'Rafael Matesanz · DONARFEST',y:'2016',dur:'5 min',lang:'En español',
  de:'Rafael Matesanz, fundador de la Organización Nacional de Trasplantes de España, explica cómo funciona la donación en su país y por qué tiene éxito.',
  por:'España es el ejemplo que se cita en esta historia: muestra lo que hace la diferencia en los hospitales y con las familias.'},
 {p:'youtube',id:'63Wi02qF4v8',t:'Cristóbal vive gracias a una familia que optó por donar',a:'Ministerio de Salud',y:'2018',dur:'1 min',lang:'En español',
  de:'La historia de Cristóbal, que vive gracias a que una familia decidió donar los órganos de un ser querido.',
  por:'Resume la acción de esta historia: conversarlo con tu familia antes de que sea necesario.'}
],
'emprendedoras':[
 {p:'ted',id:'esther_duflo_social_experiments_to_fight_poverty',t:'Experimentos sociales para combatir la pobreza',a:'Esther Duflo',lang:'En inglés, con subtítulos en español',
  de:'La economista Esther Duflo, Premio Nobel 2019, explica cómo se prueba con experimentos qué funciona de verdad contra la pobreza, en vez de suponerlo.',
  por:'Su equipo hizo algunos de los estudios sobre microcrédito de los que habla esta historia: qué logra un préstamo y qué no.'},
 {p:'youtube',id:'LX0Y4li_Ryg',t:'Muhammad Yunus: «El sistema es el creador de la pobreza»',a:'France 24 Español',y:'2018',dur:'12 min',lang:'En español',
  de:'Entrevista a Muhammad Yunus, Premio Nobel de la Paz 2006 y creador del Banco Grameen y del microcrédito, sobre la pobreza y el emprendimiento como salida.',
  por:'Es la voz de quien inventó el microcrédito; la historia cuenta lo que se aprendió después sobre sus límites.'},
 {p:'ted',id:'jessica_jackley_poverty_money_and_love',t:'Pobreza, dinero y amor',a:'Jessica Jackley',lang:'En inglés, con subtítulos en español',
  de:'La cofundadora de Kiva, una plataforma de préstamos entre personas a pequeños emprendedores, cuenta lo que aprendió conociendo a quienes recibían esos préstamos.',
  por:'Muestra el lado humano: detrás de cada emprendimiento hay una persona que necesita más que plata para crecer.'}
],
'lectura':[
 {p:'youtube',id:'NggUbMZWnIc',t:'5 pasos para construir el cerebro: servir y devolver',a:'Center on the Developing Child, Universidad de Harvard',y:'2019',dur:'7 min',lang:'En español',
  de:'Guía práctica de Harvard: cinco pasos simples del «servir y devolver», con adultos y niños pequeños haciéndolos juntos.',
  por:'Leer un cuento en voz alta es servir y devolver: este video muestra cómo hacerlo bien.'},
 {p:'ted',id:'patricia_kuhl_the_linguistic_genius_of_babies',t:'El genio lingüístico de los bebés',a:'Patricia Kuhl',lang:'En inglés, con subtítulos en español',
  de:'La neurocientífica Patricia Kuhl muestra cómo aprenden a hablar los bebés y por qué necesitan a una persona real, no una pantalla.',
  por:'Explica por qué la voz de un adulto que lee es tan importante en los primeros años.'},
 {p:'youtube',id:'Dg5VXhpkouQ',t:'Cómo la lectura expande la mente de los niños',a:'Marieliza Reyes · TEDxUFM',y:'2018',dur:'4 min',lang:'En español',
  de:'Marieliza, una niña de Baja Verapaz, Guatemala, cuenta cómo le cambió la vida cuando empezó a leer.',
  por:'Es el resultado de esta historia contado por una niña: lo que se abre cuando alguien te pone un libro en las manos.'}
],
'desempleo':[
 {p:'youtube',id:'mdsSbchg4Ig',t:'Mark Granovetter: nuevos empleos a través de vínculos débiles',a:'Fundación BBVA',y:'2022',dur:'7 min',lang:'En inglés',
  de:'El sociólogo Mark Granovetter explica su teoría de los «lazos débiles»: por qué los conocidos más lejanos suelen ser los que nos traen una oportunidad de trabajo.',
  por:'Es la investigación central de esta historia: quien pierde el trabajo necesita, sobre todo, red.'},
 {p:'youtube',id:'Z9JVqDGgIBo',t:'El drama del «desempleo ilustrado»',a:'CHV Noticias',y:'2026',dur:'10 min',lang:'En español',
  de:'Reportaje de agosto de 2026 sobre jóvenes con título que no encuentran trabajo en Chile, cuando el desempleo de profesionales llegó a 8,3%.',
  por:'Muestra la cara chilena del desempleo y todo lo que pesa además del sueldo.'},
 {p:'ted',id:'kio_stark_why_you_should_talk_to_strangers',t:'Por qué deberías hablar con desconocidos',a:'Kio Stark',lang:'En inglés, con subtítulos en español',
  de:'La escritora Kio Stark defiende las conversaciones breves con desconocidos: nos conectan con la ciudad y con otras personas.',
  por:'Ayuda a ver el valor de los contactos casuales, que muchas veces son los que abren una puerta de trabajo.'}
],
'cancer-infantil':[
 {p:'youtube',id:'sVjKGV3HnNo',t:'Casa Familia',a:'Fundación Casa Familia',y:'2018',dur:'3 min',lang:'En español',
  de:'Video de la Fundación Casa Familia, que desde 2001 recibe a niños con cáncer de regiones y a un apoderado mientras dura su tratamiento en el Hospital Luis Calvo Mackenna: hogar, comida y contención.',
  por:'Es la fundación de esta historia, contada por ella misma.'},
 {p:'youtube',id:'f5s5qsrapas',t:'Casa Familia: más de 25 años apoyando a niños con cáncer',a:'Teletrece',y:'2026',dur:'7 min',lang:'En español',
  de:'Nota de mayo de 2026 sobre los más de 25 años de Casa Familia acompañando a niños con cáncer y a sus familias.',
  por:'Muestra cómo se ve hoy su trabajo.'},
 {p:'youtube',id:'nfL0T4MTrhU',t:'Faltan especialistas y centros: tratarse un cáncer en regiones',a:'24 Horas TVN',y:'2024',dur:'5 min',lang:'En español',
  de:'Reportaje sobre lo difícil que es tratar un cáncer viviendo en regiones: faltan especialistas y centros, y muchos pacientes deben viajar.',
  por:'Explica por qué tantos niños y sus familias tienen que dejar su casa durante meses.'}
],
'pobreza':[
 {p:'youtube',id:'xhnoI7N2dGc',t:'La pobreza camuflada',a:'Reportajes 24 · TVN',y:'2019',dur:'13 min',lang:'En español',
  de:'Reportaje sobre las dos caras de Viña del Mar y la pobreza multidimensional, que mira más allá del ingreso: salud, vivienda, trabajo y redes.',
  por:'Es la idea de esta historia: dos personas con el mismo ingreso pueden vivir vidas muy distintas según dónde viven.'},
 {p:'ted',id:'esther_duflo_social_experiments_to_fight_poverty',t:'Experimentos sociales para combatir la pobreza',a:'Esther Duflo',lang:'En inglés, con subtítulos en español',
  de:'La economista Esther Duflo, Premio Nobel 2019, explica cómo se prueba con experimentos qué funciona de verdad contra la pobreza.',
  por:'Muestra por qué hay que medir qué ayuda a las familias, en vez de suponerlo.'},
 {p:'ted',id:'jacqueline_novogratz_a_third_way_to_think_about_aid',t:'Una tercera forma de pensar la ayuda',a:'Jacqueline Novogratz',lang:'En inglés, con subtítulos en español',
  de:'La fundadora de Acumen propone una forma de ayudar que trabaja con las comunidades, en lugar de solo entregarles cosas.',
  por:'Va con el final de esta historia: las comunidades que se organizan son parte de la solución.'}
],
'redes':[
 {p:'ted',id:'sherry_turkle_connected_but_alone',t:'¿Conectados, pero solos?',a:'Sherry Turkle',lang:'En inglés, con subtítulos en español',
  de:'La psicóloga del MIT Sherry Turkle explica cómo los celulares cambian la forma en que conversamos, y por qué estar siempre conectados puede dejarnos más solos.',
  por:'Ayuda a pensar en las conversaciones que un niño necesita y que las pantallas no reemplazan.'},
 {p:'youtube',id:'MbO8678J8l4',t:'«Tu atención es lo más valioso que tienes»',a:'Jonathan Haidt · AprendemosJuntos',y:'2026',dur:'4 min',lang:'En inglés, con subtítulos en español',
  de:'Jonathan Haidt, autor de «La generación ansiosa», explica cómo las aplicaciones y los celulares compiten por nuestra atención y qué le hace eso a la concentración.',
  por:'Haidt es el autor detrás de la discusión sobre prohibir las redes antes de los 14 años. La entrevista completa, de una hora, está en el mismo canal.'}
],
'residencias':[
 {p:'ted',id:'georgette_mulheir_the_tragedy_of_orphanages',t:'La tragedia de los orfanatos',a:'Georgette Mulheir',lang:'En inglés, con subtítulos en español',
  de:'Georgette Mulheir, que ha trabajado décadas cerrando orfanatos, explica por qué las instituciones dañan a los niños aunque tengan buenas intenciones, y cómo se reemplazan por familias.',
  por:'Es el argumento central de esta historia: techo, comida y cuidados no bastan.'},
 {p:'youtube',id:'4yV0EN_sgnI',t:'En breve: el impacto de la adversidad durante la infancia',a:'Center on the Developing Child, Universidad de Harvard',y:'2011',dur:'4 min',lang:'En español',
  de:'Video de Harvard que explica cómo las experiencias difíciles en la primera infancia, como la negligencia o el estrés constante, afectan el desarrollo de un niño.',
  por:'Explica qué le pasa a un niño que crece sin un adulto que sea suyo, que es lo que ocurre en una residencia.'},
 {p:'youtube',id:'ptZ-L3uAXXA',t:'Los niños abandonados de Rumania',a:'Charles Nelson · The Brainwaves Video Anthology',y:'2016',dur:'5 min',lang:'En inglés',
  de:'El investigador de Harvard Charles Nelson resume lo que encontró al estudiar a los niños que crecían en orfanatos de Rumania.',
  por:'Su estudio de Bucarest es la evidencia más fuerte de que una familia de acogida cambia el desarrollo de un niño.'}
],
'sala-cuna':[
 {p:'youtube',id:'TQIIE8DzV8Q',t:'Por qué es importante la inversión en la temprana edad',a:'The Heckman Equation',y:'2013',dur:'2 min',lang:'En español',
  de:'Video sobre el trabajo del economista James Heckman, Premio Nobel, que explica por qué invertir en los primeros años de vida es lo que más rinde para una persona y para un país.',
  por:'Muestra que una buena sala cuna no es solo un apoyo para que la madre trabaje: también es inversión en el niño.'},
 {p:'ted',id:'anne_marie_slaughter_can_we_all_have_it_all',t:'¿Podemos tenerlo todo?',a:'Anne-Marie Slaughter',lang:'En inglés, con subtítulos en español',
  de:'Anne-Marie Slaughter, que dejó un alto cargo en el gobierno de Estados Unidos para estar con sus hijos, plantea por qué el cuidado no debería recaer solo en las mujeres.',
  por:'Es la pregunta de fondo de esta historia: por qué tener un hijo le cambia la vida laboral a la madre y casi nada al padre.'},
 {p:'ted',id:'molly_wright_how_every_child_can_thrive_by_five',t:'Cómo todo niño puede prosperar antes de los cinco años',a:'Molly Wright',lang:'En inglés, con subtítulos en español',
  de:'Molly Wright, de siete años, muestra con un papá y su guagua cinco formas simples de construir el cerebro de un niño en el juego de todos los días.',
  por:'Muestra lo que pasa en los primeros años, cuando la red que ayuda a criar hace toda la diferencia.'}
]
};
