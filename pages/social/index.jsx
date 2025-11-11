import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SocialAggregator from "../../components/SocialAggregator";

const Social = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-primary/30 py-32 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

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
            Connect <span className="text-accent">Everywhere</span>
          </h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto mt-4">
            Find me across the digital landscape - from professional networks to creative
            communities. Let's collaborate, share ideas, and build amazing things together!
          </p>
        </motion.div>

        {/* Social Aggregator Component */}
        <SocialAggregator />
      </div>

      <Bulb />
    </div>
  );
};

export default Social;
