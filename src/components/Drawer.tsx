import React, { useRef, useEffect } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.style.transition = "transform 0.3s ease";
      drawerRef.current.style.transform = isOpen
        ? "translateX(0)"
        : "translateX(-100vw)";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 left-0 h-full w-screen bg-white dark:bg-gray-900 shadow-lg z-40"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-gray-500">Designer / Developer</p>

          <nav className="mt-6 space-y-4">
            <a href="#about" onClick={onClose} className="block">
              About
            </a>
            <a href="#projects" onClick={onClose} className="block">
              Projects
            </a>
            <a href="#contact" onClick={onClose} className="block">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Drawer;
