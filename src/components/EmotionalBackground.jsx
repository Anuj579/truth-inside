"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EmotionalBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles for emotional background
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 1,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>

      {/* Subtle glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[100px]"></div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            x: [
              `${particle.x}vw`,
              `${(particle.x + 5) % 100}vw`,
              `${particle.x}vw`,
            ],
            y: [
              `${particle.y}vh`,
              `${(particle.y + 5) % 100}vh`,
              `${particle.y}vh`,
            ],
            opacity: [0.1, 0.35, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255,255,255,0.5)`,
          }}
        />
      ))}
    </div>
  );
};

export default EmotionalBackground;
