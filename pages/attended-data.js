/* =====================================================================
   EVERYTHING SHOWN ON THE "ATTENDED" PAGE LIVES HERE.
   attended.html reads this file – you never need to touch the HTML.

   TO ADD AN ENTRY
     Copy one { ... }, block, paste it anywhere in the list (the page sorts
     by year automatically, newest first), then edit the fields:

       year    : 2026
       type    : "conference" | "training" | "seminar"
       title   : name of the event / programme
       acronym : short name, e.g. "QPAIN"   ("" if none)
       host    : organiser / university / company   ("" if none)
       place   : "Dhaka, Bangladesh"                  ("" if none)
       papers  : ["Paper title 1", "Paper title 2"]   ([] if none)
       note    : one extra line of text               ("" if none)

   PROGRAMME COORDINATION (the highlighted box at the bottom) is the
   COORDINATION object at the end of this file.
   ===================================================================== */

window.ATTENDED = [

  /* ---------------- 2026 ---------------- */
  {
    year: 2026, type: "conference",
    title: "IEEE International Conference on Microwave, Antennas, RF and Sensors",
    acronym: "MARSCON 2026", host: "AUST", place: "Dhaka, Bangladesh",
    papers: [
      "A Four-Element High Isolation UWB MIMO Antenna for Sub-6 GHz, WiMax, and WLAN Applications",
      "A Compact Dual Band Octagonal Shaped Patch Antenna for Ku band and 5G Band Applications"
    ],
    note: ""
  },
  {
    year: 2026, type: "conference",
    title: "International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure",
    acronym: "PECCII-2026", host: "PUST", place: "Pabna, Bangladesh",
    papers: ["A DGS-Based Symmetrical Patch THz Antenna for IoT and Future 6G Applications"],
    note: ""
  },
  {
    year: 2026, type: "conference",
    title: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking",
    acronym: "QPAIN", host: "CUET", place: "Chittagong, Bangladesh",
    papers: [
      "A Miniaturized WBAN-Compatible Parasitic Patch Antenna for Non-Invasive Brain Tumor Localization",
      "A Compact Wideband Slot-Modified Microstrip Antenna for WiFi-6/6E/7 and Emerging 6G WLAN Systems",
      "Development of a Compact Slotted Patch Antenna for Early Stage Breast Tumor Detection Using Microwave Technology"
    ],
    note: ""
  },
  {
    year: 2026, type: "seminar",
    title: "IQAC Seminar",
    acronym: "", host: "RTM-AKTU", place: "",
    papers: [], note: ""
  },

  /* ---------------- 2025 ---------------- */
  {
    year: 2025, type: "conference",
    title: "6th IEEE International Conference on Telecommunications and Photonics",
    acronym: "ICTP", host: "BUET", place: "Dhaka, Bangladesh",
    papers: [
      "A Miniaturized Low-SAR Antenna for Breast Tumor Diagnosis",
      "Dual-Band Terahertz Metamaterial Absorber with Near-Unity Absorption for Explosive Identification"
    ],
    note: ""
  },
  {
    year: 2025, type: "conference",
    title: "11th IEEE International Women in Engineering Conference on Electrical and Computer Engineering 2025",
    acronym: "WIECON-ECE", host: "", place: "Cox’s Bazar, Bangladesh",
    papers: ["An Efficient Miniaturized Tri-band THz Antenna for Future 6G Systems and Beyond"],
    note: ""
  },
  {
    year: 2025, type: "conference",
    title: "IEEE International Conference on Signal Processing, Information, Communication and Systems 2025",
    acronym: "SPICSCON", host: "Rajshahi University", place: "Rajshahi, Bangladesh",
    papers: [
      "A Novel Modified Triangular shaped Microstrip Patch Antenna for C-band Applications in Wireless and Satellite Communication",
      "Design and Performance Analysis of Slotted Patch Antenna for Sub-6 GHz 5G Communications"
    ],
    note: ""
  },
  {
    year: 2025, type: "conference",
    title: "IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking",
    acronym: "QPAIN", host: "BAUST", place: "Rangpur, Bangladesh",
    papers: ["Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection"],
    note: ""
  },

  /* ---------------- 2022 ---------------- */
  {
    year: 2022, type: "training",
    title: "Operation and Maintenance of Kodda 150 MW Dual Fuel Power Plant",
    acronym: "", host: "B-R Powergen Limited", place: "Gazipur, Bangladesh",
    papers: [], note: ""
  },

  /* ---------------- 2020 ---------------- */
  {
    year: 2020, type: "conference",
    title: "3rd Int’l Conf. on Trends in Computational and Cognitive Engineering",
    acronym: "", host: "", place: "Malaysia",
    papers: ["A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management"],
    note: ""
  },

  /* ---------------- 2018 ---------------- */
  {
    year: 2018, type: "training",
    title: "Mobile Game Application & Animation Project",
    acronym: "", host: "ICT Ministry of Bangladesh", place: "",
    papers: [], note: ""
  }
];

/* The highlighted "Program Coordination" box */
window.COORDINATION = {
  heading: "Program Coordination",
  project: "Professional Assignment & Lab Report Cover Page Generator",
  session: "Summer 24, RTM-AKTU",
  team: [
    { name: "Sayed Shifat Ahmed", role: "Coach" },
    { name: "Md. Abed Hossain Siam", role: "Student, EEE Dept." }
  ]
};
