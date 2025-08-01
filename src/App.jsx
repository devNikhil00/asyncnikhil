import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className=" bg-gradient-to-br from-black via-[#0a0f1a] to-[#111111] min-h-screen text-white">
      <Navbar />
      <HeroSection/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
