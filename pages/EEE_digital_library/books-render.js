/*
  DIGITAL LIBRARY — BOOK DATA
  ---------------------------
  To add a book, copy one object in the BOOKS array and update:
    title    : book title
    author   : author name
    category : one of your collection names
    driveUrl : Google Drive share link

  Google Drive tip:
  1. Open the book file in Google Drive.
  2. Click Share and set access to the people who should read it.
  3. Copy the link and paste it into driveUrl below.

  These are demonstration entries. Replace their Drive URLs and sample details
  with your actual books before publishing.
*/

const BOOKS = [
  // Electrical
  {
    title: "A Textbook of Electrical Technology Vol. 1",
    author: "B. L. Theraja",
    category: "Electrical",
    driveUrl: "https://drive.google.com/file/d/10lhEM1n6ZTN0KNTdTbYxR6s416rDodIA/view?usp=sharing"
  },

  {
    title: "Introductory Circuit Theory",
    author: "R. L. Boylestad",
    category: "Electrical",
    driveUrl: "https://drive.google.com/file/d/1cSOJW9vGhKNN088Nb_mYwbPmstuhR0Lb/view?usp=drive_link"
  },
  {
    title: "Alternating Current Circuits",
    author: "Corcoran and Kerchner",
    category: "Electrical",
    driveUrl: "https://drive.google.com/file/d/1fqljg0tLxu8noAmY60J-HBQFxTbveiCr/view?usp=drive_link"
  },
    {
    title: "Alternating Current Circuits-Solution",
    author: "Corcoran and Kerchner",
    category: "Electrical",
    driveUrl: "https://drive.google.com/file/d/1Je_FeCRyFAjivfQbksLcsnd9OPW--sQw/view?usp=drive_link"
  },

  {
    title: "Fundamentals of Electric Circuits Edition 5th",
    author: "Charles Alexander & Matthew Sadiku",
    category: "Electrical",
    driveUrl: "https://drive.google.com/file/d/1yL6vwHmzD79hb3fgvvzJWvr6tkKmJoVH/view?usp=drive_link"
  },

  // Electronics
  {
    title: "Principles of Electronics",
    author: "V. K. Mehta",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/13TYL6gDjsfnz0WCWafBECiHyFLoi7_eo/view?usp=drive_link"
  },
  {
    title: "Electronics Device and Circuits Theory Edition 11th",
    author: "R. Boylestad & L. Nashelsky",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1A4NRBfpWM5opHtm9oNXPkQCZ7ItF8jyR/view?usp=drive_link"
  },
  {
    title: "Handbook of Electronics",
    author: "S. L. Gupta & V. Kumar",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1U__V31OfhDXrF35q6DYgxXwD2OOOA7Yo/view?usp=drive_link"
  },
  {
    title: "Electronic Devices and Circuits",
    author: "David A. Bell",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1PbIPhr1-so3QwpPZIS5fKVvQmNI3ozPF/view?usp=sharing"
  },
  {
    title: "Electronics Devices and Circuits",
    author: "J. Millman & C. C. Halkias",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1lq2s_wS_jGhtwnkG3qyIAQPq5M32Wbfo/view?usp=drive_link"
  },

  {
    title: "Digital Systems: Principles & Applications",
    author: "Tocci, Widmer and Moss",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1qRaUi5uxF-QI8bCwv47n3ptvYHK_7rII/view?usp=drive_link"
  },
  {
    title: "Digital Logic and Computer Design",
    author: "Morris Mano",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1nQRl70TydnccWy-Ip8dGR6RCNAlyVZ_L/view?usp=drive_link"
  },
  {
    title: "Switching Theory & Digital Electronics",
    author: "V. K. Jain",
    category: "Electronics",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Vector and Tensor Analysis",
    author: "M. R. Spiegel",
    category: "Electronics",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Pulse, digital and switching waveforms",
    author: "Jacob Millman and Herbert Taub",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1rJR_18db84ISOKq1C_L7BoUjA-lkn4wA/view?usp=drive_link"
  },
  {
    title: "Pulse and digital electronics",
    author: "G. K. Mithal and A. K. Vanwasi",
    category: "Electronics",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Power Electronics: Circuits, Devices and Applications",
    author: "M. H. Rashid",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1P5ZccMb2bxU4qNwEBspLs_QZ_eDZN0R1/view?usp=drive_link"
  },
  {
    title: "Modern VLSI Design",
    author: "Wayne Wolf",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1ODikLuzuJwFQAimMB3PK_927PYdu8Zd1/view?usp=drive_link"
  },
  {
    title: "Semiconductor Devices: Physics and Technology",
    author: "S. M. Sze",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1kvtbPfKT6NWAPXgwlefFq2Jk0vAo-f2y/view?usp=drive_link"
  },
  {
    title: "Physics of Semiconductor Devices",
    author: "S.M. Sze and Kwok K. Ng",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1FVSe-GtWbHRWNplWF-W0BJ2YAw90IosB/view?usp=drive_link"
  },

  {
    title: "Microelectronic Circuits",
    author: "Adel S Sedra & Kenneth Carless Smith",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/18jGe18VbyYgteRTnkdBbJ5Nx_MQIj7en/view?usp=drive_link"
  },
  {
    title: "OP-AMPS and Linear Integrated Circuits – 3rd edition",
    author: "Ramakant Gayakwad",
    category: "Electronics",
    driveUrl: "https://drive.google.com/file/d/1-TRaujY5p7Riqq-6X1UVCyQIOwoJAGpV/view?usp=drive_link"
  },

  // Communication
  {
    title: "Microwave Engineering",
    author: "David M. Pozar",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1pSUIS3HWzhkkL9BPixkHrHpmDfIfyFxx/view?usp=drive_link"
  },
  {
    title: "Wireless Communication: Principles and Practice",
    author: "Theodore S. Rappaport",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1k3W1wL6GbharhLG4DR1PYjrsDjtgv_FK/view?usp=drive_link"
  },
  {
    title: "Radio Engineering",
    author: "G. K. Mithal",
    category: "Communication",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Antennas & Propagation",
    author: "K. D. Proshad",
    category: "Communication",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Communication Systems",
    author: "Simon Haykin",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/10pqH_VPo22exkxPsxdwuoUlmoHCGQDiM/view?usp=drive_link"
  },
  {
    title: "Radio & TV Engineering",
    author: "A. G. Mithal",
    category: "Communication",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Data Communications and Networking",
    author: "Behrouz A.Forouzan",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1lt2eYTfWzgjmukK_2iUH3nd6kHkLDy2t/view?usp=drive_link"
  },

  {
    title: "Mobile Cellular Telecommunications: Analog and Digital Systems",
    author: "William C. Y. Lee",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1CaMZfmHrehZTCQoxX1jwIhreug62G7fU/view?usp=drive_link"
  },
  {
    title: "Digital Communications",
    author: "Ian Glover, Peter Grant",
    category: "Communication",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Antenna Theory",
    author: "C. Balanis",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1lHGF6WtspthX78byHewtVXjjc8JQCSZy/view?usp=drive_link"
  },
  {
    title: "Modern Digital And Analog Communications Systems",
    author: "B.P.Lathi",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1FyoocUpVnajyVctTC92exLBR2ekxoqBi/view?usp=drive_link"
  },
  {
    title: "Telecommunication switching systems and networks",
    author: "Thiagarajan Viswanathan",
    category: "Communication",
    driveUrl: "https://drive.google.com/file/d/1EQO6G1NTm12kty5Bfp8fWoOfYT5aeKH0/view?usp=drive_link"
  },

  // Power
    {
    title: "Power System Analysis",
    author: "John Grainger, Jr.,William Stevenson",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1NZdwgI7AR_9DbT_ORhkVqyhUtAKonEgR/view?usp=drive_link"
  },
  {
    title: "Elements of Power System Analysis",
    author: "William D. Stevenson Jr.",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1n8jmPaGmbKKoO1oPoo77GKSo5W1UwFdD/view?usp=drive_link"
  },
  {
    title: "Principles of the Power System",
    author: "V.K. Mehta and Rohit Mehta",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1ZHTUuwCsK2XiheD1QgPzphs76MGryDNW/view?usp=drive_link"
  },
  {
    title: "Power System Engineering",
    author: "Kothari and Nagrath",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1o1eLt4X_1XKuVdHtuAfYrZuH1MeTjWu2/view?usp=drive_link"
  },
    {
    title: "Electrical Power Systems",
    author: "Debapriya Das",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1oJn0PpJQN0z3TWpkYdGigyHajMuzFRfH/view?usp=drive_link"
  },
  {
    title: "Electrical Power Systems",
    author: "Ashfaq Husain",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/13rywDZ5Pjn_RGXDMYlPQVi_hQC_m4Zxb/view?usp=drive_link"
  },
  {
    title: "Power System Analysis",
    author: "Hadi Saadat",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/134AftOANRcZWXgwHxhvlFpCjcjYOU562/view?usp=drive_link"
  },
  {
    title: "Power System Analysis Methods",
    author: "Dr. S Elangovan",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1kEDAjFce0bdVLgt4gV6urumHUtVzXgXI/view?usp=drive_link"
  },
  {
    title: "Measurement and Instrumentation Principles",
    author: "Alan S. Morris",
    category: "Power",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Electrical and Electronic Measurement and Instrumentation",
    author: "A.K. Sawhney",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1SzVj2ijQASENsuhLPDp-Qpbs_6Tc3nwb/view?usp=drive_link"
  },
  {
    title: "Switchgear protection and power systems",
    author: "Sunil S. Rao",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/19AWk3xvpc_BkFFuYlVVQrVktJLO_IvPN/view?usp=drive_link"
  },
  {
    title: "Power Station Engineering and Economy Chapter-30",
    author: "William A. Vopat",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/14SwnVW_r2FoSVRUMCKvXO7kZy8wl6KkX/view?usp=drive_link"
  },
    {
    title: "Power Station Engineering and Economy Chapter-32",
    author: "William A. Vopat",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1EEz1_FUeY6iAHomslYTRrzNOx8jDb3a2/view?usp=drive_link"
  },
  {
    title: "Power system protection and switchgear",
    author: "Bhuvanesh A. Oza",
    category: "Power",
    driveUrl: "https://drive.google.com/file/d/1Pk5jRw2x2x1NQBj9snWyS-nmzjgxIV6V/view?usp=drive_link"
  },

  // Machine
  {
    title: "A Textbook of Electrical Technology Vol. 2",
    author: "B. L. Theraja",
    category: "Machine",
    driveUrl: "https://drive.google.com/file/d/18_3S2GEx5jeIXp04Xv_tmkQh6HSFiUx1/view?usp=drive_link"
  },
  {
    title: "Electric Machinery Fundamentals",
    author: "Stephen J. Chapman",
    category: "Machine",
    driveUrl: "https://drive.google.com/file/d/1IgdUh-Fk7SbZiME4zJJTRl-Oj8Jzn3DP/view?usp=drive_link"
  },
  {
    title: "Electric Machines",
    author: "Charles I. Hubert",
    category: "Machine",
    driveUrl: "https://drive.google.com/file/d/1wNnepsrRKHKTzePfK3MUMVpRGtb0iPy9/view?usp=drive_link"
  },
  {
    title: "Principles Of Electrical Machines",
    author: "V.K. Mehta & Rohit Mehta",
    category: "Machine",
    driveUrl: "https://drive.google.com/file/d/1EW0NdVVPQjEuSMOZOB-0Ztuzfn1JIa_4/view?usp=drive_link"
  },

  // Signal & System
  {
    title: "Modern Control Engineering",
    author: "Katsuhiko Ogata",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1FXsFZq4MvEx5nOYKoijIAGcQqIXEXXFp/view?usp=drive_link"
  },
  {
    title: "Automatic Control System",
    author: "S Hasan Saeed",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1Qm7Ii0iu78MJLiRt3tIAcd1LPWpu-8_G/view?usp=drive_link"
  },
    {
    title: "Automatic Control Systems Edition 9th",
    author: "Benjamin C. Kuo",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1HL8mPr2aacHgx1lcyc-odlKyd89iZpG_/view?usp=drive_link"
  },
  {
    title: "Digital Signal Processing",
    author: "S Poornachandra & B Sasikala",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1uFf5uTp-dQpE8vwiJcgYSe_2Fgo1-jGa/view?usp=drive_link"
  },
  {
    title: "Signals & Systems",
    author: "Simon Haykin",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1EXIU1vwA3fmZ-vJa20M2-sNB7REMp6dz/view?usp=drive_link"
  },
  {
    title: "Digital Signal Processing",
    author: "S Salivahanan & C Gnanapriya",
    category: "Signal & System",
    driveUrl: "https://drive.google.com/file/d/1tUMr8QmfZw3VSwB1-cxPOfxvcXtCChIx/view?usp=drive_link"
  },

  // Pure Science Subjects
    {
    title: "Physics, Part-II",
    author: "D. Halliday and R. Resnick",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/17E6KgoNL1rb7y2l8Otac-ISjAdMKxVyS/view?usp=drive_link"
  },

  {
    title: "Waves and Oscillations",
    author: "Brij Lal and Subrahmonyam",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/1QIdVrl29UunE02tvQN-t_eJ06pfzzCDJ/view?usp=drive_link"
  },
  {
    title: "Atomic and Nuclear Physics",
    author: "N. Subrahmanyam & B. Lal",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Mechanics",
    author: "D.S. Mathur",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/1XALi41Sf_4RekF8zhf11qmad1RglwuSk/view?usp=drive_link"
  },
  {
    title: "Physics for Engineers, Part-I",
    author: "Dr. Gias Uddin",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/1ZwunqbHQo4lxhEkL0Rw_299pzA721MJQ/view?usp=drive_link"
  },
  {
    title: "Physics for Engineers, Part-II",
    author: "Dr. Gias Uddin",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/1VTJX-AjGdm8KZftqcYrTrOqk8OkmbjTs/view?usp=drive_link"
  },
  {
    title: "A Textbook of Optics",
    author: "Brijlal Subrahmanyam",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/file/d/1cLAhQfekBkEaakRMXm2VD-gYvqKre3O0/view?usp=drive_link"
  },
  {
    title: "Co-ordinate Geometry and Vector Analysis",
    author: "Rahman and Bhattacharjee",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Calculus",
    author: "H. Anton",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Calculus (Schaum's Outline of Calculus)",
    author: "F. Ayres",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Differential Equations",
    author: "S. L. Ross",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Modern Inorganic Chemistry",
    author: "R. D. Madan",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Introduction to Solid State Physics",
    author: "C. Kittle",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Solid State Physics",
    author: "M. A. Wahab",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Linear Algebra (Schaum's Outline of Calculus)",
    author: "M. R. Spiegel",
    category: "Pure Science Subjects",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },

  // English, Statistics
  {
    title: "Friends Language (Grammar, Reading Comprehension Writing Composition)",
    author: "Professor Dr. Johirul Haque",
    category: "English, Statistics",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },
  {
    title: "Introduction to Probability and Statistics",
    author: "D. V. Lindley",
    category: "English, Statistics",
    driveUrl: "https://drive.google.com/drive/my-drive"
  },

  // Programming
  {
    title: "Teach Yourself C",
    author: "H. Schildt",
    category: "Programming",
    driveUrl: "https://drive.google.com/file/d/1gTZIwVYdQl53MI6TNEDFHjdcNHX0s7Ix/view?usp=drive_link"
  },
  {
    title: "Programming in ANSI C",
    author: "E. Balagurusamy",
    category: "Programming",
    driveUrl: "https://drive.google.com/file/d/1DRChs1IfGaUGEdh06S4s_i_gFUBqqbIJ/view?usp=drive_link"
  },
  {
    title: "Object Oriented Programming C++",
    author: "E. Balagurusamy",
    category: "Programming",
    driveUrl: "https://drive.google.com/file/d/1X7HPOsNXoeH0WffYeN2V_A60tmHuadGF/view?usp=drive_link"
  },
  {
    title: "Java How to Program",
    author: "Deitel & Deitel",
    category: "Programming",
    driveUrl: "https://drive.google.com/file/d/1FVlcqnkRva7qh6cCk3AHg0jSvLhT7fsb/view?usp=drive_link"
  },
  {
    title: "Microprocessors & Interfacing",
    author: "Douglas V Hall & SSSP Rao",
    category: "Programming",
    driveUrl: "https://drive.google.com/file/d/1xcXXyahKdQMcKTFwMPXR3Mvs1ny6oBid/view?usp=drive_link"
  }
];

const BOOK_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/>
    <path d="M4 5.5v16M8 7h8M8 10h8"/>
  </svg>`;

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function validDriveUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && (
      parsed.hostname === "drive.google.com" ||
      parsed.hostname === "docs.google.com"
    );
  } catch {
    return false;
  }
}

// Books without a real Drive link yet open this page instead.
const STILL_SEARCHING_PAGE = "still-searching.html";

function hasRealDriveLink(book) {
  return validDriveUrl(book.driveUrl) && !book.driveUrl.includes("/drive/my-drive");
}

// One place that decides where a book opens: its Drive file, or the "still searching" page.
function bookLink(book) {
  return hasRealDriveLink(book) ? book.driveUrl : STILL_SEARCHING_PAGE;
}

function createBookCard(book) {
  const found = hasRealDriveLink(book);

  const card = document.createElement("a");
  card.className = "book-card";
  card.href = bookLink(book);
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", found
    ? `Open ${book.title} by ${book.author}`
    : `${book.title} by ${book.author} (still searching for this book)`);

  card.innerHTML = `
    <div class="book-top">
      <div class="book-symbol">${BOOK_ICON}</div>
      <span class="category-pill">${safeText(book.category)}</span>
    </div>
    <h2 class="book-title">${safeText(book.title)}</h2>
    <p class="book-author">By <strong>${safeText(book.author)}</strong></p>
    <div class="book-bottom">
      <span class="open-button">${found ? "Open book" : "Still searching"}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </span>
    </div>`;

  return card;
}

/* ---------- Library-wide search (shared by every page) ---------- */
function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Every word typed must appear somewhere in title, author or category.
// Pass a category to limit the search to one collection; omit it to search everything.
function searchBooks(query, category) {
  const terms = normalizeText(query).split(" ").filter(Boolean);
  return BOOKS.filter(book => {
    if (category && book.category.toLowerCase() !== category.toLowerCase()) return false;
    const haystack = normalizeText(`${book.title} ${book.author} ${book.category}`);
    return terms.every(term => haystack.includes(term));
  });
}

function initBookPage() {
  const heading = document.getElementById("categoryTitle");
  const grid = document.getElementById("bookGrid");
  if (!heading || !grid) return; // not the books page (e.g. EEE_digital_library.html)

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "Electrical";
  const search = document.getElementById("bookSearch");
  const count = document.getElementById("resultCount");
  const empty = document.getElementById("emptyState");

  search.value = params.get("q") || "";
  search.placeholder = "Search the whole library…";
  search.setAttribute("aria-label", "Search all books and authors in the library");

  function renderBooks() {
    const query = search.value.trim();
    const searching = query !== "";
    // Typing searches ALL collections; clearing the box returns to this collection.
    const filtered = searching ? searchBooks(query) : searchBooks("", category);

    heading.textContent = searching ? "Search Results" : `${category} Books`;
    document.title = searching
      ? `Search: ${query} | Digital Library`
      : `${category} Books | Digital Library`;

    grid.replaceChildren(...filtered.map(createBookCard));
    count.textContent = `${filtered.length} ${filtered.length === 1 ? "book" : "books"}` +
      (searching ? " across all collections" : "");
    empty.hidden = filtered.length !== 0;
  }

  search.addEventListener("input", renderBooks);
  renderBooks();
}

document.addEventListener("DOMContentLoaded", initBookPage);
