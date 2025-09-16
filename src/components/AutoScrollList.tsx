import type { JSX } from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiDjango,
  SiDocker,
  SiGit
} from "react-icons/si";

interface Tech {
  name: string;
  icon: JSX.Element;
}

const TECHNOLOGIES: Tech[] = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "React Router", icon: <SiReactrouter className="text-pink-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-200" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
];

export default function AutoScrollList({ items = TECHNOLOGIES }: { items?: Tech[] }) {
  return (
    <Marquee
      className="min-h-24 min-w-[60rem] py-6"
      gradient={false}
      autoFill={true}
      pauseOnHover={true}
      speed={40}
      loop={0}
    >
      {items.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-6 text-lg font-semibold text-gray-800 dark:text-gray-200"
        >
          <span className="text-2xl">{tech.icon}</span>
          {tech.name}
        </div>
      ))}
    </Marquee>
  );
}
