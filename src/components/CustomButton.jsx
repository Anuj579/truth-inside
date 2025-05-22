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
      bg: "bg-gradient-to-r from-[#ec4899] to-[#db2777]",
      hover: "hover:from-[#db2777] hover:to-[#be185d]",
      shadow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
      text: "text-white",
    },
    secondary: {
      bg: "bg-gradient-to-r from-[#a855f7] to-[#8b5cf6]",
      hover: "hover:from-[#8b5cf6] hover:to-[#7c3aed]",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      text: "text-white",
    },
    reveal: {
      bg: "bg-gradient-to-r from-[#3b82f6] to-[#2563eb]",
      hover: "hover:from-[#2563eb] hover:to-[#1d4ed8]",
      shadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
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
