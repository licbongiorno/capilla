import os
import re

directory = r"g:/proyectos/paginas web/capilla santa ana/iglesia mejorada/profundiza"
quiz_files = ["quiz-6-7.html", "quiz-8-9.html", "quiz-10-11.html", "quiz-12-15.html", "quiz-16-18.html", "quiz-18.html"]

css_addition = """
/* --- Navbar Nuevo --- */
.navbar { position: sticky; top: 0; z-index: 3000; background: var(--caja-bg); padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.1); }
.nav-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 700; color: var(--primario); display: flex; align-items: center; gap: 10px; }
.nav-brand i { color: var(--acento); }
.nav-menu { display: flex; align-items: center; gap: 30px; }
.nav-links { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: var(--texto); font-weight: 500; font-size: 0.95rem; transition: color 0.3s; }
.nav-links a:hover, .nav-links a.active { color: var(--acento); }
.hamburger { display: none; background: transparent; border: none; font-size: 1.5rem; color: var(--primario); cursor: pointer; }
@media (max-width: 768px) {
    .hamburger { display: block; }
    .nav-menu { position: fixed; top: 65px; left: -100%; width: 100%; height: calc(100vh - 65px); background: var(--caja-bg); flex-direction: column; justify-content: center; transition: 0.4s ease-in-out; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 2999; }
    .nav-menu.active { left: 0; }
    .nav-links { flex-direction: column; text-align: center; gap: 30px; }
    .nav-links a { font-size: 1.2rem; color: var(--texto); }
}
/* --- Animación de Corazón --- */
@keyframes latido { 0% { transform: scale(1); } 20% { transform: scale(1.15); } 40% { transform: scale(1); } 60% { transform: scale(1.15); } 80% { transform: scale(1); } 100% { transform: scale(1); } }
.corazon-late { animation: latido 1.5s infinite; color: #e74c3c !important; display: inline-block; }
/* --- Botón Flotante y Modal Donaciones --- */
.float-container { position: fixed; bottom: calc(30px + env(safe-area-inset-bottom)); right: 30px; display: flex; flex-direction: column; gap: 15px; z-index: 999; pointer-events: auto; }
.f-btn { width: 65px; height: 65px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; border: none; cursor: pointer; box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4); transition: transform 0.3s, box-shadow 0.3s; text-decoration: none; font-size: 1.8rem; background: #FFF; border: 3px solid #e74c3c; }
.f-btn:hover { transform: scale(1.15) rotate(5deg); box-shadow: 0 12px 35px rgba(231, 76, 60, 0.6); }
@media (max-width: 768px) { .float-container { right: 15px; bottom: 20px; } .f-btn { width: 60px; height: 60px; font-size: 1.6rem; } }
.modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 10000; justify-content: center; align-items: center; backdrop-filter: blur(8px); padding: 20px; opacity: 0; transition: opacity 0.3s ease; }
.modal.show { display: flex; opacity: 1; }
.modal-content { background: #FFF; padding: 50px; border-radius: 20px; width: 100%; max-width: 550px; position: relative; max-height: 85vh; overflow-y: auto; box-shadow: 0 20px 50px rgba(0,0,0,0.5); text-align: center; transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.modal.show .modal-content { transform: scale(1); }
.modal-close { position: absolute; top: 25px; right: 25px; background: none; border: none; font-size: 2.5rem; cursor: pointer; color: #333; transition: 0.3s; }
.modal-close:hover { color: #e74c3c; transform: rotate(90deg); }
.alias-box { font-size: clamp(16px, 4vw, 24px); white-space: nowrap; overflow-x: auto; text-align: center; letter-spacing: 1px; padding: 15px; background-color: #F5F5F0; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; color: #5D4037; font-weight: 700; font-family: monospace; }
"""

html_nav = """    <nav class="navbar">
        <div class="nav-brand">
            <i class="fa-solid fa-cross"></i> Capilla Santa Ana
        </div>
        <div class="nav-menu">
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="profundiza.html" class="active">Profundizar</a></li>
                <li><a href="ayudanos.html">Ayudanos</a></li>
                <li><a href="#" onclick="abrirModalDonar(); return false;"><i class="fas fa-heart corazon-late"></i> Donaciones</a></li>
            </ul>
        </div>
        <button class="hamburger" onclick="toggleMenu()">
            <i class="fa-solid fa-bars"></i>
        </button>
    </nav>"""

html_modal = """    <div class="float-container">
        <button aria-label="Ayudar a la Capilla" class="f-btn" onclick="abrirModalDonar()">
            <i class="fas fa-heart corazon-late"></i>
        </button>
    </div>

    <div id="modalDonar" class="modal" role="dialog" aria-modal="true" tabindex="-1">
        <div class="modal-content">
            <button class="modal-close" onclick="cerrarModalDonar()" aria-label="Cerrar ventana">
                <i class="fas fa-times"></i>
            </button>
            <i class="fas fa-hand-holding-heart corazon-late" style="font-size: 4rem; color: var(--acento); margin-bottom: 20px;"></i>
            <h3 style="margin-bottom:15px; color: var(--primario); font-size: 2.2rem; font-family: 'Playfair Display', serif;">Sumá tu Corazón</h3>
            <p style="font-size: 1.05rem; opacity: 0.9; margin-bottom: 25px; line-height: 1.6; color: #333;">Cada aporte, grande o pequeño, es un abrazo a nuestra comunidad. Gracias a tu generosidad, mantenemos las puertas abiertas, sostenemos el ropero comunitario y Cáritas, y hacemos posible nuestra labor pastoral. <strong>¡Que Dios multiplique tu ayuda!</strong></p>
            <div class="alias-box" style="margin-bottom: 10px;">
                <span id="alias-modal">capillas.fatima.ag</span>
            </div>
            <p style="font-size: 0.9rem; color: #555; margin-bottom: 25px; font-weight: 600;">Destinatario: Parroquia De Nuestra Señora De Fátima</p>
            <button class="btn btn-primary" onclick="copiarAliasModal(this)" style="width: 100%; margin-bottom: 30px; font-size: 1.1rem; padding: 15px; border-radius: 50px; border: none; cursor: pointer; background: var(--acento); color: white; font-weight: bold;"><i class="far fa-copy"></i> Copiar Alias</button>
            <div style="border-top: 1px solid rgba(0,0,0,0.1); padding-top: 25px;">
                <p style="font-size: 0.95rem; font-weight: 600; margin-bottom: 15px; color: #333;">Una vez hecha la transferencia, te pedimos que nos compartas el comprobante:</p>
                <a href="https://wa.me/5493517023789?text=Hola!%20Les%20paso%20el%20comprobante%20de%20mi%20donaci%C3%B3n%20a%20la%20Capilla.%20%C2%A1Bendiciones!" target="_blank" style="background: #25D366; color: white; width: 100%; margin-bottom: 25px; padding: 15px; border-radius: 50px; text-decoration: none; display: inline-block; font-weight: bold;"><i class="fab fa-whatsapp"></i> Compartir Comprobante</a>
            </div>
            <div style="border-top: 1px solid rgba(0,0,0,0.1); padding-top: 20px;">
                <a href="ayudanos.html" style="color: var(--primario); font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;"><i class="fas fa-hands-helping"></i> Ver otras formas de colaborar</a>
            </div>
        </div>
    </div>
"""

js_modal = """
        // --- Nuevas Funciones Navbar y Modales ---
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            const hamburgerIcon = document.querySelector('.hamburger i');
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) { hamburgerIcon.classList.replace('fa-bars', 'fa-xmark'); } else { hamburgerIcon.classList.replace('fa-xmark', 'fa-bars'); }
        }
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                const hamburgerIcon = document.querySelector('.hamburger i');
                if(navMenu) navMenu.classList.remove('active');
                if(hamburgerIcon) hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
        function abrirModalDonar() {
            document.getElementById('modalDonar').classList.add('show');
            const navMenu = document.querySelector('.nav-menu');
            const hamburgerIcon = document.querySelector('.hamburger i');
            if(navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if(hamburgerIcon) hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        }
        function cerrarModalDonar() { document.getElementById('modalDonar').classList.remove('show'); }
        function copiarAliasModal(btn) {
            const alias = document.getElementById('alias-modal').innerText;
            navigator.clipboard.writeText(alias);
            const oldTxt = btn.innerHTML;
            btn.innerHTML = "<i class='fas fa-check'></i> ¡ALIAS COPIADO!";
            btn.style.backgroundColor = "#25D366"; btn.style.color = "white";
            setTimeout(() => { btn.innerHTML = oldTxt; btn.style.backgroundColor = "var(--acento)"; }, 3000);
        }
        document.addEventListener('keydown', (e) => { if(e.key === "Escape") cerrarModalDonar(); });
        document.getElementById('modalDonar').addEventListener('click', (e) => { if (e.target === document.getElementById('modalDonar')) { cerrarModalDonar(); } });
"""

for f in quiz_files:
    filepath = os.path.join(directory, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 1. Inject CSS before </style>
    content = re.sub(r'</style>', css_addition + '\n    </style>', content)
    
    # 2. Replace existing <nav>...</nav> with unified navbar
    content = re.sub(r'<nav>.*?</nav>', html_nav, content, flags=re.DOTALL)
    
    # 3. Inject float container and modal before <script> (at the bottom)
    content = re.sub(r'<script>', html_modal + '\n<script>', content, count=1)
    
    # 4. Inject JS just before initBG() or initQuiz()
    content = re.sub(r'(initBG\(\);|initQuiz\(\);)', js_modal + r'\n\1', content, count=1)

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Updated {f}")
