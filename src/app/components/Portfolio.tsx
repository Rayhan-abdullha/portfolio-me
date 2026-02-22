"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Menu, X, Download, Code, Cpu, Layers, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { skills } from '@/skills';
import Link from 'next/link'
import About from '../components/About';
// --- YOUR DATA INTEGRATED ---
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

  // Animation Configs
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
    };
    

    useEffect(() => {
    setMounted(true);
    }, []);

if (!mounted) return null; // Or return a simple loading skeleton

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/40 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-56 pb-12 md:pb-20 px-6">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
          >
            Full Stack Developer.
          </motion.h1>
          <motion.p {...fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A Full-stack Engineer dedicated to building polished, high-performance digital products with a focus on user experience.
          </motion.p>
        </div>
      </section>
      
      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-12 md:py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12">Technical Expertise</motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* --- PROJECT GRID --- */}
      <section id="projects" className="py-12 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">Projects Portfolio</h2>
              <p className="text-gray-500">A showcase of my recent work and open-source contributions.</p>
            </div>
            <div 
                className="text-blue-500 font-mono text-sm" 
                suppressHydrationWarning
                >
                {portfolioData.length} Projects Total
            </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.06] transition-all hover:border-blue-500/30"
                >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                    {/* Overlay Gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-80" />
                    
                    {/* The Project Image */}
                    <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Floating Badge (Optional Premium Touch) */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-blue-600/90 backdrop-blur-md text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                        View Case Study
                    </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-20">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                    {project.technology.map((tech) => (
                        <span 
                        key={tech} 
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 text-gray-400 border border-white/5 rounded-md group-hover:border-blue-500/20 transition-colors"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    <div className="mt-auto flex gap-6 pt-4 border-t border-white/5">
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                    <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                    >
                        <Code size={16} /> Source
                    </a>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8">
            <a href='https://github.com/Rayhan-abdullha' target='blank'>
              <Github className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
            </a>
            <a href=''>
              <Linkedin className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Designed & Developed by Rayhan © 2026. <br />
            Built with Next.js, Framer Motion & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;