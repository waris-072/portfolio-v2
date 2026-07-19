import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, onOpen, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="project-card"
      onClick={() => onOpen(project)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="project-image-wrapper">
        <div className="project-image">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        </div>
        <div className="project-overlay">
          <span className="project-overlay-text">View Project</span>
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-tech-count">{project.technologies.length} tech</span>
        </div>

        <p>{project.description}</p>

        <div className="project-card-footer">
          <div className="project-tags">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="project-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="project-tag more">+{project.technologies.length - 3}</span>
            )}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-demo-link"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;