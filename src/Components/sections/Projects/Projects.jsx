// Projects.jsx - Updated for mobile to show all projects
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import "./Projects.css";

import SectionTitle from "../../ui/SectionTitle";
import { projects } from "../../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const nextProjects = () => {
    setStartIndex((prev) =>
      prev + 1 >= projects.length ? 0 : prev + 1
    );
  };

  const previousProjects = () => {
    setStartIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Get 3 projects for desktop view (looping)
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  // Scroll handling for mobile
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <SectionTitle
        subtitle="Portfolio"
        title="Featured Projects"
        description="Some of my recent work and personal projects"
      />

      {/* Scroll Buttons (Mobile Only) */}
      <div className="projects-scroll-buttons">
        <button 
          className="projects-scroll-btn projects-scroll-left" 
          onClick={scrollLeft} 
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <button 
          className="projects-scroll-btn projects-scroll-right" 
          onClick={scrollRight} 
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="projects-slider">
        {/* Desktop Slider Buttons */}
        <button
          className="slider-btn slider-btn-left"
          onClick={previousProjects}
          aria-label="Previous projects"
        >
          <FaChevronLeft />
        </button>

        {/* Desktop: Shows 3 projects in grid */}
        {/* Mobile: Shows ALL projects in horizontal scroll */}
        <div className="projects-container" ref={scrollContainerRef}>
          {/* Desktop: Show only 3 projects */}
          <div className="projects-grid-desktop">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onOpen={setSelectedProject}
                index={index}
              />
            ))}
          </div>
          
          {/* Mobile: Show ALL projects */}
          <div className="projects-grid-mobile">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onOpen={setSelectedProject}
                index={index}
              />
            ))}
          </div>
        </div>

        <button
          className="slider-btn slider-btn-right"
          onClick={nextProjects}
          aria-label="Next projects"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Project Indicators */}
      <div className="projects-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === startIndex ? 'active' : ''}`}
            onClick={() => setStartIndex(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        closeModal={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;