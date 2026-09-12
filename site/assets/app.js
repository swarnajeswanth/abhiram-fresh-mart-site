// Phone tilt reacts to pointer position — an interactive moment, not a scroll reveal.
(function () {
  var tilt = document.querySelector('.phone-mock .tilt');
  var hero = document.querySelector('.hero');
  if (tilt && hero && window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform =
        'rotateY(' + (-8 + px * 14) + 'deg) rotateX(' + (4 - py * 10) + 'deg)';
    });
    hero.addEventListener('mouseleave', function () {
      tilt.style.transform = 'rotateY(-8deg) rotateX(4deg)';
    });
  }

  // One-time count-up for the stats band, run on load (part of the same
  // orchestrated intro as the hero, not a per-scroll effect).
  var stats = document.querySelectorAll('.stat b[data-count]');
  stats.forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
    var start = null;
    var duration = 1400;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
})();
