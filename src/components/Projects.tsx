import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "FarmConnect",
    stack: ["React", "NestJS", "Prisma", "Flutter"],
    image: "https://via.placeholder.com/320x160",
  },
  {
    name: "Savvy",
    stack: ["Next.js", "CRON", "Node-fetch"],
    image: "https://via.placeholder.com/320x160",
  },
  {
    name: "BiblioTech",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "https://via.placeholder.com/320x160",
  },
  {
    name: "LifeDrop",
    stack: ["React Native", "Firebase", "JSON"],
    image: "https://via.placeholder.com/320x160",
  },
  {
    name: "E-Plan",
    stack: ["Django", "React.js", "Vite"],
    image: "https://via.placeholder.com/320x160",
  },
  {
    name: "WatchWave",
    stack: ["Python", "Flask", "NLP", "React"],
    image: "https://via.placeholder.com/320x160",
  },
];

export default function Projects() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold text-white mb-12">✨ Projects ✨</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`floating`}
            style={{
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
