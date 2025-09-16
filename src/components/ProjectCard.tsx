import { useState, type MouseEvent } from "react";
import { cn } from "../lib/utils";

interface SimpleProjectCardProps {
  name: string;
  stack: string[];
  image: string; // image URL or import
}

export default function SimpleProjectCard({ name, stack, image }: SimpleProjectCardProps) {
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
        "relative w-[280px] md:w-[320px] bg-gradient-to-br from-black via-blue-800/5 to-blue-600/20 border border-gray-700/50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(10,10,255,0.3), transparent 40%)`,
          }}
        />
      )}

      {/* Project Image */}
      <div className="w-full h-40 bg-gray-900 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
