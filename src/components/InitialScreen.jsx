"use client";

import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const InitialScreen = ({ onNext }) => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-md w-full text-center mx-4"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <motion.div
          className="mb-6 text-[#ec4899]"
          initial={{ scale: 0, rotate: -10 }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: [-10, 10, 0],
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            times: [0, 0.6, 1],
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 mx-auto"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-6 text-[#be185d] font-poppins"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I want to tell you something...
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <CustomButton onClick={onNext} variant="primary">
            Next
          </CustomButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InitialScreen;
