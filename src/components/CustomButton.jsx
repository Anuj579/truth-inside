"use client";

import { motion } from "framer-motion";

const CustomButton = ({
  onClick,
  children,
  className,
  variant = "primary",
}) => {
  const variants = {
    primary: {
      bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      hover: "hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600",
      shadow: "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
      text: "text-white",
    },
    secondary: {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      hover: "hover:from-pink-600 hover:to-purple-600",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      text: "text-white",
    },
    reveal: {
      bg: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
      hover: "hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700",
      shadow: "shadow-[0_0_15px_rgba(107,33,168,0.5)]",
      text: "text-white",
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${currentVariant.bg} ${currentVariant.hover} ${currentVariant.shadow} ${currentVariant.text}
        px-8 py-3 rounded-full font-medium text-lg transition-all duration-300
        hover:scale-105 active:scale-95 cursor-pointer
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
