import React from 'react'
import { motion } from 'framer-motion';
import { skills } from '@/skills';
const Skills = () => {
      const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
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

  )
}

export default Skills