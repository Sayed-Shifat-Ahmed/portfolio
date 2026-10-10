/* Builds the Attended page from attended.js */
(function () {
  var EVENTS = (window.EVENTS || []).slice(), TYPES = window.EVENT_TYPES || {}, COORD = window.COORDINATION;
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function typeOf(e) { return TYPES[e.type] || TYPES.other || { label: e.type, color: '#6B5B4E' }; }

  /* newest first; events in the same year keep the order written in attended.js */
  EVENTS = EVENTS.map(function (e, i) { e._i = i; return e; })
    .sort(function (a, b) { return (b.year - a.year) || (a._i - b._i); });
  var total = EVENTS.length;
  EVENTS.forEach(function (e, i) { e._no = total - i; });       // oldest = 1

  /* ---------- stats ---------- */
  var papers = EVENTS.reduce(function (n, e) { return n + (e.papers ? e.papers.length : 0); }, 0);
  var cities = {}, places = [];
  EVENTS.forEach(function (e) {
    var p = e.city || ''; if (!p) return;
    if (!cities[p]) { cities[p] = 0; places.push(p); }
    cities[p]++;
  });
  var countBy = function (t) { return EVENTS.filter(function (e) { return e.type === t; }).length; };
  var tiles = [
    [countBy('conference'), 'Conferences'],
    [papers, 'Papers shared'],
    [countBy('training'), 'Training programmes'],
    [countBy('seminar') + countBy('workshop'), 'Seminars & workshops'],
    [places.length, 'Places']
  ].filter(function (t) { return t[0] > 0; });
  $('attStats').innerHTML = tiles.map(function (t) {
    return '<div class="att-stat"><p class="serif att-num" data-to="' + t[0] + '">' + t[0] + '</p><p class="mono att-lab">' + esc(t[1]) + '</p></div>';
  }).join('');

  /* ---------- filters ---------- */
  var present = [];
  EVENTS.forEach(function (e) { if (present.indexOf(e.type) === -1) present.push(e.type); });
  $('attFilters').innerHTML = '<button class="att-filter mono active" data-type="All">All <span>' + total + '</span></button>' +
    present.map(function (t) {
      return '<button class="att-filter mono" data-type="' + esc(t) + '" style="--tc:' + (TYPES[t] || {}).color + '">' + esc((TYPES[t] || { label: t }).label) + ' <span>' + countBy(t) + '</span></button>';
    }).join('');

  /* ---------- timeline of tickets ---------- */
  function ticket(e) {
    var T = typeOf(e);
    var where = [];
    if (e.venue) where.push(e.venueFull ? '<abbr title="' + esc(e.venueFull) + '">' + esc(e.venue) + '</abbr>' : esc(e.venue));
    var place = [e.city, e.country].filter(function (v, i, a) { return v && a.indexOf(v) === i; }).join(', ');
    if (place) where.push(esc(place));
    return '<article class="att-ticket" data-type="' + esc(e.type) + '" style="--tc:' + T.color + '">' +
      '<div class="att-stub"><span class="att-no mono">№ ' + pad(e._no) + '</span><span class="att-year serif">' + esc(e.year) + '</span><span class="att-type mono">' + esc(T.label).toUpperCase() + '</span></div>' +
      '<div class="att-main">' +
        '<h3 class="serif">' + esc(e.name) + '</h3>' +
        (e.full ? '<p class="att-full">' + esc(e.full) + '</p>' : '') +
        (where.length ? '<p class="att-where mono"><span class="att-pin" aria-hidden="true"></span>' + where.join('<span class="att-sep">·</span>') + '</p>' : '') +
        (e.papers && e.papers.length ?
          '<div class="att-papers"><p class="mono att-papers-h">' + (e.papers.length === 1 ? 'PAPER' : e.papers.length + ' PAPERS') + '</p><ul>' +
          e.papers.map(function (p) { return '<li>“' + esc(p) + '”</li>'; }).join('') + '</ul></div>' : '') +
      '</div></article>';
  }
  function renderList() {
    var html = '', last = null;
    EVENTS.forEach(function (e) {
      if (e.year !== last) {
        if (last !== null) html += '</div></section>';
        var n = EVENTS.filter(function (x) { return x.year === e.year; }).length;
        html += '<section class="att-year-group" data-year="' + e.year + '"><div class="att-year-head"><span class="att-bigyear serif" aria-hidden="true">' + esc(e.year) + '</span>' +
                '<span class="att-yr-line"></span><span class="mono att-yr-count">' + n + (n === 1 ? ' event' : ' events') + '</span></div><div class="att-year-body">';
        last = e.year;
      }
      html += ticket(e);
    });
    if (last !== null) html += '</div></section>';
    $('attList').innerHTML = html;
  }
  renderList();

  /* ---------- places ---------- */
  if (places.length) {
    $('attPlaces').hidden = false;
    $('attPlaceList').innerHTML = places.map(function (c) {
      return '<span class="att-place"><span class="att-pin" aria-hidden="true"></span>' + esc(c) + (cities[c] > 1 ? ' <b class="mono">×' + cities[c] + '</b>' : '') + '</span>';
    }).join('');
  }

  /* ---------- program coordination ---------- */
  if (COORD) {
    var c = $('attCoord'); c.hidden = false;
    c.innerHTML = '<p class="eyebrow mono">PROGRAM COORDINATION</p>' +
      '<div class="att-coord-card"><div class="att-coord-main"><h3 class="serif">' + esc(COORD.project) + '</h3>' +
      '<p class="mono att-coord-meta">' + [COORD.role ? 'Role: ' + COORD.role : '', COORD.session ? 'Session: ' + COORD.session : '', COORD.org].filter(Boolean).map(esc).join(' · ') + '</p></div>' +
      '<ul class="att-team">' + (COORD.team || []).map(function (m) {
        var ini = m.name.split(/\s+/).filter(function (w) { return /^[A-Za-z]/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
        return '<li><span class="att-avatar serif" aria-hidden="true">' + esc(ini) + '</span><span><strong>' + esc(m.name) + '</strong><small class="mono">' + esc(m.role) + '</small></span></li>';
      }).join('') + '</ul></div>';
  }

  /* ---------- filter behaviour ---------- */
  var fbox = $('attFilters');
  fbox.addEventListener('click', function (ev) {
    var b = ev.target.closest('.att-filter'); if (!b) return;
    var t = b.getAttribute('data-type');
    Array.prototype.forEach.call(fbox.children, function (x) { x.classList.toggle('active', x === b); });
    Array.prototype.forEach.call(document.querySelectorAll('.att-ticket'), function (el) {
      var show = t === 'All' || el.getAttribute('data-type') === t;
      el.classList.toggle('att-hide', !show);
      if (show) { el.classList.remove('att-pop'); void el.offsetWidth; el.classList.add('att-pop'); }
    });
    Array.prototype.forEach.call(document.querySelectorAll('.att-year-group'), function (g) {
      g.classList.toggle('att-hide', !g.querySelector('.att-ticket:not(.att-hide)'));
    });
  });

  /* ---------- entrance animation + count-up ---------- */
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = Array.prototype.slice.call(document.querySelectorAll('.att-ticket, .att-year-head, .att-stat, .att-places, .att-coord'));
  if (!reduce && 'IntersectionObserver' in window) {
    els.forEach(function (el) { el.classList.add('att-wait'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; el.classList.remove('att-wait'); el.classList.add('att-in'); io.unobserve(el);
        var num = el.querySelector && el.querySelector('.att-num');
        if (num) {
          var to = +num.getAttribute('data-to'), t0 = null;
          (function step(ts) { if (t0 === null) t0 = ts; var p = Math.min(1, (ts - t0) / 900); num.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); })(performance.now());
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }
})();
