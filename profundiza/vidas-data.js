const biografias = [
    // --- TANDA 1 ---
    {
        id: "v-mari-01",
        nombre: "Virgen María",
        titulo: "El 'Sí' que redimió la historia",
        origen: "Nazaret, Galilea",
        fechas: "Siglo I a.C. - Siglo I d.C.",
        resumen: "Una joven sencilla que, mediante su libertad, permitió la entrada de lo Eterno en el tiempo.",
        historia: "María vivía en una aldea olvidada. Su vida cambió cuando aceptó un plan que no comprendía del todo, pero que sentía como Verdad. Acompañó a Jesús en los momentos de éxito y en la absoluta oscuridad de la cruz. Ella es el modelo máximo de la 'entrega': no suprime su personalidad, sino que la expande al decir 'Hágase'. Nos enseña que la verdadera grandeza nace de la escucha y de guardar las cosas en el corazón para encontrarles un sentido profundo.",
        frase: "He aquí la esclava del Señor; hágase en mí según tu palabra."
    },
    {
        id: "v-jose-01",
        nombre: "San José",
        titulo: "El Custodio del Silencio",
        origen: "Belén / Nazaret",
        fechas: "Siglo I a.C. - Siglo I d.C.",
        resumen: "El hombre justo que protegió la Vida con la elocuencia de sus actos y su trabajo manual.",
        historia: "José es el santo que no dice una sola palabra en la Biblia; sus palabras son sus manos. Como carpintero, fue el responsable de cuidar y alimentar a Jesús y María. Tuvo que tomar decisiones urgentes, como huir a otro país (Egipto) para salvar al niño de la violencia. Es el patrón de los trabajadores porque santificó el esfuerzo diario en su taller. Nos demuestra que proteger a los que amamos es una forma altísima de amor silencioso, constante y eficaz.",
        frase: "San José: El hombre justo que aceptó el misterio en el silencio."
    },
    {
        id: "v-ppio-01",
        nombre: "San Pío de Pietrelcina",
        titulo: "El Confesor de las Almas",
        origen: "Pietrelcina, Italia",
        fechas: "1887 - 1968",
        resumen: "Llevó en su carne las llagas de Cristo y dedicó su vida a sanar corazones en el confesionario.",
        historia: "El Padre Pío fue un misterio viviente del siglo XX. Durante 50 años tuvo en su cuerpo los 'estigmas' (que son heridas en las manos y pies iguales a las de Jesús en la cruz). Pero sus dones iban más allá: tenía 'bilocación' (la capacidad asombrosa de estar en dos lugares al mismo tiempo para consolar a un enfermo) y podía 'leer los corazones' (sabía lo que la gente sentía o callaba antes de que hablaran). Pasaba horas confesando, recordándonos que Dios siempre quiere perdonarnos.",
        frase: "Haré más desde el cielo de lo que puedo hacer en la tierra."
    },
    {
        id: "v-cart-01",
        nombre: "Beato Carlo Acutis",
        titulo: "El Ciberapóstol de la Eucaristía",
        origen: "Londres (Nacimiento) / Milán (Vida)",
        fechas: "1991 - 2006",
        resumen: "Un adolescente de jeans y zapatillas que usó internet para abrir una autopista al cielo.",
        historia: "Carlo era un chico como cualquier otro: le gustaban los videojuegos, el fútbol y la informática. Sin embargo, sentía que la Eucaristía (la hostia consagrada en misa) era su 'autopista al cielo'. Usó su talento de programador para crear una web que mostrara los milagros de Dios en el mundo. Defendía a los compañeros que sufrían bullying y ayudaba a los pobres con sus ahorros. Murió muy joven de leucemia, ofreciendo su dolor por los demás. Es el signo de que se puede ser joven, tecnológico y profundamente santo.",
        frase: "Todos nacemos como originales, pero muchos mueren como fotocopias."
    },
    {
        id: "v-mpor-01",
        nombre: "San Martín de Porres",
        titulo: "El Santo de la Escoba",
        origen: "Lima, Perú",
        fechas: "1579 - 1639",
        resumen: "Un mulato peruano que curó almas y cuerpos con una humildad que derribó prejuicios.",
        historia: "Martín fue hijo de un español y una mujer negra liberta, por lo que sufrió mucha discriminación. Al entrar a los dominicos, pidió el trabajo más sencillo: barrer. Pero Dios le dio dones increíbles, como la capacidad de curar enfermedades con solo tocar a las personas y la 'bilocación' (estar en dos sitios a la vez). Amaba tanto a los animales que los curaba y los hacía convivir en paz. Nos enseñó que no hay trabajo pequeño si se hace con un amor gigante y que todos somos iguales ante los ojos del Padre.",
        frase: "Todo hasta por el más pequeño, por amor a Dios."
    },
    {
        id: "v-hild-01",
        nombre: "Santa Hildegarda de Bingen",
        titulo: "La Sabia de la Naturaleza",
        origen: "Bermersheim, Alemania",
        fechas: "1098 - 1179",
        resumen: "Mística y científica que descubrió en las plantas la fuerza sanadora de Dios.",
        historia: "Hildegarda fue una mujer brillante que estudió música, botánica y medicina. Ella hablaba de la 'Viriditas', que es la fuerza verde y vital que Dios puso en las plantas para curar nuestro cuerpo. Tenía 'visiones' (veía luces y símbolos que le explicaban el funcionamiento del universo) y escribió libros sobre cómo la alimentación y el contacto con la naturaleza ayudan a la salud del alma. Nos enseñó que cuidar la creación y cuidar nuestro cuerpo es una forma de alabar a Dios.",
        frase: "Toda la naturaleza está a disposición del hombre; debemos trabajar con ella."
    },

    // --- TANDA 2 ---
    {
        id: "v-pedr-02",
        nombre: "San Pedro",
        titulo: "La Roca que supo llorar",
        origen: "Betsaida, Galilea",
        fechas: "Siglo I a.C. - 67 d.C.",
        resumen: "Un pescador impulsivo que aprendió que la autoridad nace de la humildad de ser perdonado.",
        historia: "Simón era un hombre de temperamento fuerte, de los que actúan antes de pensar. Jesús le cambió el nombre a Pedro ('Piedra'), pero esa piedra se quebró cuando negó a su Maestro tres veces por miedo. Sin embargo, Pedro nos enseña el valor psicológico del arrepentimiento: sus lágrimas limpiaron su orgullo. Se convirtió en el primer Papa y murió en Roma pidiendo ser crucificado boca abajo, por no considerarse digno de morir como Jesús. Es el santo de las segundas oportunidades.",
        frase: "Señor, Tú lo sabes todo; Tú sabes que te amo."
    },
    {
        id: "v-pabl-02",
        nombre: "San Pablo de Tarso",
        titulo: "El Arquitecto de la Palabra",
        origen: "Tarso, actual Turquía",
        fechas: "5 d.C. - 67 d.C.",
        resumen: "De perseguidor implacable a ser el misionero más grande de la historia cristiana.",
        historia: "Saulo era un intelectual brillante que perseguía a los cristianos con violencia. Pero una experiencia fulminante camino a Damasco lo dejó ciego para que pudiera empezar a ver con el alma. Su conversión fue un giro de 180 grados: pasó de odiar a amar con la misma intensidad. Recorrió miles de kilómetros fundando comunidades y escribiendo cartas que hoy son la base de nuestra fe. Nos demuestra que no importa qué tan lejos estés de Dios, siempre podés reorientar tu vida hacia el Bien.",
        frase: "Para mí la vida es Cristo, y la muerte una ganancia."
    },
    {
        id: "v-agus-02",
        nombre: "San Agustín de Hipona",
        titulo: "El Buscador del Corazón Inquieto",
        origen: "Tagaste, actual Argelia",
        fechas: "354 - 430",
        resumen: "Un joven rebelde y brillante que encontró la paz al dejar de buscarla afuera y mirar en su interior.",
        historia: "Agustín es, quizás, el primer gran psicólogo de la historia. Pasó su juventud buscando la felicidad en los placeres, el éxito intelectual y las filosofías extrañas, pero nada llenaba su vacío. Tras años de lucha interna y gracias a las oraciones de su madre (Santa Mónica), entendió que el ser humano tiene un 'agujero en el alma' que solo lo Infinito puede llenar. Sus 'Confesiones' son un mapa de la honestidad emocional y de cómo la Verdad nos hace finalmente libres.",
        frase: "Nos hiciste, Señor, para Ti, y nuestro corazón está inquieto hasta que descanse en Ti."
    },
    {
        id: "v-fran-02",
        nombre: "San Francisco de Asís",
        titulo: "El Hermano de la Creación",
        origen: "Asís, Italia",
        fechas: "1182 - 1226",
        resumen: "Renunció a las riquezas para vivir la alegría de la sencillez y la fraternidad con todo lo vivo.",
        historia: "Francisco era un joven rico que soñaba con ser un caballero famoso. Pero tras una guerra y una enfermedad, escuchó a Jesús decirle: 'Repara mi casa'. Se despojó de su ropa cara y abrazó la pobreza absoluta. Amaba tanto a los animales y las plantas que los llamaba 'hermanos'. Al final de su vida recibió los 'estigmas' (las mismas heridas de Jesús en sus manos y pies), convirtiéndose en un reflejo vivo del amor sacrificado. Nos enseña que menos es más y que la paz nace de la armonía con lo creado.",
        frase: "Lo que el hombre es ante Dios, eso es y nada más."
    },
    {
        id: "v-igna-02",
        nombre: "San Ignacio de Loyola",
        titulo: "El Soldado de la Voluntad",
        origen: "Azpeitia, España",
        fechas: "1491 - 1556",
        resumen: "Cambió su espada por la oración tras ser herido, fundando una escuela de orden interior.",
        historia: "Ignacio era un militar orgulloso hasta que una bala de cañón le destrozó la pierna. En su larga recuperación, descubrió el 'Discernimiento', que es la capacidad de analizar qué pensamientos nos traen paz y cuáles nos traen desolación. Creó los 'Ejercicios Espirituales', un método para ordenar la vida y tomar decisiones libres de miedos o egoísmos. Fundó a los Jesuitas y nos enseñó que la mayor batalla no es contra los demás, sino por conquistar nuestro propio corazón para servir al mundo.",
        frase: "En todo amar y servir."
    },
    {
        id: "v-tere-02",
        nombre: "Santa Teresita de Lisieux",
        titulo: "La Maestra del Caminito",
        origen: "Alençon, Francia",
        fechas: "1873 - 1897",
        resumen: "Descubrió que la santidad no es hacer cosas gigantes, sino hacer lo pequeño con un amor extraordinario.",
        historia: "Teresa entró a un convento muy joven. Se sentía pequeña y débil, incapaz de las grandes hazañas de otros santos. Entonces inventó su 'Caminito': la infancia espiritual. Consistía en sonreír a quien te molesta, no quejarse del frío o hacer bien los trabajos más sencillos por amor a Dios. Murió a los 24 años, demostrando que la psicología de la confianza y el abandono en el amor del Padre es el camino más corto hacia la paz y la plenitud.",
        frase: "Mi vocación es el amor."
    },
    {
        id: "v-faust-02",
        nombre: "Santa Faustina Kowalska",
        titulo: "La Secretaria de la Misericordia",
        origen: "Glogowiec, Polonia",
        fechas: "1905 - 1938",
        resumen: "Una monja sencilla que le recordó al mundo que el perdón de Dios no tiene límites.",
        historia: "Faustina trabajaba en la cocina y el jardín de su convento. Tuvo 'revelaciones privadas', que son comunicaciones directas de Jesús a su alma a través de visiones. En ellas, Jesús le pidió que pintara la imagen de la Divina Misericordia (con rayos rojos y blancos) para recordar que Dios es un Padre que siempre espera con los brazos abiertos. Su vida fue un testimonio de confianza absoluta: nos enseña que el pecado es una gota de agua frente al océano de la misericordia divina.",
        frase: "Jesús, en Ti confío."
    },
    {
        id: "v-kolb-02",
        nombre: "San Maximiliano Kolbe",
        titulo: "El Mártir del Amor Máximo",
        origen: "Zdunska Wola, Polonia",
        fechas: "1894 - 1941",
        resumen: "El sacerdote que dio su vida a cambio de la de un padre de familia en el campo de Auschwitz.",
        historia: "En el horror de un campo de concentración nazi, un hombre fue condenado a morir de hambre y lloraba por su esposa e hijos. Kolbe, un fraile que usaba la radio y las revistas para evangelizar, dio un paso al frente y dijo: 'Soy un sacerdote católico, quiero morir por él'. En la celda de la muerte, transformó los gritos en himnos. Su sacrificio es la derrota definitiva del odio: nos demuestra que el ser humano es capaz de la mayor luz incluso en la oscuridad más profunda del mal.",
        frase: "Solo el amor crea; el odio solo destruye."
    },
    {
        id: "v-giann-02",
        nombre: "Santa Gianna Beretta Molla",
        titulo: "La Médica de la Vida",
        origen: "Magenta, Italia",
        fechas: "1922 - 1962",
        resumen: "Una médica y madre moderna que defendió la vida de su hija por encima de la suya.",
        historia: "Gianna era una mujer de nuestro tiempo: médica pediatra, le gustaba esquiar y amaba la música. Estando embarazada de su cuarta hija, le detectaron un tumor. Los médicos sugirieron un tratamiento que salvaría su vida pero terminaría con la del bebé. Ella fue clara: 'Si tienen que elegir entre los dos, elijan al niño'. Murió pocos días después de dar a luz. Su vida es una cátedra de ética clínica y amor materno, recordándonos que la vida es un don sagrado que merece ser protegido hasta el final.",
        frase: "El amor y el sacrificio están tan unidos como el sol y la luz."
    },
    {
        id: "v-rita-02",
        nombre: "Santa Rita de Casia",
        titulo: "La Abogada de lo Imposible",
        origen: "Roccaporena, Italia",
        fechas: "1381 - 1457",
        resumen: "Una mujer que transformó la violencia y el dolor en un camino de perdón y resiliencia.",
        historia: "Rita sufrió mucho: tuvo un esposo violento y perdió a sus dos hijos. En medio de un mundo lleno de venganzas, ella logró reconciliar a familias enemistadas. Como signo de su unión con el sufrimiento de Jesús, recibió una astilla de la corona de espinas en su frente. Su vida es un ejemplo de 'resiliencia' (la capacidad de superar traumas graves y salir fortalecido). Es el refugio de quienes sienten que su situación no tiene salida, recordándonos que con fe, lo imposible se vuelve posible.",
        frase: "Ámalo todo, súfrelo todo por amor a Aquel que lo dio todo."
    },

    // --- TANDA 3 ---
    {
        id: "v-beni-03",
        nombre: "San Benito de Nursia",
        titulo: "El Arquitecto del Orden Interior",
        origen: "Nursia, Italia",
        fechas: "480 - 547",
        resumen: "Fundador de la vida monástica en Occidente; nos enseñó que el trabajo es una forma de oración.",
        historia: "En una época de caos, Benito entendió que el ser humano necesita un ritmo para no enfermar. Creó la regla 'Ora et Labora' (Reza y Trabaja). Nos enseñó que el trabajo manual —ya sea en la huerta o en un taller— no es un castigo, sino una forma de colaborar con Dios. Su método organiza el día para que haya tiempo para el silencio, la lectura y el esfuerzo físico. Es el santo que nos enseña que el orden exterior ayuda a calmar el desorden del alma.",
        frase: "La ociosidad es enemiga del alma."
    },
    {
        id: "v-jcru-03",
        nombre: "San Juan de la Cruz",
        titulo: "El Poeta de la Noche Oscura",
        origen: "Fontiveros, España",
        fechas: "1542 - 1591",
        resumen: "El místico que exploró las profundidades del alma para encontrar la luz en medio del dolor.",
        historia: "Juan fue un hombre de una sensibilidad extrema que sufrió la cárcel y el abandono. En su celda oscura, entendió que el alma a veces pasa por una 'Noche Oscura'. Esto no es una simple tristeza, sino un proceso profundo donde Dios nos 'limpia' de apegos y egoísmos para que podamos amar de verdad. Su psicología espiritual es una guía para quienes atraviesan crisis de fe o de identidad, recordándonos que en el centro del silencio es donde finalmente nos encontramos con lo Eterno.",
        frase: "Al final de la jornada, seremos examinados en el amor."
    },
    {
        id: "v-fsal-03",
        nombre: "San Francisco de Sales",
        titulo: "El Santo de la Dulzura",
        origen: "Saboya, Francia",
        fechas: "1567 - 1622",
        resumen: "El psicólogo de la amabilidad que demostró que se llega más lejos con paciencia que con rigor.",
        historia: "Francisco tenía un carácter muy fuerte y explosivo, pero trabajó sobre sí mismo durante veinte años hasta convertirse en el hombre más dulce de su tiempo. Nos enseñó que la santidad no es solo para monjes, sino para el que trabaja, el que cría hijos y el que vive en la ciudad. Su consejo era la 'paciencia con uno mismo': no castigarse por los errores, sino levantarse con suavidad. Es el patrón de los comunicadores porque sabía decir verdades difíciles sin lastimar el corazón.",
        frase: "Se cazan más moscas con una gota de miel que con un barril de vinagre."
    },
    {
        id: "v-luca-03",
        nombre: "San Lucas Evangelista",
        titulo: "El Médico de la Misericordia",
        origen: "Antioquía (actual Turquía)",
        fechas: "Siglo I d.C.",
        resumen: "Médico de profesión que narró con detalle la ternura de Jesús hacia los enfermos.",
        historia: "Lucas era un médico culto que decidió investigar la vida de Jesús a través de los ojos de quienes lo conocieron, especialmente de la Virgen María. Por eso, en sus escritos se nota una mirada clínica: se detiene en las sanaciones y en el dolor humano con mucha compasión. Entendió que el ser humano es una unidad y que la salud del alma es tan importante como la del cuerpo. Es el patrón de los médicos y artistas, recordándonos que el cuidado del otro es un arte sagrado.",
        frase: "Donde está tu tesoro, allí estará también tu corazón."
    },
    {
        id: "v-isid-03",
        nombre: "San Isidro Labrador",
        titulo: "El Místico de la Tierra",
        origen: "Madrid, España",
        fechas: "1080 - 1130",
        resumen: "Un trabajador sencillo que demostró que el campo es un altar y el trabajo manual un camino a Dios.",
        historia: "Isidro era un campesino que vivía en armonía con los ciclos de la naturaleza. Sabía que para que la tierra dé fruto, primero hay que cultivar la paz interior. La tradición dice que mientras él se perdía en oración, los ángeles guiaban sus bueyes para que el trabajo no se detuviera. Nos enseña el valor de cuidar el jardín y el suelo: que trabajar la tierra con respeto y amor es una forma de oración que alimenta tanto el cuerpo como el espíritu de la comunidad.",
        frase: "Todo es posible para el que cree, pero nada es fecundo para el que no ama."
    },
    {
        id: "v-feli-03",
        nombre: "San Felipe Neri",
        titulo: "El Apóstol de la Alegría",
        origen: "Florencia, Italia",
        fechas: "1515 - 1595",
        resumen: "El santo que combatió la tristeza con el humor y la humildad, devolviendo la sonrisa a la Iglesia.",
        historia: "Felipe era un psicólogo nato de la alegría. En una época de mucha rigidez, él decía que 'un santo triste es un triste santo'. Usaba el humor, la música y las caminatas al aire libre para sacar a la gente de su encierro mental y de la depresión. Se burlaba de su propio prestigio para no caer en el ego. Nos enseñó que el gozo es el mejor signo de que Dios está presente y que una sonrisa puede abrir más puertas al cielo que mil discursos serios.",
        frase: "La alegría fortalece el corazón y nos hace perseverar en la vida buena."
    },
    {
        id: "v-anto-03",
        nombre: "San Antonio Abad",
        titulo: "El Padre del Desierto",
        origen: "Egipto",
        fechas: "251 - 356",
        resumen: "El místico que encontró en el silencio y en la compañía de los animales la voz de Dios.",
        historia: "Antonio lo dejó todo para vivir en el desierto. Allí enfrentó sus miedos y deseos más profundos (lo que hoy llamaríamos el inconsciente) para encontrar la paz total. Se cuenta que los animales salvajes lo respetaban y lo acompañaban, viendo en él la paz del paraíso recobrado. Es el protector de los animales y el maestro de la soledad sana: nos recuerda que para estar bien con los demás, primero hay que aprender a estar en silencio y en paz con uno mismo.",
        frase: "El que se sienta en quietud se libra de tres guerras: la del oído, la de la palabra y la de la vista."
    },
    {
        id: "v-cami-03",
        nombre: "San Camilo de Lelis",
        titulo: "El Gigante de la Caridad Clínica",
        origen: "Abruzos, Italia",
        fechas: "1550 - 1614",
        resumen: "Un ex-soldado que revolucionó la medicina exigiendo que los enfermos fueran tratados con dignidad.",
        historia: "Camilo era un hombre rudo y con problemas de juego hasta que su vida dio un vuelco. Al ver el trato cruel que recibían los enfermos, decidió que cada paciente era el mismo Cristo. Fue el creador de la asistencia hospitalaria moderna: exigía aire limpio, comida sana y, sobre todo, que los enfermeros pusieran 'más corazón en las manos'. Nos enseñó que la medicina es una técnica, pero el cuidado del paciente es un acto de amor que sana más que cualquier fármaco.",
        frase: "Más corazón en esas manos, hermanos, más corazón."
    },
    {
        id: "v-caye-03",
        nombre: "San Cayetano de Thiene",
        titulo: "El Padre de la Providencia",
        origen: "Vicenza, Italia",
        fechas: "1480 - 1547",
        resumen: "Un abogado que lo dejó todo para fundar hospitales y ayudar a los pobres a recuperar su dignidad.",
        historia: "Cayetano era un hombre de leyes que entendió que la justicia no es nada sin la caridad. En una época de crisis, fundó bancos para que los pobres no cayeran en manos de usureros y hospitales para los que no tenían nada. Confiaba ciegamente en la 'Providencia' (la ayuda de Dios que llega justo a tiempo). Es el patrón del pan y del trabajo porque entendió que para que un hombre tenga paz en el alma, primero debe tener dignidad en su mesa.",
        frase: "No busquéis el oro, sino el Reino de Dios, y todo lo demás vendrá por añadidura."
    },

    // --- TANDA 4 ---
    {
        id: "v-juad-04",
        nombre: "San Juan de Dios",
        titulo: "El Padre de los Hospitales",
        origen: "Montemor-o-Novo, Portugal",
        fechas: "1495 - 1550",
        resumen: "Un hombre que pasó por la 'locura' para entender que el amor es la mejor medicina para el alma.",
        historia: "Juan llevó una vida de aventuras y batallas hasta que escuchó una predicación que le rompió el corazón de emoción. Su reacción fue tan intensa que lo encerraron en un manicomio de la época. Allí sufrió los tratamientos crueles que se daban a los enfermos mentales y decidió que, si salía, crearía hospitales donde se curara con ternura. Fue el pionero de la psiquiatría humanizada: separó a los enfermos por dolencias y les dio una cama propia, tratándolos no como 'locos', sino como hermanos.",
        frase: "Haced el bien a vosotros mismos haciendo el bien a los demás."
    },
    {
        id: "v-tava-04",
        nombre: "Santa Teresa de Jesús",
        titulo: "La Maestra de las Moradas",
        origen: "Ávila, España",
        fechas: "1515 - 1582",
        resumen: "Una mujer brillante que exploró el 'castillo interior' de la mente y el alma.",
        historia: "Teresa era una mujer de una inteligencia y un sentido del humor extraordinarios. Reformó su orden religiosa viajando por toda España, a pesar de sus enfermedades. Ella nos enseñó que orar no es repetir frases, sino 'tratar de amistad' con Dios. En su libro 'Las Moradas', describe el interior del alma como un castillo de diamante con muchas habitaciones (lo que hoy veríamos como niveles de consciencia). Nos recuerda que Dios está presente incluso 'entre los pucheros de la cocina', en lo más cotidiano.",
        frase: "Nada te turbe, nada te espante, todo se pasa, Dios no se muda."
    },
    {
        id: "v-roqu-04",
        nombre: "San Roque",
        titulo: "El Peregrino del Consuelo",
        origen: "Montpellier, Francia",
        fechas: "1295 - 1327",
        resumen: "El santo que curaba la peste y encontró en la lealtad de un perro su única compañía.",
        historia: "Roque era un joven rico que vendió todo para irse como mendigo a Roma. En el camino, se encontró con la Peste Negra. Sin miedo, se dedicó a cuidar a los moribundos. Cuando él mismo se contagió, se escondió en un bosque para no molestar a nadie. Allí, un perro le llevaba pan cada día y lamía sus heridas hasta que sanó. Es el protector de los animales y nos enseña que la caridad verdadera no tiene miedo al dolor ajeno y que Dios cuida de nosotros a través de la naturaleza.",
        frase: "En el servicio al que sufre, se encuentra el rostro de Dios."
    },
    {
        id: "v-jarc-04",
        nombre: "Santa Juana de Arco",
        titulo: "La Doncella de la Misión",
        origen: "Domrémy, Francia",
        fechas: "1412 - 1431",
        resumen: "Una campesina adolescente que escuchó su voz interior y cambió el destino de su país.",
        historia: "Juana era una chica de campo que no sabía leer ni escribir, pero 'escuchaba voces' (mensajes celestiales de santos) que le pedían salvar a Francia de la guerra. Con una valentía que asombró a generales, lideró ejércitos y coronó a un rey. Fue traicionada y sometida a un juicio psicológicamente agotador, donde demostró una lucidez increíble. Murió en la hoguera a los 19 años. Nos enseña que la verdadera misión no depende del estudio, sino de la fidelidad a la propia conciencia.",
        frase: "Yo no tengo miedo; para esto nací."
    },
    {
        id: "v-amag-04",
        nombre: "San Alberto Magno",
        titulo: "El Maestro de la Ciencia y la Fe",
        origen: "Baviera, Alemania",
        fechas: "1206 - 1280",
        resumen: "El sabio que buscó a Dios en la botánica, la geología y la lógica del universo.",
        historia: "Alberto era un hombre de una curiosidad infinita. En una época de mucha superstición, él decía que hay que investigar las 'causas naturales' de las cosas. Estudió las piedras, las plantas y los animales con el rigor de un científico. Fue el maestro de Santo Tomás de Aquino y le enseñó que la razón y la fe no son enemigas, sino dos alas para volar hacia la Verdad. Nos demuestra que estudiar el mundo es otra forma de adorar al Programador que diseñó este universo.",
        frase: "El objetivo de la ciencia es investigar las causas que actúan en la naturaleza."
    },
    {
        id: "v-jbos-04",
        nombre: "San Juan Bosco",
        titulo: "El Padre de la Alegría Joven",
        origen: "Castelnuovo Don Bosco, Italia",
        fechas: "1815 - 1888",
        resumen: "El sacerdote que salvó a miles de chicos de la calle usando la educación del corazón.",
        historia: "Don Bosco creció en la pobreza y entendió que a los jóvenes no se los cambia con castigos, sino con afecto. Creó los 'Oratorios', lugares donde los chicos podían jugar, aprender un oficio y sentirse amados. Tenía sueños 'proféticos' (sueños donde Dios le mostraba lo que sus chicos necesitaban). Fundó los Salesianos y nos dejó una lección de psicología educativa: 'No basta amar a los niños; es preciso que ellos se den cuenta de que son amados'.",
        frase: "La santidad consiste en estar siempre alegres."
    },
    {
        id: "v-mmag-04",
        nombre: "Santa María Magdalena",
        titulo: "La Apóstol de la Resurrección",
        origen: "Magdala, Galilea",
        fechas: "Siglo I d.C.",
        resumen: "La mujer que amó mucho porque se le perdonó mucho; la primera testigo del triunfo sobre la muerte.",
        historia: "María Magdalena conocía bien la oscuridad hasta que se encontró con Jesús. Él la sanó de tormentos del alma y el cuerpo. Desde entonces, lo siguió con una lealtad absoluta. Fue la única que no huyó el Viernes Santo; se quedó al pie de la cruz cuando casi todos los hombres se escondieron. Por esa fidelidad, Jesús la eligió para ser la primera en verlo vivo el domingo de Pascua. Nos enseña que el pasado no nos define, sino nuestra capacidad de amar en el presente.",
        frase: "¡He visto al Señor!"
    },
    {
        id: "v-fjax-04",
        nombre: "San Francisco Javier",
        titulo: "El Gigante de las Misiones",
        origen: "Javier, España",
        fechas: "1506 - 1552",
        resumen: "El navegante de Dios que llevó el mensaje de paz hasta los confines de Asia.",
        historia: "Francisco era un noble orgulloso y brillante que estudiaba en París. San Ignacio de Loyola lo convenció de que no servía de nada ganar el mundo si perdía su alma. Se convirtió en el mayor misionero de la historia: viajó a la India y Japón, aprendiendo sus lenguas para poder hablarles de corazón a corazón. Su vida es un ejemplo de adaptación y coraje, recordándonos que el mensaje de Dios no tiene fronteras y que la verdadera aventura es salir de uno mismo para servir.",
        frase: "¿De qué le sirve al hombre ganar el mundo entero, si pierde su alma?"
    },
    {
        id: "v-rlim-04",
        nombre: "Santa Rosa de Lima",
        titulo: "La Primera Flor de América",
        origen: "Lima, Perú",
        fechas: "1586 - 1617",
        resumen: "Una joven que convirtió su hogar en un santuario de oración y servicio a los más olvidados.",
        historia: "Rosa era tan bella que todos la llamaban 'Rosa' por su rostro. Sin embargo, ella decidió que su belleza sería para Dios. Se construyó una cabaña en su jardín para rezar y allí atendía a los enfermos y a los nativos que sufrían injusticias en su época. Es la primera santa del continente americano. Nos enseña que no hace falta viajar lejos para ser santo; se puede transformar el mundo desde el propio jardín, con oración profunda y manos dispuestas a ayudar.",
        frase: "Aparte de la cruz no hay otra escalera por la que podamos llegar al cielo."
    },

    // --- TANDA 5 ---
    {
        id: "v-expe-37",
        nombre: "San Expedito",
        titulo: "El Santo del 'Hoy'",
        origen: "Melitene, Antigua Armenia",
        fechas: "Murió en el 303 d.C.",
        resumen: "El soldado que venció la tentación de dejar para mañana su decisión por el Bien.",
        historia: "Expedito era un militar romano de alto rango. Cuando decidió convertirse al cristianismo, se dice que el demonio se le apareció en forma de cuervo gritando 'Cras, cras' (que en latín significa 'Mañana'). Sin dudar, Expedito pisoteó al cuervo y proclamó: 'Hodie' (Hoy). Nos enseña que para los cambios importantes de la vida no hay que esperar: el momento de sanar y de actuar es ahora. Es el patrón de las causas urgentes porque su vida es un ejemplo de decisión inmediata.",
        frase: "No dejes para mañana lo que Dios te pide que hagas hoy."
    },
    {
        id: "v-juda-38",
        nombre: "San Judas Tadeo",
        titulo: "El Patrón de la Esperanza Extrema",
        origen: "Galilea, Israel",
        fechas: "Siglo I d.C.",
        resumen: "El apóstol que nos enseña a no bajar los brazos cuando todo parece perdido.",
        historia: "A menudo confundido con el traidor por tener el mismo nombre, Judas Tadeo fue uno de los amigos más cercanos de Jesús. Su misión es recordarnos que la esperanza no es un optimismo ciego, sino la confianza de que Dios está presente incluso en el silencio más absoluto. Es el intercesor (alguien que pide por nosotros ante Dios) en los casos más desesperados. Su historia es un refugio para quienes atraviesan crisis profundas de salud, trabajo o familia.",
        frase: "Conservaos en el amor de Dios, esperando su misericordia."
    },
    {
        id: "v-bakh-39",
        nombre: "Santa Josefina Bakhita",
        titulo: "De la Esclavitud a la Libertad del Alma",
        origen: "Darfur, Sudán",
        fechas: "1869 - 1947",
        resumen: "Sufrió el horror del secuestro y la tortura, encontrando en el perdón la llave de su liberación.",
        historia: "De niña fue secuestrada y vendida como esclava tantas veces que olvidó su propio nombre ('Bakhita' significa 'afortunada', nombre puesto por sus captores). Llevaba en su cuerpo 144 cicatrices de látigo. Al conocer a Dios, entendió que ella no era propiedad de nadie, sino una hija amada. Su vida es una cátedra de perdón: llegó a decir que si encontraba a sus secuestradores, les besaría las manos, porque gracias a ese camino conoció su verdadera libertad interior.",
        frase: "Si encontrara a quienes me torturaron, me arrodillaría y les besaría las manos."
    },
    {
        id: "v-pere-40",
        nombre: "San Peregrino Laziosi",
        titulo: "El Amigo de los Enfermos",
        origen: "Forlì, Italia",
        fechas: "1260 - 1345",
        resumen: "Un hombre rebelde que, tras enfrentar una enfermedad grave, descubrió el poder de la fe y el silencio.",
        historia: "De joven, Peregrino era violento y pertenecía a grupos que odiaban a la Iglesia. Tras una fuerte crisis personal, cambió su vida y se dedicó al servicio. Años más tarde, desarrolló un cáncer en una pierna y los médicos decidieron amputarla. La noche anterior a la operación, se arrastró ante un crucifijo para orar con toda su alma. En un sueño, vio a Jesús tocar su pierna; al despertar, estaba completamente sano. Es el protector de quienes luchan contra el cáncer y las enfermedades crónicas.",
        frase: "En la debilidad de la carne se manifiesta la fuerza del espíritu."
    },
    {
        id: "v-broc-41",
        nombre: "San José Gabriel Brochero",
        titulo: "El Cura Gaucho",
        origen: "Santa Rosa de Río Primero, Córdoba (Arg)",
        fechas: "1840 - 1914",
        resumen: "Un cura que se embarró los pies para llevar progreso, salud y esperanza a las sierras.",
        historia: "El 'Cura Brochero' recorría kilómetros en su mula Malacara para llegar a los rincones más olvidados de Traslasierra. No solo hablaba de Dios: construyó caminos, escuelas y correos para su gente. Trataba a todos con la misma cercanía, desde los gobernantes hasta los leprosos, de quienes terminó contagiándose. Murió ciego y enfermo, pero con la paz de haberlo dado todo. Nos enseña que el amor a Dios se demuestra con hechos concretos que le cambian la vida a los demás.",
        frase: "Dios es como los pomelos: cuanto más se los exprime, más jugo dan."
    },
    {
        id: "v-cris-43",
        nombre: "San Cristóbal",
        titulo: "El que Carga con el Otro",
        origen: "Canaán (actual Líbano/Israel)",
        fechas: "Murió en el 251 d.C.",
        resumen: "Un gigante que buscaba servir al rey más grande y terminó cargando a Dios sobre sus hombros.",
        historia: "Cristóbal era un hombre de gran tamaño que se dedicaba a cruzar a los viajeros a través de un río peligroso. Un día, cruzó a un niño que se volvía cada vez más pesado, casi imposible de cargar. Al llegar a la otra orilla, el niño le reveló que era Jesús y que al cargarlo a Él, estaba cargando el peso del mundo entero. Su nombre significa 'Portador de Cristo'. Es el protector de los conductores y viajeros, recordándonos que servir a los demás es la forma más directa de servir a Dios.",
        frase: "Cristóbal: El que lleva a Cristo en su corazón y en sus actos."
    },
    {
        id: "v-panc-44",
        nombre: "San Pancracio",
        titulo: "El Joven de la Justicia",
        origen: "Frigia (actual Turquía)",
        fechas: "289 - 304 d.C.",
        resumen: "Un adolescente que no aceptó las mentiras de los poderosos a cambio de su vida.",
        historia: "Pancracio quedó huérfano muy niño y fue llevado a Roma por su tío. A los 14 años, fue arrestado por ser cristiano. El emperador le ofreció riquezas y cargos importantes si abandonaba su fe, pero el joven se mantuvo firme, diciendo que no podía traicionar la Verdad que había conocido. Es invocado para pedir salud y trabajo, pero su historia nos habla principalmente de la integridad: ser fiel a uno mismo y a sus valores, incluso cuando hay mucha presión externa para cambiar.",
        frase: "Prefiero la muerte antes que traicionar mi conciencia."
    },
    {
        id: "v-gema-45",
        nombre: "Santa Gema Galgani",
        titulo: "La Flor de la Pasión",
        origen: "Lucca, Italia",
        fechas: "1878 - 1903",
        resumen: "Una joven mística que ofreció su dolor físico por la sanación de los pecadores.",
        historia: "Gema tuvo una vida marcada por la enfermedad y la pérdida de sus padres. Tenía experiencias de 'éxtasis' (momentos de oración tan profunda que perdía el sentido de lo que la rodeaba) y recibió los 'estigmas' (heridas de la pasión). A pesar de su sufrimiento, siempre estaba alegre y preocupada por los demás. Nos enseña que el dolor, cuando se ofrece por amor, puede convertirse en una herramienta poderosa para ayudar a que otros encuentren el camino a la paz y a Dios.",
        frase: "¡Oh Jesús, haz que mi corazón sea como el Tuyo!"
    },
    {
        id: "v-char-46",
        nombre: "San Charbel Makhlouf",
        titulo: "El Ermitaño de la Paz",
        origen: "Bekaa Kafra, Líbano",
        fechas: "1828 - 1898",
        resumen: "Un monje que vivió en soledad total para convertirse en un faro de milagros y sanación.",
        historia: "Charbel pasó sus últimos 23 años viviendo en una pequeña choza en la montaña, rezando y trabajando la tierra en silencio absoluto. Casi nadie lo veía, pero después de su muerte, su tumba empezó a brillar con una luz misteriosa. Es famoso en todo el mundo por las sanaciones asombrosas que ocurren por su intercesión. Su vida nos recuerda el valor terapéutico del silencio: solo cuando apagamos el ruido del mundo podemos escuchar la voz de Dios que sana nuestras heridas más profundas.",
        frase: "La paz de Dios solo florece en el jardín del silencio."
    },

    // --- TANDA 6 ---
    {
        id: "v-pant-47",
        nombre: "San Pantaleón",
        titulo: "El Médico Misericordioso",
        origen: "Nicomedia (actual Turquía)",
        fechas: "275 - 305 d.C.",
        resumen: "Un médico que descubrió que la ciencia alcanza su plenitud cuando se une a la compasión.",
        historia: "Pantaleón era el médico personal del emperador. Tenía todo el éxito del mundo, pero sentía un vacío. Al conocer la fe, empezó a curar gratis a los pobres y a invocar la fuerza de Dios en sus tratamientos. Fue un 'taumaturgo' (alguien que realiza actos de sanación asombrosos que la ciencia no puede explicar). Murió joven por defender su fe, pero su legado vive en cada persona que pide por su salud. Nos enseña que el médico no solo cura el cuerpo, sino que debe ser un consuelo para el alma.",
        frase: "Que mi mano sea instrumento de Tu sanación."
    },
    {
        id: "v-seba-48",
        nombre: "San Sebastián",
        titulo: "El Soldado de la Fortaleza",
        origen: "Narbona, Francia / Roma",
        fechas: "256 - 288 d.C.",
        resumen: "El hombre que resistió las flechas del odio sin perder la paz del corazón.",
        historia: "Sebastián era un capitán del ejército romano que ayudaba en secreto a los cristianos perseguidos. Cuando lo descubrieron, fue condenado a morir atravesado por flechas. Sorprendentemente, sobrevivió y, en lugar de escapar, volvió ante el emperador para pedir justicia. Su imagen lleno de flechas es un símbolo de 'resiliencia' (la capacidad de soportar heridas graves sin quebrarse por dentro). Es el protector contra las pestes y las crisis, recordándonos que el alma puede permanecer invicta aunque el cuerpo sufra.",
        frase: "Nadie puede quitarme la paz que Dios me ha dado."
    },
    {
        id: "v-ceci-49",
        nombre: "Santa Cecilia",
        titulo: "La Armonía del Alma",
        origen: "Roma, Italia",
        fechas: "Siglo II - III d.C.",
        resumen: "Patrona de los músicos; nos enseña que el alma debe sonar como una melodía afinada para Dios.",
        historia: "Cecilia nació en una familia noble de Roma. Se dice que el día de su boda, mientras los músicos tocaban, ella 'cantaba en su corazón' solo para Dios. A pesar de ser perseguida y condenada, su fe era tan dulce y firme que atraía a todos. Es la patrona de la música porque entendió que nuestra vida entera, con sus notas altas y bajas, debe ser una canción de amor. Nos invita a buscar la armonía interior y a usar el arte como un puente hacia lo eterno.",
        frase: "Que mi corazón y mi cuerpo permanezcan puros para no ser confundidos."
    },
    {
        id: "v-jorg-50",
        nombre: "San Jorge",
        titulo: "El Vencedor de las Sombras",
        origen: "Capadocia (actual Turquía)",
        fechas: "275 - 303 d.C.",
        resumen: "El caballero que nos enseña a enfrentar y domar nuestros propios miedos interiores.",
        historia: "La leyenda cuenta que Jorge salvó a una princesa de un dragón feroz. Más allá de la fantasía, este dragón representa el mal y las 'sombras' que todos tenemos dentro (miedos, vicios, traumas). Jorge no huye, sino que enfrenta al monstruo con la lanza de la fe. Su historia es una lección de psicología espiritual: no hay que negar nuestras oscuridades, sino enfrentarlas con valentía y luz para que dejen de dominarnos. Es el protector contra los enemigos, visibles e invisibles.",
        frase: "Con la señal de la Cruz, venceré todo mal."
    },
    {
        id: "v-blas-51",
        nombre: "San Blas",
        titulo: "El Médico de la Voz",
        origen: "Sebaste, actual Armenia",
        fechas: "Murió en el 316 d.C.",
        resumen: "Un obispo y médico que salvó a un niño de morir ahogado y hoy protege nuestra garganta.",
        historia: "Blas vivía como un ermitaño en una cueva, donde curaba tanto a personas como a animales. Se hizo famoso cuando salvó a un niño que tenía una espina de pescado clavada en la garganta. Por eso, hoy se bendicen las gargantas en su día. Su vida nos habla de la importancia de la 'palabra': que lo que sale de nuestra boca sea para curar y no para herir. Es el compañero de quienes trabajan con su voz y de quienes necesitan sanar su comunicación con los demás.",
        frase: "Por intercesión de San Blas, que Dios te libre de los males de garganta."
    },
    {
        id: "v-ines-52",
        nombre: "Santa Inés",
        titulo: "La Pureza Valiente",
        origen: "Roma, Italia",
        fechas: "291 - 304 d.C.",
        resumen: "Una adolescente que defendió su integridad frente al poder más grande del mundo.",
        historia: "Inés tenía solo 12 años cuando decidió que su vida pertenecería solo a Dios. Muchos jóvenes poderosos quisieron casarse con ella, pero ella se mantuvo fiel a su promesa. Fue sometida a humillaciones y torturas, pero su rostro siempre irradiaba una paz que confundía a sus verdugos. Su nombre significa 'Cordero' y representa la inocencia que no se deja corromper. Nos enseña que la verdadera fortaleza no depende de la edad o del tamaño físico, sino de la claridad de los valores internos.",
        frase: "Cristo es mi esposo, a Él me he entregado."
    },
    {
        id: "v-lore-53",
        nombre: "San Lorenzo",
        titulo: "El Tesorero de los Pobres",
        origen: "Huesca, España / Roma",
        fechas: "225 - 258 d.C.",
        resumen: "Cuando le pidieron los tesoros de la Iglesia, presentó a los pobres y enfermos.",
        historia: "Lorenzo era el encargado de administrar los bienes de la Iglesia en Roma. El emperador, por codicia, le exigió que entregara todas las riquezas. Lorenzo pidió tres días, reunió a todos los ciegos, huérfanos y enfermos de la ciudad y dijo: 'Estos son los tesoros de la Iglesia'. Murió quemado en una parrilla con un humor asombroso, diciendo: 'Ya estoy cocinado de este lado, pueden darme la vuelta'. Nos enseña que el valor de una comunidad se mide por cómo trata a sus miembros más frágiles.",
        frase: "Los tesoros de la Iglesia son los pobres."
    },
    {
        id: "v-ague-54",
        nombre: "Santa Águeda",
        titulo: "La Fortaleza de la Mujer",
        origen: "Catania, Sicilia",
        fechas: "231 - 251 d.C.",
        resumen: "Protectora de las mujeres y de la salud del pecho; un ejemplo de resistencia ante el abuso.",
        historia: "Águeda fue una joven que rechazó las propuestas deshonestas de un gobernador poderoso. Por su negativa, fue torturada cruelmente. La tradición cuenta que San Pedro se le apareció en la cárcel para curar sus heridas. Hoy es la protectora contra el cáncer de mama y de los partos difíciles. Su vida es un grito de dignidad: nos enseña que nadie tiene derecho a pasar por encima de la libertad y la integridad de otra persona, y que la fe es un escudo protector de la feminidad.",
        frase: "Mi salvación es Cristo, Él sanará mis heridas."
    },
    {
        id: "v-esco-55",
        nombre: "Santa Escolástica",
        titulo: "La Fuerza de la Oración",
        origen: "Nursia, Italia",
        fechas: "480 - 547 d.C.",
        resumen: "Hermana melliza de San Benito; demostró que el amor puede más que las reglas rígidas.",
        historia: "Escolástica y su hermano Benito se veían una vez al año para hablar de Dios. En su último encuentro, ella le pidió que se quedara toda la noche conversando, pero Benito se negó para no romper su regla monástica. Entonces Escolástica rezó con tanta fuerza que se desató una tormenta que impidió que él se fuera. Benito se quejó, y ella respondió: 'Te lo pedí a ti y no me escuchaste; se lo pedí a Dios y me escuchó'. Nos enseña que el afecto y la conexión humana son, a veces, más importantes que cualquier estructura rígida.",
        frase: "Pude más porque amé más."
    },
    {
        id: "v-boni-56",
        nombre: "San Bonifacio",
        titulo: "El Apóstol de los Bosques",
        origen: "Crediton, Inglaterra / Alemania",
        fechas: "672 - 754 d.C.",
        resumen: "El monje que usó un pequeño abeto para explicar el misterio de la vida eterna.",
        historia: "Bonifacio viajó a los bosques de Alemania para evangelizar a tribus que adoraban árboles. Para demostrar que su Dios era más fuerte, derribó un roble enorme que consideraban sagrado. En su lugar, señaló a un pequeño abeto (pino) verde y dijo: 'Este árbol, que no pierde sus hojas, apunta al Cielo y nos habla de la vida que no muere'. Así nació la tradición del árbol de Navidad. Su vida nos enseña a buscar símbolos en la naturaleza para entender lo invisible y a tener el coraje de sembrar nuevas esperanzas.",
        frase: "El árbol de la vida es el que siempre permanece verde."
    },

    // --- TANDA 7 ---
    {
        id: "v-bern-57",
        nombre: "Santa Bernadette Soubirous",
        titulo: "La Humildad de Lourdes",
        origen: "Lourdes, Francia",
        fechas: "1844 - 1879",
        resumen: "Una joven pobre y enferma que fue elegida para revelar una fuente de sanación para el mundo.",
        historia: "Bernadette era una adolescente asmática y de familia muy humilde. Un día, mientras juntaba leña, vio a una 'Señora' en una gruta. La Virgen le pidió que cavara en el suelo, y de allí brotó un manantial que hoy sigue sanando a miles. Bernadette nunca quiso fama; decía que ella era solo una 'escoba' que Dios usó y luego guardó detrás de la puerta. Su cuerpo permanece 'incorrupto' (que no se descompone con el tiempo), recordándonos que la verdadera belleza nace de la sencillez y la transparencia del alma.",
        frase: "No se me prometió hacerte feliz en este mundo, sino en el otro."
    },
    {
        id: "v-vice-58",
        nombre: "San Vicente de Paúl",
        titulo: "El Genio de la Caridad",
        origen: "Pouy, Francia",
        fechas: "1581 - 1660",
        resumen: "Organizó la ayuda a los pobres de tal forma que cambió la asistencia social para siempre.",
        historia: "Vicente no empezó siendo un santo; de joven buscaba una vida cómoda. Pero al encontrarse con la miseria extrema de los campesinos, su corazón dio un vuelco. Entendió que el amor no puede ser solo un sentimiento, sino que debe organizarse. Fundó las Hijas de la Caridad y los Sacerdotes de la Misión. Nos enseñó que 'los pobres son nuestros amos' y que debemos servirlos con tal respeto que nos perdonen el pan que les damos. Es el patrón de las obras de caridad en todo el mundo.",
        frase: "El amor es infinito en sus métodos para ayudar."
    },
    {
        id: "v-cati-59",
        nombre: "Santa Catalina de Siena",
        titulo: "La Fuerza de la Verdad",
        origen: "Siena, Italia",
        fechas: "1347 - 1380",
        resumen: "Una mujer valiente que, sin tener estudios, aconsejó a papas y reyes para buscar la paz.",
        historia: "Catalina era la hija número 24 de un tintorero. Desde niña decidió que su vida sería un diálogo constante con Dios. Tenía una personalidad tan arrolladora que no tuvo miedo de escribirle cartas al Papa para pedirle que volviera a Roma y reformara la Iglesia. Es 'Doctora de la Iglesia' (un título para los pensadores más importantes). Nos enseña que cuando una persona se llena del fuego de Dios, puede transformar la sociedad entera sin importar su origen o condición social.",
        frase: "Si eres lo que deberías ser, prenderás fuego al mundo entero."
    },
    {
        id: "v-nico-60",
        nombre: "San Nicolás de Bari",
        titulo: "El Amigo de la Niñez",
        origen: "Patara (actual Turquía)",
        fechas: "270 - 343 d.C.",
        resumen: "Un obispo generoso que protegía en secreto a las familias más necesitadas.",
        historia: "Nicolás heredó una gran fortuna y decidió repartirla entre los pobres sin que nadie supiera quién era él. Se cuenta que una vez arrojó bolsas de oro por la chimenea de un hombre que no podía alimentar a sus hijas. De su historia nació la figura de Papá Noel (Santa Claus). Su vida nos habla de la 'generosidad oculta': hacer el bien sin buscar el aplauso. Es el protector de los niños y de los navegantes, recordándonos que la mayor alegría está en dar con alegría y discreción.",
        frase: "Dar es el mejor camino para encontrar la verdadera riqueza."
    },
    {
        id: "v-rosa-61",
        nombre: "Santa Rosa de Viterbo",
        titulo: "La Joven de la Palabra",
        origen: "Viterbo, Italia",
        fechas: "1233 - 1251",
        resumen: "Una adolescente que con un crucifijo en la mano defendió la fe y la justicia en las calles.",
        historia: "Rosa murió a los 18 años, pero vivió con la intensidad de un gigante. Desde los 12 años recorría su ciudad predicando la paz y el arrepentimiento en un tiempo de guerras civiles. Tenía un carisma especial para hablarle a la gente sencilla. A pesar de ser rechazada por su juventud, nunca bajó los brazos. Su cuerpo también permanece incorrupto. Es un ejemplo para los jóvenes de hoy: nos demuestra que no hace falta ser un adulto para tener ideales claros y luchar por un mundo más justo.",
        frase: "Ama a Dios y no ofendas a nadie."
    },
    {
        id: "v-este-62",
        nombre: "San Esteban",
        titulo: "El Valor del Perdón",
        origen: "Jerusalén, Israel",
        fechas: "Murió en el 34 d.C.",
        resumen: "El primer mártir de la historia cristiana; murió perdonando a quienes lo atacaban.",
        historia: "Esteban era uno de los siete diáconos (servidores) elegidos para ayudar a las viudas y los pobres. Era un hombre sabio y lleno de paz. Sus palabras molestaron a los poderosos, quienes lo condenaron a morir apedreado. En sus últimos momentos, en lugar de odiar, rezó por sus verdugos diciendo: 'Señor, no les tomes en cuenta este pecado'. Su muerte fue la semilla que convirtió a San Pablo. Nos enseña que el perdón es el arma más poderosa para romper las cadenas de la violencia y el resentimiento.",
        frase: "Señor Jesús, recibe mi espíritu."
    },
    {
        id: "v-moni-63",
        nombre: "Santa Mónica",
        titulo: "La Madre de la Esperanza",
        origen: "Tagaste, actual Argelia",
        fechas: "332 - 387",
        resumen: "La mujer que con sus lágrimas y paciencia logró la conversión de su hijo, San Agustín.",
        historia: "Mónica vivió años de angustia viendo cómo su hijo Agustín desperdiciaba su vida en vicios y filosofías vacías. Ella no se dedicó a pelear ni a juzgar, sino a rezar y acompañar con amor silencioso. Un obispo le dijo una vez: 'Es imposible que se pierda el hijo de tantas lágrimas'. Su paciencia triunfó cuando vio a su hijo bautizado antes de morir. Es la patrona de las madres y nos enseña que el amor que persevera y no se desespera tiene un poder de sanación que puede cambiar cualquier destino.",
        frase: "Nada está lejos de Dios."
    },
    {
        id: "v-orio-64",
        nombre: "San Luis Orione",
        titulo: "La Estrategia de la Caridad",
        origen: "Piamonte, Italia",
        fechas: "1872 - 1940",
        resumen: "Fundador de los Cottolengos; su corazón no tenía fronteras para el que sufre.",
        historia: "Don Orione decía que 'solo la caridad salvará al mundo'. Fundó hogares para personas con discapacidades severas que en su época eran abandonadas. En Argentina su obra es inmensa. Su motor era el 'Instaurare omnia in Christo' (Renovarlo todo en Cristo). Tenía una alegría contagiosa y un espíritu incansable para construir escuelas y hospitales. Nos enseña que la fe debe tener manos y pies, y que en el rostro del que sufre está la presencia más sagrada de Dios.",
        frase: "Hacer el bien siempre, hacer el bien a todos, el mal nunca a nadie."
    },
    {
        id: "v-elen-65",
        nombre: "Santa Elena",
        titulo: "La Buscadora de la Cruz",
        origen: "Bitinia (actual Turquía)",
        fechas: "248 - 329 d.C.",
        resumen: "Madre del emperador Constantino; dedicó su vejez a rescatar los lugares sagrados.",
        historia: "Elena era una mujer de origen humilde que llegó a ser emperatriz. Al convertirse, usó su poder y recursos para viajar a Jerusalén y rescatar la verdadera Cruz de Cristo y los sitios de su pasión. Es un ejemplo de cómo la influencia de una madre puede cambiar la historia de un país. Su vida nos enseña que nunca es tarde para emprender una gran misión y que nuestra fe debe buscar siempre las raíces profundas para fortalecer el presente.",
        frase: "El que busca la cruz de Cristo, encuentra la verdadera alegría."
    },
    {
        id: "v-solano-66",
        nombre: "San Francisco Solano",
        titulo: "El Taumaturgo del Nuevo Mundo",
        origen: "Montilla, España / Sudamérica",
        fechas: "1549 - 1610",
        resumen: "El misionero que con su violín y su dulzura unió a los pueblos de América.",
        historia: "Francisco recorrió miles de kilómetros por Argentina, Perú y Paraguay. En lugar de armas, llevaba un violín. Cuando las tribus estaban en guerra o no lo comprendían, él tocaba música y cantaba, logrando una paz que parecía un milagro. Tenía el don de lenguas (podía hacerse entender por diferentes pueblos) y amaba profundamente a los animales. Es el patrón del folklore argentino. Nos enseña que el arte y la belleza son lenguajes universales que pueden sanar heridas culturales y unir corazones divididos.",
        frase: "¡Gloria a Dios y paz a los hombres!"
    },

    // --- TANDA 8 ---
    {
        id: "v-fbor-67",
        nombre: "San Francisco de Borja",
        titulo: "El Duque que buscó lo Eterno",
        origen: "Valencia, España",
        fechas: "1510 - 1572",
        resumen: "Un noble poderoso que descubrió que no vale la pena vivir para lo que el tiempo destruye.",
        historia: "Francisco era Duque y vivía rodeado de lujos. Su vida cambió cuando tuvo que escoltar el cadáver de la bellísima emperatriz Isabel. Al ver cómo la muerte había transformado tanta belleza en polvo, pronunció su famosa frase y decidió no servir a nadie que pudiera morir. Tras quedar viudo, entró a la Compañía de Jesús. Nos enseña el valor del 'desapego': entender que las cosas del mundo son pasajeras y que la verdadera seguridad está en lo que permanece para siempre.",
        frase: "Nunca más serviré a un señor que se me pueda morir."
    },
    {
        id: "v-ihun-68",
        nombre: "Santa Isabel de Hungría",
        titulo: "La Reina de los Pobres",
        origen: "Hungría",
        fechas: "1207 - 1231",
        resumen: "Una princesa que cambió su corona por el delantal para servir a los enfermos con sus propias manos.",
        historia: "Isabel nació en la realeza, pero su corazón siempre estuvo en los suburbios. Usaba su fortuna para construir hospitales y ella misma lavaba las heridas de los leprosos. La tradición cuenta el 'milagro de las rosas': cuando su esposo la interrogó por llevar pan oculto para los pobres, el pan se transformó en flores frescas. Su vida es una lección de humildad: nos demuestra que el poder solo tiene sentido cuando se convierte en servicio hacia los más vulnerables.",
        frase: "Debemos hacer a los hombres felices."
    },
    {
        id: "v-javi-69",
        nombre: "San Juan de Ávila",
        titulo: "El Maestro de los Santos",
        origen: "Almodóvar del Campo, España",
        fechas: "1499 - 1569",
        resumen: "El consejero espiritual de los grandes santos de su época; un guía de almas magistral.",
        historia: "Juan era un hombre de una sabiduría psicológica profunda. Fue el guía de Santa Teresa, San Ignacio y San Juan de Dios. Tenía el don de 'discernimiento' (saber distinguir qué impulsos vienen del Bien y cuáles del miedo o del ego). Sus cartas son manuales de equilibrio mental y espiritual. Es Doctor de la Iglesia porque entendió mejor que nadie cómo acompañar a las personas en sus procesos de cambio y conversión interior.",
        frase: "Sepan todos que nuestro Dios es amor."
    },
    {
        id: "v-tcal-70",
        nombre: "Santa Teresa de Calcuta",
        titulo: "La Madre de la Misericordia",
        origen: "Skopje (Macedonia) / Calcuta (India)",
        fechas: "1910 - 1997",
        resumen: "Dedicó su vida a los 'más pobres entre los pobres', viendo en ellos el rostro de Dios.",
        historia: "Teresa escuchó una 'llamada dentro de la llamada' para ir a vivir a los barrios más pobres de la India. Allí recogía a los moribundos de la calle para que murieran con dignidad, sintiéndose amados. Un dato profundo es que vivió décadas en una 'noche oscura' (una sensación de vacío y falta de consuelo espiritual), pero siguió trabajando por puro amor. Nos enseña que la caridad no es un sentimiento pasajero, sino una decisión de la voluntad que se mantiene firme en medio de la oscuridad.",
        frase: "La paz comienza con una sonrisa."
    },
    {
        id: "v-lrey-71",
        nombre: "San Luis IX de Francia",
        titulo: "El Rey de la Justicia",
        origen: "Poissy, Francia",
        fechas: "1214 - 1270",
        resumen: "Un gobernante que entendió que la paz de un pueblo nace de la justicia y la caridad.",
        historia: "Luis fue un rey que se tomaba en serio su cargo como un servicio a Dios. Se sentaba bajo un roble a escuchar los problemas de la gente común para impartir justicia. Trataba a los mendigos como si fueran príncipes, sentándolos a su mesa. Nos enseña que el liderazgo real no es mandar, sino cuidar de los súbditos. Fue un padre ejemplar que dejó a sus hijos el testamento de que es mejor sufrir cualquier mal antes que cometer una injusticia.",
        frase: "Hijo, ten un corazón compasivo con los pobres."
    },
    {
        id: "v-mgor-72",
        nombre: "Santa María Goretti",
        titulo: "El Triunfo del Perdón",
        origen: "Ancona, Italia",
        fechas: "1890 - 1902",
        resumen: "Una niña que murió defendiendo su integridad y perdonó a su asesino antes de expirar.",
        historia: "Marietta vivía en una extrema pobreza. A los 11 años, un joven intentó abusar de ella y, al resistirse, la hirió mortalmente. En su lecho de muerte, ella dijo: 'Lo perdono y lo quiero conmigo en el paraíso'. Años después, su asesino tuvo una visión de ella regalándole flores y se convirtió, pasando el resto de su vida pidiendo perdón. Es el ejemplo más radical de 'perdón sanador': aquel que rompe el ciclo del odio y transforma incluso al agresor.",
        frase: "Sí, lo perdono por amor a Jesús."
    },
    {
        id: "v-rarc-73",
        nombre: "San Rafael Arcángel",
        titulo: "La Medicina de Dios",
        origen: "Reino Celestial",
        fechas: "Eternidad",
        resumen: "El arcángel que acompaña en los viajes y guía los procesos de sanación física y espiritual.",
        historia: "Su nombre significa 'Dios sana'. En la Biblia, acompañó al joven Tobías en un viaje peligroso, protegiéndolo y ayudándolo a encontrar la medicina para la ceguera de su padre. Es el patrono de los médicos, enfermeros y psicólogos. Nos enseña que la sanación es un camino que rara vez hacemos solos: siempre hay una guía invisible que nos ayuda a encontrar los remedios y la paz que necesitamos para seguir adelante.",
        frase: "Bendecid a Dios y proclamad ante todos los vivientes los bienes que os ha hecho."
    },
    {
        id: "v-este-74",
        nombre: "Santa Edith Stein",
        titulo: "La Mística de la Verdad",
        origen: "Breslavia (Alemania) / Auschwitz (Polonia)",
        fechas: "1891 - 1942",
        resumen: "Filósofa y psicóloga de origen judío que encontró en la cruz la respuesta a sus preguntas intelectuales.",
        historia: "Edith era una mujer brillante, discípula del filósofo Husserl. Tras años de ateísmo y búsqueda intelectual, leyó la vida de Santa Teresa y dijo: 'Esta es la Verdad'. Entró al Carmelo tomando el nombre de Teresa Benedicta de la Cruz. Por su origen judío, fue llevada por los nazis a Auschwitz. Murió ofreciendo su vida por su pueblo. Es el puente perfecto entre la 'Fenomenología' (estudio de la consciencia) y la fe, recordándonos que la inteligencia debe estar siempre al servicio del Amor.",
        frase: "Quien busca la verdad, busca a Dios, sea de ello consciente o no."
    },
    {
        id: "v-jxxiii-75",
        nombre: "San Juan XXIII",
        titulo: "El Papa Bueno",
        origen: "Sotto il Monte, Italia",
        fechas: "1881 - 1963",
        resumen: "El hombre de la sonrisa eterna que abrió las ventanas de la Iglesia al mundo moderno.",
        historia: "Angelo Roncalli era un hombre de origen campesino, sencillo y con un gran sentido del humor. Cuando fue elegido Papa, muchos pensaron que sería un 'Papa de transición', pero él convocó el Concilio Vaticano II para que la Iglesia hablara un lenguaje que el hombre de hoy pudiera entender. Su 'Decálogo de la Serenidad' es una joya de salud mental. Nos enseñó que la bondad es la forma más revolucionaria de autoridad y que se puede ser firme en la fe siendo inmensamente humano.",
        frase: "Solo por hoy, no tendré miedo."
    },
    {
        id: "v-jcha-76",
        nombre: "Santa Juana de Chantal",
        titulo: "La Fuerza de la Amistad Sagrada",
        origen: "Dijon, Francia",
        fechas: "1572 - 1641",
        resumen: "Viuda y madre que, junto a San Francisco de Sales, fundó una orden basada en la suavidad y el amor.",
        historia: "Juana enfrentó la pérdida de su esposo y de varios hijos con una entereza admirable. Al conocer a San Francisco de Sales, entabló una de las amistades espirituales más bellas de la historia. Juntos fundaron la Orden de la Visitación, pensada para mujeres que, por salud o edad, no podían con los rigores extremos de otros conventos. Su vida nos habla del valor del acompañamiento: nadie llega a la plenitud solo, necesitamos vínculos sanos que nos ayuden a crecer.",
        frase: "En todo lo que hagas, pon una gran pureza de intención."
    },

    // --- TANDA 9 ---
    {
        id: "v-pabl-77",
        nombre: "San Juan Pablo II",
        titulo: "El Papa de la Familia",
        origen: "Wadowice, Polonia",
        fechas: "1920 - 2005",
        resumen: "Un sobreviviente de la guerra que le recordó al mundo que el amor es más fuerte que el miedo.",
        historia: "Karol Wojtyła perdió a toda su familia siendo muy joven. Vivió bajo el terror nazi y el comunismo, trabajando en canteras de piedra. Como Papa, recorrió el mundo entero defendiendo la dignidad humana. Fue un gran deportista, actor y filósofo. Sobrevivió a un atentado y fue a la cárcel a perdonar a quien le disparó. Nos enseñó que el perdón es el único camino para la paz y que la familia es el lugar donde se construye el futuro de la humanidad.",
        frase: "¡No tengan miedo! Abran de par en par las puertas a Cristo."
    },
    {
        id: "v-ber-78",
        nombre: "San Bernardo de Claraval",
        titulo: "El Cantor de la Virgen",
        origen: "Fontaine-lès-Dijon, Francia",
        fechas: "1090 - 1153",
        resumen: "Un hombre de una palabra tan dulce que lograba conmover hasta los corazones más duros.",
        historia: "Bernardo era un monje con una capacidad de comunicación asombrosa. Decía que el nombre de Jesús era 'miel en la boca y música en el oído'. Reformó la vida de los monjes buscando que vivieran con más sencillez y cercanía a la naturaleza. Es famoso por sus escritos sobre el amor humano y divino, recordándonos que el conocimiento sin amor es solo orgullo. Nos enseña que la verdadera sabiduría es aquella que nos ayuda a tratar mejor a los demás.",
        frase: "La medida del amor es amar sin medida."
    },
    {
        id: "v-mar-83",
        nombre: "San Marcos Evangelista",
        titulo: "El León de la Palabra",
        origen: "Jerusalén, Israel",
        fechas: "Siglo I d.C.",
        resumen: "El joven que acompañó a los apóstoles y escribió el relato más directo de la vida de Jesús.",
        historia: "Marcos no fue uno de los doce apóstoles, sino un joven que escuchó los relatos de boca de San Pedro. Se dice que su Evangelio es el 'Evangelio de los hechos', porque es rápido y lleno de acción. Fundó la Iglesia en Egipto. Se lo representa con un león porque su relato comienza con la voz que clama en el desierto. Nos enseña el valor de la escucha: supo poner su talento como escritor al servicio de una historia mucho más grande que él.",
        frase: "El tiempo se ha cumplido y el Reino de Dios está cerca."
    },
    {
        id: "v-pau-84",
        nombre: "San Pablo de la Cruz",
        titulo: "El Místico del Sufrimiento",
        origen: "Ovada, Italia",
        fechas: "1694 - 1775",
        resumen: "Fundador de los Pasionistas; nos enseñó que el dolor compartido se vuelve esperanza.",
        historia: "Pablo tuvo una visión de la Pasión de Jesús y entendió que el mayor problema del mundo es el olvido del amor de Dios. Dedicó su vida a consolar a los que sufren, recordándoles que no están solos en su cruz. Tenía una capacidad asombrosa para el discernimiento (entender los movimientos del alma). Nos enseña que el dolor no tiene la última palabra y que, cuando se ofrece por amor, se convierte en una herramienta poderosa para la paz interior.",
        frase: "La Pasión de Jesús es la obra más grande del amor divino."
    },
    {
        id: "v-per-85",
        nombre: "Santa Perpetua y Santa Felicidad",
        titulo: "La Fuerza de la Amistad",
        origen: "Cartago (actual Túnez)",
        fechas: "Murió en el 203 d.C.",
        resumen: "Una joven noble y su sirvienta que enfrentaron juntas la muerte por defender su dignidad.",
        historia: "Perpetua era una joven madre de familia noble y Felicidad era su esclava y estaba embarazada. A pesar de la diferencia social, la fe las hizo hermanas. Fueron arrestadas y, en la cárcel, se sostuvieron mutuamente con una alegría que asombraba a sus guardias. Sus diarios son de los relatos más antiguos y conmovedores de la historia. Nos enseñan que la verdadera amistad en Dios rompe cualquier barrera social y nos da fuerzas para enfrentar las pruebas más duras.",
        frase: "Permanezcan firmes en la fe y ámense los unos a los otros."
    },
    {
        id: "v-raf-86",
        nombre: "San Rafael Guízar y Valencia",
        titulo: "El Obispo de los Disfraces",
        origen: "Michoacán, México",
        fechas: "1878 - 1938",
        resumen: "Un obispo valiente que se disfrazaba de vendedor de baratijas para ayudar a los perseguidos.",
        historia: "Rafael vivió en una época de mucha persecución religiosa en México. Para poder llevar medicina, comida y consuelo a los enfermos y soldados heridos, se disfrazaba de músico o de vendedor ambulante. Nunca tuvo miedo de arriesgar su vida por los demás. Fundó seminarios en la clandestinidad. Nos enseña la astucia del bien: que siempre hay una forma creativa de ayudar al prójimo, incluso cuando las circunstancias externas parecen imposibles.",
        frase: "Que nada te detenga cuando se trata de hacer el bien."
    },

    // --- TANDA 10 ---
    {
        id: "v-lau-93",
        nombre: "Beata Laura Vicuña",
        titulo: "El Sacrificio por la Paz Familiar",
        origen: "Santiago, Chile / Junín de los Andes, Arg.",
        fechas: "1891 - 1904",
        resumen: "Una adolescente que ofreció su vida para que su madre recuperara su dignidad y libertad.",
        historia: "Laura vivió en carne propia la violencia doméstica. Su madre estaba atrapada en una relación abusiva con un hombre que también maltrataba a Laura. Ella, con una madurez asombrosa, decidió ofrecer su salud y su vida a cambio de la conversión y liberación de su mamá. Murió a los 12 años en la Patagonia argentina. Su historia resuena mucho con quienes sufren crisis familiares, recordándonos que el amor de un hijo puede ser un motor de cambio poderoso.",
        frase: "Señor, que mi madre te conozca y sea feliz."
    },
    {
        id: "v-dom-94",
        nombre: "San Domingo de Guzmán",
        titulo: "El Predicador de la Luz",
        origen: "Caleruega, España",
        fechas: "1170 - 1221",
        resumen: "Fundador de los Dominicos; nos enseñó que el estudio debe servir para iluminar a los demás.",
        historia: "Domingo era un hombre de una ternura inmensa; decían que por el día hablaba con los hombres y por la noche hablaba con Dios. Vendió sus libros caros para dar de comer a los hambrientos, diciendo que 'no podía estudiar en pieles muertas mientras los hermanos morían de hambre'. Fundó una orden de sabios que debían ser 'antorchas' para el mundo. Nos enseña que el conocimiento solo tiene valor si se comparte para liberar a otros de la ignorancia y el error.",
        frase: "Hablar solo con Dios o de Dios."
    },

    // --- TANDA 11 ---
    {
        id: "v-panc-99",
        nombre: "San Pancracio",
        titulo: "El Joven del Trabajo Honesto",
        origen: "Frigia (actual Turquía)",
        fechas: "289 - 304 d.C.",
        resumen: "Un adolescente que prefirió la verdad antes que las riquezas fáciles de los poderosos.",
        historia: "Pancracio quedó huérfano a los 14 años y fue llevado a Roma. Allí descubrió que la fe le daba una identidad que nadie podía quitarle. El emperador intentó comprarlo con dinero y cargos, pero él se mantuvo íntegro. Es invocado para pedir salud y trabajo porque su historia nos habla de la dignidad: que el sustento diario es una bendición que debe ganarse con la frente alta. Nos recuerda que ser fiel a nuestros valores es el mejor cimiento para cualquier carrera profesional.",
        frase: "Prefiero morir antes que traicionar mi conciencia."
    },
    {
        id: "v-blat-100",
        nombre: "San Bartolomé",
        titulo: "El Apóstol de la Sinceridad",
        origen: "Caná de Galilea",
        fechas: "Siglo I d.C.",
        resumen: "Jesús dijo de él que era un hombre 'en quien no hay engaño'.",
        historia: "Bartolomé (o Natanael) era un buscador escéptico. Al principio dudó de Jesús, pero cuando se encontró con Él, su vida cambió. Viajó por tierras lejanas como la India y Armenia llevando un mensaje de transparencia. Murió defendiendo su verdad de una forma heroica. Nos enseña que Dios prefiere a un buscador honesto que duda, antes que a alguien que finge creer. Su vida es una invitación a la autenticidad: a ser por fuera lo mismo que somos por dentro.",
        frase: "Señor, Tú me conoces desde antes de que me llamaras."
    },
    {
        id: "v-mat-105",
        nombre: "San Mateo Evangelista",
        titulo: "El Recaudador que eligió la Libertad",
        origen: "Cafarnaúm, Galilea",
        fechas: "Siglo I d.C.",
        resumen: "Dejó una vida de riquezas y mala fama para seguir una llamada que le devolvió la dignidad.",
        historia: "Mateo era un publicano (cobrador de impuestos), un oficio odiado y visto como deshonesto. Estaba sentado en su oficina cuando Jesús lo miró y le dijo: 'Sígueme'. Sin pedir explicaciones, Mateo dejó su dinero y su seguridad para empezar de cero. Escribió el primer Evangelio para demostrar que Dios no mira el currículum ni el pasado de las personas, sino su disposición para amar en el presente. Nos enseña que siempre es posible renunciar a una vida gris para empezar una llena de propósito.",
        frase: "Misericordia quiero y no sacrificios."
    },
    {
        id: "v-mgt-106",
        nombre: "Santa Margarita de Cortona",
        titulo: "La Santa del Nuevo Comienzo",
        origen: "Toscana, Italia",
        fechas: "1247 - 1297",
        resumen: "Tras una vida de errores y rechazos, encontró en el perdón una fuerza para sanar a toda una ciudad.",
        historia: "Margarita vivió en concubinato y tuvo una juventud muy cuestionada por la sociedad de su época. Tras la muerte trágica de su pareja, se vio sola y rechazada. En lugar de caer en la desesperación, buscó refugio en la fe y dedicó el resto de su vida a cuidar a los pobres y enfermos, fundando hospitales. Su vida es un ejemplo de 'reparación': nos enseña que no importa qué tan roto esté nuestro pasado, siempre podemos reconstruirnos y ser una fuente de luz para los demás.",
        frase: "Señor, Tú has hecho de mi miseria una fuente de misericordia."
    },
// --- SÚPER TANDA 12 y 13: (107 a 126) ---
    {
        id: "v-jdie-107",
        nombre: "San Juan Diego",
        titulo: "El Mensajero de la Dignidad",
        origen: "Cuautitlán, México",
        fechas: "1474 - 1548",
        resumen: "Un indígena humilde que venció su complejo de inferioridad para ser la voz de un milagro.",
        historia: "Juan Diego se sentía 'el último de la fila', un hombre sin importancia. Cuando la Virgen de Guadalupe se le apareció pidiéndole que hablara con el poderoso Obispo, él se excusó diciendo que era 'solo un hombrecillo, una hoja seca'. La Virgen le respondió tratándolo con inmensa ternura, devolviéndole su valor personal. Su historia es una lección sobre la autoestima: nos enseña que Dios no elige a los capacitados, sino que capacita a los elegidos, y que nuestra dignidad no depende de los títulos, sino del amor con el que somos mirados.",
        frase: "¿No estoy yo aquí que soy tu madre?"
    },
    {
        id: "v-dami-108",
        nombre: "San Damián de Molokai",
        titulo: "El Apóstol de los Excluidos",
        origen: "Tremelo, Bélgica / Hawái",
        fechas: "1840 - 1889",
        resumen: "El sacerdote que se fue a vivir a una isla de leprosos para devolverles la esperanza.",
        historia: "La isla de Molokai era un infierno sin ley donde se abandonaba a los enfermos de lepra para que murieran. Damián se ofreció como voluntario para ir, sabiendo que no habría retorno. No solo les dio apoyo espiritual, sino que construyó casas, organizó granjas y curó heridas. Finalmente, contrajo la enfermedad y comenzó su sermón diciendo: 'Nosotros, los leprosos'. Su vida es el grado máximo de la 'empatía': no mirar el dolor desde afuera, sino hacerse uno con el que sufre para ayudarlo a sanar.",
        frase: "He llegado a ser leproso con los leprosos, para ganarlos a todos para Cristo."
    },
    {
        id: "v-clar-109",
        nombre: "Santa Clara de Asís",
        titulo: "La Luz del Desapego",
        origen: "Asís, Italia",
        fechas: "1194 - 1253",
        resumen: "Una joven noble que descubrió que el exceso de bienes materiales asfixia la paz mental.",
        historia: "Clara lo tenía todo para triunfar en la alta sociedad, pero sentía que las riquezas eran un peso. Siguiendo el ejemplo de San Francisco, escapó de su casa para vivir en absoluta pobreza. Fundó a las Clarisas, demostrando que cuando la mente se libera de la necesidad de acumular y controlar, encuentra una lucidez extraordinaria. Una vez detuvo a un ejército invasor solo sosteniendo la Eucaristía en la puerta de su convento. Nos enseña que la verdadera seguridad no está en lo que tenemos, sino en quiénes somos.",
        frase: "Mírate cada día en el espejo de la pobreza, la humildad y la caridad."
    },
    {
        id: "v-tmor-110",
        nombre: "Santo Tomás Moro",
        titulo: "El Mártir de la Conciencia",
        origen: "Londres, Inglaterra",
        fechas: "1478 - 1535",
        resumen: "El político brillante que prefirió perder la cabeza antes que traicionar sus valores.",
        historia: "Tomás era el hombre de confianza del rey Enrique VIII, un político exitoso, padre de familia y con un sentido del humor brillante. Cuando el rey quiso romper con la Iglesia para divorciarse, le exigió a Tomás que firmara un juramento apoyándolo. Tomás se negó en silencio, sabiendo que le costaría la vida. En la prisión, jamás perdió la paz ni el humor. Es el patrono de los gobernantes y nos da una cátedra de integridad: demuestra que la paz mental solo es posible cuando no hay contradicción entre lo que creemos y lo que hacemos.",
        frase: "Muero como buen servidor del rey, pero primero de Dios."
    },
    {
        id: "v-jvia-111",
        nombre: "San Juan María Vianney",
        titulo: "El Cura de Ars",
        origen: "Dardilly, Francia",
        fechas: "1786 - 1859",
        resumen: "Un sacerdote con grandes dificultades para estudiar que se convirtió en el mejor oyente del mundo.",
        historia: "Juan sufría lo que hoy llamaríamos 'síndrome del impostor'. Le costaba muchísimo estudiar y casi lo expulsan del seminario por no entender latín. Lo enviaron a Ars, un pueblito que a nadie le importaba. Sin embargo, su capacidad de escucha profunda ('escucha activa' en psicología) era tan sanadora que miles de personas viajaban de toda Europa solo para hablar con él. Pasaba hasta 16 horas al día confesando. Nos enseña que la empatía y la bondad curan mucho más que la brillantez intelectual.",
        frase: "La misericordia de Dios es como un torrente que desborda y lo arrastra todo."
    },
    {
        id: "v-patr-112",
        nombre: "San Patricio",
        titulo: "El Sanador del Trauma",
        origen: "Gran Bretaña / Irlanda",
        fechas: "385 - 461 d.C.",
        resumen: "Fue secuestrado y esclavizado de joven, pero regresó al lugar de su trauma para perdonar y enseñar.",
        historia: "A los 16 años, Patricio fue capturado por piratas y vendido como esclavo en Irlanda. Pasó años de soledad cuidando ovejas, donde aprendió a refugiarse en la oración. Tras lograr escapar y volver con su familia, tuvo un sueño donde los irlandeses le pedían que volviera. En lugar de huir de sus captores, regresó como misionero. Su historia es un ejemplo monumental de resiliencia: no permitió que el trauma lo convirtiera en víctima, sino que lo transformó en una misión de amor y liberación para todo un país.",
        frase: "Cristo conmigo, Cristo delante de mí, Cristo detrás de mí, Cristo en mí."
    },
    {
        id: "v-ahur-113",
        nombre: "San Alberto Hurtado",
        titulo: "El Fuego de la Justicia",
        origen: "Viña del Mar, Chile",
        fechas: "1901 - 1952",
        resumen: "El sacerdote que sacudió la indiferencia social viendo a Cristo en los niños de la calle.",
        historia: "Alberto era un jesuita y psicólogo que andaba en su famosa camioneta verde por las noches frías de Santiago buscando a niños y ancianos abandonados para llevarlos a un refugio que llamó el 'Hogar de Cristo'. Tenía una energía inagotable y un carisma que atraía a los jóvenes. Les preguntaba siempre a sus alumnos: '¿Qué haría Cristo en mi lugar?'. Nos enseña que la fe no es para encerrarse en un templo, sino para ensuciarse las manos buscando el progreso y la dignidad de la comunidad.",
        frase: "Dar hasta que duela y cuando duela, dar todavía más."
    },
    {
        id: "v-kate-114",
        nombre: "Santa Kateri Tekakwitha",
        titulo: "El Lirio de los Mohawks",
        origen: "Nueva York, EEUU",
        fechas: "1656 - 1680",
        resumen: "Una joven indígena que superó el rechazo social y físico conectando profundamente con la naturaleza.",
        historia: "Kateri sobrevivió a una epidemia de viruela que mató a su familia y la dejó con la vista débil y el rostro lleno de cicatrices. Al convertirse al cristianismo, sufrió el rechazo y las burlas ('bullying') de su propia tribu. Encontró refugio en los bosques, donde armaba cruces con ramas y veía a Dios en los árboles y ríos. Al morir a los 24 años, las cicatrices de su rostro desaparecieron milagrosamente. Nos enseña la fuerza de la identidad interior frente a la presión del grupo.",
        frase: "No soy mi propia dueña, me he entregado por completo a Jesús."
    },
    {
        id: "v-pior-115",
        nombre: "Beato Pier Giorgio Frassati",
        titulo: "El Alpinista de Dios",
        origen: "Turín, Italia",
        fechas: "1901 - 1925",
        resumen: "Un joven alegre, deportista y de familia rica que gastaba en secreto su dinero en los pobres.",
        historia: "Pier Giorgio era el alma de las fiestas, amaba escalar montañas, fumar en pipa y jugar al billar. Su familia era millonaria y su padre dueño de un periódico importante. Pero Pier tenía un secreto: antes de ir a la universidad, corría por los barrios bajos llevando medicinas y comida a las familias más necesitadas. Murió sorpresivamente de polio a los 24 años. Su familia no entendía por qué, en su funeral, las calles se llenaron de miles de pobres llorándolo. Nos enseña que la santidad es sinónimo de juventud, vitalidad y alegría vibrante.",
        frase: "Hacia lo alto (Verso l'alto)."
    },
    {
        id: "v-zita-116",
        nombre: "Santa Zita",
        titulo: "La Dignidad de lo Cotidiano",
        origen: "Lucca, Italia",
        fechas: "1218 - 1278",
        resumen: "Una empleada doméstica que encontró el sentido de la vida en la rutina del trabajo diario.",
        historia: "Zita empezó a trabajar como sirvienta en una casa rica a los 12 años y se quedó allí toda su vida. Al principio, los otros empleados la maltrataban por celos de su bondad, pero ella nunca respondió con violencia. Transformó su trabajo repetitivo (limpiar, cocinar, coser) en una meditación constante, demostrando que no existen trabajos 'menores'. Nos enseña que el estrés y el vacío existencial no se curan cambiando de lugar, sino cambiando la actitud con la que hacemos las cosas de todos los días.",
        frase: "El trabajo es el amigo de la religión."
    },
    {
        id: "v-mpro-117",
        nombre: "Beato Miguel Pro",
        titulo: "El Mártir del Buen Humor",
        origen: "Zacatecas, México",
        fechas: "1891 - 1927",
        resumen: "Un sacerdote que se disfrazaba para burlar la persecución y llevaba consuelo con una sonrisa.",
        historia: "Durante la persecución religiosa en México, ser sacerdote era un delito. Miguel, que de joven había sido muy bromista y aficionado al teatro, usó esas habilidades para disfrazarse de mecánico, de estudiante o de policía, y así poder llevar ayuda espiritual y material a la gente. Aportaba una inmensa alegría en tiempos de terror. Fue fusilado injustamente. Antes de recibir los disparos, perdonó a sus verdugos, extendió los brazos en forma de cruz y gritó con valentía. Nos enseña el poder del humor frente a la tragedia.",
        frase: "¡Viva Cristo Rey!"
    },
    {
        id: "v-cbor-118",
        nombre: "San Carlos Borromeo",
        titulo: "El Pastor de las Crisis",
        origen: "Arona, Italia",
        fechas: "1538 - 1584",
        resumen: "Un arzobispo que se quedó a organizar la asistencia médica durante la peor pandemia de su ciudad.",
        historia: "Carlos era de familia noble y brillante administrador. Cuando la peste bubónica golpeó Milán, las autoridades civiles huyeron por miedo al contagio. Carlos se quedó. Organizó hospitales, vendió todas las riquezas de su palacio para comprar comida y él mismo se encargó de cuidar a los moribundos. Su capacidad de gestión en medio de la crisis salvó miles de vidas. Nos enseña que el verdadero liderazgo se demuestra en los momentos de pánico, poniendo el cuerpo por la comunidad.",
        frase: "Para iluminar a los demás, debes encenderte a ti mismo."
    },
    {
        id: "v-mpaz-119",
        nombre: "Santa María Magdalena de Pazzi",
        titulo: "La Mística de la Purificación",
        origen: "Florencia, Italia",
        fechas: "1566 - 1607",
        resumen: "Soportó años de angustia interior y dudas dolorosas, transformando su neurosis en amor.",
        historia: "María experimentó gracias espirituales inmensas, pero también pasó por una profunda 'noche oscura del espíritu', donde sentía sequedad, dudas de fe e impulsos que la atormentaban mentalmente. En lugar de desesperar, ofreció ese sufrimiento psicológico a Dios. Entendió que la paz no siempre significa ausencia de conflicto en la mente, sino tener la voluntad firme de amar a pesar del ruido interior. Es un faro para quienes luchan con trastornos de ansiedad o pensamientos intrusivos.",
        frase: "El amor no es amado."
    },
    {
        id: "v-amer-120",
        nombre: "Santa Ángela de Mérici",
        titulo: "La Pionera de la Educación",
        origen: "Desenzano, Italia",
        fechas: "1474 - 1540",
        resumen: "Una mujer visionaria que empoderó a las jóvenes creando escuelas cuando nadie lo hacía.",
        historia: "En el siglo XVI, la educación era un privilegio para los hombres ricos; las mujeres solo podían casarse o entrar al convento. Ángela vio la ignorancia en la que crecían las niñas y fundó las Ursulinas, el primer grupo de mujeres dedicadas exclusivamente a enseñar. Su método era revolucionario para la época: pedía a las maestras que trataran a las alumnas con amor y persuasión, no con la vara. Nos enseña que la educación integral es la herramienta más poderosa para cambiar el futuro de una sociedad.",
        frase: "Ten cuidado de enseñar más con el ejemplo que con las palabras."
    },
    {
        id: "v-jcri-121",
        nombre: "San Juan Crisóstomo",
        titulo: "La Boca de Oro",
        origen: "Antioquía (actual Turquía)",
        fechas: "347 - 407",
        resumen: "Un comunicador tan brillante que sus palabras sanaban a los pobres y hacían temblar a los corruptos.",
        historia: "Crisóstomo significa 'Boca de Oro'. Juan tenía un talento excepcional para hablar en público, pero no lo usaba para adular, sino para decir verdades incómodas. Denunció la riqueza exagerada de la corte imperial y defendió a los más desfavorecidos de la ciudad. Esto le costó el destierro y la muerte. Nos enseña el peso psicológico y espiritual de la comunicación: la palabra puede construir o destruir, y siempre debe usarse como una herramienta al servicio de la verdad.",
        frase: "No te avergüences de pedir perdón, avergüénzate de pecar."
    },
    {
        id: "v-mtou-122",
        nombre: "San Martín de Tours",
        titulo: "El Soldado de la Compasión",
        origen: "Panonia (actual Hungría)",
        fechas: "316 - 397",
        resumen: "Partió su capa militar para abrigar a un mendigo, descubriendo que abrigaba al mismo Dios.",
        historia: "Martín era un soldado del ejército romano. Un día de mucho frío, se encontró con un mendigo temblando en la calle. Como no tenía dinero, sacó su espada, partió su manto de soldado por la mitad y lo cubrió. Esa noche, soñó con Jesús vestido con esa mitad de capa. Entendió que la violencia no era su camino, dejó la milicia y se convirtió en un pacificador. Nos enseña que los pequeños gestos de compasión, incluso aquellos que parecen insuficientes, tienen un eco en la eternidad.",
        frase: "Señor, si todavía soy necesario para tu pueblo, no rechazo el trabajo."
    },
    {
        id: "v-bsue-123",
        nombre: "Santa Brígida de Suecia",
        titulo: "La Consejera de Europa",
        origen: "Uppland, Suecia",
        fechas: "1303 - 1373",
        resumen: "Madre de ocho hijos que, tras quedar viuda, se convirtió en una líder espiritual y reformadora.",
        historia: "Brígida tuvo una vida matrimonial feliz y fue madre de una familia numerosa. Al morir su esposo, experimentó visiones que la impulsaron a involucrarse en los conflictos políticos y religiosos de Europa. Viajó a Roma y exigió reformas contundentes al clero. Su vida rompe el estereotipo de la mujer medieval: fue valiente, viajera y líder de opinión. Nos enseña que la experiencia familiar y el conocimiento del dolor humano son la mejor escuela para aconsejar y guiar a otros.",
        frase: "Muéstrame el camino, Señor, y hazme dispuesta a andarlo."
    },
    {
        id: "v-tosa-124",
        nombre: "Santo Tomás de Aquino",
        titulo: "El Gigante del Pensamiento",
        origen: "Roccasecca, Italia",
        fechas: "1225 - 1274",
        resumen: "Demostró que la razón y la ciencia son aliadas indispensables para conocer a Dios.",
        historia: "A Tomás le decían el 'buey mudo' por ser robusto y muy callado. Pero su mente era brillante. Entendió que el ser humano tiene inteligencia por una razón: para buscar la Verdad. Escribió obras inmensas uniendo la filosofía de Aristóteles con la fe cristiana. Sin embargo, poco antes de morir, tuvo una experiencia mística tan profunda que dejó de escribir, diciendo que todo lo que había hecho era 'como paja' comparado con el amor que había sentido. Nos enseña a integrar la mente analítica con el corazón.",
        frase: "La gracia no destruye la naturaleza, sino que la perfecciona."
    },
    {
        id: "v-jarc-125",
        nombre: "San Gabriel Arcángel",
        titulo: "El Mensajero de la Esperanza",
        origen: "Reino Celestial",
        fechas: "Eternidad",
        resumen: "El embajador divino que nos recuerda el poder que tienen las buenas noticias en nuestra vida.",
        historia: "Su nombre significa 'Fortaleza de Dios'. En la Biblia, aparece siempre en momentos clave para llevar anuncios que cambian la historia, el más importante de ellos: la Encarnación a la Virgen María. Es el patrono de los comunicadores, locutores y embajadores. Psicológicamente, Gabriel representa esa 'voz interna' o ese mensaje externo que irrumpe en nuestra vida para darnos claridad cuando estamos confundidos, recordándonos que siempre hay un propósito mayor desplegándose.",
        frase: "No temas, porque has hallado gracia delante de Dios."
    },
    {
        id: "v-jbos-126",
        nombre: "Santo Domingo Savio",
        titulo: "La Madurez de la Niñez",
        origen: "Riva presso Chieri, Italia",
        fechas: "1842 - 1857",
        resumen: "Un chico común que demostró una madurez emocional y espiritual asombrosa para su edad.",
        historia: "Domingo era alumno de San Juan Bosco. No hacía milagros extraordinarios ni sufría persecuciones crueles. Su santidad consistió en algo mucho más difícil: ser consistente en la alegría, pacificar las peleas entre sus compañeros y cumplir sus deberes diarios. Cuando veía a chicos burlándose de otros, él intervenía con valentía. Murió antes de los 15 años. Su vida nos enseña que el liderazgo sano y la madurez no dependen de los años vividos, sino de la coherencia de nuestras acciones.",
        frase: "Prefiero morir antes que pecar."
    },
// --- ÚLTIMA TANDA ESENCIAL: (127 a 136) ---
    {
        id: "v-migu-127",
        nombre: "San Miguel Arcángel",
        titulo: "El Guerrero de la Luz",
        origen: "Reino Celestial",
        fechas: "Eternidad",
        resumen: "El príncipe de los ángeles que nos enseña a enfrentar y derrotar el mal sin miedo.",
        historia: "Su nombre significa '¿Quién como Dios?'. En la Biblia, es el líder de los ejércitos celestiales que expulsa al demonio. Más allá de la imagen de la espada, Miguel representa la 'batalla espiritual' que todos libramos en nuestra mente todos los días contra pensamientos de oscuridad, depresión o tentación. Invocado como el gran protector, su figura nos recuerda que el mal hace mucho ruido, pero no tiene el poder definitivo. Nos enseña a plantarle cara a nuestras sombras (nuestros miedos) con la fuerza de la Verdad.",
        frase: "¡Quién como Dios! Nadie como Dios."
    },
    {
        id: "v-mart-129",
        nombre: "Santa Marta",
        titulo: "La Patrona de los Ansiosos",
        origen: "Betania, Israel",
        fechas: "Siglo I d.C.",
        resumen: "La amiga de Jesús que tuvo que aprender a frenar su mente para poder disfrutar el presente.",
        historia: "Marta era una mujer muy trabajadora que recibió a Jesús en su casa. Mientras ella corría estresada limpiando y cocinando, su hermana María solo se sentó a escucharlo. Cuando Marta se quejó, Jesús le dijo: 'Marta, te inquietas y te preocupas por muchas cosas, pero solo una es necesaria'. Es la patrona perfecta para la época moderna: nos enseña sobre el 'burnout' (agotamiento) y el exceso de control. Su vida nos recuerda que trabajar está bien, pero no sirve de nada si el estrés no nos deja tiempo para amar.",
        frase: "Señor, yo creo que Tú eres el Cristo, el Hijo de Dios."
    },
    {
        id: "v-jcup-130",
        nombre: "San José de Cupertino",
        titulo: "El Estudiante que Voló",
        origen: "Cupertino, Italia",
        fechas: "1603 - 1663",
        resumen: "Un joven con graves dificultades de aprendizaje que superó sus fracasos a través de la fe.",
        historia: "José tenía problemas para aprender, poca memoria y era muy torpe (hoy quizás lo diagnosticarían con déficit de atención severo). Lo echaron de varios trabajos y conventos. Solo sabía leer un fragmento del Evangelio. Durante su examen para ser sacerdote, el obispo le preguntó casualmente sobre ese único fragmento que sabía, logrando aprobar. Tenía momentos de éxtasis donde levitaba. Es el patrón de los estudiantes, recordándonos que la inteligencia emocional y espiritual es mucho más valiosa que las notas en un papel.",
        frase: "No hay que hacer de esta tierra un cielo, sino ganar el cielo desde esta tierra."
    },
    {
        id: "v-jero-132",
        nombre: "San Jerónimo",
        titulo: "El Traductor del Desierto",
        origen: "Estridón (actual Croacia/Eslovenia)",
        fechas: "340 - 420",
        resumen: "Un sabio con problemas de ira que logró canalizar su carácter difícil para servir a la Iglesia.",
        historia: "Jerónimo tenía un temperamento terrible, era colérico, peleador y muy impaciente. Para no lastimar a los demás, se retiró a vivir a una cueva. Allí dedicó su vida a una tarea titánica: traducir toda la Biblia del hebreo y griego al latín (la famosa 'Vulgata'), para que la gente común pudiera leerla. Se golpeaba el pecho con una piedra pidiendo perdón por su enojo. Nos enseña que Dios no nos pide que borremos nuestro carácter, sino que lo canalicemos y lo usemos para construir y no para destruir.",
        frase: "Desconocer las Escrituras es desconocer a Cristo."
    },
    {
        id: "v-dima-133",
        nombre: "San Dimas",
        titulo: "El Buen Ladrón",
        origen: "Israel",
        fechas: "Murió en el 33 d.C.",
        resumen: "El criminal que logró robarse el cielo en los últimos minutos de su vida.",
        historia: "Dimas fue crucificado al lado de Jesús por ser un bandido y asesino. Mientras todos se burlaban de Cristo, Dimas tuvo un momento de lucidez, reconoció sus propios errores y le dijo a Jesús: 'Acuérdate de mí cuando estés en tu Reino'. Jesús le respondió: 'Hoy estarás conmigo en el paraíso'. Es el único santo canonizado directamente por Jesús en vida. Su historia es el alivio psicológico definitivo para la culpa: nos enseña que no existe un pasado tan oscuro que no pueda ser perdonado en un segundo de amor sincero.",
        frase: "Jesús, acuérdate de mí cuando llegues a tu Reino."
    },
    {
        id: "v-chia-134",
        nombre: "Beata Chiara Luce Badano",
        titulo: "La Alegría en la Tormenta",
        origen: "Sassello, Italia",
        fechas: "1971 - 1990",
        resumen: "Una adolescente que enfrentó un cáncer terminal con una sonrisa que conmovió al mundo.",
        historia: "Chiara era una chica normal: le gustaba el tenis, nadar y salir con amigas. A los 17 años le diagnosticaron un cáncer de huesos muy doloroso. Tras 25 minutos de silencio en su cuarto, dijo 'Si tú lo quieres, Jesús, yo también lo quiero'. Se negó a tomar morfina para poder mantener su mente clara y ofrecer su dolor. Perdió el pelo y quedó paralizada, pero su cuarto se llenó de jóvenes que iban a consolarla y salían consolados por ella. Nos enseña que la actitud con la que enfrentamos lo inevitable es nuestra mayor libertad.",
        frase: "Por ti, Jesús. Si tú lo quieres, yo también lo quiero."
    },
    {
        id: "v-vero-135",
        nombre: "Santa Verónica",
        titulo: "El Rostro de la Compasión",
        origen: "Jerusalén, Israel",
        fechas: "Siglo I d.C.",
        resumen: "La mujer que venció el miedo a las burlas para limpiar la sangre del rostro de Jesús.",
        historia: "Durante el Vía Crucis, mientras los soldados gritaban y la multitud empujaba, una mujer se abrió paso entre la violencia. No le importó el 'qué dirán'; solo vio a un hombre sufriendo. Se acercó y limpió el rostro de Jesús con su velo, en el cual quedó grabada Su imagen. Aunque la Biblia no menciona su nombre (Verónica significa 'Vera Icon', verdadera imagen), su figura representa a todos aquellos que se atreven a mostrar empatía y compasión yendo a contracorriente de un mundo violento o indiferente.",
        frase: "El amor no calcula los riesgos, solo responde al dolor."
    },
    {
        id: "v-tand-136",
        nombre: "Santa Teresa de los Andes",
        titulo: "La Alegría de Sudamérica",
        origen: "Santiago, Chile",
        fechas: "1900 - 1920",
        resumen: "Una joven deportista que encontró en la vida contemplativa un mar de felicidad infinita.",
        historia: "Juana Fernández era una joven chilena de clase alta, le encantaba nadar, cabalgar y jugar tenis. A pesar de tener todo el mundo a sus pies, sentía que solo Dios podía saciar su sed de amor infinito. Ingresó a un convento de monjas carmelitas a los 19 años y murió meses después de tifus. Sus cartas a familiares y amigos son un derroche de optimismo. Nos enseña que consagrar la vida a Dios no es algo aburrido ni triste, sino la máxima aventura que puede emprender un corazón joven.",
        frase: "Dios es alegría infinita."
    },
    {
        id: "v-japo-128",
        nombre: "San Juan Apóstol",
        titulo: "El Discípulo Amado",
        origen: "Betsaida, Galilea",
        fechas: "Siglo I d.C. - 100 d.C.",
        resumen: "El único apóstol que no huyó por miedo y se quedó al pie de la cruz hasta el final.",
        historia: "Juan era el más joven de los doce. En la última cena, recostó su cabeza sobre el pecho de Jesús. Esa intimidad afectiva le dio la fuerza emocional para no huir cuando todos los demás lo hicieron. Fue el único apóstol que estuvo al pie de la cruz, donde recibió a María como madre. Es el patrón de la amistad y la fidelidad. Nos enseña que cuando nuestras relaciones están basadas en el amor profundo y no en la conveniencia, somos capaces de resistir las peores crisis sin abandonar al otro.",
        frase: "Dios es Amor, y el que permanece en el amor, permanece en Dios."
    },
    {
        id: "v-jbau-131",
        nombre: "San Juan Bautista",
        titulo: "La Voz en el Desierto",
        origen: "Judea",
        fechas: "Siglo I a.C. - 30 d.C.",
        resumen: "El hombre que preparó el camino para el Salvador y tuvo la humildad de dar un paso al costado.",
        historia: "Juan era un profeta de palabra dura que bautizaba en el río Jordán. Tenía miles de seguidores y mucha fama, pero cuando apareció Jesús, Juan no compitió por el protagonismo. Hizo algo dificilísimo para el ego humano: señalar a otro y retirarse, diciendo 'Conviene que Él crezca y yo disminuya'. Murió decapitado por decir la verdad ante un rey corrupto. Nos enseña sobre el manejo del ego: la verdadera grandeza de un líder no es acumular seguidores, sino guiar a las personas hacia la Verdad y saber cuándo retirarse.",
        frase: "Conviene que Él crezca, y que yo disminuya."
    }
];