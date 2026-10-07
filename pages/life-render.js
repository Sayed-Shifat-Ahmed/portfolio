/* =====================================================================
   LIFE PAGE CONTENT  —  edit the LIFE object below, save, refresh life.html.
   You never need to touch life.html for normal updates.

   • Add a card:     copy one { ... } block inside "cards" and change the text.
   • Remove a card:  delete its { ... } block.
   • Reorder:        move blocks up or down.
   • Images:         use a full https:// link, or a local path such as
                     "../images/guitar.jpg" (relative to the pages/ folder).
   • Same for the "beliefs" list.
   • Quotes: if your text contains a " character, write it as \" .
   ===================================================================== */
(function () {
  var LIFE = {
    eyebrow: 'BEYOND THE CLASSROOM',
    title: 'Life & Interests',
    intro: 'Research does not happen in a vacuum. My curiosity about the world — its geography, its stories, its sounds — shapes the questions I bring to my work.',

    cards: [
      {
        label: 'ORIGIN',
        text: 'Dhaka, Bangladesh',
        image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=700&h=480&fit=crop&auto=format',
        alt: 'City street at dusk with warm lights'
      },
      {
        label: 'HIKING',
        text: 'Pacific Crest Trail enthusiast — 400+ miles logged',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&h=480&fit=crop&auto=format',
        alt: 'Mountain trail through pine forest'
      },
      {
        label: 'READING',
        text: 'Philosophy of mind, speculative fiction, history of science',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&h=480&fit=crop&auto=format',
        alt: 'Stack of open books on a wooden table'
      },
      {
        label: 'MUSIC',
        text: 'Amateur classical guitarist since age nine',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=700&h=480&fit=crop&auto=format',
        alt: 'Acoustic guitar close-up'
      }
    ],

    beliefsTitle: 'What I believe',
    beliefs: [
      { icon: '◎', title: 'Open Science',        text: 'All code and data from my lab are released publicly. Science cannot advance behind paywalls.' },
      { icon: '⌗', title: 'Accessibility First', text: 'AI systems should work for people in Dhaka as well as they do for people in Seattle.' },
      { icon: '△', title: 'Student-Centered',    text: "A professor's most durable publication is a well-trained student with the courage to ask hard questions." }
    ]
  };

  /* ------------------- rendering (no need to edit below) ------------------- */
  var root = document.getElementById('life-root');
  if (!root) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var delays = [0, 150, 300, 450];   // stagger animation, repeats every 4 cards

  var cards = (LIFE.cards || []).map(function (c, i) {
    return '<figure class="photo-card card-lift reveal fade-up d' + delays[i % 4] + '">' +
      '<div class="photo"><img src="' + esc(c.image) + '" alt="' + esc(c.alt || c.label) + '" loading="lazy" /></div>' +
      '<figcaption><p class="mono small accent">' + esc(c.label) + '</p><p>' + esc(c.text) + '</p></figcaption>' +
    '</figure>';
  }).join('');

  var beliefs = (LIFE.beliefs || []).map(function (b) {
    return '<div class="card"><span class="icon">' + esc(b.icon) + '</span>' +
      '<h4 class="serif">' + esc(b.title) + '</h4>' +
      '<p class="muted-text small-md">' + esc(b.text) + '</p></div>';
  }).join('');

  root.innerHTML =
    '<div class="section-head">' +
      '<p class="eyebrow mono">' + esc(LIFE.eyebrow) + '</p>' +
      '<h2 class="serif">' + esc(LIFE.title) + '</h2>' +
      '<p class="intro">' + esc(LIFE.intro) + '</p>' +
    '</div>' +
    '<div class="cards-2">' + cards + '</div>' +
    (beliefs ? '<div class="divider beliefs"><h3 class="serif">' + esc(LIFE.beliefsTitle) + '</h3>' +
      '<div class="cards-3">' + beliefs + '</div></div>' : '');
})();
