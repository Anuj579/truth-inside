"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InitialScreen from "@/components/InitialScreen";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import LyricsScreen from "@/components/LyricsScreen";
import CuteBackground from "@/components/CuteBackground";
import EmotionalBackground from "@/components/EmotionalBackground";

export default function Home() {
  const [step, setStep] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const audioRef = useRef(null);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleReveal = () => {
    setIsDarkTheme(true);
    setStep(4);

    // Play the song when revealing
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  return (
    <main
      className={`min-h-[100dvh] transition-colors duration-1000 ${
        isDarkTheme ? "bg-[#0f172a]" : "bg-[#fdf4ff]"
      } overflow-hidden`}
    >
      <audio ref={audioRef} src="/attention.mp3" preload="auto" />

      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkTheme ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {!isDarkTheme ? <CuteBackground /> : <EmotionalBackground />}
        </motion.div>
      </AnimatePresence>


      <AnimatePresence mode="wait">
        {step === 1 && <InitialScreen key="initial" onNext={handleNext} />}

        {step === 2 && <SecondScreen key="second" onNext={handleNext} />}

        {step === 3 && <ThirdScreen key="third" onReveal={handleReveal} />}

        {step === 4 && <LyricsScreen key="lyrics" audioRef={audioRef} />}
      </AnimatePresence>
    </main>
  );
}
