"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholderLyrics = [
  {
    id: 1,
    text: "You just want attention, you don't want my heart",
    time: 0.8,
  },
  {
    id: 2,
    text: "Maybe you just hate the thought of me with someone new",
    time: 6,
  },
  {
    id: 3,
    text: "Yeah, you just want attention, I knew from the start",
    time: 11,
  },
  {
    id: 4,
    text: "You're just making sure I'm never gettin' over you",
    time: 16.5,
  },
];

const LyricsScreen = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleLyrics, setVisibleLyrics] = useState([]);

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const interval = setInterval(updateTime, 100);

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
    }

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [audioRef]);

  useEffect(() => {
    const newVisibleLyrics = placeholderLyrics.filter(
      (lyric) => lyric.time <= currentTime
    );
    setVisibleLyrics(newVisibleLyrics);
  }, [currentTime]);

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl w-full">
        <AnimatePresence>
          {visibleLyrics.length > 0 &&
            visibleLyrics.map((lyric, index) => (
              <motion.div
                key={lyric.id}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: index === visibleLyrics.length - 1 ? 1 : 0.5,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-4 text-center"
              >
                <p
                  className={`text-xl md:text-4xl tracking-wide leading-relaxed relative ${
                    index === visibleLyrics.length - 1
                      ? "text-white font-semibold"
                      : "text-white/50"
                  }`}
                >
                  {lyric.text}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
    
  );
};

export default LyricsScreen;
