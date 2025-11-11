import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import AchievementsShowcase from "../../components/AchievementsShowcase";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="h2 text-center">
            Achievements & <span className="text-accent">Milestones</span>
          </h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto mt-4">
            A comprehensive showcase of patents, publications, hackathon victories, 
            leadership roles, and professional recognition earned throughout my journey 
            in technology and innovation.
          </p>
        </motion.div>

        {/* Achievements Component */}
        <AchievementsShowcase />
      </div>

      <Bulb />
    </div>
  );
};

export default Achievements;
