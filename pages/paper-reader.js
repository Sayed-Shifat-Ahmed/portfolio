/* paper.html: shows one paper. Details come from the link (?pdf=...&t=...), so no extra data file is needed.
   The PDF is drawn page by page into the normal page, so the page scroll moves through the whole document. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var root = document.documentElement;

  var hdr = document.querySelector('.site-header');
  if (hdr) root.style.setProperty('--hdr', hdr.offsetHeight + 'px');

  var q = new URLSearchParams(location.search);
  var pdf = q.get('pdf') || '';
  var view = $('#rdViewer');

  /* only plain relative .pdf paths are accepted (no javascript:, http:, // etc.) */
  var safe = /^(?![a-z][a-z0-9+.\-]*:|\/\/)[^?#\\]+\.pdf$/i.test(pdf);
  var paper = (window.PAPERS || []).filter(function (x) { return x.pdf === pdf; })[0] || {};
  var labels = {}; (window.FILTERS || []).forEach(function (f) { labels[f.key] = f.label; });
  var title = paper.title || 'Paper';

  if (!safe) {
    $('#rdTitle').textContent = 'Paper not found';
    $('#rdStatus').textContent = '';
    view.classList.add('failed');
    $('#rdFbMsg').textContent = 'No PDF is linked to this page.';
    $('#rdFbLink').textContent = '← Back to all papers';
    $('#rdFbLink').removeAttribute('target');
    $('#rdFbLink').href = 'research.html';
    return;
  }

  /* ----- details (always inserted as text, never as HTML) ----- */
  document.title = title + ' — Sayed Shifat Ahmed';
  $('#rdTitle').textContent = title;
  $('#rdAuthors').textContent = paper.authors || '';
  $('#rdVenue').textContent = (paper.venue || '') + (paper.year && (paper.venue || '').indexOf(paper.year) === -1 ? ' (' + paper.year + ')' : '') + (paper.status ? ' — ' + paper.status : '');
  var tagBox = $('#rdTags');
  (paper.tags || []).forEach(function (k) {
    var s = document.createElement('span'); s.className = 'tag mono'; s.textContent = labels[k] || k; tagBox.appendChild(s);
  });

  var pdfUrl = encodeURI(pdf);
  var acts = $('#rdActions');
  function btn(label, href, cls, extra) {
    var a = document.createElement('a');
    a.className = 'pv-btn' + (cls ? ' ' + cls : '');
    a.textContent = label; a.href = href;
    if (extra === 'new') { a.target = '_blank'; a.rel = 'noreferrer'; }
    if (extra === 'dl') a.setAttribute('download', '');
    acts.appendChild(a);
  }
  btn('Open in new tab ↗', pdfUrl, '', 'new');
  btn('Download PDF', pdfUrl, 'primary', 'dl');
  var doi = paper.doi || '';
  if (/^https:\/\/doi\.org\//.test(doi)) btn('DOI →', doi, '', 'new');
  $('#rdFbLink').href = pdfUrl;

  /* ----- fallback: the browser's own PDF viewer ----- */
  function useIframe() {
    $('#rdStatus').textContent = '';
    $('#rdBar').hidden = true;
    $('#rdPages').innerHTML = '';
    view.classList.add('iframe-mode');
    var f = document.createElement('iframe');
    f.title = title;
    f.src = pdfUrl + '#view=FitH';
    view.insertBefore(f, view.firstChild);
    var ok = false;
    f.addEventListener('load', function () { ok = true; });
    setTimeout(function () { if (!ok) { view.classList.remove('iframe-mode'); view.classList.add('failed'); } }, 5000);
  }

  /* ----- PDF.js: every page drawn in the normal page flow ----- */
  var CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error('load failed')); };
      document.head.appendChild(s);
    });
  }

  if (location.protocol === 'file:') { useIframe(); return; }     // PDF.js needs a web server; GitHub/localhost are fine
  loadScript(CDN + 'pdf.min.js').then(function () {
    pdfjsLib.GlobalWorkerOptions.workerSrc = CDN + 'pdf.worker.min.js';
    return pdfjsLib.getDocument({ url: pdfUrl }).promise;
  }).then(build).catch(useIframe);

  function build(doc) {
    var box = $('#rdPages'), info = $('#rdPg'), zVal = $('#rdZ');
    var slots = [], sizes = [], zoom = 1, MAXW = 900;
    $('#rdStatus').textContent = '';
    $('#rdBar').hidden = false;

    function baseWidth() { return Math.min(MAXW, box.clientWidth - 24); }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) renderSlot(e.target); });
    }, { rootMargin: '900px 0px' });

    function layout() {
      var w = baseWidth() * zoom;
      slots.forEach(function (s, i) {
        s.style.width = w + 'px';
        s.style.height = (w * sizes[i].h / sizes[i].w) + 'px';
        var c = s.querySelector('canvas'); if (c) c.remove();
        s._done = false; s._token = (s._token || 0) + 1;
        io.unobserve(s); io.observe(s);
      });
      zVal.textContent = Math.round(zoom * 100) + '%';
    }

    function renderSlot(s) {
      if (s._done) return;
      s._done = true;
      var token = s._token, i = s._idx;
      doc.getPage(i + 1).then(function (page) {
        var vp = page.getViewport({ scale: parseFloat(s.style.width) / sizes[i].w });
        var ratio = window.devicePixelRatio || 1;
        var cv = document.createElement('canvas');
        cv.width = Math.floor(vp.width * ratio); cv.height = Math.floor(vp.height * ratio);
        return page.render({
          canvasContext: cv.getContext('2d'), viewport: vp,
          transform: ratio !== 1 ? [ratio, 0, 0, ratio, 0, 0] : null
        }).promise.then(function () { if (token === s._token) s.appendChild(cv); });
      }).catch(function () { s._done = false; });
    }

    /* measure all pages first so the scroll height is correct from the start */
    var jobs = [];
    for (var n = 1; n <= doc.numPages; n++) {
      jobs.push(doc.getPage(n).then(function (pg) { var v = pg.getViewport({ scale: 1 }); return { w: v.width, h: v.height }; }));
    }
    Promise.all(jobs).then(function (sz) {
      sizes = sz;
      sz.forEach(function (_, i) {
        var s = document.createElement('div');
        s.className = 'rd-slot'; s._idx = i;
        box.appendChild(s); slots.push(s);
      });
      layout(); updateInfo();
    });

    function updateInfo() {
      var mid = innerHeight / 2, cur = 1;
      for (var i = 0; i < slots.length; i++) if (slots[i].getBoundingClientRect().top <= mid) cur = i + 1;
      info.textContent = 'Page ' + cur + ' / ' + doc.numPages;
    }
    var tick = false;
    addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () { updateInfo(); tick = false; });
    }, { passive: true });

    function setZoom(z) { zoom = Math.max(.5, Math.min(3, z)); layout(); }
    $('#rdZIn').addEventListener('click', function () { setZoom(zoom + .15); });
    $('#rdZOut').addEventListener('click', function () { setZoom(zoom - .15); });
    $('#rdZFit').addEventListener('click', function () { setZoom(1); });
    var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 200); });
  }
})();
