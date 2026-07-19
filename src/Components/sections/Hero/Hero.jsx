import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

import profileImage from "../../../assets/images/profile.png";
import Button from "../../ui/Button";

import {
  personalInfo,
  socialLinks,
} from "../../../data/portfolioData";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import "./Hero.css";

function Hero() {
  const iconMap = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Email: <FaEnvelope />,
  };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="home" className="hero">
      {/* Background Decorations */}
      <div className="hero-bg hero-bg-1"></div>
      <div className="hero-bg hero-bg-2"></div>
      <div className="hero-bg hero-bg-3"></div>

      <div className="container hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-greeting-wrapper" variants={itemVariants}>
            <span className="hero-greeting">My portfolio...</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            <span className="typing-text">{personalInfo.role}</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            {personalInfo.description}
          </motion.p>

          {/* Quick Info Tags */}
          <motion.div className="hero-quick-info" variants={itemVariants}>
            <div className="quick-info-item">
              <FaCode className="quick-icon" />
              <span>Full Stack Developer</span>
            </div>
            <div className="quick-divider"></div>
            <div className="quick-info-item">
              <FaBriefcase className="quick-icon" />
              <span>2+ Years Experience</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Button href={personalInfo.resume} download className="btn-primary">
              <FaDownload />
              Download CV
            </Button>

            <Button href="#projects" variant="outline" className="btn-outline">
              View Projects
              <FaArrowRight />
            </Button>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.name}
                className="social-link"
              >
                {iconMap[social.name]}
                <span className="social-tooltip">{social.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="image-wrapper">
            {/* Floating Tech Badges */}
            <motion.div
              className="tech-badge react"
              custom={0}
              variants={badgeVariants}
            >
              <FaReact />
              <span>React</span>
            </motion.div>

            <motion.div
              className="tech-badge node"
              custom={1}
              variants={badgeVariants}
            >
              <FaNodeJs />
              <span>Node.js</span>
            </motion.div>

            <motion.div
              className="tech-badge mongo"
              custom={2}
              variants={badgeVariants}
            >
              <SiMongodb />
              <span>MongoDB</span>
            </motion.div>

            <motion.div
              className="tech-badge express"
              custom={3}
              variants={badgeVariants}
            >
              <SiExpress />
              <span>Express</span>
            </motion.div>

            <motion.div
              className="tech-badge js"
              custom={4}
              variants={badgeVariants}
            >
              <SiJavascript />
              <span>JavaScript</span>
            </motion.div>

            <motion.div
              className="tech-badge bootstrap"
              custom={5}
              variants={badgeVariants}
            >
              <FaBootstrap />
              <span>Bootstrap</span>
            </motion.div>

            {/* Profile Image */}
            <div className="image-container">
              <div className="image-glow"></div>
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="profile-image"
              />
              <div className="image-ring"></div>
            </div>

            {/* Status Indicator */}
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;