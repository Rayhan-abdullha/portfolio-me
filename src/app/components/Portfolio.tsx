
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Menu, X, Download, Code, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { skills } from '@/skills';
import About from '../components/About';

export const portfolioData = [
      {
    id: 14105,
    liveLink: "https://rokto-beer.vercel.app/home",
    code: "https://github.com/Rayhan-abdullha/blood-donation-reactjs",
    title: "Rokto Bir",
    technology: ["React", "Golang", "Tailwind", "PostgreSQL", "OneSingal", "Mailgun"],
    img: require("../../../public/assests/rokto.png"),
  },
  {
    id: 145,
    liveLink: "https://mindsync-tube.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/freeTube-frontend",
    title: "Mindsync Tube",
    technology: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    img: require("../../../public/assests/mindsync.png"),
  },
  {
    id: 145325,
    liveLink: "https://github.com/Rayhan-abdullha/vacation-Rental",
    code: "https://github.com/Rayhan-abdullha/vacation-Rental",
    title: "Vecation Rental",
    technology: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    img: require("../../../public/assests/rent.png"),
  },
  {
    id: 134525,
    liveLink: "https://client-porfolio.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/client-porfolio",
    title: "Portfolio",
    technology: ["React", "Tailwind CSS"],
    img: require("../../../public/assests/client.png"),
  },
  {
    id: 145425,
    liveLink: "https://www.startech.com.bd/",
    code: "https://github.com/Rayhan-abdullha/Ecomarce-project",
    title: "Ecommarce",
    technology: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    img: require("../../../public/assests/star.png"),
  },
  {
    id: 13777455,
    liveLink: "https://blood-donation-client-six.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Blood-donation-client",
    title: "Blood Donation",
    technology: ["React", "Firebase", "Tailwind CSS"],
    img: require("../../../public/assests/blood.png"),
  },
  {
    id: 17863455,
    liveLink: "https://image-gallery-drag-and-drop-client.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/image-gallery-drag-and-drop-client",
    title: "Image Upload Darg and Drop",
    technology: ["React", "Tailwind CSS", "React DnD"],
    img: require("../../../public/assests/drag.png"),
  },
  {
    id: 134455,
    liveLink: "https://car-mechanic-react.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/car-mechanic-react",
    title: "Car Mechanic",
    technology: ["React", "Bootstrap"],
    img: require("../../../public/assests/car.png"),
  },
  {
    id: 1455,
    liveLink: "https://image-upload-react-iota.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/image-upload-react",
    title: "Image Upload",
    technology: ["React", "Firebase", "CSS"],
    img: require("../../../public/assests/upload.png"),
  },
  {
    id: 1,
    liveLink: "https://full-stack-blogsite.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/full-stack-blogsite/tree/main",
    title: "MERN Stack Blog-24",
    technology: ["MongoDB", "Express", "React", "Node.js"],
    img: require("../../../public/assests/blog.png"),
  },
  {
    id: 33,
    liveLink: "https://audio-converter.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Treat-Ecommerce",
    title: "Video to Audio Converter",
    technology: ["React", "Node.js", "FFmpeg", "Tailwind CSS"],
    img: require("../../../public/assests/video.png"),
  },
  {
    id: 16,
    liveLink: "https://countries-api-iota-eight.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/countries-api",
    title: "Country Details App",
    technology: ["React", "REST API", "CSS"],
    img: require("../../../public/assests/country.png"),
  },
  {
    id: 18,
    liveLink: "https://treat-ecommerce.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Treat-Ecommerce",
    title: "Treat-Ecommerce",
    technology: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    img: require("../../../public/assests/treat.png"),
  },
  {
    id: 3,
    liveLink: "https://feedback-mern.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/Feedback-app-client",
    title: "MERN Feedback App",
    technology: ["MongoDB", "Express", "React", "Node.js"],
    img: require("../../../public/assests/feedback.png"),
  },
  {
    id: 15,
    liveLink: "https://calculator-app3.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/history-calculator-react-app",
    title: "History Calculator",
    technology: ["React", "CSS"],
    img: require("../../../public/assests/calculator.png"),
  },
  {
    id: 2,
    liveLink: "https://determined-cray-3ea7bb.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/addmin-panel",
    title: "Admin Panel",
    technology: ["React", "Tailwind CSS", "Firebase"],
    img: require("../../../public/assests/admin.png"),
  },
  {
    id: 13,
    liveLink: "https://passwordgenerator-66.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/password-generator",
    title: "Password Generator",
    technology: ["React", "CSS"],
    img: require("../../../public/assests/password.png"),
  },
  {
    id: 17,
    liveLink: "https://lighthearted-daifuku-d2e9e3.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/Simple-Todo-app",
    title: "Todo App",
    technology: ["React", "CSS"],
    img: require("../../../public/assests/todo4.png"),
  },
  {
    id: 14,
    liveLink: "https://shopingcart11.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/shoping-cart",
    title: "Shoping Cart",
    technology: ["React", "Context API", "CSS"],
    img: require("../../../public/assests/shoping.png"),
  },
  {
    id: 18,
    liveLink: "https://fylo-application-react.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Fylo-application-react",
    title: "Simple layout",
    technology: ["React", "Tailwind CSS"],
    img: require("../../../public/assests/layout.png"),
  },
  {
    id: 4,
    liveLink: "https://quirky-goldstine-b529cd.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/creative-agency-bd",
    title: "creative agency",
    technology: ["React", "Bootstrap"],
    img: require("../../../public/assests/creative.png"),
  },
  {
    id: 5,
    liveLink: "https://add-calender.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/calender-app",
    title: "Add Calender",
    technology: ["React", "Tailwind CSS"],
    img: require("../../../public/assests/calender.png"),
  },
  {
    id: 6,
    liveLink: "https://stupefied-wozniak-46f7a0.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/dream-11",
    title: "Dream 11",
    technology: ["React", "CSS"],
    img: require("../../../public/assests/portfolio.png"),
  },
  {
    id: 7,
    liveLink: "https://easybankbd.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/bank-bd",
    title: "Easy Bank",
    technology: ["React", "SASS"],
    img: require("../../../public/assests/bank.png"),
  },
  {
    id: 8,
    liveLink: "https://weather-api-lime-rho.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Weather-API",
    title: "Weather API",
    technology: ["React", "REST API", "Tailwind CSS"],
    img: require("../../../public/assests/weather.png"),
  },
  {
    id: 9,
    liveLink: "https://happy-darwin-ca2bb5.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/simple-design-site",
    title: "Mission Portfolio",
    technology: ["HTML", "CSS", "JavaScript"],
    img: require("../../../public/assests/portfolioImg4.png"),
  },
  {
    id: 10,
    liveLink: "https://copa-america-official.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Copa-america-official",
    title: "Compa america official",
    technology: ["React", "CSS"],
    img: require("../../../public/assests/banner.png"),
  },
  {
    id: 11,
    liveLink: "https://single-portfolio1.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/SinglePortfolio1",
    title: "Portfolio",
    technology: ["React", "Tailwind CSS"],
    img: require("../../../public/assests/portfolio2.png"),
  },
]; // this is for project section use this data
const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/40 font-sans overflow-x-hidden">
      
      {/* --- RESPONSIVE NAVBAR --- */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-black tracking-tighter">
            RAYHAN<span className="text-blue-500">.</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-all font-semibold">
              <Download size={16} /> Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-0 z-40 bg-[#030303] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold">Projects</a>
            <button className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-full font-bold">
              <Download size={20} /> Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

   {/* --- UPGRADED HERO SECTION --- */}
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Sophisticated Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full md:px-4 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content (7 columns) */}
        <div className="lg:col-span-7 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase">
              Available for Hire
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              CRAFTING <br />
              <span className="text-gray-500">DIGITAL</span> <br />
              EXPERIENCE.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              I’m <span className="text-white font-semibold">Rayhan</span>, a Full-stack Engineer 
              specializing in the MERN stack and Docker. I transform complex problems into 
              elegant, high-performance web solutions.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="https://github.com/Rayhan-abdullha" className="px-8 py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image/Visual (5 columns) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Animated Border Rings */}
            <div className="absolute -inset-4 border border-white/5 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl -rotate-3 group-hover:-rotate-12 transition-transform duration-500" />
            
            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg"
                alt="Rayhan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                priority
                unoptimized
              />
              {/* Subtle overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats/Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-tight">Full-Stack Expert</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12">Technical Expertise</motion.h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-sm md:text-base hover:border-blue-500/50 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* --- PROJECT GRID --- */}
      <section id="projects" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects Portfolio</h2>
              <p className="text-gray-500 max-w-md">Building everything from Video platforms to Fintech solutions.</p>
            </div>
            <div className="text-blue-500 font-mono text-sm bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20" suppressHydrationWarning>
              {portfolioData.length} Projects Total
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.06] transition-all"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-70" />
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-20">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technology.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase px-2 py-1 bg-white/5 text-gray-400 border border-white/5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 4 && <span className="text-[10px] text-gray-600">+{project.technology.length - 4}</span>}
                  </div>

                  <div className="mt-auto flex gap-6 pt-4 border-t border-white/5">
                    <a href={project.liveLink} target="_blank" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400">
                      <ExternalLink size={16} /> Live
                    </a>
                    <a href={project.code} target="_blank" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400">
                      <Code size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex gap-8 mb-10">
            <a href="https://github.com/Rayhan-abdullha" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
              <Github className="text-gray-400 hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
              <Linkedin className="text-gray-400 hover:text-blue-400" />
            </a>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Designed & Developed by Rayhan © 2026. <br />
            Built with Next.js & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;