
import React from 'react';

import Navbar from './Components/sections/Navbar/Navbar';
import Footer from './Components/sections/Footer/Footer';
import Hero from './Components/sections/Hero/Hero';
import About from './Components/sections/About/About';
import Skills from './Components/sections/Skills/Skills';
import Projects from './Components/sections/Projects/Projects';
import Certificates from './Components/sections/Certificates/Certificates';
import Contact from './Components/sections/Contact/Contact';

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