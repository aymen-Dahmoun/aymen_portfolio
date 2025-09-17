import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./ProjectModal";
import { SiReact, SiNestjs, SiPrisma, SiFlutter, SiNextdotjs, SiNodedotjs, SiVite, SiTailwindcss, SiFirebase, SiDjango, SiPython, SiFlask } from "react-icons/si";
import type { IconType } from "react-icons";
import AutoScrollList from "./AutoScrollList";

export interface Tech {
  name: string;
  icon: IconType;
}

const projects: {
  name: string;
  description: string;
  stack: Tech[];
  image: string;
  images: string[];
}[] = [
  {
    name: "FarmConnect",
    description: "A platform connecting farmers with buyers and logistics providers.",
    stack: [
      { name: "React", icon: SiReact },
      { name: "NestJS", icon: SiNestjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "Flutter", icon: SiFlutter },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=FarmConnect+1",
      "https://via.placeholder.com/600x400?text=FarmConnect+2",
    ],
  },
  {
    name: "Savvy",
    description: "Automated task scheduling system with CRON integration.",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=Savvy+1",
      "https://via.placeholder.com/600x400?text=Savvy+2",
    ],
  },
  {
    name: "BiblioTech",
    description: "A modern digital library system for students.",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=BiblioTech+1",
      "https://via.placeholder.com/600x400?text=BiblioTech+2",
    ],
  },
  {
    name: "LifeDrop",
    description: "Blood donation mobile app to connect donors and hospitals.",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=LifeDrop+1",
      "https://via.placeholder.com/600x400?text=LifeDrop+2",
    ],
  },
  {
    name: "E-Plan",
    description: "Event planning tool with real-time collaboration.",
    stack: [
      { name: "Django", icon: SiDjango },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=E-Plan+1",
      "https://via.placeholder.com/600x400?text=E-Plan+2",
    ],
  },
  {
    name: "WatchWave",
    description: "AI-driven video content analyzer using NLP.",
    stack: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "React", icon: SiReact },
    ],
    image: "https://via.placeholder.com/320x160",
    images: [
      "https://via.placeholder.com/600x400?text=WatchWave+1",
      "https://via.placeholder.com/600x400?text=WatchWave+2",
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-center pt-20">
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="floating"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <ProjectCard
              {...project}
              onClick={() => {
                setSelectedProject(project);
                setOpen(true);
              }}
            />
          </div>
        ))}

      </div>
      <div className="py-20 w-screen flex items-end inset-0 h-96 bg-gradient-to-t from-black via-black/60 to-transparent" >
        <AutoScrollList />
      </div>

      <Modal open={open} onOpenChange={setOpen} project={selectedProject} />
    </section>
  );
}
