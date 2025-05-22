"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholderLyrics = [
  {
    id: 1,
    text: "You just want attention, you don't want my heart",
    time: 0.5,
  },
  {
    id: 2,
    text: "Maybe you just hate the thought of me with someone new",
    time: 5.5,
  },
  {
    id: 3,
    text: "Yeah, you just want attention, I knew from the start",
    time: 10.5,
  },
  {
    id: 4,
    text: "You're just making sure I'm never gettin' over you",
    time: 16,
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
          {visibleLyrics.map((lyric, index) => (
            <motion.div
              key={lyric.id}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: index === visibleLyrics.length - 1 ? [1, 1.05, 1] : 1,
              }}
              transition={{
                duration: 0.8,
                scale: {
                  duration: 2,
                  repeat:
                    index === visibleLyrics.length - 1
                      ? Number.POSITIVE_INFINITY
                      : 0,
                  repeatType: "loop",
                },
              }}
              className="mb-4 text-center"
            >
              <p className="text-2xl md:text-4xl font-lora tracking-wide leading-relaxed relative z-10">
                <span className="font-semibold">{lyric.text}</span>
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LyricsScreen;
