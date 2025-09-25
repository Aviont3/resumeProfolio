import React, { useState } from "react";
import techIcons from "../data/Tech-icons/techIcons";

function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Use the keys from techIcons object directly
  const stack = Object.keys(techIcons);

  return (
    <section>
      <h2>Languages & Technologies</h2>
      <ul className="stack-list">
        {stack.map((tech, i) => (
          <li
            key={i}
            onMouseEnter={() => setHoveredTech(tech)}
            onMouseLeave={() => setHoveredTech(null)}
            className="stack-item"
          >
            {tech}
            {hoveredTech === tech && (
              <img
                src={techIcons[tech]}
                alt={`${tech} logo`}
                className="tech-icon"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
