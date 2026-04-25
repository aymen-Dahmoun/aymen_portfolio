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
  SiSupabase,
  SiFirebase,
  SiOpenai,
  SiPython,
  SiDjango,
  SiJavascript,
  SiThreedotjs,
  SiExpo,
} from "react-icons/si";
import { FaMobile, FaRobot } from "react-icons/fa";
import { Server, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Tech {
  title: string;
  description: string;
  icon: JSX.Element;
}

const getTechData = (t: any) => ({
  WEB: [
    { title: "React", description: t("tech.react"), icon: <SiReact className="text-sky-400" /> },
    { title: "Redux", description: t("tech.redux"), icon: <SiRedux className="text-purple-500" /> },
    { title: "TailwindCSS", description: t("tech.tailwindcss"), icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "TypeScript", description: t("tech.typescript"), icon: <SiTypescript className="text-blue-500" /> },
    { title: "JavaScript", description: t("tech.javascript"), icon: <SiJavascript className="text-yellow-500" /> },
    { title: "Three JS", description: t("tech.threeJS"), icon: <SiThreedotjs className="text-white" /> },
  ],
  MOBILE: [
    { title: "React Native", description: t("tech.reactNative"), icon: <SiReact className="text-sky-400" /> },
    { title: "Redux", description: t("tech.predictableState"), icon: <SiRedux className="text-purple-500" /> },
    { title: "Expo", description: t("tech.devOps"), icon: <SiExpo className="text-white" /> },
    { title: "NativewindCSS", description: t("tech.tailwindcss"), icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "TypeScript", description: t("tech.typescript"), icon: <SiTypescript className="text-blue-500" /> },
    { title: "JavaScript", description: t("tech.javascript"), icon: <SiJavascript className="text-yellow-500" /> },
  ],
  BACKEND: [
    { title: "Node.js", description: t("tech.jsRuntime"), icon: <SiNodedotjs className="text-green-500" /> },
    { title: "Express.js", description: t("tech.minimalistFramework"), icon: <SiExpress className="text-gray-400" /> },
    { title: "PostgreSQL", description: t("tech.relationalDB"), icon: <SiPostgresql className="text-sky-600" /> },
    { title: "MySQL", description: t("tech.sqlDatabase"), icon: <SiMysql className="text-blue-600" /> },
    { title: "Supabase", description: t("tech.favoriteBaaS"), icon: <SiSupabase className="text-green-600" /> },
    { title: "Firebase", description: t("tech.secondFavoriteBaaS"), icon: <SiFirebase className="text-orange-600" /> },
  ],
  AI: [
    { title: "Python", description: t("tech.aiMLDev"), icon: <SiPython className="text-yellow-500" /> },
    { title: "Django", description: t("tech.pythonWebFramework"), icon: <SiDjango className="text-green-700" /> },
    { title: "n8n", description: t("tech.workflowAutomation"), icon: <FaRobot className="text-pink-500" /> },
    { title: "ViaSocket", description: t("tech.integrationService"), icon: <FaRobot className="text-indigo-500" /> },
  ]
});

export default function TechIUse() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const { WEB, MOBILE, BACKEND, AI } = getTechData(t);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getCurrent = (list: Tech[]) => list[index % list.length];

  return (
    <main className="flex-1 z-10 gap-12 flex text-neutral-100 flex-col items-center pt-24 mb-52 justify-center">
      <h1 className="text-4xl font-bold">{t("home.whatIUse")}</h1>
      <span className="text-lg font-light mb-16 max-w-2xl text-center">
        {t("home.techSubtitle")}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-6">
            <h2 className="text-xl font-semibold">{t("home.web")}</h2>
            <Terminal size={22} className="text-4xl text-white" />
          </div>
          <div key={index} className="flex fade-in">
            <TechCard {...getCurrent(WEB)} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-6">
            <h2 className="text-xl font-semibold">{t("home.mobile")}</h2>
            <FaMobile size={22} className="text-4xl text-white" />
          </div>
          <div key={`mobile-${index}`} className="flex fade-in">
            <TechCard {...getCurrent(MOBILE)} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-6">
            <h2 className="text-xl font-semibold">{t("home.backend")}</h2>
            <Server size={22} className="text-4xl text-white" />
          </div>
          <div key={`backend-${index}`} className="flex fade-in">
            <TechCard {...getCurrent(BACKEND)} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-6">
            <h2 className="text-xl font-semibold">{t("home.ai")}</h2>
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