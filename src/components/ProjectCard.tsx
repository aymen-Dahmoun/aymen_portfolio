import { useState, type MouseEvent } from "react";
import { cn } from "../lib/utils";
import type { Tech } from "./Projects";

interface ProjectCardProps {
  name: string;
  stack: Tech[];
  image: string;
  onClick?: () => void;
}

export default function ProjectCard({ name, stack, image, onClick }: ProjectCardProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn(
        "relative w-[280px] md:w-[320px] bg-gradient-to-br from-black via-blue-800/5 to-blue-600/20 border border-gray-700/50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer"
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(10,10,255,0.3), transparent 40%)`,
          }}
        />
      )}

      <div className="w-full h-40 bg-gray-900 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
