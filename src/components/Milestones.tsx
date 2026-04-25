import { useDevice } from "../hooks/useDevice";
import MilestoneBackground from "./FloatingParticlesBg";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2022",
    title: "First Steps",
    description:
      "Began exploring problem-solving and strategy. Earned 2nd place in the regional chess championship, which boosted my confidence and discipline.",
  },
  {
    year: "2023",
    title: "Academic Achievement",
    description:
      "Successfully graduated with a BAC degree scoring 16.40/20. Enrolled as a Computer Science student at the Higher School of Advanced Technologies.",
  },
  {
    year: "2023",
    title: "Creative Exploration",
    description:
      "Explored different areas of computer science and worked in graphic design, including social media visuals and logo design projects.",
  },
  {
    year: "2024",
    title: "Software Development Journey",
    description:
      "Dove into software projects: built automation tools with Python, experimented with automated trading systems, and developed mobile apps with Kotlin and React Native.",
  },
  {
    year: "Early 2025",
    title: "Android Development Certification",
    description:
      "Achieved an official Android Development Certificate, strengthening my skills in mobile app development and solidifying my path as a developer.",
  },
  {
    year: "2025",
    title: "Full-Stack Development",
    description:
      "Focused on mobile development with React Native and web development with React. Also built full-stack projects combining backend and frontend technologies.",
  },
  {
    year: "2026",
    title: "Backend Developer",
    description:
      "Started working as a backend developer at Slickpay with Node.js, Also built full-stack projects combining backend and frontend technologies.",
  },

];

export default function Milestones() {
  const device = useDevice();
  return (
    <div className="relative min-h-screen w-screen justify-center items-center bg-gradient-to-bl from-black via-transparent to-blue-500/10 pt-0">
      {device !== "mobile" && <MilestoneBackground number={80} />}

      <h2 className="text-center text-4xl font-bold text-blue-300 mb-12">
        My Cosmic Journey
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center mb-16"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500 shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] mb-4 border-2 border-white/20"></div>

            {index < milestones.length - 1 && (
              <div className="w-1 h-20 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent"></div>
            )}

            <div className="group bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 max-w-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl text-indigo-300 font-bold mb-3">
                {milestone.year}
              </h3>
              <h4 className="text-xl text-blue-100 font-semibold mb-2">
                {milestone.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
