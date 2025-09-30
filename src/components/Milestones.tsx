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
];


export default function Milestones() {

  const device = useDevice();
  return (
    <div className="relative min-h-screen w-screen justify-center items-center bg-gradient-to-bl from-black via-transparent to-blue-500/10 pt-0">
      { device !== "mobile" && <MilestoneBackground number={80} />}
        <div className="py-20 top-0 inset-0 h-[40rem] bg-gradient-to-b from-black via-black/60 to-transparent" />

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
            <div className="w-8 h-8 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] mb-4"></div>
            
            {index < milestones.length - 1 && (
              <div className="w-1 h-16 bg-gradient-to-b from-blue-400/70 to-transparent"></div>
            )}

            <div className="bg-[#101c3d]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-500/30 max-w-sm">
              <h3 className="text-xl text-blue-200 font-semibold">{milestone.year} – {milestone.title}</h3>
              <p className="text-gray-300 mt-2">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}