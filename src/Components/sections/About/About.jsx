import { motion } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import { personalInfo, aboutFacts } from "../../../data/portfolioData";
import SectionTitle from "../../ui/SectionTitle";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const scrollContainerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
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
    <section id="about" className="about-section">
      <SectionTitle
        title="About Me"
        subtitle="Passionate about crafting digital experiences"
      />

      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text-wrapper">
            {/* Full text for desktop, summarized for mobile */}
            <p className="about-highlight">
              <span className="desktop-text">
                I am a <span className="gradient-text">MERN Stack Developer</span>{" "}
                focused on building responsive, scalable, and user-focused web
                applications. I specialize in developing full-stack solutions
                using React, Node.js, Express, MongoDB, and modern web
                technologies with an emphasis on clean architecture and
                maintainable code.
              </span>
              <span className="mobile-text">
                <span className="gradient-text">MERN Stack Developer</span>{" "}
                Built diverse applications from AI-powered systems to task 
                management platforms. Passionate about continuous learning 
                and creating practical solutions.
              </span>
            </p>

            <p>
              <span className="desktop-text">
                Through academic projects, internship experience, and personal
                development work, I have built applications ranging from
                AI-powered systems to task management platforms and RESTful web
                applications. I continuously improve my skills by exploring modern
                technologies and creating practical solutions to real-world
                problems.
              </span>
            </p>
          </div>

          
        </motion.div>

        {/* Right Content - Facts */}
        <motion.div className="about-facts-wrapper" variants={itemVariants}>
          <div className="facts-header">
            <h3 className="facts-title">A glimpse into my world</h3>
          </div>

          {/* Scroll Buttons (Mobile Only) */}
          <div className="facts-scroll-buttons">
            <button 
              className="facts-scroll-btn facts-scroll-left" 
              onClick={scrollLeft} 
              aria-label="Scroll left"
            >
              <FaArrowRight />
            </button>
            <button 
              className="facts-scroll-btn facts-scroll-right" 
              onClick={scrollRight} 
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="about-facts" ref={scrollContainerRef}>
            {aboutFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  className="fact-card"
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="fact-icon-wrapper">
                    <div className="fact-icon-glow"></div>
                    <div className="fact-icon">
                      <Icon />
                    </div>
                  </div>
                  <div className="fact-info">
                    <h3>{fact.title}</h3>
                    <p>{fact.value}</p>
                  </div>
                  <div className="fact-number">#{String(index + 1).padStart(2, '0')}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;