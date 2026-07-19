// src/App.jsx
import React from 'react';

// Section components - adjust these paths based on your actual folder structure
import Navbar from './components/sections/Navbar/Navbar';
import Footer from './components/sections/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Certificates from './components/sections/Certificates/Certificates';
import Contact from './components/sections/Contact/Contact';

// Styles
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;