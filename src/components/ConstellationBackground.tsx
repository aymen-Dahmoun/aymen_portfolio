import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ConstellationBackgroundProps {
  number?: number;
}

export default function ConstellationBackground({ number = 150 }: ConstellationBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="inset-0 -z-10 bg-transparent"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 80, duration: 0.1 } },
        },
        particles: {
          color: { value: "#6366f1" },
          links: {
            color: "#6366f1",
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 1,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: { default: "out" },
          },
          number: { value: number, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: ["circle", "triangle", "edge", "polygon"] },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
