// ==========================================
// SABIDURÍA CATÓLICA: ORÁCULO DE FE
// ==========================================

const frases = [
    // --- 1. ACEPTACIÓN (Hágase en mí) ---
    { id: "acep-01", texto: "Hágase en mí según tu palabra.", autor: "Virgen María", tags: ["aceptación", "fe", "entrega", "voluntad"], referencia: "Lucas 1:38" },
    { id: "acep-02", texto: "Señor, dame serenidad para aceptar las cosas que no puedo cambiar.", autor: "San Francisco de Asís", tags: ["aceptación", "paz", "serenidad"], referencia: "Oración de la Serenidad" },
    { id: "acep-03", texto: "Solo se puede transformar aquello que se acepta con amor.", autor: "San Agustín", tags: ["aceptación", "cambio", "espíritu"], referencia: "Sermones" },
    { id: "acep-04", texto: "No busques que las cosas sean como quieres, sino acepta que Dios sabe lo que necesitas.", autor: "San Juan de la Cruz", tags: ["aceptación", "confianza", "abandono"], referencia: "Dichos de Luz y Amor" },
    { id: "acep-05", texto: "La paz comienza cuando aceptamos la voluntad de Dios con alegría.", autor: "Santa Teresa de Calcuta", tags: ["aceptación", "paz", "voluntad"], referencia: "Camino de Sencillez" },
    { id: "acep-06", texto: "El que se queja de lo que Dios permite, no sabe lo que es ser hijo de Dios.", autor: "Cura de Ars", tags: ["aceptación", "humildad", "fe"], referencia: "Sermones" },
    { id: "acep-07", texto: "Aceptar la cruz es el primer paso para la Resurrección.", autor: "San Juan Pablo II", tags: ["aceptación", "sufrimiento", "esperanza"], referencia: "Mensajes a los Jóvenes" },
    { id: "acep-08", texto: "Si Dios lo permite, es para un bien mayor aunque ahora no lo veas.", autor: "San Ignacio de Loyola", tags: ["aceptación", "providencia", "discernimiento"], referencia: "Ejercicios Espirituales" },
    { id: "acep-09", texto: "La santidad consiste en aceptar la voluntad de Dios en el momento presente.", autor: "Santa Teresita de Lisieux", tags: ["aceptación", "santidad", "hoy"], referencia: "Historia de un Alma" },
    { id: "acep-10", texto: "Nada sucede sin que Dios lo quiera o lo permita para nuestra salvación.", autor: "San Agustín", tags: ["aceptación", "salvación", "providencia"], referencia: "La Ciudad de Dios" },

    // --- 2. ADICCIONES (Libertad de los hijos de Dios) ---
    { id: "adic-01", texto: "Todo me es lícito, pero no todo me conviene; no me dejaré dominar por nada.", autor: "San Pablo", tags: ["adicciones", "libertad", "autocontrol"], referencia: "1 Corintios 6:12" },
    { id: "adic-02", texto: "La adicción es el intento de llenar un vacío infinito con cosas finitas.", autor: "Santo Tomás de Aquino", tags: ["adicciones", "vacío", "deseo", "dios"], referencia: "Suma Teológica" },
    { id: "adic-03", texto: "El pecado es una esclavitud; la Verdad es la única que nos hace libres.", autor: "Jesús", tags: ["adicciones", "libertad", "verdad"], referencia: "Juan 8:32" },
    { id: "adic-04", texto: "La cadena que nos ata al vicio es, al principio, demasiado ligera para ser sentida.", autor: "San Juan Bosco", tags: ["adicciones", "vicio", "prevención"], referencia: "Instrucciones" },
    { id: "adic-05", texto: "Donde hay un apego desordenado, no puede habitar el Espíritu Santo con libertad.", autor: "San Juan de la Cruz", tags: ["adicciones", "apego", "espíritu"], referencia: "Subida al Monte Carmelo" },
    { id: "adic-06", texto: "El vicio engaña con una falsa apariencia de felicidad.", autor: "San Agustín", tags: ["adicciones", "mentira", "felicidad"], referencia: "Confesiones" },
    { id: "adic-07", texto: "La verdadera libertad consiste en ser dueños de nosotros mismos para darnos a los demás.", autor: "San Juan Pablo II", tags: ["adicciones", "libertad", "servicio"], referencia: "Redemptor Hominis" },
    { id: "adic-08", texto: "Señor, sácame de esta red que me han tendido, porque tú eres mi refugio.", autor: "Salmos", tags: ["adicciones", "ayuda", "refugio"], referencia: "Salmo 31:4" },
    { id: "adic-09", texto: "Nadie puede servir a dos señores; o amas a Dios o amas al mundo.", autor: "Jesús", tags: ["adicciones", "prioridades", "idolatría"], referencia: "Mateo 6:24" },
    { id: "adic-10", texto: "La templanza es la virtud que nos devuelve el señorío sobre nuestras pasiones.", autor: "Catecismo de la Iglesia", tags: ["adicciones", "virtud", "autocontrol"], referencia: "CIC 1809" },

    // --- 3. AMISTAD (Caridad entre hermanos) ---
    { id: "amis-01", texto: "Un amigo fiel es un refugio seguro; quien lo encuentra, encuentra un tesoro.", autor: "Eclesiástico", tags: ["amistad", "tesoro", "lealtad"], referencia: "Eclesiástico 6:14" },
    { id: "amis-02", texto: "Nadie tiene mayor amor que el que da la vida por sus amigos.", autor: "Jesús", tags: ["amistad", "amor", "sacrificio"], referencia: "Juan 15:13" },
    { id: "amis-03", texto: "La amistad duplica las alegrías y divide las angustias por la mitad.", autor: "San Francisco de Sales", tags: ["amistad", "alegría", "consuelo"], referencia: "Filotea" },
    { id: "amis-04", texto: "El amigo ama en todo tiempo; es un hermano en la adversidad.", autor: "Proverbios", tags: ["amistad", "hermandad", "crisis"], referencia: "Proverbios 17:17" },
    { id: "amis-05", texto: "La amistad que tiene su fuente en Dios no se agota jamás.", autor: "Santa Teresa de Ávila", tags: ["amistad", "dios", "eternidad"], referencia: "Cartas" },
    { id: "amis-06", texto: "Dichoso el hombre que tiene amigos, pero más dichoso el que tiene a Dios por amigo.", autor: "San Agustín", tags: ["amistad", "dios", "felicidad"], referencia: "Soliloquios" },
    { id: "amis-07", texto: "La amistad es un camino hacia la santidad compartido entre dos almas.", autor: "San Juan Bosco", tags: ["amistad", "santidad", "camino"], referencia: "Dichos" },
    { id: "amis-08", texto: "Buscad amigos que os lleven a Dios, no que os alejen de Él.", autor: "San Felipe Neri", tags: ["amistad", "guía", "fe"], referencia: "Máximas" },
    { id: "amis-09", texto: "En la caridad no hay extraños, solo amigos que aún no conocemos.", autor: "San Vicente de Paúl", tags: ["amistad", "caridad", "prójimo"], referencia: "Conferencias" },
    { id: "amis-10", texto: "Ama a tu amigo en Dios y a tu enemigo por Dios.", autor: "San Agustín", tags: ["amistad", "amor", "enemigos"], referencia: "La Caridad" },

    // --- 4. AMOR (Caridad Divina) ---
    { id: "amor-01", texto: "El amor es paciente, es servicial; el amor no tiene envidia, no es jactancioso.", autor: "San Pablo", tags: ["amor", "virtud", "caridad"], referencia: "1 Corintios 13" },
    { id: "amor-02", texto: "Al atardecer de la vida, nos examinarán en el amor.", autor: "San Juan de la Cruz", tags: ["amor", "juicio", "eternidad"], referencia: "Dichos de Luz y Amor" },
    { id: "amor-03", texto: "La medida del amor es amar sin medida.", autor: "San Agustín", tags: ["amor", "entrega", "infinito"], referencia: "Sermones" },
    { id: "amor-04", texto: "Quien no ama a su hermano a quien ve, no puede amar a Dios a quien no ve.", autor: "San Juan", tags: ["amor", "prójimo", "dios"], referencia: "1 Juan 4:20" },
    { id: "amor-05", texto: "Donde no hay amor, pon amor y sacarás amor.", autor: "San Juan de la Cruz", tags: ["amor", "servicio", "misión"], referencia: "Cartas" },
    { id: "amor-06", texto: "El amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo.", autor: "San Pablo", tags: ["amor", "dios", "espíritu"], referencia: "Romanos 5:5" },
    { id: "amor-07", texto: "Haz las cosas ordinarias con un amor extraordinario.", autor: "Santa Teresa de Calcuta", tags: ["amor", "humildad", "sencillez"], referencia: "Reflexiones" },
    { id: "amor-08", texto: "Dios es amor; el que permanece en el amor, permanece en Dios.", autor: "San Juan", tags: ["amor", "dios", "comunión"], referencia: "1 Juan 4:16" },
    { id: "amor-09", texto: "Si hablo lenguas humanas pero no tengo amor, no soy más que una campana que resuena.", autor: "San Pablo", tags: ["amor", "caridad", "verdad"], referencia: "1 Corintios 13" },
    { id: "amor-10", texto: "El amor es la única moneda que no pierde valor cuando se regala.", autor: "San Juan Pablo II", tags: ["amor", "generosidad", "riqueza"], referencia: "Mensajes" },

    // --- 5. ANGUSTIA (Consuelo del Señor) ---
    { id: "angu-01", texto: "Venid a mí los que estáis cansados y angustiados, que yo os haré descansar.", autor: "Jesús", tags: ["angustia", "descanso", "paz"], referencia: "Mateo 11:28" },
    { id: "angu-02", texto: "En mi angustia busqué al Señor, y Él me respondió.", autor: "Salmos", tags: ["angustia", "oración", "esperanza"], referencia: "Salmo 34:4" },
    { id: "angu-03", texto: "No se inquiete vuestro corazón; creed en Dios y creed también en mí.", autor: "Jesús", tags: ["angustia", "paz", "fe"], referencia: "Juan 14:1" },
    { id: "angu-04", texto: "Tened paciencia en la angustia, que la tribulación produce esperanza.", autor: "San Pablo", tags: ["angustia", "paciencia", "esperanza"], referencia: "Romanos 5:3" },
    { id: "angu-05", texto: "Señor, de lo profundo a Ti grito; escucha mi voz en mi angustia.", autor: "Salmos", tags: ["angustia", "grito", "oración"], referencia: "Salmo 130" },
    { id: "angu-06", texto: "La angustia es el nudo que Dios utiliza para atraernos hacia Su Corazón.", autor: "San Francisco de Sales", tags: ["angustia", "dios", "misericordia"], referencia: "Cartas" },
    { id: "angu-07", texto: "En el mundo tendréis angustias; pero tened valor: Yo he vencido al mundo.", autor: "Jesús", tags: ["angustia", "valentía", "victoria"], referencia: "Juan 16:33" },
    { id: "angu-08", texto: "Echa sobre el Señor tu carga y tu angustia, y Él te sustentará.", autor: "Salmos", tags: ["angustia", "confianza", "fortaleza"], referencia: "Salmo 55:22" },
    { id: "angu-09", texto: "Nada te turbe; Dios no se muda, la paciencia todo lo alcanza.", autor: "Santa Teresa de Ávila", tags: ["angustia", "paz", "paciencia"], referencia: "Nada te turbe" },
    { id: "angu-10", texto: "Cuando la angustia crecía en mi interior, tus consuelos alegraban mi alma.", autor: "Salmos", tags: ["angustia", "consuelo", "alegría"], referencia: "Salmo 94:19" },
// --- 6. ANSIEDAD (Confianza en la Providencia) ---
    { id: "ansi-01", texto: "No se inquieten por el mañana; el mañana se inquietará por sí mismo. Basta a cada día su propio afán.", autor: "Jesús", tags: ["ansiedad", "futuro", "hoy", "paz"], referencia: "Mateo 6:34" },
    { id: "ansi-02", texto: "Nada te turbe, nada te espante, todo se pasa, Dios no se muda.", autor: "Santa Teresa de Ávila", tags: ["ansiedad", "paz", "serenidad", "confianza"], referencia: "Poesías" },
    { id: "ansi-03", texto: "La ansiedad es el mayor enemigo de la devoción, porque divide el corazón.", autor: "San Francisco de Sales", tags: ["ansiedad", "interioridad", "paz"], referencia: "Filotea" },
    { id: "ansi-04", texto: "Humillaos bajo la poderosa mano de Dios, echando toda vuestra ansiedad sobre Él, porque Él cuida de vosotros.", autor: "San Pedro", tags: ["ansiedad", "humildad", "fe"], referencia: "1 Pedro 5:6-7" },
    { id: "ansi-05", texto: "El hombre que sufre antes de que sea necesario, sufre más de lo que Dios pide.", autor: "San Francisco de Sales", tags: ["ansiedad", "sufrimiento", "futuro"], referencia: "Cartas" },
    { id: "ansi-06", texto: "No permitas que la tristeza del mundo ahogue la esperanza que Dios puso en ti.", autor: "San Juan Pablo II", tags: ["ansiedad", "esperanza", "tristeza"], referencia: "Mensajes" },
    { id: "ansi-07", texto: "Encomienda al Señor tu camino, confía en Él y Él actuará.", autor: "Salmos", tags: ["ansiedad", "confianza", "camino"], referencia: "Salmo 37:5" },
    { id: "ansi-08", texto: "La oración es el antídoto contra la inquietud del alma.", autor: "San Juan Crisóstomo", tags: ["ansiedad", "oración", "serenidad"], referencia: "Homilías" },
    { id: "ansi-09", texto: "Quien a Dios tiene, nada le falta: solo Dios basta.", autor: "Santa Teresa de Ávila", tags: ["ansiedad", "dios", "paz"], referencia: "Nada te turbe" },
    { id: "ansi-10", texto: "Descansa en el Señor y espera pacientemente en Él.", autor: "Salmos", tags: ["ansiedad", "descanso", "paciencia"], referencia: "Salmo 37:7" },

    // --- 7. APRENDIZAJE (Crecimiento en la Verdad) ---
    { id: "apre-01", texto: "Aprended de mí, que soy manso y humilde de corazón.", autor: "Jesús", tags: ["aprendizaje", "humildad", "corazón"], referencia: "Mateo 11:29" },
    { id: "apre-02", texto: "Vivir como si fueras a morir mañana; aprender como si fueras a vivir siempre.", autor: "San Juan Bosco", tags: ["aprendizaje", "vida", "sabiduría"], referencia: "Dichos" },
    { id: "apre-03", texto: "La fe busca entender; el aprendizaje es el camino hacia esa luz.", autor: "San Anselmo", tags: ["aprendizaje", "fe", "intelecto"], referencia: "Proslogion" },
    { id: "apre-04", texto: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.", autor: "Proverbios", tags: ["aprendizaje", "niños", "educación"], referencia: "Proverbios 22:6" },
    { id: "apre-05", texto: "La verdadera sabiduría consiste en saber que aún nos falta mucho por aprender de Dios.", autor: "San Agustín", tags: ["aprendizaje", "humildad", "sabiduría"], referencia: "Confesiones" },
    { id: "apre-06", texto: "No aprendemos para la escuela, sino para la vida eterna.", autor: "San Juan Bosco", tags: ["aprendizaje", "vida", "propósito"], referencia: "Instrucciones" },
    { id: "apre-07", texto: "Todo lo que se ignora, se desprecia; por eso es necesario conocer para amar.", autor: "San Josemaría Escrivá", tags: ["aprendizaje", "amor", "conocimiento"], referencia: "Camino" },
    { id: "apre-08", texto: "El que deja de aprender, deja de crecer en el espíritu.", autor: "San Clemente de Alejandría", tags: ["aprendizaje", "espíritu", "crecimiento"], referencia: "Stromata" },
    { id: "apre-09", texto: "La educación es cosa del corazón y solo Dios tiene las llaves.", autor: "San Juan Bosco", tags: ["aprendizaje", "educación", "corazón"], referencia: "Cartas" },
    { id: "apre-10", texto: "Danos, Señor, agudeza para entender y capacidad para retener lo que agrada a tu voluntad.", autor: "Santo Tomás de Aquino", tags: ["aprendizaje", "inteligencia", "oración"], referencia: "Oración para antes de estudiar" },

    // --- 8. ARREPIENTIMIENTO (Puerta de la Misericordia) ---
    { id: "arre-01", texto: "Un corazón contrito y humillado, oh Dios, no lo desprecias Tú.", autor: "Salmos", tags: ["arrepentimiento", "humildad", "perdón"], referencia: "Salmo 51" },
    { id: "arre-02", texto: "Dios no se cansa de perdonar; somos nosotros los que nos cansamos de pedir perdón.", autor: "Papa Francisco", tags: ["arrepentimiento", "perdón", "misericordia"], referencia: "Angelus" },
    { id: "arre-03", texto: "Habrá más alegría en el cielo por un solo pecador que se arrepienta.", autor: "Jesús", tags: ["arrepentimiento", "alegría", "cielo"], referencia: "Lucas 15:7" },
    { id: "arre-04", texto: "El arrepentimiento es la puerta que se abre a la paz del alma.", autor: "San Juan Pablo II", tags: ["arrepentimiento", "paz", "esperanza"], referencia: "Reconciliatio et Paenitentia" },
    { id: "arre-05", texto: "No hay pecado tan grande que la misericordia de Dios no pueda borrar con una lágrima de arrepentimiento.", autor: "San Juan Crisóstomo", tags: ["arrepentimiento", "misericordia", "pecado"], referencia: "Homilías" },
    { id: "arre-06", texto: "El arrepentimiento verdadero es cambiar la dirección de nuestra vida hacia Dios.", autor: "San Agustín", tags: ["arrepentimiento", "cambio", "conversión"], referencia: "Sermones" },
    { id: "arre-07", texto: "Nunca es tarde para volver al Padre si el corazón es sincero.", autor: "San Juan Bosco", tags: ["arrepentimiento", "esperanza", "padre"], referencia: "Dichos" },
    { id: "arre-08", texto: "La confesión es el baño del alma; hay que ir a menudo.", autor: "San Pío de Pietrelcina", tags: ["arrepentimiento", "confesión", "sanación"], referencia: "Cartas" },
    { id: "arre-09", texto: "Señor, ten piedad de mí, que soy un pecador.", autor: "Evangelio", tags: ["arrepentimiento", "humildad", "piedad"], referencia: "Lucas 18:13" },
    { id: "arre-10", texto: "El arrepentimiento nos devuelve la dignidad de hijos de Dios.", autor: "San Juan Pablo II", tags: ["arrepentimiento", "dignidad", "hijos"], referencia: "Parábola del Hijo Pródigo" },

    // --- 9. ARTE (Reflejo de la Belleza Divina) ---
    { id: "arte-01", texto: "El arte es una ventana abierta al infinito.", autor: "San Juan Pablo II", tags: ["arte", "trascendencia", "belleza"], referencia: "Carta a los artistas" },
    { id: "arte-02", texto: "Toda obra de arte es un eco de la creación de Dios.", autor: "Fray Angélico", tags: ["arte", "creación", "dios"], referencia: "Tratados" },
    { id: "arte-03", texto: "La belleza salvará al mundo.", autor: "F. Dostoievski", tags: ["arte", "belleza", "mundo", "esperanza"], referencia: "El Idiota" },
    { id: "arte-04", texto: "Cantar es orar dos veces.", autor: "San Agustín", tags: ["arte", "música", "oración"], referencia: "Tratados" },
    { id: "arte-05", texto: "El artista es un colaborador de Dios en la belleza del mundo.", autor: "Benedicto XVI", tags: ["arte", "colaboración", "belleza"], referencia: "Encuentro con artistas" },
    { id: "arte-06", texto: "La fe necesita del arte para hacerse visible al corazón humano.", autor: "San Juan Pablo II", tags: ["arte", "fe", "corazón"], referencia: "Carta a los artistas" },
    { id: "arte-07", texto: "La creatividad es un don de Dios puesto al servicio del bien común.", autor: "San Josemaría Escrivá", tags: ["arte", "creatividad", "servicio"], referencia: "Surco" },
    { id: "arte-08", texto: "El arte sacro debe conducir el alma de lo visible a lo invisible.", autor: "San Juan Damasceno", tags: ["arte", "espíritu", "misterio"], referencia: "Tratado sobre las imágenes" },
    { id: "arte-09", texto: "No pintes solo para los ojos, pinta para el alma que busca la luz.", autor: "Beato Angélico", tags: ["arte", "luz", "alma"], referencia: "Reflexiones" },
    { id: "arte-10", texto: "La belleza es el esplendor de la verdad.", autor: "Santo Tomás de Aquino", tags: ["arte", "belleza", "verdad"], referencia: "Suma Teológica" },

    // --- 10. AUTOCONOCIMIENTO (Interioridad) ---
    { id: "auto-01", texto: "Conócete, acéptate, supérate en Dios.", autor: "San Agustín", tags: ["autoconocimiento", "aceptación", "superación"], referencia: "Confesiones" },
    { id: "auto-02", texto: "Entra en ti mismo; la verdad habita en el hombre interior.", autor: "San Agustín", tags: ["autoconocimiento", "interioridad", "verdad"], referencia: "De vera religione" },
    { id: "auto-03", texto: "La humildad es la verdad de lo que somos ante Dios.", autor: "Santa Teresa de Ávila", tags: ["autoconocimiento", "humildad", "verdad"], referencia: "Moradas" },
    { id: "auto-04", texto: "Quien se conoce a sí mismo, reconoce la grandeza de Dios en su pequeñez.", autor: "Santa Catalina de Siena", tags: ["autoconocimiento", "pequeñez", "grandeza"], referencia: "El Diálogo" },
    { id: "auto-05", texto: "No podemos amar a Dios si no conocemos nuestra propia alma.", autor: "San Bernardo de Claraval", tags: ["autoconocimiento", "alma", "amor"], referencia: "Tratados" },
    { id: "auto-06", texto: "La mayor victoria es la victoria sobre las propias pasiones.", autor: "San Ignacio de Loyola", tags: ["autoconocimiento", "victoria", "voluntad"], referencia: "Ejercicios Espirituales" },
    { id: "auto-07", texto: "Busca en tu interior la imagen de Dios que ha sido grabada en ti.", autor: "San Agustín", tags: ["autoconocimiento", "imagen", "dios"], referencia: "Sermones" },
    { id: "auto-08", texto: "Señor, que me conozca y que te conozca.", autor: "San Agustín", tags: ["autoconocimiento", "oración", "dios"], referencia: "Soliloquios" },
    { id: "auto-09", texto: "El conocimiento de uno mismo es el primer peldaño de la escalera hacia el cielo.", autor: "San Juan Crisóstomo", tags: ["autoconocimiento", "cielo", "sabiduría"], referencia: "Homilías" },
    { id: "auto-10", texto: "Mira en tu corazón; allí donde Dios te habla en el silencio.", autor: "San Juan de la Cruz", tags: ["autoconocimiento", "corazón", "silencio"], referencia: "Cántico Espiritual" },

// --- 11. AUTOESTIMA (Dignidad de Hijo de Dios) ---
    { id: "autoest-01", texto: "Te doy gracias, Señor, porque soy una obra prodigiosa; tus obras son maravillosas.", autor: "Salmos", tags: ["autoestima", "dignidad", "creación"], referencia: "Salmo 139:14" },
    { id: "autoest-02", texto: "Eres precioso a mis ojos, eres digno de honra y yo te amo.", autor: "Dios (Isaías)", tags: ["autoestima", "amor", "dignidad"], referencia: "Isaías 43:4" },
    { id: "autoest-03", texto: "Cristo no te pregunta por tu pasado, sino por tu amor.", autor: "San Juan Pablo II", tags: ["autoestima", "pasado", "amor", "perdón"], referencia: "Discursos" },
    { id: "autoest-04", texto: "El hombre vale lo que vale su corazón ante Dios.", autor: "San Juan María Vianney", tags: ["autoestima", "corazón", "identidad"], referencia: "Sermones" },
    { id: "autoest-05", texto: "Nadie es un error; cada uno de nosotros es el fruto de un pensamiento de Dios.", autor: "Benedicto XVI", tags: ["autoestima", "propósito", "creación"], referencia: "Homilía de inicio" },
    { id: "autoest-06", texto: "No te midas por lo que el mundo dice de ti, sino por lo que Dios sueña para ti.", autor: "San Juan Bosco", tags: ["autoestima", "identidad", "mundo"], referencia: "Instrucciones" },
    { id: "autoest-07", texto: "Señor, que me vea como Tú me ves.", autor: "Santa Teresita de Lisieux", tags: ["autoestima", "visión", "identidad"], referencia: "Oraciones" },
    { id: "autoest-08", texto: "La verdadera dignidad consiste en ser hijos de Dios y vivir como tales.", autor: "San León Magno", tags: ["autoestima", "dignidad", "hijos"], referencia: "Sermones" },
    { id: "autoest-09", texto: "Tu valor no está en lo que tienes, sino en lo que eres por gracia de Dios.", autor: "San Agustín", tags: ["autoestima", "gracia", "identidad"], referencia: "Tratados" },
    { id: "autoest-10", texto: "Eres templo del Espíritu Santo; no desprecies la morada de Dios.", autor: "San Pablo", tags: ["autoestima", "cuerpo", "espíritu"], referencia: "1 Corintios 6:19" },

    // --- 12. AVARICIA (Libertad frente al dinero) ---
    { id: "avar-01", texto: "Donde está tu tesoro, allí estará también tu corazón.", autor: "Jesús", tags: ["avaricia", "tesoro", "corazón", "dinero"], referencia: "Mateo 6:21" },
    { id: "avar-02", texto: "La raíz de todos los males es el amor al dinero.", autor: "San Pablo", tags: ["avaricia", "dinero", "ética"], referencia: "1 Timoteo 6:10" },
    { id: "avar-03", texto: "El rico no es el que tiene mucho, sino el que da mucho.", autor: "San Juan Crisóstomo", tags: ["avaricia", "riqueza", "generosidad"], referencia: "Homilías" },
    { id: "avar-04", texto: "Tened cuidado con la avaricia; la vida no depende de la abundancia de bienes.", autor: "Jesús", tags: ["avaricia", "vida", "bienes"], referencia: "Lucas 12:15" },
    { id: "avar-05", texto: "Lo que guardas para ti, lo pierdes; lo que das, es lo que realmente posees.", autor: "San Francisco de Asís", tags: ["avaricia", "generosidad", "desapego"], referencia: "Florecillas" },
    { id: "avar-06", texto: "No podéis servir a Dios y al dinero.", autor: "Jesús", tags: ["avaricia", "prioridades", "dios"], referencia: "Mateo 6:24" },
    { id: "avar-07", texto: "La avaricia es una esclavitud del alma disfrazada de seguridad.", autor: "San Agustín", tags: ["avaricia", "libertad", "seguridad"], referencia: "La Ciudad de Dios" },
    { id: "avar-08", texto: "El dinero es un buen siervo, pero un pésimo amo.", autor: "San Francisco de Sales", tags: ["avaricia", "dinero", "dominio"], referencia: "Filotea" },
    { id: "avar-09", texto: "Danos, Señor, el pan de cada día, y líbranos de la sed de poseer.", autor: "Oración Cristiana", tags: ["avaricia", "oración", "sencillez"], referencia: "Tradición" },
    { id: "avar-10", texto: "El que ama el dinero, nunca tiene suficiente; la avaricia es un pozo sin fondo.", autor: "Eclesiastés", tags: ["avaricia", "insatisfacción", "deseo"], referencia: "Eclesiastés 5:9" },

    // --- 13. BELLEZA (El esplendor de la Verdad) ---
    { id: "bell-01", texto: "¡Tarde te amé, Hermosura tan antigua y tan nueva, tarde te amé!", autor: "San Agustín", tags: ["belleza", "amor", "dios"], referencia: "Confesiones" },
    { id: "bell-02", texto: "La belleza es el resplandor de la Verdad.", autor: "Santo Tomás de Aquino", tags: ["belleza", "verdad", "sabiduría"], referencia: "Suma Teológica" },
    { id: "bell-03", texto: "La creación entera habla de la belleza del Creador.", autor: "San Francisco de Asís", tags: ["belleza", "naturaleza", "creación"], referencia: "Cántico de las Criaturas" },
    { id: "bell-04", texto: "La belleza salvará al mundo si es la belleza que brota de la Cruz.", autor: "San Juan Pablo II", tags: ["belleza", "mundo", "esperanza"], referencia: "Carta a los artistas" },
    { id: "bell-05", texto: "Busca la belleza que no marchita: la belleza de un alma en gracia.", autor: "San Juan Crisóstomo", tags: ["belleza", "alma", "gracia"], referencia: "Homilías" },
    { id: "bell-06", texto: "La santidad es la belleza más alta del ser humano.", autor: "Papa Francisco", tags: ["belleza", "santidad", "humanidad"], referencia: "Gaudete et Exsultate" },
    { id: "bell-07", texto: "El arte verdadero nos eleva hacia la Belleza Suprema que es Dios.", autor: "Benedicto XVI", tags: ["belleza", "arte", "trascendencia"], referencia: "Discursos" },
    { id: "bell-08", texto: "No mires lo exterior; la verdadera hermosura habita en el hombre interior.", autor: "San Pablo", tags: ["belleza", "interioridad", "espíritu"], referencia: "2 Corintios 4:16" },
    { id: "bell-09", texto: "Toda belleza terrenal es un camino para llegar a la Belleza Eterna.", autor: "San Juan de la Cruz", tags: ["belleza", "camino", "eternidad"], referencia: "Cántico Espiritual" },
    { id: "bell-10", texto: "La sonrisa de un santo es un rayo de la belleza de Dios en la tierra.", autor: "San Juan Bosco", tags: ["belleza", "alegría", "santidad"], referencia: "Dichos" },

    // --- 14. BIEN COMÚN (La caridad social) ---
    { id: "bcom-01", texto: "Buscad primero el Reino de Dios y su justicia, y todo lo demás se os dará por añadidura.", autor: "Jesús", tags: ["bien común", "justicia", "prioridades"], referencia: "Mateo 6:33" },
    { id: "bcom-02", texto: "La caridad es el alma del bien común.", autor: "San Juan Pablo II", tags: ["bien común", "caridad", "sociedad"], referencia: "Centesimus Annus" },
    { id: "bcom-03", texto: "Nadie es una isla; estamos llamados a vivir en comunidad y servicio.", autor: "San Juan XXIII", tags: ["bien común", "comunidad", "servicio"], referencia: "Pacem in Terris" },
    { id: "bcom-04", texto: "Si quieres la paz, trabaja por la justicia.", autor: "San Pablo VI", tags: ["bien común", "paz", "justicia"], referencia: "Jornada de la Paz" },
    { id: "bcom-05", texto: "El que tiene bienes de este mundo y cierra el corazón a su hermano, ¿cómo puede decir que ama a Dios?", autor: "San Juan", tags: ["bien común", "solidaridad", "amor"], referencia: "1 Juan 3:17" },
    { id: "bcom-06", texto: "El bien de todos es responsabilidad de cada uno.", autor: "San Juan Pablo II", tags: ["bien común", "responsabilidad", "sociedad"], referencia: "Mensajes" },
    { id: "bcom-07", texto: "La política, cuando se orienta al bien común, es una forma eminente de caridad.", autor: "Papa Francisco", tags: ["bien común", "política", "caridad"], referencia: "Fratelli Tutti" },
    { id: "bcom-08", texto: "Haz el bien a todos, pero especialmente a los de la familia de la fe.", autor: "San Pablo", tags: ["bien común", "acción", "fe"], referencia: "Gálatas 6:10" },
    { id: "bcom-09", texto: "No busquéis vuestro propio interés, sino el de los demás.", autor: "San Pablo", tags: ["bien común", "humildad", "servicio"], referencia: "Filipenses 2:4" },
    { id: "bcom-10", texto: "El que no vive para servir, no sirve para vivir.", autor: "Santa Teresa de Calcuta", tags: ["bien común", "servicio", "vida"], referencia: "Dichos" },

    // --- 15. BONDAD (El aroma de Cristo) ---
    { id: "bond-01", texto: "Sé bueno, hijo mío, y la bondad de Dios te acompañará siempre.", autor: "San Juan Bosco", tags: ["bondad", "dios", "vida"], referencia: "Cartas" },
    { id: "bond-02", texto: "La bondad es el lenguaje que los sordos pueden oír y los ciegos pueden ver.", autor: "Sabiduría Cristiana", tags: ["bondad", "lenguaje", "caridad"], referencia: "Tradición" },
    { id: "bond-03", texto: "No te dejes vencer por el mal; antes bien, vence al mal con el bien.", autor: "San Pablo", tags: ["bondad", "paz", "victoria"], referencia: "Romanos 12:21" },
    { id: "bond-04", texto: "La bondad es la llave que abre los corazones más duros.", autor: "San Francisco de Sales", tags: ["bondad", "corazón", "mansedumbre"], referencia: "Filotea" },
    { id: "bond-05", texto: "Gustad y ved qué bueno es el Señor; dichoso el que se refugia en Él.", autor: "Salmos", tags: ["bondad", "dios", "consuelo"], referencia: "Salmo 34:9" },
    { id: "bond-06", texto: "El hombre bueno, del buen tesoro de su corazón, saca lo bueno.", autor: "Jesús", tags: ["bondad", "corazón", "tesoro"], referencia: "Lucas 6:45" },
    { id: "bond-07", texto: "La bondad sin humildad es solo vanidad.", autor: "San Agustín", tags: ["bondad", "humildad", "verdad"], referencia: "Sermones" },
    { id: "bond-08", texto: "Pequeños actos de bondad pueden cambiar el mundo si se hacen con gran amor.", autor: "Santa Teresa de Calcuta", tags: ["bondad", "amor", "acción"], referencia: "Reflexiones" },
    { id: "bond-09", texto: "La bondad de Dios es infinita; confía en ella incluso en la oscuridad.", autor: "Santa Faustina Kowalska", tags: ["bondad", "misericordia", "confianza"], referencia: "Diario" },
    { id: "bond-10", texto: "Que vuestra bondad sea conocida por todos los hombres. El Señor está cerca.", autor: "San Pablo", tags: ["bondad", "testimonio", "presencia"], referencia: "Filipenses 4:5" },


// --- 16. BÚSQUEDA (Inquietud del alma) ---
    { id: "busq-01", texto: "Nos hiciste, Señor, para Ti, y nuestro corazón está inquieto hasta que descanse en Ti.", autor: "San Agustín", tags: ["búsqueda", "corazón", "dios", "paz"], referencia: "Confesiones" },
    { id: "busq-02", texto: "Buscad y hallaréis; llamad y se os abrirá.", autor: "Jesús", tags: ["búsqueda", "fe", "promesa"], referencia: "Mateo 7:7" },
    { id: "busq-03", texto: "Si buscas la verdad, buscas a Dios, aunque no lo sepas.", autor: "Santa Edith Stein", tags: ["búsqueda", "verdad", "dios", "filosofía"], referencia: "Escritos" },
    { id: "busq-04", texto: "Para buscar a Dios es necesario un corazón vacío de todo lo que no es Él.", autor: "San Juan de la Cruz", tags: ["búsqueda", "desapego", "interioridad"], referencia: "Dichos de Luz y Amor" },
    { id: "busq-05", texto: "Buscad al Señor mientras se deja encontrar, llamadlo mientras está cerca.", autor: "Isaías", tags: ["búsqueda", "presencia", "tiempo"], referencia: "Isaías 55:6" },
    { id: "busq-06", texto: "No me buscarías si no me hubieras ya encontrado.", autor: "San Agustín (Inspiración)", tags: ["búsqueda", "gracia", "fe"], referencia: "Confesiones" },
    { id: "busq-07", texto: "La búsqueda de Dios es la búsqueda de la verdadera felicidad.", autor: "San Juan Pablo II", tags: ["búsqueda", "felicidad", "sentido"], referencia: "Mensajes" },
    { id: "busq-08", texto: "El que busca la santidad, busca la plenitud de su propia vida.", autor: "San Josemaría Escrivá", tags: ["búsqueda", "santidad", "plenitud"], referencia: "Amigos de Dios" },
    { id: "busq-09", texto: "Buscad la paz y corred tras ella.", autor: "Salmos", tags: ["búsqueda", "paz", "acción"], referencia: "Salmo 34:15" },
    { id: "busq-10", texto: "Quien busca a Dios con sinceridad, ya posee aquello que busca por la gracia.", autor: "San Bernardo", tags: ["búsqueda", "gracia", "mística"], referencia: "Tratados" },

    // --- 17. CAMBIO (Conversión) ---
    { id: "camb-01", texto: "Convertíos y creed en el Evangelio.", autor: "Jesús", tags: ["cambio", "conversión", "evangelio"], referencia: "Marcos 1:15" },
    { id: "camb-02", texto: "No se cansen de empezar de nuevo cada día; la conversión es tarea de toda la vida.", autor: "San Juan Pablo II", tags: ["cambio", "perseverancia", "conversión"], referencia: "Homilías" },
    { id: "camb-03", texto: "Si quieres cambiar el mundo, primero cambia tu propio corazón.", autor: "San Agustín", tags: ["cambio", "corazón", "mundo"], referencia: "Sermones" },
    { id: "camb-04", texto: "La conversión es pasar de la esclavitud del pecado a la libertad de los hijos de Dios.", autor: "San Juan XXIII", tags: ["cambio", "libertad", "conversión"], referencia: "Encíclicas" },
    { id: "camb-05", texto: "Señor, cámbiame a mí antes de pedirte que cambies a los demás.", autor: "San Francisco de Asís", tags: ["cambio", "humildad", "oración"], referencia: "Oraciones" },
    { id: "camb-06", texto: "Un cambio exterior sin un cambio interior no es más que una máscara.", autor: "Cura de Ars", tags: ["cambio", "interioridad", "verdad"], referencia: "Sermones" },
    { id: "camb-07", texto: "El Espíritu Santo es el único que puede transformar un corazón de piedra en uno de carne.", autor: "Ezequiel", tags: ["cambio", "espíritu", "corazón"], referencia: "Ezequiel 36:26" },
    { id: "camb-08", texto: "La santidad no consiste en no caer, sino en levantarse siempre con la ayuda de la gracia.", autor: "San Juan Bosco", tags: ["cambio", "resiliencia", "gracia"], referencia: "Instrucciones" },
    { id: "camb-09", texto: "No os amoldéis al mundo, sino transformaos mediante la renovación de vuestra mente.", autor: "San Pablo", tags: ["cambio", "mente", "mundo"], referencia: "Romanos 12:2" },
    { id: "camb-10", texto: "Cada santo tiene un pasado y cada pecador tiene un futuro.", autor: "Sabiduría Cristiana", tags: ["cambio", "esperanza", "futuro"], referencia: "Tradición" },

    // --- 18. CARIDAD (Amor en acción) ---
    { id: "cari-01", texto: "Si no tengo caridad, no soy nada.", autor: "San Pablo", tags: ["caridad", "amor", "esencia"], referencia: "1 Corintios 13:2" },
    { id: "cari-02", texto: "La caridad es el centro del Evangelio.", autor: "Benedicto XVI", tags: ["caridad", "evangelio", "iglesia"], referencia: "Deus Caritas Est" },
    { id: "cari-03", texto: "Dar de comer al hambriento es dar de comer a Cristo mismo.", autor: "San Vicente de Paúl", tags: ["caridad", "servicio", "pobreza"], referencia: "Conferencias" },
    { id: "cari-04", texto: "La caridad es paciente, es servicial; todo lo excusa, todo lo soporta.", autor: "San Pablo", tags: ["caridad", "paciencia", "virtud"], referencia: "1 Corintios 13" },
    { id: "cari-05", texto: "Lo que hicisteis con uno de estos mis hermanos más pequeños, conmigo lo hicisteis.", autor: "Jesús", tags: ["caridad", "prójimo", "jesús"], referencia: "Mateo 25:40" },
    { id: "cari-06", texto: "La caridad no conoce fronteras ni distinción de personas.", autor: "San Juan XXIII", tags: ["caridad", "universalidad", "paz"], referencia: "Pacem in Terris" },
    { id: "cari-07", texto: "La caridad comienza por casa, pero no debe terminar allí.", autor: "Santa Teresa de Calcuta", tags: ["caridad", "familia", "misión"], referencia: "Reflexiones" },
    { id: "cari-08", texto: "La fe actúa por la caridad; sin obras, la fe está muerta.", autor: "Santiago", tags: ["caridad", "fe", "obras"], referencia: "Santiago 2:17" },
    { id: "cari-09", texto: "La caridad es la reina de todas las virtudes.", autor: "San Francisco de Sales", tags: ["caridad", "virtud", "perfección"], referencia: "Filotea" },
    { id: "cari-10", texto: "Hacer el bien sin mirar a quién, eso es caridad verdadera.", autor: "San Juan Bosco", tags: ["caridad", "desinterés", "bien"], referencia: "Dichos" },

    // --- 19. CIENCIA (Fe y Razón) ---
    { id: "cien-01", texto: "La fe y la razón son como las dos alas con las cuales el espíritu humano se eleva hacia la verdad.", autor: "San Juan Pablo II", tags: ["ciencia", "razón", "fe", "verdad"], referencia: "Fides et Ratio" },
    { id: "cien-02", texto: "Un poco de ciencia aleja de Dios, pero mucha ciencia devuelve a Él.", autor: "Louis Pasteur", tags: ["ciencia", "dios", "verdad"], referencia: "Reflexiones" },
    { id: "cien-03", texto: "La ciencia humana nos enseña cómo funciona el cielo, pero la fe nos enseña cómo ir al cielo.", autor: "Cardenal Baronio", tags: ["ciencia", "fe", "cielo"], referencia: "Dichos" },
    { id: "cien-04", texto: "La verdad no puede contradecir a la verdad; la ciencia y la fe tienen el mismo Autor.", autor: "León XIII", tags: ["ciencia", "fe", "armonía"], referencia: "Providentissimus Deus" },
    { id: "cien-05", texto: "El universo es un libro escrito por Dios para que el hombre lo estudie y lo admire.", autor: "San Agustín", tags: ["ciencia", "universo", "creación"], referencia: "Sermones" },
    { id: "cien-06", texto: "Entiendo para creer y creo para entender.", autor: "San Agustín", tags: ["ciencia", "intelecto", "fe"], referencia: "Sermones" },
    { id: "cien-07", texto: "La ciencia sin conciencia es la ruina del alma.", autor: "Sabiduría Cristiana", tags: ["ciencia", "ética", "conciencia"], referencia: "Tradición" },
    { id: "cien-08", texto: "El científico humilde reconoce en la ley natural la huella del Creador.", autor: "Benedicto XVI", tags: ["ciencia", "humildad", "creación"], referencia: "Discursos" },
    { id: "cien-09", texto: "La razón es un don de Dios; usarla para investigar la verdad es un acto de alabanza.", autor: "Santo Tomás de Aquino", tags: ["ciencia", "razón", "dios"], referencia: "Suma Teológica" },
    { id: "cien-10", texto: "La fe no teme a la ciencia, la abraza como aliada en la búsqueda de la Verdad.", autor: "San Juan Pablo II", tags: ["ciencia", "fe", "verdad"], referencia: "Fides et Ratio" },

    // --- 20. COMPASIÓN (Corazón con el otro) ---
    { id: "comp-01", texto: "Sed compasivos como vuestro Padre celestial es compasivo.", autor: "Jesús", tags: ["compasión", "misericordia", "dios"], referencia: "Lucas 6:36" },
    { id: "comp-02", texto: "La compasión es el lenguaje del Corazón de Jesús.", autor: "San Juan María Vianney", tags: ["compasión", "jesús", "amor"], referencia: "Sermones" },
    { id: "comp-03", texto: "No pases de largo ante el dolor ajeno; detente y sé compasivo.", autor: "San Juan Pablo II", tags: ["compasión", "dolor", "acción"], referencia: "Salvifici Doloris" },
    { id: "comp-04", texto: "La compasión nos hace hermanos de todos los que sufren.", autor: "Santa Teresa de Calcuta", tags: ["compasión", "sufrimiento", "hermandad"], referencia: "Dichos" },
    { id: "comp-05", texto: "Señor, dame un corazón compasivo que sepa llorar con los que lloran.", autor: "San Francisco de Asís", tags: ["compasión", "empatía", "oración"], referencia: "Oraciones" },
    { id: "comp-06", texto: "La compasión no es lástima, es amor que se involucra en la herida del otro.", autor: "Papa Francisco", tags: ["compasión", "amor", "sanación"], referencia: "Misericordiae Vultus" },
    { id: "comp-07", texto: "Dichosos los compasivos, porque ellos alcanzarán compasión.", autor: "Jesús", tags: ["compasión", "bienaventuranza", "promesa"], referencia: "Mateo 5:7" },
    { id: "comp-08", texto: "La compasión es la forma en que Dios nos mira; debemos mirar así a los demás.", autor: "San Agustín", tags: ["compasión", "visión", "misericordia"], referencia: "Sermones" },
    { id: "comp-09", texto: "La verdadera compasión busca remediar el mal, no solo lamentarlo.", autor: "San Vicente de Paúl", tags: ["compasión", "acción", "caridad"], referencia: "Cartas" },
    { id: "comp-10", texto: "Un gramo de compasión vale más que una tonelada de juicios.", autor: "San Juan Bosco", tags: ["compasión", "juicio", "amor"], referencia: "Instrucciones" },

// --- 21. COMUNIDAD (Cuerpo de Cristo) ---
    { id: "comu-01", texto: "Vosotros sois el cuerpo de Cristo, y miembros cada uno en particular.", autor: "San Pablo", tags: ["comunidad", "iglesia", "unión"], referencia: "1 Corintios 12:27" },
    { id: "comu-02", texto: "Donde dos o tres están reunidos en mi nombre, allí estoy yo en medio de ellos.", autor: "Jesús", tags: ["comunidad", "presencia", "oración"], referencia: "Mateo 18:20" },
    { id: "comu-03", texto: "La Iglesia no es una organización, sino un organismo vivo de amor.", autor: "Benedicto XVI", tags: ["comunidad", "iglesia", "amor"], referencia: "Encíclicas" },
    { id: "comu-04", texto: "Nadie se salva solo; nos salvamos en racimo, como los granos de uva.", autor: "Sabiduría Eclesial", tags: ["comunidad", "salvación", "hermandad"], referencia: "Tradición" },
    { id: "comu-05", texto: "Mirad cómo se aman; esa es la señal de la verdadera comunidad.", autor: "Tertuliano", tags: ["comunidad", "amor", "testimonio"], referencia: "Apologético" },
    { id: "comu-06", texto: "La vida fraterna en comunidad es el anticipo del cielo.", autor: "San Juan Pablo II", tags: ["comunidad", "fraternidad", "cielo"], referencia: "Vita Consecrata" },
    { id: "comu-07", texto: "No hay comunidad verdadera sin el perdón constante entre hermanos.", autor: "San Agustín", tags: ["comunidad", "perdón", "vinculos"], referencia: "Sermones" },
    { id: "comu-08", texto: "Unidos en la oración, perseveraban con un mismo espíritu.", autor: "Hechos de los Apóstoles", tags: ["comunidad", "oración", "espíritu"], referencia: "Hechos 1:14" },
    { id: "comu-09", texto: "La Eucaristía es el centro y la cumbre que hace la comunidad.", autor: "Vaticano II", tags: ["comunidad", "eucaristía", "fe"], referencia: "Lumen Gentium" },
    { id: "comu-10", texto: "Ayudaos mutuamente a llevar vuestras cargas.", autor: "San Pablo", tags: ["comunidad", "servicio", "solidaridad"], referencia: "Gálatas 6:2" },

    // --- 22. CONFIANZA (Abandono en Dios) ---
    { id: "conf-01", texto: "Sagrado Corazón de Jesús, en Vos confío.", autor: "Oración Popular", tags: ["confianza", "jesús", "entrega"], referencia: "Tradición" },
    { id: "conf-02", texto: "El Señor es mi pastor, nada me falta.", autor: "Salmos", tags: ["confianza", "paz", "providencia"], referencia: "Salmo 23" },
    { id: "conf-03", texto: "No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios.", autor: "Dios (Isaías)", tags: ["confianza", "miedo", "presencia"], referencia: "Isaías 41:10" },
    { id: "conf-04", texto: "La confianza en Dios es la llave que abre los tesoros de Su misericordia.", autor: "Santa Faustina Kowalska", tags: ["confianza", "misericordia", "fe"], referencia: "Diario" },
    { id: "conf-05", texto: "Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia.", autor: "Proverbios", tags: ["confianza", "humildad", "guía"], referencia: "Proverbios 3:5" },
    { id: "conf-06", texto: "Quien confía en Dios no será defraudado jamás.", autor: "San Bernardo", tags: ["confianza", "esperanza", "fidelidad"], referencia: "Tratados" },
    { id: "conf-07", texto: "Tened fe en Dios; si decís a este monte: Quítate y arrójate al mar, así se hará.", autor: "Jesús", tags: ["confianza", "fe", "poder"], referencia: "Marcos 11:22" },
    { id: "conf-08", texto: "La medida de nuestra confianza es la medida de lo que recibimos de Dios.", autor: "San Juan de la Cruz", tags: ["confianza", "gracia", "mística"], referencia: "Dichos" },
    { id: "conf-09", texto: "Vivir de confianza es vivir de milagros cotidianos.", autor: "Santa Teresita de Lisieux", tags: ["confianza", "sencillez", "vida"], referencia: "Historia de un Alma" },
    { id: "conf-10", texto: "El que confía en el Señor es como el monte Sión: no tiembla, está asentado para siempre.", autor: "Salmos", tags: ["confianza", "fortaleza", "seguridad"], referencia: "Salmo 125" },

    // --- 23. CONCIENCIA (Santuario del hombre) ---
    { id: "conc-01", texto: "La conciencia es el núcleo más secreto y el sagrario del hombre.", autor: "Vaticano II", tags: ["conciencia", "interioridad", "dignidad"], referencia: "Gaudium et Spes" },
    { id: "conc-02", texto: "Haz siempre lo que dicte tu conciencia, pero asegúrate de que esté iluminada por Dios.", autor: "San Agustín", tags: ["conciencia", "guía", "verdad"], referencia: "Sermones" },
    { id: "conc-03", texto: "Nuestra gloria es esta: el testimonio de nuestra conciencia.", autor: "San Pablo", tags: ["conciencia", "gloria", "verdad"], referencia: "2 Corintios 1:12" },
    { id: "conc-04", texto: "Una conciencia tranquila es la almohada más suave del mundo.", autor: "San Juan Bosco", tags: ["conciencia", "paz", "descanso"], referencia: "Instrucciones" },
    { id: "conc-05", texto: "No vayas contra tu conciencia; es mejor sufrir el mundo que traicionar la verdad.", autor: "Santo Tomás Moro", tags: ["conciencia", "valentía", "integridad"], referencia: "Cartas" },
    { id: "conc-06", texto: "La voz de la conciencia es la voz de Dios en el corazón del hombre.", autor: "Beato John Henry Newman", tags: ["conciencia", "corazón", "dios"], referencia: "Escritos" },
    { id: "conc-07", texto: "El examen de conciencia es el espejo del alma.", autor: "San Ignacio de Loyola", tags: ["conciencia", "autoconocimiento", "alma"], referencia: "Ejercicios Espirituales" },
    { id: "conc-08", texto: "Señor, limpia mi conciencia de toda mancha de egoísmo.", autor: "Oración de los Santos", tags: ["conciencia", "humildad", "oración"], referencia: "Tradición" },
    { id: "conc-09", texto: "La paz interior brota de una conciencia reconciliada con la Verdad.", autor: "San Juan Pablo II", tags: ["conciencia", "paz", "verdad"], referencia: "Discursos" },
    { id: "conc-10", texto: "Si vuestra conciencia no os condena, tenéis plena confianza ante Dios.", autor: "San Juan", tags: ["conciencia", "paz", "fe"], referencia: "1 Juan 3:21" },

    // --- 24. CONSUELO (Alivio del alma) ---
    { id: "cons-01", texto: "Bendito sea Dios, Padre de toda consolación, que nos consuela en todas nuestras luchas.", autor: "San Pablo", tags: ["consuelo", "dios", "alivio"], referencia: "2 Corintios 1:3-4" },
    { id: "cons-02", texto: "No os dejaré huérfanos; volveré a vosotros.", autor: "Jesús", tags: ["consuelo", "promesa", "compañía"], referencia: "Juan 14:18" },
    { id: "cons-03", texto: "Tu vara y tu cayado me dan consuelo.", autor: "Salmos", tags: ["consuelo", "protección", "guía"], referencia: "Salmo 23" },
    { id: "cons-04", texto: "Dios enjugará toda lágrima de sus ojos; ya no habrá llanto ni dolor.", autor: "Apocalipsis", tags: ["consuelo", "esperanza", "eternidad"], referencia: "Apocalipsis 21:4" },
    { id: "cons-05", texto: "El Espíritu Santo es el Consolador perfecto del alma.", autor: "Secuencia de Pentecostés", tags: ["consuelo", "espíritu", "alivio"], referencia: "Veni Sancte Spiritus" },
    { id: "cons-06", texto: "En el Corazón de María encontramos refugio y consuelo para nuestras penas.", autor: "San Bernardo", tags: ["consuelo", "maría", "refugio"], referencia: "Tratados" },
    { id: "cons-07", texto: "Cuando el dolor te abrume, recuerda que Cristo sufre contigo para consolarte.", autor: "San Juan de la Cruz", tags: ["consuelo", "sufrimiento", "unión"], referencia: "Dichos" },
    { id: "cons-08", texto: "Bienaventurados los que lloran, porque ellos serán consolados.", autor: "Jesús", tags: ["consuelo", "promesa", "esperanza"], referencia: "Mateo 5:4" },
    { id: "cons-09", texto: "Busca consolar más que ser consolado.", autor: "San Francisco de Asís", tags: ["consuelo", "generosidad", "servicio"], referencia: "Oración de la Paz" },
    { id: "cons-10", texto: "El mejor consuelo es saber que estamos en las manos de Dios.", autor: "San Juan XXIII", tags: ["consuelo", "abandono", "paz"], referencia: "Diario de un alma" },

    // --- 25. CORAJE (Valentía en la fe) ---
    { id: "cora-01", texto: "¡No tengáis miedo! Abrid de par en par las puertas a Cristo.", autor: "San Juan Pablo II", tags: ["coraje", "valentía", "fe"], referencia: "Inicio de Pontificado" },
    { id: "cora-02", texto: "Sé valiente y esforzado; el Señor tu Dios estará contigo dondequiera que vayas.", autor: "Dios (Josué)", tags: ["coraje", "presencia", "fortaleza"], referencia: "Josué 1:9" },
    { id: "cora-03", texto: "En el mundo tendréis angustias, pero tened valor: Yo he vencido al mundo.", autor: "Jesús", tags: ["coraje", "victoria", "esperanza"], referencia: "Juan 16:33" },
    { id: "cora-04", texto: "Prefiero morir antes que pecar; ese es el verdadero coraje.", autor: "San Domingo Savio", tags: ["coraje", "integridad", "santidad"], referencia: "Vida" },
    { id: "cora-05", texto: "El coraje cristiano no es la falta de miedo, sino la confianza en Dios a pesar del miedo.", autor: "Benedicto XVI", tags: ["coraje", "miedo", "confianza"], referencia: "Discursos" },
    { id: "cora-06", texto: "Sed hombres de fe; el que cree no tiene miedo.", autor: "San Juan Bosco", tags: ["coraje", "fe", "seguridad"], referencia: "Dichos" },
    { id: "cora-07", texto: "El Señor es mi luz y mi salvación, ¿a quién temeré?", autor: "Salmos", tags: ["coraje", "protección", "seguridad"], referencia: "Salmo 27:1" },
    { id: "cora-08", texto: "La fortaleza es el coraje de los hijos de Dios ante la adversidad.", autor: "Santo Tomás de Aquino", tags: ["coraje", "fortaleza", "virtud"], referencia: "Suma Teológica" },
    { id: "cora-09", texto: "Vale más un gramo de coraje en la fe que una tonelada de palabras vacías.", autor: "San Pío de Pietrelcina", tags: ["coraje", "acción", "fe"], referencia: "Cartas" },
    { id: "cora-10", texto: "Si Dios está con nosotros, ¿quién contra nosotros?", autor: "San Pablo", tags: ["coraje", "seguridad", "victoria"], referencia: "Romanos 8:31" },

// --- 26. CUERPO (Templo del Espíritu) ---
    { id: "cuer-01", texto: "¿No sabéis que vuestro cuerpo es templo del Espíritu Santo?", autor: "San Pablo", tags: ["cuerpo", "espíritu", "respeto", "salud"], referencia: "1 Corintios 6:19" },
    { id: "cuer-02", texto: "El cuerpo es el taller del alma donde el espíritu debe esculpir la santidad.", autor: "San Juan Pablo II", tags: ["cuerpo", "santidad", "alma"], referencia: "Teología del Cuerpo" },
    { id: "cuer-03", texto: "Glorificad a Dios con vuestro cuerpo.", autor: "San Pablo", tags: ["cuerpo", "gloria", "dios"], referencia: "1 Corintios 6:20" },
    { id: "cuer-04", texto: "Cuida el cuerpo como si fueras a vivir siempre, y el alma como si fueras a morir hoy.", autor: "San Agustín", tags: ["cuerpo", "alma", "equilibrio", "autocuidado"], referencia: "Sermones" },
    { id: "cuer-05", texto: "El cuerpo humano es la única procesión que Dios ha querido para Sí mismo.", autor: "San Juan Crisóstomo", tags: ["cuerpo", "dignidad", "presencia"], referencia: "Homilías" },
    { id: "cuer-06", texto: "Por la Encarnación, el cuerpo ha sido elevado a una dignidad divina.", autor: "San Juan Pablo II", tags: ["cuerpo", "encarnación", "dignidad"], referencia: "Catequesis" },
    { id: "cuer-07", texto: "Un cuerpo sano ayuda al alma a servir mejor a Dios.", autor: "San Ignacio de Loyola", tags: ["cuerpo", "salud", "servicio"], referencia: "Ejercicios Espirituales" },
    { id: "cuer-08", texto: "La castidad es el honor del cuerpo y la libertad del corazón.", autor: "San Francisco de Sales", tags: ["cuerpo", "virtud", "libertad"], referencia: "Filotea" },
    { id: "cuer-09", texto: "En mi propia carne veré a Dios.", autor: "Job", tags: ["cuerpo", "resurrección", "esperanza"], referencia: "Job 19:26" },
    { id: "cuer-10", texto: "El cuerpo es el sacramento de la persona; lo visible que manifiesta lo invisible.", autor: "San Juan Pablo II", tags: ["cuerpo", "misterio", "identidad"], referencia: "Teología del Cuerpo" },

    // --- 27. CULPA (Misericordia y Paz) ---
    { id: "culp-01", texto: "Si nuestro corazón nos condena, Dios es más grande que nuestro corazón.", autor: "San Juan", tags: ["culpa", "misericordia", "paz", "psicología"], referencia: "1 Juan 3:20" },
    { id: "culp-02", texto: "No te dejes aplastar por la culpa; Dios borra el pecado y sana la memoria.", autor: "San Juan Pablo II", tags: ["culpa", "sanación", "perdón"], referencia: "Dives in Misericordia" },
    { id: "culp-03", texto: "El demonio nos quita la vergüenza para pecar y nos la devuelve aumentada para que no nos confesemos.", autor: "San Juan Crisóstomo", tags: ["culpa", "confesión", "combate"], referencia: "Homilías" },
    { id: "culp-04", texto: "Señor, no te acuerdes de los pecados de mi juventud ni de mis faltas.", autor: "Salmos", tags: ["culpa", "pasado", "perdón"], referencia: "Salmo 25:7" },
    { id: "culp-05", texto: "La culpa es un peso que solo la Cruz de Cristo puede aligerar.", autor: "San Agustín", tags: ["culpa", "cruz", "alivio"], referencia: "Confesiones" },
    { id: "culp-06", texto: "Donde abundó el pecado, sobreabundó la gracia.", autor: "San Pablo", tags: ["culpa", "gracia", "esperanza"], referencia: "Romanos 5:20" },
    { id: "culp-07", texto: "No mires tus miserias, mira la misericordia de Dios que es un océano sin fondo.", autor: "Santa Faustina Kowalska", tags: ["culpa", "misericordia", "confianza"], referencia: "Diario" },
    { id: "culp-08", texto: "El remordimiento que no lleva a la esperanza es una trampa del enemigo.", autor: "San Francisco de Sales", tags: ["culpa", "esperanza", "paz"], referencia: "Cartas" },
    { id: "culp-09", texto: "Si Dios ya te ha perdonado, ¿quién eres tú para no perdonarte a ti mismo?", autor: "San Agustín", tags: ["culpa", "perdón", "autoestima"], referencia: "Sermones" },
    { id: "culp-10", texto: "Tus pecados son como una gota de agua en el océano de la misericordia divina.", autor: "San Juan María Vianney", tags: ["culpa", "misericordia", "paz"], referencia: "Sermones" },

    // --- 28. DECISIÓN (Discernimiento) ---
    { id: "deci-01", texto: "En tiempos de desolación, nunca hacer mudanza.", autor: "San Ignacio de Loyola", tags: ["decisión", "discernimiento", "crisis", "paciencia"], referencia: "Ejercicios Espirituales" },
    { id: "deci-02", texto: "Examínalo todo y quédate con lo bueno.", autor: "San Pablo", tags: ["decisión", "sabiduría", "verdad"], referencia: "1 Tesalonicenses 5:21" },
    { id: "deci-03", texto: "La paz del corazón es la brújula para saber si una decisión viene de Dios.", autor: "San Francisco de Sales", tags: ["decisión", "paz", "guía"], referencia: "Cartas" },
    { id: "deci-04", texto: "No elijas lo que es más fácil, sino lo que más agrada a Dios.", autor: "San Juan de la Cruz", tags: ["decisión", "voluntad", "santidad"], referencia: "Subida al Monte Carmelo" },
    { id: "deci-05", texto: "El que duda es como la ola del mar, arrastrada por el viento.", autor: "Santiago", tags: ["decisión", "duda", "firmeza"], referencia: "Santiago 1:6" },
    { id: "deci-06", texto: "Señor, enséñame tus caminos y guíame por el sendero de la rectitud.", autor: "Salmos", tags: ["decisión", "guía", "oración"], referencia: "Salmo 27:11" },
    { id: "deci-07", texto: "Antes de decidir, calla y escucha la voz del Espíritu en el silencio.", autor: "San Benito", tags: ["decisión", "silencio", "espíritu"], referencia: "La Regla" },
    { id: "deci-08", texto: "Una decisión sin oración es un salto al vacío sin red.", autor: "Cura de Ars", tags: ["decisión", "oración", "prudencia"], referencia: "Dichos" },
    { id: "deci-09", texto: "La voluntad de Dios es nuestra paz; búscala en cada elección.", autor: "Dante Alighieri", tags: ["decisión", "paz", "voluntad"], referencia: "Divina Comedia" },
    { id: "deci-10", texto: "Para decidir bien, el alma debe estar en equilibrio, como el fiel de una balanza.", autor: "San Ignacio de Loyola", tags: ["decisión", "equilibrio", "libertad"], referencia: "Ejercicios Espirituales" },

    // --- 29. DEPRESIÓN (Noche Oscura y Esperanza) ---
    { id: "depr-01", texto: "El Señor está cerca de los que tienen el corazón roto.", autor: "Salmos", tags: ["depresión", "consuelo", "dolor", "tristeza"], referencia: "Salmo 34:18" },
    { id: "depr-02", texto: "Incluso en la noche más oscura, Dios está trabajando en el silencio de tu alma.", autor: "San Juan de la Cruz", tags: ["depresión", "noche oscura", "fe", "esperanza"], referencia: "Noche Oscura" },
    { id: "depr-03", texto: "Mi alma está triste hasta la muerte; quedaos aquí y velad conmigo.", autor: "Jesús", tags: ["depresión", "tristeza", "compañía", "soledad"], referencia: "Mateo 26:38" },
    { id: "depr-04", texto: "La tristeza según Dios produce un arrepentimiento que lleva a la salvación; la del mundo produce muerte.", autor: "San Pablo", tags: ["depresión", "tristeza", "espíritu"], referencia: "2 Corintios 7:10" },
    { id: "depr-05", texto: "No te entregues a la tristeza, que la alegría del Señor es nuestra fuerza.", autor: "Nehemías", tags: ["depresión", "alegría", "fortaleza"], referencia: "Nehemías 8:10" },
    { id: "depr-06", texto: "Señor, ¿por qué te ocultas en el tiempo de la angustia?", autor: "Salmos", tags: ["depresión", "grito", "ausencia", "oración"], referencia: "Salmo 10:1" },
    { id: "depr-07", texto: "El abatimiento es una tentación; no creas a tus sentimientos cuando estás en la oscuridad.", autor: "San Ignacio de Loyola", tags: ["depresión", "tentación", "discernimiento"], referencia: "Reglas de Discernimiento" },
    { id: "depr-08", texto: "Aunque camine por valles de tinieblas, nada temo porque Tú vas conmigo.", autor: "Salmos", tags: ["depresión", "miedo", "compañía", "fe"], referencia: "Salmo 23" },
    { id: "depr-09", texto: "La esperanza es un ancla echada en la eternidad cuando el mar de la vida está bravo.", autor: "San Agustín", tags: ["depresión", "esperanza", "fortaleza"], referencia: "Sermones" },
    { id: "depr-10", texto: "Dios no nos abandona en el pozo del desánimo; Él baja con nosotros para sacarnos.", autor: "San Juan Pablo II", tags: ["depresión", "presencia", "salvación"], referencia: "Mensajes" },

    // --- 30. DESAPEGO (Libertad del Corazón) ---
    { id: "desa-01", texto: "Para poseerlo todo, no quieras poseer nada en nada.", autor: "San Juan de la Cruz", tags: ["desapego", "libertad", "pobreza", "espíritu"], referencia: "Subida al Monte Carmelo" },
    { id: "desa-02", texto: "Nadie puede servir a dos señores: o amas a Dios o amas a las riquezas.", autor: "Jesús", tags: ["desapego", "prioridades", "dios"], referencia: "Mateo 6:24" },
    { id: "desa-03", texto: "El que no renuncia a todo lo que posee, no puede ser mi discípulo.", autor: "Jesús", tags: ["desapego", "seguimiento", "entrega"], referencia: "Lucas 14:33" },
    { id: "desa-04", texto: "Usa de las cosas de este mundo como si no las usaras.", autor: "San Pablo", tags: ["desapego", "equilibrio", "mundo"], referencia: "1 Corintios 7:31" },
    { id: "desa-05", texto: "El desapego no es no tener nada, sino que nada te tenga a ti.", autor: "San Juan de la Cruz", tags: ["desapego", "libertad", "dominio"], referencia: "Dichos" },
    { id: "desa-06", texto: "Si quieres ser perfecto, vende lo que tienes, dalo a los pobres y sígueme.", autor: "Jesús", tags: ["desapego", "perfección", "caridad"], referencia: "Mateo 19:21" },
    { id: "desa-07", texto: "Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los Cielos.", autor: "Jesús", tags: ["desapego", "humildad", "pobreza", "promesa"], referencia: "Mateo 5:3" },
    { id: "desa-08", texto: "El corazón del hombre es demasiado grande para que lo llenen las cosas pequeñas de la tierra.", autor: "San Agustín", tags: ["desapego", "deseo", "infinito"], referencia: "Confesiones" },
    { id: "desa-09", texto: "Cuanto más vacío de cosas propias esté el alma, más llena de Dios estará.", autor: "San Francisco de Asís", tags: ["desapego", "gracia", "vacío"], referencia: "Florecillas" },
    { id: "desa-10", texto: "El desapego es la llave que abre la puerta de la verdadera alegría.", autor: "San Felipe Neri", tags: ["desapego", "alegría", "libertad"], referencia: "Máximas" },

// --- 31. DESEO (Anhelo de Infinito) ---
    { id: "dese-01", texto: "Nos hiciste, Señor, para Ti, y nuestro corazón está inquieto hasta que descanse en Ti.", autor: "San Agustín", tags: ["deseo", "dios", "inquietud", "paz"], referencia: "Confesiones" },
    { id: "dese-02", texto: "Mi alma tiene sed de Dios, del Dios vivo.", autor: "Salmos", tags: ["deseo", "alma", "sed"], referencia: "Salmo 42:2" },
    { id: "dese-03", texto: "El deseo de Dios está inscrito en el corazón del hombre.", autor: "Catecismo de la Iglesia", tags: ["deseo", "corazón", "identidad"], referencia: "CIC 27" },
    { id: "dese-04", texto: "No te contentes con poco, que Dios te quiere para mucho.", autor: "San Josemaría Escrivá", tags: ["deseo", "grandeza", "santidad"], referencia: "Camino" },
    { id: "dese-05", texto: "Del tamaño de tu deseo será el tamaño de la gracia que Dios te dará.", autor: "San Agustín", tags: ["deseo", "gracia", "esperanza"], referencia: "Sermones" },
    { id: "dese-06", texto: "El alma que anda en amor, ni cansa ni se cansa.", autor: "San Juan de la Cruz", tags: ["deseo", "amor", "fuerza"], referencia: "Dichos de Luz y Amor" },
    { id: "dese-07", texto: "Buscad las cosas de arriba, donde está Cristo.", autor: "San Pablo", tags: ["deseo", "trascendencia", "cielo"], referencia: "Colosenses 3:1" },
    { id: "dese-08", texto: "El hombre es un mendigo de Dios.", autor: "San Agustín", tags: ["deseo", "humildad", "oración"], referencia: "Sermones" },
    { id: "dese-09", texto: "Solo Dios basta.", autor: "Santa Teresa de Ávila", tags: ["deseo", "plenitud", "paz"], referencia: "Nada te turbe" },
    { id: "dese-10", texto: "Tu deseo es tu oración; si el deseo es continuo, la oración es continua.", autor: "San Agustín", tags: ["deseo", "oración", "vida"], referencia: "Tratados sobre los Salmos" },

    // --- 32. DESTINO (Providencia Divina) ---
    { id: "dest-01", texto: "Sabemos que en todas las cosas interviene Dios para bien de los que le aman.", autor: "San Pablo", tags: ["destino", "providencia", "bien", "confianza"], referencia: "Romanos 8:28" },
    { id: "dest-02", texto: "No se cae un pajarillo al suelo sin que vuestro Padre lo permita.", autor: "Jesús", tags: ["destino", "providencia", "cuidado"], referencia: "Mateo 10:29" },
    { id: "dest-03", texto: "Dios escribe derecho sobre renglones torcidos.", autor: "Sabiduría Popular Católica", tags: ["destino", "providencia", "misterio", "esperanza"], referencia: "Tradición" },
    { id: "dest-04", texto: "Nada sucede por azar; todo está bajo la mirada amorosa de Dios.", autor: "San Juan María Vianney", tags: ["destino", "providencia", "paz"], referencia: "Sermones" },
    { id: "dest-05", texto: "Tú tienes contados todos los cabellos de mi cabeza.", autor: "Jesús", tags: ["destino", "providencia", "conocimiento"], referencia: "Lucas 12:7" },
    { id: "dest-06", texto: "Déjate llevar por las manos de Dios; Él sabe el camino mejor que tú.", autor: "San Pío de Pietrelcina", tags: ["destino", "abandono", "guía"], referencia: "Cartas" },
    { id: "dest-07", texto: "La voluntad de Dios es nuestra paz.", autor: "Dante Alighieri", tags: ["destino", "voluntad", "paz"], referencia: "Divina Comedia" },
    { id: "dest-08", texto: "El futuro está en manos de Dios, y no podrían estar en mejor lugar.", autor: "San Juan Pablo II", tags: ["destino", "futuro", "seguridad"], referencia: "Mensajes" },
    { id: "dest-09", texto: "Señor, en tus manos encomiendo mi espíritu.", autor: "Jesús", tags: ["destino", "entrega", "muerte", "vida"], referencia: "Lucas 23:46" },
    { id: "dest-10", texto: "La Providencia es el cuidado amoroso con que Dios guía su creación al fin último.", autor: "Santo Tomás de Aquino", tags: ["destino", "providencia", "fin"], referencia: "Suma Teológica" },

    // --- 33. DIÁLOGO (Encuentro y Verdad) ---
    { id: "dial-01", texto: "Habla, Señor, que tu siervo escucha.", autor: "Samuel", tags: ["diálogo", "escucha", "oración"], referencia: "1 Samuel 3:9" },
    { id: "dial-02", texto: "El diálogo es el camino para la paz entre los hombres.", autor: "San Pablo VI", tags: ["diálogo", "paz", "encuentro"], referencia: "Ecclesiam Suam" },
    { id: "dial-03", texto: "Que vuestra palabra sea siempre con gracia, sazonada con sal.", autor: "San Pablo", tags: ["diálogo", "prudencia", "respeto"], referencia: "Colosenses 4:6" },
    { id: "dial-04", texto: "No se puede dialogar si no se tiene la humildad de reconocer que no poseemos toda la Verdad.", autor: "Papa Francisco", tags: ["diálogo", "humildad", "verdad"], referencia: "Discursos" },
    { id: "dial-05", texto: "La oración es un diálogo de amistad con quien sabemos nos ama.", autor: "Santa Teresa de Ávila", tags: ["diálogo", "oración", "amistad"], referencia: "Libro de la Vida" },
    { id: "dial-06", texto: "Buscad lo que une, no lo que divide.", autor: "San Juan XXIII", tags: ["diálogo", "unión", "paz"], referencia: "Mensajes" },
    { id: "dial-07", texto: "Hablar bien de los demás es la primera forma de caridad en el diálogo.", autor: "San Felipe Neri", tags: ["diálogo", "caridad", "respeto"], referencia: "Máximas" },
    { id: "dial-08", texto: "Un diálogo verdadero requiere tiempo, escucha y silencio.", autor: "Benedicto XVI", tags: ["diálogo", "escucha", "silencio"], referencia: "Mensajes" },
    { id: "dial-09", texto: "Señor, hazme un instrumento de tu paz donde haya discordia.", autor: "San Francisco de Asís", tags: ["diálogo", "paz", "instrumento"], referencia: "Oración de la Paz" },
    { id: "dial-10", texto: "La palabra humana es un puente hacia el misterio de Dios.", autor: "San Agustín", tags: ["diálogo", "palabra", "misterio"], referencia: "Sermones" },

    // --- 34. DIGNIDAD (Imagen de Dios) ---
    { id: "dign-01", texto: "Hagamos al hombre a nuestra imagen y semejanza.", autor: "Dios (Génesis)", tags: ["dignidad", "creación", "identidad"], referencia: "Génesis 1:26" },
    { id: "dign-02", texto: "Reconoce, cristiano, tu dignidad.", autor: "San León Magno", tags: ["dignidad", "identidad", "cristiano"], referencia: "Sermones" },
    { id: "dign-03", texto: "El hombre es el único camino de la Iglesia.", autor: "San Juan Pablo II", tags: ["dignidad", "iglesia", "humanidad"], referencia: "Redemptor Hominis" },
    { id: "dign-04", texto: "La gloria de Dios es que el hombre viva.", autor: "San Ireneo de Lyon", tags: ["dignidad", "vida", "gloria"], referencia: "Adversus Haereses" },
    { id: "dign-05", texto: "Tratad a los demás como queráis que ellos os traten a vosotros.", autor: "Jesús", tags: ["dignidad", "respeto", "justicia"], referencia: "Mateo 7:12" },
    { id: "dign-06", texto: "Nadie puede quitarte tu dignidad de hijo de Dios, ni siquiera tú mismo.", autor: "San Juan Pablo II", tags: ["dignidad", "identidad", "perdón"], referencia: "Discursos" },
    { id: "dign-07", texto: "El pobre es el rostro de Cristo; allí reside su dignidad sagrada.", autor: "San Vicente de Paúl", tags: ["dignidad", "pobreza", "jesús"], referencia: "Conferencias" },
    { id: "dign-08", texto: "Toda vida humana es sagrada desde la concepción hasta su fin natural.", autor: "San Juan Pablo II", tags: ["dignidad", "vida", "ética"], referencia: "Evangelium Vitae" },
    { id: "dign-09", texto: "La libertad es el signo más alto de la dignidad humana.", autor: "Vaticano II", tags: ["dignidad", "libertad", "espíritu"], referencia: "Gaudium et Spes" },
    { id: "dign-10", texto: "No somos algo, somos alguien.", autor: "Papa Francisco", tags: ["dignidad", "identidad", "persona"], referencia: "Laudato Si" },

    // --- 35. DINERO (Uso y Peligro) ---
    { id: "dine-01", texto: "No podéis servir a Dios y al dinero.", autor: "Jesús", tags: ["dinero", "prioridades", "idolatría"], referencia: "Mateo 6:24" },
    { id: "dine-02", texto: "Si el dinero crece, no le deis el corazón.", autor: "Salmos", tags: ["dinero", "corazón", "peligro"], referencia: "Salmo 62:11" },
    { id: "dine-03", texto: "La avaricia es la raíz de todos los males.", autor: "San Pablo", tags: ["dinero", "avaricia", "ética"], referencia: "1 Timoteo 6:10" },
    { id: "dine-04", texto: "El dinero debe servir y no gobernar.", autor: "Papa Francisco", tags: ["dinero", "servicio", "poder"], referencia: "Evangelii Gaudium" },
    { id: "dine-05", texto: "No atesoréis tesoros en la tierra, donde la polilla los roe.", autor: "Jesús", tags: ["dinero", "trascendencia", "desapego"], referencia: "Mateo 6:19" },
    { id: "dine-06", texto: "El dinero es un buen siervo, pero un amo tirano.", autor: "San Francisco de Sales", tags: ["dinero", "libertad", "dominio"], referencia: "Filotea" },
    { id: "dine-07", texto: "Vended lo que tenéis y dadlo en limosna; haceos bolsas que no se gasten.", autor: "Jesús", tags: ["dinero", "generosidad", "limosna"], referencia: "Lucas 12:33" },
    { id: "dine-08", texto: "Lo que el rico tiene de sobra, pertenece de derecho al pobre.", autor: "San Agustín", tags: ["dinero", "justicia", "pobreza"], referencia: "Sermones" },
    { id: "dine-09", texto: "Nadie se lleva un céntimo al otro mundo; solo nos llevamos el amor.", autor: "San Juan Bosco", tags: ["dinero", "muerte", "amor"], referencia: "Instrucciones" },
    { id: "dine-10", texto: "La pobreza de espíritu es la libertad frente a la tiranía del tener.", autor: "San Gregorio Magno", tags: ["dinero", "pobreza", "espíritu"], referencia: "Regla Pastoral" },

// --- 36. DISCERNIMIENTO (Escucha del Espíritu) ---
    { id: "disc-01", texto: "En tiempos de desolación, nunca hacer mudanza.", autor: "San Ignacio de Loyola", tags: ["discernimiento", "decisiones", "crisis", "paciencia"], referencia: "Ejercicios Espirituales" },
    { id: "disc-02", texto: "No creáis a todo espíritu, sino examinad si los espíritus son de Dios.", autor: "San Juan", tags: ["discernimiento", "espíritu", "verdad"], referencia: "1 Juan 4:1" },
    { id: "disc-03", texto: "El discernimiento es la luz que nos permite distinguir el camino de Dios entre tantos senderos.", autor: "San Juan Pablo II", tags: ["discernimiento", "guía", "luz"], referencia: "Discursos" },
    { id: "disc-04", texto: "Señor, dame un corazón que escuche para saber distinguir el bien del mal.", autor: "Salomón", tags: ["discernimiento", "sabiduría", "corazón"], referencia: "1 Reyes 3:9" },
    { id: "disc-05", texto: "Para un buen discernimiento es necesario el silencio, la oración y la humildad.", autor: "Papa Francisco", tags: ["discernimiento", "silencio", "oración"], referencia: "Audiencias" },
    { id: "disc-06", texto: "Donde hay paz, allí está el Espíritu de Dios.", autor: "San Francisco de Sales", tags: ["discernimiento", "paz", "espíritu"], referencia: "Cartas" },
    { id: "disc-07", texto: "La voluntad de Dios no te llevará donde Su gracia no pueda sostenerte.", autor: "Sabiduría Cristiana", tags: ["discernimiento", "voluntad", "gracia"], referencia: "Tradición" },
    { id: "disc-08", texto: "Examínalo todo y quédate con lo bueno.", autor: "San Pablo", tags: ["discernimiento", "sabiduría", "prudencia"], referencia: "1 Tesalonicenses 5:21" },
    { id: "disc-09", texto: "El mal se disfraza a veces de ángel de luz; por sus frutos los conoceréis.", autor: "Jesús", tags: ["discernimiento", "verdad", "frutos"], referencia: "Mateo 7:16" },
    { id: "disc-10", texto: "No te dejes llevar por tus sentimientos impulsivos; espera a que el alma esté calma.", autor: "San Ignacio de Loyola", tags: ["discernimiento", "paz", "emociones"], referencia: "Reglas de los espíritus" },

    // --- 37. DISCIPLINA (Orden y Voluntad) ---
    { id: "disp-01", texto: "El que ama la disciplina, ama el conocimiento.", autor: "Proverbios", tags: ["disciplina", "sabiduría", "voluntad"], referencia: "Proverbios 12:1" },
    { id: "disp-02", texto: "No hay santidad sin renuncia y sin combate espiritual.", autor: "Catecismo de la Iglesia", tags: ["disciplina", "santidad", "combate"], referencia: "CIC 2013" },
    { id: "disp-03", texto: "Disciplino mi cuerpo y lo someto, no sea que después de predicar a otros, yo mismo quede descalificado.", autor: "San Pablo", tags: ["disciplina", "cuerpo", "voluntad"], referencia: "1 Corintios 9:27" },
    { id: "disp-04", texto: "El orden te dará paz y el tiempo te dará frutos.", autor: "San Josemaría Escrivá", tags: ["disciplina", "orden", "paz"], referencia: "Camino" },
    { id: "disp-05", texto: "La disciplina es el puente entre las metas y los logros en la vida espiritual.", autor: "San Juan Bosco", tags: ["disciplina", "metas", "esfuerzo"], referencia: "Instrucciones" },
    { id: "disp-06", texto: "Al principio, ninguna disciplina parece ser causa de gozo, sino de tristeza; pero después da fruto apacible de justicia.", autor: "San Pablo", tags: ["disciplina", "esfuerzo", "justicia"], referencia: "Hebreos 12:11" },
    { id: "disp-07", texto: "Vencerse a sí mismo es la mayor de las victorias.", autor: "San Ignacio de Loyola", tags: ["disciplina", "victoria", "voluntad"], referencia: "Dichos" },
    { id: "disp-08", texto: "La constancia en las cosas pequeñas es la madre de las grandes virtudes.", autor: "San Francisco de Sales", tags: ["disciplina", "constancia", "virtud"], referencia: "Filotea" },
    { id: "disp-09", texto: "El que es fiel en lo poco, también lo es en lo mucho.", autor: "Jesús", tags: ["disciplina", "fidelidad", "responsabilidad"], referencia: "Lucas 16:10" },
    { id: "disp-10", texto: "Sin disciplina, el talento es solo un fuego que se apaga pronto.", autor: "San Juan Bosco", tags: ["disciplina", "talento", "vida"], referencia: "Dichos" },

    // --- 38. DISCRECIÓN (Prudencia y Silencio) ---
    { id: "discr-01", texto: "El que guarda su boca, guarda su alma.", autor: "Proverbios", tags: ["discreción", "prudencia", "silencio"], referencia: "Proverbios 13:3" },
    { id: "discr-02", texto: "No sepa tu mano izquierda lo que hace tu derecha.", autor: "Jesús", tags: ["discreción", "humildad", "caridad"], referencia: "Mateo 6:3" },
    { id: "discr-03", texto: "La discreción es el ornamento de las virtudes.", autor: "San Bernardo", tags: ["discreción", "virtud", "belleza"], referencia: "Tratados" },
    { id: "discr-04", texto: "Habla poco con los hombres y mucho con Dios.", autor: "San Juan de la Cruz", tags: ["discreción", "oración", "silencio"], referencia: "Dichos de Luz y Amor" },
    { id: "discr-05", texto: "El hombre prudente calla lo que sabe hasta el momento oportuno.", autor: "Proverbios", tags: ["discreción", "prudencia", "tiempo"], referencia: "Proverbios 12:23" },
    { id: "discr-06", texto: "La discreción es la madre de la paz y la guardiana de la caridad.", autor: "San Agustín", tags: ["discreción", "paz", "caridad"], referencia: "Sermones" },
    { id: "discr-07", texto: "Guardad vuestros secretos en el Corazón de Jesús.", autor: "Santa Faustina Kowalska", tags: ["discreción", "confianza", "jesús"], referencia: "Diario" },
    { id: "discr-08", texto: "Más daño hace una palabra inoportuna que un silencio prolongado.", autor: "San Francisco de Sales", tags: ["discreción", "palabra", "prudencia"], referencia: "Cartas" },
    { id: "discr-09", texto: "La discreción consiste en saber cuándo hablar y cuándo callar por amor.", autor: "San Ignacio de Loyola", tags: ["discreción", "amor", "prudencia"], referencia: "Ejercicios" },
    { id: "discr-10", texto: "El que revela secretos pierde la confianza; el de espíritu firme sabe callar.", autor: "Proverbios", tags: ["discreción", "confianza", "lealtad"], referencia: "Proverbios 11:13" },

    // --- 39. DOLOR (Sentido del Sufrimiento) ---
    { id: "dolo-01", texto: "El dolor no es un castigo, es un misterio de amor que purifica el alma.", autor: "San Juan de la Cruz", tags: ["dolor", "sufrimiento", "amor", "purificación"], referencia: "Noche Oscura" },
    { id: "dolo-02", texto: "Completamos en nuestra carne lo que falta a la pasión de Cristo.", autor: "San Pablo", tags: ["dolor", "redención", "unión"], referencia: "Colosenses 1:24" },
    { id: "dolo-03", texto: "Dios susurra en nuestros placeres, pero grita en nuestros dolores: es su megáfono para despertar al alma.", autor: "C.S. Lewis", tags: ["dolor", "despertar", "dios"], referencia: "El problema del dolor" },
    { id: "dolo-04", texto: "El dolor pasa, pero el haber sufrido por amor permanece para siempre.", autor: "San Agustín", tags: ["dolor", "amor", "eternidad"], referencia: "Sermones" },
    { id: "dolo-05", texto: "Si llevas tu cruz con alegría, ella misma te llevará a ti.", autor: "Kempis", tags: ["dolor", "cruz", "alegría"], referencia: "Imitación de Cristo" },
    { id: "dolo-06", texto: "El Señor sana a los de corazón quebrantado y venda sus heridas.", autor: "Salmos", tags: ["dolor", "sanación", "consuelo"], referencia: "Salmo 147:3" },
    { id: "dolo-07", texto: "No hay herida que Dios no pueda sanar si se la entregamos con confianza.", autor: "Santa Teresa de Calcuta", tags: ["dolor", "sanación", "entrega"], referencia: "Dichos" },
    { id: "dolo-08", texto: "El dolor es el arado con el que Dios prepara la tierra del alma para la siembra de la gracia.", autor: "San Juan María Vianney", tags: ["dolor", "gracia", "preparación"], referencia: "Sermones" },
    { id: "dolo-09", texto: "En la Cruz está la vida y el consuelo.", autor: "Santa Teresa de Ávila", tags: ["dolor", "cruz", "consuelo"], referencia: "Poesías" },
    { id: "dolo-10", texto: "El que sufre con paciencia, reina con Cristo.", autor: "San Juan Pablo II", tags: ["dolor", "paciencia", "victoria"], referencia: "Salvifici Doloris" },

    // --- 40. DUELO (Esperanza en la Resurrección) ---
    { id: "duel-01", texto: "Yo soy la resurrección y la vida; el que cree en mí, aunque muera, vivirá.", autor: "Jesús", tags: ["duelo", "muerte", "resurrección", "esperanza"], referencia: "Juan 11:25" },
    { id: "duel-02", texto: "La muerte no es el final, sino la entrada en la Vida.", autor: "San Francisco de Asís", tags: ["duelo", "muerte", "vida"], referencia: "Cántico" },
    { id: "duel-03", texto: "No se entristezcan como los que no tienen esperanza.", autor: "San Pablo", tags: ["duelo", "esperanza", "muerte"], referencia: "1 Tesalonicenses 4:13" },
    { id: "duel-04", texto: "Para tus fieles, Señor, la vida no termina, se transforma.", autor: "Prefacio de Difuntos", tags: ["duelo", "transformación", "vida"], referencia: "Misal Romano" },
    { id: "duel-05", texto: "El amor es más fuerte que la muerte.", autor: "Cantar de los Cantares", tags: ["duelo", "amor", "victoria"], referencia: "Cantares 8:6" },
    { id: "duel-06", texto: "Los que siembran entre lágrimas, cosecharán entre canciones.", autor: "Salmos", tags: ["duelo", "esperanza", "alegría"], referencia: "Salmo 126:5" },
    { id: "duel-07", texto: "No perdemos a los que amamos; simplemente nos preceden en el camino al cielo.", autor: "San Agustín", tags: ["duelo", "cielo", "comunión"], referencia: "Cartas" },
    { id: "duel-08", texto: "Dios enjugará toda lágrima de sus ojos.", autor: "Apocalipsis", tags: ["duelo", "consuelo", "promesa"], referencia: "Apocalipsis 21:4" },
    { id: "duel-09", texto: "La muerte es el beso de Dios al alma para llevársela consigo.", autor: "San Juan de la Cruz", tags: ["duelo", "alma", "dios"], referencia: "Llama de amor viva" },
    { id: "duel-10", texto: "En la casa de mi Padre hay muchas moradas; voy a prepararos un lugar.", autor: "Jesús", tags: ["duelo", "cielo", "promesa"], referencia: "Juan 14:2" },

// --- 41. ECOLOGÍA (El cuidado de la Creación - Laudato Si) ---
    { 
        id: "ecol-01", 
        texto: "Alabado seas, mi Señor, por la hermana nuestra madre tierra, la cual nos sustenta, y gobierna y produce diversos frutos con coloridas flores y hierba. Todo lo que ha sido creado es una caricia de Dios.", 
        autor: "San Francisco de Asís", 
        tags: ["ecología", "naturaleza", "creación", "dios"], 
        referencia: "Cántico de las Criaturas" 
    },
    { 
        id: "ecol-02", 
        texto: "El desafío urgente de proteger nuestra casa común incluye la preocupación de unir a toda la familia humana en la búsqueda de un desarrollo sostenible e integral, pues sabemos que las cosas pueden cambiar.", 
        autor: "Papa Francisco", 
        tags: ["ecología", "mundo", "familia", "cambio"], 
        referencia: "Encíclica Laudato Si'" 
    },
    { 
        id: "ecol-03", 
        texto: "La naturaleza es un libro en el cual el Creador nos habla y nos transmite algo de su hermosura y de su verdad. No tenemos dos crisis separadas, una ambiental y otra social, sino una sola y compleja crisis socio-ambiental.", 
        autor: "Papa Francisco", 
        tags: ["ecología", "naturaleza", "verdad", "sociedad"], 
        referencia: "Laudato Si' / Benedicto XVI" 
    },
    { 
        id: "ecol-04", 
        texto: "Contemplar la creación es escuchar un mensaje, un grito paradójico y silencioso. Cada criatura tiene una función y ninguna es superflua. Todo el universo material es un lenguaje del amor de Dios.", 
        autor: "San Juan Pablo II", 
        tags: ["ecología", "universo", "amor", "creación"], 
        referencia: "Catequesis" 
    },
    { 
        id: "ecol-05", 
        texto: "Si quieres cultivar la paz, custodia la creación. El consumo ciego de los recursos naturales es una falta de respeto hacia la obra del Creador y un robo a las generaciones futuras.", 
        autor: "Benedicto XVI", 
        tags: ["ecología", "paz", "justicia", "futuro"], 
        referencia: "Mensaje Jornada de la Paz" 
    },

    // --- 42. EDUCACIÓN (Formar el corazón) ---
    { 
        id: "educ-01", 
        texto: "La educación es cosa del corazón y solo Dios tiene sus llaves. No basta amar a los jóvenes, es preciso que ellos se sientan amados. Sin afecto no hay confianza, y sin confianza no hay educación.", 
        autor: "San Juan Bosco", 
        tags: ["educación", "niños", "amor", "corazón"], 
        referencia: "El Sistema Preventivo" 
    },
    { 
        id: "educ-02", 
        texto: "Instruye al niño en el camino que debe seguir; incluso cuando sea viejo, no se apartará de él. La sabiduría entra en el corazón y el conocimiento será agradable a tu alma.", 
        autor: "Proverbios", 
        tags: ["educación", "niños", "sabiduría", "vida"], 
        referencia: "Proverbios 22:6" 
    },
    { 
        id: "educ-03", 
        texto: "Educar no es llenar un vaso, sino encender un fuego. Es una obra de misericordia que consiste en ayudar a otro a descubrir la verdad que Dios ha puesto en su interior.", 
        autor: "San Agustín (Adapt.)", 
        tags: ["educación", "verdad", "misericordia", "luz"], 
        referencia: "De Magistro" 
    },
    { 
        id: "educ-04", 
        texto: "El objetivo de la educación es la formación de la persona humana en orden a su fin último y, al mismo tiempo, al bien de las sociedades de las que es miembro.", 
        autor: "Vaticano II", 
        tags: ["educación", "sociedad", "propósito", "bien"], 
        referencia: "Gravissimum Educationis" 
    },
    { 
        id: "educ-05", 
        texto: "Maestro, sabemos que eres veraz y que enseñas el camino de Dios con franqueza, sin dejarte influir por nadie, porque no miras la apariencia de los hombres.", 
        autor: "Evangelio", 
        tags: ["educación", "verdad", "maestro", "integridad"], 
        referencia: "Mateo 22:16" 
    },

    // --- 43. EGO (La batalla de la Humildad) ---
    { 
        id: "egoh-01", 
        texto: "La humildad es la verdad. No es otra cosa que andar en verdad delante de Dios, porque es gran verdad que no tenemos cosa buena de nosotros, sino la miseria y el ser nada.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["humildad", "ego", "verdad", "dios"], 
        referencia: "Las Moradas" 
    },
    { 
        id: "egoh-02", 
        texto: "¿Qué tienes que no hayas recibido? Y si lo recibiste, ¿por qué te glorías como si no lo hubieras recibido? El orgullo es el principio de todos los pecados porque aleja al hombre de su Fuente.", 
        autor: "San Pablo / San Agustín", 
        tags: ["ego", "orgullo", "gracia", "humildad"], 
        referencia: "1 Corintios 4:7" 
    },
    { 
        id: "egoh-03", 
        texto: "El hombre es un mendigo de Dios. La humildad no consiste en pensar que somos peores que los demás, sino en pensar menos en nosotros mismos y más en el Amor que nos sostiene.", 
        autor: "San Agustín / Cura de Ars", 
        tags: ["humildad", "ego", "amor", "espíritu"], 
        referencia: "Sermones" 
    },
    { 
        id: "egoh-04", 
        texto: "Si quieres subir, comienza por bajar. ¿Planeas construir un edificio alto de santidad? Piensa primero en el fundamento de la humildad; cuanto más alto sea el edificio, más profundo debe ser el cimiento.", 
        autor: "San Agustín", 
        tags: ["humildad", "santidad", "ego", "fundamento"], 
        referencia: "Sermones" 
    },
    { 
        id: "egoh-05", 
        texto: "Dios resiste a los soberbios y da su gracia a los humildes. Aprended de mí, que soy manso y humilde de corazón, y hallaréis descanso para vuestras almas.", 
        autor: "Santiago / Jesús", 
        tags: ["humildad", "ego", "gracia", "descanso"], 
        referencia: "Mateo 11:29" 
    },

    // --- 44. EJEMPLO (Testimonio de vida) ---
    { 
        id: "ejem-01", 
        texto: "El hombre contemporáneo escucha más a gusto a los que dan testimonio que a los que enseñan, o si escuchan a los que enseñan, es porque dan testimonio.", 
        autor: "San Pablo VI", 
        tags: ["ejemplo", "testimonio", "fe", "verdad"], 
        referencia: "Evangelii Nuntiandi" 
    },
    { 
        id: "ejem-02", 
        texto: "Tened una conducta ejemplar entre los gentiles, para que, en lo mismo que os calumnian como a malhechores, al ver vuestras buenas obras, glorifiquen a Dios.", 
        autor: "San Pedro", 
        tags: ["ejemplo", "obras", "conducta", "gloria"], 
        referencia: "1 Pedro 2:12" 
    },
    { 
        id: "ejem-03", 
        texto: "Predica el Evangelio en todo momento y, si es necesario, usa las palabras. Las palabras conmueven, pero el ejemplo arrastra. Sé luz del mundo por tus actos, no solo por tus discursos.", 
        autor: "San Francisco de Asís (Atrib.)", 
        tags: ["ejemplo", "evangelio", "acción", "luz"], 
        referencia: "Tradición Franciscana" 
    },
    { 
        id: "ejem-04", 
        texto: "Vosotros sois la sal de la tierra. Pero si la sal se vuelve sosa, ¿con qué se la salará? No sirve más que para tirarla fuera y que la pise la gente. Que brille vuestra luz.", 
        autor: "Jesús", 
        tags: ["ejemplo", "misión", "luz", "testimonio"], 
        referencia: "Mateo 5:13" 
    },
    { 
        id: "ejem-05", 
        texto: "No digas a los demás lo que tienen que hacer; hazlo tú primero y ellos verán en tu alegría que el camino es posible. La santidad es el rostro más bello de la Iglesia.", 
        autor: "San Juan Bosco / Papa Francisco", 
        tags: ["ejemplo", "acción", "santidad", "alegría"], 
        referencia: "Gaudete et Exsultate" 
    },

    // --- 45. EMOCIÓN (Afectos y Espíritu) ---
    { 
        id: "emoc-01", 
        texto: "No os dejéis llevar por vuestros sentimientos impulsivos; la paz de Dios que sobrepasa todo entendimiento custodiará vuestros corazones y vuestros pensamientos en Cristo Jesús.", 
        autor: "San Pablo", 
        tags: ["emoción", "paz", "corazón", "autocontrol"], 
        referencia: "Filipenses 4:7" 
    },
    { 
        id: "emoc-02", 
        texto: "Las lágrimas son la sangre del alma. Jesús lloró ante la tumba de Lázaro, mostrándonos que la emoción humana no es contraria a la fe, sino parte de nuestra semejanza con Dios.", 
        autor: "San Agustín / San Juan", 
        tags: ["emoción", "duelo", "humanidad", "fe"], 
        referencia: "Juan 11:35" 
    },
    { 
        id: "emoc-03", 
        texto: "Señor, ordena mis afectos. Que no ame nada que me aleje de Ti, y que aprenda a sentir con Tu Corazón para que mis emociones sean reflejo de Tu misericordia.", 
        autor: "San Ignacio de Loyola", 
        tags: ["emoción", "corazón", "amor", "misericordia"], 
        referencia: "Ejercicios Espirituales" 
    },
    { 
        id: "emoc-04", 
        texto: "La alegría del corazón es la vida del hombre, y el regocijo prolonga sus días. No permitas que la tristeza se apodere de ti, porque la tristeza ha matado a muchos.", 
        autor: "Eclesiástico", 
        tags: ["emoción", "alegría", "tristeza", "vida"], 
        referencia: "Eclesiástico 30:22" 
    },
    { 
        id: "emoc-05", 
        texto: "Sentir no es lo mismo que consentir. Podemos sentir ira o miedo, pero la paz del alma reside en la voluntad que elige permanecer anclada en la roca que es Cristo.", 
        autor: "San Francisco de Sales", 
        tags: ["emoción", "paz", "voluntad", "fortaleza"], 
        referencia: "Tratado del Amor de Dios" 
    },

// --- 46. EMPATÍA (Ver con los ojos de Cristo) ---
    { 
        id: "empa-01", 
        texto: "La empatía cristiana no es solo un sentimiento, es una forma de presencia. Es mirar al otro con los ojos de Cristo, sentir su dolor como propio y reconocer que en cada herida del prójimo está la carne de Jesús que sufre. No podemos amar a un Dios que no vemos si no somos capaces de conmovernos ante el hermano que tenemos al lado.", 
        autor: "Papa Francisco", 
        tags: ["empatía", "prójimo", "amor", "humanidad"], 
        referencia: "Homilías en Santa Marta" 
    },
    { 
        id: "empa-02", 
        texto: "Alegraos con los que se alegran y llorad con los que lloran. Tened la misma estima unos por otros, sin dejaros llevar por la soberbia, sino poniéndoos a la altura de los humildes. No os tengáis por sabios a vuestros propios ojos.", 
        autor: "San Pablo", 
        tags: ["empatía", "humildad", "alegría", "dolor"], 
        referencia: "Romanos 12:15-16" 
    },

    // --- 47. ENFERMEDAD (El valor del sufrimiento) ---
    { 
        id: "enfe-01", 
        texto: "En la enfermedad, el hombre experimenta su propia impotencia, sus límites y su finitud. Toda enfermedad puede hacernos vislumbrar la muerte, pero también puede ser un camino de maduración si nos ayuda a discernir lo que es esencial de lo que no lo es. El enfermo no es una carga, es un tesoro para la Iglesia por su unión con la Pasión de Cristo.", 
        autor: "Catecismo de la Iglesia / San Juan Pablo II", 
        tags: ["enfermedad", "sufrimiento", "fe", "vida"], 
        referencia: "CIC 1500 / Salvifici Doloris" 
    },
    { 
        id: "enfe-02", 
        texto: "No temas a la enfermedad del cuerpo si tu alma está sana. El Señor es el médico de médicos; Él permite la debilidad física para fortalecer la voluntad y enseñarnos que nuestra verdadera salud es la paz con Dios. Acepta tu cruz, y verás que no la llevas tú, sino que ella te sostiene a ti.", 
        autor: "San Padre Pío", 
        tags: ["enfermedad", "sanación", "fortaleza", "fe"], 
        referencia: "Cartas Espirituales" 
    },
    { 
        id: "enfe-03", 
        texto: "Señor, el que amas está enfermo. No te pido la curación, sino que se cumpla en mí tu voluntad, porque sé que incluso en el dolor Tú nos preparas para una alegría que nadie nos podrá quitar.", 
        autor: "Hermanas de Lázaro / San Agustín", 
        tags: ["enfermedad", "voluntad", "entrega", "esperanza"], 
        referencia: "Juan 11:3 / Sermones" 
    },

    // --- 48. ENVIDIA (La carcoma del alma) ---
    { 
        id: "envi-01", 
        texto: "La envidia es la tristeza por el bien ajeno y la alegría por el mal del prójimo. Es un pecado diabólico porque se opone directamente a la caridad. El envidioso se castiga a sí mismo antes de que Dios lo juzgue, porque no puede disfrutar de lo que tiene por estar mirando lo que le falta y el otro posee.", 
        autor: "San Agustín / Santo Tomás de Aquino", 
        tags: ["envidia", "ego", "tristeza", "pecado"], 
        referencia: "Suma Teológica" 
    },
    { 
        id: "envi-02", 
        texto: "Por la envidia del diablo entró la muerte en el mundo. No dejes que este veneno entre en tu corazón; si alguien tiene un don que tú no tienes, dale gracias a Dios, porque ese don ha sido dado para el bien de todos, incluido el tuyo.", 
        autor: "Sabiduría / San Juan Crisóstomo", 
        tags: ["envidia", "muerte", "gratitud", "corazón"], 
        referencia: "Sabiduría 2:24 / Homilías" 
    },

    // --- 49. ESPERANZA (Ancla del alma) ---
    { 
        id: "espe-01", 
        texto: "La esperanza no es un optimismo vacío basado en nuestras fuerzas, sino un ancla echada en el cielo. Ella no nos quita los problemas del presente, pero nos da la certeza de que el final de la historia es la victoria de la Luz. Quien tiene esperanza, vive de otra manera; posee ya una vida nueva que el mundo no puede destruir.", 
        autor: "Benedicto XVI", 
        tags: ["esperanza", "certeza", "fe", "victoria"], 
        referencia: "Spe Salvi" 
    },
    { 
        id: "espe-02", 
        texto: "Aunque la higuera no florezca, ni haya frutos en las vides; aunque falte el producto del olivo y los campos no den alimento, yo me alegraré en el Señor y me gozaré en el Dios de mi salvación. El Señor es mi fortaleza.", 
        autor: "Habacuc", 
        tags: ["esperanza", "fortaleza", "fe", "crisis"], 
        referencia: "Habacuc 3:17-18" 
    },
    { 
        id: "espe-03", 
        texto: "Nunca camines sin esperanza. La esperanza es como la sangre para el cuerpo: si falta, todo se detiene. Es la pequeña hermana de la fe y la caridad que las lleva de la mano hacia la meta eterna.", 
        autor: "Papa Francisco / Charles Péguy", 
        tags: ["esperanza", "vida", "fe", "caridad"], 
        referencia: "Audiencias" 
    },

    // --- 50. ESPÍRITU SANTO (El Dulce Huésped) ---
    { 
        id: "espi-01", 
        texto: "Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu y todo será creado, y renovarás la faz de la tierra. Tú eres el Consolador, el don de Dios Altísimo, fuente viva, fuego, caridad y espiritual unción.", 
        autor: "Secuencia de Pentecostés", 
        tags: ["espíritu", "amor", "fuego", "renovación"], 
        referencia: "Veni Sancte Spiritus" 
    },
    { 
        id: "espi-02", 
        texto: "El Espíritu Santo es el alma de la Iglesia y el Maestro interior que nos enseña a orar. Sin Él, Dios queda lejos, Cristo permanece en el pasado y el Evangelio es letra muerta. Con Él, Cristo resucitado está presente y el mundo es renovado por el soplo de la Vida.", 
        autor: "San Juan Pablo II / Atenágoras I", 
        tags: ["espíritu", "iglesia", "oración", "vida"], 
        referencia: "Dominum et Vivificantem" 
    },
    { 
        id: "espi-03", 
        texto: "No apaguéis el Espíritu. Los frutos del Espíritu son: amor, alegría, paz, paciencia, afabilidad, bondad, fidelidad, mansedumbre y dominio de sí. Contra estas cosas no hay ley. Si vivimos por el Espíritu, dejémonos conducir por Él.", 
        autor: "San Pablo", 
        tags: ["espíritu", "frutos", "virtud", "guía"], 
        referencia: "Gálatas 5:22-25" 
    },

// --- 51. ESFUERZO (Santificación del trabajo y la voluntad) ---
    { 
        id: "esfu-01", 
        texto: "No te canses de hacer el bien, porque a su tiempo cosecharemos si no desmayamos. El Reino de los Cielos sufre violencia, y los esforzados lo arrebatan. Dios no nos pide el éxito, sino el esfuerzo de haberlo intentado con amor.", 
        autor: "San Pablo / Santa Teresa de Calcuta", 
        tags: ["esfuerzo", "trabajo", "perseverancia", "voluntad"], 
        referencia: "Gálatas 6:9 / Mateo 11:12" 
    },
    { 
        id: "esfu-02", 
        texto: "La santidad no consiste en hacer cosas extraordinarias, sino en hacer extraordinariamente bien las cosas ordinarias de cada día por amor a Dios. Pon tu máximo esfuerzo en lo pequeño, y Dios pondrá Su gracia en lo grande.", 
        autor: "San Juan Bosco", 
        tags: ["esfuerzo", "santidad", "rutina", "amor"], 
        referencia: "Instrucciones a los jóvenes" 
    },

    // --- 52. ÉTICA (Vivir en la Verdad) ---
    { 
        id: "etic-01", 
        texto: "La ética cristiana no es una lista de prohibiciones, sino la respuesta de amor a un Dios que nos amó primero. Es mejor sufrir una injusticia que cometerla, porque cometerla daña el alma, mientras que sufrirla con Cristo la purifica.", 
        autor: "Benedicto XVI / San Agustín", 
        tags: ["ética", "verdad", "justicia", "alma"], 
        referencia: "Deus Caritas Est / Sermones" 
    },
    { 
        id: "etic-02", 
        texto: "No sigas a la muchedumbre para hacer el mal. La verdad sigue siendo verdad aunque nadie la crea, y el error sigue siendo error aunque todos lo sigan. Tu brújula debe ser siempre una conciencia iluminada por el Evangelio.", 
        autor: "Éxodo / San Agustín", 
        tags: ["ética", "conciencia", "verdad", "integridad"], 
        referencia: "Éxodo 23:2 / Reflexiones" 
    },

    // --- 53. ÉXITO (La mirada del Cielo) ---
    { 
        id: "exit-01", 
        texto: "¿De qué le sirve al hombre ganar el mundo entero si pierde su alma? El verdadero éxito no se mide por los aplausos de los hombres, sino por la paz que sientes al cerrar los ojos y saber que has cumplido la voluntad del Padre.", 
        autor: "Jesús / San Ignacio de Loyola", 
        tags: ["éxito", "alma", "prioridades", "paz"], 
        referencia: "Mateo 16:26" 
    },
    { 
        id: "exit-02", 
        texto: "El éxito del cristiano es la Cruz. Parece un fracaso a los ojos del mundo, pero es la victoria definitiva sobre la muerte y el pecado. No busques brillar tú, busca que la luz de Dios brille a través de tus obras.", 
        autor: "San Juan Pablo II", 
        tags: ["éxito", "cruz", "victoria", "humildad"], 
        referencia: "Mensajes" 
    },

    // --- 54. FAMILIA (Iglesia doméstica) ---
    { 
        id: "fami-01", 
        texto: "La familia es la base de la sociedad y la primera escuela de las virtudes sociales. Es en el hogar donde se aprende el don del servicio, el valor del perdón y la alegría de compartir el pan y la fe. Que vuestro hogar sea una pequeña Iglesia doméstica.", 
        autor: "San Juan Pablo II / Vaticano II", 
        tags: ["familia", "hogar", "hijos", "amor"], 
        referencia: "Familiaris Consortio" 
    },
    { 
        id: "fami-02", 
        texto: "Esposos, amaos como Cristo amó a Su Iglesia. Padres, no provoquéis a ira a vuestros hijos, sino criadlos en la disciplina y amonestación del Señor. El futuro de la humanidad se fragua en la mesa de cada familia.", 
        autor: "San Pablo / San Juan Pablo II", 
        tags: ["familia", "matrimonio", "padres", "hijos"], 
        referencia: "Efesios 5-6 / Discursos" 
    },
    { 
        id: "fami-03", 
        texto: "Una familia que reza unida, permanece unida. No hay problema por difícil que sea, ni herida por profunda que sea, que el amor familiar bañado por la gracia de Dios no pueda sanar o sobrellevar con esperanza.", 
        autor: "San Juan XXIII / P. Patrick Peyton", 
        tags: ["familia", "oración", "unión", "sanación"], 
        referencia: "Mensajes" 
    },

    // --- 55. FE (Certeza de lo invisible) ---
    { 
        id: "feee-01", 
        texto: "La fe es la garantía de lo que se espera y la prueba de lo que no se ve. No es un sentimiento emocional pasajero, sino un acto de la inteligencia que asiente a la verdad divina movida por la voluntad y la gracia.", 
        autor: "San Pablo / Santo Tomás de Aquino", 
        tags: ["fe", "certeza", "verdad", "gracia"], 
        referencia: "Hebreos 11:1 / Suma Teológica" 
    },
    { 
        id: "feee-02", 
        texto: "La fe no es luz que disipa todas nuestras tinieblas, sino lámpara que guía nuestros pasos en la noche, y lo hace suficiente para el camino. No nos ahorra las dificultades, pero nos da la fuerza para atravesarlas sin perder la alegría.", 
        autor: "Papa Francisco", 
        tags: ["fe", "guía", "luz", "fortaleza"], 
        referencia: "Lumen Fidei" 
    },
    { 
        id: "feee-03", 
        texto: "Creo para entender y entiendo para creer mejor. La fe no es enemiga de la razón, sino su cumplimiento. Sin fe, el hombre camina por el mundo como un ciego que niega la existencia del sol porque no puede verlo con los ojos del cuerpo.", 
        autor: "San Agustín", 
        tags: ["fe", "razón", "sabiduría", "conocimiento"], 
        referencia: "Sermones" 
    },

// --- 51. ESFUERZO (Santificación del trabajo y la voluntad) ---
    { 
        id: "esfu-01", 
        texto: "No te canses de hacer el bien, porque a su tiempo cosecharemos si no desmayamos. El Reino de los Cielos sufre violencia, y los esforzados lo arrebatan. Dios no nos pide el éxito, sino el esfuerzo de haberlo intentado con amor.", 
        autor: "San Pablo / Santa Teresa de Calcuta", 
        tags: ["esfuerzo", "trabajo", "perseverancia", "voluntad"], 
        referencia: "Gálatas 6:9 / Mateo 11:12" 
    },
    { 
        id: "esfu-02", 
        texto: "La santidad no consiste en hacer cosas extraordinarias, sino en hacer extraordinariamente bien las cosas ordinarias de cada día por amor a Dios. Pon tu máximo esfuerzo en lo pequeño, y Dios pondrá Su gracia en lo grande.", 
        autor: "San Juan Bosco", 
        tags: ["esfuerzo", "santidad", "rutina", "amor"], 
        referencia: "Instrucciones a los jóvenes" 
    },

    // --- 52. ÉTICA (Vivir en la Verdad) ---
    { 
        id: "etic-01", 
        texto: "La ética cristiana no es una lista de prohibiciones, sino la respuesta de amor a un Dios que nos amó primero. Es mejor sufrir una injusticia que cometerla, porque cometerla daña el alma, mientras que sufrirla con Cristo la purifica.", 
        autor: "Benedicto XVI / San Agustín", 
        tags: ["ética", "verdad", "justicia", "alma"], 
        referencia: "Deus Caritas Est / Sermones" 
    },
    { 
        id: "etic-02", 
        texto: "No sigas a la muchedumbre para hacer el mal. La verdad sigue siendo verdad aunque nadie la crea, y el error sigue siendo error aunque todos lo sigan. Tu brújula debe ser siempre una conciencia iluminada por el Evangelio.", 
        autor: "Éxodo / San Agustín", 
        tags: ["ética", "conciencia", "verdad", "integridad"], 
        referencia: "Éxodo 23:2 / Reflexiones" 
    },

    // --- 53. ÉXITO (La mirada del Cielo) ---
    { 
        id: "exit-01", 
        texto: "¿De qué le sirve al hombre ganar el mundo entero si pierde su alma? El verdadero éxito no se mide por los aplausos de los hombres, sino por la paz que sientes al cerrar los ojos y saber que has cumplido la voluntad del Padre.", 
        autor: "Jesús / San Ignacio de Loyola", 
        tags: ["éxito", "alma", "prioridades", "paz"], 
        referencia: "Mateo 16:26" 
    },
    { 
        id: "exit-02", 
        texto: "El éxito del cristiano es la Cruz. Parece un fracaso a los ojos del mundo, pero es la victoria definitiva sobre la muerte y el pecado. No busques brillar tú, busca que la luz de Dios brille a través de tus obras.", 
        autor: "San Juan Pablo II", 
        tags: ["éxito", "cruz", "victoria", "humildad"], 
        referencia: "Mensajes" 
    },

    // --- 54. FAMILIA (Iglesia doméstica) ---
    { 
        id: "fami-01", 
        texto: "La familia es la base de la sociedad y la primera escuela de las virtudes sociales. Es en el hogar donde se aprende el don del servicio, el valor del perdón y la alegría de compartir el pan y la fe. Que vuestro hogar sea una pequeña Iglesia doméstica.", 
        autor: "San Juan Pablo II / Vaticano II", 
        tags: ["familia", "hogar", "hijos", "amor"], 
        referencia: "Familiaris Consortio" 
    },
    { 
        id: "fami-02", 
        texto: "Esposos, amaos como Cristo amó a Su Iglesia. Padres, no provoquéis a ira a vuestros hijos, sino criadlos en la disciplina y amonestación del Señor. El futuro de la humanidad se fragua en la mesa de cada familia.", 
        autor: "San Pablo / San Juan Pablo II", 
        tags: ["familia", "matrimonio", "padres", "hijos"], 
        referencia: "Efesios 5-6 / Discursos" 
    },
    { 
        id: "fami-03", 
        texto: "Una familia que reza unida, permanece unida. No hay problema por difícil que sea, ni herida por profunda que sea, que el amor familiar bañado por la gracia de Dios no pueda sanar o sobrellevar con esperanza.", 
        autor: "San Juan XXIII / P. Patrick Peyton", 
        tags: ["familia", "oración", "unión", "sanación"], 
        referencia: "Mensajes" 
    },

    // --- 55. FE (Certeza de lo invisible) ---
    { 
        id: "feee-01", 
        texto: "La fe es la garantía de lo que se espera y la prueba de lo que no se ve. No es un sentimiento emocional pasajero, sino un acto de la inteligencia que asiente a la verdad divina movida por la voluntad y la gracia.", 
        autor: "San Pablo / Santo Tomás de Aquino", 
        tags: ["fe", "certeza", "verdad", "gracia"], 
        referencia: "Hebreos 11:1 / Suma Teológica" 
    },
    { 
        id: "feee-02", 
        texto: "La fe no es luz que disipa todas nuestras tinieblas, sino lámpara que guía nuestros pasos en la noche, y lo hace suficiente para el camino. No nos ahorra las dificultades, pero nos da la fuerza para atravesarlas sin perder la alegría.", 
        autor: "Papa Francisco", 
        tags: ["fe", "guía", "luz", "fortaleza"], 
        referencia: "Lumen Fidei" 
    },
    { 
        id: "feee-03", 
        texto: "Creo para entender y entiendo para creer mejor. La fe no es enemiga de la razón, sino su cumplimiento. Sin fe, el hombre camina por el mundo como un ciego que niega la existencia del sol porque no puede verlo con los ojos del cuerpo.", 
        autor: "San Agustín", 
        tags: ["fe", "razón", "sabiduría", "conocimiento"], 
        referencia: "Sermones" 
    },

// --- 56. FELICIDAD (La Bienaventuranza) ---
    { 
        id: "feli-01", 
        texto: "¿Quieres ser feliz? Busca a Dios, que es la fuente de toda alegría. El hombre fue creado para la felicidad, pero no para una alegría pasajera y superficial, sino para esa plenitud que solo se encuentra en el abrazo del Creador. No busques fuera lo que solo puede brotar de un corazón en paz con su Señor.", 
        autor: "San Agustín", 
        tags: ["felicidad", "dios", "alegría", "paz"], 
        referencia: "Sermones" 
    },
    { 
        id: "feli-02", 
        texto: "La verdadera felicidad no consiste en tener mucho, sino en necesitar poco y en tener el alma llena de Dios. Las bienaventuranzas no son una carga, sino el mapa que Jesús nos dejó para encontrar el tesoro de la alegría eterna en medio de las pruebas del mundo.", 
        autor: "San Juan Pablo II", 
        tags: ["felicidad", "sencillez", "evangelio", "tesoro"], 
        referencia: "Mensajes a los Jóvenes" 
    },

    // --- 57. FIDELIDAD (Permanecer en el Amor) ---
    { 
        id: "fide-01", 
        texto: "Sé fiel hasta la muerte y yo te daré la corona de la vida. La fidelidad no es la ausencia de dificultades, sino la constancia de un amor que ha decidido no retroceder. Es el 'sí' mantenido en el tiempo, especialmente cuando el entusiasmo inicial parece haberse desvanecido.", 
        autor: "Apocalipsis / San Josemaría Escrivá", 
        tags: ["fidelidad", "vida", "amor", "constancia"], 
        referencia: "Apocalipsis 2:10 / Surco" 
    },
    { 
        id: "fide-02", 
        texto: "La fidelidad de Dios es nuestra roca. Aunque nosotros seamos infieles, Él permanece fiel, porque no puede negarse a Sí mismo. Nuestra fidelidad es simplemente la respuesta agradecida a esa Verdad que nos sostiene cada mañana.", 
        autor: "San Pablo", 
        tags: ["fidelidad", "dios", "roca", "confianza"], 
        referencia: "2 Timoteo 2:13" 
    },

    // --- 58. FILOSOFÍA (Razón al servicio de la Fe) ---
    { 
        id: "filo-01", 
        texto: "La filosofía es la sierva de la teología. La razón humana, usada con humildad, es un camino que nos prepara para recibir la luz de la fe. No temas pensar, porque toda verdad, diga quien la diga, viene del Espíritu Santo y nos conduce a la Verdad Suprema.", 
        autor: "Santo Tomás de Aquino / San Justino", 
        tags: ["filosofía", "razón", "fe", "verdad"], 
        referencia: "Suma Teológica" 
    },
    { 
        id: "filo-02", 
        texto: "Una filosofía que no se abre al misterio termina por asfixiar al hombre en su propia finitud. El pensamiento debe ser un ala que, junto con la fe, permita al espíritu humano elevarse hacia la contemplación de lo eterno.", 
        autor: "San Juan Pablo II", 
        tags: ["filosofía", "misterio", "espíritu", "trascendencia"], 
        referencia: "Encíclica Fides et Ratio" 
    },

    // --- 59. FINITUD (Memento Mori y Humildad) ---
    { 
        id: "fini-01", 
        texto: "Recuerda, hombre, que eres polvo y al polvo volverás. Esta conciencia de nuestra finitud no es para darnos tristeza, sino para darnos sabiduría. Sabiendo que nuestros días son breves, aprendemos a no malgastar el tiempo y a invertir nuestra vida en aquello que no se marchita: el amor.", 
        autor: "Génesis / San Agustín", 
        tags: ["finitud", "humildad", "muerte", "sabiduría"], 
        referencia: "Génesis 3:19" 
    },
    { 
        id: "fini-02", 
        texto: "Nuestra vida es como una neblina que aparece por un poco de tiempo y luego se desvanece. Por eso, no pongas tu esperanza en lo que se acaba, sino en Aquel que es el Principio y el Fin. La finitud de la tierra es la puerta de la infinitud del cielo.", 
        autor: "Santiago / San Juan de la Cruz", 
        tags: ["finitud", "esperanza", "vida", "eternidad"], 
        referencia: "Santiago 4:14" 
    },

    // --- 60. FORTALEZA (La virtud de los valientes) ---
    { 
        id: "fort-01", 
        texto: "Todo lo puedo en Cristo que me fortalece. La fortaleza no es la falta de miedo o de cansancio, sino la capacidad del alma de resistir en el bien y de emprender grandes cosas a pesar de la propia debilidad. Es la fuerza que Dios infunde en el corazón que confía en Él.", 
        autor: "San Pablo", 
        tags: ["fortaleza", "fe", "coraje", "resistencia"], 
        referencia: "Filipenses 4:13" 
    },
    { 
        id: "fort-02", 
        texto: "La fortaleza cristiana consiste en ser como la roca que los vientos golpean pero no mueven. Se manifiesta en la paciencia ante la adversidad y en la constancia para cumplir el deber cotidiano por amor. El que es fuerte en Dios, es invencible frente al mundo.", 
        autor: "Santo Tomás de Aquino / San Ignacio de Loyola", 
        tags: ["fortaleza", "paciencia", "constancia", "virtud"], 
        referencia: "Suma Teológica" 
    },

// --- 61. FRACASO (Redención y Nuevo Comienzo) ---
    { 
        id: "frac-01", 
        texto: "El único fracaso verdadero es dejar de intentarlo y alejarse de la misericordia de Dios. Para el cristiano, un tropiezo no es el final, sino una oportunidad para experimentar la gracia del perdón y la fuerza de levantarse. Dios no mira cuántas veces caíste, sino con cuánto amor te pusiste de pie para seguir caminando hacia Él.", 
        autor: "San Juan Pablo II", 
        tags: ["fracaso", "resiliencia", "misericordia", "esperanza"], 
        referencia: "Mensajes a los Jóvenes" 
    },
    { 
        id: "frac-02", 
        texto: "No te desanimes por tus fallos; la santidad consiste en levantarse cada vez que uno cae, con una sonrisa de confianza en el Señor. El fracaso a los ojos del mundo es a menudo una victoria oculta en el Reino de los Cielos, porque nos despoja del orgullo y nos viste de la verdadera humildad que atrae la gracia.", 
        autor: "San Juan Bosco / San Agustín", 
        tags: ["fracaso", "humildad", "santidad", "confianza"], 
        referencia: "Instrucciones" 
    },

    // --- 62. FRATERNIDAD (Todos hermanos) ---
    { 
        id: "frat-01", 
        texto: "La fraternidad es el fundamento de la paz y la justicia. No somos individuos aislados, sino miembros de una sola familia humana bajo la mirada de un mismo Padre. Reconocer al otro como hermano es el primer paso para sanar las heridas del mundo y construir una sociedad donde la caridad sea la ley suprema.", 
        autor: "Papa Francisco", 
        tags: ["fraternidad", "paz", "justicia", "hermandad"], 
        referencia: "Encíclica Fratelli Tutti" 
    },
    { 
        id: "frat-02", 
        texto: "Si quieres amar a Dios a quien no ves, empieza por amar al hermano que tienes a tu lado y a quien sí ves. La fraternidad no es un sentimiento vago, sino el compromiso concreto de cuidar del otro, de llorar con el que llora y de alegrarse con el que progresa, sabiendo que somos un solo Cuerpo en Cristo.", 
        autor: "San Juan / San Pablo", 
        tags: ["fraternidad", "amor", "prójimo", "comunión"], 
        referencia: "1 Juan 4:20" 
    },

    // --- 63. FUTURO (Confianza en el Mañana) ---
    { 
        id: "futu-01", 
        texto: "No os inquietéis por el mañana, porque el mañana traerá su propia inquietud; a cada día le basta su afán. Poner el futuro en manos de Dios es el acto de libertad más grande del hombre, pues nos libera del peso de la ansiedad y nos permite vivir con intensidad y amor el único momento que poseemos: el presente.", 
        autor: "Jesús", 
        tags: ["futuro", "ansiedad", "presente", "confianza"], 
        referencia: "Mateo 6:34" 
    },
    { 
        id: "futu-02", 
        texto: "El futuro pertenece a Dios, y por tanto, es un lugar de esperanza y no de miedo. No trates de adivinar lo que vendrá, sino trata de ser fiel hoy. Si construyes tu presente sobre la roca de la Verdad, el futuro no será una amenaza, sino el despliegue de la gloria de Dios en tu vida.", 
        autor: "San Juan Pablo II / San Agustín", 
        tags: ["futuro", "esperanza", "miedo", "fe"], 
        referencia: "Discursos" 
    },

    // --- 64. GENEROSIDAD (El Don de sí mismo) ---
    { 
        id: "gene-01", 
        texto: "Dios ama al que da con alegría. La generosidad no consiste en dar lo que nos sobra, sino en compartir lo que somos y lo que tenemos, incluso cuando nos cuesta. Al final de la vida, no se nos recordará por lo que acumulamos en nuestras manos, sino por lo que entregamos de corazón a los demás.", 
        autor: "San Pablo / Santa Teresa de Calcuta", 
        tags: ["generosidad", "desprendimiento", "alegría", "amor"], 
        referencia: "2 Corintios 9:7" 
    },
    { 
        id: "gene-02", 
        texto: "Hay más alegría en dar que en recibir. La generosidad ensancha el alma y la hace semejante a Dios, que es el dador de todo bien. Quien cierra su mano a la necesidad del hermano, cierra su corazón a la gracia divina; quien da con generosidad, recibe de Dios una medida rebosante de paz.", 
        autor: "Jesús / San Juan Crisóstomo", 
        tags: ["generosidad", "gracia", "paz", "servicio"], 
        referencia: "Hechos 20:35" 
    },

    // --- 65. GRATITUD (Eucaristía de la Vida) ---
    { 
        id: "grat-01", 
        texto: "Dad gracias a Dios en toda ocasión, porque esta es su voluntad para con vosotros. La gratitud es la memoria del corazón y la puerta de entrada a todos los milagros. Cuando dejamos de quejarnos por lo que nos falta y empezamos a agradecer por lo que tenemos, nuestra visión del mundo se transforma y la alegría del Señor se convierte en nuestra fortaleza.", 
        autor: "San Pablo / San Ignacio de Loyola", 
        tags: ["gratitud", "oración", "alegría", "fortaleza"], 
        referencia: "1 Tesalonicenses 5:18" 
    },
    { 
        id: "grat-02", 
        texto: "Si la única oración que pudieras decir en toda tu vida fuera 'gracias', con eso bastaría para salvar tu alma. La gratitud nos mantiene humildes y nos recuerda que todo es don, que nada es mérito propio y que caminamos sostenidos por un Amor que nos precede y nos acompaña en cada respiración.", 
        autor: "Meister Eckhart / San Agustín", 
        tags: ["gratitud", "humildad", "don", "vida"], 
        referencia: "Sermones" 
    },

// --- 66. GRACIA (El auxilio divino) ---
    { 
        id: "grac-01", 
        texto: "Te basta mi gracia, porque mi fuerza se manifiesta perfectamente en la debilidad. La gracia no es algo que Dios nos da como una recompensa por nuestras obras, sino que es Su misma Vida comunicada a nuestra alma para que podamos hacer lo que por nosotros mismos sería imposible. No temas a tus limitaciones, porque donde tú terminas, allí comienza la fuerza de Dios.", 
        autor: "San Pablo", 
        tags: ["gracia", "debilidad", "fuerza", "dios"], 
        referencia: "2 Corintios 12:9" 
    },
    { 
        id: "grac-02", 
        texto: "La gracia no destruye la naturaleza, sino que la perfecciona y la eleva. Como la luz del sol que atraviesa un cristal sin romperlo pero lo llena de brillo, así la gracia entra en el hombre para transformar sus deseos, iluminar su razón y fortalecer su voluntad, haciéndolo capaz de amar con el mismo amor de Cristo.", 
        autor: "Santo Tomás de Aquino", 
        tags: ["gracia", "naturaleza", "perfección", "luz"], 
        referencia: "Suma Teológica" 
    },
    { 
        id: "grac-03", 
        texto: "Todo es gracia. Desde el primer suspiro de la mañana hasta el último pensamiento de la noche, estamos rodeados por la misericordia de un Dios que nos sostiene. Incluso las pruebas y las cruces son gracias disfrazadas, porque nos despojan de nosotros mismos para que podamos ser llenados por la plenitud de Su Espíritu.", 
        autor: "Santa Teresita de Lisieux", 
        tags: ["gracia", "misericordia", "vida", "espíritu"], 
        referencia: "Historia de un Alma" 
    },

    // --- 67. GRANDEZA (La humildad del corazón) ---
    { 
        id: "gran-01", 
        texto: "Es necesario que Él crezca y que yo disminuya. La verdadera grandeza del hombre no consiste en ser servido, sino en servir; no en ser admirado, sino en ser canal de la gloria de Dios. Cuanto más pequeño te hagas a tus propios ojos, más grande serás a los ojos del Padre, porque Él se inclina ante los humildes pero mira de lejos a los soberbios.", 
        autor: "San Juan Bautista / San Agustín", 
        tags: ["grandeza", "humildad", "servicio", "ego"], 
        referencia: "Juan 3:30" 
    },
    { 
        id: "gran-02", 
        texto: "No busques hacer cosas grandes que el mundo aplauda, sino haz las cosas pequeñas con un amor tan grande que el Cielo se conmueva. La santidad es la única grandeza que permanece después de la muerte; todo lo demás es humo que el viento se lleva. Ser grande es ser fiel a Dios en lo escondido, allí donde nadie te ve salvo Él.", 
        autor: "Santa Teresa de Calcuta / San Josemaría Escrivá", 
        tags: ["grandeza", "amor", "santidad", "fidelidad"], 
        referencia: "Reflexiones" 
    },

    // --- 68. HERIDA (Lugar de sanación y encuentro) ---
    { 
        id: "heri-01", 
        texto: "El Señor sana a los de corazón quebrantado y venda sus heridas. No escondas tus llagas a Dios, porque Él es el Médico que bajó del cielo para curar nuestra naturaleza caída. En las manos heridas de Cristo resucitado encontramos la prueba de que el dolor no tiene la última palabra y que toda herida entregada con fe puede convertirse en una fuente de luz.", 
        autor: "Salmos / San Juan Pablo II", 
        tags: ["herida", "sanación", "dolor", "consuelo"], 
        referencia: "Salmo 147:3" 
    },
    { 
        id: "heri-02", 
        texto: "Hay heridas del alma que solo el bálsamo del perdón y el tiempo de Dios pueden cerrar. No te apresures a sanar superficialmente; deja que la gracia penetre hasta lo más profundo. A menudo, nuestras heridas son las grietas por donde la luz de la misericordia divina entra en nuestra vida para hacernos más humanos, más humildes y más compasivos.", 
        autor: "San Francisco de Sales", 
        tags: ["herida", "alma", "misericordia", "paciencia"], 
        referencia: "Cartas" 
    },

    // --- 69. HIJOS (Herencia del Señor) ---
    { 
        id: "hijo-01", 
        texto: "Los hijos son una herencia del Señor, el fruto del vientre es una recompensa. Educadlos no solo para este mundo, sino para el Cielo. Recordad que vuestro ejemplo habla más fuerte que vuestras palabras; si queréis que vuestros hijos amen a Dios, que vean en vuestra vida la alegría y la paz que brotan de esa relación.", 
        autor: "Salmos / San Juan Bosco", 
        tags: ["hijos", "familia", "educación", "ejemplo"], 
        referencia: "Salmo 127:3" 
    },
    { 
        id: "hijo-02", 
        texto: "Un hijo es el don más grande que un matrimonio puede recibir. Es una persona única, con una dignidad infinita, puesta bajo vuestro cuidado para ser amada y protegida. No tratéis de moldearlos a vuestra imagen, sino ayudadles a descubrir la imagen de Dios que ya habita en ellos y la misión para la cual han sido creados.", 
        autor: "Papa Francisco", 
        tags: ["hijos", "dignidad", "amor", "misión"], 
        referencia: "Amoris Laetitia" 
    },

    // --- 70. HISTORIA (Dios en el tiempo) ---
    { 
        id: "hist-01", 
        texto: "Dios es el Señor de la historia. Aunque a veces parezca que el mal triunfa o que el caos gobierna, la mano de la Providencia guía los hilos del tiempo hacia un fin de bien. No mires los acontecimientos del mundo con ojos de desesperación, sino con la mirada de la fe que sabe que Cristo ha vencido y que Su Reino no tendrá fin.", 
        autor: "San Juan Pablo II", 
        tags: ["historia", "providencia", "fe", "victoria"], 
        referencia: "Memoria e Identidad" 
    },
    { 
        id: "hist-02", 
        texto: "La historia humana es el escenario donde se desarrolla el diálogo entre la libertad del hombre y el amor de Dios. Dos amores han construido dos ciudades: el amor propio hasta el desprecio de Dios, la ciudad terrena; y el amor de Dios hasta el desprecio de sí mismo, la ciudad celestial. Elige hoy a qué ciudad quieres que pertenezca tu historia personal.", 
        autor: "San Agustín", 
        tags: ["historia", "libertad", "amor", "decisión"], 
        referencia: "La Ciudad de Dios" 
    },

// --- 71. HONESTIDAD (Vivir en la luz) ---
    { 
        id: "hone-01", 
        texto: "Sea vuestro lenguaje: 'sí, sí'; 'no, no'; que lo que pasa de aquí viene del Maligno. La honestidad no es solo decir la verdad a los demás, sino vivir en la verdad ante Dios, sabiendo que nada hay oculto que no haya de ser descubierto. Una vida transparente es el reflejo de un alma que no tiene nada que temer porque descansa en la Justicia divina.", 
        autor: "Jesús / San Agustín", 
        tags: ["honestidad", "verdad", "integridad", "luz"], 
        referencia: "Mateo 5:37 / Sermones" 
    },
    { 
        id: "hone-02", 
        texto: "Preferid siempre una verdad amarga a una mentira dulce. La honestidad con uno mismo es el primer peldaño de la escalera de la santidad; quien se engaña a sí mismo sobre sus propias faltas, cierra la puerta a la gracia que sana. Sed íntegros en lo escondido, porque Dios mira el corazón y no las apariencias.", 
        autor: "San Francisco de Sales / San Juan Bosco", 
        tags: ["honestidad", "verdad", "autoconocimiento", "rectitud"], 
        referencia: "Filotea / Instrucciones" 
    },

    // --- 72. HOY (El momento de la Gracia) ---
    { 
        id: "hooy-01", 
        texto: "No te inquietes por el mañana; a cada día le basta su propio afán. El ayer ya pasó y está en la misericordia de Dios; el mañana aún no llega y está en Su providencia; solo el hoy es tuyo y es el único lugar donde puedes amar y ser santo. No dejes para mañana el bien que puedes hacer en este instante.", 
        autor: "Jesús / San Juan XXIII", 
        tags: ["hoy", "tiempo", "paz", "presencia"], 
        referencia: "Mateo 6:34 / Diario de un alma" 
    },
    { 
        id: "hooy-02", 
        texto: "Si hoy escucháis Su voz, no endurezcáis el corazón. La santidad se construye en el 'ahora' de las cosas pequeñas. Cada minuto que pasa es una oportunidad de gracia que no volverá; vive este día como si fuera el único que tienes para demostrarle a Dios cuánto lo amas.", 
        autor: "Salmos / Santa Teresita de Lisieux", 
        tags: ["hoy", "gracia", "decisión", "vida"], 
        referencia: "Salmo 95 / Historia de un alma" 
    },

    // --- 73. HUMILDAD (La base de toda virtud) ---
    { 
        id: "humi-01", 
        texto: "La humildad es la verdad de lo que somos ante Dios: nada por nosotros mismos, pero todo por Su amor. No consiste en pensar que somos inferiores, sino en pensar menos en nosotros mismos. El que se humilla será ensalzado, porque solo un corazón vacío de ego puede ser llenado por la plenitud del Espíritu Santo.", 
        autor: "Santa Teresa de Ávila / San Agustín", 
        tags: ["humildad", "ego", "verdad", "espíritu"], 
        referencia: "Las Moradas / Sermones" 
    },
    { 
        id: "humi-02", 
        texto: "¿Quieres subir muy alto? Comienza por bajar. La humildad es la raíz que sostiene el árbol de la caridad; sin ella, cualquier virtud es solo vanidad disfrazada. Aprended de Jesús, que siendo Dios, se hizo servidor de todos para enseñarnos que el camino a la gloria pasa necesariamente por el pesebre y la cruz.", 
        autor: "San Agustín / San Bernardo", 
        tags: ["humildad", "caridad", "virtud", "ejemplo"], 
        referencia: "Sermones" 
    },

    // --- 74. IDENTIDAD (Hijos en el Hijo) ---
    { 
        id: "iden-01", 
        texto: "Mirad qué amor nos ha tenido el Padre para llamarnos hijos de Dios, pues ¡lo somos! Tu verdadera identidad no depende de tus éxitos, de tu dinero o de la opinión de los hombres; tu identidad es imborrable porque ha sido sellada por el bautismo. Eres un pensamiento amoroso de Dios hecho realidad.", 
        autor: "San Juan / Benedicto XVI", 
        tags: ["identidad", "dignidad", "amor", "hijos"], 
        referencia: "1 Juan 3:1 / Homilía de inicio" 
    },
    { 
        id: "iden-02", 
        texto: "Cristiano, reconoce tu dignidad. Al participar de la naturaleza divina, no vuelvas a tu antigua miseria. Tu nombre está grabado en las palmas de las manos de Dios; no busques fuera de Él el sentido de tu vida, porque solo en el Creador el corazón encuentra la respuesta a quién es realmente.", 
        autor: "San León Magno / Isaías", 
        tags: ["identidad", "dignidad", "sentido", "dios"], 
        referencia: "Sermones / Isaías 49:16" 
    },

    // --- 75. ILUMINACIÓN (La luz del Espíritu) ---
    { 
        id: "ilum-01", 
        texto: "Tú, Señor, eres mi lámpara; Tú iluminas mis tinieblas. La iluminación no es un éxtasis extraño, sino el don del Espíritu Santo que permite ver la realidad con los ojos de Dios. Es la luz que nos muestra el camino en medio de la duda y nos hace comprender el sentido profundo de las Escrituras y de los acontecimientos de nuestra vida.", 
        autor: "Salmos / San Buenaventura", 
        tags: ["iluminación", "espíritu", "sabiduría", "luz"], 
        referencia: "Salmo 18:28 / Itinerario de la mente a Dios" 
    },
    { 
        id: "ilum-02", 
        texto: "Vuestra palabra es antorcha para mis pasos y luz para mi sendero. Cuando el alma se abre a la gracia, el entendimiento se aclara y lo que antes parecía oscuro se vuelve luminoso. Pide siempre al Espíritu Santo que ilumine tu razón para que tus decisiones no nazcan de la carne, sino de la Verdad que libera.", 
        autor: "Salmos / Santo Tomás de Aquino", 
        tags: ["iluminación", "gracia", "verdad", "guía"], 
        referencia: "Salmo 119:105 / Suma Teológica" 
    },

// --- 76. INCONSCIENTE / SOMBRA (Sombra y Gracia) ---
    { 
        id: "inco-01", 
        texto: "No se llega a la iluminación imaginando figuras de luz, sino haciendo consciente la oscuridad. Pero cuidado: mirar la propia sombra sin la luz de la Gracia puede llevar a la desesperación. Es necesario que el Espíritu Santo ilumine esos rincones olvidados del alma para que lo que era herida se convierta en lugar de santificación y autoconocimiento real.", 
        autor: "Carl Jung (En diálogo con la fe) / San Agustín", 
        tags: ["inconsciente", "sombra", "psicología", "gracia", "luz"], 
        referencia: "Reflexiones sobre el alma" 
    },
    { 
        id: "inco-02", 
        texto: "Señor, escudriña mi corazón y conoce mis pensamientos; mira si hay en mí camino de perversidad y guíame por el camino eterno. Hay cosas en nosotros que ni nosotros mismos comprendemos, impulsos ocultos y heridas del pasado; solo Tú, que nos conoces desde el vientre materno, puedes ordenar nuestro mundo interior y darnos la verdadera libertad.", 
        autor: "Salmos / San Juan Pablo II", 
        tags: ["inconsciente", "corazón", "sanación", "libertad"], 
        referencia: "Salmo 139 / Discursos" 
    },

    // --- 77. INFANCIA (El Espíritu de Niñez) ---
    { 
        id: "infa-01", 
        texto: "En verdad os digo: si no os convertís y os hacéis como niños, no entraréis en el Reino de los Cielos. La infancia espiritual no es puerilidad, sino la madurez de quien sabe que es pequeño ante Dios y confía plenamente en Su mano, como un niño que se duerme sin miedo en los brazos de su padre, sabiéndose profundamente amado.", 
        autor: "Jesús / Santa Teresita de Lisieux", 
        tags: ["infancia", "humildad", "confianza", "abandono"], 
        referencia: "Mateo 18:3 / Historia de un alma" 
    },
    { 
        id: "infa-02", 
        texto: "Dejad que los niños se acerquen a mí. Un niño tiene la capacidad de asombro que el adulto a menudo pierde por el orgullo. Conservar el corazón de niño es mantener la capacidad de perdonar rápido, de vivir el presente sin ansiedad y de mirar el mundo con ojos limpios de malicia, reconociendo la presencia de Dios en lo sencillo.", 
        autor: "Jesús / San Juan Bosco", 
        tags: ["infancia", "asombro", "pureza", "sencillez"], 
        referencia: "Marcos 10:14 / Instrucciones" 
    },

    // --- 78. INJUSTICIA (Grito por la Verdad) ---
    { 
        id: "inju-01", 
        texto: "Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados. Ante la injusticia del mundo, el cristiano no debe ser indiferente ni violento, sino un constructor de paz que denuncia el mal con la verdad y lo vence con el bien. La justicia humana es necesaria, pero solo la justicia de Dios es perfecta y restaura toda herida.", 
        autor: "Jesús / San Agustín", 
        tags: ["injusticia", "justicia", "bienaventuranzas", "paz"], 
        referencia: "Mateo 5:6 / La Ciudad de Dios" 
    },
    { 
        id: "inju-02", 
        texto: "¿Hasta cuándo, Señor, pediré auxilio sin que me escuches, y gritaré ante la violencia sin que me salves? La injusticia que vemos no es la última palabra de la historia. Dios escucha el grito de los pobres y de los oprimidos; nuestra misión es ser Sus manos y Su voz para defender la dignidad de aquellos a quienes el mundo intenta descartar.", 
        autor: "Habacuc / Papa Francisco", 
        tags: ["injusticia", "dignidad", "pobreza", "misión"], 
        referencia: "Habacuc 1:2 / Laudato Si" 
    },

    // --- 79. INTEGRIDAD (Un solo corazón) ---
    { 
        id: "inte-01", 
        texto: "Dichoso el hombre de corazón íntegro, que camina en la voluntad del Señor. La integridad es la armonía entre lo que se piensa, lo que se dice y lo que se hace, incluso cuando nadie nos está mirando. Es ser el mismo en el templo, en el trabajo y en la intimidad del hogar, sabiendo que la mirada de Dios es la única que otorga la verdadera aprobación.", 
        autor: "Salmos / San Josemaría Escrivá", 
        tags: ["integridad", "honestidad", "rectitud", "vida"], 
        referencia: "Salmo 119 / Camino" 
    },
    { 
        id: "inte-02", 
        texto: "Nadie puede servir a dos señores. La integridad se quiebra cuando intentamos vivir una doble vida, dividiendo el corazón entre Dios y los ídolos del mundo. Pide al Señor un corazón indiviso, para que tu luz sea clara y tus pasos sean firmes, sin las sombras que produce la mentira o el engaño a uno mismo.", 
        autor: "Jesús / San Ignacio de Loyola", 
        tags: ["integridad", "verdad", "corazón", "fe"], 
        referencia: "Mateo 6:24 / Ejercicios" 
    },

    // --- 80. INTERIORIDAD (El castillo del alma) ---
    { 
        id: "intt-01", 
        texto: "No salgas de ti mismo; vuelve a tu interior. En el hombre interior habita la Verdad. Hemos buscado a Dios fuera, en las criaturas y en el ruido, olvidando que Él ha puesto Su morada en el fondo de nuestra alma. La interioridad es el silencio sagrado donde podemos escuchar los susurros del Espíritu y encontrarnos con nuestro verdadero ser.", 
        autor: "San Agustín", 
        tags: ["interioridad", "silencio", "alma", "dios"], 
        referencia: "De vera religione" 
    },
    { 
        id: "intt-02", 
        texto: "Considero mi alma como un castillo todo de diamante o muy claro cristal, donde hay muchos aposentos y, en el centro, está la morada donde pasan las cosas de mucho secreto entre Dios y el alma. La vida espiritual no es otra cosa que el viaje hacia ese centro, despojándonos de las distracciones exteriores para vivir en la presencia constante del Amado.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["interioridad", "mística", "alma", "presencia"], 
        referencia: "Las Moradas" 
    },

// --- 81. JUICIO (Misericordia y Verdad) ---
    { 
        id: "juic-01", 
        texto: "No juzguéis y no seréis juzgados; no condenéis y no seréis condenados. Con la medida con que midáis, se os medirá a vosotros. El juicio pertenece a Dios porque solo Él conoce el corazón humano; nosotros a menudo vemos la paja en el ojo ajeno, pero olvidamos la viga que nubla nuestra propia visión.", 
        autor: "Jesús", 
        tags: ["juicio", "misericordia", "humildad", "perdón"], 
        referencia: "Lucas 6:37" 
    },
    { 
        id: "juic-02", 
        texto: "Al atardecer de la vida, nos examinarán en el amor. El juicio final no es un tribunal de terror, sino el encuentro con la Verdad que nos ama. Todo lo que hayamos hecho por el más pequeño de los hermanos será lo que pese en la balanza de la eternidad. Procura que tu vida sea un argumento a favor del Amor.", 
        autor: "San Juan de la Cruz / San Juan Pablo II", 
        tags: ["juicio", "amor", "eternidad", "vida"], 
        referencia: "Dichos de luz y amor" 
    },

    // --- 82. JUSTICIA (Dar a cada uno lo suyo) ---
    { 
        id: "just-01", 
        texto: "La justicia sin misericordia es crueldad; la misericordia sin justicia es madre de la disolución. La verdadera justicia consiste en reconocer la dignidad de cada persona como imagen de Dios y en trabajar para que cada hombre reciba lo que necesita para vivir con dignidad. No hay paz verdadera si no está cimentada sobre la justicia.", 
        autor: "Santo Tomás de Aquino / San Juan XXIII", 
        tags: ["justicia", "misericordia", "paz", "dignidad"], 
        referencia: "Suma Teológica / Pacem in Terris" 
    },
    { 
        id: "just-02", 
        texto: "Buscad primero el Reino de Dios y su justicia, y todas las demás cosas se os darán por añadidura. La justicia de Dios no es como la de los hombres; Su justicia es restauradora, busca salvar al que está perdido y levantar al caído, invitándonos a nosotros a ser instrumentos de equidad en un mundo herido por el egoísmo.", 
        autor: "Jesús / Papa Francisco", 
        tags: ["justicia", "reino", "prioridades", "dios"], 
        referencia: "Mateo 6:33" 
    },

    // --- 83. JUVENTUD (Luz y Esperanza) ---
    { 
        id: "juve-01", 
        texto: "¡No tengáis miedo! El mundo necesita vuestro entusiasmo y vuestra sed de infinito. No permitáis que nadie os robe la esperanza ni que os convenzan de que vuestros sueños de santidad son imposibles. Vosotros no sois el futuro, sois el 'ahora' de Dios; poned vuestros talentos al servicio del bien y prenderéis fuego al mundo.", 
        autor: "San Juan Pablo II / Papa Francisco", 
        tags: ["juventud", "esperanza", "misión", "valentía"], 
        referencia: "Discursos JMJ" 
    },
    { 
        id: "juve-02", 
        texto: "Acuérdate de tu Creador en los días de tu juventud, antes de que lleguen los años en los que digas: 'no encuentro en ellos placer'. La juventud es el tiempo de las grandes decisiones y del amor generoso. No malgastes la fuerza de tus mejores años en cosas que no sacian el alma; busca aquello que es eterno.", 
        autor: "Eclesiastés / San Juan Bosco", 
        tags: ["juventud", "decisiones", "tiempo", "dios"], 
        referencia: "Eclesiastés 12:1" 
    },

    // --- 84. LIBERTAD (La Verdad que libera) ---
    { 
        id: "libe-01", 
        texto: "Para la libertad Cristo nos ha liberado. La verdadera libertad no es la capacidad de hacer cualquier cosa que se nos antoje, sino el poder de elegir el bien sin estar esclavizados por nuestras pasiones o por el miedo. Solo quien vive en la Verdad es realmente libre, porque ya no depende de la aprobación del mundo ni del engaño del pecado.", 
        autor: "San Pablo / San Agustín", 
        tags: ["libertad", "verdad", "bien", "espíritu"], 
        referencia: "Gálatas 5:1 / Juan 8:32" 
    },
    { 
        id: "libe-02", 
        texto: "La libertad es el signo más alto de la imagen de Dios en el hombre. Es un don sagrado que debe usarse para amar, pues una libertad sin amor termina destruyéndose a sí misma. Dios respeta tanto nuestra libertad que prefiere correr el riesgo de nuestro rechazo antes que obligarnos a amarlo; nuestra mayor libertad es el 'sí' que le damos a Su Gracia.", 
        autor: "Vaticano II / San Juan Pablo II", 
        tags: ["libertad", "amor", "dios", "responsabilidad"], 
        referencia: "Gaudium et Spes" 
    },

    // --- 85. LIDERAZGO (El que sirve es el primero) ---
    { 
        id: "lide-01", 
        texto: "El que quiera ser el primero, que sea el último de todos y el servidor de todos. El liderazgo cristiano es, ante todo, servicio. No se basa en el dominio o en el prestigio personal, sino en lavar los pies a los hermanos con humildad. Un líder que no vive para servir, no sirve para liderar en el Reino de los Cielos.", 
        autor: "Jesús / Papa Francisco", 
        tags: ["liderazgo", "servicio", "humildad", "ejemplo"], 
        referencia: "Marcos 9:35" 
    },
    { 
        id: "lide-02", 
        texto: "No os dejéis llamar maestros, porque uno solo es vuestro Maestro: Cristo. El buen líder es aquel que señala siempre a Dios y no a sí mismo, aquel que empodera a los demás para que descubran sus propios dones. La autoridad es una carga de responsabilidad que se lleva con amor y cuya única finalidad es el crecimiento y la santificación de los encomendados.", 
        autor: "Jesús / San Ignacio de Loyola", 
        tags: ["liderazgo", "autoridad", "responsabilidad", "fe"], 
        referencia: "Mateo 23:8" 
    },

// --- 86. LUZ (Cristo, Luz del Mundo) ---
    { 
        id: "luuz-01", 
        texto: "Yo soy la luz del mundo; el que me sigue no caminará en tinieblas, sino que tendrá la luz de la vida. Esta luz no es solo para iluminar el entendimiento, sino para calentar el corazón y guiar los pasos en medio de las oscuridades de la existencia. Donde entra la luz de Dios, el miedo se disipa y la realidad se muestra en su verdadera belleza y propósito.", 
        autor: "Jesús / San Agustín", 
        tags: ["luz", "verdad", "guía", "fe"], 
        referencia: "Juan 8:12 / Sermones" 
    },
    { 
        id: "luuz-02", 
        texto: "Vosotros sois la luz del mundo. No se puede ocultar una ciudad puesta en lo alto de un monte. Que vuestra luz brille ante los hombres, no para que os alaben a vosotros, sino para que, al ver vuestras buenas obras, den gloria al Padre que está en los cielos. La luz que recibimos en la oración debe convertirse en caridad visible en el trato con los demás.", 
        autor: "Jesús / San Juan Pablo II", 
        tags: ["luz", "testimonio", "obras", "ejemplo"], 
        referencia: "Mateo 5:14-16" 
    },

    // --- 87. MATERNIDAD (El Fiat y el amparo de María) ---
    { 
        id: "mate-01", 
        texto: "La maternidad es un don sagrado que colabora con el poder creador de Dios. María, con su 'Hágase', nos enseña que ser madre es acoger la vida, protegerla y acompañarla con un amor que se hace sacrificio. Una madre no solo da la vida física, sino que nutre el alma con la ternura que es reflejo de la misma ternura de Dios por Sus hijos.", 
        autor: "San Juan Pablo II / Papa Francisco", 
        tags: ["maternidad", "maría", "vida", "amor"], 
        referencia: "Mulieris Dignitatem / Amoris Laetitia" 
    },
    { 
        id: "mate-02", 
        texto: "He ahí a tu Madre. En la Cruz, Jesús nos entregó a María como madre de todos los creyentes. Acudir a ella es encontrar el camino más corto hacia Cristo. El corazón de una madre es el santuario donde el niño aprende a rezar y a descubrir que es amado incondicionalmente. No hay soledad que no pueda ser consolada bajo el manto de la Virgen.", 
        autor: "Jesús / San Bernardo", 
        tags: ["maternidad", "maría", "refugio", "consuelo"], 
        referencia: "Juan 19:27 / Tratados" 
    },

    // --- 88. MEDIACIÓN (Puentes hacia Dios) ---
    { 
        id: "medi-01", 
        texto: "Hay un solo Dios, y también un solo mediador entre Dios y los hombres, Cristo Jesús, hombre también. Sin embargo, Dios ha querido que participemos de Su misión. Cuando rezamos unos por otros, cuando el sacerdote actúa en nombre de Cristo, o cuando los Santos interceden por nosotros, estamos ejerciendo una mediación que brota de la única y suprema mediación de Jesús.", 
        autor: "San Pablo / Santo Tomás de Aquino", 
        tags: ["mediación", "intercesión", "oración", "comunión"], 
        referencia: "1 Timoteo 2:5 / Suma Teológica" 
    },
    { 
        id: "medi-02", 
        texto: "María es la Mediadora de todas las gracias, no porque ella sea la fuente, sino porque por su obediencia vino al mundo el Autor de la Vida. Pedir su intercesión es reconocer que Dios gusta de servirse de Sus criaturas para llegar a nosotros. Ser mediador para el hermano es ser un puente de paz que une la miseria humana con la Misericordia Divina.", 
        autor: "San Luis María Grignion de Montfort", 
        tags: ["mediación", "maría", "gracia", "intercesión"], 
        referencia: "Tratado de la verdadera devoción" 
    },

    // --- 89. MEMORIA (Recordar las maravillas del Señor) ---
    { 
        id: "memo-01", 
        texto: "Recuerda todo el camino que el Señor tu Dios te ha hecho recorrer. La memoria espiritual es fundamental para la fe; cuando olvidamos lo que Dios ha hecho por nosotros en el pasado, nos volvemos esclavos del miedo en el presente. Guardar en el corazón los momentos de gracia es tener combustible para las noches oscuras de la vida.", 
        autor: "Deuteronomio / San Agustín", 
        tags: ["memoria", "fe", "gratitud", "esperanza"], 
        referencia: "Deuteronomio 8:2" 
    },
    { 
        id: "memo-02", 
        texto: "Haced esto en memoria mía. La Eucaristía es el memorial vivo de la Pasión. No es un simple recuerdo de algo pasado, sino la presencia real que se actualiza hoy. Una fe sin memoria es una fe débil; pide la gracia de recordar siempre quién eres para Dios y cuántas veces Su mano te ha rescatado del abismo.", 
        autor: "Jesús / San Juan Pablo II", 
        tags: ["memoria", "eucaristía", "presencia", "identidad"], 
        referencia: "Lucas 22:19 / Ecclesia de Eucharistia" 
    },

    // --- 90. MENTIRA (El engaño que esclaviza) ---
    { 
        id: "ment-01", 
        texto: "La verdad os hará libres, pero la mentira os hace esclavos de las apariencias y del miedo a ser descubiertos. El diablo es el padre de la mentira; cada vez que deformamos la realidad para nuestro beneficio, nos alejamos de la Luz. Una pequeña mentira es como una grieta en un dique: tarde o temprano, terminará por destruir la integridad de toda la estructura personal.", 
        autor: "Jesús / San Juan Crisóstomo", 
        tags: ["mentira", "verdad", "integridad", "ego"], 
        referencia: "Juan 8:32-44" 
    },
    { 
        id: "ment-02", 
        texto: "No digas falso testimonio contra tu prójimo. La mentira daña la comunidad porque rompe la confianza que une a los hombres. Pero la mentira más peligrosa es la que nos decimos a nosotros mismos para justificar nuestras sombras. Solo la honestidad radical ante Dios puede sanar un corazón que se ha acostumbrado al engaño.", 
        autor: "Éxodo / San Agustín", 
        tags: ["mentira", "honestidad", "justicia", "confianza"], 
        referencia: "Éxodo 20:16 / Confesiones" 
    },
// --- 91. MISERICORDIA (El nombre de Dios) ---
    { 
        id: "mise-01", 
        texto: "La misericordia de Dios no es una idea abstracta, sino una realidad concreta con la cual Él revela Su amor como el de un padre o una madre que se conmueven por su hijo. Es el abrazo que sale al encuentro del hijo pródigo antes de que este pida perdón. Nunca debemos cansar de pedir misericordia, porque Dios nunca se cansa de perdonar.", 
        autor: "Papa Francisco", 
        tags: ["misericordia", "perdón", "amor", "dios"], 
        referencia: "Misericordiae Vultus" 
    },
    { 
        id: "mise-02", 
        texto: "Sed misericordiosos como vuestro Padre es misericordioso. La misericordia es la viga maestra que sostiene la vida de la Iglesia. Todo en su acción pastoral debería estar revestido por la ternura con la que se dirige a los fieles; nada en su anuncio puede carecer de misericordia, pues sin ella el mundo se vuelve un desierto frío.", 
        autor: "Jesús / Papa Francisco", 
        tags: ["misericordia", "iglesia", "ternura", "prójimo"], 
        referencia: "Lucas 6:36" 
    },

    // --- 92. MISTERIO (Lo que supera la razón) ---
    { 
        id: "mist-01", 
        texto: "Si lo comprendes, no es Dios. El misterio no es un muro contra el que choca la inteligencia, sino un océano infinito en el cual la razón se sumerge con asombro. Reconocer el misterio es la forma más alta de sabiduría, pues nos recuerda que somos criaturas y que hay una Verdad mucho más grande que nuestra capacidad de medir y pesar.", 
        autor: "San Agustín", 
        tags: ["misterio", "dios", "sabiduría", "razón"], 
        referencia: "Sermones" 
    },
    { 
        id: "mist-02", 
        texto: "El misterio de la fe es el misterio de un Dios que se hace pequeño por amor. No busques resolver el misterio como un problema matemático; vívelo como una relación personal. La oscuridad que a veces sentimos ante el misterio no es ausencia de luz, sino un exceso de luz que ciega nuestros ojos todavía terrenales.", 
        autor: "Benedicto XVI", 
        tags: ["misterio", "fe", "amor", "luz"], 
        referencia: "Encíclicas" 
    },

    // --- 93. MUERTE (Puerta a la Vida Eterna) ---
    { 
        id: "muer-01", 
        texto: "La muerte es el beso de Dios al alma para que despierte en la verdadera Vida. Para el que vive en gracia, la muerte no es una pérdida, sino el regreso al hogar del Padre. No temas al final de tus días en la tierra, pues Cristo ha vencido a la muerte y ha convertido el sepulcro en un lugar de paso hacia la Luz que nunca se apaga.", 
        autor: "San Juan de la Cruz / San Juan Pablo II", 
        tags: ["muerte", "eternidad", "esperanza", "vida"], 
        referencia: "Dichos / Mensajes" 
    },
    { 
        id: "muer-02", 
        texto: "Lo que el mundo llama morir, el cielo lo llama nacer. Al final de nuestra jornada, no se nos preguntará cuánto dinero acumulamos o qué fama tuvimos, sino cuánto amor pusimos en cada acto de nuestra vida. La muerte es el velo que se descorre para que el alma vea finalmente cara a cara a Aquel que siempre la amó.", 
        autor: "San Agustín / San Pío de Pietrelcina", 
        tags: ["muerte", "amor", "juicio", "trascendencia"], 
        referencia: "Confesiones" 
    },

    // --- 94. MUNDO (En el mundo sin ser del mundo) ---
    { 
        id: "mund-01", 
        texto: "No os amoldéis a este mundo, sino transformaos mediante la renovación de vuestra mente. Estar en el mundo sin ser del mundo significa vivir con los pies en la tierra pero con el corazón en el cielo. Tu misión es ser sal y luz en medio de las estructuras humanas, llevando la esperanza de Cristo allí donde parece que el egoísmo tiene la última palabra.", 
        autor: "San Pablo", 
        tags: ["mundo", "mente", "misión", "testimonio"], 
        referencia: "Romanos 12:2" 
    },
    { 
        id: "mund-02", 
        texto: "El mundo pasa y su concupiscencia también, pero el que cumple la voluntad de Dios permanece para siempre. No busques la aprobación de un mundo que hoy te aclama y mañana te olvida; busca la aprobación del Amigo fiel que te conoce por tu nombre. La verdadera libertad es no dejar que el ruido del mundo ahogue la voz de Dios en tu interior.", 
        autor: "San Juan / San Agustín", 
        tags: ["mundo", "voluntad", "eternidad", "libertad"], 
        referencia: "1 Juan 2:17" 
    },

    // --- 95. NATURALEZA (Huella del Creador) ---
    { 
        id: "natu-01", 
        texto: "Los cielos proclaman la gloria de Dios y el firmamento anuncia la obra de sus manos. La naturaleza es el primer evangelio que Dios escribió para que todos los hombres pudieran conocer Su poder y Su hermosura. Cada flor, cada montaña y cada estrella es una palabra silenciosa de amor que el Creador dirige a Su criatura.", 
        autor: "Salmos / San Buenaventura", 
        tags: ["naturaleza", "creación", "dios", "belleza"], 
        referencia: "Salmo 19" 
    },
    { 
        id: "natu-02", 
        texto: "En las criaturas más pequeñas se manifiesta el poder del Creador. Debemos mirar la naturaleza no como un objeto de explotación, sino como un don sagrado puesto bajo nuestro cuidado. Quien no sabe admirar la belleza de un amanecer o la complejidad de una hoja, difícilmente podrá asombrarse ante los misterios invisibles de la fe.", 
        autor: "San Francisco de Asís / Papa Francisco", 
        tags: ["naturaleza", "asombro", "ecología", "gratitud"], 
        referencia: "Cántico / Laudato Si" 
    },

// --- 96. NIÑEZ (Pureza y Asombro) ---
    { 
        id: "nine-01", 
        texto: "Dejad que los niños se acerquen a mí, porque de los que son como ellos es el Reino de los Cielos. La niñez no es solo una etapa de la vida, sino una cualidad del alma que sabe asombrarse ante la belleza de Dios y que vive con la confianza total de quien se sabe cuidado por un Padre que nunca falla. Recuperar la niñez espiritual es el camino más directo a la santidad.", 
        autor: "Jesús / San Juan Bosco", 
        tags: ["niñez", "infancia", "pureza", "confianza"], 
        referencia: "Mateo 19:14" 
    },
    { 
        id: "nine-02", 
        texto: "Un niño es un ángel enviado por Dios para recordarnos que el amor es sencillo y que la alegría no necesita de grandes posesiones. El alma de un niño es un jardín donde Dios gusta de pasearse; cuidemos esa inocencia, pues el mundo intenta robarla muy pronto. Ser como niños es ser grandes ante los ojos del Cielo.", 
        autor: "San Juan Pablo II", 
        tags: ["niñez", "inocencia", "alegría", "pureza"], 
        referencia: "Mensajes a las Familias" 
    },

    // --- 97. ODIO (Vencido por el Amor) ---
    { 
        id: "odio-01", 
        texto: "Amad a vuestros enemigos y rogad por los que os persiguen. El odio es un veneno que corroe el recipiente que lo contiene antes de dañar al destinatario. No permitas que el mal de otros siembre amargura en tu corazón; la única forma de romper la cadena del odio es el perdón radical que brota de la Cruz, donde Cristo amó a quienes lo crucificaban.", 
        autor: "Jesús / San Agustín", 
        tags: ["odio", "perdón", "enemigos", "amor"], 
        referencia: "Mateo 5:44 / Sermones" 
    },
    { 
        id: "odio-02", 
        texto: "Donde haya odio, ponga yo amor. El odio es la ausencia de Dios en las relaciones humanas. No se vence el odio con más odio, sino con una caridad que sea capaz de mirar más allá de la ofensa. Quien odia vive en tinieblas y no sabe a dónde va; quien ama, camina en la luz y su rostro refleja la paz que el mundo no puede dar.", 
        autor: "San Francisco de Asís / San Juan", 
        tags: ["odio", "caridad", "luz", "paz"], 
        referencia: "Oración de la Paz" 
    },

    // --- 98. ORACIÓN (Diálogo de Amistad) ---
    { 
        id: "orac-01", 
        texto: "La oración no es otra cosa que tratar de amistad, estando muchas veces tratando a solas con quien sabemos nos ama. No consiste en pensar mucho, sino en amar mucho. Es el suspiro del alma que busca a su Creador, el silencio donde Dios nos habla y la fuerza que sostiene al cristiano en medio de las batallas diarias.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["oración", "amistad", "silencio", "dios"], 
        referencia: "Libro de la Vida" 
    },
    { 
        id: "orac-02", 
        texto: "Orad sin cesar. La oración es la respiración del alma; si dejas de respirar, el alma muere. No importa si no tienes palabras hermosas; a Dios le basta el latido de un corazón sincero que se pone en Su presencia. Orar es elevar la mente y el corazón a Dios para darle gracias, pedirle perdón y reconocer que sin Él no somos nada.", 
        autor: "San Pablo / San Juan Damasceno", 
        tags: ["oración", "vida", "espíritu", "humildad"], 
        referencia: "1 Tesalonicenses 5:17" 
    },

    // --- 99. ORGULLO (La caída del alma) ---
    { 
        id: "orgu-01", 
        texto: "El orgullo es el principio de todos los pecados porque es el amor propio llevado hasta el desprecio de Dios. Es una ceguera del alma que nos hace creer que somos autores de nuestro propio bien, olvidando que todo lo que tenemos es don recibido. El orgulloso es como un globo lleno de aire: parece grande, pero está vacío y cualquier pinchazo de la realidad lo destruye.", 
        autor: "San Agustín / San Bernardo", 
        tags: ["orgullo", "ego", "pecado", "humildad"], 
        referencia: "La Ciudad de Dios" 
    },
    { 
        id: "orgu-02", 
        texto: "Dios resiste a los soberbios, pero da Su gracia a los humildes. El orgullo nos separa de los demás y nos encierra en el pequeño mundo de nuestra propia importancia. Solo cuando reconocemos nuestra pequeñez y nuestra necesidad de Dios, las puertas del Cielo se abren de par en par. La humildad es la llave que el orgullo ha perdido.", 
        autor: "Santiago / San Juan María Vianney", 
        tags: ["orgullo", "soberbia", "gracia", "humildad"], 
        referencia: "Santiago 4:6" 
    },

    // --- 100. PACIENCIA (La ciencia de la paz) ---
    { 
        id: "paci-01", 
        texto: "Nada te turbe, nada te espante, todo se pasa, Dios no se muda; la paciencia todo lo alcanza. La paciencia no es una espera pasiva, sino una constancia activa en el bien, confiando en que los tiempos de Dios son perfectos. Es la virtud que nos permite mantener la paz interior cuando todo fuera parece ser caos y demora.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["paciencia", "paz", "confianza", "espera"], 
        referencia: "Poesías" 
    },
    { 
        id: "paci-02", 
        texto: "Con vuestra paciencia salvaréis vuestras almas. El mundo corre y nos empuja a la prisa, pero Dios trabaja en el silencio y en la lentitud de los procesos naturales. La paciencia es el amor que sabe esperar, que no se desespera ante las faltas propias ni ajenas, y que entiende que la madurez del espíritu requiere tiempo, como el buen fruto requiere sol y lluvia.", 
        autor: "Jesús / San Francisco de Sales", 
        tags: ["paciencia", "alma", "tiempo", "madurez"], 
        referencia: "Lucas 21:19" 
    },

// --- 101. ABANDONO (La paz de no controlar) ---
    { 
        id: "aban-01", 
        texto: "No te inquietes por las dificultades de la vida, ni por sus altibajos, ni por sus decepciones. El abandono no es indiferencia, sino la confianza suprema de un alma que se sabe amada por Dios y que deja en Sus manos el resultado de todas las cosas. Cuando dejas de querer que todo sea a tu modo, experimentas una libertad que el mundo no conoce.", 
        autor: "San Francisco de Sales", 
        tags: ["abandono", "confianza", "paz", "control"], 
        referencia: "Cartas Espirituales" 
    },
    { 
        id: "aban-02", 
        texto: "Señor, no sé lo que me va a pasar hoy, pero sé que nada me sucederá que Tú no hayas previsto y ordenado para mi mayor bien desde la eternidad. Me basta esto para estar en paz. Adoro tus designios ocultos y me abandono a ellos con todo mi corazón, sin querer entender, solo queriendo amar y confiar.", 
        autor: "San Josemaría Escrivá / Santa Teresita", 
        tags: ["abandono", "providencia", "paz", "hoy"], 
        referencia: "Oraciones de Abandono" 
    },

    // --- 102. COMBATE ESPIRITUAL (La batalla interna) ---
    { 
        id: "comb-01", 
        texto: "Nuestra lucha no es contra fuerzas humanas, sino contra las oscuridades que intentan apagar la luz de nuestra alma. El combate espiritual no se gana con violencia, sino con la humildad, la oración constante y la vigilancia del corazón. Cada tentación es una oportunidad para reafirmar tu 'sí' a Dios y para fortalecer los músculos de tu voluntad bajo la sombra de la Gracia.", 
        autor: "San Pablo / San Ignacio de Loyola", 
        tags: ["combate", "fortaleza", "espíritu", "tentación"], 
        referencia: "Efesios 6 / Ejercicios" 
    },
    { 
        id: "comb-02", 
        texto: "No te sorprendas de tus caídas; lo que importa es la rapidez con la que te levantas. El enemigo quiere que te quedes mirando al suelo con culpa, pero Dios quiere que mires al Cielo con esperanza. La santidad no es la ausencia de batallas, sino la persistencia de un soldado que, aunque herido, nunca abandona el campo porque confía en la victoria final de Su Capitán.", 
        autor: "San Pío de Pietrelcina / San Juan Bosco", 
        tags: ["combate", "esperanza", "resiliencia", "caída"], 
        referencia: "Cartas" 
    },

    // --- 103. DISCERNIMIENTO DE ESPÍRITUS (Claridad mental) ---
    { 
        id: "disv-01", 
        texto: "Es propio del mal espíritu causar ansiedad, tristeza y poner obstáculos falsos para inquietar al alma y que no progrese. En cambio, es propio del buen espíritu dar ánimo, fuerzas, consuelos y lágrimas que limpian, trayendo una paz que tranquiliza el entendimiento. Aprende a distinguir la voz que te acusa de la voz que te corrige con amor.", 
        autor: "San Ignacio de Loyola", 
        tags: ["discernimiento", "psicología", "paz", "ansiedad"], 
        referencia: "Reglas de Discernimiento" 
    },

    // --- 104. MATRIMONIO (Amor Sacramental) ---
    { 
        id: "matr-01", 
        texto: "El amor matrimonial es el desafío de ser, para el otro, el primer reflejo del amor de Dios. No se basa en una emoción pasajera, sino en una decisión diaria de buscar el bien del cónyuge por encima del propio. Es un camino de santificación mutua donde las debilidades del otro no son motivo de juicio, sino un llamado a la paciencia y a la ternura redentora.", 
        autor: "San Juan Pablo II", 
        tags: ["matrimonio", "amor", "familia", "sacrificio"], 
        referencia: "Gratissimum Sane" 
    },

    // --- 105. SILENCIO (Lugar de encuentro) ---
    { 
        id: "sile-01", 
        texto: "El silencio no es la ausencia de palabras, sino la presencia de la escucha. Dios es amigo del silencio; en él habla al corazón y revela los secretos que el ruido del mundo ahoga. Quien teme al silencio, teme encontrarse consigo mismo y con la Verdad. Cultiva ratos de soledad silenciosa y verás cómo tu alma empieza a respirar de nuevo.", 
        autor: "San Juan de la Cruz / Cardenal Sarah", 
        tags: ["silencio", "interioridad", "dios", "escucha"], 
        referencia: "La fuerza del silencio" 
    },


// --- 111. AMISTAD (Comunión de almas) ---
    { 
        id: "amis-01", 
        texto: "No hay amistad verdadera sino entre aquellos a quienes Tú aglutinas entre sí por medio de la caridad, la cual es derramada en nuestros corazones por el Espíritu Santo que se nos ha dado. Un amigo fiel es un refugio poderoso; quien lo encuentra, encuentra un tesoro que no tiene precio ni comparación.", 
        autor: "San Agustín", 
        tags: ["amistad", "amor", "espíritu", "caridad"], 
        referencia: "Confesiones, Libro IV" 
    },
    { 
        id: "amis-02", 
        texto: "La amistad es el más noble de todos los sentimientos humanos, pues no nace de la necesidad ni de la utilidad, sino de la libre elección de dos almas que buscan juntas la verdad. Un amigo es aquel que te ayuda a ser mejor para Dios, aquel que no teme corregirte con ternura y que camina a tu lado incluso en el silencio de la prueba.", 
        autor: "Santo Tomás de Aquino", 
        tags: ["amistad", "verdad", "virtud", "compañía"], 
        referencia: "Suma Teológica, II-II, q. 23" 
    },

    // --- 112. ANIMALES (Nuestros hermanos menores) ---
    { 
        id: "anim-03", 
        texto: "Oh Dios, aumenta en nosotros el sentido de fraternidad con todos los seres vivos, nuestros hermanos los animales a quienes has dado esta tierra como hogar común. Que podamos entender que ellos no viven solo para nosotros, sino para sí mismos y para Ti, y que Tú te complaces en su alegría y sufres con su dolor innecesario.", 
        autor: "San Basilio Magno", 
        tags: ["animales", "fraternidad", "creación", "compasión"], 
        referencia: "Oración por los animales" 
    },
    { 
        id: "anim-04", 
        texto: "Todas las criaturas de la tierra sienten como nosotros, todas las criaturas buscan la felicidad como nosotros y todas las criaturas aman, sufren y mueren como nosotros. Son obras de las manos del mismo Creador; por lo tanto, despreciar a una criatura es despreciar al Artista que la modeló con amor desde el principio de los tiempos.", 
        autor: "San Francisco de Asís", 
        tags: ["animales", "creación", "respeto", "dios"], 
        referencia: "Florecillas de San Francisco" 
    },

    // --- 113. CANSANCIO Y TRABAJO (El valor del reposo) ---
    { 
        id: "cans-01", 
        texto: "No os dejéis absorber por el trabajo de tal modo que os olvidéis de vuestra alma. El cansancio del cuerpo es a menudo un aviso de que el espíritu necesita retirarse al desierto de la oración para recuperar su centro. Trabaja con diligencia, pero mantén siempre una parte de tu corazón libre para Dios, pues quien solo trabaja y no descansa en el Señor, termina por vaciarse.", 
        autor: "San Francisco de Sales", 
        tags: ["cansancio", "trabajo", "equilibrio", "oración"], 
        referencia: "Introducción a la vida devota" 
    },
    { 
        id: "cans-02", 
        texto: "El reposo no es ocio vacío, sino una forma de alabanza cuando se hace para restaurar las fuerzas y servir mejor. No permitas que la ansiedad por el mañana te robe la paz del descanso de hoy. Si Dios descansó el séptimo día, no fue por fatiga, sino para enseñarnos que la contemplación de la obra bien hecha es necesaria para la salud del alma.", 
        autor: "San Agustín", 
        tags: ["descanso", "paz", "contemplación", "orden"], 
        referencia: "Comentario al Génesis" 
    },

    // --- 114. CIENCIA Y FE (La armonía de la creación) ---
    { 
        id: "cife-01", 
        texto: "La inteligencia humana es un don divino que debe usarse para escudriñar los secretos de la naturaleza. Cuanto más comprendemos las leyes de la física o la complejidad de la biología, más nos asombramos ante la sabiduría del Creador. La ciencia y la fe no son enemigas, sino dos caminos distintos que convergen en la misma Verdad que sostiene el universo.", 
        autor: "San Alberto Magno", 
        tags: ["ciencia", "fe", "naturaleza", "sabiduría"], 
        referencia: "Tratados sobre la naturaleza" 
    },

    // --- 115. VERDAD Y MENTIRA (La integridad del hablar) ---
    { 
        id: "vyme-01", 
        texto: "La mentira es una ofensa directa a la naturaleza de la palabra, que fue dada para comunicar la verdad. Quien miente, aunque sea en cosas pequeñas, fragmenta su propia integridad y levanta un muro entre su alma y la Luz de Dios. La verdad puede ser dolorosa al principio, pero es la única que tiene el poder de sanar los vínculos humanos de forma duradera.", 
        autor: "Santo Tomás de Aquino", 
        tags: ["verdad", "mentira", "integridad", "ética"], 
        referencia: "Suma Teológica, II-II, q. 110" 
    },

// --- 116. EL SENTIDO DEL TIEMPO (Vivir el presente) ---
    { 
        id: "tiem-01", 
        texto: "¿Qué es, pues, el tiempo? Si nadie me lo pregunta, lo sé; pero si quiero explicarlo a quien me lo pregunta, no lo sé. Lo que sí digo sin vacilación es que el pasado ya no existe y el futuro aún no ha llegado. Solo el presente es real, y es en el presente donde debemos buscar a Dios, pues si perdemos el ahora distraídos por lo que fue o por lo que será, perdemos la única oportunidad de amar que realmente poseemos.", 
        autor: "San Agustín", 
        tags: ["tiempo", "presente", "filosofía", "existencia"], 
        referencia: "Confesiones, Libro XI" 
    },
    { 
        id: "tiem-02", 
        texto: "No malgastéis el tiempo, porque es la materia de la que está hecha la vida y el don que Dios nos da para ganar la eternidad. Un minuto de paciencia en un momento de ira, o un segundo de silencio ante una provocación, valen más que horas de discursos. Santificar el tiempo no es hacer cosas extraordinarias a cada paso, sino hacer que cada paso, por sencillo que sea, esté lleno de la presencia de Dios.", 
        autor: "San Juan Bosco", 
        tags: ["tiempo", "sabiduría", "paciencia", "vida"], 
        referencia: "Memorias Biográficas" 
    },

    // --- 117. EL ALMA DE LOS ANIMALES (Respeto a la Creación) ---
    { 
        id: "anim-05", 
        texto: "Los animales poseen un soplo vital recibido de Dios y, en su existencia silenciosa, alaban al Creador mucho mejor que muchos hombres. Son seres que sufren y sienten, y el hombre, como administrador de la creación, tiene la responsabilidad ética de tratarlos con la misma ternura con la que Dios nos trata a nosotros. La crueldad hacia un animal es un signo de un alma que se ha endurecido y que ha olvidado su propia dignidad de hijo del Padre.", 
        autor: "San Juan Pablo II", 
        tags: ["animales", "creación", "ética", "ternura"], 
        referencia: "Audiencia General, 1990" 
    },

    // --- 118. LA PAZ EN EL HOGAR (Vida cotidiana) ---
    { 
        id: "hoga-02", 
        texto: "Solo por hoy trataré de vivir exclusivamente el día, sin querer resolver el problema de mi vida todo de una vez. Tendré el máximo cuidado de mi cortesía: no criticaré a nadie y no pretenderé mejorar o disciplinar a nadie sino a mí mismo. Haré un programa detallado de mi jornada: quizás no lo cumpliré cabalmente, pero lo redactaré y me guardaré de dos plagas: la prisa y la indecisión. Mi hogar será mi primer campo de apostolado a través de la alegría.", 
        autor: "San Juan XXIII", 
        tags: ["hogar", "paz", "disciplina", "alegría"], 
        referencia: "Decálogo de la Serenidad" 
    },

    // --- 119. LA SALUD DEL ALMA Y LA MENTE (Psicología y Fe) ---
    { 
        id: "psic-01", 
        texto: "Es gran mal tener un alma herida y no querer reconocerlo por orgullo. La imaginación es la loca de la casa, que a menudo nos engaña haciéndonos ver gigantes donde solo hay sombras. Para tener paz mental es necesario el autoconocimiento: saber de qué barro estamos hechos y confiar en que Dios, que es el mejor psicólogo, conoce nuestras flaquezas y nos ama no por lo que logramos, sino por lo que intentamos ser en la verdad.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["psicología", "salud mental", "humildad", "paz"], 
        referencia: "Las Moradas" 
    },

    // --- 120. LA SANTIDAD EN LO PEQUEÑO (El caminito) ---
    { 
        id: "pequ-01", 
        texto: "La santidad no consiste en tal o cual práctica, sino en una disposición del corazón que nos hace humildes y pequeños en los brazos de Dios, conscientes de nuestra debilidad y confiados hasta la audacia en Su bondad de Padre. No poseo el valor de buscar oraciones hermosas en los libros; al no saber cuál escoger, hago como los niños: digo sencillamente a Dios lo que quiero decirle, sin dar vueltas, y Él siempre me comprende.", 
        autor: "Santa Teresita de Lisieux", 
        tags: ["sencillez", "humildad", "oración", "amor"], 
        referencia: "Historia de un Alma" 
    },

// --- 121. EL SILENCIO EN EL RUIDO (Escuchar a Dios) ---
    { 
        id: "sile-02", 
        texto: "Una palabra habló el Padre, que fue su Hijo, y ésta habla siempre en eterno silencio, y en silencio ha de ser oída del alma. El ruido del mundo y de nuestras propias pasiones es lo que nos impide escuchar esa voz sutil que guía nuestra vida. Busca momentos de retiro interior, pues en la paz del silencio es donde se encuentran las respuestas que el bullicio exterior nos oculta.", 
        autor: "San Juan de la Cruz", 
        tags: ["silencio", "interioridad", "paz", "escucha"], 
        referencia: "Dichos de luz y amor" 
    },

    // --- 122. LA CARIDAD EN LO COTIDIANO (El servicio en el hogar) ---
    { 
        id: "cari-11", 
        texto: "Muchos de los que parecen santos en el templo, son tiranos en sus casas. La verdadera caridad no se demuestra solo en las grandes obras exteriores, sino en la paciencia con la que tratamos a quienes conviven con nosotros a diario. El amor se prueba en los pequeños detalles: en una palabra amable cuando estamos cansados, en el servicio callado y en la capacidad de perdonar las molestias de la convivencia.", 
        autor: "San Josemaría Escrivá", 
        tags: ["caridad", "hogar", "paciencia", "convivencia"], 
        referencia: "Amigos de Dios" 
    },

    // --- 123. EL DESCANSO DEL ALMA (Reposo en Dios) ---
    { 
        id: "desc-03", 
        texto: "Señor, Tú nos hiciste para Ti y nuestro corazón está inquieto hasta que descanse en Ti. No busques el descanso en las distracciones que dejan el alma vacía, sino en la entrega de tus cargas a Aquel que es el único capaz de sostenerlas. El verdadero reposo no es la inactividad, sino la confianza de que estamos en buenas manos, permitiendo que el espíritu se renueve en la oración.", 
        autor: "San Agustín", 
        tags: ["descanso", "paz", "inquietud", "confianza"], 
        referencia: "Confesiones, Libro I" 
    },

    // --- 124. LOS ANIMALES Y LA CREACIÓN (Respeto divino) ---
    { 
        id: "anim-06", 
        texto: "Dios es el autor de toda vida, y cada criatura, por pequeña que sea, refleja un rayo de Su sabiduría. Los animales no poseen el don de la palabra, pero alaban al Creador con su propia existencia y fidelidad. El hombre debe mirar a los animales con respeto y compasión, recordando que fueron puestos bajo nuestro cuidado no para ser maltratados, sino para que veamos en ellos la armonía de la obra divina.", 
        autor: "San Antonio Abad", 
        tags: ["animales", "creación", "compasión", "sabiduría"], 
        referencia: "Vida de San Antonio" 
    },

    // --- 125. LA PRISA Y EL ESTRÉS (Paz interior) ---
    { 
        id: "estr-03", 
        texto: "No te apresures en tus asuntos, pues la prisa turba la razón y el juicio, e impide hacer bien aquello mismo que deseamos hacer. Camina siempre con paso firme pero tranquilo; la inquietud es la mayor enemiga de la devoción y de la eficacia. Haz cada cosa a su tiempo y con amor, confiando en que Dios te dará el espacio necesario para cumplir con tu deber si mantienes el alma en paz.", 
        autor: "San Francisco de Sales", 
        tags: ["estrés", "prisa", "paz", "prudencia"], 
        referencia: "Introducción a la vida devota" 
    },

// --- 126. EL ORDEN EN EL TRABAJO (Tu taller como templo) ---
    { 
        id: "orde-01", 
        texto: "Tratad todas las herramientas y bienes del taller o del hogar como si fueran los vasos sagrados del altar. Nada debe ser descuidado ni tratado con desidia. El orden exterior es el reflejo de un alma que busca la paz interior; cuando cuidamos el espacio donde trabajamos y las herramientas que usamos, estamos honrando al Creador que nos permite transformar la materia con nuestras manos.", 
        autor: "San Benito de Nursia", 
        tags: ["orden", "trabajo", "herramientas", "disciplina"], 
        referencia: "Regla de San Benito, Cap. 31" 
    },

    // --- 127. LA NATURALEZA Y LA SALUD (Plantas medicinales) ---
    { 
        id: "natu-03", 
        texto: "Toda la naturaleza está a disposición del ser humano para su cuidado y sanación. Las plantas contienen virtudes curativas que Dios ha puesto en ellas desde la creación para aliviar las dolencias del cuerpo y del alma. Debemos mirar la hierba del campo no solo como adorno, sino como una farmacia divina que exige nuestro estudio, respeto y gratitud por la vida que late en cada brote.", 
        autor: "Santa Hildegarda de Bingen", 
        tags: ["naturaleza", "salud", "plantas", "creación"], 
        referencia: "Physica (Tratado sobre las fuerzas sutiles)" 
    },

    // --- 128. PSICOLOGÍA Y AUTOACEPTACIÓN (El jardín propio) ---
    { 
        id: "psic-02", 
        texto: "No siembres tus deseos en el jardín de otro; cultiva con amor el tuyo propio. No desees con ansiedad ser lo que no eres, sino desea fervientemente ser muy bien lo que Dios ha hecho de ti. Muchas veces nos turbamos queriendo alcanzar virtudes ajenas y descuidamos las flores que ya crecen en nuestro interior. La paz mental comienza cuando dejamos de compararnos y aceptamos nuestra propia historia bajo la mirada de la Gracia.", 
        autor: "San Francisco de Sales", 
        tags: ["psicología", "aceptación", "paz", "crecimiento"], 
        referencia: "Cartas Espirituales" 
    },

    // --- 129. LA TIERRA COMO REGALO (Permacultura y administración) ---
    { 
        id: "tier-01", 
        texto: "La tierra es un don que se nos ha confiado no para ser devastada, sino para ser cultivada como un jardín donde cada criatura tiene su lugar y su propósito. El hombre sabio no se comporta como dueño absoluto, sino como un administrador prudente que observa los ciclos de la vida y colabora con ellos. Al cuidar la fertilidad del suelo y la diversidad de las plantas, estamos protegiendo el futuro de las generaciones que vendrán después de nosotros.", 
        autor: "San Juan Crisóstomo", 
        tags: ["tierra", "permacultura", "administración", "responsabilidad"], 
        referencia: "Homilías sobre el Génesis" 
    },

    // --- 130. LA RESILIENCIA EN LA PRUEBA (Fortaleza interna) ---
    { 
        id: "resi-01", 
        texto: "Reza, espera y no te preocupes. La preocupación es inútil y solo sirve para turbar el alma, impidiéndole ver la salida que Dios siempre prepara en medio de la tormenta. La verdadera fortaleza no consiste en no sentir miedo o dolor, sino en mantenerse firme en la esperanza cuando todo parece oscuro. Deja que el ayer se quede en la misericordia de Dios y el mañana en Su providencia; vive el hoy con la valentía de quien se sabe sostenido por manos invisibles.", 
        autor: "San Pío de Pietrelcina", 
        tags: ["resiliencia", "fortaleza", "esperanza", "confianza"], 
        referencia: "Epistolario" 
    },

// --- 131. LA ESCUCHA (El arte de recibir al otro) ---
    { 
        id: "escu-01", 
        texto: "Escucha, hijo mío, los preceptos del maestro e inclina el oído de tu corazón; recibe con gusto el consejo de un padre amoroso y cúmplelo eficazmente. La primera tarea del que busca la sabiduría y la paz no es hablar, sino hacer silencio para que la palabra del otro pueda ser recibida en su verdadera profundidad, sin juicios previos ni distracciones de la mente.", 
        autor: "San Benito de Nursia", 
        tags: ["escucha", "silencio", "sabiduría", "psicología"], 
        referencia: "Regla de San Benito, Prólogo" 
    },

    // --- 132. PACIENCIA EN LOS PROCESOS (El tiempo del alma) ---
    { 
        id: "paci-03", 
        texto: "Ten paciencia con todas las cosas, pero sobre todo ten paciencia contigo mismo. No te desanimes por tus imperfecciones, sino levántate siempre con valor para empezar de nuevo cada día. No hay jardín que florezca en una noche, ni alma que se transforme sin pasar por los ciclos necesarios de siembra, espera y poda; respeta tu propio ritmo bajo la mirada misericordiosa de Dios.", 
        autor: "San Francisco de Sales", 
        tags: ["paciencia", "procesos", "aceptación", "crecimiento"], 
        referencia: "Introducción a la vida devota" 
    },

    // --- 133. BELLEZA DE LA CREACIÓN (Lo rústico y natural) ---
    { 
        id: "bell-11", 
        texto: "Mil gracias derramando, pasó por estos sotos con presura, y, yéndolos mirando, con sola su figura, vestidos los dejó de su hermosura. Toda la belleza de los montes, la espesura de los bosques y la claridad de las aguas no son sino un reflejo del paso de Dios por la tierra. Quien sabe contemplar lo rústico y lo sencillo con ojos espirituales, encuentra en cada criatura un rastro del Amado que sosiega el alma.", 
        autor: "San Juan de la Cruz", 
        tags: ["belleza", "naturaleza", "contemplación", "paz"], 
        referencia: "Cántico Espiritual" 
    },

    // --- 134. EL VÍNCULO CON LOS ANIMALES (Solidaridad vital) ---
    { 
        id: "anim-07", 
        texto: "Los animales poseen un componente de alma, una energía vital que es reflejo de la vida divina, y el hombre no puede ser indiferente ante su sufrimiento o su alegría. Existe una solidaridad necesaria entre el ser humano y el resto de los seres vivos; el respeto hacia el animal no es una debilidad sentimental, sino un acto de justicia hacia el orden de la creación que Dios ha establecido para nuestra compañía y cuidado.", 
        autor: "San Juan Pablo II", 
        tags: ["animales", "creación", "ética", "justicia"], 
        referencia: "Audiencia General, 1990" 
    },

    // --- 135. SALUD MENTAL Y ALEGRÍA (Contra la melancolía) ---
    { 
        id: "psic-03", 
        texto: "La melancolía y la tristeza son a menudo los peores enemigos de la virtud y de la salud de la mente. Un corazón alegre se perfecciona más fácilmente que uno que siempre está rumiando sus penas. No permitas que el espíritu de la pesadumbre te encierre en ti mismo; busca la alegría sencilla, el buen humor y la confianza, pues un alma que sabe reírse de sus propias miserias está mucho más cerca de la sanación interior.", 
        autor: "San Felipe Neri", 
        tags: ["salud mental", "alegría", "psicología", "paz"], 
        referencia: "Máximas espirituales" 
    },

// --- 136. EL VALOR DEL TRABAJO MANUAL (Crear con las manos) ---
    { 
        id: "tman-01", 
        texto: "No hay trabajo humano que sea despreciable si se realiza con amor y rectitud de intención. El trabajo manual, al transformar la materia, permite al hombre colaborar con el Creador y ordenar el mundo según la razón. Que tus manos sean herramientas de paz; cuando clavas un clavo, cuando podas un árbol o cuando reparas un objeto, estás poniendo orden en el caos y ofreciendo un sacrificio de alabanza en el taller de la vida cotidiana.", 
        autor: "San Josemaría Escrivá", 
        tags: ["trabajo manual", "herramientas", "orden", "creación"], 
        referencia: "Amigos de Dios" 
    },

    // --- 137. HONESTIDAD EN LOS VÍNCULOS (La verdad en la relación) ---
    { 
        id: "hone-03", 
        texto: "La verdadera cortesía y la honestidad en el trato con los demás no consisten en ocultar la verdad bajo palabras dulces, sino en decirla con caridad y sencillez. No busques parecer lo que no eres para agradar, pues la duplicidad del corazón es una carga pesada que termina por quebrar la confianza. Una relación auténtica se construye sobre la roca de la sinceridad, donde el 'sí' es 'sí' y el 'no' es 'no', permitiendo que el alma respire en la libertad de la luz.", 
        autor: "San Francisco de Sales", 
        tags: ["honestidad", "vínculos", "verdad", "psicología"], 
        referencia: "Introducción a la vida devota" 
    },

    // --- 138. PERMACULTURA DEL ALMA (Cuidar el suelo interior) ---
    { 
        id: "palm-01", 
        texto: "Así como un jardín necesita que la tierra sea removida, abonada y protegida para que las semillas den fruto, así el alma requiere un cuidado constante de su suelo interior. No permitas que la maleza del orgullo o el desánimo ahoguen las virtudes que Dios ha sembrado en ti. Observa los ciclos de tu propia vida, respeta los tiempos de barbecho y confía en que, si cuidas la raíz con humildad y paciencia, la cosecha llegará a su debido tiempo por la fuerza de la Gracia que todo lo anima.", 
        autor: "Santa Hildegarda de Bingen", 
        tags: ["permacultura", "alma", "procesos", "naturaleza"], 
        referencia: "Scivias (Conoce los caminos)" 
    },

    // --- 139. LA AMISTAD COMO REFUGIO (Comunión espiritual) ---
    { 
        id: "amis-03", 
        texto: "No hay nada más sagrado en las relaciones humanas que una amistad fundada en la búsqueda común de la virtud y la verdad. Un verdadero amigo es aquel en quien el alma se apoya con total seguridad, a quien se le pueden confiar los secretos más íntimos sin temor al juicio y de quien se recibe el consuelo en la adversidad. La amistad es un anticipo de la comunión divina, un regalo que suaviza las asperezas del camino y nos recuerda que no estamos solos en nuestra peregrinación.", 
        autor: "San Elredo de Rieval", 
        tags: ["amistad", "refugio", "consuelo", "verdad"], 
        referencia: "La Amistad Espiritual" 
    },

    // --- 140. LA FATIGA Y LA ESPERANZA (Resiliencia mental) ---
    { 
        id: "fati-01", 
        texto: "Cuando te sientas fatigado y el camino te parezca demasiado largo, no te detengas a mirar cuánto te falta, sino mira cuánto has avanzado con la ayuda de Dios. El cansancio del espíritu es a menudo una prueba de fe; es el momento de cerrar los ojos y descansar en la certeza de que no caminas con tus propias fuerzas. El Señor no nos pide que nunca nos cansemos, sino que, en medio de la fatiga, no perdamos la esperanza y sepamos pedir el auxilio necesario para reemprender la marcha con alegría.", 
        autor: "Santa Teresa de Ávila", 
        tags: ["fatiga", "esperanza", "resiliencia", "fe"], 
        referencia: "Libro de la Vida" 
    },

// --- 146. LA NOBLEZA DEL SILENCIO COMPARTIDO (Comunión sin palabras) ---
    { 
        id: "sico-01", 
        texto: "Hay un lenguaje que trasciende las palabras y que solo se habla en el silencio del alma. El silencio compartido no es un vacío ni una ausencia, sino una forma superior de presencia donde dos personas se encuentran en la Verdad, sin necesidad de explicaciones. Para que el silencio sea fecundo, el corazón debe estar en paz; entonces, el silencio se convierte en el espacio sagrado donde Dios actúa y donde los vínculos se fortalecen en lo invisible.", 
        autor: "San Juan de la Cruz", 
        tags: ["silencio", "comunión", "paz", "vínculos"], 
        referencia: "Dichos de Luz y Amor" 
    },

    // --- 147. EL TRATO CON LOS HIJOS EN LA LIBERTAD (Educar para el amor) ---
    { 
        id: "hlib-01", 
        texto: "La libertad no consiste en hacer lo que nos gusta, sino en tener el derecho de hacer lo que debemos. La educación de los hijos debe orientarse a formar esta libertad interior, permitiéndoles descubrir su propia vocación sin imposiciones externas que ahoguen su espíritu. Los padres son los primeros maestros, no por el dominio, sino por el testimonio de una vida coherente que muestra que la verdadera libertad es aquella que se pone al servicio del bien y de la verdad.", 
        autor: "San Juan Pablo II", 
        tags: ["hijos", "libertad", "familia", "educación"], 
        referencia: "Carta a las Familias (Gratissimum Sane)" 
    },

    // --- 148. LA BELLEZA DE LA AUSTERIDAD Y LO SIMPLE (Desapego liberador) ---
    { 
        id: "ausi-01", 
        texto: "Recuerda que al dejar este mundo no te llevas nada de lo que has recibido, solo lo que has dado: un corazón lleno de servicio, de amor, de sacrificio y de valor. La austeridad no es carencia, sino la libertad de no estar esclavizado por las cosas que se poseen. Al simplificar la vida exterior, el alma encuentra espacio para expandirse; lo simple tiene una belleza propia que refleja la claridad de Dios y nos devuelve la paz que el exceso de preocupaciones mundanas nos arrebata.", 
        autor: "San Francisco de Asís", 
        tags: ["austeridad", "simplicidad", "paz", "desapego"], 
        referencia: "Escritos de San Francisco" 
    },

    // --- 149. LA PALABRA COMO ESPEJO DEL ALMA (La ética del decir) ---
    { 
        id: "pala-02", 
        texto: "La palabra que suena fuera es signo de la palabra que luce dentro, en el fondo del alma. Por eso, el cuidado de lo que decimos debe nacer del cuidado de lo que pensamos y sentimos. Una palabra verdadera tiene el poder de sanar y de iluminar, mientras que una palabra vacía o engañosa fragmenta la integridad de quien la pronuncia. Busca siempre que tu decir sea un reflejo fiel de tu ser interior, pues la palabra es el puente sagrado por el cual nos revelamos a los demás y a nosotros mismos.", 
        autor: "San Agustín", 
        tags: ["palabra", "verdad", "integridad", "psicología"], 
        referencia: "De Trinitate, Libro XV" 
    },

    // --- 150. EL ASOMBRO: PRINCIPIO DE LA SABIDURÍA (La mirada del niño) ---
    { 
        id: "asom-01", 
        texto: "El asombro es un cierto deseo de saber que nace en el hombre al contemplar un efecto cuya causa desconoce. Sin la capacidad de asombrarse, la razón se vuelve fría y el corazón se endurece en la rutina. El sabio es aquel que nunca pierde la mirada del niño ante el misterio de la creación, reconociendo en cada detalle —desde el orden de los astros hasta la vida en una hoja— la huella de una Inteligencia Superior que nos invita a la admiración y al agradecimiento.", 
        autor: "Santo Tomás de Aquino", 
        tags: ["asombro", "sabiduría", "misterio", "conocimiento"], 
        referencia: "Suma Teológica, I-II, q. 32" 
    },

];

// ==========================================
// MOTOR DE LÓGICA (DEBE IR ABAJO DE LAS FRASES)
// ==========================================

let tagActivo = "";

function renderFrases(lista) {
    const grid = document.getElementById('frasesGrid');
    if (!grid) return;
    grid.innerHTML = "";

    lista.forEach((f) => {
        const card = document.createElement('div');
        card.className = "frase-card";
        card.onclick = () => abrirModal(f.id);
        card.innerHTML = `
            <p class="frase-texto">"${f.texto}"</p>
            <p class="frase-autor">${f.autor}</p>
            <div class="frase-tags">${f.tags.map(t => `<span>#${t}</span>`).join(' ')}</div>
        `;
        grid.appendChild(card);
    });
}

function filtrar() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const filtradas = frases.filter(f => {
        const cumpleTexto = f.texto.toLowerCase().includes(q) || f.autor.toLowerCase().includes(q) || f.tags.some(t => t.toLowerCase().includes(q));
        const cumpleTag = tagActivo === "" || f.tags.includes(tagActivo);
        return cumpleTexto && cumpleTag;
    });
    renderFrases(filtradas);
}

function abrirModal(id) {
    const f = frases.find(item => item.id === id);
    if (!f) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <p style="font-family:'Playfair Display'; font-size:1.8rem; font-style:italic;">"${f.texto}"</p>
        <p style="margin-top:20px; font-weight:bold; color:#B8860B;">${f.autor}</p>
        <p style="font-size:0.8rem; opacity:0.5;">Fuente: ${f.referencia}</p>
    `;

    document.getElementById('modal').style.display = "flex";
    
    // Deep Linking
    const nuevaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?frase=' + f.id;
    window.history.pushState({ path: nuevaUrl }, '', nuevaUrl);
}

function cerrarModal() {
    document.getElementById('modal').style.display = "none";
    const urlBase = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: urlBase }, '', urlBase);
}

function compartirWA() {
    const params = new URLSearchParams(window.location.search);
    const idFrase = params.get('frase');
    const f = frases.find(item => item.id === idFrase);
    
    if(!f) return;

    const url = window.location.href;
    const mensaje = `✨ *Sabiduría del Alma* ✨\n\n"${f.texto}"\n\n_${f.autor}_\n\nLeé más aquí: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
}

window.onload = () => {
    renderFrases(frases);
    
    // Generar botones de tags automáticamente
    const todosLosTags = [...new Set(frases.flatMap(f => f.tags))].sort();
    const container = document.getElementById('tagList');
    if(container) {
        todosLosTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = "filter-tag";
            btn.innerText = tag;
            btn.onclick = () => {
                tagActivo = (tagActivo === tag) ? "" : tag;
                document.querySelectorAll('.filter-tag').forEach(b => b.classList.toggle('active', b.innerText === tagActivo));
                filtrar();
            };
            container.appendChild(btn);
        });
    }

    // Deep Linking
    const params = new URLSearchParams(window.location.search);
    if (params.has('frase')) {
        abrirModal(params.get('frase'));
    }
};