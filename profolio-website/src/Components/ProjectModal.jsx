import React from "react";
import Modal from "react-modal";
import techIcons from "../data/Tech-icons/techIcons";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

Modal.setAppElement("#root"); // accessibility requirement

export default function ProjectModal({ isOpen, onRequestClose, project }) {
  if (!project) return null; // no project selected yet

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={project.title}
      className="modal"
      overlayClassName="overlay"
    >
      {/* Close Button */}
      <button
        onClick={onRequestClose}
        className="close-button"
        aria-label="Close modal"
      >
        <FaTimes />
      </button>

      {/* Modal Content */}
      <div className="modal-content">
        {/* Title */}
        <h2 className="modal-title">{project.title}</h2>

        {/* Tech Stack */}
        <div className="tech-section">
          <h3 className="tech-section-title">Technologies</h3>
          <div className="tech-stack-grid">
            {project.tech.map((tech, i) => (
              <div key={i} className="tech-item">
                <img
                  src={techIcons[tech]}
                  alt={`${tech} logo`}
                  className="tech-icon"
                />
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="details-section">
          <h3 className="details-title">Project Details</h3>
          <ul className="details-list">
            {project.details.map((detail, i) => (
              <li key={i} className="detail-item">{detail}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="links-section">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <FaGithub className="link-icon" />
              <span>View Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
            >
              <FaExternalLinkAlt className="link-icon" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      </Modal>)}