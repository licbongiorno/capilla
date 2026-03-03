// Configuración Global de la Capilla
const CONFIG_CAPILLA = {
    nombre: "Capilla Santa Ana",
    logo: "icono.png",
    alias: "capillas.fatima.ag",
    whatsapp: "5493517023789"
};

// Función para inyectar la cabecera automáticamente
function cargarNavegacion() {
    const navHTML = `
        <nav>
            <a href="index.html" class="logo-container">
                <img src="${CONFIG_CAPILLA.logo}" alt="${CONFIG_CAPILLA.nombre}" class="nav-logo-img">
                <span class="logo-texto">${CONFIG_CAPILLA.nombre}</span>
            </a>
            <div class="nav-right">
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="profundiza.html">Profundizá</a></li>
                    <li><a href="#" onclick="toggleModal('modalOfrenda')">Ofrenda</a></li>
                </ul>
                <div class="nav-actions">
                    <button class="icon-btn" onclick="toggleDarkMode()"><i class="fas fa-moon" id="darkIcon"></i></button>
                    <button class="menu-toggle" onclick="toggleMenu()"><span></span><span></span><span></span></button>
                </div>
            </div>
        </nav>
    `;

    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarNavegacion);

// Funciones de control (Menu y Dark Mode)
function toggleMenu() { document.getElementById('navLinks').classList.toggle('active'); }
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkIcon');
    if(icon) icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
}
