import { motion} from 'framer-motion';
import Image from 'next/image';
const HeroSection = () => {
  return (
      <section id="navbar" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
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
  )
}

export default HeroSection