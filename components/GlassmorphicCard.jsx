import { motion } from "framer-motion";

const GlassmorphicCard = ({ 
  children, 
  className = "", 
  gradient = "from-white/10 to-white/5",
  blur = "blur(20px)",
  border = "border-white/20",
  hover = true 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`relative bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-3xl border ${border} shadow-2xl overflow-hidden ${className}`}
      style={{
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
    >
      {/* iOS-style inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};

export default GlassmorphicCard;
