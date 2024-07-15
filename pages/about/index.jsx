import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaPython,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ... (aboutData remains the same)

const About = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Inline styles for the root div to ensure it's scrollable on mobile
  const rootStyles = {
    minHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch',
  };

  return (
    <div className="bg-primary/30" style={rootStyles}>
      <Circles />

      <div className="container mx-auto py-32">
        <div className={`flex flex-col ${isMobile ? 'h-auto' : 'xl:flex-row xl:h-[80vh]'} gap-x-6`}>
          {/* text and counters */}
          <div className="flex-1 flex flex-col justify-center mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-3xl md:text-4xl xl:text-5xl mb-4 text-center xl:text-left"
            >
              Captivating <span className="text-accent">stories</span> birth
              magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm md:text-base text-center xl:text-left"
            >
              I'm Chirag Nahata, a passionate Full Stack Developer and entrepreneur driven by a relentless pursuit of innovation. I have a knack for crafting robust software, I thrive on creating impactful digital experiences. As the founder of Digidenone and Team codeARC, I'm dedicated to pushing the boundaries of technology and fostering growth through collaborative projects. Let's connect and explore how we can shape the future together through code and creativity.
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-6"
            >
              {/* ... (counter divs remain the same) */}
            </motion.div>
          </div>

          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`flex flex-col w-full ${isMobile ? 'h-auto' : 'xl:max-w-[48%] xl:h-full'} overflow-y-auto`}
            style={{ maxHeight: isMobile ? 'none' : '80vh' }}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemI) => (
                <div
                  key={itemI}
                  className={`${
                    index === itemI &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemI)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* avatar img */}
      {!isMobile && (
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>
      )}
    </div>
  );
};

export default About;
