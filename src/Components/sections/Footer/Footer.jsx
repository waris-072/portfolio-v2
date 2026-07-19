import "./Footer.css";

import { personalInfo, socialLinks } from "../../../data/portfolioData";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const iconMap = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Email: <FaEnvelope />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Name & Tagline */}
        <div className="footer-brand">
          <h2>{personalInfo.name}</h2>
          <p>{personalInfo.tagline}</p>
        </div>

        {/* Social Links - Subtle Version */}
        <div className="footer-socials">
          {socialLinks.slice(0, 3).map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={social.name}
              className="footer-social-link"
            >
              {iconMap[social.name]}
              <span className="social-label">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;