// Lógica del buscador sitewide (Profundizá). Depende de SEARCH_INDEX (search-index.js)
function abrirBusqueda() {
    const overlay = document.getElementById('siteSearchOverlay');
    if (!overlay) return;
    overlay.classList.add('show');
    const input = document.getElementById('siteSearchInput');
    renderSearchResults('');
    setTimeout(() => input && input.focus(), 50);
}

function cerrarBusqueda() {
    const overlay = document.getElementById('siteSearchOverlay');
    if (!overlay) return;
    overlay.classList.remove('show');
    const input = document.getElementById('siteSearchInput');
    if (input) input.value = '';
}

function normalizarTexto(str) {
    return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function renderSearchResults(query) {
    const results = document.getElementById('siteSearchResults');
    if (!results || typeof SEARCH_INDEX === 'undefined') return;

    const q = normalizarTexto(query.trim());
    if (!q) {
        results.innerHTML = '<div class="site-search-hint"><i class="fas fa-hands-praying"></i><br>Buscá mazos, quizzes, "sabías que", glosario, santoral y más.</div>';
        return;
    }

    const matches = SEARCH_INDEX.filter(item =>
        normalizarTexto(item.title).includes(q) ||
        normalizarTexto(item.desc).includes(q) ||
        normalizarTexto(item.cat).includes(q)
    ).slice(0, 25);

    if (!matches.length) {
        results.innerHTML = `<div class="site-search-empty"><i class="fas fa-circle-question"></i><br>Sin resultados para "${query}".</div>`;
        return;
    }

    results.innerHTML = matches.map(item => `
        <a href="${item.url}" class="site-search-result-item">
            <div class="site-search-result-icon"><i class="fas ${item.icon}"></i></div>
            <div class="site-search-result-text">
                <div class="site-search-result-title">${item.title}</div>
                <div class="site-search-result-desc">${item.desc}</div>
            </div>
            <span class="site-search-result-cat">${item.cat}</span>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('siteSearchInput');
    if (input) {
        input.addEventListener('input', (e) => renderSearchResults(e.target.value));
    }
    const overlay = document.getElementById('siteSearchOverlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) cerrarBusqueda();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cerrarBusqueda();
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            abrirBusqueda();
        }
    });
});
