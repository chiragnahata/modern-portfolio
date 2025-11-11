import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-accent via-purple-500 to-pink-500"
      style={{
        scaleX: progress / 100,
        transformOrigin: "left",
      }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ReadingProgress;
