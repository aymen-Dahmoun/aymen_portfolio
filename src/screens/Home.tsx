import { useDevice } from "../hooks/useDevice";
import ConstellationBackground from "../components/ConstellationBackground";
import Roadmap from "../components/Milestones";
import Projects from "../components/Projects";
import TechIUse from "../components/TechIUse";

export default function Home() {
  
  const device = useDevice();
  console.log(device);

  return (
    <div
      id="home"
      style={{backgroundColor: device === "mobile" ? "#000" : ""}}
      className="min-h-screen relative w-screen bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 flex flex-col"
    >
        {device !== "mobile" &&
          <div className="absolute inset-0 -z-10">
            <ConstellationBackground number={70} />
          </div>
        }
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
