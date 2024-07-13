import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full overflow-auto overflow-y-scroll sm:overflow-auto sm:overflow-y-scroll"> {/* Mobile scroll */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center sm:pt-20 sm:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Transforming Ideas<br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm mx-auto mb-10">
            Hello there!  I'm Chirag Nahata, a versatile developer on a perpetual journey of coding exploration. From crafting robust software solutions to diving into the latest technologies, my work is a canvas reflecting my passion for innovation. As a Full Stack Developer, Hackathon Enthusiast, Founder of Team codeARC and Digidenone, Entrepreneur, and Researcher, I bring a blend of creativity, efficiency, and commitment to lifelong learning. Join me in the exciting world of code, where every project tells a story of growth and collaboration.
          </motion.p>

          {/* Button - Mobile & Desktop */}
          <div className="flex justify-center sm:hidden relative">
            <ProjectsBtn />
          </div>
          <div className="hidden sm:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>

      {/* Image & Content - Mobile-first layout */}
      <div className="w-full flex flex-col sm:flex-row"> {/* Mobile flex row */}
        {/* Image */}
        <div className="w-full h-full sm:w-1/2 absolute right-0 bottom-0">
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>

        {/* Content on larger screens */}
        <div className="hidden sm:w-1/2 sm:p-10"> {/* Content visible on desktop */}
          {/* Add your additional content here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
