import { useRef } from "react";
import { motion } from "framer-motion";
import "./Certificates.css";

import { certificates } from "../../../data/portfolioData";
import SectionTitle from "../../ui/SectionTitle";
import { FaCertificate, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Certificates = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
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
    <section id="certificates" className="certificates-section">
      <SectionTitle 
        title="Certificates" 
        subtitle="My Achievements"
      />

      {/* Scroll Buttons (Mobile Only) */}
      <div className="certificates-scroll-buttons">
        <button 
          className="certificates-scroll-btn certificates-scroll-left" 
          onClick={scrollLeft} 
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <button 
          className="certificates-scroll-btn certificates-scroll-right" 
          onClick={scrollRight} 
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>

      <motion.div
        className="certificates-grid"
        ref={scrollContainerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="certificate-icon-wrapper">
              <div className="certificate-icon-glow"></div>
              <div className="certificate-icon">
                <FaCertificate />
              </div>
            </div>

            <h3>{certificate.title}</h3>
            <p>{certificate.organization}</p>
            
            {certificate.year && (
              <span className="certificate-year">{certificate.year}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;