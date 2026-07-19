import { motion } from "framer-motion";
import { useRef } from "react";
import "./Skills.css";
import SectionTitle from "../../ui/SectionTitle";
import { skills } from "../../../data/portfolioData";

import {
  FaCode,
  FaServer,
  FaTools,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostman,
} from "react-icons/si";

import {
  BiBrain,
  BiRocket,
  BiStar,
} from "react-icons/bi";

const categoryIcons = {
  Frontend: <FaCode />,
  Backend: <FaServer />,
  Tools: <FaTools />,
};

// Map technology names to icons for enhanced display
const techIcons = {
  React: <FaReact />,
  "Next.js": <SiTypescript />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Bootstrap: <FaBootstrap />,
  Tailwind: <SiTailwindcss />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Git: <SiGit />,
  Docker: <SiDocker />,
  Postman: <SiPostman />,
};

const Skills = () => {
  const scrollContainerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -4,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Calculate skill level (for demonstration - you can make this dynamic)
  const getSkillLevel = (category) => {
    const levels = {
      Frontend: 90,
      Backend: 85,
      Tools: 80,
    };
    return levels[category] || 75;
  };

  // Scroll handling for mobile
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background decoration */}
      <div className="skills-bg"></div>

      <SectionTitle
        subtitle="My Expertise"
        title="Technical Skills"
        description="Technologies and tools I work with to build amazing digital experiences"
      />

      {/* Scroll Buttons (Mobile Only) */}
      <div className="scroll-buttons">
        <button className="scroll-btn scroll-left" onClick={scrollLeft} aria-label="Scroll left">
          <FaArrowRight />
        </button>
        <button className="scroll-btn scroll-right" onClick={scrollRight} aria-label="Scroll right">
          <FaArrowRight />
        </button>
      </div>

      <motion.div
        className="skills-container"
        ref={scrollContainerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {skills.map((skill, index) => {
          const Icon = categoryIcons[skill.category];
          const level = getSkillLevel(skill.category);

          return (
            <motion.div
              className="skill-card"
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              {/* Card Decoration */}
              <div className="card-decoration">
                <div className="card-shine"></div>
              </div>

              {/* Header */}
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-glow"></div>
                  <div className="skill-icon">
                    {Icon}
                  </div>
                </div>
                <div className="skill-header-info">
                  <h3>{skill.category}</h3>
                  
                </div>
              </div>

              {/* Skill Tags */}
              <div className="skill-items">
                {skill.items.map((item, i) => {
                  const TechIcon = techIcons[item];
                  return (
                    <motion.span
                      className="skill-tag"
                      key={i}
                      custom={i}
                      variants={tagVariants}
                      whileHover="hover"
                    >
                      {TechIcon && <span className="tag-icon">{TechIcon}</span>}
                      <span className="tag-text">{item}</span>
                      <span className="tag-badge">
                        <BiStar />
                      </span>
                    </motion.span>
                  );
                })}
              </div>

            </motion.div>
          );
        })}
      </motion.div>

     
    </section>
  );
};

export default Skills;