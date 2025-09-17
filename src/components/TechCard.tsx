import type { ReactNode } from "react";

interface TechCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-black/20 dark:bg-white/5 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all w-64 h-64 shadow-md">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 text-center">{description}</p>
    </div>
  );
}
