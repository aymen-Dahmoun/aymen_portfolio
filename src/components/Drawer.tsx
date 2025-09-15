import React, { useRef, useEffect } from "react";
import { CometCard } from "./CometCard";
import mouaine from "../assets/mouaine.jpg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.style.transition = "transform 0.6s ease";
      drawerRef.current.style.transform = isOpen
        ? "translateX(0)"
        : "translateX(-100vw)";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 py-12 left-0 z-50 h-full w-screen bg-gradient-to-br from-black via-blue-950 to-black shadow-lg flex items-center justify-center px-6 md:px-12 overflow-y-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 py-12">
          {/* Left Content */}
                <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] max-h-[40rem] bg-red-900/30 rounded-full blur-[160px] animate-ping"></div>

          <div className="text-white max-w-lg text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              DAHMOUN Mouaine Aymen
            </h1>
            <p className="text-lg text-gray-300">Developer</p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I am a passionate developer with expertise in creating engaging
              and user-friendly digital experiences.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Key Skills</h2>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-gray-300">
                <li className="bg-white/10 px-3 py-2 rounded-lg">Mobile Development</li>
                <li className="bg-white/10 px-3 py-2 rounded-lg">Web Development</li>
                <li className="bg-white/10 px-3 py-2 rounded-lg">Desktop Development</li>
                <li className="bg-white/10 px-3 py-2 rounded-lg">PERN Stack</li>
                <li className="bg-white/10 px-3 py-2 rounded-lg">Automation</li>
                <li className="bg-white/10 px-3 py-2 rounded-lg">DevOps</li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Reach Out</h2>
              <ul className="mt-4 flex justify-center md:justify-start space-x-6 text-gray-300">
                <li>
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <FaGithub size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:your@email.com"
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaEnvelope size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <CometCard className="w-56 h-56 md:w-80 md:h-80 shrink-0">
            <img
              src={mouaine}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </CometCard>
        </div>
      </div>
    </>
  );
};

export default Drawer;
