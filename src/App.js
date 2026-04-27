
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">Thanuj</h1>
          <ul>
            <li><a href="#about">About</a></li>
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
            Frontend Developer | React Developer | Springboot Developer
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer who loves creating games, websites,
          and interactive applications using React and modern web technologies.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>Connect Four Game</h3>
            <p>
              Multiplayer Connect Four game built using React.
            </p>
          </div>

          <div className="card">
            <h3>2048 Game</h3>
            <p>
              Classic 2048 puzzle game with animations.
            </p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>
              Responsive portfolio website with modern UI.
            </p>
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
          <span>SpringBoot</span>
          <span>DBMS</span>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: mori.thanuj@gmail.com</p>
        <p>GitHub: github.com/thanuj0902</p>
      </section>

      <footer>
        <p>© 2026 Thanuj. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

