import ConstellationBackground from "../components/ConstellationBackground.tsx";
import Roadmap from "../components/Milestones.tsx";
import Projects from "../components/Projects.tsx";
import TechIUse from "../components/TechIUse.tsx";

export default function Home() {

  return (
    <div
      id="home"
      className="min-h-screen relative w-screen bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 flex flex-col"
    >
      <div className="absolute inset-0 -z-10">
        <ConstellationBackground number={150} />
      </div>
      <section id="tech" className="">
        <TechIUse />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="roadmap" className="">
        <Roadmap />
      </section>
    </div>
  );
}
