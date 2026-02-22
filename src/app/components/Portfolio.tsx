
"use client";
import { useEffect, useState } from 'react';
import About from '../components/About';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Skills from './Skills';
import Project from './Project';
const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/40 font-sans overflow-x-hidden">
      <Navbar/>
      <HeroSection />
      <Skills />
      <About />
      <Project/>
      <Footer/>
    </div>
  );
};

export default Portfolio;