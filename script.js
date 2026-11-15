// 21+ age gate
(function () {
  var gate = document.getElementById('age-gate');
  var denied = document.getElementById('age-denied');

  if (sessionStorage.getItem('wls_age_ok') === '1') {
    gate.classList.add('hidden');
    return;
  }

  document.getElementById('age-yes').addEventListener('click', function () {
    sessionStorage.setItem('wls_age_ok', '1');
    gate.classList.add('hidden');
  });

  document.getElementById('age-no').addEventListener('click', function () {
    denied.hidden = false;
  });
})();

// Simple lightbox for gallery images (works across all category grids)
(function () {
  document.addEventListener('click', function (e) {
    var fig = e.target.closest('.gallery-grid figure');
    if (!fig) return;
    var img = fig.querySelector('img');
    if (!img) return;
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    var big = document.createElement('img');
    big.src = img.src;
    big.alt = img.alt;
    lb.appendChild(big);
    lb.addEventListener('click', function () { lb.remove(); });
    document.body.appendChild(lb);
  });
})();

// Catalogue search filter
(function () {
  var input = document.getElementById('catalogue-search');
  if (!input) return;
  var cats = document.querySelectorAll('.catalogue-cat');
  var none = document.getElementById('catalogue-noresults');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var anyVisible = false;
    cats.forEach(function (cat) {
      var title = cat.querySelector('h3');
      var catMatch = q && title.textContent.toLowerCase().indexOf(q) > -1;
      var visible = 0;
      cat.querySelectorAll('.catalogue-list li').forEach(function (li) {
        var show = !q || catMatch || li.textContent.toLowerCase().indexOf(q) > -1;
        li.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      cat.style.display = visible ? '' : 'none';
      if (visible) anyVisible = true;
    });
    none.hidden = anyVisible;
  });
})();
