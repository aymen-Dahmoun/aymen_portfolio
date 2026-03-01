import React, { useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CometCard } from "./CometCard";
import mouaine from "../assets/mouaine.jpg";
import resume from "../assets/DAHMOUN Mouaine Aymen.pdf";
import { FaEnvelope, FaGithub, FaLinkedin, FaRegSave } from "react-icons/fa";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SKILLS = [
  "Mobile Development",
  "Web Development",
  "Desktop Development",
  "PERN Stack",
  "Automation",
  "DevOps",
];

const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/dahmoun-mouaine-aymen-3b8604300",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: FaGithub,
    url: "https://github.com/aymen-Dahmoun",
    label: "GitHub",
    color: "hover:text-gray-400",
  },
  {
    icon: FaEnvelope,
    url: "mailto:am.dahmoun@ensta.edu.dz",
    label: "Email",
    color: "hover:text-red-400",
  },
  {
    icon: FaRegSave,
    url: resume,
    label: "Resume",
    color: "hover:text-amber-400",
    download: "Aymen-Dahmoun-Resume.pdf",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } as const,
  },
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Main Drawer Content */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 z-[70] h-full w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Particles Background */}
            <Particles
              id="drawer-particles"
              init={particlesInit}
              className="absolute inset-0 pointer-events-none"
              options={{
                background: { color: "transparent" },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true,
                  },
                  modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
                },
                particles: {
                  color: { value: "#3b82f6" },
                  links: {
                    color: "#3b82f6",
                    distance: 150,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 0.5,
                    outModes: { default: "bounce" },
                  },
                  number: {
                    value: 60,
                    density: { enable: true, area: 800 },
                  },
                  opacity: { value: { min: 0.1, max: 0.5 } },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
              }}
            />

            {/* Glowing Accent Blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-auto flex justify-center"
              >
                <CometCard className="w-64 md:w-96 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded-t-2xl relative group">
                      <img
                        src={mouaine}
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="w-full py-6 flex flex-col items-center bg-slate-900/80 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
                      <h3 className="text-2xl font-bold tracking-widest text-white">
                        AYMEN
                      </h3>
                      <p className="text-blue-400 font-medium tracking-tight">
                        Portfolio Hero
                      </p>
                    </div>
                  </div>
                </CometCard>
              </motion.div>

              {/* Text & Content Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 text-center md:text-left text-white"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
                    Welcome to my world
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                    DAHMOUN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                      Mouaine Aymen
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="mt-8 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
                >
                  I bridge the gap between imagination and reality by crafting
                  premium digital experiences that resonate.
                </motion.p>

                {/* Skills Chips */}
                <motion.div variants={itemVariants} className="mt-12">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                    Core Expertise
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {SKILLS.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-white transition-all duration-300 text-sm font-bold cursor-default backdrop-blur-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Socials & CTA */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex space-x-6">
                    {SOCIAL_LINKS.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        download={link.download}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-slate-400 transition-colors duration-300 ${link.color}`}
                        aria-label={link.label}
                      >
                        <link.icon size={32} />
                      </motion.a>
                    ))}
                  </div>

                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                  >
                    Explore My Work
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 pointer-events-none"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>

            {/* Close Button UI (Optional, since clicking backdrop works, but good for UX) */}
            <button
              onClick={onClose}
              className="absolute top-10 right-10 text-white/20 hover:text-white transition-colors z-[80]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
