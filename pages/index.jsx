import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import TypingAnimation from "../components/TypingAnimation";
import { fadeIn } from "../variants";

const Home = () => {
  const roles = [
    "CEO of Digidenone",
    "Full Stack Developer",
    "AI/ML Specialist",
    "Tech Leader",
    "Researcher",
    "Entrepreneur",
  ];

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4 xl:px-0">
          {/* Animated greeting */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-accent text-sm md:text-base font-semibold mb-2"
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl md:text-4xl xl:text-[54px] xl:leading-[1.3]"
          >
            Building The Future <br /> With{" "}
            <span className="text-accent">AI & Innovation</span>
          </motion.h1>

          {/* Typing animation for roles */}
          <motion.div
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xl md:text-2xl xl:text-3xl text-white/80 mt-4 mb-6"
          >
            I'm a <TypingAnimation words={roles} className="text-accent font-semibold" />
          </motion.div>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm md:text-base"
          >
            Hi! 👋 I'm <span className="text-accent font-semibold">Chirag Nahata</span>, a technology leader and innovator at the intersection of AI, software engineering, and entrepreneurship. 
            As <span className="font-semibold">Co-Founder & CEO of Digidenone</span> and <span className="font-semibold">Founder of Team codeARC</span>, I architect enterprise-grade AI-powered solutions that solve real-world challenges. 
            With <span className="font-semibold">6 granted patents</span>, <span className="font-semibold">3 published research papers</span>, and expertise spanning Full Stack Development, Machine Learning, and Cybersecurity, 
            I'm passionate about transforming ideas into impactful products. Currently pursuing dual degrees in <span className="font-semibold">B.Tech (AI/ML)</span> and <span className="font-semibold">B.S. Data Science from IIT Madras</span>, 
            I combine academic rigor with entrepreneurial drive to create technology that matters.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
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
    </div>
  );
};

export default Home;
