import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiSunLine, RiMoonLine, RiComputerLine } from "react-icons/ri";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-32 right-8 z-50 hidden xl:flex gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleTheme("light")}
        className={`p-3 rounded-full backdrop-blur-sm border transition-all ${
          theme === "light"
            ? "bg-accent border-accent text-white"
            : "bg-white/10 border-white/20 text-white hover:border-accent"
        }`}
        title="Light Mode"
      >
        <RiSunLine className="text-xl" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleTheme("dark")}
        className={`p-3 rounded-full backdrop-blur-sm border transition-all ${
          theme === "dark"
            ? "bg-accent border-accent text-white"
            : "bg-white/10 border-white/20 text-white hover:border-accent"
        }`}
        title="Dark Mode"
      >
        <RiMoonLine className="text-xl" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleTheme("auto")}
        className={`p-3 rounded-full backdrop-blur-sm border transition-all ${
          theme === "auto"
            ? "bg-accent border-accent text-white"
            : "bg-white/10 border-white/20 text-white hover:border-accent"
        }`}
        title="Auto Mode"
      >
        <RiComputerLine className="text-xl" />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
