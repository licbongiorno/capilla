// Índice de búsqueda sitewide para la sección "Profundizá"
const SEARCH_INDEX = [
    // Hub principal
    { title: "Profundizá tu Fe", desc: "Portal con todas las herramientas interactivas para aprender, jugar y reflexionar.", cat: "Portal", url: "index.html", icon: "fa-book-open" },

    // Catequesis y conocimiento
    { title: "¿Sabías que...?", desc: "Datos curiosos, historia y misterios ocultos de nuestra fe católica.", cat: "Catequesis", url: "sabiasque.html", icon: "fa-lightbulb" },
    { title: "Calendario Litúrgico", desc: "Tiempos, colores litúrgicos y fiestas importantes del año.", cat: "Catequesis", url: "calendario.html", icon: "fa-calendar-alt" },
    { title: "Glosario de la Fe", desc: "Diccionario simple y amigable de términos de la Iglesia.", cat: "Catequesis", url: "glosario.html", icon: "fa-book" },
    { title: "La Santa Misa", desc: "El misterio, los símbolos y el silencio de la Liturgia.", cat: "Catequesis", url: "misas.html", icon: "fa-church" },
    { title: "Vivir la Liturgia", desc: "Un recorrido por los 7 Sacramentos.", cat: "Catequesis", url: "vivirliturgia.html", icon: "fa-ring" },
    { title: "Vidas que Inspiran", desc: "Encuentros con los Santos y personas que dejaron huella.", cat: "Catequesis", url: "vidas.html", icon: "fa-dove" },

    // Oración y espiritualidad
    { title: "Conecta con Dios", desc: "Reflexiones y guías prácticas para mejorar tu oración.", cat: "Oración", url: "conecta.html", icon: "fa-plug" },
    { title: "Diario de Gratitud", desc: "Espacio personal para agradecer a Dios y guardar bendiciones.", cat: "Oración", url: "gratitud.html", icon: "fa-praying-hands" },
    { title: "Botiquín Espiritual / Santoral", desc: "Buscá el intercesor y la oración indicada para tu necesidad.", cat: "Oración", url: "santoral.html", icon: "fa-briefcase-medical" },

    // Dinámicas y reflexión
    { title: "Mazos de Reflexión", desc: "Sacá una carta al azar con pasajes bíblicos y reflexiones.", cat: "Dinámicas", url: "mazos.html", icon: "fa-layer-group" },
    { title: "Desafíos por Edades (Quizzes)", desc: "Trivias para niños, adolescentes y adultos.", cat: "Dinámicas", url: "quiz.html", icon: "fa-clipboard-question" },
    { title: "Luz para el Alma", desc: "Frases de inspiración cristiana, bíblica o de los santos.", cat: "Dinámicas", url: "frases.html", icon: "fa-lightbulb" },

    // 12 mazos
    { title: "Mazo: Niños (4 a 6)", desc: "Semillitas de amor para hablar de Jesús con los más chicos.", cat: "Mazo de cartas", url: "nenes4-6.html", icon: "fa-child-reaching" },
    { title: "Mazo: Creciendo (6 a 8)", desc: "Preguntas y juegos para descubrir el camino de la fe.", cat: "Mazo de cartas", url: "creciendo.html", icon: "fa-seedling" },
    { title: "Mazo: Jóvenes", desc: "Identidad, propósito y luz para la juventud de hoy.", cat: "Mazo de cartas", url: "jovenes.html", icon: "fa-bolt" },
    { title: "Mazo: Catequesis", desc: "Formación profunda para entender y amar las raíces de la fe.", cat: "Mazo de cartas", url: "catequesis.html", icon: "fa-book-bible" },
    { title: "Mazo: 1° Comunión", desc: "Preparando el corazón para recibir el Pan de Vida.", cat: "Mazo de cartas", url: "comunion.html", icon: "fa-wheat-awn" },
    { title: "Mazo: Confirmación", desc: "Los dones del Espíritu Santo para ser testigos valientes.", cat: "Mazo de cartas", url: "confirmacion.html", icon: "fa-fire-flame-curved" },
    { title: "Mazo: Matrimonio", desc: "Amor, unidad y paciencia para fortalecer la pareja.", cat: "Mazo de cartas", url: "matrimonio.html", icon: "fa-ring" },
    { title: "Mazo: Abrazo de Dios", desc: "Palabras de consuelo para momentos de tristeza y dolor.", cat: "Mazo de cartas", url: "abrazo.html", icon: "fa-hands-holding-child" },
    { title: "Mazo: Sabiduría", desc: "El legado de los Santos para iluminar decisiones diarias.", cat: "Mazo de cartas", url: "sabiduria.html", icon: "fa-feather-pointed" },
    { title: "Mazo: Servidores", desc: "Aliento y humildad para quienes sirven en la Capilla.", cat: "Mazo de cartas", url: "servidores.html", icon: "fa-hands-praying" },
    { title: "Mazo: Hermana Tierra", desc: "Reflexiones sobre el cuidado de la creación y la casa común.", cat: "Mazo de cartas", url: "ecologia.html", icon: "fa-leaf" },
    { title: "Mazo: Trascendencia", desc: "Mirar hacia lo eterno: la esperanza del cielo.", cat: "Mazo de cartas", url: "trascendencia.html", icon: "fa-infinity" },

    // 12 sabías que
    { title: "Sabías que: Antiguo Testamento", desc: "Adán, el Arca, Moisés y los grandes profetas.", cat: "Sabías que", url: "sq-antiguo.html", icon: "fa-scroll" },
    { title: "Sabías que: Nuevo Testamento", desc: "La vida oculta de Jesús, sus apóstoles y los Evangelios.", cat: "Sabías que", url: "sq-nuevo.html", icon: "fa-book-bible" },
    { title: "Sabías que: Misterios de la Misa", desc: "El significado de los colores, gestos y el altar.", cat: "Sabías que", url: "sq-misa.html", icon: "fa-church" },
    { title: "Sabías que: Sucesores de Pedro", desc: "Secretos del Vaticano, cónclaves y los Papas.", cat: "Sabías que", url: "sq-papas.html", icon: "fa-cross" },
    { title: "Sabías que: Ciencia y Fe", desc: "El Big Bang, curas científicos y la razón que abraza a Dios.", cat: "Sabías que", url: "sq-ciencia.html", icon: "fa-microscope" },
    { title: "Sabías que: La Virgen y los Santos", desc: "Historias de valentía y la patrona Santa Ana.", cat: "Sabías que", url: "sq-santos.html", icon: "fa-star" },
    { title: "Sabías que: Los Sacramentos", desc: "Los 7 canales invisibles de la Gracia.", cat: "Sabías que", url: "sq-sacramentos.html", icon: "fa-droplet" },
    { title: "Sabías que: Palabras con Alma", desc: "¿Qué significa Amén, Aleluya, Iglesia o Biblia?", cat: "Sabías que", url: "sq-palabras.html", icon: "fa-comment-dots" },
    { title: "Sabías que: Arte y Arquitectura", desc: "El lenguaje oculto en catedrales, vitrales y pinturas.", cat: "Sabías que", url: "sq-arte.html", icon: "fa-paint-brush" },
    { title: "Sabías que: Geografía de la Fe", desc: "Los lugares que pisó Jesús y los santuarios del mundo.", cat: "Sabías que", url: "sq-geografia.html", icon: "fa-map-marked-alt" },
    { title: "Sabías que: Milagros y Signos", desc: "Sucesos eucarísticos, curaciones y fenómenos que desafían la lógica.", cat: "Sabías que", url: "q-milagros.html", icon: "fa-star-of-life" },
    { title: "Sabías que: Nuestras Tradiciones", desc: "El origen del pesebre, el rosario, las procesiones.", cat: "Sabías que", url: "sq-tradiciones.html", icon: "fa-hands-praying" },

    // 6 quizzes
    { title: "Quiz: Descubriendo a Jesús (6 a 7 años)", desc: "Preguntas simples sobre quién creó el mundo y la vida de Jesús.", cat: "Quiz", url: "quiz-6-7.html", icon: "fa-sun" },
    { title: "Quiz: Camino a la Comunión (8 a 9 años)", desc: "La Misa, el Bautismo y los amigos de Dios en la Biblia.", cat: "Quiz", url: "quiz-8-9.html", icon: "fa-bread-slice" },
    { title: "Quiz: Aventura Bíblica (10 a 11 años)", desc: "La historia de la Salvación, mandamientos y profetas.", cat: "Quiz", url: "quiz-10-11.html", icon: "fa-map-marked-alt" },
    { title: "Quiz: Confirmando la Fe (12 a 15 años)", desc: "Dudas comunes, sacramentos y pertenencia.", cat: "Quiz", url: "quiz-12-15.html", icon: "fa-fire" },
    { title: "Quiz: Pensamiento Joven (16 a 18 años)", desc: "Apologética, defensa de la fe y grandes preguntas.", cat: "Quiz", url: "quiz-16-18.html", icon: "fa-shield-alt" },
    { title: "Quiz: Alta Teología (+18 años)", desc: "Desafíos teológicos para adultos.", cat: "Quiz", url: "quiz-18.html", icon: "fa-graduation-cap" },
];
