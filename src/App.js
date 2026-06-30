
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function useTypewriter(text, speed = 50, delay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return displayed;
}

const projects = [
  {
    title: "Campus Connect AI",
    desc: "AI-powered career co-pilot for engineering students — resume analyzer, career roadmap generator, mock interview practice, and opportunity matcher.",
    tags: ["React", "Tailwind CSS", "Node.js", "Claude API"],
    github: "https://github.com/thanuj0902/campus-connect-ai",
  },
  {
    title: "ForgaFlow",
    desc: "Config-driven full-stack app generator — creates frontend UI, backend APIs, database schemas, and auth from JSON configs.",
    tags: ["Next.js", "Express", "PostgreSQL"],
    github: "https://github.com/thanuj0902/ForgaFlow",
  },
  {
    title: "Connect Four Game",
    desc: "Interactive Connect Four game built with React — player names, color selection, win detection, and live scoreboard.",
    tags: ["React"],
    github: "https://github.com/thanuj0902/Connect-Game",
  },
  {
    title: "PayGrade",
    desc: "Level-based compensation intelligence platform for India's tech industry. Submit and compare salary data with standardized level mapping.",
    tags: ["Next.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/thanuj0902/PayGrade",
  },
  {
    title: "AI Code Reviewer",
    desc: "AI-powered code review tool — paste code, get instant AI feedback on bugs, security, performance, and style.",
    tags: ["Spring Boot", "Next.js", "Gemini AI"],
    github: "https://github.com/thanuj0902/AI-code-reviewer",
  },
  {
    title: "TestForge",
    desc: "AI-Powered Test Case Generator — generates unit tests for JS, Python, Java, and Go using a rule engine with optional AI enhancement.",
    tags: ["React", "Vite", "Express", "Ollama"],
    github: "https://github.com/thanuj0902/TestForge",
  },
];

const skillCategories = [
  {
    label: "Programming Languages",
    items: ["C", "C++", "Java", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Spring Boot"],
  },
  {
    label: "Database",
    items: ["SQL", "PostgreSQL", "Prisma"],
  },
  {
    label: "Tools & Cloud",
    items: ["GitHub", "VS Code", "Render", "Vercel"],
  },
];

function App() {
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const subtitle = useTypewriter("Full Stack Developer | React | Spring Boot | Node.js", 40, 800);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="portfolio">
      <div
        className="cursor-glow"
        style={{ left: mousePos.x - 150, top: mousePos.y - 150 }}
      />

      <nav className="navbar">
        <h1 className="logo">Thanuj</h1>
        <ul>
          {["about", "education", "projects", "skills", "contact"].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-content">
          <div className="profile-wrapper">
            <img src={require("./thanuj.jpg")} alt="profile" className="profile-img" />
          </div>
          <h2>Hello, I'm <span>Thanuj</span></h2>
          <p className="typewriter">{subtitle}<span className="cursor">|</span></p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </header>

      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            BTech CSE student at Anil Neerukonda Institute of Technology & Sciences,
            passionate about full-stack development with React, Spring Boot, and Node.js.
            I build AI-powered tools, full-stack platforms, and interactive applications.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">AI Apps</span>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section reveal">
        <h2>Education</h2>
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <h3>Anil Neerukonda Institute of Technology & Sciences</h3>
          <p className="edu-meta">BTech in Computer Science & Engineering | Visakhapatnam</p>
          <p className="edu-desc">
            Currently pursuing my bachelor's degree with a focus on full-stack development,
            AI tools, and modern web technologies.
          </p>
        </div>
      </section>

      <section id="projects" className="section reveal">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="card-glow" />
              <div className="card-header">
                <div className="card-icon">{(i % 2 === 0) ? "⚡" : "🛠️"}</div>
                <h3>{p.title}</h3>
              </div>
              <p>{p.desc}</p>
              <div className="card-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="tag">{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                  <span className="link-icon">⌨️</span> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillCategories.map((cat, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-group-title">{cat.label}</h3>
              <div className="skills">
                {cat.items.map((s, j) => (
                  <span key={j} className="skill-badge" style={{ animationDelay: `${(i * cat.items.length + j) * 0.06}s` }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:mori.thanuj@gmail.com">mori.thanuj@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🐙</span>
            <a href="https://github.com/thanuj0902" target="_blank" rel="noreferrer">github.com/thanuj0902</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a href="https://www.linkedin.com/in/mori-thanuj-460b55382" target="_blank" rel="noreferrer">mori-thanuj-460b55382</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Thanuj. All Rights Reserved.</p>
      </footer>

      {showTop && (
        <button className="top-btn" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
}

export default App;
