import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 bg-explosion bg-cover bg-center bg-no-repeat opacity-20 z-0" />
      
      {/* content wrapper */}
      <div className="relative z-10 w-full h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center pt-40 md:pt-48 xl:pt-56 xl:text-left h-full container mx-auto px-4">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm md:text-base max-w-sm md:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12"
            >
              Hello there! 👋 I'm Chirag Nahata, a versatile developer on a perpetual journey of coding exploration. 
              From crafting robust software solutions to diving into the latest technologies, my work is a canvas reflecting my passion for innovation. 
              As a Full Stack Developer, Hackathon Enthusiast, Founder of Team codeARC and Digidenone, Entrepreneur, and Researcher, I bring a blend of creativity, efficiency, and commitment to lifelong learning. 
              Join me in the exciting world of code, where every project tells a story of growth and collaboration.
            </motion.p>

            {/* btn */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center xl:justify-start"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        
        {/* image */}
        <div className="w-full h-[50vh] md:h-[60vh] xl:h-full absolute right-0 bottom-0">
          {/* particles */}
          <ParticlesContainer />

          {/* avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[300px] md:max-w-[450px] xl:max-w-[737px] max-h-[300px] md:max-h-[450px] xl:max-h-[678px] absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:left-auto xl:right-[8%] xl:translate-x-0"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
