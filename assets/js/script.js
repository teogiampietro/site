(function () {
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();
