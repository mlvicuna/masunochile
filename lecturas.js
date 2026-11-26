/* Más Uno · reseñas de las lecturas de cada historia («Para leer»).
   Cada lectura (libro, estudio, reportaje, guía, sitio…) lleva siempre una reseña: qué es y por qué está en esta historia, en 1 o 2 frases.
   k = el título tal como sale del .docx (contenido.js), para encontrarla; t y a corrigen título y autor si el .docx los trae cambiados.
   La mantiene la tarea diaria (paso 9). Ver INSTRUCCIONES.md. */
window.MU_LECTURAS={
'inclusion-escolar':[
 {k:'La razón por la que salto',u:'https://openlibrary.org/works/OL17513079W',r:'Naoki Higashida escribió este libro a los 13 años, respondiendo una por una las preguntas que la gente se hace sobre el autismo. Ayuda a entender desde adentro a un compañero de curso que se comporta distinto.'},
 {k:'Una tribu propia',u:'https://openlibrary.org/works/OL17203015W',a:'Steve Silberman',r:'La historia del autismo contada como un reportaje: de las «madres nevera» a la idea de neurodiversidad. Explica cómo se llegó a mirar el autismo como lo hace esta historia.'},
 {k:'Making the connection',u:'https://doi.org/10.1111/j.1469-7610.2011.02493.x',r:'Experimento con niños autistas en cursos regulares: los que recibieron apoyo a través de sus compañeros mejoraron más su vida social que los que solo trabajaron con un especialista. Es la base de la idea de que la inclusión depende también del curso.'},
 {k:'A Summary of the Evidence on Inclusive Education',u:'https://alana.org.br/wp-content/uploads/2016/12/A_Summary_of_the_evidence_on_inclusive_education.pdf',r:'Revisión de 280 estudios de 25 países sobre la inclusión escolar. Concluye que estudiar en el curso común beneficia a los alumnos con discapacidad y no perjudica a sus compañeros.'},
 {k:'Ley 21.545 (Ley TEA)',u:'https://www.bcn.cl/leychile/navegar?idNorma=1190123',a:'Biblioteca del Congreso Nacional',r:'El texto completo de la ley chilena que reconoce los derechos de las personas autistas, también en la escuela. Sirve para saber qué se le puede pedir hoy a un colegio.'},
 {k:'La difícil realidad escolar de las niñas y niños neurodivergentes',u:'https://www.latercera.com/lt-board/noticia/la-dificil-realidad-escolar-de-las-ninas-y-ninos-neurodivergentes/PSGB73U7PRA73J5PFSD4BZYXUM/',r:'Reportaje con testimonios de familias y especialistas chilenos sobre lo que viven estos niños en el colegio. Es la versión chilena del problema que cuenta esta historia.'}
],
'areas-verdes':[
 {k:'La mente bien ajardinada',u:'https://openlibrary.org/works/OL20904540W',r:'Una psiquiatra británica cuenta, con casos y ciencia, cómo trabajar la tierra ayuda a sanar la mente. Profundiza en por qué el contacto con lo verde nos hace bien.'},
 {k:'The Nature Fix',u:'https://openlibrary.org/works/OL20179008W',a:'Florence Williams',r:'Una periodista recorre los laboratorios que estudian qué le pasa al cerebro en la naturaleza, de Japón a Escocia. Cuenta en lenguaje simple los estudios que cita esta historia.'},
 {k:'Urban street tree biodiversity and antidepressant prescriptions',u:'https://doi.org/10.1038/s41598-020-79924-5',r:'El estudio de Leipzig: quienes vivían con más árboles en su calle recibían menos recetas de antidepresivos. Muestra que unos pocos árboles cerca de la casa ya hacen diferencia.'},
 {k:'Spending at least 120 minutes a week in nature',u:'https://doi.org/10.1038/s41598-019-44097-3',r:'Estudio con 20 mil personas en Inglaterra: quienes pasaban al menos dos horas a la semana en la naturaleza decían tener mejor salud y bienestar. De ahí sale la «dosis» de verde que se menciona.'},
 {k:'Nature experience reduces rumination',u:'https://doi.org/10.1073/pnas.1510459112',r:'Experimento de Stanford: una caminata de 90 minutos por un lugar con árboles redujo los pensamientos negativos repetitivos; la misma caminata junto a una autopista, no.'},
 {k:'Medir y aumentar las áreas verdes para el desarrollo sustentable',u:'https://www.infraestructurapublica.cl/medir-y-aumentar-las-areas-verdes-para-el-desarrollo-sustentable/',r:'Columna de un investigador de CEDEUS sobre cuánta área verde tiene cada comuna en Chile y por qué la diferencia es tan grande. Es el dato chileno detrás de esta historia.'},
 {k:'La Esperanza de Mirasol',u:'https://www.eldinamo.cl/innovacion/2015/10/16/la-esperanza-de-mirasol-el-humilde-barrio-que-paso-de-la-desorganizacion-a-lograr-la-construccion-de-areas-verdes-2/',r:'Reportaje sobre un barrio de Puerto Montt que recuperó su plaza entre vecinos. Muestra lo que se puede hacer cuando la comunidad se organiza.'}
],
'calor-mayores':[
 {k:'Heat Wave: A Social Autopsy of Disaster in Chicago',u:'https://openlibrary.org/works/OL17735369W',r:'La investigación de Eric Klinenberg sobre la ola de calor de 1995 en Chicago, donde murieron más de 700 personas. Muestra que lo que salvó vidas fue tener vecinos y redes cerca.'},
 {k:'Palacios del pueblo',u:'https://openlibrary.org/works/OL19753504W',a:'Eric Klinenberg',r:'El mismo autor explica cómo bibliotecas, plazas y lugares de encuentro sostienen a una comunidad en las crisis. Es la idea de «infraestructura social» que usa esta historia.'},
 {k:'Dying Alone in the Heat Wave',r:'Entrevista a Klinenberg (en inglés) sobre por qué tantas personas mayores murieron solas en sus departamentos. Un buen resumen del libro para quien tiene poco tiempo.'},
 {k:'muertes en exceso por las olas de calor de 2017 y 2019 en Chile',t:'Muertes en exceso por las olas de calor de 2017 y 2019 en Chile',r:'Estudio de la UC que calculó cuántas muertes se atribuyen al calor en Chile. Muestra que el problema también es nuestro.'},
 {k:'Hogares unipersonales en Chile, Casen 2024',r:'Los datos oficiales de cuántas personas viven solas en Chile y quiénes son. Explica por qué hay tantas personas mayores sin nadie que se dé cuenta a tiempo.'},
 {k:'Calor y salud',r:'La ficha de la Organización Mundial de la Salud sobre cómo afecta el calor al cuerpo y quiénes corren más riesgo. Útil para reconocer las señales de alerta.'}
],
'orientacion-jovenes':[
 {k:'El Elemento',u:'https://openlibrary.org/works/OL7818210W',r:'Ken Robinson reúne historias de personas que encontraron lo que les apasiona, casi siempre con alguien que les ayudó a verlo. Es lo que puede hacer un adulto al contarle a un joven cómo es su trabajo.'},
 {k:'The Years That Matter Most',u:'https://openlibrary.org/works/OL20128060W',r:'Paul Tough sigue a estudiantes que son los primeros de su familia en llegar a la universidad (en inglés). Muestra cuánto pesa no tener a quién preguntarle.'},
 {k:'Social capital I: measurement and associations with economic mobility',r:'El estudio de Raj Chetty con 21 mil millones de amistades en Facebook: los niños de familias pobres que tienen amigos de otros niveles socioeconómicos llegan más lejos. Es la evidencia de que conocer a alguien distinto abre caminos.'},
 {k:'MENTOR',r:'La red estadounidense que reúne lo que se sabe sobre mentorías para jóvenes y cómo hacerlas bien (en inglés). Sirve si quieres ser mentor con buena base.'},
 {k:'Fundación Portas lanza su Colecta Digital 2025',r:'Nota con la historia de Maximiliano Díaz, estudiante acompañado por la Fundación Portas. Es un ejemplo chileno de lo que cambia cuando un joven tiene a alguien que lo oriente.'}
],
'violencia-mujer':[
 {k:'Trauma y recuperación',u:'https://openlibrary.org/works/OL2652815W',r:'El libro clásico de la psiquiatra Judith Herman sobre cómo el trauma aísla y cómo se sale: con otros, no sola. Explica por qué el acompañamiento es tan importante.'},
 {k:'La guerra contra las mujeres',u:'https://openlibrary.org/works/OL17722794W',r:'Ensayo de la antropóloga Rita Segato sobre las formas que toma hoy la violencia contra las mujeres. Ayuda a entender que no son casos aislados.'},
 {k:'Coercive Control',u:'https://openlibrary.org/works/OL2982769W',r:'El libro de Evan Stark que dio nombre al «control coercitivo»: violencia hecha de vigilancia, aislamiento y miedo, aunque no haya golpes (en inglés). Explica por qué cuesta tanto nombrarla.'},
 {k:'Violence Against Women Prevalence Estimates 2018',r:'Las cifras mundiales de la OMS: cerca de una de cada tres mujeres ha vivido violencia física o sexual. Da la dimensión del problema.'},
 {k:'Findings from the SASA! Study',r:'Estudio en Uganda sobre un programa que movilizó a toda la comunidad, no solo a las víctimas, y redujo la violencia en la pareja. Muestra que el entorno puede cambiar las cosas.'},
 {k:'Risk factors for femicide in abusive relationships',r:'El estudio de Jacquelyn Campbell sobre las señales que anteceden a un femicidio, como las amenazas o el momento de la separación. Explica por qué salir es el momento más riesgoso.'},
 {k:'La rueda de poder y control',r:'La herramienta de Duluth que muestra en un dibujo las formas de la violencia en la pareja, más allá de los golpes. Sirve para ayudar a una amiga a ponerle nombre a lo que vive.'},
 {k:'entrevista a Consuelo Hermosilla, Fundación Antonia',t:'Entrevista a Consuelo Hermosilla, Fundación Antonia',r:'Consuelo Hermosilla, madre de Antonia Garros, joven que murió en 2017 después de vivir violencia en el pololeo, cuenta por qué creó la fundación. Es la historia chilena detrás de la prevención en jóvenes.'}
],
'otra-oferta':[
 {k:'Tatuajes en el corazón',u:'https://openlibrary.org/works/OL13850862W',r:'El sacerdote Gregory Boyle cuenta cómo el trabajo y el cariño sacaron a cientos de jóvenes de las pandillas en Los Ángeles. Es la otra oferta, hecha libro.'},
 {k:'Cómo triunfan los niños',u:'https://openlibrary.org/works/OL16664450W',r:'Paul Tough explica por qué la perseverancia, el carácter y los adultos cercanos pesan tanto como las notas. Ayuda a entender qué protege a un niño en riesgo.'},
 {k:'Overcoming the Odds',u:'https://openlibrary.org/works/OL2748885W',r:'El estudio de Kauai siguió durante décadas a niños que crecieron en la adversidad (en inglés). Los que salieron adelante casi siempre tuvieron al menos un adulto que creyó en ellos.'},
 {k:'Informe del proyecto Vidas Reclutables, etapa 1',r:'Investigación de la UC sobre cómo se recluta a niños y jóvenes para el delito en Chile. Es la base chilena de esta historia.'},
 {k:'Thinking, Fast and Slow? Some Field Experiments to Reduce Crime and Dropout in Chicago',r:'Experimento en Chicago con un programa que enseñaba a jóvenes a detenerse antes de reaccionar: redujo los arrestos por violencia. Muestra que la prevención funciona.'},
 {k:'Crimen organizado y derechos de la niñez',r:'Documento de la Defensoría de la Niñez sobre cómo el crimen organizado afecta a niños y adolescentes en Chile. Da contexto y cifras oficiales.'},
 {k:'Nos activamos por un club de fútbol de Viña del Mar',r:'Nota de Canal 13 sobre un club de barrio que recibe a niños. Es un ejemplo concreto de la otra oferta: un lugar y un adulto que esperan.'}
],
'incendios':[
 {k:'Manual comunitario y metodología Comunidades Preparadas',r:'La guía de Conaf para que un barrio se organice: mapa de riesgos, limpieza de bordes y plan de evacuación. Es la herramienta práctica para hacer lo que propone esta historia.'},
 {k:'Chile se prepara: hogar',r:'Díptico del Minvu con lo que hay que hacer en la casa y el patio antes de la temporada de incendios. Una lista corta para empezar hoy.'},
 {k:'Fire Weather',u:'https://openlibrary.org/works/OL28867302W',r:'John Vaillant reconstruye el incendio de Fort McMurray, en Canadá, y explica cómo el clima cambió el comportamiento del fuego Ayuda a entender por qué los incendios son cada vez más grandes.'},
 {k:'Preventing disaster: home ignitability in the wildland-urban interface',u:'https://doi.org/10.1093/jof/98.3.15',r:'El estudio de Jack Cohen que mostró que la mayoría de las casas no se queman por el frente de fuego, sino por brasas que caen en lo que hay alrededor. Es la idea central de esta historia.'},
 {k:'MapBiomas Fuego Chile, mapas de la superficie quemada desde 2013',r:'Mapas interactivos de todo lo que se ha quemado en Chile año a año. Sirve para ver cuánto fuego ha habido cerca de tu barrio.'},
 {k:'El milagro de Botania',r:'Cómo los vecinos de un barrio de Viña del Mar salvaron sus casas en el incendio de 2024, porque se habían preparado. Es la historia real detrás de esta.'}
],
'violencia-escolar':[
 {k:'Dan Olweus',u:'https://openlibrary.org/works/OL13639315W',t:'Conductas de acoso y amenaza entre escolares',a:'Dan Olweus',r:'El texto clásico del investigador noruego que empezó el estudio del acoso escolar, con su programa de prevención. Es el origen de lo que se sabe hoy.'},
 {k:'R. J. Palacio',u:'https://openlibrary.org/works/OL16142094W',t:'La lección de August (Wonder)',a:'R. J. Palacio',r:'Novela sobre un niño con una cara distinta que entra al colegio, y sobre los compañeros que eligen ser amables. Ideal para leer en familia y conversar sobre el papel de los testigos.'},
 {k:'Ttofi y Farrington',u:'https://doi.org/10.1007/s11292-010-9109-1',t:'Effectiveness of school-based programs to reduce bullying',a:'Ttofi y Farrington',r:'La revisión más citada sobre qué programas contra el acoso funcionan. Encontró que los mejores trabajan con todo el colegio, incluidos padres y testigos.'},
 {k:'cómo funciona el programa finlandés centrado en los testigos',t:'Programa KiVa',a:'Universidad de Turku',r:'El sitio del programa finlandés KiVa, que pone a los compañeros que miran en el centro de la prevención. Explica cómo funciona en un colegio.'}
],
'soledad-mayores':[
 {k:'Holt-Lunstad',t:'Social Relationships and Mortality Risk',a:'Holt-Lunstad, Smith y Layton',r:'Metaanálisis de 148 estudios: las personas con relaciones sociales fuertes tienen 50% más probabilidades de seguir vivas en el tiempo estudiado. Es la base de la idea de que la soledad enferma.'},
 {k:'Observatorio del Envejecimiento UC-Confuturo',u:'https://observatorioenvejecimiento.uc.cl/wp-content/uploads/2025/05/Reporte-ODE-37-Soledad-no-Deseada-y-Aislamiento-Social-en-la-Vejez-Prevalencia-Factores-de-Riesgo-y-Estrategias-de-Accion.pdf',t:'Soledad no deseada y aislamiento social en la vejez',a:'Observatorio del Envejecimiento UC-Confuturo',r:'El reporte con las cifras chilenas: casi la mitad de las personas mayores dice sentirse sola. Muestra el tamaño del problema en Chile.'},
 {k:'Comisión sobre Conexión Social de la OMS (2025)',r:'La comisión de la Organización Mundial de la Salud que declaró la soledad un problema de salud pública. Reúne datos y recomendaciones.'},
 {k:'John T. Cacioppo y William Patrick',u:'https://openlibrary.org/works/OL17658231W',t:'Loneliness: Human Nature and the Need for Social Connection',a:'John T. Cacioppo y William Patrick',r:'El neurocientífico que más estudió la soledad explica por qué es una señal biológica, como el hambre, y qué le hace al cuerpo cuando se vuelve crónica.'},
 {k:'Robert Waldinger y Marc Schulz',u:'https://openlibrary.org/works/OL43137740W',t:'Una buena vida',a:'Robert Waldinger y Marc Schulz',r:'Los directores del estudio de Harvard cuentan lo que aprendieron en más de 80 años siguiendo vidas: las relaciones son lo que más protege la salud y la felicidad.'}
],
'reingreso':[
 {k:'Check & Connect, Universidad de Minnesota. Cómo funciona el acompañamiento escolar con evidencia',t:'Check & Connect',a:'Universidad de Minnesota',r:'El programa en que un mentor acompaña durante años a un estudiante en riesgo de dejar el colegio. Es el modelo de «un adulto que no se rinde» del que habla esta historia.'},
 {k:'What Works Clearinghouse sobre Check & Connect',r:'La evaluación oficial del Departamento de Educación de Estados Unidos sobre Check & Connect. Muestra qué efectos tuvo en que los estudiantes siguieran en la escuela.'},
 {k:'Josefina Araos, «Entre consumir y pertenecer», La Tercera, 2026',t:'Entre consumir y pertenecer',a:'Josefina Araos, La Tercera, 2026',r:'Columna sobre la necesidad de pertenecer y lo que buscan los jóvenes cuando no la encuentran en la escuela. Da el contexto chileno de esta historia.'},
 {k:'Paul Tough',u:'https://openlibrary.org/works/OL16664450W',t:'Cómo triunfan los niños',a:'Paul Tough',r:'Por qué la perseverancia, el carácter y los adultos que acompañan pesan tanto como las notas. Ayuda a entender qué hace que un estudiante se quede.'},
 {k:'Russell W. Rumberger',u:'https://openlibrary.org/works/OL15936765W',t:'Dropping Out',a:'Russell W. Rumberger',r:'El investigador que más ha estudiado la deserción explica por qué los estudiantes dejan la escuela y qué se puede hacer (en inglés). Muestra que es un proceso largo, no una decisión de un día.'}
],
'reinsercion':[
 {k:'Christopher Uggen',t:'Work as a Turning Point in the Life Course of Criminals',a:'Christopher Uggen',r:'Estudio que mostró que un trabajo después de la cárcel reduce la reincidencia, sobre todo en personas mayores de 26 años. Es la evidencia de por qué el empleo es clave.'},
 {k:'Paola Ramírez Arratia',u:'https://www.latercera.com/paula/paola-ramirez-arratia-ex-privada-de-libertad-tenemos-derecho-al-olvido-ya-pagamos-por-nuestros-delitos/',r:'Entrevista en revista Paula a la fundadora del colectivo Mujeres Libres Chile, que apoya a quienes salen de la cárcel. Es una historia chilena de segunda oportunidad.'},
 {k:'Shadd Maruna',u:'https://openlibrary.org/works/OL8102036W',t:'Making Good: How Ex-Convicts Reform and Rebuild Their Lives',a:'Shadd Maruna',r:'Estudio sobre cómo se cuentan su propia historia quienes dejan el delito. Muestra que necesitan que alguien vea en ellos a una persona distinta.'},
 {k:'John Laub y Robert Sampson',u:'https://openlibrary.org/works/OL5593856W',t:'Shared Beginnings, Divergent Lives',a:'John Laub y Robert Sampson',r:'Siguieron a 500 jóvenes infractores hasta los 70 años. Un trabajo estable y un matrimonio fueron los grandes puntos de quiebre para dejar el delito.'},
 {k:'Bryan Stevenson',u:'https://openlibrary.org/works/OL17231441W',t:'Just Mercy (Buscando justicia)',a:'Bryan Stevenson',r:'Las memorias del abogado que defiende a condenados en Estados Unidos, llevadas al cine en 2019. Una mirada humana sobre las personas que están presas.'}
],
'acogida':[
 {k:'Attachment and Biobehavioral Catch-up',r:'El programa de Mary Dozier que enseña a familias de acogida a responder a las guaguas que llegan heridas, con buena evidencia (en inglés). Muestra que acoger se aprende.'},
 {k:'La investigación de Mary Dozier',r:'Reportaje sobre cómo nació el trabajo de Dozier con bebés en familias de acogida (en inglés). Explica qué le pasa a una guagua cuando cambia de casa.'},
 {k:'Una base segura',u:'https://openlibrary.org/works/OL773848W',r:'Las conferencias en que John Bowlby, creador de la teoría del apego, explica el vínculo y la separación para padres y profesionales. Es el fondo de esta historia.'},
 {k:'Romania\'s Abandoned Children',u:'https://openlibrary.org/works/OL21060934W',r:'El estudio de Bucarest contado por sus autores: niños que salieron de orfanatos a familias de acogida se desarrollaron mucho mejor que los que se quedaron. La evidencia más fuerte a favor de acoger.'},
 {k:'Madres de acogida con récord en cuidado',r:'Reportaje de la revista Sábado de El Mercurio (21 de noviembre de 2026) sobre madres de acogida chilenas que han cuidado a muchos niños. Es la historia humana detrás de esta. Solo en la edición impresa.'}
],
'donacion-organos':[
 {k:'Reparar a los vivos',u:'https://openlibrary.org/works/OL18203059W',r:'Novela sobre las 24 horas entre la muerte de un joven y el trasplante de su corazón, contada desde la familia, los médicos y quien lo recibe. Pone en carne la conversación de esta historia.'},
 {k:'Un pequeño empujón',u:'https://openlibrary.org/works/OL3936258W',r:'El libro de Thaler (Premio Nobel) y Sunstein sobre cómo el diseño de las opciones cambia nuestras decisiones, con un capítulo sobre donación de órganos. Explica la lógica del donante por defecto.'},
 {k:'Organización Nacional de Trasplantes de España',r:'El sitio de la organización española, líder mundial en donación, con sus datos y su modelo. Sirve para comparar con Chile.'},
 {k:'La historia de Camila Delpiano',r:'La historia de una joven chilena que vive gracias a un trasplante. Muestra lo que significa para una persona que una familia diga que sí.'}
],
'emprendedoras':[
 {k:'El banquero de los pobres',u:'https://openlibrary.org/works/OL1079359W',r:'Muhammad Yunus cuenta cómo creó el Grameen Bank y los microcréditos para mujeres pobres en Bangladesh. Es el comienzo de la historia que cuenta esta página.'},
 {k:'Repensar la pobreza',u:'https://openlibrary.org/works/OL15743097W',r:'Banerjee y Duflo, Premios Nobel, explican qué funciona contra la pobreza; un capítulo trata de los «empresarios reacios» que emprenden por necesidad. Explica por qué un préstamo no basta para crecer.'},
 {k:'Six Randomized Evaluations of Microcredit',r:'Seis experimentos en distintos países que midieron el efecto real del microcrédito: ayuda, pero rara vez transforma un negocio. Es la evidencia central de esta historia.'},
 {k:'Global Entrepreneurship Monitor Chile 2025',r:'El informe que mide cuánto se emprende en Chile, y cuántos negocios logran consolidarse, separado por hombres y mujeres. Da las cifras chilenas.'},
 {k:'VIII Encuesta de Microemprendimiento',r:'La encuesta del INE sobre quiénes son los microemprendedores en Chile, cuánto ganan y cuántos son informales. Muestra cómo es emprender de verdad.'}
],
'lectura':[
 {k:'Leer como por arte de magia',u:'https://openlibrary.org/works/OL650974W',r:'Una autora de libros infantiles explica, para familias, por qué leer en voz alta cambia la vida de un niño y cómo hacerlo bien. El complemento práctico de esta historia.'},
 {k:'Treinta millones de palabras',u:'https://openlibrary.org/works/OL20006758W',a:'Dana Suskind',r:'Una cirujana de implantes cocleares cuenta cómo descubrió que las palabras que un niño escucha en casa deciden cuánto aprende después. Explica el mecanismo detrás de leer en voz alta.'},
 {k:'Meaningful Differences in the Everyday Experience of Young American Children',u:'https://openlibrary.org/works/OL14850622W',r:'El estudio original de Hart y Risley, que grabó durante años a 42 familias y encontró grandes diferencias en cuántas palabras escuchaban los niños (en inglés). De ahí viene la idea de la «brecha de palabras».'},
 {k:'Home Reading Environment and Brain Activation in Preschool Children Listening to Stories',r:'Estudio con resonancia magnética: los niños a los que más se les lee en casa activan más las zonas del cerebro que imaginan lo que escuchan. Es la prueba en el cerebro.'},
 {k:'Literacy Promotion',r:'La recomendación de la Academia Americana de Pediatría de leerles a los niños desde que nacen. Muestra que no es solo un hábito bonito: es una indicación de salud.'},
 {k:'Leer en voz alta a los niños y niñas de Chile',r:'Columna en CIPER sobre la importancia de leerles a los niños en Chile y lo que falta para que pase en más casas. Es el contexto chileno.'}
],
'desempleo':[
 {k:'Los parados de Marienthal',u:'https://openlibrary.org/works/OL37439825W',r:'El estudio clásico de 1933 sobre un pueblo austriaco que se quedó sin trabajo: la gente perdió la noción del tiempo, el ánimo y la vida en común. Muestra todo lo que el trabajo da además del sueldo.'},
 {k:'Flawed System/Flawed Self',u:'https://openlibrary.org/works/OL19708283W',r:'Ofer Sharone compara cómo viven la búsqueda de empleo los desempleados en distintos países y por qué en algunos tienden a culparse (en inglés). Explica el peso emocional de buscar trabajo.'},
 {k:'The Strength of Weak Ties',r:'El artículo de Mark Granovetter de 1973: la mayoría de las personas encontró trabajo por conocidos lejanos, no por amigos íntimos. Es la base de la acción que propone esta historia.'},
 {k:'A causal test of the strength of weak ties',r:'Experimento en LinkedIn con 20 millones de personas que confirmó, 50 años después, la teoría de Granovetter: los lazos moderadamente débiles son los que más ayudan a cambiar de trabajo.'},
 {k:'Unemployment impairs mental health',r:'Metaanálisis de más de 300 estudios: el desempleo empeora la salud mental, y la mejora vuelve al encontrar trabajo. Muestra que no es solo un problema de plata.'},
 {k:'La reinvención de los extrabajadores de Huachipato',r:'Reportaje sobre lo que vivieron los trabajadores de la siderúrgica Huachipato después del cierre. Es la cara chilena de esta historia.'}
],
'pobreza':[
 {k:'Repensar la pobreza',u:'https://openlibrary.org/works/OL15743097W',r:'Banerjee y Duflo, Premios Nobel, explican con experimentos cómo viven y deciden las familias pobres y qué ayuda de verdad. Un libro claro para entender la pobreza más allá de los promedios.'},
 {k:'Desarrollo y libertad',u:'https://openlibrary.org/works/OL116534W',r:'Amartya Sen, Premio Nobel, propone medir la pobreza por lo que una persona puede hacer y ser, no solo por su ingreso. Es la idea que está detrás de la pobreza multidimensional.'},
 {k:'El gobierno de los bienes comunes',u:'https://www.cambridge.org/core/books/governing-the-commons/A8BB63BC4A1433A50A3FB92EDBBB97D5',r:'Elinor Ostrom, Premio Nobel, muestra cómo comunidades de todo el mundo se organizan para cuidar lo que comparten. Explica por qué las comunidades rurales pueden ser parte de la solución.'},
 {k:'Resultados de pobreza multidimensional, Casen 2024, Ministerio de Desarrollo Social',r:'Las cifras oficiales de pobreza en Chile mirando salud, educación, vivienda, trabajo y redes, no solo el ingreso. Muestra lo que los promedios esconden.'},
 {k:'Atlas de Oportunidades',r:'Mapa interactivo de Raj Chetty que muestra cuánto llegan a ganar de adultos los niños según el barrio donde crecieron en Estados Unidos (en inglés). Es la prueba de que el lugar importa.'},
 {k:'Profesionales jóvenes y comunidad de Hijuelas buscan enfrentar riesgos y avanzar en vivienda',r:'Nota sobre jóvenes profesionales que trabajan con una comunidad rural de Hijuelas. Es un ejemplo chileno de lo que propone esta historia.'}
],
'redes':[
 {k:'La generación ansiosa',u:'https://openlibrary.org/works/OL37575384W',r:'El libro de Jonathan Haidt que relaciona los smartphones con el aumento de la ansiedad adolescente y propone retrasar las redes. Es la tesis detrás de la discusión chilena.'},
 {k:'Secuestrados por las pantallas',u:'https://www.biobiochile.cl/noticias/artes-y-cultura/libros/2023/10/12/secuestrados-por-las-pantallas-rescatados-por-carolina-perez-stephens.shtml',r:'Una educadora chilena escribe para familias y colegios sobre cómo acompañar a los niños en el uso de las pantallas. El complemento práctico y cercano de esta historia.'},
 {k:'The great rewiring',r:'La reseña de la psicóloga Candice Odgers en Nature, la principal crítica científica a Haidt (en inglés). Sirve para ver que la evidencia es menos simple de lo que parece.'},
 {k:'Kids Online Chile 2022, UNICEF y CEPPE UC',r:'El estudio sobre cómo usan internet los niños en Chile: a qué edad empiezan, qué riesgos viven y qué hacen los padres. Da las cifras chilenas.'},
 {k:'Plan de medios familiar',r:'Herramienta de la Academia Americana de Pediatría para armar en familia reglas sobre pantallas (en inglés y español). Es una forma concreta de hacer lo que propone esta historia.'},
 {k:'Social Media and Youth Mental Health',r:'La advertencia oficial del Cirujano General de Estados Unidos sobre redes sociales y salud mental de los jóvenes (en inglés). Resume la evidencia y da recomendaciones a familias.'}
],
'residencias':[
 {k:'Romania\'s Abandoned Children',u:'https://openlibrary.org/works/OL21060934W',r:'El estudio de Bucarest contado por sus autores: los niños que pasaron de orfanatos a familias de acogida se desarrollaron mucho mejor que los que se quedaron. Es la evidencia más fuerte de esta historia.'},
 {k:'Una base segura',u:'https://openlibrary.org/works/OL773848W',r:'Las conferencias en que John Bowlby explica la teoría del apego para padres y profesionales. Explica por qué un niño necesita un adulto que sea suyo.'},
 {k:'El cerebro del niño',u:'https://openlibrary.org/works/OL16460807W',r:'Cómo se desarrolla el cerebro emocional de los niños, explicado para familias con ejemplos de la vida diaria. Ayuda a entender lo que pierde un niño sin un vínculo estable.'},
 {k:'Child to adult neurodevelopmental and mental health trajectories after early life deprivation',u:'https://doi.org/10.1016/S0140-6736(17)30045-4',r:'Estudio que siguió hasta la adultez a niños que pasaron por orfanatos rumanos: quienes estuvieron más de seis meses tuvieron más problemas de salud mental décadas después. Muestra que el daño dura.'},
 {k:'Supportive Relationships and Active Skill-Building Strengthen the Foundations of Resilience',u:'https://developingchild.harvard.edu/resources/supportive-relationships-and-active-skill-building-strengthen-the-foundations-of-resilience/',r:'Documento de Harvard que explica que la resiliencia de un niño se construye sobre todo con al menos una relación estable con un adulto (en inglés).'},
 {k:'Cuidado alternativo, propuestas para el próximo gobierno',r:'Propuestas de la UC para el sistema de cuidado de niños separados de sus familias en Chile. Da el contexto chileno de residencias y familias de acogida.'},
 {k:'Mi experiencia como familia de acogida',r:'Una mujer chilena cuenta en primera persona cómo fue acoger a un niño. Es la mirada de quien lo vivió.'}
],
'sala-cuna':[
 {k:'Career and Family',u:'https://openlibrary.org/works/OL25321782W',r:'Claudia Goldin, Premio Nobel 2023, explica por qué las mujeres con estudios todavía tienen que elegir entre carrera y familia, y cómo el trabajo castiga la flexibilidad (en inglés). Es el fondo de esta historia.'},
 {k:'La mujer invisible',u:'https://openlibrary.org/works/OL20157508W',r:'Caroline Criado Perez muestra cómo los datos y el diseño de casi todo olvidan a las mujeres, incluido el trabajo de cuidado. Ayuda a ver por qué el cuidado recae en ellas.'},
 {k:'El costo de la sala cuna en los sueldos de las mujeres',r:'Estudio que muestra que la obligación de sala cuna, que se activa con 20 trabajadoras, se traduce en sueldos más bajos para las mujeres en Chile. Explica por qué cómo se financia importa.'},
 {k:'Sala cuna universal: mujeres y niños como rehenes de la pequeñez política',r:'Columna en The Clinic sobre la larga discusión de la sala cuna universal en Chile. Da el contexto de la noticia.'},
 {k:'All In: How Our Work-First Culture Fails Dads, Families, and Businesses',u:'https://openlibrary.org/works/OL20001145W',r:'Un periodista cuenta cómo el trabajo también les falla a los padres que quieren cuidar (en inglés). Muestra que la crianza compartida es parte de la solución.'},
 {k:'Propuesta de política pública de la Mesa de Maternidad',u:'https://politicaspublicas.uc.cl/content/uploads/2024/11/Copia-de-PROPUESTA-DE-POLITICA-PUBLICA-MESA-DE-MATERNIDAD_20241107_195921_0000.pdf',r:'Propuestas de Fundación Emma, el Centro de Políticas Públicas UC y otras instituciones sobre trabajo, corresponsabilidad en el cuidado y salud mental de las madres. Da ideas concretas para la red que ayuda a criar.'}
]
};
