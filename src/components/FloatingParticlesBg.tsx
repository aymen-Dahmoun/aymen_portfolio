import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface MilestoneBackgroundProps {
  number?: number;
}

export default function MilestoneBackground({ number = 80 }: MilestoneBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="milestone-particles"
      init={particlesInit}
      className="absolute inset-0 -z-10 bg-gradient-to-bl from-blue-800/20 via-black to-blue-800/20" // dark blue theme
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: { grab: { distance: 120, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: "#3b82f6" }, // glowing blue
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 0.6,
          },
          move: {
            enable: true,
            speed: 0.6, // slower for calmer vibe
            outModes: { default: "out" },
          },
          number: { value: number, density: { enable: true, area: 800 } },
          opacity: { value: { min: 0.3, max: 0.7 } },
          shape: { type: ["circle", "star"] },
          size: { value: { min: 1.5, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
