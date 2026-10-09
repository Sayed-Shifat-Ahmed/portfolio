/* Builds the paper list on research.html from paper.js.
   (Must load BEFORE ../script.js so the filters, numbering and counts can find the rows.) */
(function () {
  var PAPERS = window.PAPERS || [], FILTERS = window.FILTERS || [];
  var box = document.getElementById('paperList'), fbox = document.getElementById('filters');
  if (!box) return;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var label = {}; FILTERS.forEach(function (f) { label[f.key] = f.label; });

  /* filter buttons */
  if (fbox) {
    fbox.innerHTML = '<button class="filter mono active" data-tag="All">All</button>' + FILTERS.map(function (f) {
      return '<button class="filter mono" data-tag="' + esc(f.key) + '">' + esc(f.label) + '</button>';
    }).join('');
  }

  function row(p) {
    return '<article class="row paper reveal fade-up"' + (p.pdf ? ' data-pdf="' + esc(p.pdf) + '"' : '') + ' data-tags="' + esc((p.tags || []).join('|')) + '">' +
      '<span class="mono muted-text small">' + esc(p.year) + '</span>' +
      '<div><h3 class="serif">' + esc(p.title) + '</h3>' +
      '<p class="authors small-md">' + esc(p.authors) + '</p>' +
      '<p class="journal">' + esc(p.venue) + '</p>' +
      '<div class="tags">' + (p.tags || []).map(function (k) { return '<span class="tag mono">' + esc(label[k] || k) + '</span>'; }).join('') + '</div></div>' +
      '<div class="paper-meta">' +
        (p.status ? '<span class="mono small accent">' + esc(p.status) + '</span>' : '') +
        (p.doi ? '<a class="mono small dotted" href="' + esc(p.doi) + '" target="_blank" rel="noreferrer">DOI →</a>' : '') +
      '</div></article>';
  }

  var html = '';
  [['journal', 'Journal Articles'], ['conference', 'Conference Papers']].forEach(function (g) {
    var list = PAPERS.filter(function (p) { return p.type === g[0]; });
    if (!list.length) return;
    html += '<section class="paper-group" data-group="' + g[1] + '"><h3 class="group-title serif">' + g[1] +
      ' <span class="group-count mono"></span></h3><div class="list">' + list.map(row).join('') + '</div></section>';
  });
  box.innerHTML = html;
})();
