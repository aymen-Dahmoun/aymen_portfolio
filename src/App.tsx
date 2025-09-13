import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar.tsx";
import ConstellationBackground from "./components/ConstellationBackground.tsx";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative w-screen bg-transparent flex flex-col">
      <ConstellationBackground number={150} />
      <Navbar onMenuClick={() => setIsOpen(true)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="flex-1 z-10">
        <section className="h-[100vh] bg-transparent flex items-center justify-center">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        </section>
        <section className="h-[100vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">More Content</h1>
        </section>
      </main>
    </div>
  );
}
