import { Github, Linkedin } from 'lucide-react'
const Footer = () => {
  return (
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
  )
}

export default Footer