
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="portfolio">
      <header className="hero">
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

        <div className="hero-content">
          <img
           src={require("./thanuj.jpg")}
            alt="profile"
            className="profile-img"
          />
          <h2>Hello, I'm <span>Thanuj</span></h2>
          <p>
            Full Stack Developer | React | Spring Boot | Node.js
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
          <p>
            BTech CSE student at Anil Neerukonda Institute of Technology & Sciences,
            passionate about full-stack development with React, Spring Boot, and Node.js.
            I build AI-powered tools, full-stack platforms, and interactive applications.
          </p>
      </section>

      <section id="education" className="section fade-in">
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

      <section id="projects" className="section fade-in">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>ForgaFlow</h3>
            <p>
              Config-driven full-stack app generator — creates frontend UI, backend APIs, database schemas, and auth from JSON configs. Built with Next.js, Express, PostgreSQL.
            </p>
            <a href="https://github.com/thanuj0902/ForgaFlow" target="_blank" rel="noreferrer" className="card-link">View on GitHub →</a>
          </div>

          <div className="card">
            <h3>PayGrade</h3>
            <p>
              Level-based compensation intelligence platform for India's tech industry. Submit and compare salary data with standardized level mapping.
            </p>
            <a href="https://github.com/thanuj0902/PayGrade" target="_blank" rel="noreferrer" className="card-link">View on GitHub →</a>
          </div>

          <div className="card">
            <h3>Connect Four Game</h3>
            <p>
              Interactive Connect Four game built with React — player names, color selection, win detection, and live scoreboard.
            </p>
            <a href="https://github.com/thanuj0902/Connect-Game" target="_blank" rel="noreferrer" className="card-link">View on GitHub →</a>
          </div>

          <div className="card">
            <h3>AI Code Reviewer</h3>
            <p>
              AI-powered code review tool — paste code, get instant AI feedback on bugs, security, performance, and style. Built with Spring Boot + Next.js + Gemini AI.
            </p>
            <a href="https://github.com/thanuj0902/AI-code-reviewer" target="_blank" rel="noreferrer" className="card-link">View on GitHub →</a>
          </div>

          <div className="card">
            <h3>TestForge</h3>
            <p>
              AI-Powered Test Case Generator — generates unit tests for JS, Python, Java, and Go using a rule engine with optional AI enhancement.
            </p>
            <a href="https://github.com/thanuj0902/TestForge" target="_blank" rel="noreferrer" className="card-link">View on GitHub →</a>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>SQL</span>
          <span>PostgreSQL</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Render</span>
          <span>Vercel</span>
        </div>
      </section>

      <section id="contact" className="section fade-in">
        <h2>Contact</h2>
        <div className="contact-links">
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

