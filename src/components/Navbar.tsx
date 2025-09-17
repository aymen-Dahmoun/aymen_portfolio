import React from "react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
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
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl flex items-center justify-between px-6 py-3 
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg rounded-2xl z-50 border border-white/20">
      <h2
        className="font-bold text-lg cursor-pointer"
        onClick={() => handleScroll("home")}
      >
        My Portfolio
      </h2>
      <div className="flex gap-6 text-sm font-medium">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {section.label}
          </button>
        ))}
        {/* Keep your Drawer toggle button */}
        <button
          onClick={onMenuClick}
          className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
