import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import {
  RiCodeSLine,
  RiAwardLine,
  RiUserHeartLine,
  RiTeamLine,
  RiRocketLine,
  RiLightbulbLine,
} from "react-icons/ri";

const stats = [
  {
    icon: RiCodeSLine,
    number: 20,
    suffix: "+",
    label: "Projects Completed",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: RiLightbulbLine,
    number: 6,
    suffix: "",
    label: "Granted Patents",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: RiAwardLine,
    number: 15,
    suffix: "+",
    label: "Hackathons",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: RiUserHeartLine,
    number: 500,
    suffix: "+",
    label: "InnovoCon Participants",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: RiTeamLine,
    number: 3,
    suffix: "",
    label: "Research Papers",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: RiRocketLine,
    number: 3,
    suffix: "+",
    label: "Years Experience",
    color: "from-red-500 to-pink-500",
  },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(241,48,36,0.3)]">
            {/* Icon with gradient background */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="text-2xl text-white" />
            </div>
            
            {/* Number */}
            <div className="text-3xl font-bold text-white mb-2">
              {isInView && (
                <>
                  <CountUp start={0} end={stat.number} duration={2.5} />
                  {stat.suffix}
                </>
              )}
            </div>
            
            {/* Label */}
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
