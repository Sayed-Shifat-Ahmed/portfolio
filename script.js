(function () {
  document.documentElement.classList.add('js');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Scroll-reveal ---------- */
  function initReveal() {
    var items = $$('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in-view'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Mobile menu + "More" dropdown ---------- */
  var navList = $('#navList'), menuToggle = $('#menuToggle');
  var menuClose = $('#menuClose'), navBackdrop = $('#navBackdrop');
  function setMenu(open) {
    if (!navList) return;
    navList.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (menuToggle) menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (menuToggle) menuToggle.addEventListener('click', function () { setMenu(!navList.classList.contains('open')); });
  if (menuClose) menuClose.addEventListener('click', function () { setMenu(false); });
  if (navBackdrop) navBackdrop.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (innerWidth >= 1200) setMenu(false); });
  document.addEventListener('touchstart', function () {}, { passive: true }); /* enables :active on iOS */
  if (navList) navList.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a.nav-tab') : null;
    if (!a || innerWidth >= 1200 || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();                       /* show the colour for a moment, then go */
    a.classList.add('tapped');
    setTimeout(function () { location.href = a.href; }, 220);
  });
  var moreBtn = $('#moreBtn'), moreMenu = $('#moreMenu');
  if (moreBtn) {
    moreBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = moreMenu.classList.toggle('open');
      moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function () { moreMenu.classList.remove('open'); moreBtn.setAttribute('aria-expanded', 'false'); });
  }

  /* ---------- Dark mode ---------- */
  var root = document.documentElement;
  var themeBtn = $('#themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var dark = root.dataset.theme !== 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  /* ---------- Progress bar + back to top ---------- */
  var bar = $('#progress'), toTop = $('#toTop');
  function onScroll() {
    var max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('show', scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Generic filter helper ---------- */
  function setupFilter(btnSel, itemSel, attr, multi) {
    var btns = $$(btnSel), items = $$(itemSel);
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tag = btn.dataset.tag;
        btns.forEach(function (b) { b.classList.toggle('active', b === btn); });
        $$(itemSel).forEach(function (it) {
          var v = it.getAttribute(attr) || '';
          var show = tag === 'All' || (multi ? v.split('|').indexOf(tag) !== -1 : v === tag);
          it.classList.toggle('hidden', !show);
          if (show) it.classList.add('in-view');
        });
      });
    });
  }
  setupFilter('#filters .filter', '.paper', 'data-tags', true);          // publications
  setupFilter('#projectFilters .filter', '.project', 'data-cat', false); // projects
  setupFilter('#galleryFilters .filter', '.g-item', 'data-cat', false);  // gallery


  /* ---------- Publications: auto-number + counts per group ---------- */
  var groups = $$('.paper-group');
  function updatePubs() {
    groups.forEach(function (g) {
      var papers = $$('.paper', g);
      var shown = papers.filter(function (p) { return !p.classList.contains('hidden'); }).length;
      var total = papers.length;
      $('.group-count', g).textContent = (shown === total) ? '(' + total + ')' : '(' + shown + ' of ' + total + ')';
      g.classList.toggle('empty', shown === 0);
    });
  }
  groups.forEach(function (g) {
    $$('.paper', g).forEach(function (p, i) {          // number by position, not affected by filters
      var yr = p.firstElementChild;
      if (yr && !$('.paper-no', yr)) {
        var n = document.createElement('span');
        n.className = 'paper-no';
        n.textContent = (i + 1) + '.';
        yr.insertBefore(n, yr.firstChild);
      }
    });
  });
  if (groups.length) {
    $$('#filters .filter').forEach(function (b) { b.addEventListener('click', updatePubs); });
    updatePubs();
  }

  /* ---------- Contact form (Web3Forms, with Gmail / mail-app fallback) ---------- */
  var form = $('#contactForm');
  if (form) {
    var TO = 'shikor99@gmail.com';
    var KEY = (form.dataset.key || '').trim();           // Web3Forms access key (see contact.html)
    var statusEl = $('#formStatus'), fbEl = $('#formFallback'), sendBtn = $('button[type=submit]', form);
    var say = function (msg, kind) { statusEl.textContent = msg; statusEl.className = 'form-status small ' + (kind || ''); };
    var showFallback = function (f) {
      var subj = 'Message from ' + f.name.value;
      var body = f.message.value + '\n\n— ' + f.name.value + ' (' + f.email.value + ')';
      var q = 'subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
      fbEl.innerHTML = '<span class="muted-text small">Or send it another way: </span>' +
        '<a class="underlined" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + TO + '&su=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body) + '">Open in Gmail ↗</a> · ' +
        '<a class="underlined" href="mailto:' + TO + '?' + q + '">Open email app</a> · ' +
        '<a class="underlined" href="#" id="copyMail">Copy address</a>';
      fbEl.hidden = false;
      $('#copyMail').addEventListener('click', function (e) {
        e.preventDefault();
        var done = function () { say('Email address copied: ' + TO, 'ok'); };
        if (navigator.clipboard) navigator.clipboard.writeText(TO).then(done, function () { say('Email: ' + TO); });
        else say('Email: ' + TO);
      });
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target;
      if (f.botcheck && f.botcheck.checked) return;      // spam honeypot
      fbEl.hidden = true;
      if (!KEY) {                                         // no key yet: open Gmail compose directly
        showFallback(f);
        say(f.attachment && f.attachment.files[0] ? 'Opening Gmail… please attach your file there yourself.' : 'Opening Gmail… if nothing opens, use one of the links below.', '');
        var a = fbEl.querySelector('a[href^="https://mail.google.com"]');
        if (a) window.open(a.href, '_blank', 'noopener');
        return;
      }
      var file = f.attachment && f.attachment.files[0];
      if (file && file.size > 5 * 1024 * 1024) { say('That file is larger than 5 MB. Please choose a smaller file.', 'err'); return; }
      sendBtn.disabled = true; var label = sendBtn.textContent; sendBtn.textContent = 'SENDING…';
      say('Sending your message…', '');
      var fd = new FormData();
      fd.append('access_key', KEY);
      fd.append('subject', 'New message from ' + f.name.value + ' (website)');
      fd.append('from_name', 'SSA Website');
      fd.append('name', f.name.value);
      fd.append('email', f.email.value);
      fd.append('message', f.message.value);
      if (file) fd.append('attachment', file);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },      /* no Content-Type: the browser sets the multipart boundary */
        body: fd
      }).then(function (r) { return r.json(); }).then(function (d) {
        if (d && d.success) { say('✓ Message sent. Thank you — I will get back to you soon.', 'ok'); f.reset(); }
        else throw new Error((d && d.message) || 'failed');
      }).catch(function () {
        say(file ? 'Could not send with the attachment. Remove the file and try again, or use an option below.' : 'Could not send automatically. Please use one of the options below.', 'err');
        showFallback(f);
      }).then(function () { sendBtn.disabled = false; sendBtn.textContent = label; });
    });
  }

  /* ---------- CV print ---------- */
  var printBtn = $('#printCv');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ---------- Blog list ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(d) { return new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); }
  var grid = $('#blogGrid');
  if (grid && window.POSTS) {
    grid.innerHTML = window.POSTS.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).map(function (p, i) {
      return '<a class="card post-card card-lift reveal scale-in d' + ((i % 3 + 1) * 100) + '" data-cat="' + esc(p.category) + '" href="post.html?p=' + encodeURIComponent(p.slug) + '">' +
        '<div class="post-meta mono small"><span class="accent">' + esc(p.category.toUpperCase()) + '</span><span class="muted-text">' + fmt(p.date) + ' · ' + esc(p.read) + '</span></div>' +
        '<h3 class="serif">' + esc(p.title) + '</h3><p class="muted-text">' + esc(p.excerpt) + '</p>' +
        '<span class="mono small accent">READ →</span></a>';
    }).join('');
    setupFilter('#blogFilters .filter', '.post-card', 'data-cat', false);
  }

  /* ---------- Single post ---------- */
  var postBody = $('#postBody');
  if (postBody && window.POSTS) {
    var slug = new URLSearchParams(location.search).get('p');
    var idx = window.POSTS.findIndex(function (p) { return p.slug === slug; });
    var post = window.POSTS[idx];
    if (!post) {
      postBody.innerHTML = '<h1 class="serif">Post not found</h1><p>Return to the <a class="underlined" href="blog.html">blog</a>.</p>';
    } else {
      document.title = post.title + ' — Sayed Shifat Ahmed';
      var next = window.POSTS[(idx + 1) % window.POSTS.length];
      postBody.innerHTML =
        '<p class="mono small post-meta-line"><span class="accent">' + esc(post.category.toUpperCase()) + '</span> · ' + fmt(post.date) + ' · ' + esc(post.read) + '</p>' +
        '<h1 class="serif post-title">' + esc(post.title) + '</h1>' +
        '<div class="post-text">' + post.body.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
        (next && next !== post ? '<div class="post-next divider"><p class="mono small muted-text">NEXT POST</p><a class="serif" href="post.html?p=' + encodeURIComponent(next.slug) + '">' + esc(next.title) + ' →</a></div>' : '');
    }
  }

  /* ---------- Gallery lightbox ---------- */
  var lb = $('#lightbox');
  if (lb) {
    var cur = 0;
    var visibleItems = function () { return $$('.g-item').filter(function (f) { return !f.classList.contains('hidden'); }); };
    var show = function (i) {
      var list = visibleItems(); if (!list.length) return;
      cur = (i + list.length) % list.length;
      var img = $('img', list[cur]);
      $('#lbImg').src = img.currentSrc || img.src;
      $('#lbImg').alt = img.alt;
      $('#lbCap').textContent = $('figcaption', list[cur]).textContent;
      lb.hidden = false; document.body.style.overflow = 'hidden';
    };
    var close = function () { lb.hidden = true; document.body.style.overflow = ''; };
    $$('.g-item').forEach(function (f) {
      f.tabIndex = 0;
      f.addEventListener('click', function () { show(visibleItems().indexOf(f)); });
      f.addEventListener('keydown', function (e) { if (e.key === 'Enter') show(visibleItems().indexOf(f)); });
      var img = $('img', f);
      img.addEventListener('error', function () { f.classList.add('broken'); });
    });
    $('#lbClose').addEventListener('click', close);
    $('#lbPrev').addEventListener('click', function () { show(cur - 1); });
    $('#lbNext').addEventListener('click', function () { show(cur + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
    });
  }

  initReveal();
  onScroll();
})();