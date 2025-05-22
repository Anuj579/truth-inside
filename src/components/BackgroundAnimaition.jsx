"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = ({ isDarkTheme }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random elements
    const newElements = Array.from(
      { length: isDarkTheme ? 40 : 25 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isDarkTheme ? Math.random() * 2 + 1 : Math.random() * 15 + 5,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
        shape: isDarkTheme
          ? "circle"
          : ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
        color: isDarkTheme
          ? ["#64748b", "#475569", "#334155"][Math.floor(Math.random() * 3)]
          : ["#38bdf8", "#7dd3fc", "#bae6fd", "#fde68a"][
              Math.floor(Math.random() * 4)
            ],
      })
    );

    setElements(newElements);
  }, [isDarkTheme]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${
            element.shape === "circle"
              ? "rounded-full"
              : element.shape === "square"
              ? "rounded-lg"
              : "clip-triangle"
          }`}
          initial={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
            opacity: 0.3,
            rotate: element.rotation,
          }}
          animate={{
            x: [
              `${element.x}vw`,
              `${(element.x + 20) % 100}vw`,
              `${element.x}vw`,
            ],
            y: [
              `${element.y}vh`,
              `${(element.y + 20) % 100}vh`,
              `${element.y}vh`,
            ],
            opacity: [0.3, 0.7, 0.3],
            rotate: [
              element.rotation,
              element.rotation + 180,
              element.rotation + 360,
            ],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            filter: isDarkTheme ? "blur(1px)" : "blur(0px)",
            boxShadow: isDarkTheme
              ? `0 0 ${element.size * 2}px ${element.color}40`
              : "none",
          }}
        />
      ))}

      {isDarkTheme && (
        <div className="absolute inset-0 bg-gradient-radial from-[#1e293b]/30 to-transparent" />
      )}
    </div>
  );
};

export default BackgroundAnimation;
