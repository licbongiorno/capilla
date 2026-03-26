<!DOCTYPE html>
<html lang="es-AR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Abrazo de Dios - Capilla Santa Ana</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>

    <style>
        /* VARIABLES ORIGINALES DEL MAZO */
        :root {
            --bg: #f3f0f7; /* Lavanda Grisáceo muy suave */
            --overlay: rgba(255, 255, 255, 0.88);
            --card: #ffffff;
            --card-back: #80CBC4; /* Verde Agua / Contención */
            --accent: #9575CD; /* Lavanda */
            --primario: #5E35B1; /* Violeta Profundo */
        }

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; margin: 0; padding: 0; }
        html, body { height: 100%; overflow: hidden; font-family: 'Montserrat', sans-serif; background-color: var(--bg); color: #333; }

        /* FONDO DINÁMICO */
        #bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle, var(--bg) 0%, #e8e4f1 100%); }
        .floating-word { position: absolute; color: rgba(149, 117, 205, 0.15); font-weight: 800; text-transform: uppercase; white-space: nowrap; pointer-events: none; bottom: -100px; font-family: 'Playfair Display', serif; }
        @keyframes floatUp { 0% { transform: translateY(0) rotate(-5deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-120vh) rotate(5deg); opacity: 0; } }
        .overlay { position: fixed; inset: 0; background: var(--overlay); z-index: 1; backdrop-filter: blur(8px); }

        /* BARRA DE NAVEGACIÓN UNIFICADA */
        .mazo-nav { position: fixed; top: 0; left: 0; width: 100%; padding: 20px; display: flex; justify-content: space-between; z-index: 100; }
        .nav-btn { background: rgba(255,255,255,0.6); color: var(--primario); text-decoration: none; padding: 10px 18px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: 0.3s; backdrop-filter: blur(10px); }
        .nav-btn:hover { background: white; transform: translateY(-2px); }

        /* CONTENEDOR PRINCIPAL */
        .container { position: relative; z-index: 10; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; }

        /* CARTA Y ANIMACIONES 3D */
        .scene { width: 100%; max-width: 360px; aspect-ratio: 2/3; perspective: 1000px; margin-bottom: 40px; }
        
        .card { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.3s ease; cursor: pointer; }
        .card.is-flipped { transform: rotateY(180deg); }
        
        /* CLASE OBLIGATORIA PARA EL ENGINE */
        .card.slide-out { transform: translateX(100px) rotateZ(10deg); opacity: 0; transition: 0.3s; }

        .card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 25px; padding: 40px 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.5); }
        
        .card-front { background: var(--card); }
        .card-back { background: var(--card-back); transform: rotateY(180deg); color: white; border: none; }

        /* ETIQUETA DE TEMA (NUEVA) */
        .theme-tag { display: none; background: rgba(149, 117, 205, 0.15); color: var(--accent); padding: 6px 15px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }

        .question { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--primario); font-weight: 700; line-height: 1.4; margin-bottom: 20px; }
        .tap-hint { position: absolute; bottom: 30px; font-size: 0.85rem; color: #999; font-weight: 600; display: flex; align-items: center; gap: 8px; opacity: 0.7; }
        
        .mazo-icon { font-size: 3.5rem; color: rgba(255,255,255,0.9); margin-bottom: 25px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.1)); }
        .verse { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-style: italic; line-height: 1.5; margin-bottom: 20px; }
        .ref { font-weight: 700; font-size: 1rem; color: rgba(255,255,255,0.9); letter-spacing: 1px; text-transform: uppercase; }
        .card-back small { position: absolute; bottom: 30px; font-size: 0.75rem; opacity: 0.8; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }

        /* BOTONERA DE ACCIÓN */
        .actions { display: flex; gap: 15px; width: 100%; max-width: 360px; }
        .action-btn { flex: 1; padding: 18px; border-radius: 15px; border: none; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1rem; cursor: pointer; transition: 0.3s; display: flex; justify-content: center; align-items: center; gap: 10px; text-transform: uppercase; letter-spacing: 1px; }
        .action-btn.main { background: var(--primario); color: white; box-shadow: 0 10px 20px rgba(94, 53, 177, 0.3); }
        .action-btn.main:hover { background: #4527a0; transform: translateY(-3px); }
        .action-btn.secondary { flex: 0 0 60px; background: white; color: var(--primario); box-shadow: 0 10px 20px rgba(0,0,0,0.05); font-size: 1.3rem; }
        .action-btn.secondary:hover { background: var(--bg); transform: translateY(-3px); }

        /* FOOTER INSTITUCIONAL */
        .mazo-footer { position: fixed; bottom: 15px; width: 100%; text-align: center; font-size: 11px; opacity: 0.6; color: var(--primario); z-index: 10; font-weight: 600; letter-spacing: 0.5px; }

        /* TOAST DE NOTIFICACIÓN */
        .toast { position: fixed; bottom: -100px; left: 50%; transform: translateX(-50%); background: #333; color: white; padding: 12px 25px; border-radius: 50px; font-size: 0.9rem; font-weight: 600; transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.26, 1.55); z-index: 9999; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .toast.show { bottom: 40px; }
    </style>
</head>
<body>

    <div id="bg"></div>
    <div class="overlay"></div>

    <nav class="mazo-nav">
        <a href="index.html" class="nav-btn"><i class="fas fa-home"></i> Inicio</a>
        <a href="mazos.html" class="nav-btn"><i class="fas fa-layer-group"></i> Mazos</a>
    </nav>

    <div class="container">
        <div class="scene">
            <div id="card" class="card">
                <div class="card-face card-front">
                    <span id="card-theme" class="theme-tag"></span>
                    <p id="q-text" class="question">Cargando abrazo...</p>
                    <div class="tap-hint"><i class="fas fa-hand-pointer"></i> Tocar para ver la cita</div>
                </div>
                
                <div class="card-face card-back">
                    <i class="fas fa-dove mazo-icon"></i> <p id="v-text" class="verse"></p>
                    <p id="v-ref" class="ref"></p>
                    <small>Capilla Santa Ana</small>
                </div>
            </div>
        </div>

        <div class="actions">
            <button id="btn-next" class="action-btn main"><i class="fas fa-redo-alt"></i> Otra Carta</button>
            <button id="btn-share" class="action-btn secondary" aria-label="Compartir"><i class="fas fa-share-alt"></i></button>
        </div>
    </div>

    <footer class="mazo-footer">
        Nicolás Bongiorno – Arquitectura Digital – Capilla Santa Ana
    </footer>

    <div id="toast" class="toast"></div>

    <script src="mazo-engine.js"></script>

    <script>
        // PEGA AQUÍ TU ARRAY DE CARTAS ORIGINAL (Agregué un 't' de ejemplo en la primera para que veas cómo queda)
        const CARTAS = [
            { q: "¿Qué carga pesada necesito entregarle a Dios hoy?", v: "Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso.", r: "Mateo 11,28", t: "Consuelo" },
            { q: "¿En qué área de mi vida siento miedo o ansiedad?", v: "No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios.", r: "Isaías 41,10" },
            { q: "¿De qué manera el amor de Dios me abraza en mis defectos?", v: "El Señor es compasivo y clemente, lento para la ira y grande en misericordia.", r: "Salmo 103,8" }
            // Agrega el resto de las cartas de Abrazo de Dios aquí...
        ];

        // Función del fondo de este mazo específico
        function initBG() {
            const bg = document.getElementById('bg');
            const words = ['PAZ', 'CONSUELO', 'ESPERANZA', 'SANTA ANA', 'REFUGIO'];
            for (let i = 0; i < 20; i++) {
                const s = document.createElement('span');
                s.className = 'floating-word';
                s.textContent = words[Math.floor(Math.random() * words.length)];
                s.style.left = Math.random() * 100 + 'vw';
                s.style.fontSize = (16 + Math.random() * 28) + 'px';
                const d = 18 + Math.random() * 25;
                s.style.animation = `floatUp ${d}s linear infinite`;
                s.style.animationDelay = `-${Math.random() * d}s`;
                bg.appendChild(s);
            }
        }

        // Ejecución al cargar
        window.onload = () => {
            initBG();
            MazoEngine.init(CARTAS, "Abrazo de Dios");
        };
    </script>
</body>
</html>
