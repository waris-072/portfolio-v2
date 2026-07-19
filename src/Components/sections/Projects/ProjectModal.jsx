import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaCalendarAlt,
} from "react-icons/fa";

const ProjectModal = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="project-modal"
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="modal-close-btn"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-header-badge">
              <FaCode className="badge-icon" />
              <span>Project</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-meta">
              <span className="meta-item">
                <FaRocket className="meta-icon" />
                {project.status || "Completed"}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Description */}
            <div className="modal-description-section">
              <p className="modal-description">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="modal-tech-section">
              <h3 className="section-title">
                <span className="section-icon">⚡</span>
                Technologies Used
              </h3>
              <div className="modal-tech-grid">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="modal-features-section">
              <h3 className="section-title">
                <span className="section-icon">✨</span>
                Key Features
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

        
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <div className="modal-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="modal-btn modal-btn-primary"
              >
                <FaGithub className="btn-icon" />
                View Source Code
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="modal-btn modal-btn-secondary"
              >
                <FaExternalLinkAlt className="btn-icon" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="modal-decoration modal-decoration-1"></div>
          <div className="modal-decoration modal-decoration-2"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;