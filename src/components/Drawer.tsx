import React, { useCallback, useEffect, useRef } from "react";
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
    color: "hover:text-blue-400",
  },
  {
    icon: FaGithub,
    url: "https://github.com/aymen-Dahmoun",
    color: "hover:text-gray-400",
  },
  {
    icon: FaEnvelope,
    url: "mailto:am.dahmoun@ensta.edu.dz",
    color: "hover:text-red-400",
  },
  {
    icon: FaRegSave,
    url: resume,
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
    transition: { type: "spring", stiffness: 100 },
  },
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const skillsListRef = useRef<HTMLUListElement | null>(null);

  const hideHighlight = () => {
    if (!highlightRef.current) return;
    highlightRef.current.style.opacity = "0";
  };

  const moveHighlightTo = (target: HTMLElement) => {
    const highlight = highlightRef.current;
    const list = skillsListRef.current;
    if (!highlight || !list) return;

    const targetRect = target.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();

    const top = targetRect.top - listRect.top + list.scrollTop;
    const left = targetRect.left - listRect.left + list.scrollLeft;

    highlight.style.width = `${targetRect.width}px`;
    highlight.style.height = `${targetRect.height}px`;
    highlight.style.transform = `translate(${left}px, ${top}px)`;
    highlight.style.opacity = "1";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    moveHighlightTo(e.currentTarget);
  };

  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    moveHighlightTo(e.currentTarget);
  };

  useEffect(() => {
    const onResize = () => hideHighlight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <div className="absolute top-10 right-10 -translate-x-1/2 text-gray-400 text-sm animate-bounce pointer-events-none z-[80]">
            ↓ Scroll
          </div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 z-[70] h-full w-full bg-slate-950 flex flex-col items-center justify-center overflow-y-scroll overflow-x-hidden pt-120 md:pt-0"
            style={{ scrollbarWidth: "none" }}
          >
            <Particles
              id="drawer-particles"
              init={particlesInit}
              className="absolute inset-0 pointer-events-none"
              options={{
                background: { color: "transparent" },
                fpsLimit: 120,
                particles: {
                  color: { value: "#3b82f6" },
                  links: {
                    color: "#3b82f6",
                    distance: 150,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                  },
                  move: { enable: true, speed: 0.5 },
                  number: { value: 60 },
                  opacity: { value: { min: 0.1, max: 0.5 } },
                  size: { value: { min: 1, max: 3 } },
                },
              }}
            />

            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />

            <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <CometCard className="w-64 md:w-96 cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-t-2xl">
                    <img
                      src={mouaine}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full py-6 flex flex-col items-center bg-slate-900/80 border-t border-white/10 rounded-b-2xl">
                    <h3 className="text-2xl font-bold tracking-widest text-white">
                      AYMEN
                    </h3>
                  </div>
                </div>
              </CometCard>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 text-center md:text-left text-white"
              >
                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl font-black">
                    DAHMOUN
                    <br />
                    <span className="text-blue-400">Mouaine Aymen</span>
                  </h1>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-lg text-slate-400 max-w-xl"
                >
                  I bridge the gap between imagination and reality by crafting
                  premium digital experiences.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-10">
                  <h2 className="text-sm font-bold uppercase text-slate-500 mb-4">
                    Core Expertise
                  </h2>

                  <ul
                    ref={skillsListRef}
                    className="relative grid grid-cols-2 gap-3 text-gray-300 max-w-sm"
                    onMouseLeave={hideHighlight}
                  >
                    <span
                      ref={highlightRef}
                      className="absolute rounded-lg bg-white/5 border border-blue-400/30 pointer-events-none transition-all duration-300 opacity-0"
                      style={{
                        width: "0px",
                        height: "0px",
                        transform: "translate(0px,0px)",
                      }}
                    />

                    {SKILLS.map((skill) => (
                      <li
                        key={skill}
                        className="relative z-10 px-3 py-2 rounded-lg bg-white/10 cursor-pointer hover:text-white"
                        onMouseEnter={handleMouseEnter}
                        onFocus={handleFocus}
                        onBlur={hideHighlight}
                        tabIndex={0}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-10 flex items-center gap-8"
                >
                  <div className="flex pb-12 space-x-6">
                    {SOCIAL_LINKS.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                        className={`text-slate-400 transition-colors ${link.color}`}
                      >
                        <link.icon size={32} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
