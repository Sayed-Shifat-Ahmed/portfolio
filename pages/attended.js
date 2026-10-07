/* =====================================================================
   EVERYTHING SHOWN ON THE "ATTENDED" PAGE LIVES HERE.

   TO ADD AN EVENT  – copy one { ... }, block into EVENTS, edit it. Order does not matter:
                      the page sorts by year (newest first) and numbers them automatically.
     type:   "conference" | "training" | "seminar" | "workshop" | "other"
     year:   2026
     name:   short headline, e.g. "MARSCON 2026"
     full:   full official name / organiser (optional, "" to skip)
     venue:  host institution, e.g. "AUST"            (optional)
     venueFull: long name of the host, shown on hover (optional)
     city:   "Dhaka"   (city/place, used for the "Places" strip; leave "" if unknown)
     country:"Bangladesh"
     papers: [ "paper title", ... ]  papers connected with this event (optional, [] if none)
   ===================================================================== */

window.EVENT_TYPES = {
  conference: { label: 'Conference', color: '#D4582A' },
  training:   { label: 'Training',   color: '#0E9AA7' },
  seminar:    { label: 'Seminar',    color: '#9B4DCA' },
  workshop:   { label: 'Workshop',   color: '#D4A017' },
  other:      { label: 'Other',      color: '#6B5B4E' }
};

window.EVENTS = [
  {
    type: 'conference', year: 2026, name: 'MARSCON 2026',
    full: 'IEEE International Conference on Microwave, Antennas, RF and Sensors',
    venue: 'AUST', venueFull: 'Ahsanullah University of Science and Technology', city: 'Dhaka', country: 'Bangladesh',
    papers: [
      'A Four-Element High Isolation UWB MIMO Antenna for Sub-6 GHz, WiMax, and WLAN Applications',
      'A Compact Dual Band Octagonal Shaped Patch Antenna for Ku band and 5G Band Applications'
    ]
  },
  {
    type: 'conference', year: 2026, name: 'PECCII 2026',
    full: 'International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure',
    venue: 'PUST', venueFull: 'Pabna University of Science and Technology', city: 'Pabna', country: 'Bangladesh',
    papers: [
      'A DGS-Based Symmetrical Patch THz Antenna for IoT and Future 6G Applications'
    ]
  },
  {
    type: 'conference', year: 2026, name: 'QPAIN 2026',
    full: '2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking',
    venue: 'CUET', venueFull: 'Chittagong University of Engineering and Technology', city: 'Chittagong', country: 'Bangladesh',
    papers: [
      'A Miniaturized WBAN-Compatible Parasitic Patch Antenna for Non-Invasive Brain Tumor Localization',
      'A Compact Wideband Slot-Modified Microstrip Antenna for WiFi-6/6E/7 and Emerging 6G WLAN Systems',
      'Development of a Compact Slotted Patch Antenna for Early Stage Breast Tumor Detection Using Microwave Technology'
    ]
  },
  {
    type: 'seminar', year: 2026, name: 'IQAC Seminar',
    full: 'Institutional Quality Assurance Cell seminar',
    venue: 'RTM-AKTU', venueFull: 'RTM Al-Kabir Technical University', city: 'Sylhet', country: 'Bangladesh',
    papers: []
  },
  {
    type: 'conference', year: 2025, name: 'ICTP 2025',
    full: '6th IEEE International Conference on Telecommunications and Photonics',
    venue: 'BUET', venueFull: 'Bangladesh University of Engineering and Technology', city: 'Dhaka', country: 'Bangladesh',
    papers: [
      'A Miniaturized Low-SAR Antenna for Breast Tumor Diagnosis',
      'Dual-Band Terahertz Metamaterial Absorber with Near-Unity Absorption for Explosive Identification'
    ]
  },
  {
    type: 'conference', year: 2025, name: 'WIECON-ECE 2025',
    full: '11th IEEE International Women in Engineering Conference on Electrical and Computer Engineering',
    venue: '', venueFull: '', city: "Cox's Bazar", country: 'Bangladesh',
    papers: [
      'An Efficient Miniaturized Tri-band THz Antenna for Future 6G Systems and Beyond'
    ]
  },
  {
    type: 'conference', year: 2025, name: 'SPICSCON 2025',
    full: 'IEEE International Conference on Signal Processing, Information, Communication and Systems',
    venue: 'Rajshahi University', venueFull: 'University of Rajshahi', city: 'Rajshahi', country: 'Bangladesh',
    papers: [
      'A Novel Modified Triangular shaped Microstrip Patch Antenna for C-band Applications in Wireless and Satellite Communication',
      'Design and Performance Analysis of Slotted Patch Antenna for Sub-6 GHz 5G Communications'
    ]
  },
  {
    type: 'conference', year: 2025, name: 'QPAIN 2025',
    full: 'IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking',
    venue: 'BAUST', venueFull: 'Bangladesh Army University of Science and Technology', city: 'Rangpur', country: 'Bangladesh',
    papers: [
      'Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection'
    ]
  },
  {
    type: 'training', year: 2022, name: 'Operation and Maintenance of Kodda 150 MW Dual Fuel Power Plant',
    full: '',
    venue: 'B-R Powergen Limited', venueFull: '', city: 'Gazipur', country: 'Bangladesh',
    papers: []
  },
  {
    type: 'conference', year: 2020, name: 'Trends in Computational and Cognitive Engineering',
    full: '3rd International Conference on Trends in Computational and Cognitive Engineering',
    venue: '', venueFull: '', city: 'Malaysia', country: 'Malaysia',
    papers: [
      'A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management'
    ]
  },
  {
    type: 'training', year: 2018, name: 'Mobile Game Application & Animation Project',
    full: '',
    venue: 'ICT Ministry of Bangladesh', venueFull: '', city: '', country: 'Bangladesh',
    papers: []
  }
];

/* "Program Coordination" card at the bottom of the page. Set to null to hide it. */
window.COORDINATION = {
  project: 'Professional Assignment & Lab Report Cover Page Generator',
  role: 'Coach',
  session: 'Summer 24',
  org: 'RTM-AKTU',
  team: [
    { name: 'Sayed Shifat Ahmed', role: 'Coach' },
    { name: 'Md. Abed Hossain Siam', role: 'Student, Dept. of EEE' }
  ]
};
