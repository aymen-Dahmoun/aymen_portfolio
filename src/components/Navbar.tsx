import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: "tech", label: "Tech" },
    { id: "projects", label: "Projects" },
    { id: "roadmap", label: "Roadmap" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl 
      flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-gray-900/20 
      backdrop-blur-md shadow-lg rounded-2xl z-50 border border-white/20"
    >
      <span
        className="font-bold text-lg cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        onClick={() => handleScroll("home")}
      >
        DM
      </span>

      <div className="hidden md:flex gap-6 text-sm font-medium">
        {sections.map((section) => (
          <span
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="relative cursor-pointer text-gray-700 dark:text-gray-300 
              hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors 
              after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] 
              after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all 
              after:duration-300 hover:after:w-full"
          >
            {section.label}
          </span>
        ))}
        <span
          onClick={onMenuClick}
          className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm cursor-pointer hover:bg-indigo-700 transition-colors"
        >
          Menu
        </span>
      </div>

      <button
        className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/20"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={`absolute top-full mt-2 right-0 w-48 bg-white dark:bg-gray-900 
        rounded-xl shadow-lg border border-white/20 py-3 flex flex-col gap-3 text-sm font-medium 
        transform transition-all duration-300 origin-top
        ${mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        {sections.map((section) => (
          <span
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="px-4 py-2 cursor-pointer text-gray-700 dark:text-gray-300 
            hover:bg-indigo-600 hover:text-white rounded-lg transition"
          >
            {section.label}
          </span>
        ))}
        <span
          onClick={onMenuClick}
          className="mx-4 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm cursor-pointer hover:bg-indigo-700 transition-colors"
        >
          Menu
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
