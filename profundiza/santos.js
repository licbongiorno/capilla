// ==========================================
// BASE DE DATOS DE INTERCESORES COMPLETA
// ==========================================
const santos = [
    // --- ESTUDIO, INTELIGENCIA Y SABIDURÍA ---
    {
        id: "san-jose-cupertino",
        nombre: "San José de Cupertino",
        patronazgo: "Estudiantes y Exámenes Difíciles",
        fecha: "18 de Septiembre",
        icono: "fa-book-open-reader",
        tags: ["estudio", "examenes", "estudiantes", "memoria", "colegio", "facultad", "universidad", "aprendizaje"],
        oracion: "Glorioso San José de Cupertino, que por tu intercesión superaste las dificultades de la mente para gloria de Dios. Te ruego que me asistas en mis estudios y exámenes. Dame tranquilidad para responder, claridad para recordar y humildad para aceptar los resultados. Amén."
    },
    {
        id: "santo-tomas-aquino",
        nombre: "Santo Tomás de Aquino",
        patronazgo: "Estudiantes, Sabiduría y Verdad",
        fecha: "28 de Enero",
        icono: "fa-lightbulb",
        tags: ["estudio", "sabiduria", "inteligencia", "verdad", "estudiantes", "mente", "filosofia", "razon"],
        oracion: "Creador inefable, fuente de luz y sabiduría. Dígnate infundir el rayo de tu claridad sobre las tinieblas de mi inteligencia. Dame agudeza para entender, capacidad para retener, método y facultad para aprender, y gracia abundante para hablar. Amén."
    },

    // --- PSICOLOGÍA Y SALUD MENTAL ---
    {
        id: "santa-teresa-avila",
        nombre: "Santa Teresa de Ávila",
        patronazgo: "Psicólogos y Buscadores de paz interior",
        fecha: "15 de Octubre",
        icono: "fa-castle",
        tags: ["psicologia", "terapia", "mente", "interioridad", "paz", "autoestima", "psicologos", "crisis"],
        oracion: "Santa Teresa, que exploraste las 'moradas' del alma humana. Intercede por quienes trabajamos en la salud mental y por nuestros pacientes. Danos claridad para entender los procesos del corazón, paciencia en las crisis y la gracia de recordar que 'nada te turbe, nada te espante'. Amén."
    },
    {
        id: "santa-dinfna",
        nombre: "Santa Dinfna",
        patronazgo: "Salud Mental y Ansiedad",
        fecha: "15 de Mayo",
        icono: "fa-brain",
        tags: ["salud", "mente", "ansiedad", "depresion", "psicologia", "angustia", "paz", "nervios"],
        oracion: "Santa Dinfna, patrona de quienes sufren aflicciones emocionales. Te ruego que intercedas por mi paz interior. Que el Señor calme los pensamientos intrusos y devuelva la serenidad a mi mente. Amén."
    },

    // --- TRABAJO Y CAMPO (EL PAISANO) ---
    {
        id: "cura-brochero",
        nombre: "San Gabriel Brochero",
        patronazgo: "Paisanos y Gente de campo",
        fecha: "16 de Marzo",
        icono: "fa-mule",
        tags: ["argentina", "cordoba", "campo", "paisano", "humildad", "pueblo", "caminos", "trabajo", "rural"],
        oracion: "San José Gabriel Brochero, el 'Cura Gaucho'. Tú que recorriste las sierras en mula para llevar consuelo a los más humildes. Bendice a nuestra gente de campo y ayúdanos a ser serviciales y corajudos como vos. Amén."
    },
    {
        id: "san-isidro-labrador",
        nombre: "San Isidro Labrador",
        patronazgo: "Agricultores y Huertas",
        fecha: "15 de Mayo",
        icono: "fa-seedling",
        tags: ["trabajo", "campo", "plantas", "huerta", "naturaleza", "tierra"],
        oracion: "Glorioso San Isidro, que con tus manos trabajaste la tierra confiando siempre en la providencia. Bendice mis proyectos, mis cultivos y el trabajo de mis manos. Amén."
    },
    {
        id: "santiago-apostol",
        nombre: "Santiago Apóstol",
        patronazgo: "Jinetes y Cabalgatas",
        fecha: "25 de Julio",
        icono: "fa-horse",
        tags: ["cabalgatas", "caballos", "jinetes", "viajes", "campo", "ruta"],
        oracion: "Santo Apóstol Santiago, protector de los jinetes. Te pedimos que cuides nuestras cabalgatas, protejas a nuestros caballos y nos guíes con bien en cada sendero. Amén."
    },

    // --- MATERNIDAD Y EMBARAZO ---
    {
        id: "virgen-dulce-espera",
        nombre: "Virgen de la Dulce Espera",
        patronazgo: "Embarazadas y Deseo de hijos",
        fecha: "15 de Mayo",
        icono: "fa-person-pregnant",
        tags: ["embarazo", "maternidad", "bebes", "fertilidad", "hijos", "madres", "nacimiento"],
        oracion: "María, madre de la vida, acompáñame en esta dulce espera. Cuida al bebé que crece en mi seno y prepárame para recibirlo con amor. Intercede por quienes desean ser madres. Amén."
    },
    {
        id: "san-gerardo-mayela",
        nombre: "San Gerardo Mayela",
        patronazgo: "Madres Gestantes y Niños",
        fecha: "16 de Octubre",
        icono: "fa-hands-holding-child",
        tags: ["embarazo", "maternidad", "parto", "salud", "bebes", "riesgo", "hijos"],
        oracion: "San Gerardo, tú que has salvado a tantas madres e hijos en el parto. Te pido que cuides mi embarazo y que el bebé llegue a este mundo sano y fuerte. Amén."
    },

    // --- ANCIANOS Y NIÑOS ---
    {
        id: "san-simeon",
        nombre: "San Simeón",
        patronazgo: "Ancianos y Sabiduría",
        fecha: "3 de Febrero",
        icono: "fa-person-cane",
        tags: ["viejos", "ancianos", "vejez", "abuelos", "sabiduria", "paciencia", "soledad"],
        oracion: "San Simeón, que con paciencia esperaste ver la luz del Salvador en tu vejez. Te pedimos por nuestros adultos mayores: dales salud, consuelo en la soledad y haz que su sabiduría sea escuchada. Amén."
    },
    {
        id: "san-nicolas-de-bari",
        nombre: "San Nicolás de Bari",
        patronazgo: "Niños y Desamparados",
        fecha: "6 de Dic",
        icono: "fa-child-reaching",
        tags: ["niños", "infancia", "hijos", "proteccion", "familia", "inocencia"],
        oracion: "Bondadoso San Nicolás, protector de los más pequeños. Te encomendamos la vida, la salud y la alegría de nuestros niños. Protégelos de todo peligro. Amén."
    },

    // --- CAUSAS IMPOSIBLES Y URGENTES ---
    {
        id: "san-expedito",
        nombre: "San Expedito",
        patronazgo: "Causas Urgentes",
        fecha: "19 de Abril",
        icono: "fa-stopwatch",
        tags: ["urgente", "rapido", "justicia", "imposible", "ayuda"],
        oracion: "Santo Expedito de las causas urgentes, ven en mi auxilio en esta hora de aflicción. Tú que eres el Santo de lo que no puede esperar, socórreme hoy mismo. Amén."
    },
    {
        id: "san-judas-tadeo",
        nombre: "San Judas Tadeo",
        patronazgo: "Causas Imposibles",
        fecha: "28 de Octubre",
        icono: "fa-hands-praying",
        tags: ["imposible", "milagro", "desesperado", "angustia"],
        oracion: "San Judas Tadeo, apóstol de las causas desesperadas. Haz uso de tu privilegio de socorrer a quienes se encuentran en situaciones casi imposibles. Amén."
    },

    // --- PROTECCIONES NACIONALES Y REGIONALES ---
    {
        id: "san-ceferino",
        nombre: "Beato Ceferino Namuncurá",
        patronazgo: "Jóvenes, Aspiraciones y la Patagonia",
        fecha: "26 de Agosto",
        icono: "fa-mountain-sun",
        tags: ["argentina", "patagonia", "jovenes", "estudio", "humildad", "pueblo", "salud", "lirio"],
        oracion: "Ceferino Namuncurá, humilde lirio de la Patagonia. Tú que deseaste ser útil a tu pueblo, intercede por nuestros jóvenes para que tengan metas nobles y salud en sus cuerpos. Danos tu sencillez y tu fe inquebrantable en María Auxiliadora. Amén."
    },
    {
        id: "virgen-merced",
        nombre: "Virgen de la Merced",
        patronazgo: "Libertad, Cautivos y Fuerzas Armadas",
        fecha: "24 de Septiembre",
        icono: "fa-key",
        tags: ["libertad", "justicia", "cautivos", "presos", "proteccion", "argentina", "misericordia", "nudos"],
        oracion: "Virgen de la Merced, Madre de misericordia y libertad. Te pedimos por quienes se sienten esclavos de sus vicios, por los que sufren cautiverio y por la justicia en nuestra tierra. Rompe las cadenas que nos oprimen y guíanos hacia la libertad de los hijos de Dios. Amén."
    },
    {
        id: "virgen-itati",
        nombre: "Virgen de Itatí",
        patronazgo: "Patrona del Litoral",
        fecha: "9 de Julio",
        icono: "fa-water",
        tags: ["argentina", "corrientes", "litoral", "familia", "proteccion", "pueblo", "viajeros"],
        oracion: "Tierna Madre de Itatí, recurrimos a vos con total confianza. Bendice nuestros hogares, protege a los trabajadores de nuestros ríos y campos, y haznos constructores de una nación más fraterna y solidaria. Amén."
    },

    // --- VOCACIONES, ARTE Y CIENCIA ---
    {
        id: "santa-cecilia",
        nombre: "Santa Cecilia",
        patronazgo: "Músicos, Cantantes y Poetas",
        fecha: "22 de Noviembre",
        icono: "fa-music",
        tags: ["musica", "arte", "canto", "instrumentos", "alegria", "artistas", "celebracion"],
        oracion: "Santa Cecilia, que con tu vida y tu muerte cantaste las alabanzas del Señor. Bendice a quienes con su arte elevan el alma hacia el cielo. Que la armonía de nuestra música sea reflejo de la paz de Dios en nuestros corazones. Amén."
    },
    {
        id: "san-alberto-magno",
        nombre: "San Alberto Magno",
        patronazgo: "Científicos y Estudiantes de Ciencias Naturales",
        fecha: "15 de Noviembre",
        icono: "fa-microscope",
        tags: ["ciencia", "estudio", "naturaleza", "ecologia", "biologia", "verdad", "inteligencia"],
        oracion: "San Alberto, que buscaste a Dios a través del estudio de la creación. Intercede por los científicos y buscadores de la verdad, para que sus descubrimientos siempre respeten la dignidad humana y el cuidado de la casa común. Amén."
    },
    {
        id: "san-ignacio-loyola",
        nombre: "San Ignacio de Loyola",
        patronazgo: "Ejercicios Espirituales y Discernimiento",
        fecha: "31 de Julio",
        icono: "fa-compass",
        tags: ["decisiones", "paz", "interioridad", "psicologia", "discernimiento", "ejercicios", "fuerza"],
        oracion: "San Ignacio, maestro del discernimiento. Ayúdame a encontrar a Dios en todas las cosas y a elegir siempre lo que más me acerque a Su voluntad. Danos claridad en los momentos de confusión y valor para seguir nuestro camino. Amén."
    },

    // --- SALUD MUY ESPECÍFICA ---
    {
        id: "santa-agueda",
        nombre: "Santa Águeda",
        patronazgo: "Enfermedades del Pecho y las Mamas",
        fecha: "5 de Febrero",
        icono: "fa-ribbon",
        tags: ["salud", "mamas", "pecho", "mujeres", "cancer", "lactancia", "curacion", "operacion"],
        oracion: "Santa Águeda, protectora de las mujeres en sus dolencias de pecho. Te pido por mi salud (o la de...) para que el Señor sane cualquier mal, proteja la integridad de nuestro cuerpo y nos dé fortaleza en los tratamientos médicos. Amén."
    },
    {
        id: "santa-apolonia",
        nombre: "Santa Apolonia",
        patronazgo: "Dentistas y Dolores de Muelas",
        fecha: "9 de Febrero",
        icono: "fa-tooth",
        tags: ["salud", "dientes", "dentista", "dolor", "boca", "niños", "tratamiento"],
        oracion: "Santa Apolonia, que sufriste en tu boca por amor a Cristo. Intercede por quienes padecen dolores de muelas y guía las manos de los dentistas. Alivia nuestro sufrimiento físico y ayúdanos a usar nuestras palabras para el bien. Amén."
    },
    {
        id: "san-sebastian",
        nombre: "San Sebastián",
        patronazgo: "Deportistas y contra Epidemias",
        fecha: "20 de Enero",
        icono: "fa-person-running",
        tags: ["deportes", "salud", "entrenamiento", "fuerza", "resistencia", "competencia", "peste"],
        oracion: "San Sebastián, mártir valiente y vigoroso. Protege a quienes practican deportes, dales salud en sus cuerpos y disciplina en sus almas. Líbranos de lesiones y de enfermedades contagiosas, y danos tu coraje para ser fieles a la fe. Amén."
    },
    {
        id: "san-francisco-javier",
        nombre: "San Francisco Javier",
        patronazgo: "Misioneros y Viajes Largos",
        fecha: "3 de Diciembre",
        icono: "fa-earth-americas",
        tags: ["viajes", "mision", "extranjero", "camino", "proteccion", "evangelizacion", "lejos"],
        oracion: "San Francisco Javier, el gran viajero de Dios. Protege a quienes se encuentran lejos de su hogar, a los misioneros y a quienes viajan por tierras desconocidas. Haz que en cada destino encontremos hermanos y que nunca nos falte la esperanza. Amén."
    },

    // --- FUNDADORES Y MAESTROS ESPIRITUALES ---
    {
        id: "san-benito-abad",
        nombre: "San Benito de Nursia",
        patronazgo: "Fundador de los Monjes y Europa",
        fecha: "11 de Julio",
        icono: "fa-scroll",
        tags: ["disciplina", "estudio", "trabajo", "oracion", "paz", "regla", "fundacion", "orden"],
        oracion: "San Benito, padre de la vida monástica. Tú que nos enseñaste el equilibrio del 'Ora et Labora' (Reza y Trabaja). Ayúdame a ordenar mi vida, a encontrar tiempo para Dios en medio de mis tareas y a perseverar con disciplina en mis buenos propósitos. Amén."
    },
    {
        id: "santa-clara-asis",
        nombre: "Santa Clara de Asís",
        patronazgo: "Televisión, Telecomunicaciones y Claridad",
        fecha: "11 de Agosto",
        icono: "fa-sun",
        tags: ["claridad", "pobreza", "luz", "paz", "vision", "telecomunicaciones", "mujeres", "hermandad"],
        oracion: "Santa Clara, alma llena de luz. Tú que fuiste el espejo de la pureza de Francisco. Te pido que me concedas claridad mental en mis dudas, que protejas mis comunicaciones y que me enseñes a valorar la sencillez del corazón por encima de las cosas materiales. Amén."
    },
    {
        id: "santo-domingo-guzman",
        nombre: "Santo Domingo de Guzmán",
        patronazgo: "Predicadores y el Santo Rosario",
        fecha: "8 de Agosto",
        icono: "fa-ellipsis-vertical",
        tags: ["rosario", "predicacion", "verdad", "estudio", "palabra", "fe", "maestros"],
        oracion: "Santo Domingo, heraldo de la verdad. Tú que recibiste de la Virgen el Santo Rosario. Ayúdame a ser testigo de la palabra de Dios, a tener el don de la palabra para convencer y a amar la oración del Rosario como camino seguro hacia el Corazón de María. Amén."
    },
    {
        id: "san-bernardo-claraval",
        nombre: "San Bernardo de Claraval",
        patronazgo: "Buscadores de Dios y Escritores",
        fecha: "20 de Agosto",
        icono: "fa-feather",
        tags: ["escritores", "amor", "interioridad", "mística", "estudio", "dulzura", "paz"],
        oracion: "San Bernardo, doctor de la Iglesia. Tú que escribiste con tanta dulzura sobre la Virgen y el amor de Dios. Inspira mis palabras, bendice mis escritos y haz que mi alma siempre tenga sed de la presencia divina en el silencio de la oración. Amén."
    },
    {
        id: "san-camilo-lellis",
        nombre: "San Camilo de Lellis",
        patronazgo: "Enfermeros y Hospitales",
        fecha: "14 de Julio",
        icono: "fa-hand-holding-cross",
        tags: ["salud", "enfermeros", "hospital", "servicio", "enfermos", "medicina", "caridad"],
        oracion: "San Camilo, que viste en cada enfermo el rostro sufriente de Cristo. Bendice a los enfermeros y cuidadores de salud. Danos un corazón lleno de caridad para servir con paciencia y amor a quienes sufren en sus camas, devolviéndoles la dignidad y la esperanza. Amén."
    },
    {
        id: "san-alfonso-ligorio",
        nombre: "San Alfonso María de Ligorio",
        patronazgo: "Confesores y Teólogos Morales",
        fecha: "1 de Agosto",
        icono: "fa-book-bible",
        tags: ["perdon", "moral", "confesion", "conciencia", "paz", "decisiones", "abogados"],
        oracion: "San Alfonso, maestro de la misericordia. Ayúdame a tener una conciencia recta, a saber discernir entre el bien y el mal, y a encontrar en el perdón de Dios la paz que mi alma necesita. Sé guía de los confesores y de quienes deben tomar decisiones difíciles. Amén."
    },

    // --- MISERICORDIA Y SANACIÓN EMOCIONAL ---
    {
        id: "santa-faustina",
        nombre: "Santa Faustina Kowalska",
        patronazgo: "Apóstol de la Divina Misericordia",
        fecha: "5 de Octubre",
        icono: "fa-sun",
        tags: ["misericordia", "perdon", "paz", "confianza", "esperanza", "alma", "jesus"],
        oracion: "Jesús, en Ti confío. Santa Faustina, tú que recibiste el mensaje de la Divina Misericordia, ayúdame a confiar siempre en el amor de Dios, especialmente cuando me siento indigno o perdido. Que tu rayo de luz ilumine mi alma y me dé la paz. Amén."
    },
    {
        id: "virgen-de-la-sonrisa",
        nombre: "Virgen de la Sonrisa",
        patronazgo: "Depresión, Tristeza y Ansiedad",
        fecha: "13 de Mayo",
        icono: "fa-face-smile-beam",
        tags: ["depresion", "tristeza", "angustia", "ansiedad", "salud mental", "psicologia", "paz", "consuelo", "mente"],
        oracion: "Madre de la Sonrisa, tú que con un solo gesto devolviste la alegría a Santa Teresita en su enfermedad. Mírame con esa misma ternura, disipa las sombras de mi tristeza y ansiedad, y devuélvele a mi rostro y a mi alma la paz y la alegría de vivir. Amén."
    },
    {
        id: "san-francisco-de-sales",
        nombre: "San Francisco de Sales",
        patronazgo: "Escritores, Periodistas y la Mansedumbre",
        fecha: "24 de Enero",
        icono: "fa-feather-pointed",
        tags: ["paz", "mansedumbre", "paciencia", "escritura", "comunicacion", "carácter", "bondad", "tranquilidad"],
        oracion: "San Francisco de Sales, maestro de la dulzura y la paciencia. Ayúdame a dominar mi carácter, a hablar siempre con bondad y a encontrar la paz en medio de las tareas diarias. Que mis palabras sean siempre un bálsamo para quienes me escuchan. Amén."
    },

    // --- SANTOS DE AMÉRICA Y EL PUEBLO ---
    {
        id: "santa-rosa-de-lima",
        nombre: "Santa Rosa de Lima",
        patronazgo: "Patrona de América, Perú y las Flores",
        fecha: "30 de Agosto",
        icono: "fa-clover",
        tags: ["america", "peru", "argentina", "flores", "jardin", "humildad", "servicio", "enfermos"],
        oracion: "Santa Rosa de Lima, primer fruto de santidad de América. Tú que serviste a Dios en el silencio de tu jardín y en el cuidado de los pobres. Ayúdanos a florecer donde Dios nos ha plantado y a descubrir la alegría de servir a los demás con humildad y amor. Amén."
    },
    {
        id: "san-roque-gonzalez",
        nombre: "San Roque de Santa Cruz",
        patronazgo: "Mártir de las Misiones del Río de la Plata",
        fecha: "17 de Noviembre",
        icono: "fa-heart-circle-check",
        tags: ["argentina", "paraguay", "misiones", "corazon", "pueblo", "historia", "fundacion"],
        oracion: "San Roque de Santa Cruz, primer santo del Río de la Plata. Tú que entregaste tu vida por los pueblos originarios y fundaste ciudades con amor. Bendice nuestra tierra, protege nuestras misiones y danos un corazón valiente para trabajar por la justicia y la paz. Amén."
    },
    {
        id: "santa-isabel-hungria",
        nombre: "Santa Isabel de Hungría",
        patronazgo: "Cáritas, Enfermeros y los necesitados",
        fecha: "17 de Noviembre",
        icono: "fa-basket-shopping",
        tags: ["caridad", "pobres", "enfermos", "hospital", "servicio", "pan", "solidaridad", "hambre"],
        oracion: "Santa Isabel, que renunciaste a tus riquezas por amor a los más necesitados y convertiste el pan en rosas de caridad. Enséñanos a ser generosos con los que sufren y a dar de nosotros mismos con alegría a quien más lo necesita. Amén."
    },
    {
        id: "san-agustin",
        nombre: "San Agustín de Hipona",
        patronazgo: "Buscadores de la Verdad y la Conversión",
        fecha: "28 de Agosto",
        icono: "fa-book",
        tags: ["verdad", "conversion", "busqueda", "pecado", "esperanza", "estudio", "corazon"],
        oracion: "San Agustín, que encontraste la verdad tras una larga y tormentosa búsqueda. Tú nos enseñaste que nuestro corazón estará inquieto hasta que descanse en Dios. Intercede por quienes buscamos la verdad y la sanación del alma. Ayúdanos a mirar en nuestro interior para encontrar la luz y a tener la valentía de cambiar nuestras vidas por amor. Amén."
    },
    {
        id: "san-jeronimo",
        nombre: "San Jerónimo",
        patronazgo: "Bibliotecarios, Traductores y Estudiosos",
        fecha: "30 de Septiembre",
        icono: "fa-book-atlas",
        tags: ["estudio", "libros", "biblia", "traduccion", "sabiduria", "escritura", "biblioteca", "conocimiento"],
        oracion: "San Jerónimo, que dedicaste tu vida a traducir la Palabra de Dios para que todos pudieran entenderla. Bendice a quienes estudian, a los que cuidan los libros y a los que buscan la sabiduría. Que nunca nos falte el deseo de aprender y de profundizar en el conocimiento de la Verdad. Amén."
    },

    // --- PROTECCIÓN DEL HOGAR Y PELIGROS NATURALES ---
    {
        id: "santa-marta",
        nombre: "Santa Marta de Betania",
        patronazgo: "Amas de casa, Cocineros y Paz en el hogar",
        fecha: "29 de Julio",
        icono: "fa-utensils",
        tags: ["familia", "hogar", "cocina", "servicio", "hospitalidad", "paz", "casa", "mujeres", "anfitriones"],
        oracion: "Santa Marta, mujer servicial y hospitalaria que recibiste a Jesús en tu hogar. Bendice nuestro hogar, nuestras familias y nuestros quehaceres diarios. Enséñanos a servir con alegría, recordando que al atender a los demás, estamos sirviendo a Dios. Amén."
    },
    {
        id: "san-florian",
        nombre: "San Florián",
        patronazgo: "Bomberos y contra Incendios",
        fecha: "4 de Mayo",
        icono: "fa-fire-extinguisher",
        tags: ["bomberos", "incendios", "proteccion", "fuego", "peligro", "salvamento", "emergencia"],
        oracion: "San Florián, protector valiente ante el fuego. Te pedimos que guardes nuestros hogares y bosques de los incendios. Bendice a todos los bomberos, dales valor y protección en su labor, y acompaña a quienes arriesgan su vida para salvar la de los demás. Amén."
    },
    {
        id: "san-rafael-arcangel",
        nombre: "San Rafael Arcángel",
        patronazgo: "Medicina de Dios y Guía de Viajeros",
        fecha: "29 de Septiembre",
        icono: "fa-staff-snake",
        tags: ["salud", "curacion", "viajes", "camino", "medicos", "ciegos", "novios", "proteccion", "guia"],
        oracion: "San Rafael Arcángel, medicina de Dios y guía de los que viajan. Te pedimos que acompañes nuestros caminos, cures nuestras enfermedades físicas y espirituales, y protejas a nuestras familias. Sé nuestro compañero de viaje y tráenos siempre con bien a nuestro hogar. Amén."
    },

    // --- JUSTICIA, VERDAD Y HONESTIDAD ---
    {
        id: "san-ivo",
        nombre: "San Ivo de Kermartin",
        patronazgo: "Abogados, Jueces y Causas de Justicia",
        fecha: "19 de Mayo",
        icono: "fa-scale-balanced",
        tags: ["justicia", "juicios", "abogados", "leyes", "tramites", "verdad", "honestidad", "defensa", "pobres"],
        oracion: "San Ivo, tú que fuiste llamado 'el abogado de los pobres' por tu incansable búsqueda de la justicia. Intercede en mi proceso legal (o trámite), para que prevalezca la verdad y la equidad. Inspira a los jueces y defensores a actuar con rectitud e imparcialidad. Amén."
    },
    {
        id: "san-bernardino",
        nombre: "San Bernardino de Siena",
        patronazgo: "Negocios, Comerciantes y Trabajo Honesto",
        fecha: "20 de Mayo",
        icono: "fa-briefcase",
        tags: ["trabajo", "honestidad", "negocios", "comercio", "dinero", "etica", "verdad", "justicia"],
        oracion: "San Bernardino, que predicaste la honestidad en el trato con los demás. Bendice mi trabajo y mis negocios, para que siempre actúe con integridad y justicia. Que el deseo de progreso nunca opaque mi ética y que mis acciones sean testimonio de la verdad de Dios. Amén."
    },
    {
        id: "san-juan-crisostomo",
        nombre: "San Juan Crisóstomo",
        patronazgo: "Predicadores y Defensores de la Verdad",
        fecha: "13 de Septiembre",
        icono: "fa-comment-dots",
        tags: ["verdad", "palabra", "valentia", "justicia", "elocuencia", "honestidad", "denuncia", "integridad"],
        oracion: "San Juan, 'Boca de Oro', que no callaste ante la injusticia por defender la verdad. Danos valor para hablar cuando sea necesario y sabiduría para callar cuando la paz lo exija. Que nuestras palabras sean siempre honestas y constructoras de un mundo más justo. Amén."
    },

    // --- FILOSOFÍA, PENSAMIENTO Y BÚSQUEDA DE LA VERDAD ---
    {
        id: "san-justino",
        nombre: "San Justino Mártir",
        patronazgo: "Filósofos y Pensadores",
        fecha: "1 de Junio",
        icono: "fa-head-side-think",
        tags: ["filosofia", "pensamiento", "verdad", "estudio", "razon", "logica", "sabiduria"],
        oracion: "San Justino, que uniste la sabiduría de la filosofía con la verdad de Cristo. Intercede por todos los que buscan el sentido de la vida, los que dudan y los que se dedican al estudio profundo. Que nuestra razón nos lleve a descubrir el inmenso amor de Dios. Amén."
    },
    {
        id: "santa-teresa-benedicta",
        nombre: "Santa Teresa Benedicta (Edith Stein)",
        patronazgo: "Filósofos y Personas en búsqueda de sentido",
        fecha: "9 de Agosto",
        icono: "fa-glasses",
        tags: ["filosofia", "busqueda", "verdad", "sentido", "mente", "estudio", "conversion", "judios", "martir"],
        oracion: "Santa Edith Stein, que buscaste la verdad sin descanso hasta encontrarla en la Cruz. Intercede por quienes atraviesan oscuridades intelectuales y espirituales. Danos la gracia de no conformarnos con respuestas fáciles y de tener el coraje de abrazar la Verdad cuando se nos revela. Amén."
    },

    // --- CUIDADO DE LA NATURALEZA Y ECOLOGÍA ---
    {
        id: "san-francisco-asis",
        nombre: "San Francisco de Asís",
        patronazgo: "Ecología, Animales y Medio Ambiente",
        fecha: "4 de Octubre",
        icono: "fa-leaf",
        tags: ["naturaleza", "animales", "ecologia", "paz", "pobreza", "humildad", "creacion", "ambiente", "mascotas"],
        oracion: "San Francisco, hermano de todas las criaturas. Tú que nos enseñaste a alabar a Dios por la hermosura de la creación. Ayúdanos a cuidar de nuestra madre tierra, a ser compasivos con los animales y a vivir en armonía con todo lo que Dios ha hecho. Haznos instrumentos de tu paz. Amén."
    },
    {
        id: "san-fiacre",
        nombre: "San Fiacre",
        patronazgo: "Jardineros, Huertas y Hierbas Medicinales",
        fecha: "30 de Agosto",
        icono: "fa-seedling",
        tags: ["jardin", "huerta", "plantas", "curacion", "naturaleza", "hierbas", "salud"],
        oracion: "San Fiacre, tú que en el silencio de tu jardín cultivaste plantas para sanar el cuerpo y el alma. Bendice nuestra huerta y nuestro conocimiento de las hierbas medicinales. Que sepamos usar los frutos de la tierra con respeto y sabiduría para el alivio de los enfermos y el cuidado de nuestra salud. Amén."
    },
    {
        id: "san-huberto",
        nombre: "San Huberto",
        patronazgo: "Ecología y Cuidado de los Bosques",
        fecha: "3 de Noviembre",
        icono: "fa-tree",
        tags: ["naturaleza", "animales", "bosques", "ecologia", "medio ambiente", "campo", "respeto", "creacion"],
        oracion: "San Huberto, que en la naturaleza encontraste el llamado de Dios. Intercede por nosotros para que seamos guardianes responsables de nuestra tierra, de nuestros montes y de cada criatura. Que aprendamos a convivir en armonía con la creación y a proteger la vida en todas sus formas. Amén."
    },

    // --- DEVOCIONES POPULARES Y NECESIDADES CONCRETAS ---
    {
        id: "virgen-san-nicolas",
        nombre: "Virgen del Rosario de San Nicolás",
        patronazgo: "Unión de la Familia y Oración",
        fecha: "25 de Septiembre",
        icono: "fa-hands-praying",
        tags: ["argentina", "familia", "union", "rosario", "conversion", "madre", "sanidad"],
        oracion: "Madre de San Nicolás, te consagramos nuestras familias y nuestro país. Que tu Rosario sea nuestra fuerza y tu manto nuestra protección. Acércanos al corazón de tu Hijo Jesús y concédenos la gracia de vivir unidos y en paz. Amén."
    },
    {
        id: "san-pantaleon",
        nombre: "San Pantaleón",
        patronazgo: "Médicos y Enfermos",
        fecha: "27 de Julio",
        icono: "fa-stethoscope",
        tags: ["salud", "enfermos", "medicos", "curacion", "sanidad", "milagro", "dolor", "hospital"],
        oracion: "San Pantaleón, glorioso mártir y médico compasivo. Acudimos a ti con fe, pidiéndote por la salud de los enfermos. Intercede ante el Señor para que envíe su espíritu de sanación sobre nosotros y nos devuelva la vitalidad y la esperanza. Amén."
    },
    {
        id: "san-gema",
        nombre: "Santa Gema Galgani",
        patronazgo: "Farmacéuticos y Problemas de Espalda",
        fecha: "11 de Abril",
        icono: "fa-bone",
        tags: ["salud", "columna", "espalda", "dolor", "farmacia", "paciencia", "sufrimiento"],
        oracion: "Santa Gema, flor de la Pasión de Cristo, que aceptaste el sufrimiento con amorosa resignación. Te pido por mi salud física, especialmente por mis dolores de espalda y columna, y por la fortaleza de mi espíritu en las pruebas. Enséñame a ofrecer mis sufrimientos con amor y a confiar siempre en Jesús. Amén."
    },

    // --- CONFIANZA, TRABAJO ORDINARIO Y SALUD TÉCNICA ---
    {
        id: "santa-teresita-lisieux",
        nombre: "Santa Teresita del Niño Jesús",
        patronazgo: "Misiones, Confianza y Pequeños Milagros",
        fecha: "1 de Octubre",
        icono: "fa-spa",
        tags: ["confianza", "amor", "flores", "misiones", "niños", "milagro", "paciencia", "humildad", "rosas"],
        oracion: "Santa Teresita, tú que prometiste pasar tu cielo haciendo el bien en la tierra y derramando una lluvia de rosas. Enséñame tu 'caminito' de confianza y amor. Ayúdame a encontrar a Dios en los detalles más pequeños del día y concédeme la gracia que hoy te pido. Amén."
    },
    {
        id: "san-cosme-damian",
        nombre: "San Cosme y San Damián",
        patronazgo: "Cirujanos, Médicos y Farmacéuticos",
        fecha: "26 de Septiembre",
        icono: "fa-kit-medical",
        tags: ["salud", "cirugia", "operacion", "medicina", "medicos", "farmacia", "curacion", "hermanos"],
        oracion: "Santos Cosme y Damián, hermanos y médicos sin fronteras. Guíen las manos de los cirujanos y bendigan a los que preparan y dispensan medicinas. Que cada tratamiento y cada intervención sea un paso hacia la completa recuperación y el bienestar integral de los enfermos. Amén."
    },

    // --- PAZ INTERIOR Y RESOLUCIÓN DE CONFLICTOS ---
    {
        id: "santa-rita",
        nombre: "Santa Rita de Casia",
        patronazgo: "Matrimonios Difíciles y Causas Desesperadas",
        fecha: "22 de Mayo",
        icono: "fa-rings-wedding",
        tags: ["imposible", "matrimonio", "esposos", "conflictos", "familia", "violencia", "paciencia", "paz"],
        oracion: "Santa Rita, abogada de los casos imposibles y protectora de las familias. Te ruego que traigas paz a mi hogar y soluciones a nuestros conflictos con la fuerza del amor y del perdón. Ayúdame a ser paciente en las pruebas y a confiar en la voluntad divina. Amén."
    },
    {
        id: "san-martin-porres",
        nombre: "San Martín de Porres",
        patronazgo: "Justicia Social y Armonía entre las Personas",
        fecha: "3 de Noviembre",
        icono: "fa-broom",
        tags: ["humildad", "servicio", "pobres", "animales", "union", "perdon", "paz", "enfermos"],
        oracion: "Fray Escoba, humilde Martín. Tú que lograste que perro, gato y ratón comieran del mismo plato. Te pedimos que elimines los prejuicios de nuestros corazones, que nos unas en fraternidad y que nunca nos falte la compasión hacia los más necesitados. Amén."
    },
    {
        id: "virgen-de-la-paz",
        nombre: "Virgen de la Paz",
        patronazgo: "Concordia, Familia y Fin de Conflictos",
        fecha: "24 de Enero",
        icono: "fa-dove",
        tags: ["paz", "familia", "conflictos", "concordia", "perdon", "union", "tranquilidad", "mundo"],
        oracion: "Reina de la Paz, Madre de la Concordia. Te pedimos por los conflictos en nuestras familias, barrios y en el mundo entero. Calma los ánimos exaltados, ayuda a que florezca el diálogo y la comprensión, y danos la paz que solo tu Hijo nos puede dar. Amén."
    },

    // --- DUELO, PÉRDIDA Y CONSUELO ---
    {
        id: "virgen-dolores",
        nombre: "Nuestra Señora de los Dolores",
        patronazgo: "Consuelo en el Duelo y el Sufrimiento",
        fecha: "15 de Septiembre",
        icono: "fa-heart-crack",
        tags: ["duelo", "perdida", "muerte", "luto", "tristeza", "consuelo", "dolor", "madres", "hijos"],
        oracion: "Virgen de los Dolores, tú que permaneciste al pie de la cruz y conociste el dolor más profundo. Te pido que acompañes mi duelo y el de todos los que lloran a un ser querido. Consuélanos con tu presencia materna y afiánzanos en la esperanza de la resurrección. Amén."
    },
    {
        id: "santa-paula",
        nombre: "Santa Paula de Roma",
        patronazgo: "Viudas y Personas en Duelo",
        fecha: "26 de Enero",
        icono: "fa-person-dress-burst",
        tags: ["duelo", "viudez", "soledad", "perdida", "esposos", "luto", "fortaleza", "mujeres"],
        oracion: "Santa Paula, que supiste encontrar en la oración y el servicio el consuelo tras la pérdida de tu esposo. Acompáñame en mi soledad y enséñame a caminar este nuevo tiempo con dignidad y fe. Que el amor que sembramos sea la luz que ilumine mi camino. Amén."
    },
    {
        id: "san-nicolas-tolentino",
        nombre: "San Nicolás de Tolentino",
        patronazgo: "Intercesor por las Almas y el Alivio del Duelo",
        fecha: "10 de Septiembre",
        icono: "fa-cloud",
        tags: ["duelo", "almas", "paz", "consuelo", "cementerio", "descanso", "familia", "tristeza"],
        oracion: "San Nicolás de Tolentino, protector de las almas que han partido. Te encomiendo a (nombre del ser querido). Alivia nuestro dolor con la seguridad de tu intercesión y haz que sintamos que nuestros seres amados están en buenas manos, gozando de la luz sin fin. Amén."
    },

    // --- CREATIVIDAD, INVENTOS Y NUEVOS PROYECTOS ---
    {
        id: "santa-catalina-alejandria",
        nombre: "Santa Catalina de Alejandría",
        patronazgo: "Filósofos, Oradores y la Lógica",
        fecha: "25 de Noviembre",
        icono: "fa-gear",
        tags: ["logica", "razon", "defensa", "intelecto", "estudio", "debate", "valentia", "verdad", "mujeres"],
        oracion: "Santa Catalina, de aguda inteligencia y fe firme. Danos elocuencia para defender nuestras convicciones y sabiduría para encontrar la verdad. Inspira a los pensadores, a los que debaten ideas y a quienes buscan respuestas en la lógica, para que en todo brille la luz de Cristo. Amén."
    },
    {
        id: "san-isidoro",
        nombre: "San Isidoro de Sevilla",
        patronazgo: "Internet, Informática y Nuevos Medios",
        fecha: "4 de Abril",
        icono: "fa-laptop-code",
        tags: ["internet", "tecnologia", "computadoras", "redes", "comunicacion", "conocimiento", "estudio", "proyectos", "programacion"],
        oracion: "San Isidoro, gran recopilador del conocimiento. Guíanos en este mundo digital para que internet y la tecnología sean herramientas de unión, verdad y amor, y no de división. Ayúdanos a usar nuestras computadoras y redes sociales para el bien. Te pido por mi nuevo proyecto: danos visión para empezar, constancia para seguir y la sabiduría para usar los medios modernos con un propósito noble y transformador. Amén."
    },

    // --- VIAJES Y CAMINOS DIFÍCILES ---
    {
        id: "santa-gertrudis-nivelles",
        nombre: "Santa Gertrudis de Nivelles",
        patronazgo: "Viajeros y Personas en el camino",
        fecha: "17 de Marzo",
        icono: "fa-map-location-dot",
        tags: ["viajes", "camino", "proteccion", "alojamiento", "ruta", "extranjero", "hospitalidad", "seguridad"],
        oracion: "Santa Gertrudis, protectora de quienes emprenden largas marchas. Cuida mis traslados y estancias. Que en cada camino encuentre hospitalidad, que el cansancio no me venza y que tu protección me acompañe hasta llegar seguro a mi destino. Amén."
    },
    {
        id: "virgen-de-la-guia",
        nombre: "Nuestra Señora de la Guía",
        patronazgo: "Caminos Inciertos y Decisiones de Ruta",
        fecha: "8 de Septiembre",
        icono: "fa-compass",
        tags: ["camino", "guia", "direccion", "duda", "viajes", "orientacion", "paz", "decisiones"],
        oracion: "Virgen de la Guía, Estrella de nuestros caminos. Cuando no sepa qué rumbo tomar, aclara mi vista. Sé Tú mi brújula en las rutas desconocidas de la vida, protégeme en los viajes largos y condúceme a puerto seguro en todas mis decisiones. Amén."
    },

    // --- PROTECCIÓN DE LA VIDA Y ADOPCIÓN ---
    {
        id: "san-jose",
        nombre: "San José",
        patronazgo: "Padres adoptivos, Trabajadores y la Familia",
        fecha: "19 de Marzo",
        icono: "fa-hammer",
        tags: ["trabajo", "padres", "adopcion", "familia", "proteccion", "hogar", "silencio", "paz", "hombres", "madera"],
        oracion: "San José, custodio de la Sagrada Familia. Tú que asumiste con amor el cuidado de Jesús. Te encomiendo mi trabajo de cada día, la protección de mi hogar y a todos los padres de familia, especialmente a quienes abren su corazón a la adopción. Danos tu paz y tu silenciosa obediencia. Amén."
    },

    // --- CUIDADO DE LA NATURALEZA ---
    {
        id: "san-juan-macias",
        nombre: "San Juan Macías",
        patronazgo: "Amantes de los animales y los Marginados",
        fecha: "18 de Septiembre",
        icono: "fa-paw",
        tags: ["animales", "mascotas", "pobres", "humildad", "peru", "servicio", "marginados", "perros", "gatos"],
        oracion: "San Juan Macías, portero humilde que compartiste tu comida y amor con los más pobres y con los animales. Te pedimos por nuestras mascotas, compañeros leales en nuestra vida, y por todos los seres que sufren el abandono. Que sepamos tratarlos con la ternura y el respeto con que Dios creó todo lo que respira, y que nunca nos falte compasión hacia los más necesitados. Amén."
    },
    {
        id: "santa-hildegarda",
        nombre: "Santa Hildegarda de Bingen",
        patronazgo: "Medicina Natural, Música y Ecología Femenina",
        fecha: "17 de Septiembre",
        icono: "fa-leaf",
        tags: ["naturaleza", "hierbas", "salud", "musica", "mujeres", "ciencia", "creacion", "curacion", "mente"],
        oracion: "Santa Hildegarda, a quien Dios reveló los secretos de la creación y la armonía del universo. Intercede por quienes buscan sanar el cuerpo con los frutos de la tierra, por las mujeres que se dedican al estudio y por quienes encuentran a Dios a través del arte y la música. Ayúdanos a vivir en equilibrio con el cosmos. Amén."
    },
    {
        id: "santa-kateri-tekakwitha",
        nombre: "Santa Kateri Tekakwitha",
        patronazgo: "Ecología, Medio Ambiente y Pueblos Originarios",
        fecha: "14 de Julio",
        icono: "fa-mountain",
        tags: ["ecologia", "naturaleza", "tierra", "indigena", "proteccion", "ambiente", "bosques", "pureza", "raices"],
        oracion: "Santa Kateri, 'Lirio de los Mohawks', que encontraste a Dios en la profundidad de los bosques y el murmullo de las aguas. Enséñanos a amar nuestra tierra americana con la sabiduría de los antiguos. Protege nuestros montes, ríos y selvas, y ayúdanos a ser custodios humildes de la creación. Amén."
    },

    // --- PAZ EN EL BARRIO Y ARMONÍA COMUNITARIA ---
    {
        id: "beato-pino-puglisi",
        nombre: "Beato Pino Puglisi",
        patronazgo: "Paz en los Barrios, contra la Violencia y las Bandas",
        fecha: "21 de Octubre",
        icono: "fa-handshake-simple",
        tags: ["paz", "barrio", "violencia", "seguridad", "vecinos", "pibes", "jovenes", "unidad", "justicia", "calle"],
        oracion: "Beato Pino, mártir de las calles y protector de los barrios difíciles. Te pedimos por la paz en nuestras cuadras. Aleja la violencia de nuestras esquinas, protege a nuestros jóvenes de los caminos oscuros y ayúdanos a construir comunidades unidas, solidarias y valientes. Amén."
    },
    {
        id: "san-miguel-arcangel",
        nombre: "San Miguel Arcángel",
        patronazgo: "Protección contra el mal, Policías y Seguridad",
        fecha: "29 de Septiembre",
        icono: "fa-shield-halved",
        tags: ["proteccion", "seguridad", "peligro", "miedo", "combate", "fuerza", "policias", "mal", "defensa"],
        oracion: "San Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra la perversidad y asechanzas del demonio. Reprímale Dios, pedimos suplicantes. Te encomendamos a quienes trabajan por nuestra seguridad y la paz de nuestra comunidad. Amén."
    },

    // --- DISCERNIMIENTO Y CLARIDAD ---
    {
        id: "espiritu-santo",
        nombre: "El Espíritu Santo",
        patronazgo: "Fuente de Sabiduría, Ciencia y Entendimiento",
        fecha: "Pentecostés",
        icono: "fa-dove",
        tags: ["iluminacion", "sabiduria", "discernimiento", "ciencia", "entendimiento", "consejo", "paz", "verdad", "luz", "ideas"],
        oracion: "Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu luz para que sepamos discernir lo que es bueno, comprender las verdades profundas y tener la claridad necesaria para tomar decisiones sabias. Ilumina nuestra mente y guía nuestros pasos. Amén."
    },
    {
        id: "santa-sofia",
        nombre: "Santa Sofía (Sabiduría Divina)",
        patronazgo: "Sabiduría, Prudencia y Conocimiento",
        fecha: "30 de Septiembre",
        icono: "fa-brain",
        tags: ["sabiduria", "conocimiento", "prudencia", "iluminacion", "mente", "verdad", "estudio", "filosofia"],
        oracion: "Santa Sofía, cuyo nombre significa Sabiduría. Intercede por nosotros para que busquemos siempre el conocimiento que eleva el alma. Danos prudencia en nuestras acciones, entendimiento en nuestras dudas y la capacidad de ver más allá de las apariencias para encontrar la verdad que libera. Amén."
    },
    {
        id: "san-buenaventura",
        nombre: "San Buenaventura",
        patronazgo: "Teólogos, Filósofos y Doctores del alma",
        fecha: "15 de Julio",
        icono: "fa-book-sparkles",
        tags: ["discernimiento", "sabiduria", "mística", "estudio", "psicologia", "interioridad", "luz", "razon"],
        oracion: "San Buenaventura, que enseñaste que la mente debe estar iluminada por el amor. Ayúdanos a unir el conocimiento intelectual con la paz del corazón. Que en nuestras búsquedas teóricas nunca perdamos el sentido práctico de la bondad y la caridad hacia el prójimo. Amén."
    },
    {
        id: "santa-catalina-siena",
        nombre: "Santa Catalina de Siena",
        patronazgo: "Consejeros, Diálogo y la Búsqueda de la Verdad",
        fecha: "29 de Abril",
        icono: "fa-comments",
        tags: ["dialogo", "consejo", "verdad", "paz", "valentia", "mujeres", "politica", "discernimiento"],
        oracion: "Santa Catalina, mujer fuerte y consejera de Papas, que encontraste la luz en tu 'celda interior'. Intercede por nosotros cuando necesitemos un buen consejo o claridad para hablar. Que la luz de la verdad ilumine nuestra conciencia y nos dé valor para seguirla. Amén."
    }
]; // <--- Este corchete cierra la lista de todos los santos

// ==========================================
// LÓGICA DEL BUSCADOR (EL "MOTOR" DEL SITIO)
// ==========================================

let filtroActual = '';

// 1. FUNCIÓN PARA MOSTRAR LOS SANTOS EN LA GRILLA
function renderSantos(lista) {
    const grid = document.getElementById('santosGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (lista.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size:2rem; margin-bottom:10px; color:var(--acento);"></i>
                <br>No encontramos un intercesor para esa búsqueda.<br>
                <small>Probá con palabras como "paz", "estudio" o "campo".</small>
            </div>`;
        return;
    }

    lista.forEach(santo => {
        const card = document.createElement('div');
        card.className = 'santo-card';
        card.onclick = () => abrirModal(santo.id);
        
        card.innerHTML = `
            <div class="santo-icon"><i class="fas ${santo.icono}"></i></div>
            <h3 class="santo-nombre">${santo.nombre}</h3>
            <span class="santo-patronazgo">${santo.patronazgo}</span>
            <span class="santo-fecha">${santo.fecha}</span>
        `;
        
        grid.appendChild(card);
    });
}

// 2. FUNCIÓN DE FILTRADO POR TEXTO Y BOTONES
function filtrarSantos() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const busqueda = input.value.toLowerCase().trim();
    
    const resultados = santos.filter(santo => {
        const coincideTexto = santo.nombre.toLowerCase().includes(busqueda) || 
                              santo.patronazgo.toLowerCase().includes(busqueda) || 
                              santo.tags.some(tag => tag.includes(busqueda));
        
        const coincideFiltro = filtroActual === '' || santo.tags.includes(filtroActual);
        
        return coincideTexto && coincideFiltro;
    });

    renderSantos(resultados);
}

// 3. FUNCIÓN PARA LOS BOTONES DE CATEGORÍA
function setTag(tag) {
    if (filtroActual === tag) {
        filtroActual = '';
        if (event) event.target.classList.remove('active');
    } else {
        filtroActual = tag;
        document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
        if (event) event.target.classList.add('active');
    }
    filtrarSantos();
}

// 4. SANTO AL AZAR
function santoAlAzar() {
    const random = santos[Math.floor(Math.random() * santos.length)];
    abrirModal(random.id);
}

// 5. MANEJO DE LA VENTANA MODAL
function abrirModal(id) {
    const santo = santos.find(s => s.id === id);
    if (!santo) return;

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon-container">
                <i class="fas ${santo.icono}"></i>
            </div>
            <h2 class="modal-nombre">${santo.nombre}</h2>
            <span class="modal-patronazgo">${santo.patronazgo}</span>
            <span class="modal-fecha-celebracion"><i class="far fa-calendar-alt"></i> ${santo.fecha}</span>
        </div>
        <div class="oracion-box">
            "${santo.oracion}"
        </div>
        <button class="btn-share" onclick="compartirSanto('${santo.id}', '${santo.nombre}')">
            <i class="fas fa-share-nodes"></i> Compartir Oración
        </button>
    `;

    const modal = document.getElementById('santoModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';

    // Modifica la URL para compartir
    const nuevaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?santo=' + id;
    window.history.pushState({ path: nuevaUrl }, '', nuevaUrl);
}

function cerrarModal() {
    const modal = document.getElementById('santoModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);

    // Limpia la URL al cerrar
    const urlBase = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: urlBase }, '', urlBase);
}

// Cierra modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarModal();
});

// 6. COMPARTIR A REDES O COPIAR LINK
async function compartirSanto(id, nombre) {
    const urlCompartir = window.location.protocol + "//" + window.location.host + window.location.pathname + '?santo=' + id;
    const textoMensaje = `¡Mirá esta hermosa oración a ${nombre} que encontré! Podés leerla acá: `;

    if (navigator.share) {
        try {
            await navigator.share({
                title: `Oración a ${nombre} | Capilla Santa Ana`,
                text: textoMensaje,
                url: urlCompartir
            });
        } catch (err) {
            console.log('Error al compartir', err);
        }
    } else {
        copiarAlPortapapeles(textoMensaje + urlCompartir);
    }
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    });
}

// 7. INICIALIZACIÓN AL CARGAR LA PÁGINA
window.onload = () => {
    // Cargar todos los santos inicialmente
    renderSantos(santos);

    // Revisar si la URL trae un santo para abrir (para cuando comparten el link)
    const urlParams = new URLSearchParams(window.location.search);
    const santoId = urlParams.get('santo');
    if (santoId) {
        setTimeout(() => abrirModal(santoId), 500);
    }
};