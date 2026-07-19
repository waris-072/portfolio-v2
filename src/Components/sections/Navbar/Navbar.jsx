import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalInfo, navLinks } from "../../../data/portfolioData";
import ThemeToggle from "../../ui/ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="logo">
          {personalInfo.logo || "WS"}
        </a>

        {/* Navigation Links */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme + Mobile Menu */}
        <div className="navbar-actions">
          <ThemeToggle />

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;