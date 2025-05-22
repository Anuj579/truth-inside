"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CuteBackground = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate cute elements
    const shapes = ["heart", "star", "circle", "cloud"];
    const colors = ["#f9a8d4", "#c4b5fd", "#93c5fd", "#a5f3fc", "#fde68a"];

    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 1,
      rotation: Math.random() * 360,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setElements(newElements);
  }, []);

  const getShapePath = (shape) => {
    switch (shape) {
      case "heart":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        );
      case "star":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "cloud":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fde4f2] via-[#fce7f3] to-[#e0f2fe] opacity-50"></div>

      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
            opacity: 0,
            rotate: element.rotation,
          }}
          animate={{
            x: [
              `${element.x}vw`,
              `${(element.x + 10) % 100}vw`,
              `${element.x}vw`,
            ],
            y: [
              `${element.y}vh`,
              `${(element.y + 10) % 100}vh`,
              `${element.y}vh`,
            ],
            opacity: [0, 0.8, 0],
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
            color: element.color,
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        >
          {element.shape === "circle" ? (
            <div className="w-full h-full rounded-full bg-current" />
          ) : (
            getShapePath(element.shape)
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CuteBackground;
