/* =====================================================================
   LIFE & EVENTS GALLERY  —  edit the GALLERY object below, save, refresh life.html.
   You never need to touch life.html for normal updates.

   • Add a section:   copy one { id: ..., title: ... } block inside "sections".
   • Remove / reorder: delete or move the block.
   • Add a photo:     copy one { src, title, text } line inside that section's "photos".
   • Photo path:      "deans-award-1.jpg" (relative to life.html) or a full https:// link.
   • A missing photo shows a grey placeholder, so the page never breaks.
   • If your text contains a " character, write it as \" .

   LAYOUT choices (change "layout" of any section):
     'slideshow'  big photo + caption, arrows, dots, thumbnails, auto-play
     'flip'       cards that flip to show the details; one flips at random every few seconds
     'row'        photos in a single horizontal scrolling row, caption under each
     'grid'       neat even grid, caption under each
     'mosaic'     mixed-size tiles (details appear on hover / tap)
     'automosaic' mosaic that auto-fits portrait + landscape photos (whole photos, no gaps)
     'filmstrip'  one big photo + details, thumbnails underneath, auto-plays
     'justified'  mixed portrait/landscape photos auto-fit into full rows, no gaps, no crop
   PER-SECTION TIMING (add to any section; both are optional):
     every: 2500   milliseconds between automatic photo changes
                   (for 'row' it is the milliseconds each photo takes to pass by)
     speed: 600    milliseconds the transition / animation takes (fade, flip, slide, hover)
   Clicking any photo opens a full-screen viewer with its caption.
   ===================================================================== */
(function() {
    var PHOTO_FOLDER = ''; /* '' = photos in the same folder as life.html. Example: 'images/' */

    var GALLERY = {
        eyebrow: 'LIFE & EVENTS',
        title: 'Moments That Shaped Me',
        intro: 'Awards, conferences, campus days, trips and quiet moments behind a camera. Each section below says what it is about, and every photo carries a short note.',

        sections: [{
                id: 'deans-award-2024',
                title: "Dean's Award 2024",
                layout: 'slideshowfull',
                every: 1500, /* ms between automatic photo changes */
                speed: 700, /* ms the transition / animation takes (smaller = snappier) */
                purpose: "Recognition from the Dean's office for academic and professional contribution. These photos mark the ceremony and the people who made it possible.",
                photos: [
                    { src: '../images/gallery-image/award-receiving.JPG', title: 'Receiving the award', text: 'Accepting the Dean\'s Award on stage at the ceremony.' },
                    { src: '../images/gallery-image/at-PUST.JPG', title: 'at PUST campus', text: 'The place who made me.' },
                    { src: '../images/gallery-image/certificate.jpeg', title: 'Certificate', text: 'The certificate and crest, a reminder to keep going.' },
                    { src: '../images/gallery-image/creast.png', title: 'Crest', text: 'The certificate and crest, a reminder to keep going.' },
                    { src: '../images/gallery-image/people-behind.JPG', title: 'With my parent', text: 'People behind this success.' },
                ]
            },
            {
                id: 'best-presentation-2026',
                title: 'Best Presentation Award 2026',
                layout: 'grid',
                speed: 500, /* ms the transition / animation takes (smaller = snappier) */
                purpose: 'Awarded for a clear and well-delivered research presentation in technical sessional at 2026 IEEE 2nd International' +
                    ' Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN). This section records that day, from the talk to the trophy.',
                photos: [
                    { src: '../images/gallery-image/best-presenter-3.JPG', title: 'On stage', text: 'Presenting the research findings to the panel.' },
                    { src: '../images/gallery-image/best-presenter-1.JPG', title: 'Award moment', text: 'Receiving the Best Presentation award.' },
                    { src: '../images/gallery-image/best-presenter-2.JPG', title: 'The awards', text: 'The awards.' }
                ]
            },
            {
                id: 'international-conferences',
                title: 'Moments of International Conferences',
                layout: 'grid',
                speed: 500, /* ms the transition / animation takes (smaller = snappier) */
                purpose: 'Presenting and networking at international conferences: meeting researchers, exchanging ideas and seeing how others approach similar problems.',
                photos: [
                    { src: "../images/gallery-image/qpain-25-1.jpg", title: 'QPAIN-2025 Presentation' },
                    { src: '../images/gallery-image/qpain-25-2.jpg', title: 'QPAIN-2025 Conference' },
                    { src: '../images/gallery-image/SPICSCON-technical.JPG', title: 'SPICSCON-2025 technical session.' },
                    { src: '../images/gallery-image/SPICSCON-banner.JPG', title: 'SPICSCON-2025 Conference' },
                    { src: '../images/gallery-image/ICTP-presentation.jpg', title: 'Present thesis paper at ICTP conference' },
                    { src: '../images/gallery-image/ICTP-banner.jpg', title: 'ICTP-2026 conference' },
                    { src: '../images/gallery-image/WIECON-certificate.jpg', title: 'Group photo' },
                    { src: '../images/gallery-image/WIECON-banner.jpg', title: '11th International Women in Engineering Conference on Electrical and Computer Engineering onference (WIECON-ECE 2025)' },
                    { src: '../images/gallery-image/QPAIN-26-banner.JPG', title: 'QPAIN-2026 Conference' },
                    { src: '../images/gallery-image/QPAIN-26-1.JPG', title: 'Present remaining part of thesis paper at ICTP conference' },
                    { src: '../images/gallery-image/QPAIN-26-11.JPG', title: 'Receiving best presenter award in topics of Microwave Imaging for Breast Cancer Detection at QPAIN-2026 conference.' },
                    { src: '../images/gallery-image/QPAIN-26-2.JPG', title: 'Present microwave appliction in the foeld of WLAN/WiFi application and Biomedical applications.' },
                    { src: '../images/gallery-image/QPAIN-take-certificate-2.JPG', title: 'Certificate giving ceremony in QPAIN-2026 conference at CUET' },
                    { src: '../images/gallery-image/QPAIN-26-certificate.JPG', title: 'QPAIN-2026 Conference.' },
                    { src: '../images/gallery-image/PECCII-2.JPG', title: 'PECCII-2026 Conference.' },
                    { src: '../images/gallery-image/PECCII-1-certificate.JPEG' },
                    { src: '../images/gallery-image/PECCII-presentation.JPG' },
                    { src: '../images/gallery-image/PECCII-certificate-2.JPG' },
                    { src: '../images/gallery-image/PECCII-banner.JPG', title: 'MARSCON-2026 Inauguration' },
                    { src: '../images/gallery-image/MARSCON-opening.JPG', title: 'MARSCON-2026 Presentation' },
                    { src: '../images/gallery-image/MARSCON-presentation-1.JPG', title: 'MARSCON-2026 Presentation' },
                    { src: '../images/gallery-image/MARSCON-presentation-2.JPG', title: 'MARSCON-2026 Presentation' },
                    { src: '../images/gallery-image/MARSCON-banner.JPG', title: 'MARSCON-2026 Presentation' },
                    { src: '../images/gallery-image/MARSCON-outside.JPG', title: 'MARSCON-2026 Presentation' }
                ]
            },
            {
                id: 'Moments at RTM-AKTU',
                title: 'Conference / Seminar / Workshop',
                layout: 'slideshowleft',
                every: 1500, /* ms between automatic photo changes */
                speed: 200, /* ms the transition / animation takes (smaller = snappier) */
                purpose: 'Local and national academic events attended or organised. They are where skills sharpen and new collaborations begin.',
                photos: [
                    { src: '../images/certificate-image/WIECON-22.png', title: 'WIECON-2022' },
                    { src: '../images/certificate-image/EICT-2025.png', title: 'EICT-2025' },
                    { src: '../images/certificate-image/ICCCNT.png', title: 'ICCCNT-2025' },
                    { src: '../images/certificate-image/ICTP-1.jpeg', title: 'ICTP-2025' },
                    { src: '../images/certificate-image/QPAIN-2026-3.jpeg', title: 'QPAIN-2026' },
                    { src: '../images/certificate-image/MARSCON-1.jpeg', title: 'MARSCON-2026' },
                    { src: '../images/certificate-image/ICTP-2.jpeg', title: 'ICTP-2025' },
                    { src: '../images/certificate-image/MARSCON-2.jpeg', title: 'MARSCON-2026' },
                    { src: '../images/certificate-image/PECCII-212-01.jpg', title: 'PECCII-2026' },
                    { src: '../images/certificate-image/QPAIN-1.png', title: 'QPAIN-2025' },
                    { src: '../images/certificate-image/ECCE.png', title: 'ECCE-2024' },
                    { src: '../images/certificate-image/PECCII-213-01.jpg', title: 'PECCII-2026' },
                    { src: '../images/certificate-image/QPAIN-2.png', title: 'QPAIN-2025' },
                    { src: '../images/certificate-image/PECCII-303-01.jpg', title: 'PECCII-2026' },
                    { src: '../images/certificate-image/PEEIACON-2.png', title: 'PEEIACON-2026' },
                    { src: '../images/certificate-image/QPAIN-4.png', title: 'QPAIN-2025' },
                    { src: '../images/certificate-image/QPAIN-2026-1.jpeg', title: 'QPAIN-2026' },
                    { src: '../images/certificate-image/PECCII-214-01.jpg', title: 'PECCII-2026' },
                    { src: '../images/certificate-image/QPAIN-2026-2.jpeg', title: 'QPAIN-2026' },
                    { src: '../images/certificate-image/PEEIACON-1.png', title: 'PEEIACON-2026' },
                    { src: '../images/certificate-image/QPAIN-3.png', title: 'QPAIN-2025' },
                    { src: '../images/certificate-image/SPICSCON-1.jpeg', title: 'SPICSCON-2025' },
                    { src: '../images/certificate-image/WIECON.jpeg', title: 'WIECON-2025' }
                ]
            },

            {
                id: 'Moments at RTM-AKTU',
                title: 'Moments at RTM-AKTU',
                layout: 'row',
                every: 4000, /* ms each photo takes to pass by (smaller = faster train) */
                rowHeight: 300, /* height of the photos in px (width follows each photo's shape) */
                purpose: 'Everyday life at RTM Al-Kabir Technical University: classrooms, labs, events and colleagues. Tap or hover a card to read its story.',

                photos: [
                    { src: '../images/gallery-image/1.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/2.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/3.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/4.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/5.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/6.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/7.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/8.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/9.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/10.JPG', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/11.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/12.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/13.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/14.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/15.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/16.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/17.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/18.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/19.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/20.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/21.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/22.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/23.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/24.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/25.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/26.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/27.JPG', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/28.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/29.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/30.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/31.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/32.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/33.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/34.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/35.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/36.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/37.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/38.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/39.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/40.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/41.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/42.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/43.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/44.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/45.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/46.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/47.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/48.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/49.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/50.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/51.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/52.jpg', text: 'Precious moment at the university.' },
                    { src: '../images/gallery-image/53.jpg', text: 'Precious moment at the university.' }
                ]
            },

            {
                id: 'university-moments',
                title: 'PUST Precious Moments',
                layout: 'coverflow',
                every: 1500, /* ms between automatic photo changes */
                speed: 600, /* ms the transition / animation takes (smaller = snappier) */
                purpose: 'Memories from my own student years: classmates, teachers, late-night study sessions and the convocation.',
                photos: [
                    { src: 'university-1.jpg', title: 'First year', text: 'Early days on campus, full of curiosity.' },
                    { src: 'university-2.jpg', title: 'Classmates', text: 'The batch that shared every deadline.' },
                    { src: 'university-3.jpg', title: 'Project day', text: 'Presenting the final-year project.' },
                    { src: 'university-4.jpg', title: 'Convocation', text: 'Graduation day with family.' }
                ]
            },
            {
                id: 'outings',
                title: 'Social Outing',
                layout: 'filmstrip',
                every: 1500, /* ms between automatic photo changes */
                speed: 500, /* ms the fade takes (smaller = snappier) */
                height: 45, /* big photo height as % of screen height (smaller = smaller photo) */
                purpose: 'Time away from work with the people who make the journey enjoyable: friends, mentors and colleagues.',
                photos: [
                    { src: 'outings-1.jpg', title: 'Day trip', text: 'A relaxed day out with colleagues.', size: 'wide' },
                    { src: 'outings-2.jpg', title: 'With seniors', text: 'Long conversation with respected seniors.' },
                    { src: 'outings-3.jpg', title: 'Friends', text: 'Old friends, same old jokes.', size: 'tall' },
                    { src: 'outings-4.jpg', title: 'Picnic', text: 'Lunch together by the river.' },
                    { src: 'outings-5.jpg', title: 'Group shot', text: 'Everyone in one frame, finally.', size: 'wide' }
                ]
            },

            {
                id: 'travel-archive',
                title: 'Travel Archive',
                layout: 'postcards', /* NEW design: deck of photo prints that fly away + ticket-style caption panel */
                every: 4000, /* ms between automatic photo changes */
                speed: 600, /* ms the fade takes (smaller = snappier) */
                purpose: 'A slideshow of my favourite travel frames: the places, the light and the people met along the way.',
                photos: [
                    { src: 'travel-gallery-1.jpg', title: 'Place one', text: 'Short note about this place and the moment.' },
                    { src: 'travel-gallery-2.jpg', title: 'Place two', text: 'Short note about this place and the moment.' },
                    { src: 'travel-gallery-3.jpg', title: 'Place three', text: 'Short note about this place and the moment.' },
                    { src: 'travel-gallery-4.jpg', title: 'Place four', text: 'Short note about this place and the moment.' }
                ]
            }
        ]
    };

    /* ------------------- rendering (no need to edit below) ------------------- */
    var root = document.getElementById('gallery-root');
    if (!root) return;
    GALLERY.sections.forEach(function(s) {
        s.photos.forEach(function(p) { if (!/^(https?:|data:|\/)/.test(p.src)) p.src = PHOTO_FOLDER + p.src; });
    });

    var PH = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="560"><rect width="100%" height="100%" fill="#cfc5b8"/>' +
        '<text x="50%" y="50%" fill="#7c6f63" font-family="sans-serif" font-size="26" text-anchor="middle">photo coming soon</text></svg>');

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } [c];
        });
    }

    function img(p, lazy) {
        return '<img src="' + esc(p.src) + '" alt="' + esc(p.title || '') + '"' + (lazy === false ? '' : ' loading="lazy"') + ' />';
    }

    function cap(p) { return '<p class="g-title serif">' + esc(p.title) + '</p><p class="g-text">' + esc(p.text) + '</p>'; }

    var L = {}; /* one renderer per layout; each returns HTML. data-i = photo index */

    L.slideshow = function(s) {
        var ph = s.photos;
        return '<div class="g-slideshow" data-auto="1">' +
            '<div class="g-stage"><div class="g-slides">' + ph.map(function(p, i) {
                return '<div class="g-slide' + (i ? '' : ' on') + '" data-i="' + i + '">' + img(p, i) + '</div>';
            }).join('') + '</div>' +
            '<button class="g-nav prev" aria-label="Previous">‹</button><button class="g-nav next" aria-label="Next">›</button></div>' +
            '<div class="g-side"><div class="g-caps">' + ph.map(function(p, i) {
                return '<div class="g-capitem' + (i ? '' : ' on') + '">' + cap(p) + '</div>';
            }).join('') + '</div>' +
            '<div class="g-dots">' + ph.map(function(p, i) {
                return '<button class="g-dot' + (i ? '' : ' on') + '" data-go="' + i + '" aria-label="Photo ' + (i + 1) + '"></button>';
            }).join('') + '</div></div>' +
            '</div>';
    };

    /* same as 'slideshow' but shows the WHOLE photo (no cropping) */
    L.slideshowfull = function(s) {
        var h = L.slideshow(s);
        h = h.replace('class="g-stage"', 'class="g-stage" style="background:#14110f"');
        h = h.replace(/class="g-slide( on)?"/g, 'class="g-slide$1" style="background:transparent"');
        h = h.replace(/<img /g, '<img style="width:100%;height:100%;object-fit:contain" ');
        return h;
    };

    /* wide, full-width single-row slideshow (same behaviour as 'slideshow') */
    L.wideslide = function(s) {
        return L.slideshow(s).replace('class="g-slideshow"', 'class="g-slideshow g-wide"');
    };

    /* same as 'slideshow' but text on the LEFT, photos on the RIGHT, fast fade */
    L.slideshowleft = function(s) {
        return L.slideshow(s).replace('class="g-slideshow"', 'class="g-slideshow g-rev"');
    };

    (function() {
        var st = document.createElement('style');
        st.textContent =
            '@media(min-width:800px){' +
            '.g-rev{grid-template-columns:1fr 1.7fr !important}' +
            '.g-rev .g-stage{order:2}' +
            '.g-rev .g-side{order:1}' +
            '}' +
            '.g-rev .g-slide{transition:opacity var(--tr,.2s) ease !important}' +
            '.g-rev .g-capitem.on{animation-duration:var(--tr,.2s) !important}';
        document.head.appendChild(st);
    })();

    L.row = function(s) { /* train-style marquee: photos are listed twice so the loop is seamless */
        function items(dup) {
            return s.photos.map(function(p, i) {
                return '<figure class="g-item"' + (dup ? ' aria-hidden="true"' : '') + ' data-i="' + i + '"><div class="g-ph">' + img(p, false) + '</div><figcaption>' + cap(p) + '</figcaption></figure>';
            }).join('');
        }
        return '<div class="g-row" style="--rh:' + (+s.rowHeight || 300) + 'px"><div class="g-train" style="--n:' + s.photos.length + ';--dur:' + (s.photos.length * (+s.every || 4000) / 1000) + 's">' + items(false) + items(true) + '</div></div>';
    };

    /* coverflow: 3D carousel, the centre photo is large, neighbours tilt away on both sides (good for many photos) */
    L.coverflow = function(s) {
        return '<div class="g-cover"><div class="g-cfstage">' + s.photos.map(function(p, i) {
            return '<figure class="g-cf" data-i="' + i + '" data-pos="x"><img data-src="' + esc(p.src) + '" alt="' + esc(p.title || '') + '" /><figcaption>' + cap(p) + '</figcaption></figure>';
        }).join('') + '</div><button class="g-fnav g-fprev" aria-label="Previous">‹</button><button class="g-fnav g-fnext" aria-label="Next">›</button>' +
            '<span class="g-cfcount mono"></span></div>';
    };

    L.grid = function(s) {
        return '<div class="g-grid">' + s.photos.map(function(p, i) {
            return '<figure class="g-item" data-i="' + i + '"><div class="g-ph">' + img(p) + '</div><figcaption>' + cap(p) + '</figcaption></figure>';
        }).join('') + '</div>';
    };

    L.mosaic = function(s) {
        return '<div class="g-mosaic">' + s.photos.map(function(p, i) {
            return '<figure class="g-tile ' + esc(p.size || '') + '" data-i="' + i + '">' + img(p) +
                '<figcaption>' + cap(p) + '</figcaption></figure>';
        }).join('') + '</div>';
    };

    L.flip = function(s) {
        if (s.photoFlip) { /* both faces are photos (no text); the hidden face is swapped after each flip */
            var n = s.cards || s.photos.length;
            return '<div class="g-flipgrid">' + s.photos.slice(0, n).map(function(p, i) {
                return '<div class="g-flip" data-i="' + i + '" data-vis="' + i + '" tabindex="0"><div class="g-flipin">' +
                    '<div class="g-front">' + img(p, false) + '</div>' +
                    '<div class="g-back g-backphoto">' + img(s.photos[(n + i) % s.photos.length], false) + '</div>' +
                    '</div></div>';
            }).join('') + '</div>';
        }
        return '<div class="g-flipgrid">' + s.photos.slice(0, s.cards || s.photos.length).map(function(p, i) {
            return '<div class="g-flip" data-i="' + i + '" tabindex="0"><div class="g-flipin">' +
                '<div class="g-front">' + img(p) + '<span class="g-hint mono">TAP TO FLIP</span></div>' +
                '<div class="g-back">' + (s.backPhoto ? img(p).replace('<img ', '<img class="g-bgimg" ') : '') + cap(p) + '<button class="g-open mono" data-open="' + i + '">VIEW PHOTO →</button></div>' +
                '</div></div>';
        }).join('') + '</div>';
    };

    /* section 05: card height follows the photo, so no crop and no blank space */
    (function() {
        var st = document.createElement('style');
        st.textContent =
            '#moments-at-rtm-aktu .g-flipgrid{align-items:start}' +
            '#moments-at-rtm-aktu .g-flip{aspect-ratio:auto !important;height:auto !important}' +
            '#moments-at-rtm-aktu .g-flipin{height:auto !important}' +
            '#moments-at-rtm-aktu .g-front{position:relative !important;inset:auto !important;background:transparent !important}' +
            '#moments-at-rtm-aktu .g-front img{width:100% !important;height:auto !important;object-fit:contain !important;display:block}' +
            '#moments-at-rtm-aktu .g-back{background:var(--card) !important;overflow:auto;padding:1rem}';
        document.head.appendChild(st);
    })();

    /* ---------- filmstrip layout: one big photo (whole, no crop) + details + thumbnails, auto-plays ---------- */
    L.filmstrip = function(s) {
        var p = s.photos[0];
        return '<div class="g-film"' + (s.height ? ' style="--fh:' + (+s.height) + 'vh"' : '') + '><figure class="g-item g-big" data-i="0">' + img(p, false) +
            '<figcaption>' + cap(p) + '</figcaption></figure>' +
            '<div class="g-thumbs">' + s.photos.map(function(q, i) {
                return '<button class="g-th' + (i ? '' : ' on') + '" data-th="' + i + '" aria-label="Photo ' + (i + 1) + '">' + img(q) + '</button>';
            }).join('') + '</div></div>';
    };

    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-film{background:transparent !important;box-shadow:none !important}' +
            '.g-film .g-big::before,.g-film .g-big::after,.g-film::before,.g-film::after{display:none !important}' +
            '.g-film .g-big{display:block;margin:0 auto;background:transparent !important;box-shadow:none !important;padding:0;text-align:center}' +
            '.g-big img{max-width:100%;max-height:var(--fh,45vh);width:auto;height:auto;display:block;margin:0 auto;transition:opacity var(--tr,400ms) ease}' +
                        '.g-big figcaption{display:block !important;position:static !important;visibility:visible !important;opacity:1;transform:none !important;height:auto !important;max-height:none !important;overflow:visible !important;margin:.3rem 0 0;padding:0 !important;line-height:1.3;background:none !important;color:inherit !important;transition:opacity var(--tr,400ms) ease}' +
            '.g-big figcaption .g-title{display:block !important;color:inherit !important;font-size:1.3rem;font-weight:600;line-height:1.25;margin:0 0 .1rem}' +
            '.g-big figcaption .g-text{display:block !important;color:inherit !important;opacity:.75;font-size:.95rem;margin:0}'+
            '.g-big.out img,.g-big.out figcaption{opacity:0 !important}' +
            '.g-big:hover img{transform:none}' +
            '.g-thumbs{display:flex;gap:.5rem;overflow-x:auto;justify-content:center;margin-top:.5rem;padding-bottom:0}' +
            '.g-th{flex:0 0 auto;padding:0;border:2px solid transparent;background:none;cursor:pointer;opacity:.55;transition:all .2s}' +
            '.g-th img{height:3.5rem;width:auto;display:block}' +
            '.g-th.on,.g-th:hover{opacity:1;border-color:var(--accent)}';
        document.head.appendChild(st);
    })();

    /* ---------- coverflow (section 06): no dark background, page colour shows through ---------- */
    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-cover,.g-cfstage,.g-cf,.g-cf img{background:transparent !important}' +
            '.g-cover::before,.g-cover::after,.g-cfstage::before,.g-cfstage::after{display:none !important}' +
            '.g-cover,.g-cfstage{box-shadow:none !important}';
        document.head.appendChild(st);
    })();

    /* ---------- justified layout: mixed portrait/landscape photos auto-fit into full rows, no blank space, no crop ---------- */
    L.justified = function(s) {
        var H = +s.rowHeight || 220;
        return '<div class="g-just" data-h="' + H + '">' + s.photos.map(function(p, i) {
            return '<figure class="g-tile g-jt" data-i="' + i + '" style="flex:150 1 ' + (H * 1.5) + 'px"><div class="g-pad" style="padding-bottom:66.6%"></div>' +
                img(p, false) + '<figcaption>' + cap(p) + '</figcaption></figure>';
        }).join('') + '</div>';
    };

    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-just{display:flex;flex-wrap:wrap;gap:.5rem}' +
            '.g-just::after{content:"";flex-grow:100000}' +
            '.g-jt{position:relative;margin:0;min-width:0;background:transparent !important}' +
            '.g-jt .g-pad{display:block;width:100%}' +
            '.g-jt img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}';
        document.head.appendChild(st);
    })();

    /* ---------- automosaic: mixed portrait/landscape photos packed like a mosaic, whole photos, no gaps ---------- */
    L.automosaic = function(s) {
        return '<div class="g-am"' + (s.cols ? ' data-cols="' + (+s.cols) + '"' : '') + '>' + s.photos.map(function(p, i) {
            return '<figure class="g-tile g-at" data-i="' + i + '">' + img(p, false) + '<figcaption>' + cap(p) + '</figcaption></figure>';
        }).join('') + '</div>';
    };

    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-am{position:relative}' +
            '.g-am .g-at{position:absolute;margin:0;overflow:hidden;background:transparent !important}' +
            '.g-am .g-at img{width:100%;height:100%;object-fit:cover;display:block}';
        document.head.appendChild(st);
    })();

    /* ---------- postcards: a deck of photo prints that fly away one by one + a ticket-style caption panel ---------- */
    L.postcards = function(s) {
        var n = s.photos.length;
        return '<div class="g-pc" style="--every:' + (+s.every || 4000) + 'ms">' +
            '<div class="g-pcdeck">' + s.photos.map(function(p, i) {
                return '<div class="g-pccard" data-i="' + i + '" data-d="' + (i < 3 ? i : 'x') + '"><div class="g-pcframe">' + img(p) +
                    '<span class="g-pccap serif">' + esc(p.title) + '</span></div></div>';
            }).join('') + '</div>' +
            '<aside class="g-pcside">' +
            '<div class="g-stamp mono"><span>VISITED</span><b>01</b></div>' +
            '<p class="mono g-pckick">DESTINATION</p>' +
            '<div class="g-pctext">' + cap(s.photos[0]) + '</div>' +
            '<div class="g-pcbar"><i></i></div>' +
            '<div class="g-pcctl"><span class="mono g-pccount">01 / ' + ('0' + n).slice(-2) + '</span>' +
            '<span><button class="g-pcb" data-d="-1" aria-label="Previous">‹</button><button class="g-pcb" data-d="1" aria-label="Next">›</button></span></div>' +
            '</aside></div>';
    };

    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-pc{display:grid;gap:1.5rem;justify-items:center}' +
            '.g-pcdeck{position:relative;width:100%;max-width:48rem;height:min(62vh,540px);min-height:300px}' +
            '.g-pccard{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;z-index:0;pointer-events:none;' +
                'transition:transform var(--tr,600ms) cubic-bezier(.3,.7,.2,1),opacity var(--tr,600ms) ease}' +
            '.g-pcframe{background:#fff;padding:.6rem .6rem .45rem;box-shadow:0 10px 30px rgba(0,0,0,.22);max-width:92%;display:flex;flex-direction:column;align-items:center}' +
            '.g-pcframe img{display:block;max-width:100%;max-height:calc(min(62vh,540px) - 4.6rem);width:auto;height:auto}' +
            '.g-pccap{color:#2b2420;font-style:italic;font-size:1.02rem;padding:.55rem 0 .2rem}' +
            '.g-pccard[data-d="0"]{opacity:1;z-index:3;pointer-events:auto;cursor:zoom-in}' +
            '.g-pccard[data-d="1"]{opacity:1;z-index:2;transform:translate(22px,8px) rotate(3.5deg) scale(.96)}' +
            '.g-pccard[data-d="2"]{opacity:1;z-index:1;transform:translate(-20px,12px) rotate(-3.5deg) scale(.92)}' +
            '.g-pccard[data-d="x"]{transform:scale(.88)}' +
            '.g-pccard.fly{transform:translateX(115%) rotate(16deg) !important;opacity:0 !important;z-index:4 !important}' +
            '.g-pccard.snap{transition:none !important}' +
            '.g-pcside{position:relative;width:100%;max-width:48rem;background:none;border:0;padding:0;display:flex;align-items:center;gap:1rem}' +
            '.g-stamp{display:none !important;position:absolute;top:-1.4rem;right:1.2rem;width:4.6rem;height:4.6rem;border-radius:50%;border:2px dashed var(--accent);color:var(--accent);' +
                'background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:center;transform:rotate(-12deg);font-size:.55rem;letter-spacing:.12em}' +
            '.g-stamp b{font-size:1.4rem;letter-spacing:0}' +
            '.g-pckick{display:none;font-size:.7rem;letter-spacing:.16em;color:var(--accent);margin-bottom:.6rem}' +
            '.g-pctext{display:none !important;min-height:0;transition:opacity calc(var(--tr,600ms)/2) ease,transform calc(var(--tr,600ms)/2) ease}' +
            '.g-pctext.out{opacity:0;transform:translateY(6px)}' +
            '.g-pctext .g-title{display:none !important;font-size:1.75rem;line-height:1.2;margin-bottom:.5rem}' +
            '.g-pcbar{order:2;flex:1;height:3px;background:var(--border);margin:0;overflow:hidden}' +
            '.g-pcbar i{display:block;height:100%;background:var(--accent);transform-origin:left;transform:scaleX(0)}' +
            '.g-pcbar.run i{animation:g-pcfill var(--every,4000ms) linear forwards}' +
            '@keyframes g-pcfill{to{transform:scaleX(1)}}' +
            '.g-pcctl{display:contents}.g-pccount{order:1}.g-pcctl>span:last-child{order:3;display:flex;white-space:nowrap}' +
            '.g-pccount{font-size:.8rem;letter-spacing:.1em}' +
            '.g-pcb{width:2.6rem;height:2.6rem;border-radius:50%;border:1px solid var(--border);background:none;color:inherit;cursor:pointer;font-size:1.3rem;line-height:1;margin-left:.4rem;transition:all .2s}' +
            '.g-pcb:hover{background:var(--accent);color:#fff;border-color:var(--accent)}';
        document.head.appendChild(st);
    })();

    /* section chips at the top: each chip stays on one line, rows never overlap */
    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-chips{display:flex !important;flex-wrap:wrap;gap:.6rem;align-items:center;margin:0 0 3rem !important;position:static !important;height:auto !important}' +
            '.g-chips .g-chip{display:inline-block !important;position:static !important;white-space:nowrap;line-height:1.3 !important;height:auto !important;margin:0 !important}';
        document.head.appendChild(st);
    })();

    /* train/row layout: every photo shows WHOLE at its own shape (no crop, no blank space), scrolls smoothly, pauses on hover */
    (function() {
        var st = document.createElement('style');
        st.textContent =
            '.g-row{overflow:hidden !important;padding-bottom:0 !important;scroll-snap-type:none !important}' +
            '.g-train{display:flex !important;width:max-content !important;gap:0 !important;animation:g-trainmove var(--dur,40s) linear infinite !important}' +
            '.g-row:hover .g-train{animation-play-state:paused !important}' +
            '@keyframes g-trainmove{from{transform:translateX(0)}to{transform:translateX(-50%)}}' +
            '.g-train .g-item{flex:0 0 auto !important;width:auto !important;margin:0 1rem 0 0 !important;cursor:zoom-in}' +
            '.g-train .g-ph{aspect-ratio:auto !important;height:auto !important;width:auto !important;margin:0 !important;background:transparent !important;overflow:visible !important}' +
            '.g-train .g-ph img{height:var(--rh,300px) !important;width:auto !important;max-width:none !important;object-fit:contain !important;display:block}' +
            '.g-train figcaption{width:0;min-width:100%;margin-top:.4rem;font-size:.85rem}' +
            '@media(max-width:600px){.g-train .g-ph img{height:calc(var(--rh,300px) * .7) !important}}';
        document.head.appendChild(st);
    })();

    /* page skeleton */
    var chips = GALLERY.sections.map(function(s) {
        return '<a href="#' + esc(s.id) + '" class="g-chip mono">' + esc(s.title) + '</a>';
    }).join('');

    root.innerHTML =
        '<div class="section-head"><p class="eyebrow mono">' + esc(GALLERY.eyebrow) + '</p>' +
        '<h2 class="serif">' + esc(GALLERY.title) + '</h2><p class="intro">' + esc(GALLERY.intro) + '</p></div>' +
        '<div class="g-chips" role="navigation" aria-label="Gallery sections">' + chips + '</div>' +
        GALLERY.sections.map(function(s, n) {
            var draw = L[s.layout] || L.grid;
            var vars = [];
            if (s.speed != null) vars.push('--tr:' + (+s.speed) + 'ms');
            if (s.layout === 'row' && s.every) vars.push('--per:' + (+s.every) + 'ms');
            return '<section class="g-section" id="' + esc(s.id) + '" data-n="' + n + '"' + (vars.length ? ' style="' + vars.join(';') + '"' : '') + '>' +
                '<header class="g-head"><p class="mono g-num accent">' + ('0' + (n + 1)).slice(-2) + '</p>' +
                '<h3 class="serif">' + esc(s.title) + '</h3><p class="g-purpose">' + esc(s.purpose) + '</p></header>' +
                draw(s) + '</section>';
        }).join('');

    /* missing-photo fallback */
    Array.prototype.forEach.call(root.querySelectorAll('img'), function(im) {
        im.addEventListener('error', function() {
            im.onerror = null;
            im.src = PH;
        });
    });

    /* lightbox */
    var lb = document.createElement('div');
    lb.className = 'g-lb';
    lb.hidden = true;
    lb.innerHTML = '<button class="g-lbx" aria-label="Close">✕</button><button class="g-nav prev" aria-label="Previous">‹</button>' +
        '<figure><img alt="" /><figcaption></figcaption></figure><button class="g-nav next" aria-label="Next">›</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img'),
        lbCap = lb.querySelector('figcaption'),
        lbSet = [],
        lbI = 0;

    function lbShow(i) {
        lbI = (i + lbSet.length) % lbSet.length;
        var p = lbSet[lbI];
        lbImg.onerror = function() {
            lbImg.onerror = null;
            lbImg.src = PH;
        };
        lbImg.src = p.src;
        lbImg.alt = p.title || '';
        lbCap.innerHTML = cap(p);
    }

    function lbOpen(set, i) {
        lbSet = set;
        lb.hidden = false;
        document.body.style.overflow = 'hidden';
        lbShow(i);
    }

    function lbClose() {
        lb.hidden = true;
        document.body.style.overflow = '';
    }


    
    lb.addEventListener('click', function(e) {
        if (e.target.closest('.prev')) lbShow(lbI - 1);
        else if (e.target.closest('.next')) lbShow(lbI + 1);
        else if (e.target.tagName !== 'IMG' && !e.target.closest('figcaption')) lbClose();
    });
    document.addEventListener('keydown', function(e) {
        if (lb.hidden) return;
        if (e.key === 'Escape') lbClose();
        if (e.key === 'ArrowLeft') lbShow(lbI - 1);
        if (e.key === 'ArrowRight') lbShow(lbI + 1);
    });

    /* behaviour per section */
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(root.querySelectorAll('.g-section'), function(sec) {
        var s = GALLERY.sections[+sec.dataset.n],
            ph = s.photos;

        /* click a photo -> viewer (flip cards: flip first, open from the back) */
        sec.addEventListener('click', function(e) {
            var o = e.target.closest('[data-open]');
            if (o) return lbOpen(ph, +o.dataset.open);
            var f = e.target.closest('.g-flip');
            if (f && s.photoFlip) return lbOpen(ph, +f.dataset.vis);
            if (f) return f.classList.toggle('flipped');
            var it = e.target.closest('.g-item,.g-tile,.g-slide');
            if (it && !e.target.closest('.g-nav')) lbOpen(ph, +it.dataset.i);
        });

        /* filmstrip: click a thumbnail to switch, or let it auto-play (every: ms, speed: fade ms) */
        var fs = sec.querySelector('.g-film');
        if (fs) {
            var big = fs.querySelector('.g-big'),
                bigImg = big.querySelector('img'),
                bigCap = big.querySelector('figcaption'),
                strip = fs.querySelector('.g-thumbs'),
                ths = fs.querySelectorAll('.g-th'),
                fi = 0,
                ftimer, fswap;
            var fgo = function(i) {
                fi = (i + ths.length) % ths.length;
                var p = ph[fi];
                Array.prototype.forEach.call(ths, function(t, k) { t.classList.toggle('on', k === fi); });
                strip.scrollLeft = ths[fi].offsetLeft - strip.clientWidth / 2 + ths[fi].clientWidth / 2;
                clearTimeout(fswap);
                big.classList.add('out');
                fswap = setTimeout(function() {
                    big.dataset.i = fi;
                    bigImg.onerror = function() { bigImg.onerror = null; bigImg.src = PH; };
                    bigImg.src = p.src;
                    bigImg.alt = p.title || '';
                    bigCap.innerHTML = cap(p);
                    big.classList.remove('out');
                }, s.speed != null ? +s.speed : 400);
            };
            var fplay = function() {
                clearInterval(ftimer);
                if (!reduce && ths.length > 1) ftimer = setInterval(function() { fgo(fi + 1); }, s.every || 3000);
            };
            Array.prototype.forEach.call(ths, function(t, k) {
                t.addEventListener('click', function() { fgo(k);
                    fplay(); });
            });
            fs.addEventListener('mouseenter', function() { clearInterval(ftimer); });
            fs.addEventListener('mouseleave', fplay);
            fplay();
        }

        /* justified: once each photo has loaded, size its tile to the photo's own shape */
        var jj = sec.querySelector('.g-just');
        if (jj) {
            var JH = +jj.dataset.h;
            Array.prototype.forEach.call(jj.querySelectorAll('.g-jt'), function(fig) {
                var im = fig.querySelector('img'),
                    pad = fig.querySelector('.g-pad');
                var fit = function() {
                    if (!im.naturalWidth) return;
                    var r = im.naturalWidth / im.naturalHeight;
                    fig.style.flex = (r * 100) + ' 1 ' + (r * JH) + 'px';
                    pad.style.paddingBottom = (100 / r) + '%';
                };
                if (im.complete) fit();
                im.addEventListener('load', fit);
            });
        }

        /* automosaic: wide tiles for landscape photos, narrow for portrait, each at its own shape; packed into the shortest column(s) */
        var am = sec.querySelector('.g-am');
        if (am) {
            var tiles = am.querySelectorAll('.g-at'),
                amq = 0;
            var amLayout = function() {
                var W = am.clientWidth,
                    gap = 8;
                if (!W) return;
                var cols = +am.dataset.cols || (W < 560 ? 2 : (W < 900 ? 3 : 4)),
                    cw = (W - gap * (cols - 1)) / cols,
                    hs = [];
                for (var k = 0; k < cols; k++) hs.push(0);
                Array.prototype.forEach.call(tiles, function(t) {
                    var im = t.querySelector('img'),
                        r = im.naturalWidth ? im.naturalWidth / im.naturalHeight : 1.5,
                        span = (r > 1.25 && cols > 1) ? 2 : 1,
                        best = 0,
                        bestScore = 1e12;
                    for (var c = 0; c + span <= cols; c++) {
                        var top = 0,
                            waste = 0;
                        for (var j = c; j < c + span; j++) top = Math.max(top, hs[j]);
                        for (var j2 = c; j2 < c + span; j2++) waste += top - hs[j2];
                        var sc = top + waste;
                        if (sc < bestScore) { bestScore = sc;
                            best = c; }
                    }
                    var w = cw * span + gap * (span - 1),
                        h = w / r,
                        y = 0;
                    for (var m = best; m < best + span; m++) y = Math.max(y, hs[m]);
                    t.style.left = (best * (cw + gap)) + 'px';
                    t.style.top = y + 'px';
                    t.style.width = w + 'px';
                    t.style.height = h + 'px';
                    for (var n = best; n < best + span; n++) hs[n] = y + h + gap;
                });
                am.style.height = (Math.max.apply(null, hs) - gap) + 'px';
            };
            var amSoon = function() {
                cancelAnimationFrame(amq);
                amq = requestAnimationFrame(amLayout);
            };
            Array.prototype.forEach.call(tiles, function(t) { t.querySelector('img').addEventListener('load', amSoon); });
            window.addEventListener('resize', amSoon);
            amLayout();
        }

        /* postcards: deck of prints; the top one flies away, next comes up. auto-plays (every ms), fade/fly time = speed ms */
        var pc = sec.querySelector('.g-pc');
        if (pc) {
            var pcs = pc.querySelectorAll('.g-pccard'),
                pn = pcs.length,
                pi = 0,
                ptimer,
                pbar = pc.querySelector('.g-pcbar'),
                ptxt = pc.querySelector('.g-pctext'),
                pcnt = pc.querySelector('.g-pccount'),
                pstamp = pc.querySelector('.g-stamp b'),
                pevery = +s.every || 4000,
                ptr = s.speed != null ? +s.speed : 600,
                pad2 = function(x) { return ('0' + x).slice(-2); },
                ptxtT;
            var pcBar = function(on) {
                pbar.classList.remove('run');
                void pbar.offsetWidth;
                if (on) pbar.classList.add('run');
            };
            var pcShow = function(i, dir) {
                var prev = pi;
                pi = (i + pn) % pn;
                if (dir > 0 && pn > 1) {
                    var c = pcs[prev];
                    c.classList.add('fly');
                    setTimeout(function() {
                        c.classList.add('snap');
                        c.classList.remove('fly');
                        void c.offsetWidth;
                        c.classList.remove('snap');
                    }, ptr + 40);
                }
                Array.prototype.forEach.call(pcs, function(k, j) {
                    var d = (j - pi + pn) % pn;
                    k.setAttribute('data-d', d < 3 ? d : 'x');
                });
                ptxt.classList.add('out');
                clearTimeout(ptxtT);
                ptxtT = setTimeout(function() { ptxt.innerHTML = cap(ph[pi]);
                    ptxt.classList.remove('out'); }, ptr / 2);
                pcnt.textContent = pad2(pi + 1) + ' / ' + pad2(pn);
                pstamp.textContent = pad2(pi + 1);
            };
            var pcPlay = function() {
                clearInterval(ptimer);
                if (!reduce && pn > 1) {
                    ptimer = setInterval(function() { pcShow(pi + 1, 1);
                        pcBar(true); }, pevery);
                    pcBar(true);
                }
            };
            Array.prototype.forEach.call(pc.querySelectorAll('.g-pcb'), function(b) {
                b.addEventListener('click', function() { var d = +b.dataset.d;
                    pcShow(pi + d, d);
                    pcPlay(); });
            });
            pc.addEventListener('click', function(e) {
                var c = e.target.closest('.g-pccard');
                if (c && c.getAttribute('data-d') === '0') lbOpen(ph, +c.dataset.i);
            });
            var px = null,
                deck = pc.querySelector('.g-pcdeck');
            deck.addEventListener('pointerdown', function(e) { px = e.clientX; });
            deck.addEventListener('pointerup', function(e) {
                if (px == null) return;
                var dx = e.clientX - px;
                px = null;
                if (Math.abs(dx) > 50) { pcShow(pi + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
                    pcPlay(); }
            });
            pc.addEventListener('mouseenter', function() { clearInterval(ptimer);
                pcBar(false); });
            pc.addEventListener('mouseleave', pcPlay);
            pcPlay();
        }

        /* slideshow */
        var ss = sec.querySelector('.g-slideshow');
        if (ss) {
            var cur = 0,
                timer;
            var slides = ss.querySelectorAll('.g-slide'),
                caps = ss.querySelectorAll('.g-capitem'),
                dots = ss.querySelectorAll('.g-dot');

            function go(i) {
                cur = (i + slides.length) % slides.length;
                [slides, caps, dots].forEach(function(list) {
                    Array.prototype.forEach.call(list, function(el, k) { el.classList.toggle('on', k === cur); });
                });
            }

            function play() {
                if (!reduce && slides.length > 1) {
                    clearInterval(timer);
                    timer = setInterval(function() { go(cur + 1); }, s.every || 1500);
                }
            }
            ss.querySelector('.prev').onclick = function() {
                go(cur - 1);
                play();
            };
            ss.querySelector('.next').onclick = function() {
                go(cur + 1);
                play();
            };
            Array.prototype.forEach.call(dots, function(d) {
                d.onclick = function() {
                    go(+d.dataset.go);
                    play();
                };
            });
            ss.addEventListener('mouseenter', function() { clearInterval(timer); });
            ss.addEventListener('mouseleave', play);
            play();
        }

        /* coverflow layout: centre photo is big, neighbours tilt away; auto-plays, swipe / arrows / click neighbours */
        var cvr = sec.querySelector('.g-cover');
        if (cvr) {
            var cfs = cvr.querySelectorAll('.g-cf'),
                cfN = cfs.length,
                cfCnt = cvr.querySelector('.g-cfcount'),
                cfC = 0, cfVis = false, cfX = null;
            var cfSet = function() {
                Array.prototype.forEach.call(cfs, function(el, i) {
                    var d = ((i - cfC) % cfN + cfN) % cfN;
                    if (d > cfN / 2) d -= cfN;
                    var near = Math.abs(d) <= 3;
                    el.dataset.pos = near ? d : 'x';
                    if (near) { /* load only the photos close to the centre */
                        var im = el.querySelector('img');
                        if (!im.getAttribute('src')) {
                            im.onerror = function() { im.onerror = null; im.src = PH; };
                            im.src = im.dataset.src;
                        }
                    }
                });
                cfCnt.textContent = (cfC + 1) + ' / ' + cfN;
            };
            var cfGo = function(i) { cfC = (i + cfN) % cfN; cfSet(); };
            cvr.querySelector('.g-fprev').onclick = function() { cfGo(cfC - 1); };
            cvr.querySelector('.g-fnext').onclick = function() { cfGo(cfC + 1); };
            Array.prototype.forEach.call(cfs, function(el, i) {
                el.addEventListener('click', function() { if (i === cfC) lbOpen(ph, i); else cfGo(i); });
            });
            cvr.addEventListener('touchstart', function(e) { cfX = e.touches[0].clientX; }, { passive: true });
            cvr.addEventListener('touchend', function(e) {
                if (cfX === null) return;
                var dx = e.changedTouches[0].clientX - cfX; cfX = null;
                if (Math.abs(dx) > 40) cfGo(cfC + (dx < 0 ? 1 : -1));
            });
            if ('IntersectionObserver' in window) new IntersectionObserver(function(en) { cfVis = en[0].isIntersecting; }).observe(cvr);
            else cfVis = true;
            if (!reduce) setInterval(function() {
                if (!cfVis || cvr.matches(':hover') || !lb.hidden) return;
                cfGo(cfC + 1);
            }, s.every || 3000);
            cfSet();
        }

        /* photo-only flip cards: after each flip the face that is now hidden gets a new photo */
        var pf = sec.querySelector('.g-flipgrid');
        if (pf && s.photoFlip && ph.length > (s.cards || 0)) {
            var pcards = pf.querySelectorAll('.g-flip'),
                faces = [],
                ptr = 0;
            Array.prototype.forEach.call(pcards, function(c, k) {
                faces[k] = [k, (pcards.length + k) % ph.length];
            });
            var visibleSet = function() {
                return Array.prototype.map.call(pcards, function(c, k) { return faces[k][c.classList.contains('flipped') ? 1 : 0]; });
            };
            Array.prototype.forEach.call(pcards, function(c, k) {
                new MutationObserver(function() {
                    var fl = c.classList.contains('flipped');
                    c.dataset.vis = faces[k][fl ? 1 : 0];
                    setTimeout(function() { /* turn finished: refill the hidden face */
                        var fl2 = c.classList.contains('flipped'),
                            seen = visibleSet(),
                            n = -1,
                            tries = 0;
                        while (tries++ < ph.length) {
                            var cand = ptr++ % ph.length;
                            if (seen.indexOf(cand) === -1 && cand !== faces[k][fl2 ? 1 : 0]) { n = cand; break; }
                        }
                        if (n < 0) return;
                        var hiddenSide = fl2 ? 0 : 1;
                        faces[k][hiddenSide] = n;
                        var im = c.querySelector(hiddenSide ? '.g-back img' : '.g-front img');
                        im.onerror = function() {
                            im.onerror = null;
                            im.src = PH;
                        };
                        im.src = ph[n].src;
                        im.alt = ph[n].title || '';
                    }, 950);
                }).observe(c, { attributes: true, attributeFilter: ['class'] });
            });
        }

        /* flip: a random card flips by itself every few seconds (only while on screen) */
        var fg = sec.querySelector('.g-flipgrid');
        if (fg && !reduce && 'IntersectionObserver' in window) {
            var cards = fg.querySelectorAll('.g-flip'),
                vis = false,
                t;
            new IntersectionObserver(function(en) { vis = en[0].isIntersecting; }).observe(fg);
            t = setInterval(function() {
                if (!vis || fg.matches(':hover') || !lb.hidden) return;
                cards[Math.floor(Math.random() * cards.length)].classList.toggle('flipped');
            }, s.every || 3200);
        }
    });
})();