/* ============================================
   VIRTUALIOS KELIONĖS ŠIAULIUOSE
   script.js – visa interaktyvi logika
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // SIDEBAR MENIU
  // ============================================
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    sidebar.querySelector('a').focus();
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.focus();
  }

  if (menuBtn) menuBtn.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);

  // Uždaryti Esc klavišu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSidebar();
      closeModal();
    }
  });

  // ============================================
  // ACCORDION
  // ============================================
  var toggles = document.querySelectorAll('.sidebar-toggle');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var section = toggle.closest('.sidebar-section');

      // Uždaryti kitas sekcijas
      document.querySelectorAll('.sidebar-section').forEach(function (s) {
        if (s !== section) s.classList.remove('open');
      });

      // Perjungti šią
      section.classList.toggle('open');
    });
  });

  // ============================================
  // PRIEINAMUMAS – ŠRIFTO DYDIS
  // ============================================
  var fontIncrease = document.getElementById('fontIncrease');
  var fontDecrease = document.getElementById('fontDecrease');
  var fontSizes = ['', 'font-large', 'font-xlarge'];
  var currentFontSize = 0;

  // Atkurti iš localStorage
  var savedFont = localStorage.getItem('fontSize');
  if (savedFont) {
    currentFontSize = fontSizes.indexOf(savedFont);
    if (currentFontSize > 0) {
      document.documentElement.classList.add(savedFont);
    }
  }

  if (fontIncrease) {
    fontIncrease.addEventListener('click', function () {
      if (fontSizes[currentFontSize]) {
        document.documentElement.classList.remove(fontSizes[currentFontSize]);
      }
      currentFontSize = Math.min(currentFontSize + 1, fontSizes.length - 1);
      if (fontSizes[currentFontSize]) {
        document.documentElement.classList.add(fontSizes[currentFontSize]);
      }
      localStorage.setItem('fontSize', fontSizes[currentFontSize]);
    });
  }

  if (fontDecrease) {
    fontDecrease.addEventListener('click', function () {
      if (fontSizes[currentFontSize]) {
        document.documentElement.classList.remove(fontSizes[currentFontSize]);
      }
      currentFontSize = Math.max(currentFontSize - 1, 0);
      if (fontSizes[currentFontSize]) {
        document.documentElement.classList.add(fontSizes[currentFontSize]);
      }
      localStorage.setItem('fontSize', fontSizes[currentFontSize]);
    });
  }

  // ============================================
  // PRIEINAMUMAS – KONTRASTAS
  // ============================================
  var contrastBtn = document.getElementById('contrastToggle');

  // Atkurti iš localStorage
  if (localStorage.getItem('highContrast') === 'true') {
    document.documentElement.classList.add('high-contrast');
    if (contrastBtn) contrastBtn.classList.add('active');
  }

  if (contrastBtn) {
    contrastBtn.addEventListener('click', function () {
      document.documentElement.classList.toggle('high-contrast');
      contrastBtn.classList.toggle('active');
      var isOn = document.documentElement.classList.contains('high-contrast');
      localStorage.setItem('highContrast', isOn);
    });
  }

  // ============================================
  // MODALINIS LANGAS
  // ============================================
  var modalOverlay = document.getElementById('modalOverlay');
  var modalImage = document.getElementById('modalImage');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalClose = document.getElementById('modalClose');

  function openModal(card) {
    var img = card.querySelector('.thumb img');
    var title = card.querySelector('h4');
    var desc = card.getAttribute('data-description');

    if (modalImage && img) {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
    }
    if (modalTitle && title) modalTitle.textContent = title.textContent;
    if (modalDesc) modalDesc.textContent = desc || '';
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Kortelių paspaudimai
  document.querySelectorAll('.object-card').forEach(function (card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', function () {
      openModal(card);
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  // Uždaryti modal
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // ============================================
  // KONTAKTŲ FORMA (Formspree)
  // ============================================
  var form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      var consent = document.getElementById('formConsent');
      if (consent && !consent.checked) {
        e.preventDefault();
        alert('Prašome sutikti su privatumo politika.');
        return;
      }
    });
  }

  // ============================================
  // LAZY LOADING (native)
  // ============================================
  // Naudojame loading="lazy" HTML atribute – papildomas JS nereikalingas
  // Tai veikia visose moderniose naršyklėse

});
