// src/components/StarsBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.2,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false },
          },
          size: {
            value: 1.2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outModes: { default: "out" },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default StarsBackground;
