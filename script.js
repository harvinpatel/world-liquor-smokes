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

// Simple lightbox for gallery images
(function () {
  var grid = document.getElementById('gallery-grid');
  grid.addEventListener('click', function (e) {
    var fig = e.target.closest('figure');
    if (!fig) return;
    var img = fig.querySelector('img');
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
