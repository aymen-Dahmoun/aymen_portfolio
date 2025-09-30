import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./ProjectModal";
import { SiReact, SiVite, SiTailwindcss, SiFirebase, SiExpo, SiReactquery, SiPostgresql, SiExpress, SiSocketdotio, SiGooglegemini, SiGmail, SiSupabase, SiCss3 } from "react-icons/si";
import type { IconType } from "react-icons";
import AutoScrollList from "./AutoScrollList";
import { FaDatabase, FaNodeJs, FaTelegram } from "react-icons/fa";
import flixflexCover from "../assets/flixflexCover.jpg";
import flixflex1 from "../assets/flixflex1.jpg";
import flixflex2 from "../assets/flixflex2.jpg";
import flixflex3 from "../assets/flixflex3.jpg";
import flixflex4 from "../assets/flixflex4.jpg";
import xvertCover from "../assets/xvertCover.jpg"
import xvert1 from "../assets/xvert1.jpg";
import xvert2 from "../assets/xvert2.jpg";
import xvert3 from "../assets/xvert3.jpg";
import xvert4 from "../assets/xvert4.jpg";
import xvert5 from "../assets/xvert5.jpg";
import moodCover from "../assets/moodCover.jpg";
import mood1 from "../assets/mood1.jpg";
import mood2 from "../assets/mood2.jpg";
import mood3 from "../assets/mood3.jpg";
import mood4 from "../assets/mood4.jpg";
import nexCover from "../assets/nexCover.png"
import nex1 from "../assets/nex1.png"
import nex2 from "../assets/nex2.png"
import nex3 from "../assets/nex3.png"
import { Database, Terminal } from "lucide-react";
import meyCover from "../assets/meyCover.png";
import mey1 from "../assets/mey1.png";
import mey2 from "../assets/mey2.png";
import mey3 from "../assets/mey3.png";
import mey4 from "../assets/mey4.png";
import fatouraCover from "../assets/fatouraCover.jpg"
import fatoura1 from "../assets/fatoura1.jpg"
import fatoura2 from "../assets/fatoura2.jpg"
import fatoura3 from "../assets/fatoura3.jpg"


export interface Tech {
  name: string;
  icon: IconType;
}
export interface Link {
  github: string;
  website: string;
}

const projects: {
  name: string;
  description: string;
  stack: Tech[];
  image: string;
  images: string[];
  links: Link;
}[] = [
  {
    name: "Flix Flex",
    description:
      "A mobile application with modern UI, lets users explore all types of shows, with authentication and a recommendation system for best experience",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "TMDB API", icon: FaDatabase },
      { name: "Expo Go", icon: SiExpo },
      { name: "React Query", icon: SiReactquery },
    ],
    image: flixflexCover,
    images: [flixflex1, flixflex2, flixflex3, flixflex4],
    links: {
      github: "https://github.com/aymen-Dahmoun/Flix_Flex",
      website: "",
    },
  },
  {
    name: "XVert",
    description: "A full stack chat app with full features, developed from scratch, powered by light and dark theme",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Express.js", icon: SiExpress },
      { name: "Nativewind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    image: xvertCover,
    images: [ xvert1, xvert2, xvert3, xvert4, xvert5 ],
    links: {
      github: "https://github.com/aymen-Dahmoun/fullStack_chatApp",
      website: "",
    },
  },
  {
    name: "MooD",
    description: "A modern app that helps you track your mood jumps over the day, and analyse them through diffrent plots, powered by Gemini API as a pyschological assistant",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Asyncstorage", icon: FaDatabase },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "Expo Go", icon: SiExpo },
    ],
    image: moodCover,
    images: [ mood1, mood2, mood3, mood4 ],
    links: {
      github: "https://github.com/aymen-Dahmoun/Mood_Tracker",
      website: "",
    },
  },
  {
    name: "Nex",
    description: "A very fancy website for a cybersecurity club, made by real passion",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Emailjs", icon: SiGmail },
      { name: "React terminal", icon: Terminal },
    ],
    image: nexCover,
    images: [ nex1, nex2, nex3 ],
    links: {
      github: "https://github.com/aymen-Dahmoun/Nex",
      website: "https://nexclub.vercel.app/Departments",
    },
  },
  {
    name: "Meyouch Shop",
    description: "An E-commerce website for girly products, smooth, user friendly, powered by a mobile application for a dashbored",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "SCSS", icon: SiCss3 },
      { name: "Supabase", icon: SiSupabase },
      { name: "Telegram Bots API", icon: FaTelegram },
    ],
    image: meyCover,
    images: [ mey1, mey2, mey3, mey4 ],
    links: {
      github: "",
      website: "https://www.meyouchshop.me/",
    },
  },
  {
    name: "Fatourati",
    description: "An invoice generator offline app, powered by seamless forms, dark/light mode, and local storage for frequent products with typing suggessions",
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "Nativewind CSS", icon: SiTailwindcss },
      { name: "Asyncstorage", icon: Database },
    ],
    image: fatouraCover,
    images: [ fatoura1, fatoura2, fatoura3 ],
    links: {
      github: "https://github.com/aymen-Dahmoun/invoce_generator",
      website: "",
    },
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
      <div className="py-20 w-screen overflow-x-hidden flex items-end inset-0 h-96 bg-gradient-to-t from-black via-black/60 to-transparent" >
        <AutoScrollList />
      </div>

      <Modal open={open} onOpenChange={setOpen} project={selectedProject} />
    </section>
  );
}
