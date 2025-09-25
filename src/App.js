import React, { useState } from "react";
import ProjectModal from "./Components/ProjectModal";
import "./App.css";
import projects from "./data/Projects";
import TechStack from "./Components/TechStack";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };
  return (
    <div className="App">
      <header>
        <h1>Avionte Williams</h1>
        <p>
          <a href="mailto:aviontewilliams@gmail.com">aviontewilliams@gmail.com</a> | 
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer"> GitHub</a> | 
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer"> LinkedIn</a>
        </p>
      </header>

      <section>
        <h2>Education</h2>
        <p><strong>Marcy Lab School – </strong>Software Engineering Fellowship</p>
        <p>Completed intensive training in full-stack web development, focusing on JavaScript, Python, and modern frameworks.</p>
      </section>

      <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <button onClick={() => openModal(p)}>{p.title}</button>
          </li>
        ))}
      </ul>

      <ProjectModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        project={selectedProject}
      />
      </section>
<TechStack />
      <footer>
        <p>&copy; 2024 Avionte Williams</p>
      </footer>
    </div>
  );
}

export default App;

