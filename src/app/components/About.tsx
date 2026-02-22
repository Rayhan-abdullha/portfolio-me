"use client";
import { motion } from 'framer-motion';
import { Terminal, Box, Code2, Database } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
transition: { duration: 0.8}
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Solving problems through <br />
              <span className="text-gray-500">efficient code.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a <span className="text-white font-medium">Fullstack Developer</span> with a passion for 
                building end-to-end applications. My core strength lies in my 
                <span className="text-blue-400"> problem-solving capability</span>—I don't just write code; 
                I design solutions that scale.
              </p>
              <p>
                Whether it's crafting pixel-perfect interfaces in the <span className="text-white">frontend</span> 
                or architecting robust logic and databases in the <span className="text-white">backend</span>, 
                I bridge the gap between user experience and technical performance.
              </p>
              <p>
                To ensure seamless deployment and environment consistency, I leverage 
                <span className="text-blue-400 font-mono"> Docker</span> for containerization, 
                making my applications portable and production-ready from day one.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Visual Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Code2 className="text-blue-400" />, title: "Frontend", desc: "React, Next.js, Tailwind" },
              { icon: <Database className="text-purple-400" />, title: "Backend", desc: "Node.js, Express, MongoDB" },
              { icon: <Box className="text-cyan-400" />, title: "DevOps", desc: "Docker & Containerization" },
              { icon: <Terminal className="text-green-400" />, title: "Logic", desc: "DSA & Problem Solving" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all group"
              >
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;