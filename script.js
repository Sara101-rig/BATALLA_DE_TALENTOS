/* =====================================================
   Cambio de idioma ES / EN
   Recorre todos los elementos con data-es / data-en
   y reemplaza el texto visible al hacer clic en el botón.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('langToggle');
  const elements = document.querySelectorAll('[data-es][data-en]');
  let currentLang = 'es';

  function setLanguage(lang) {
    elements.forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });

    document.documentElement.setAttribute('lang', lang);

    const esLabel = toggleBtn.querySelector('.lang-toggle__es');
    const enLabel = toggleBtn.querySelector('.lang-toggle__en');
    esLabel.classList.toggle('is-active', lang === 'es');
    enLabel.classList.toggle('is-active', lang === 'en');

    currentLang = lang;
  }

  toggleBtn.addEventListener('click', function () {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
});