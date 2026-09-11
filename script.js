(function () {
  'use strict';

  var menuButton = document.querySelector('.menu-button');
  var globalMenu = document.getElementById('global-menu');
  var demoForm = document.querySelector('.demo-form');
  var demoButton = document.querySelector('.demo-button');
  var formResult = document.querySelector('.form-result');

  function closeMenu() {
    globalMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  menuButton.addEventListener('click', function () {
    var shouldOpen = !globalMenu.classList.contains('is-open');
    globalMenu.classList.toggle('is-open', shouldOpen);
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
  });

  globalMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  demoForm.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  demoButton.addEventListener('click', function () {
    formResult.textContent = 'これは入力デモのため、内容は送信されません。';
  });
})();
