import MilestoneBackground from "./FloatingParticlesBg";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "First Steps",
    description: "Started coding journey, experimenting with Python and small projects.",
  },
  {
    year: "2021",
    title: "Mobile Development",
    description: "Built my first mobile app in Kotlin and React Native.",
  },
  {
    year: "2023",
    title: "AI & Backend",
    description: "Explored AI utilities with Python and APIs, and worked with Express.js & Django.",
  },
  {
    year: "2025",
    title: "Energy & Trading Bots",
    description: "Dove into optimization projects in renewable energy and built trading systems.",
  },
];

export default function Roadmap() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-bl from-black via-transparent to-blue-500/10 pt-0">
      <MilestoneBackground number={80} />
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
            {/* Glowing orb */}
            <div className="w-8 h-8 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] mb-4"></div>
            
            {/* Line connecting orbs */}
            {index < milestones.length - 1 && (
              <div className="w-1 h-16 bg-gradient-to-b from-blue-400/70 to-transparent"></div>
            )}

            {/* Info */}
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