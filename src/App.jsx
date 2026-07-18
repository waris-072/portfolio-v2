import Navbar from "./components/sections/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Experience from "./components/sections/Experience/Experience";
import Education from "./components/sections/Education/Education";
import Certificates from "./components/sections/Certificates/Certificates";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;