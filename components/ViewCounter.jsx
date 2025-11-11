import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiEyeLine } from "react-icons/ri";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // In a real implementation, this would call an API
    // For now, using localStorage for demo
    const currentViews = parseInt(localStorage.getItem("portfolioViews") || "0");
    const newViews = currentViews + 1;
    localStorage.setItem("portfolioViews", newViews.toString());
    setViews(newViews);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-32 left-8 z-50 hidden xl:flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
    >
      <RiEyeLine className="text-accent text-xl" />
      <span className="text-sm text-white/80">
        {views.toLocaleString()} views
      </span>
    </motion.div>
  );
};

export default ViewCounter;
