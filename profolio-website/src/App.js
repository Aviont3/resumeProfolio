import React from "react";
import "./App.css";

function App() {
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
        <p>Marcy Lab School – Software Engineering Fellowship</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Made It Out</strong> – A trip planning web app built with Python, MongoDB, and React.</li>
          <li><strong>Another Project</strong> – Short description here.</li>
        </ul>
      </section>

      <section>
        <h2>Languages & Technologies</h2>
        <p>JavaScript, Python, SQL, HTML, CSS, React, Node.js</p>
      </section>
    </div>
  );
}

export default App;

