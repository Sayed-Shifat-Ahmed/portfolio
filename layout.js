/* =====================================================================
   SITE HEADER + FOOTER  —  edit them HERE ONLY. Every page loads this file.

   • Add / rename / reorder a menu item:  change the NAV or MORE list below.
   • Change address, email, phone or profile links:  change FOOTER below.
   • Pages need only:   <div id="site-header"></div>   and   <div id="site-footer"></div>
     (leave out #site-footer on a page that should have no footer).
   ===================================================================== */
(function () {
  /* where am I?  "layout.js" is loaded as "layout.js" (index.html) or "../layout.js" (pages/) */
  var me = document.currentScript, src = me ? me.getAttribute('src') : 'layout.js';
  var R = src.replace(/layout\.js.*$/, '');      // path back to the site root: ""  or  "../"
  var P = R ? '' : 'pages/';                     // path from this page to the pages folder

  /* ---- menu: [label, file, colour, hover colour] ---- */
  var NAV = [
    ['Home',           'index.html',        '#4F6DF5', '#3D5CE0'],
    ['About',          'about.html',        '#2A9D6E', '#228A5F'],
    ['Scholarships',   'scholarships.html', '#9B4DCA', '#8A3DB8'],
    ['Research',       'research.html',     '#D4582A', '#BC4A22'],
    ['Projects',       'projects.html',     '#0E9AA7', '#0B808B'],
    ['Teaching Areas', 'teaching.html',     '#2A9D6E', '#228A5F'],
    
  ];
  var MORE = [   /* the "More" drop-down */
    ['Attended',         'attended.html',    '#C2410C', '#9A3412'],
    ["Student's Corner", 'students.html',    '#C2410C', '#9A3412'],
    ['Life',             'life.html',        '#D4A017', '#B88A10'],
    ['References',       'references.html',  '#E0457B', '#C73869'],
    ['Contact',          'contact.html',     '#E0457B', '#C73869']
  ];
  /* pages that belong under another menu item */
  var ALIAS = { 'post.html': 'blog.html', 'paper.html': 'research.html', 'book-demo.html': 'students.html' };

  var current = location.pathname.split('/').pop() || 'index.html';
  current = ALIAS[current] || current;
  var activeDone = false;

  function link(it) {
    var href = (it[1] === 'index.html' ? R : P) + it[1];
    var on = !activeDone && it[1] === current;
    if (on) activeDone = true;
    return '<a class="nav-tab' + (on ? ' active' : '') + '" href="' + href + '" style="--c:' + it[2] + ';--h:' + it[3] + '">' + it[0].replace(/&/g, '&amp;') + '</a>';
  }

  var HEADER =
    '<header class="site-header">' +
      '<nav class="container nav">' +
        '<div class="nav-backdrop" id="navBackdrop"></div>' +
        '<a class="brand serif" href="' + R + 'index.html">Sayed Shifat Ahmed</a>' +
        '<ul class="nav-list" id="navList">' +
          '<li class="drawer-close-li"><button class="drawer-close" id="menuClose" aria-label="Close menu"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 4l16 16M20 4L4 20"/></svg></button></li>' +
          NAV.map(function (it) { return '<li>' + link(it) + '</li>'; }).join('') +
          '<li class="has-menu">' +
            '<button class="nav-tab" id="moreBtn" aria-expanded="false" style="--c:#6B5B4E;--h:#54463B">More ▾</button>' +
            '<ul class="dropdown" id="moreMenu">' + MORE.map(function (it) { return '<li>' + link(it) + '</li>'; }).join('') + '</ul>' +
          '</li>' +
        '</ul>' +
        '<button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" title="Toggle dark mode">◐</button>' +
        '<button class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</nav>' +
    '</header>';

  var FOOTER = `
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-identity">
      <p class="serif footer-name">Sayed Shifat Ahmed</p>
      <p class="footer-text">
        Lecturer, Department of EEE<br />
        RTM Al-Kabir Technical University (RTM-AKTU)
      </p>
    </div>

    <div class="footer-contact">
      <p class="mono footer-head">CONTACT</p>
      <ul>
        <li>📍 RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh</li>
        <li>✉ <a href="mailto:shifat@rtm-aktu.ac.bd">shifat@rtm-aktu.ac.bd</a>,
          <a href="mailto:shikor99@gmail.com">shikor99@gmail.com</a></li>
        <li>☎ <a href="tel:+8801790443944">+8801790443944</a></li>
      </ul>
    </div>

    <div class="footer-profiles">
      <p class="mono footer-head">PROFILES</p>
      <ul>
        <li><a href="https://scholar.google.com/citations?user=IfLCVxwAAAAJ&hl" aria-label="Google Scholar" title="Google Scholar">🎓</a></li>
        <li><a href="https://www.researchgate.net/profile/Sayed-Shifat-Ahmed" aria-label="ResearchGate" title="ResearchGate">RG</a></li>
        <li><a href="https://orcid.org/0009-0007-9050-6951" aria-label="ORCID" title="ORCID">iD</a></li>
        <li><a href="https://www.linkedin.com/in/sayed-shifat-ahmed-02025a1a7" aria-label="LinkedIn" title="LinkedIn">in</a></li>
		<li><a href="https://www.facebook.com/esoteric.root" aria-label="Facebook" title="Facebook">ⓕ</a></li>
		<li><a href="http://wa.me/+8801790443944" aria-label="Whatsapp" title="Whatsapp">✆</a></li> 
	  </ul>
    </div>
  </div>

  <div class="container footer-copy">
    <p class="mono">© 2026 SSA&nbsp; | &nbsp;Sylhet, Bangladesh</p>
  </div>
</footer>
`;

  /* ---- put them on the page (the placeholder is replaced, so layout/sticky behave as before) ---- */
  var h = document.getElementById('site-header'), f = document.getElementById('site-footer');
  if (h) h.outerHTML = HEADER;
  if (f) f.outerHTML = FOOTER;

  if (!document.getElementById('progress')) {
    var pr = document.createElement('div'); pr.className = 'progress'; pr.id = 'progress';
    document.body.insertBefore(pr, document.body.firstChild);
  }
  if (!document.getElementById('toTop')) {
    var tt = document.createElement('button');
    tt.className = 'to-top'; tt.id = 'toTop'; tt.setAttribute('aria-label', 'Back to top'); tt.textContent = '↑';
    document.body.appendChild(tt);
  }
})();
