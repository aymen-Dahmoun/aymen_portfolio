import React from "react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-6 bg-white/80 dark:bg-gray-900/80 shadow-sm backdrop-blur-md z-50">
      <h2 className="font-bold text-lg">My Portfolio</h2>
      <button
        onClick={onMenuClick}
        className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
