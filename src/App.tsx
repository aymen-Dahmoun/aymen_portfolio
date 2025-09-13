import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  // close drawer when scrolling down
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
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setIsOpen(true)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-950">
        <section className="h-[100vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">Landing Page</h1>
        </section>
        <section className="h-[100vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">More Content</h1>
        </section>
      </main>
    </div>
  );
}
