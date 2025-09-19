import React, { useRef, useEffect } from "react";
import { CometCard } from "./CometCard";
import mouaine from "../assets/mouaine.jpg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const skillsListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.style.transition = "transform 0.6s ease";
      drawerRef.current.style.transform = isOpen
        ? "translateX(0)"
        : "translateX(-100vw)";
    }
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => hideHighlight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
    const width = targetRect.width;
    const height = targetRect.height;

    highlight.style.width = `${width}px`;
    highlight.style.height = `${height}px`;
    highlight.style.transform = `translate(${left}px, ${top}px)`;
    highlight.style.opacity = "1";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    moveHighlightTo(e.currentTarget);
  };

  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    moveHighlightTo(e.currentTarget);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        ref={drawerRef}
        className="fixed top-0 left-0 z-50 h-full w-screen bg-gradient-to-br from-black via-blue-950 to-black shadow-lg flex items-center justify-center px-6 md:px-12 overflow-y-scroll overflow-x-hidden"
      >
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-blue-800/40 rounded-full blur-[160px] animate-pulse pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-blue-800 rounded-full blur-[160px] animate-pulse pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 py-12">
          <CometCard className="order-1 mt-[20rem] md:mt-0 md:order-2 w-56 md:w-80 shrink-0 cursor-default rounded-2xl overflow-visible">
            <div className="flex flex-col items-center w-full h-full">
              <div className="w-full aspect-square">
                <img
                  src={mouaine}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              <div className="w-full rounded-b-2xl py-2 flex items-center justify-center bg-neutral-800/40 backdrop-blur-sm">
                <span className="text-lg md:text-xl font-bold tracking-widest text-white/30">
                  Aymen
                </span>
              </div>
            </div>
          </CometCard>

          <div className="order-2 md:order-1 text-white max-w-lg text-center md:text-left">
            <span className="text-[4vw] font-extrabold mb-4">
              DAHMOUN Mouaine Aymen
            </span>
            <p className="text-lg text-gray-300">Developer</p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I am a passionate developer with expertise in creating engaging
              and user-friendly digital experiences.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Key Skills</h2>

              <ul
                ref={skillsListRef}
                className="relative mt-4 grid grid-cols-2 gap-3 text-gray-300"
                onMouseLeave={hideHighlight}
              >
                <span
                  ref={highlightRef}
                  className="absolute top-0 left-0 rounded-lg bg-white/5 backdrop-blur-sm border border-blue-400/30 shadow-lg pointer-events-none transition-all duration-300 ease-out opacity-0"
                  style={{
                    width: "0px",
                    height: "0px",
                    transform: "translate(0px, 0px)",
                    willChange: "transform, width, height, opacity",
                  }}
                />

                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="relative z-10 px-3 py-2 rounded-lg bg-white/10 cursor-pointer hover:text-white transition-colors"
                    onMouseEnter={handleMouseEnter}
                    onFocus={handleFocus}
                    onBlur={hideHighlight}
                    tabIndex={0}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Reach Out</h2>
              <ul className="mt-4 flex justify-center md:justify-start space-x-6 text-gray-300">
                <li>
                  <a
                    href="https://www.linkedin.com/in/dahmoun-mouaine-aymen-3b8604300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/aymen-Dahmoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <FaGithub size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:am.dahmoun@ensta.edu.dz"
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaEnvelope size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
