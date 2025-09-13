import React from "react";

interface LandingProps {
  onOpenDrawer: () => void;
}

const Landing: React.FC<LandingProps> = ({ onOpenDrawer }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <button
        onClick={onOpenDrawer}
        className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-lg shadow"
      >
        Open Drawer
      </button>
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">Scroll or swipe to explore.</p>
    </div>
  );
};

export default Landing;
