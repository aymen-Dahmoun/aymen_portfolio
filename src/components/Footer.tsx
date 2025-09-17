import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0a0f2c] to-[#0d183a] text-gray-300 py-10 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-300 tracking-wide">
            © {new Date().getFullYear()} Your Name
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Crafted with <span className="text-pink-400">❤️</span> under the{" "}
            <span className="text-blue-400">stars</span>
          </p>
        </div>

        {/* Right side - social icons */}
        <div className="flex space-x-8 text-2xl">
          <a
            href="mailto:am.dahmoun@ensta.edu.dz"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 relative group"
          >
            <FaEnvelope />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </a>
          <a
            href="https://github.com/aymen-Dahmoun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 relative group"
          >
            <FaGithub />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/dahmoun-mouaine-aymen-3b8604300"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 relative group"
          >
            <FaLinkedin />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[6px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
    </footer>
  );
}
