import { useDevice } from "../hooks/useDevice";
import MilestoneBackground from "./FloatingParticlesBg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const getMilestones = (t: any) => [
  {
    year: "2022",
    title: t("milestones.m2022.title"),
    description: t("milestones.m2022.description"),
  },
  {
    year: "2023",
    title: t("milestones.m2023_1.title"),
    description: t("milestones.m2023_1.description"),
  },
  {
    year: "2023",
    title: t("milestones.m2023_2.title"),
    description: t("milestones.m2023_2.description"),
  },
  {
    year: "2024",
    title: t("milestones.m2024.title"),
    description: t("milestones.m2024.description"),
  },
  {
    year: `${t("milestones.early")} 2025`,
    title: t("milestones.m2025_early.title"),
    description: t("milestones.m2025_early.description"),
  },
  {
    year: "2025",
    title: t("milestones.m2025.title"),
    description: t("milestones.m2025.description"),
  },
  {
    year: "2026",
    title: t("milestones.m2026.title"),
    description: t("milestones.m2026.description"),
  },
  {
    year: "2026",
    title: "Backend Developer",
    description:
      "Started working as a backend developer at Slickpay with Node.js, Also built full-stack projects combining backend and frontend technologies.",
  },

];

export default function Milestones() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const device = useDevice();
  const isMobile = device === "mobile";
  const milestones = getMilestones(t);

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-bl from-transparent via-transparent to-blue-900/10 py-20 bg-transparent overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-20 pb-10"
      >
        {t("milestones.title")}
      </motion.h2>

      <div className="relative max-w-6xl mx-auto px-6">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;
          const isLeft = isRTL ? !isEven : isEven;
          return (
            <div key={index} className="relative mb-32 md:mb-48">
              {/* Connecting "Maze" Path */}
              {!isMobile && index < milestones.length - 1 && (
                <div
                  className={`absolute top-10 h-48 w-[80%] border-indigo-500/20 z-0
                    ${isLeft
                      ? "start-8 border-s-2 border-b-2 rounded-es-[4rem]"
                      : "end-8 border-e-2 border-b-2 rounded-ee-[4rem]"
                    }`}
                />
              )}

              <div className={`flex w-full items-center ${isLeft ? "justify-start" : "justify-end"} ${isMobile ? "justify-center" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  viewport={{ once: true }}
                  className={`relative z-10 max-w-2xl ${isLeft ? "text-start ps-12" : "text-end pe-12"} ${isMobile ? "text-center px-4" : ""}`}
                >
                  {/* Glowing Node / Orb placed at the milestone */}
                  <div className={`absolute top-2 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)] z-20
                    ${isLeft ? "start-2" : "end-2"} ${isMobile ? "hidden" : "block"}`}
                  />

                  {/* Decorative Year Background */}
                  <span className={`absolute -top-16 ${isLeft ? "-start-12" : "-end-12"} text-8xl md:text-[10rem] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter`}>
                    {milestone.year}
                  </span>

                  <div className="relative pt-4">
                    <h3 className="text-4xl md:text-5xl font-black text-indigo-400 mb-2 tracking-tighter uppercase">
                      {milestone.year}
                    </h3>

                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                      {milestone.title}
                    </h4>

                    <div className={`h-1 w-24 bg-gradient-to-r ${isLeft ? "from-indigo-500 to-transparent" : "from-transparent to-indigo-500"} mb-6 ${isMobile ? "mx-auto" : (isLeft ? "" : "ms-auto")}`} />

                    <p className="text-lg md:text-xl text-blue-100/60 leading-relaxed font-medium">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
