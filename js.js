// Sahifa yuklanganda kartalar silliq paydo bo‘ladi, tezlik chiziqlari esa to‘lib boradi
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Tezlik chiziqlari: 0 dan kerakli kenglikkacha
  var bars = document.querySelectorAll('.bar i');
  bars.forEach(function (bar) {
    bar.dataset.w = bar.style.width;
    bar.style.width = '0';
  });

  function fill(bar) {
    bar.style.width = bar.dataset.w;
  }

  // Elementlar ekranga kirganda ko‘rsatish
  var items = document.querySelectorAll('.card, .price');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          e.target.querySelectorAll('.bar i').forEach(fill);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('show'); });
    bars.forEach(fill);
  }
});