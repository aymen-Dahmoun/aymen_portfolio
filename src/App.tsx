import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";

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
  <div className="flax no-scr" >
    <Navbar onMenuClick={() => setIsOpen(true)} />
    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    <Home />
    <Footer />
  </div>
);
}
