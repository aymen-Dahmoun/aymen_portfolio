import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0a0f2c] to-[#0d183a] text-gray-300 py-8 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-300">
            © {new Date().getFullYear()} Your Name
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Crafted with ❤️ under the stars
          </p>
        </div>

        {/* Right side - social icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="mailto:your@email.com"
            className="hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Decorative glowing line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </footer>
  );
}
