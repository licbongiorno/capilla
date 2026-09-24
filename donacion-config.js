// Fuente única del alias de donaciones. Cambialo acá y se actualiza en todo el sitio.
const DONACION_ALIAS = "parroquia.fatima.ag";

document.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('alias-modal');
    if (modalEl) modalEl.textContent = DONACION_ALIAS;

    document.querySelectorAll('.alias-valor').forEach((el) => {
        el.textContent = DONACION_ALIAS;
    });
});
