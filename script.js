(function () {
  'use strict';

  var menuButton = document.querySelector('.menu-button');
  var globalMenu = document.getElementById('global-menu');
  var demoForm = document.querySelector('.demo-form');
  var demoButton = document.querySelector('.demo-button');
  var formResult = document.querySelector('.form-result');

  function closeMenu() {
    if (!globalMenu || !menuButton) return;
    globalMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  if (menuButton && globalMenu) {
    menuButton.addEventListener('click', function () {
      var shouldOpen = !globalMenu.classList.contains('is-open');
      globalMenu.classList.toggle('is-open', shouldOpen);
      menuButton.setAttribute('aria-expanded', String(shouldOpen));
    });

    globalMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && globalMenu.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  if (demoForm) {
    demoForm.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

  if (demoButton && formResult) {
    demoButton.addEventListener('click', function () {
      formResult.textContent = 'これは入力デモです。入力内容は保存・送信されません。';
    });
  }
})();
