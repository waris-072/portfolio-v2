import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalInfo, navLinks } from "../../../data/portfolioData";
import ThemeToggle from "../../ui/ThemeToggle";
import "./Navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          {personalInfo.logo}
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
            className="menu-toggle"
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