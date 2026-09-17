/* ==========================================================
   DDBUS Ipiales — app.js
   Enrutador liviano por hash (#/inicio, #/rutas, ...) que muestra
   la <section data-view="..."> correspondiente, sin dependencias
   externas. Cada módulo puede añadir su propio render(view) más
   adelante sin tocar este archivo.
   ========================================================== */

(function () {
  var VALID_VIEWS = ['inicio', 'rutas', 'paraderos', 'tutorial', 'seguridad'];
  var DEFAULT_VIEW = 'inicio';

  function currentViewFromHash() {
    var hash = window.location.hash.replace('#/', '').replace('#', '');
    return VALID_VIEWS.indexOf(hash) !== -1 ? hash : DEFAULT_VIEW;
  }

  function setActiveNav(view) {
    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-nav-link') === view);
    });
  }

  function showView(view) {
    document.querySelectorAll('[data-view]').forEach(function (section) {
      section.classList.toggle('is-active', section.getAttribute('data-view') === view);
    });
    setActiveNav(view);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function onRouteChange() {
    showView(currentViewFromHash());
  }

  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('DOMContentLoaded', function () {
    if (!window.location.hash) {
      window.location.hash = '#/' + DEFAULT_VIEW;
    }
    onRouteChange();
    renderDashboard();
  });

  /* ---------------- Dashboard ---------------- */

  function formatCOP(value) {
    return '$' + value.toLocaleString('es-CO');
  }

  function renderDashboard() {
    var fareEl = document.getElementById('fareValue');
    if (fareEl && window.DDBUS_DATA) {
      fareEl.textContent = formatCOP(window.DDBUS_DATA.currentFare);
    }
  }
})();
