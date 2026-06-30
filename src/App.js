
import React, { useState, useEffect } from "react";
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

function useScrollReveal() {
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
}

const projects = [
  {
    title: "Campus Connect AI",
    desc: "AI-powered career co-pilot for engineering students — resume analyzer, career roadmap generator, mock interview practice, and opportunity matcher.",
    tags: ["React", "Tailwind CSS", "Node.js", "Claude API"],
    url: "https://github.com/thanuj0902/campus-connect-ai",
  },
  {
    title: "ForgaFlow",
    desc: "Config-driven full-stack app generator — creates frontend UI, backend APIs, database schemas, and auth from JSON configs.",
    tags: ["Next.js", "Express", "PostgreSQL"],
    url: "https://github.com/thanuj0902/ForgaFlow",
  },
  {
    title: "PayGrade",
    desc: "Level-based compensation intelligence platform for India's tech industry. Submit and compare salary data with standardized level mapping.",
    tags: ["Next.js", "Express", "PostgreSQL", "Prisma"],
    url: "https://github.com/thanuj0902/PayGrade",
  },
  {
    title: "TestForge",
    desc: "AI-Powered Test Case Generator — generates unit tests for JS, Python, Java, and Go using a rule engine with optional AI enhancement.",
    tags: ["React", "Vite", "Express", "Ollama"],
    url: "https://github.com/thanuj0902/TestForge",
  },
  {
    title: "AI Code Reviewer",
    desc: "AI-powered code review tool — paste code, get instant AI feedback on bugs, security, performance, and style.",
    tags: ["Spring Boot", "Next.js", "Gemini AI"],
    url: "https://github.com/thanuj0902/AI-code-reviewer",
  },
  {
    title: "Connect Four Game",
    desc: "Interactive Connect Four game built with React — player names, color selection, win detection, and live scoreboard.",
    tags: ["React"],
    url: "https://github.com/thanuj0902/Connect-Game",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
  "Java", "Spring Boot", "SQL", "PostgreSQL", "GitHub", "VS Code", "Render", "Vercel",
];

function App() {
  const [showTop, setShowTop] = useState(false);
  const subtitle = useTypewriter("Full Stack Developer | React | Spring Boot | Node.js", 40, 800);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h1 className="logo">Thanuj</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src={require("./thanuj.jpg")} alt="profile" className="profile-img" />
          <h2>Hello, I'm <span>Thanuj</span></h2>
          <p className="typewriter">{subtitle}<span className="cursor">|</span></p>
          <a href="#projects" className="btn">View Projects</a>
        </div>
      </header>

      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <p>
          BTech CSE student at Anil Neerukonda Institute of Technology & Sciences,
          passionate about full-stack development with React, Spring Boot, and Node.js.
          I build AI-powered tools, full-stack platforms, and interactive applications.
        </p>
      </section>

      <section id="education" className="section reveal">
        <h2>Education</h2>
        <div className="edu-card">
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
            <div className="card" key={i}>
              <div className="card-glow" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="card-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="tag">{t}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" className="card-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s, i) => (
            <span key={i} className="skill-badge" style={{ animationDelay: `${i * 0.05}s` }}>{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <div className="contact-card">
          <p>Email: <a href="mailto:mori.thanuj@gmail.com">mori.thanuj@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/thanuj0902" target="_blank" rel="noreferrer">github.com/thanuj0902</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mori-thanuj-460b55382" target="_blank" rel="noreferrer">mori-thanuj-460b55382</a></p>
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
