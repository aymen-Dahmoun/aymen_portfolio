import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./ProjectModal";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiExpo,
  SiReactquery,
  SiPostgresql,
  SiExpress,
  SiSocketdotio,
  SiGooglegemini,
  SiGmail,
  SiSupabase,
  SiCss3,
} from "react-icons/si";
import type { IconType } from "react-icons";
import AutoScrollList from "./AutoScrollList";
import { FaDatabase, FaNodeJs, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import flixflexCover from "../assets/flixflexCover.jpg";
import flixflex1 from "../assets/flixflex1.jpg";
import flixflex2 from "../assets/flixflex2.jpg";
import flixflex3 from "../assets/flixflex3.jpg";
import flixflex4 from "../assets/flixflex4.jpg";
import xvertCover from "../assets/xvertCover.jpg";
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
import nexCover from "../assets/nexCover.png";
import nex1 from "../assets/nex1.png";
import nex2 from "../assets/nex2.png";
import nex3 from "../assets/nex3.png";
import { Database, Terminal } from "lucide-react";
import meyCover from "../assets/meyCover.png";
import mey1 from "../assets/mey1.png";
import mey2 from "../assets/mey2.png";
import mey3 from "../assets/mey3.png";
import mey4 from "../assets/mey4.png";
import fatouraCover from "../assets/fatouraCover.jpg";
import fatoura1 from "../assets/fatoura1.jpg";
import fatoura2 from "../assets/fatoura2.jpg";
import fatoura3 from "../assets/fatoura3.jpg";

export interface Tech {
  name: string;
  icon: IconType;
}
export interface Link {
  github: string;
  website: string;
}

const getProjectsData = (t: any) => [
  {
    name: t("projects.flixFlex.name"),
    description: t("projects.flixFlex.description"),
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
    name: t("projects.xVert.name"),
    description: t("projects.xVert.description"),
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Express.js", icon: SiExpress },
      { name: "Nativewind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    image: xvertCover,
    images: [xvert1, xvert2, xvert3, xvert4, xvert5],
    links: {
      github: "https://github.com/aymen-Dahmoun/fullStack_chatApp",
      website: "",
    },
  },
  {
    name: t("projects.mooD.name"),
    description: t("projects.mooD.description"),
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Asyncstorage", icon: FaDatabase },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "Expo Go", icon: SiExpo },
    ],
    image: moodCover,
    images: [mood1, mood2, mood3, mood4],
    links: {
      github: "https://github.com/aymen-Dahmoun/Mood_Tracker",
      website: "",
    },
  },
  {
    name: t("projects.nex.name"),
    description: t("projects.nex.description"),
    stack: [
      { name: "React", icon: SiReact },
      { name: "Emailjs", icon: SiGmail },
      { name: "React terminal", icon: Terminal },
    ],
    image: nexCover,
    images: [nex1, nex2, nex3],
    links: {
      github: "https://github.com/aymen-Dahmoun/Nex",
      website: "https://nexclub.vercel.app/",
    },
  },
  {
    name: t("projects.meyouchShop.name"),
    description: t("projects.meyouchShop.description"),
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "SCSS", icon: SiCss3 },
      { name: "Supabase", icon: SiSupabase },
      { name: "Telegram Bots API", icon: FaTelegram },
    ],
    image: meyCover,
    images: [mey1, mey2, mey3, mey4],
    links: {
      github: "",
      website: "https://www.meyouchshop.me/",
    },
  },
  {
    name: t("projects.fatourati.name"),
    description: t("projects.fatourati.description"),
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "Nativewind CSS", icon: SiTailwindcss },
      { name: "Asyncstorage", icon: Database },
    ],
    image: fatouraCover,
    images: [fatoura1, fatoura2, fatoura3],
    links: {
      github: "https://github.com/aymen-Dahmoun/invoce_generator",
      website: "",
    },
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const projects = getProjectsData(t);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="relative flex flex-col items-center justify-center pt-20">
      <h2 className="text-4xl font-bold text-white mb-12">{t("projects.title")}</h2>

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

      <div className="w-full overflow-hidden">
        <AutoScrollList />
      </div>

      <Modal open={open} onOpenChange={setOpen} project={selectedProject} />
    </section>
  );
}
