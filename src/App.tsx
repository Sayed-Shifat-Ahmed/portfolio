import { useState, useEffect, useRef } from "react";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const NAV_LINKS = [
  { label: "About",        color: "#4F6DF5", hover: "#3D5CE0" },
  { label: "Research",     color: "#D4582A", hover: "#BC4A22" },
  { label: "Teaching",     color: "#2A9D6E", hover: "#228A5F" },
  { label: "Scholarships", color: "#9B4DCA", hover: "#8A3DB8" },
  { label: "Life",         color: "#D4A017", hover: "#B88A10" },
];

const PAPERS = [
  {
    year: "2024",
    title: "Contextual Embedding Alignment in Low-Resource Language Models",
    journal: "Nature Machine Intelligence",
    doi: "10.1038/s42256-024-0812-4",
    tags: ["NLP", "Multilingual AI"],
    cited: 41,
  },
  {
    year: "2023",
    title: "Epistemic Uncertainty Quantification in Deep Neural Forecasting",
    journal: "Journal of Machine Learning Research",
    doi: "10.5555/jmlr.v24.22-1039",
    tags: ["Deep Learning", "Uncertainty"],
    cited: 87,
  },
  {
    year: "2023",
    title: "Graph-Based Curriculum Design for Adaptive Learning Systems",
    journal: "Computers & Education",
    doi: "10.1016/j.compedu.2023.04.009",
    tags: ["EdTech", "Graph Neural Networks"],
    cited: 55,
  },
  {
    year: "2022",
    title: "Federated Privacy Preservation in Clinical Imaging Pipelines",
    journal: "The Lancet Digital Health",
    doi: "10.1016/S2589-7500(22)00193-5",
    tags: ["Federated Learning", "Healthcare"],
    cited: 134,
  },
  {
    year: "2021",
    title: "Temporal Causal Inference from Observational Time-Series Data",
    journal: "Annals of Statistics",
    doi: "10.1214/21-AOS2073",
    tags: ["Causal Inference", "Statistics"],
    cited: 202,
  },
];

const COURSES = [
  {
    code: "CS 6420",
    name: "Advanced Machine Learning",
    level: "Graduate",
    enrolled: 38,
    semester: "Fall 2025",
    desc: "Probabilistic models, Bayesian inference, and modern deep learning architectures. Emphasis on reproducible research.",
  },
  {
    code: "CS 3210",
    name: "Data Structures & Algorithms",
    level: "Undergraduate",
    enrolled: 112,
    semester: "Spring 2026",
    desc: "Foundational algorithmic thinking with proofs, complexity analysis, and hands-on implementation in Python and C++.",
  },
  {
    code: "CS 5850",
    name: "Ethics in Artificial Intelligence",
    level: "Graduate",
    enrolled: 29,
    semester: "Fall 2025",
    desc: "Fairness, accountability, and transparency in AI systems. Multidisciplinary perspectives from philosophy, law, and engineering.",
  },
];

const SCHOLARSHIPS = [
  {
    name: "Fulbright Scholar Program",
    org: "U.S. Department of State",
    year: "2026 – Active Application",
    status: "applied",
    desc: "Collaborative research on multilingual AI accessibility with partner institutions in Southeast Asia.",
  },
  {
    name: "Marie Skłodowska-Curie Fellowship",
    org: "European Research Council",
    year: "2025",
    status: "awarded",
    desc: "Awarded for cross-disciplinary research bridging computational linguistics and cognitive science.",
  },
  {
    name: "NSF CAREER Award",
    org: "National Science Foundation",
    year: "2023",
    status: "awarded",
    desc: "Five-year grant supporting early-career faculty in foundational AI research and STEM education.",
  },
  {
    name: "Google Research Scholar Grant",
    org: "Google",
    year: "2022",
    status: "awarded",
    desc: "Unrestricted gift supporting research in responsible machine learning systems.",
  },
];

const LIFE = [
  {
    label: "Origin",
    value: "Dhaka, Bangladesh",
    img: "photo-1576610616656-d3aa5d1f4534",
    alt: "City street at dusk with warm lights",
  },
  {
    label: "Hiking",
    value: "Pacific Crest Trail enthusiast — 400+ miles logged",
    img: "photo-1551632811-561732d1e306",
    alt: "Mountain trail through pine forest",
  },
  {
    label: "Reading",
    value: "Philosophy of mind, speculative fiction, history of science",
    img: "photo-1481627834876-b7833e8f5570",
    alt: "Stack of open books on a wooden table",
  },
  {
    label: "Music",
    value: "Amateur classical guitarist since age nine",
    img: "photo-1510915361894-db8b60106cb1",
    alt: "Acoustic guitar close-up",
  },
];

function NavTab({
  item,
  active,
  onClick,
}: {
  item: { label: string; color: string; hover: string };
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const bg = active ? item.color : hovered ? item.hover : "transparent";
  const textColor = active || hovered ? "white" : "var(--ink-light)";
  const border = active || hovered ? "none" : `1px solid var(--border)`;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-sm font-medium transition-all duration-200"
      style={{
        backgroundColor: bg,
        color: textColor,
        border,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.04em",
        padding: "6px 14px",
        transform: active ? "translateY(-1px)" : hovered ? "translateY(-1px)" : "none",
        boxShadow: active ? `0 4px 12px ${item.color}55` : hovered ? `0 4px 12px ${item.color}44` : "none",
      }}
    >
      {item.label}
    </button>
  );
}

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(244,239,228,0.94)" }}
      className="sticky top-0 z-50 backdrop-blur-sm"
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="serif font-semibold text-lg tracking-tight transition-all duration-300 hover:tracking-wide cursor-default" style={{ color: "var(--accent)" }}>
          Dr. Arif Rahman
        </span>
        {/* desktop */}
        <ul className="hidden md:flex gap-2">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <NavTab item={item} active={active === item.label} onClick={() => setActive(item.label)} />
            </li>
          ))}
        </ul>
        {/* mobile toggle */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-5 h-px" style={{ backgroundColor: "var(--ink)" }} />
          ))}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-wrap gap-2">
          {NAV_LINKS.map((item) => (
            <NavTab
              key={item.label}
              item={item}
              active={active === item.label}
              onClick={() => { setActive(item.label); setOpen(false); }}
            />
          ))}
        </div>
      )}
    </header>
  );
}

function Hero({ setActive }: { setActive: (s: string) => void }) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-5 gap-12 items-center">
      <div className="md:col-span-3">
        <p className="mono text-xs tracking-widest mb-5 animate-slide-right" style={{ color: "var(--accent-light)" }}>
          RESEARCHER · EDUCATOR · SCHOLAR
        </p>
        <h1 className="serif font-semibold leading-tight mb-6 animate-fade-up delay-100" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", color: "var(--ink)" }}>
          Arif Rahman,{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            Ph.D.
          </span>
        </h1>
        <p className="text-lg leading-relaxed mb-4 animate-fade-up delay-200" style={{ color: "var(--ink-light)", maxWidth: "48ch" }}>
          Associate Professor of Computer Science at{" "}
          <strong>University of Washington</strong>. I study machine learning systems, AI fairness, and the intersection of computation and human language.
        </p>
        <p className="text-base leading-relaxed mb-8 animate-fade-up delay-300" style={{ color: "var(--muted)", maxWidth: "46ch" }}>
          19 peer-reviewed publications · 500+ citations · 4 funded grants
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
          <button
            onClick={() => setActive("Research")}
            className="px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85 hover:scale-105 active:scale-95"
            style={{ backgroundColor: "var(--accent)", color: "white", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
          >
            VIEW RESEARCH →
          </button>
          <button
            onClick={() => setActive("Scholarships")}
            className="px-6 py-3 text-sm font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ borderColor: "var(--border)", color: "var(--ink-light)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
          >
            SCHOLARSHIPS
          </button>
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 animate-scale-in delay-300">
        <div
          className="overflow-hidden animate-float"
          style={{ borderRadius: "2px", height: "340px", backgroundColor: "var(--border)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&h=680&fit=crop&auto=format"
            alt="Arif Rahman, researcher and professor"
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
          />
        </div>
        <div
          className="p-4 flex gap-6 animate-fade-up delay-500"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
        >
          {[["UW", "University of\nWashington"], ["CSE", "Paul G. Allen\nSchool"], ["B'24", "Fulbright\nApplicant"]].map(([code, label]) => (
            <div key={code} className="transition-transform duration-200 hover:scale-105">
              <p className="mono text-xs font-medium" style={{ color: "var(--accent)" }}>{code}</p>
              <p className="text-xs leading-snug mt-0.5 whitespace-pre-line" style={{ color: "var(--muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-20">
      <div className={`grid md:grid-cols-3 gap-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="md:col-span-1">
          <p className="mono text-xs tracking-widest mb-3" style={{ color: "var(--accent-light)" }}>BACKGROUND</p>
          <h2 className="serif font-semibold text-3xl leading-snug" style={{ color: "var(--ink)" }}>Where I come from, and why it matters.</h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-base leading-relaxed" style={{ color: "var(--ink-light)" }}>
          <p>
            I grew up in Dhaka, Bangladesh, where unreliable internet access and scarce computational resources first made me aware that AI systems are not equally accessible to everyone. That experience shaped my research agenda: I work on machine learning approaches that perform well even with limited data, underrepresented languages, and constrained compute environments.
          </p>
          <p>
            I completed my B.Sc. in Computer Science at BUET (2012), then moved to the United States for doctoral work at Carnegie Mellon University, where I earned my Ph.D. in Machine Learning in 2018 under Professor Emma Brunskill. After a postdoctoral fellowship at MIT CSAIL, I joined the University of Washington faculty in 2020.
          </p>
          <p>
            Beyond the research lab, I care deeply about teaching. I believe rigorous theory and genuine curiosity are not opposites — they reinforce each other — and I try to model that in every course I teach.
          </p>
          <div
            className="border-l-2 pl-5 py-1 mt-6 italic serif text-lg"
            style={{ borderColor: "var(--accent)", color: "var(--ink)" }}
          >
            "The purpose of a university is to make students safe for ideas — not ideas safe for students."
            <span className="block mt-1 not-italic text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--muted)" }}>— Clark Kerr</span>
          </div>
        </div>
      </div>
      {/* Timeline */}
      <div className="mt-16 grid md:grid-cols-4 gap-0" style={{ borderTop: "1px solid var(--border)" }}>
        {[
          { year: "2012", label: "B.Sc. BUET, Dhaka" },
          { year: "2018", label: "Ph.D. CMU Machine Learning" },
          { year: "2020", label: "Postdoc, MIT CSAIL" },
          { year: "2020 →", label: "Assoc. Prof., UW CSE" },
        ].map((item, i) => (
          <div key={item.year} className={`pt-6 pr-6 card-lift ${visible ? `animate-fade-up delay-${(i + 2) * 100}` : "opacity-0"}`} style={{ borderRight: "1px solid var(--border)" }}>
            <p className="mono text-xs font-medium mb-1" style={{ color: "var(--accent)" }}>{item.year}</p>
            <p className="text-sm leading-snug" style={{ color: "var(--ink-light)" }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Research() {
  const { ref, visible: inView } = useFadeIn();
  const [filter, setFilter] = useState("All");
  const tags = ["All", "NLP", "Deep Learning", "Healthcare", "Causal Inference", "EdTech"];
  const visible = filter === "All" ? PAPERS : PAPERS.filter((p) => p.tags.includes(filter));

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-20">
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <div>
          <p className="mono text-xs tracking-widest mb-2" style={{ color: "var(--accent-light)" }}>PUBLICATIONS</p>
          <h2 className="serif font-semibold text-3xl" style={{ color: "var(--ink)" }}>Selected Research Papers</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="mono text-xs px-3 py-1.5 transition-all duration-150"
              style={{
                backgroundColor: filter === t ? "var(--accent)" : "transparent",
                color: filter === t ? "white" : "var(--muted)",
                border: `1px solid ${filter === t ? "var(--accent)" : "var(--border)"}`,
                letterSpacing: "0.03em",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
        {visible.map((paper, i) => (
          <div
            key={i}
            className={`py-7 grid md:grid-cols-12 gap-4 group transition-all duration-200 hover:bg-white hover:px-4 hover:-mx-4 ${inView ? `animate-fade-up delay-${Math.min(i * 100, 600)}` : "opacity-0"}`}
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="md:col-span-1">
              <span className="mono text-xs" style={{ color: "var(--muted)" }}>{paper.year}</span>
            </div>
            <div className="md:col-span-8">
              <h3 className="serif text-xl font-medium leading-snug mb-2 group-hover:underline decoration-dotted" style={{ color: "var(--ink)" }}>
                {paper.title}
              </h3>
              <p className="text-sm italic mb-3" style={{ color: "var(--muted)" }}>{paper.journal}</p>
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="mono text-xs px-2 py-0.5" style={{ backgroundColor: "var(--border)", color: "var(--ink-light)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col items-end gap-2 text-right">
              <span className="mono text-xs" style={{ color: "var(--accent)" }}>
                {paper.cited} citations
              </span>
              <a
                href={`https://doi.org/${paper.doi}`}
                className="mono text-xs underline decoration-dotted"
                style={{ color: "var(--muted)" }}
                target="_blank"
                rel="noreferrer"
              >
                DOI →
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
        Full publication list available on{" "}
        <a href="https://scholar.google.com" className="underline decoration-dotted" style={{ color: "var(--accent)" }} target="_blank" rel="noreferrer">
          Google Scholar
        </a>{" "}
        and{" "}
        <a href="https://arxiv.org" className="underline decoration-dotted" style={{ color: "var(--accent)" }} target="_blank" rel="noreferrer">
          arXiv
        </a>.
      </p>
    </section>
  );
}

function Teaching() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="mono text-xs tracking-widest mb-2" style={{ color: "var(--accent-light)" }}>UNIVERSITY OF WASHINGTON</p>
        <h2 className="serif font-semibold text-3xl mb-4" style={{ color: "var(--ink)" }}>Teaching</h2>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--ink-light)" }}>
          I teach across the undergraduate and graduate levels, with an emphasis on mathematical rigor, practical implementation, and ethical reasoning. Student evaluations consistently rank my courses above departmental average.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {COURSES.map((c, i) => (
          <div
            key={c.code}
            className={`p-6 flex flex-col gap-3 card-lift ${visible ? `animate-scale-in delay-${(i + 1) * 100}` : "opacity-0"}`}
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start justify-between">
              <span className="mono text-xs font-medium" style={{ color: "var(--accent)" }}>{c.code}</span>
              <span
                className="mono text-xs px-2 py-0.5"
                style={{
                  backgroundColor: c.level === "Graduate" ? "var(--ink)" : "var(--border)",
                  color: c.level === "Graduate" ? "white" : "var(--muted)",
                }}
              >
                {c.level.toUpperCase()}
              </span>
            </div>
            <h3 className="serif text-lg font-semibold leading-snug" style={{ color: "var(--ink)" }}>{c.name}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
            <div className="mt-auto pt-4 flex justify-between text-xs mono" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
              <span>{c.semester}</span>
              <span>{c.enrolled} enrolled</span>
            </div>
          </div>
        ))}
      </div>
      {/* Teaching philosophy */}
      <div className="grid md:grid-cols-2 gap-10 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div>
          <h3 className="serif text-xl font-semibold mb-4" style={{ color: "var(--ink)" }}>Teaching Philosophy</h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink-light)" }}>
            I structure courses around first principles. Rather than teaching students which tool to reach for, I try to cultivate the intuition to know <em>why</em> a tool works — and when to abandon it.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--ink-light)" }}>
            Every major assignment in my courses involves a written reflection component alongside the technical deliverable. Engineering without articulation is incomplete.
          </p>
        </div>
        <div>
          <h3 className="serif text-xl font-semibold mb-4" style={{ color: "var(--ink)" }}>Student Mentorship</h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink-light)" }}>
            I currently advise 6 Ph.D. students and 3 M.S. researchers. Alumni have gone on to positions at DeepMind, Stanford, CMU, and leading hospitals.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[["6", "Ph.D. Advisees"], ["3", "M.S. Researchers"], ["14", "Alumni Placed"]].map(([n, l]) => (
              <div key={l}>
                <p className="serif text-3xl font-semibold" style={{ color: "var(--accent)" }}>{n}</p>
                <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Scholarships() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="mono text-xs tracking-widest mb-2" style={{ color: "var(--accent-light)" }}>GRANTS & FELLOWSHIPS</p>
        <h2 className="serif font-semibold text-3xl mb-4" style={{ color: "var(--ink)" }}>Scholarships & Funding</h2>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--ink-light)" }}>
          I actively pursue external funding to support my lab, students, and collaborative international research programs.
        </p>
      </div>
      <div className="space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
        {SCHOLARSHIPS.map((s, i) => (
          <div
            key={i}
            className={`py-8 grid md:grid-cols-12 gap-4 transition-all duration-200 hover:bg-white hover:px-4 hover:-mx-4 ${visible ? `animate-slide-right delay-${i * 120}` : "opacity-0"}`}
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="md:col-span-1 flex items-start pt-1">
              <span
                className={`mono text-xs px-2 py-0.5 ${s.status === "applied" ? "animate-pulse-ring" : ""}`}
                style={{
                  backgroundColor: s.status === "awarded" ? "var(--accent)" : "transparent",
                  color: s.status === "awarded" ? "white" : "var(--accent)",
                  border: s.status !== "awarded" ? "1px solid var(--accent)" : "none",
                  display: "inline-block",
                }}
              >
                {s.status === "awarded" ? "✓" : "…"}
              </span>
            </div>
            <div className="md:col-span-7">
              <h3 className="serif text-xl font-semibold mb-1" style={{ color: "var(--ink)" }}>{s.name}</h3>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>{s.org}</p>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-light)" }}>{s.desc}</p>
            </div>
            <div className="md:col-span-4 text-right">
              <p className="mono text-xs" style={{ color: "var(--muted)" }}>{s.year}</p>
              <p className="mono text-xs mt-1 capitalize" style={{ color: s.status === "awarded" ? "var(--accent)" : "var(--accent-light)" }}>
                {s.status === "applied" ? "Application Submitted" : "Awarded"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-12 p-8"
        style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h3 className="serif text-xl font-semibold mb-3" style={{ color: "var(--ink)" }}>Currently Seeking</h3>
        <p className="text-base leading-relaxed" style={{ color: "var(--ink-light)" }}>
          I am actively applying for the <strong>2026–27 Fulbright Scholar Program</strong> to conduct collaborative AI accessibility research in Southeast Asia. If you represent a partner institution interested in hosting or collaborating, I welcome contact.
        </p>
        <div className="mt-5 flex gap-4">
          <a
            href="mailto:arif@cs.uw.edu"
            className="mono text-xs px-4 py-2"
            style={{ backgroundColor: "var(--accent)", color: "white", letterSpacing: "0.04em" }}
          >
            CONTACT ME →
          </a>
          <a
            href="#"
            className="mono text-xs px-4 py-2"
            style={{ border: "1px solid var(--border)", color: "var(--ink-light)", letterSpacing: "0.04em" }}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}

function Life() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="mono text-xs tracking-widest mb-2" style={{ color: "var(--accent-light)" }}>BEYOND THE LAB</p>
        <h2 className="serif font-semibold text-3xl mb-4" style={{ color: "var(--ink)" }}>Life & Interests</h2>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--ink-light)" }}>
          Research does not happen in a vacuum. My curiosity about the world — its geography, its stories, its sounds — shapes the questions I bring to my work.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {LIFE.map((item, i) => (
          <div key={item.label} className={`group overflow-hidden card-lift ${visible ? `animate-fade-up delay-${i * 150}` : "opacity-0"}`} style={{ backgroundColor: "var(--border)" }}>
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <img
                src={`https://images.unsplash.com/${item.img}?w=700&h=480&fit=crop&auto=format`}
                alt={item.alt}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-5">
              <p className="mono text-xs mb-1" style={{ color: "var(--accent)" }}>{item.label.toUpperCase()}</p>
              <p className="text-base" style={{ color: "var(--ink-light)" }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Values */}
      <div className="pt-10" style={{ borderTop: "1px solid var(--border)" }}>
        <h3 className="serif text-xl font-semibold mb-8" style={{ color: "var(--ink)" }}>What I believe</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "◎", title: "Open Science", body: "All code and data from my lab are released publicly. Science cannot advance behind paywalls." },
            { icon: "⌗", title: "Accessibility First", body: "AI systems should work for people in Dhaka as well as they do for people in Seattle." },
            { icon: "△", title: "Student-Centered", body: "A professor's most durable publication is a well-trained student with the courage to ask hard questions." },
          ].map((v) => (
            <div key={v.title} className="p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="block text-2xl mb-4" style={{ color: "var(--accent)" }}>{v.icon}</span>
              <h4 className="serif text-lg font-semibold mb-2" style={{ color: "var(--ink)" }}>{v.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-8" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--ink)" }}>
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="serif text-xl font-semibold mb-2" style={{ color: "var(--cream)" }}>Dr. Arif Rahman</p>
          <p className="text-sm leading-relaxed" style={{ color: "#8B7D72" }}>
            Associate Professor of Computer Science<br />
            University of Washington, Seattle
          </p>
        </div>
        <div>
          <p className="mono text-xs tracking-widest mb-4" style={{ color: "#8B7D72" }}>CONTACT</p>
          <ul className="space-y-2 text-sm" style={{ color: "#C4B5AB" }}>
            <li><a href="mailto:arif@cs.uw.edu" className="hover:underline">arif@cs.uw.edu</a></li>
            <li>Paul G. Allen Center, Room 474</li>
            <li>185 Stevens Way NE, Seattle, WA</li>
          </ul>
        </div>
        <div>
          <p className="mono text-xs tracking-widest mb-4" style={{ color: "#8B7D72" }}>PROFILES</p>
          <ul className="space-y-2 text-sm" style={{ color: "#C4B5AB" }}>
            {["Google Scholar", "arXiv", "GitHub", "LinkedIn"].map((p) => (
              <li key={p}><a href="#" className="hover:underline">{p} →</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-6">
        <p className="mono text-xs" style={{ color: "#5C4F47" }}>© 2026 Arif Rahman — University of Washington</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("About");
  const [key, setKey] = useState(0);

  const handleNav = (section: string) => {
    setActive(section);
    setKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    switch (active) {
      case "Research": return <Research />;
      case "Teaching": return <Teaching />;
      case "Scholarships": return <Scholarships />;
      case "Life": return <Life />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-full flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <NavBar active={active} setActive={handleNav} />
      <Hero setActive={handleNav} />
      <div key={key} className="animate-fade-in" style={{ borderTop: "1px solid var(--border)" }}>
        {renderSection()}
      </div>
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
