import { useEffect, useState, type JSX } from "react";
import TechCard from "../components/TechCard";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiDjango,
  SiJavascript,
  SiThreedotjs,
  SiExpo,
  SiSupabase,
  SiFirebase,
  SiOpenai,
} from "react-icons/si";
import { FaMobile, FaRobot } from "react-icons/fa";
import { Server, Terminal } from "lucide-react";

interface Tech {
  title: string;
  description: string;
  icon: JSX.Element;
}

const WEB: Tech[] = [
  { title: "React", description: "Frontend UI library", icon: <SiReact className="text-sky-400" /> },
  { title: "Redux", description: "State management", icon: <SiRedux className="text-purple-500" /> },
  { title: "TailwindCSS", description: "Utility-first CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { title: "TypeScript", description: "Type-safe JS", icon: <SiTypescript className="text-blue-500" /> },
  { title: "JavaScript", description: "just JS", icon: <SiJavascript className="text-yellow-500" /> },
  { title: "Three JS", description: "3D Web", icon: <SiThreedotjs className="text-white" /> },
];

const MOBILE: Tech[] = [
  { title: "React Native", description: "Cross-platform apps", icon: <SiReact className="text-sky-400" /> },
  { title: "Redux", description: "Predictable state", icon: <SiRedux className="text-purple-500" /> },
  { title: "Expo", description: "DevOps", icon: <SiExpo className="text-white" /> },
  { title: "NativewindCSS", description: "Utility-first CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { title: "TypeScript", description: "Type-safe JS", icon: <SiTypescript className="text-blue-500" /> },
  { title: "JavaScript", description: "just JS", icon: <SiJavascript className="text-yellow-500" /> },
];

const BACKEND: Tech[] = [
  { title: "Node.js", description: "JS runtime", icon: <SiNodedotjs className="text-green-500" /> },
  { title: "Express.js", description: "Minimalist framework", icon: <SiExpress className="text-gray-400" /> },
  { title: "PostgreSQL", description: "Relational DB", icon: <SiPostgresql className="text-sky-600" /> },
  { title: "MySQL", description: "SQL database", icon: <SiMysql className="text-blue-600" /> },
  { title: "Supabase", description: "favorite BaaS", icon: <SiSupabase className="text-green-600" /> },
  { title: "Firebase", description: "Second favorite BaaS", icon: <SiFirebase className="text-orange-600" /> },
];

const AI: Tech[] = [
  { title: "Python", description: "AI & ML development", icon: <SiPython className="text-yellow-500" /> },
  { title: "Django", description: "Python web framework", icon: <SiDjango className="text-green-700" /> },
  { title: "n8n", description: "Workflow automation", icon: <FaRobot className="text-pink-500" /> },
  { title: "ViaSocket", description: "Integration service", icon: <FaRobot className="text-indigo-500" /> },
];


export default function TechIUse() {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const getCurrent = (list: Tech[]) => list[index % list.length];
    
    return (
        <main className="flex-1 z-10 gap-12 flex flex-col items-center pt-24 mb-52 justify-center">
            <h1 className="text-4xl font-bold">What I Use</h1>
            <span className="text-lg font-light mb-16 max-w-2xl text-center">
              These are the technologies I rely on to transform ideas into real products
              whether it’s crafting beautiful web apps, cross-platform mobile experiences, 
              robust backends, or exploring AI.
            </span>            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col items-center gap-6">
                    <div  className="flex flex-row items-center gap-6">
                      <h2 className="text-xl font-semibold">Web</h2>
                      <Terminal size={22} className="text-4xl text-white" />
                    </div>
                    <div key={index} className="flex fade-in">
                        <TechCard {...getCurrent(WEB)} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div  className="flex flex-row items-center gap-6">
                    <h2 className="text-xl font-semibold">Mobile</h2>
                    <FaMobile size={22} className="text-4xl text-white" />
                  </div>
                    <div key={`mobile-${index}`} className="flex fade-in">
                        <TechCard {...getCurrent(MOBILE)} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div  className="flex flex-row items-center gap-6">
                      <h2 className="text-xl font-semibold">Backend</h2>
                      <Server size={22} className="text-4xl text-white" />
                    </div>
                    <div key={`backend-${index}`} className="flex fade-in">
                        <TechCard {...getCurrent(BACKEND)} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div  className="flex flex-row items-center gap-6">
                      <h2 className="text-xl font-semibold">AI</h2>
                      <SiOpenai size={22} className="text-4xl text-white" />
                    </div>
                    <div key={`ai-${index}`} className="flex fade-in">
                        <TechCard {...getCurrent(AI)} />
                    </div>
                </div>
            </div>
        </main>
        
    )
}