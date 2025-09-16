import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar.tsx";
import Home from "./screens/Home.tsx";

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
  <div className="mt-10" >
    <Navbar onMenuClick={() => setIsOpen(true)} />
    {/* <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    <Home />
  </div>
);
}
