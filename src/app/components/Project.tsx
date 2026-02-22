"'use client'"
import { Code, ExternalLink } from 'lucide-react';
import Image from 'next/image'
import { motion } from 'framer-motion';
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
const Project = () => {
  return (
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
  )
}

export default Project