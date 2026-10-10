/* research.html: papers that have data-pdf="Papers/xxx.pdf" become clickable.
   On click a colour block grows out of the row, then paper.html opens with the PDF. */
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll('.paper[data-pdf]'));
  if (!rows.length) return;

  function text(el, sel) { var n = el.querySelector(sel); return n ? n.textContent.trim() : ''; }

  function buildUrl(row) { return 'paper.html?pdf=' + encodeURIComponent(row.getAttribute('data-pdf')); }

  function openPaper(row) {
    var url = buildUrl(row);
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { location.href = url; return; }
    var r = row.getBoundingClientRect();
    var c = document.createElement('div');
    c.className = 'pv-curtain';
    c.style.cssText = 'top:' + r.top + 'px;left:' + r.left + 'px;width:' + r.width + 'px;height:' + r.height + 'px;opacity:.9';
    document.body.appendChild(c);
    void c.offsetWidth;
    c.style.cssText += ';top:0;left:0;width:100vw;height:100vh;opacity:1';
    setTimeout(function () { location.href = url; }, 520);
  }

  rows.forEach(function (row) {
    row.classList.add('has-pdf');
    row.tabIndex = 0;
    row.setAttribute('role', 'link');
    row.setAttribute('aria-label', 'Open PDF: ' + text(row, 'h3'));
    var meta = row.querySelector('.paper-meta');
    if (meta) {
      var b = document.createElement('span');
      b.className = 'pdf-badge mono';
      b.textContent = '📄 Read PDF';
      meta.insertBefore(b, meta.firstChild);
    }
    row.addEventListener('click', function (e) { if (!e.target.closest('a')) openPaper(row); });
    row.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target === row) openPaper(row); });
  });

  /* coming back with the browser Back button: remove any leftover colour block */
  addEventListener('pageshow', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.pv-curtain'), function (c) { c.remove(); });
  });
})();
