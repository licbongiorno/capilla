// config-global.js - Va en la RAÍZ del proyecto
const CONFIG_CAPILLA = {
    gtmId: "GTM-TZ6QSWZ6",
    donaciones: {
        alias: "capillas.fatima.ag",
        whatsapp: "5493517023789",
        copyDinero: "Con tu ofrenda mantenemos vivo este refugio de fe, sosteniendo obras y talleres para quienes más lo necesitan.",
        copyTalento: "Tu tiempo es valioso. ¿Querés enseñar un oficio, ayudar en eventos o sumarte al coro de la Capilla?"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Inyectar Textos de Donación
    document.querySelectorAll('.alias-global').forEach(el => el.innerText = CONFIG_CAPILLA.donaciones.alias);
    document.querySelectorAll('.copy-donar-dinero').forEach(el => el.innerText = CONFIG_CAPILLA.donaciones.copyDinero);
    document.querySelectorAll('.copy-donar-talento').forEach(el => el.innerText = CONFIG_CAPILLA.donaciones.copyTalento);
});
