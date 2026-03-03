// config-global.js - El Cerebro de la Capilla
const CONFIG_CAPILLA = {
    nombre: "Capilla Santa Ana",
    logo: "icono.png",
    whatsapp: "5493517023789",
    donaciones: {
        alias: "capillas.fatima.ag",
        mensajeWA: "Hola! Les comparto el comprobante de mi ofrenda a la Capilla. Bendiciones!"
    }
};

// Inyección de Cabecera y Botón Flotante
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectar Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
            <nav>
                <a href="index.html" class="logo-container">
                    <img src="${CONFIG_CAPILLA.logo}" alt="Logo" class="nav-logo-img">
                    <span class="logo-texto">${CONFIG_CAPILLA.nombre}</span>
                </a>
                <div class="nav-right">
                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="mazos.html">Mazos</a></li>
                        <li><a href="glosario.html">Glosario</a></li>
                        <li><a href="#" onclick="toggleModal('modalOfrenda')">Ofrenda</a></li>
                    </ul>
                    <div class="nav-actions">
                        <button class="icon-btn" onclick="toggleDarkMode()"><i class="fas fa-moon" id="darkIcon"></i></button>
                        <button class="menu-toggle" onclick="toggleMenu()"><span></span><span></span><span></span></button>
                    </div>
                </div>
            </nav>
        `;
    }

    // 2. Inyectar Botón Flotante con Latido
    const floatContainer = document.createElement('div');
    floatContainer.className = 'float-container';
    floatContainer.innerHTML = `
        <button class="f-btn heartbeat-btn" onclick="toggleModal('modalOfrenda')" title="Sumá tu Corazón">
            <i class="fas fa-hand-holding-heart"></i>
        </button>
    `;
    document.body.appendChild(floatContainer);
});

// Funciones Globales
function toggleMenu() { document.getElementById('navLinks').classList.toggle('active'); }

function toggleModal(id) { document.getElementById(id).classList.toggle('show'); }

function copiarAlias() {
    navigator.clipboard.writeText(CONFIG_CAPILLA.donaciones.alias);
    alert("¡Alias copiado! Muchas gracias por sumarte.");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkIcon');
    const isDark = document.body.classList.contains('dark-mode');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Cargar tema al iniciar
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
