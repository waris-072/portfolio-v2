import { motion } from "framer-motion";
import "./Contact.css";

import SectionTitle from "../../ui/SectionTitle";
import { personalInfo, socialLinks } from "../../../data/portfolioData";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";

const iconMap = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Email: <FaEnvelope />
};

// Icon colors for each social platform
const iconColors = {
    GitHub: "#333",
    LinkedIn: "#0077b5",
    Email: "#ea4335",
    Resume: "#6C63FF"
};

// Hover colors for each platform
const iconHoverColors = {
    GitHub: "#000",
    LinkedIn: "#005582",
    Email: "#d33426",
    Resume: "#5a52d5"
};

const Contact = () => {
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

    const itemVariants = {
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
            y: -6,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="contact" className="contact-section">
            {/* Background Decoration */}
            <div className="contact-bg"></div>

            <SectionTitle 
                title="Get In Touch" 
                subtitle="Let's Connect"
            />

            <motion.div
                className="contact-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.p className="contact-text" variants={itemVariants}>
                    I'm currently looking for internship and junior MERN Stack
                    Developer opportunities. If you have a project, opportunity,
                    or simply want to connect, feel free to reach out.
                </motion.p>

                <motion.div className="contact-grid" variants={containerVariants}>
                    {socialLinks.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.url}
                            target={item.name === "Email" ? "_self" : "_blank"}
                            rel="noreferrer"
                            className="contact-card"
                            variants={itemVariants}
                            whileHover="hover"
                            style={{
                                '--icon-color': iconColors[item.name] || '#6C63FF',
                                '--icon-hover-color': iconHoverColors[item.name] || '#5a52d5'
                            }}
                        >
                            <div className="contact-icon-wrapper">
                                <div className="contact-icon" style={{ 
                                    background: `linear-gradient(135deg, ${iconColors[item.name] || '#6C63FF'}, ${iconHoverColors[item.name] || '#5a52d5'})`
                                }}>
                                    {iconMap[item.name]}
                                </div>
                            </div>
                            <h3>{item.name}</h3>
                            <span>
                                {item.name === "Email"
                                    ? personalInfo.email || "warishakrow3@gmail.com"
                                    : "Open Profile"}
                            </span>
                        </motion.a>
                    ))}

                    <motion.a
                        href={personalInfo.resume}
                        download
                        className="contact-card"
                        variants={itemVariants}
                        whileHover="hover"
                        style={{
                            '--icon-color': '#6C63FF',
                            '--icon-hover-color': '#5a52d5'
                        }}
                    >
                        <div className="contact-icon-wrapper">
                            <div className="contact-icon" style={{
                                background: 'linear-gradient(135deg, #6C63FF, #5a52d5)'
                            }}>
                                <FaDownload />
                            </div>
                        </div>
                        <h3>Resume</h3>
                        <span>Download CV</span>
                    </motion.a>
                </motion.div>

                {/* Additional Info */}
                <motion.div 
                    className="contact-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="contact-footer-item">
                        <FaMapMarkerAlt className="footer-icon" />
                        <span>Available for Remote Work</span>
                    </div>
                    <div className="contact-footer-divider"></div>
                    <div className="contact-footer-item">
                        <FaPhone className="footer-icon" />
                        <span>Open to Opportunities</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;