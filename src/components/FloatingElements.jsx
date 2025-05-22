"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingElements = ({ isDarkTheme }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random elements
    const newElements = Array.from(
      { length: isDarkTheme ? 30 : 20 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isDarkTheme ? Math.random() * 3 + 1 : Math.random() * 20 + 10,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })
    );

    setElements(newElements);
  }, [isDarkTheme]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${
            isDarkTheme ? "bg-purple-500 opacity-10" : "bg-pink-200"
          }`}
          initial={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
            opacity: 0.3,
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
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            width: isDarkTheme ? `${element.size}px` : `${element.size}px`,
            height: isDarkTheme ? `${element.size}px` : `${element.size}px`,
            filter: isDarkTheme ? "blur(2px)" : "blur(0px)",
          }}
        />
      ))}

      {isDarkTheme && (
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent" />
      )}
    </div>
  );
};

export default FloatingElements;
