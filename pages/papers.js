/* =====================================================================
   ALL PAPER INFORMATION LIVES HERE.  research.html and paper.html read this file.

   TO ADD A PAPER
     1. Copy one { ... }, block below and paste it at the TOP of its list
        (newest first). Numbers and counts update automatically.
     2. type:  "journal"  or  "conference"
     3. tags:  use the keys from FILTERS below, e.g. ["ANTENNA", "5G"]
     4. status: "Accepted", "In review", "Presented" or "" (leave empty if none)
     5. doi: full link, or "" if there is none

   TO LINK A PDF
     Put the file in the  pages/Papers/  folder and write its path in pdf:
         pdf: "Papers/my-paper.pdf"
     Leave  pdf: ""  if you have no PDF yet (the paper then is not clickable).
     Use simple file names (no spaces) and match the capital letters exactly.
   ===================================================================== */

/* Filter buttons on the Research page: key = used in tags, label = text shown */
window.FILTERS = [
  { key: "ANTENNA", label: "Microwave Antenna" },
  { key: "PATCH_ANTENNA", label: "Patch Antenna" },
  { key: "GHZ", label: "GHz Frequency" },
  { key: "WLAN", label: "WLAN" },
  { key: "5G", label: "5G" },
  { key: "6G", label: "6G" },
  { key: "MMWAVE", label: "mmWave" },
  { key: "METAMATERIAL", label: "Meta Material" },
  { key: "BIOMEDICAL", label: "Biomedical" },
  { key: "TUMOR", label: "Tumor Detection" },
  { key: "THZ", label: "THz Antenna" },
  { key: "THZ_SENSOR", label: "THz Sensor" },
  { key: "PLASMONIC", label: "Plasmonic" },
  { key: "Photonics", label: "Photonics" },
  { key: "Meta-Absorber", label: "THz Meta-Absorber" },
  { key: "MICROCONTROLLER", label: "Microcontroller" },
  { key: "IOT", label: "IoT" },
  { key: "EMBEDDED", label: "Embedded System" },
  { key: "PROJECT", label: "Projects" }
];

window.PAPERS = [
  /* ================= JOURNAL ARTICLES ================= */
  {
    type: "journal",
    year: "2026",
    title: "A Triple-Band Terahertz Metamaterial Perfect Absorber for Biomedical Applications and Biomarker Detection",
    authors: "M. M. A. Mia, Md. R. Amin, S. S. Ahmed and Md. E. Ali",
    venue: "PLOS One, 2026",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR", "BIOMEDICAL"],
    status: "Published",
    doi: "https://doi.org/10.1371/journal.pone.0342575",
    pdf: "papers/PLOS_One.pdf"
  },
  {
    type: "journal",
    year: "2026",
    title: "Wideband Compact MIMO Antenna with High Isolation for WiFi-5/6 GHz, WLAN, C-Band, and IoT Applications",
    authors: "S.S. Ahmed, L.C. Paul, T. Rani, S. Gupta, M.A. Haque, S. Arefin, J. Rai, A. Hamdan",
    venue: "Nature, Scientific Reports",
    tags: ["ANTENNA", "GHZ", "WLAN", "IOT"],
    status: "Accepted",
    doi: "",
    pdf: ""
  },
  {
    type: "journal",
    year: "2026",
    title: "Triple-Band Terahertz Metamaterial Absorber for Label-Free Detection of Industrial Contaminants",
    authors: "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali",
    venue: "IOP Engineering Research Express, 2026",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR"],
    status: "In review",
    doi: "",
    pdf: ""
  },
  {
    type: "journal",
    year: "2026",
    title: "A Compact Wideband Patch Antenna with Parasitic Elements and Partial Ground Plane for Human Brain Tumor Detection",
    authors: "Sayed Shifat Ahmed, Liton Chandra Paul, Tithi Rani",
    venue: "Engineering, Technology & Applied Science Research, 2026",
    tags: ["ANTENNA", "PATCH_ANTENNA", "BIOMEDICAL", "TUMOR"],
    status: "In review",
    doi: "",
    pdf: ""
  },
  {
    type: "journal",
    year: "2025",
    title: "Highly sensitive Triple-Band Terahertz perfect metamaterial absorber for sensing applications in organic substance",
    authors: "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali",
    venue: "Physica Scripta, May 2025",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR"],
    status: "Published",
    doi: "https://doi.org/10.1088/1402-4896/adda9c",
    pdf: "papers/physica-scripta.pdf"
  },
  {
    type: "journal",
    year: "2024",
    title: "A Smart Medicine Reminder Kit with Mobile Phone Calls and Some Health Monitoring Features for Senior Citizens",
    authors: "L.C. Paul, S.S. Ahmed, T. Rani, M.A. Haque, T.K. Roy, M.N. Hossain and M.A. Hossain",
    venue: "Heliyon, vol. 10, no. 4, p. e26308, Feb. 2024, impact factor: 4.00",
    tags: ["BIOMEDICAL", "EMBEDDED"],
    status: "Published",
    doi: "https://doi.org/10.1016/j.heliyon.2024.e26308",
    pdf: "papers/Heliyon-2026.pdf"
  },

  /* ================= CONFERENCE PAPERS ================= */
  {
    type: "conference",
    year: "2026",
    title: "Design and Simulation of a Four-Port Dual-Wideband MIMO Antenna for 17– 45 GHz Microwave and Millimeter-Wave Applications",
    authors: "H. Islam, M.A. Awal, M.N. Hossain, S.S. Ahmed, M.M. Rahman, T. Shimamura",
    venue: "2026 14th International Conference on Electrical and Computer Engineering (ICECE), BUET, Dhaka, Bangladesh",
    tags: ["ANTENNA", "GHZ", "MMWAVE"],
    status: "In review",
    doi: "",
    pdf: ""
  },
  {
    type: "conference",
    year: "2026",
    title: "A Compact Dual Band Octagonal Shaped Patch Antenna for Ku band and 5G Band Applications",
    authors: "S.M.T. Ahmed, S.S. Ahmed, I.H. Sayem, L.C. Paul, M. M. Hassan, A.B.M. Azmol",
    venue: "IEEE International Conference on Microwave, Antennas, RF and Sensors (MARSCON 2026), Ahsanullah University of Science and Technology (AUST), Dhaka, Bangladesh",
    tags: ["ANTENNA", "PATCH_ANTENNA", "GHZ", "5G"],
    status: "Presented",
    doi: "",
    pdf: "papers/MARSCON-288.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "A Four-Element High Isolation UWB MIMO Antenna for Sub-6 GHz, WiMax, and WLAN Applications",
    authors: "S.M.T. Ahmed, L.C. Paul, S.S. Ahmed, T. Rani, M.M. Hassan, M.A.H. Rafi",
    venue: "IEEE International Conference on Microwave, Antennas, RF and Sensors (MARSCON 2026), Ahsanullah University of Science and Technology (AUST), Dhaka, Bangladesh",
    tags: ["ANTENNA", "GHZ", "WLAN", "5G"],
    status: "Presented",
    doi: "",
    pdf: "papers/MARSCON-189.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "An Inset-Fed Dual-Band T-Top Triangular Slotted Triangular-Shaped THz Antenna for High-Speed 6G/IoT Applications",
    authors: "S.S. Ahmed, T. Rani, L.C. Paul, S.M.T. Ahmed, M.A.H. Rafi, M.M. Hassan",
    venue: "29th International Conference on Computer and Information Technology (ICCIT 2026), Cox's Bazar, Bangladesh.",
    tags: ["THZ", "6G", "IOT"],
    status: "In review",
    doi: "",
    pdf: ""
  },
  {
    type: "conference",
    year: "2026",
    title: "A DGS-based Guitar-shaped Antenna for WiFi-2.4 GHz/ ZigBee/Bluetooth/ISM Band Applications",
    authors: "M.S. Pervez, S.A. Hye, L.C. Paul, S.S. Ahmed, T. Rani, M. Karaaslan",
    venue: "IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON) 2026",
    tags: ["ANTENNA", "GHZ", "WLAN"],
    status: "Presented",
    doi: "",
    pdf: "papers/PEEIACON-2026.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "Performance Analysis of a Compact Slotted Microstrip Patch Antenna for X-Band Communication Applications",
    authors: "S. S. Ahmed, M. N. Hossain, M. S. Hosain and T. Shimamura",
    venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), Pabna, Bangladesh, 2026, pp. 1-5",
    tags: ["ANTENNA", "PATCH_ANTENNA", "GHZ"],
    status: "Published",
    doi: "https://doi.org/10.1109/PECCII70991.2026.11662104",
    pdf: "papers/PECCII-213.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "A DGS-Based Symmetrical Patch THz Antenna for IoT and Future 6G Applications",
    authors: "S. S. Ahmed, S. M. T. Ahmed, M. M. Hassan, M. A. H. Rafi, T. Rani and L. C. Paul",
    venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), Pabna, Bangladesh, 2026, pp. 1-6",
    tags: ["THZ", "PATCH_ANTENNA", "6G", "IOT"],
    status: "Published",
    doi: "https://doi.org/10.1109/PECCII70991.2026.11661846",
    pdf: "papers/PECCII-396.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "Isolation-Enhanced Compact Four-Element MIMO Antenna for 5G NR Millimeter-Wave and D2D Applications",
    authors: "M. N. Hossain, M. S. Hossain, S. S. Ahmed and T. Shimamura",
    venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), Pabna, Bangladesh, 2026, pp. 1-6",
    tags: ["ANTENNA", "5G", "MMWAVE"],
    status: "Published",
    doi: "https://doi.org/10.1109/PECCII70991.2026.11661876",
    pdf: "papers/PECCII-212.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "Performance Analysis of an Eight-Element Triple-Band MIMO Antenna for 5G mmWave and Ka/Q-Band Satellite Communications",
    authors: "M. N. Hossain, M. Z. Islam, S. S. Ahmed and T. Shimamura",
    venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), Pabna, Bangladesh, 2026, pp. 1-6",
    tags: ["ANTENNA", "GHZ", "5G", "MMWAVE"],
    status: "Published",
    doi: "https://doi.org/10.1109/PECCII70991.2026.11661897",
    pdf: "papers/PECCII-214.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "A Compact Eight-Element UWB MIMO Antenna for Radar Imaging and High-Speed Wireless Communications",
    authors: "M. A. Awal, M. N. Hossain, S. S. Ahmed and T. Shimamura",
    venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), Pabna, Bangladesh, 2026, pp. 1-5",
    tags: ["ANTENNA"],
    status: "Published",
    doi: "https://doi.org/10.1109/PECCII70991.2026.11661955",
    pdf: "papers/PECCII-303.pdfx"
  },
  {
    type: "conference",
    year: "2026",
    title: "Miniaturized Triple-Wideband Double-Overlapped e-Shaped Antenna with Parasitic Elements for High-Speed THz Wireless Indoor Communications",
    authors: "L. C. Paul, S. S. Ahmed, T. Rani, S. A. Shezan, M. A. Haque and A. H. Alenezi",
    venue: "2026 13th International Conference on Electrical and Electronics Engineering (ICEEE), Antalya, Turkiye, 2026, pp. 358-362",
    tags: ["THZ"],
    status: "Published",
    doi: "https://doi.org/10.1109/ICEEE69936.2026.11598024",
    pdf: "papers/ICEEE-6.pdf"
  },
  {
    type: "conference",
    year: "2026",
    title: "A Super Wideband Miniaturized THz Antenna with a Slotted Partial Ground Plane for Ultra-high Speed 6G Communication Systems",
    authors: "L. C. Paul, S. S. Ahmed, T. Rani, S. A. Shezan, M. A. Haque and A. H. Alenezi",
    venue: "2026 13th International Conference on Electrical and Electronics Engineering (ICEEE), Antalya, Turkiye, 2026, pp. 349-353",
    tags: ["THZ", "6G"],
    status: "Published",
    doi: "https://doi.org/10.1109/ICEEE69936.2026.11598480",
    pdf: "papers/ICEEE-5.pdf"
  },
  {
    type: "conference",
    year: "2026",
    title: "A Miniaturized WBAN-Compatible Parasitic Patch Antenna for Non-Invasive Brain Tumor Localization",
    authors: "S. S. Ahmed, T. Rani, L. C. Paul, M. R. Kabir, A. Z. Abadin and A. K. Sarkar",
    venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), Chittagong, Bangladesh, 2026, pp. 1-5",
    tags: ["ANTENNA", "PATCH_ANTENNA", "BIOMEDICAL", "TUMOR"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN69676.2026.11546315",
    pdf: "papers/QPAIN-2590.pdf"
  },
  {
    type: "conference",
    year: "2026",
    title: "A Compact Wideband Slot-Modified Microstrip Antenna for WiFi-6/6E/7 and Emerging 6G WLAN Systems",
    authors: "S. S. Ahmed, S. M. T. Ahmed, L. C. Paul, M. N. Hossain, M. M. A. Mia and M. R. Amin",
    venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), Chittagong, Bangladesh, 2026, pp. 1-6",
    tags: ["ANTENNA", "PATCH_ANTENNA", "WLAN", "6G"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN69676.2026.11546524",
    pdf: "papers/QPAIN-4422.pdf"
  },
  {
    type: "conference",
    year: "2026",
    title: "Development of a Compact Slotted Patch Antenna for Early Stage Breast Tumor Detection Using Microwave Technology",
    authors: "S. S. Ahmed and A. K. Sarkar",
    venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), Chittagong, Bangladesh, 2026, pp. 1-6",
    tags: ["ANTENNA", "PATCH_ANTENNA", "BIOMEDICAL", "TUMOR"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN69676.2026.11545799",
    pdf: "papers/QPAIN-4367.pdf"
  },
  {
    type: "conference",
    year: "2026",
    title: "Low-profile wideband 1×2 array antenna for IEEE 802.11a/h/j/n/ac/ax WLAN applications",
    authors: "N. Rashid, T. Rani, L.C. Paul, S.C. Das, M.A. Haque, and S.S. Ahmed",
    venue: "Visual Sensing and Ubiquitous Computing, Boca Raton: CRC Press, 2026, pp. 105–115",
    tags: ["ANTENNA", "WLAN"],
    status: "Published",
    doi: "https://doi.org/10.1201/9781003485803-9",
    pdf: "papers/ICIEV-2023.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "An Efficient Miniaturized Tri-Band THz Antenna for Future 6G Systems and Beyond",
    authors: "S. S. Ahmed, S. M. T. Ahmed, S. Tabassum, M. A. H. Rafi, M. M. Hassan and M. S. Hossain",
    venue: "2025 IEEE International Women in Engineering Conference on Electrical and Computer Engineering (WIECON-ECE), Dhaka, Bangladesh, 2025, pp. 25-30",
    tags: ["THZ", "6G"],
    status: "Published",
    doi: "https://doi.org/10.1109/WIECON-ECE69386.2025.11526033",
    pdf: "papers/WIECON-38.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "Dual-Band Terahertz Metamaterial Absorber with Near-Unity Absorption for Explosive Identification",
    authors: "S. S. Ahmed, M. M. A. Mia, S. M. T. Ahmed, M. M. Hassan, M. S. Hossain and M. A. H. Rafi",
    venue: "2025 IEEE International Conference on Telecommunications and Photonics (ICTP), Dhaka, Bangladesh, 2025, pp. 261-265",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR"],
    status: "Published",
    doi: "https://doi.org/10.1109/ICTP68765.2025.11415011",
    pdf: "papers/ICTP-213.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "A Miniaturized Low-SAR Antenna for Breast Tumor Diagnosis",
    authors: "S. S. Ahmed, T. Rani, L. C. Paul, M. S. Pervez, A. Z. Abadin and A. K. Sarkar",
    venue: "2025 IEEE International Conference on Telecommunications and Photonics (ICTP), Dhaka, Bangladesh, 2025, pp. 196-200",
    tags: ["ANTENNA", "BIOMEDICAL", "TUMOR"],
    status: "Published",
    doi: "https://doi.org/10.1109/ICTP68765.2025.11414919",
    pdf: "papers/ICTP-168.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "A Compact High Gain Dual Band Square Slotted Octagonal Patch Antenna for X, Ku and Upper 5G Bands",
    authors: "S. M. T. Ahmed, S. S. Ahmed, S. Tabassum, M. A. H. Rafi, M. M. Hassan and M. S. Hossain",
    venue: "2025 7th International Conference on Electrical Information and Communication Technology (EICT), Khulna, Bangladesh, 2025, pp. 1-6",
    tags: ["ANTENNA", "PATCH_ANTENNA", "GHZ", "5G"],
    status: "Published",
    doi: "https://doi.org/10.1109/EICT68394.2025.11355565",
    pdf: "papers/EICT-2025.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "A Novel Modified Triangular Shaped Microstrip Patch Antenna for C-band Applications in Wireless and Satellite Communication",
    authors: "S. S. Ahmed, S. M. T. Ahmed, M. A. H. Rafi, M. M. Hassan, M. S. Hossain and S. Tabassum",
    venue: "2025 IEEE International Conference on Signal Processing, Information, Communication and Systems (SPICSCON), Rajshahi, Bangladesh, 2025, pp. 115-119",
    tags: ["ANTENNA", "PATCH_ANTENNA", "GHZ"],
    status: "Published",
    doi: "https://doi.org/10.1109/SPICSCON69221.2025.11504202",
    pdf: "papers/SPICSCON-366.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "Design and Performance Analysis of Slotted Patch Antenna for Sub-6 GHz 5G Communications",
    authors: "M. N. Hossain, S. S. Ahmed, M. S. Hosain and T. Shimamura",
    venue: "2025 IEEE International Conference on Signal Processing, Information, Communication and Systems (SPICSCON), Rajshahi, Bangladesh, 2025, pp. 827-830",
    tags: ["ANTENNA", "PATCH_ANTENNA", "GHZ", "5G"],
    status: "Published",
    doi: "https://doi.org/10.1109/SPICSCON69221.2025.11504164",
    pdf: "papers/SPICSCON-89.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "Highly Sensitive Multiband Terahertz Meta-Absorber with Concentric Resonators for Enhancing Virological and Biomolecular Sensing",
    authors: "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali",
    venue: "16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), Indore, Madhya Pradesh, India",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR", "BIOMEDICAL"],
    status: "Presented",
    doi: "",
    pdf: "papers/ICCCNT-2025.pdfx"
  },
  {
    type: "conference",
    year: "2025",
    title: "A Dual-band 10-element Antenna with Good Gain and Efficiency for ISM and Industrial Automation Applications",
    authors: "L.C. Paul, N. Rashid, T. Rani, M.A. Haque, S.S. Ahmed and S. Khatun",
    venue: "16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), Indore, Madhya Pradesh, India",
    tags: ["ANTENNA"],
    status: "Presented",
    doi: "",
    pdf: "papers/ICCCNT-8503.pdfx"
  },
  {
    type: "conference",
    year: "2025",
    title: "Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection",
    authors: "M. M. A. Mia, S. S. Ahmed, M. R. Amin, M. E. Ali and J. N. Novera",
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025, pp. 1-6",
    tags: ["METAMATERIAL", "Meta-Absorber", "THZ_SENSOR", "BIOMEDICAL", "TUMOR"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11172193",
    pdf: "papers/QPAIN-1657.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "IoT and Mobile App-Based Real-Time Remote E-Health Care System for Rural Communities in Bangladesh",
    authors: "M. R. Biswas, T. Rani, L. C. Paul, S. S. Ahmed, M. A. Haque and P. M. Ghosh",
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, pp. 1-6",
    tags: ["IOT", "BIOMEDICAL"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11171985",
    pdf: "papers/QPAIN-rasel.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "IoT-Based Smart Waste Management System Using NodeMCU and Cloud Computing: A Case Study at PUST",
    authors: "M. A. Hossain, L. C. Paul, T. Rani, S. S. Ahmed, M. A. Haque and J. K. Rai",
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, pp. 1-6",
    tags: ["IOT", "MICROCONTROLLER", "EMBEDDED"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11171905",
    pdf: "papers/QPAIN-arif.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "An IoT-Based Smart Adaptive Highway Management System for Sound Pollution Reduction and Traffic Control",
    authors: "M. H. Islam, T. Rani, L. C. Paul, S. S. Ahmed, M. A. Haque and M. S. Hosain",
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, pp. 1-6",
    tags: ["IOT"],
    status: "Published",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11172235",
    pdf: "papers/QPAIN-hafiz.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "A Novel Hybrid Plasmonic Waveguide for Nano-Scale Light Confinement and Long Propagation Range",
    authors: "A. Haque, H. R. Shipu, M. E. Ali, J. N. Novera, F. Mayoa, S. S. Ahmed, M. R. Amin",
    venue: "2025 International Conference on Electrical, Computer and Communication Engineering (ICECCE), Chittagong, Bangladesh, 2025, pp. 1-5",
    tags: ["PLASMONIC", "Photonics"],
    status: "Published",
    doi: "https://doi.org/10.1109/ECCE64574.2025.11013926",
    pdf: "papers/ICECCE-672.pdf"
  },
  {
    type: "conference",
    year: "2025",
    title: "AgriCall: An IoT-Integrated GSM-Based Irrigation Control System for Sustainable Agriculture",
    authors: "S.S. Ahmed, I.H. Sayem, M.T.A. Juwel, S. Ferdaus, M.A.H. Siam, S. Rahman, M.R. Amin",
    venue: "2nd Undergraduate Conference on Intelligent Computing and Systems (UCICS), Varendra University, Rajshahi, Bangladesh",
    tags: ["IOT", "EMBEDDED"],
    status: "Accepted",
    doi: "",
    pdf: "papers/UCICS-agricall.pdf"
  },
  {
    type: "conference",
    year: "2022",
    title: "Development of an Intravenous Fluid Monitoring, Warning, and Reverse Flow Blocking System",
    authors: "M. R. Kabir, S. S. Ahmed, L. C. Paul, T. Rani and M. Karaaslan",
    venue: "2022 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE), Naya Raipur, India, 2022, pp. 89-94",
    tags: ["BIOMEDICAL", "EMBEDDED"],
    status: "Published",
    doi: "https://doi.org/10.1109/WIECON-ECE57977.2022.10150612",
    pdf: "papers/WIECON-IV-fluid.pdf"
  },
  {
    type: "conference",
    year: "2021",
    title: "A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management",
    authors: "L.C. Paul, S. S. Ahmed and K. K. Karmakar",
    venue: "3rd Int’l Conf. on Trends in Computational and Cognitive Engineering, Malaysia, pp. 421-431, 21-22 October, Lecture Notes in Networks and Systems, vol. 348, Springer, 2021",
    tags: ["BIOMEDICAL", "EMBEDDED"],
    status: "Published",
    doi: "https://doi.org/10.1007/978-981-16-7597-3_35",
    pdf: "papers/ICTCCE-340-2021.pdf"
  }
];
