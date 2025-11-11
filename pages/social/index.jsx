import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SocialAggregator from "../../components/SocialAggregator";

const Social = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      <div className="container mx-auto h-full flex flex-col justify-center">
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
