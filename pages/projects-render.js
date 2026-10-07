/* =====================================================================
   PROJECTS  —  add / edit / reorder projects HERE ONLY.

   To add a project, copy one { ... } block below into the PROJECTS list
   (keep the comma between blocks) and change the text.

   Fields:
     image    path to the picture (leave '' to show the grey placeholder)
     title    project / paper title
     meta     small line above the title (venue, year…)  — optional, '' to hide
     overview full overview. The card shows the first 2 lines, "Read more"
              expands it to the whole text.
     linkText text of the link shown when expanded       — optional
     linkUrl  where the link goes (DOI / paper / GitHub)  — optional

   Page needs:  <div class="cards-3 project-grid" id="projectGrid"></div>
   and loads this file BEFORE script.js.
   ===================================================================== */
(function() {
    var IMG = '../images/projects/';

    var PROJECTS = [

        /* ---------------- Research papers ---------------- */
        {
            image: '../images/project-image/biomedical.jpeg',
            meta: 'QPAIN · 2026',
            title: 'Development of a Compact Slotted Patch Antenna for Early Stage Breast Tumor Detection Using Microwave Technology',
            overview: 'A compact slotted microstrip patch antenna was developed for early breast tumor detection using microwave imaging. Designed on low-cost FR-4 at 1.9612 GHz, it achieved a −41.27 dB return loss and good tissue penetration. SAR analysis showed safe exposure levels (0.623 W/kg). Simulations using a multi-layer breast phantom demonstrated its potential for non-invasive, real-time breast cancer detection and localization.',
            linkText: 'DOI: 10.1109/QPAIN69676.2026.11545799',
            linkUrl: 'https://ieeexplore.ieee.org/document/11545799'
        },

        {
            image: '../images/project-image/nurse-ecall.jpg',
            meta: 'Springer LNNS vol. 348 · 2021',
            title: 'A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management',
            overview: 'A fingerprint-based, multi-user wireless nurse calling system with an e-notice board that lets authorized staff send common or emergency messages to patients from anywhere on the LAN. ' +
                'Fingerprint recognition keeps the system secure against unauthorized access, and the wireless link works up to 700 m. ' +
                'The prototype uses low-cost, readily available parts (Arduino, ATmega328P, nRF24L01+PA+LNA, fingerprint scanner, LED display, speaker). Going wireless makes maintenance and deployment simpler, and practical trials showed satisfactory performance for hospitals and health care centers.',
            linkText: 'DOI: 10.1007/978-981-16-7597-3_35',
            linkUrl: 'https://link.springer.com/chapter/10.1007/978-981-16-7597-3_35'
        },

                {
            image: '../images/project-image/medicine-reminder.jpg',
            meta: 'Heliyon · vol. 10, no. 4 · Feb 2024',
            title: 'A Smart Medicine Reminder Kit with Mobile Phone Calls and Some Health Monitoring Features for Senior Citizens',
            overview: 'A portable, low-cost medicine reminder kit for senior citizens that places repeated phone calls until the patient takes the medicine, helping prevent missed doses. ' +
                'The medicine routine is set through any mobile phone, and the kit also shows the real-time date and day, detects smoke, and measures room temperature and humidity. ' +
                'It further monitors heart rate, body temperature and oxygen saturation, using a microcontroller and a GSM module.',
            linkText: 'DOI: 10.1016/j.heliyon.2024.e26308',
            linkUrl: 'https://www.sciencedirect.com/science/article/pii/S2405844024023399'
        },
         {
            image: '../images/project-image/IV-fluid.png',
            meta: 'WIECON-ECE · 2022',
            title: 'Development of an Intravenous Fluid Monitoring, Warning, and Reverse Flow Blocking System',
            overview: 'This project besed upon developed an automated IV-fluid monitoring and alarm system using a microcontroller, load cell, switching valve, and GSM module. The system continuously monitors saline level, sends alerts when the bottle is nearly empty, and automatically stops the flow, improving patient safety and reducing nursing workload.',
            linkText: 'DOI: 0.1109/WIECON-ECE57977.2022.10150612',
            linkUrl: 'https://ieeexplore.ieee.org/document/10150612'
        },

        {
            image: '../images/project-image/agricall.jpg',
            meta: 'UCICS 2025 · Varendra University',
            title: 'AgriCall: An IoT-Integrated GSM-Based Irrigation Control System for Sustainable Agriculture',
            overview: 'AgriCall is a low-cost GSM-based irrigation controller that enables farmers to remotely control '+
            'water pumps through missed calls, avoiding call charges. Built with an Arduino UNO and SIM900A, '+
            'it provides SMS alerts, user authentication, LCD monitoring, and backup power during outages. Prototype'+
            ' testing demonstrated reliable pump control and power-failure alerts, with potential for future IoT-based '+
            'smart irrigation integration.',
            linkText: 'Read article',
            linkUrl: '../pages/papers/UCICS-agricall.pdf'
        },
         {
            image: '../images/project-image/gps-attendance.png',
            meta: '',
            title: 'GPS & IP-Based Attendance Management System',
            overview: 'This tool developed by a web-based attendance management system using Google Apps Script that records attendance along with GPS location and IP'+
            ' address, enabling real-time verification of user identity and attendance location while reducing fraudulent or proxy attendance.',
                    linkText: 'View Site',
            linkUrl: 'https://script.google.com/macros/s/AKfycbwQpr-mRZeWP8hxVj02JtSoxDNUuBmlcYhyXs_y4DdAuDBtZ0e3ILtLXzjCijU9vu4VWg/exec'
        },

                 {
            image: '../images/project-image/coverpage-generator.png',
            meta: '',
            title: 'Smart Auto Cover Page Generator',
            overview: 'A tool that automatically produces formatted academic cover pages from a few inputs, cutting repetitive manual work for students.',
                    linkText: 'View Site',
            linkUrl: 'https://eee-rtm-aktu.github.io/Cover-Page-Generator/'
        },


        {
            image: '../images/project-image/hiltown-iot.png',
            meta: '',
            title: 'IoT Based Smart Energy Management and Hotel Automation System',
            overview: 'The proposed Smart Room Management System integrates RFID access control, IoT-based appliance control, human presence detection, door monitoring, and energy monitoring into a centralized platform. '+
            'The system is designed to give hotel management remote visibility and control over individual rooms, while reducing unnecessary appliance usage and improving overall energy efficiency.',
                    linkText: 'Read article',
            linkUrl: '../pages/papers/HT-project.pdf'

        },


        {
            image: '../images/project-image/rural-iot.png',
            meta: 'QPAIN 2025 · IEEE',
            title: 'IoT and Mobile App-Based Real-Time Remote E-Health Care System for Rural Communities in Bangladesh',
            overview: 'An IoT-based remote health monitoring system that measures body temperature, ECG and pulse with low-cost sensors (LM35, AD8232, SEN-11574) and sends the readings to the cloud for rural communities in Bangladesh. ' +
                'The system has three parts: patient condition detection, cloud data storage, and remote data viewing, so healthcare providers can follow patients without frequent hospital visits. ' +
                'It is non-invasive and built from locally available sensors, which makes it affordable and easy to deploy. Stored cloud data also allows longitudinal health analysis and prompt detection of abnormalities.',
            linkText: 'DOI: 10.1109/QPAIN66474.2025.11171985',
            linkUrl: 'https://ieeexplore.ieee.org/document/11171985'
        },
        {
            image: '../images/project-image/garbage.jpg',
            meta: 'QPAIN 2025 · IEEE',
            title: 'IoT-Based Smart Waste Management System Using NodeMCU and Cloud Computing: A Case Study at PUST',
            overview: 'A centralized waste management system using IoT and cloud computing, first deployed at Pabna University of Science and Technology with smart dustbins that report waste level and odor in real time. ' +
                'Each dustbin has two ultrasonic sensors, a gas sensor, a NodeMCU ESP8266 and a servo motor, and bins are placed at key campus locations such as the library, halls, cafeteria and academic buildings. ' +
                'Automated email alerts with precise bin locations help optimize collection routes, and a mobile app lets users find the nearest available dustbin. Cloud analytics support remote monitoring and predictive analysis for a cleaner, more sustainable campus.',
            linkText: 'DOI: 10.1109/QPAIN66474.2025.11171905',
            linkUrl: 'https://ieeexplore.ieee.org/document/11171905'
        },
        {
            image: '../images/project-image/highway-noise.png',
            meta: 'QPAIN 2025 · IEEE',
            title: 'An IoT-Based Smart Adaptive Highway Management System for Sound Pollution Reduction and Traffic Control',
            overview: 'An adaptive IoT system that reduces traffic noise by detecting excessive honking at intersections and adjusting traffic signals in response. ' +
                'LM393 sound sensors and a NodeMCU ESP8266 monitor noise levels in real time. When levels pass a set threshold, repeated honking during a red signal is penalized by extending the red duration as a deterrent. ' +
                'LED indicators and LCD screens show drivers the current signal state and a countdown timer.',
            linkText: 'DOI: 10.1109/QPAIN66474.2025.11172235',
            linkUrl: 'https://ieeexplore.ieee.org/document/11172235'
        },

        {
            image: '',
            meta: '',
            title: 'Development of Microcontroller Based Game Tic-Tac-Toe',
            overview: 'A playable Tic-Tac-Toe game built around a microcontroller, with LED/display feedback and button inputs.'
        },
        {
            image: '../images/project-image/vending.jpeg',
            meta: '',
            title: 'Design and Implementation of a Microcontroller-Based Automated Vending System for RTM Premises',
            overview: 'An automated vending machine controlled by a microcontroller, designed to dispense items reliably on the RTM campus.'
        },

    ];

    /* ===================== rendering (no need to edit below) ===================== */
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } [c]; }); }

    var grid = document.getElementById('projectGrid');
    if (!grid) return;

    grid.innerHTML = PROJECTS.map(function(p, i) {
        var delay = 'd' + ((i % 3) + 1) * 100;
        return '<article class="card project card-lift reveal scale-in ' + delay + '">' +
            '<div class="project-img">' +
            (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" onerror="this.style.display=\'none\'" />' : '') +
            '</div>' +
            '<div class="project-body">' +
            '<p class="project-meta mono small accent">' + esc(p.meta) + '</p>' +
            '<h3 class="serif">' + esc(p.title) + '</h3>' +
            '<p class="muted-text project-desc">' + esc(p.overview) + '</p>' +
            (p.linkUrl ? '<p class="project-extra mono small"><a class="underlined" target="_blank" rel="noopener" href="' + esc(p.linkUrl) + '">' + esc(p.linkText || p.linkUrl) + ' ↗</a></p>' : '') +
            '<button type="button" class="read-more mono small" aria-expanded="false">READ MORE ▾</button>' +
            '</div>' +
            '</article>';
    }).join('');

    /* Read more / Show less (one listener for every card, including ones added later) */
    grid.addEventListener('click', function(e) {
        var btn = e.target.closest ? e.target.closest('.read-more') : null;
        if (!btn) return;
        var card = btn.closest('.project');
        var open = card.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.textContent = open ? 'SHOW LESS ▴' : 'READ MORE ▾';
    });
})();