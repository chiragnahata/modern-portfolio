import { motion } from "framer-motion";
import React from "react";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
} from "react-icons/ri";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiAmazonaws,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";

const skills = [
  { icon: RiReactjsLine, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: RiNodejsLine, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: RiJavascriptLine, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: RiHtml5Line, name: "HTML5", color: "#E34F26" },
].filter(skill => skill.icon); // Filter out any undefined icons

const FloatingTechStack = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -10, scale: 1.1 }}
            className="group relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all duration-300">
              <IconComponent 
                className="text-4xl transition-all duration-300" 
                style={{ color: skill.color }}
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="text-xs text-white/80 bg-black/80 px-2 py-1 rounded">
                {skill.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTechStack;
