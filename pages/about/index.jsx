import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaPython,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Avatar3D from "../../components/Avatar3D";
import Circles from "../../components/Circles";
import GitHubStats from "../../components/GitHubStats";
import FloatingTechStack from "../../components/FloatingTechStack";
import StatsCounter from "../../components/StatsCounter";
import GlassmorphicCard from "../../components/GlassmorphicCard";
import InteractiveResume from "../../components/InteractiveResume";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [FaPython, FaJs, FaHtml5, FaCss3, FaReact],
        stage: "Python, Java, JavaScript, C++, PHP, SQL",
      },
      {
        title: "AI/ML",
        icons: [SiTensorflow, SiPytorch],
        stage: "TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP",
      },
      {
        title: "Web & Mobile",
        icons: [FaReact, SiNextdotjs, FaNodeJs, SiFlutter, SiLaravel],
        stage: "React.js, Next.js, Node.js, Laravel, Flutter",
      },
      {
        title: "DevOps & Cloud",
        icons: [FaAws, FaDocker, FaGitAlt],
        stage: "AWS, Docker, Git, Linux, Cybersecurity",
      },
      {
        title: "Databases",
        icons: [SiMongodb, SiMysql],
        stage: "MySQL, MongoDB, PostgreSQL, Firebase",
      },
    ],
  },
  {
    title: "github",
    component: "GitHubStats",
  },
  {
    title: "patents",
    info: [
      {
        title: "Self-Deploying Rescue Airbag System for Miners",
        stage: "Patent No. 202531035777 A - Apr 2025",
      },
      {
        title: "Adaptive Learning Companion Device",
        stage: "Patent No. 202531001611 A - Jan 2025",
      },
      {
        title: "Thermal Imaging Based Attendance Monitoring System",
        stage: "Patent No. 202431088758 A - Nov 2024",
      },
      {
        title: "Advanced Intelligent Commode with Integrated Wash Basin",
        stage: "Patent No. 202431086521 A - Nov 2024",
      },
      {
        title: "Wearable Digital Posture Corrector with ML Personalization",
        stage: "Patent No. 202431085561 A - Sep 2024",
      },
      {
        title: "Sustainable Waste Management System",
        stage: "Patent No. 202431065333 A - Sep 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Co-Founder, CEO & CTO - Digidenone",
        stage: "Apr 2024 - Present",
      },
      {
        title: "Founder & Team Leader - Team codeARC",
        stage: "Dec 2023 - Present",
      },
      {
        title: "President - Tech Defenders Club at CyberDojo",
        stage: "May 2024 - Present",
      },
      {
        title: "Frontend Developer - CodeAlpha",
        stage: "Jul 2024 - Present",
      },
      {
        title: "Full Stack Development Intern - CyberDojo",
        stage: "May 2024 - Present",
      },
      {
        title: "Digital Marketing Trainer - GIFT, Bhubaneswar",
        stage: "Feb 2024 - Mar 2024",
      },
      {
        title: "ML Intern - CACLD",
        stage: "Feb 2024 - Mar 2024",
      },
      {
        title: "Campus Ambassador - Internshala & CyberDojo",
        stage: "Various Terms",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Elite Silver Rank - NPTEL Programming in Java",
        stage: "Top Performers Category",
      },
      {
        title: "Lead Organizer - InnovoCon Hackathon",
        stage: "500+ participants, 2024",
      },
      {
        title: "1st Position Winner - JISTech 2K23 App-E-Teaser",
        stage: "JIS College of Engineering",
      },
      {
        title: "2nd Runner Up Track 3 - Trithon Trident 2023",
        stage: "Rs 12,500 Prize",
      },
      {
        title: "SSIP Gujarat Hackathon 2023",
        stage: "Regional Round Qualified",
      },
      {
        title: "15+ Hackathon Participations",
        stage: "Multiple Wins & Recognitions",
      },
      {
        title: "3 Published Research Papers",
        stage: "AI/ML & Computer Vision",
      },
      {
        title: "Guinness World Record Participant",
        stage: "Most People Washing Hands Online",
      },
    ],
  },
];

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

  return (
    <div className={`min-h-screen bg-primary/30 py-32 pb-24 text-center xl:text-left overflow-y-auto ${isMobile ? 'mobile-scrollable' : ''}`}>
      <Circles />

      {/* 3D avatar */}
      {!isMobile && (
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px] w-[500px] h-[600px]"
        >
          <Avatar3D className="w-full h-full" fallback={true} />
        </motion.div>
      )}

      <div className="container mx-auto px-4 xl:px-8 h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mb-8 xl:mb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl md:text-4xl xl:text-5xl mb-4"
          >
            Innovation through <span className="text-accent">code & research</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm md:text-base"
          >
            I'm a versatile technology leader combining entrepreneurial vision with technical excellence. 
            From architecting AI-powered security analysis platforms to leading teams at Digidenone and Team codeARC, 
            I bring deep expertise in Full Stack Development, Machine Learning, and Cybersecurity. 
            My work is driven by curiosity and a commitment to creating impactful solutions—whether through 
            6 granted patents, 3 research publications, or organizing hackathons like InnovoCon with 500+ participants. 
            Currently pursuing dual degrees in Computer Science (AI/ML) and Data Science from IIT Madras, 
            I'm constantly pushing boundaries to transform ideas into reality.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-6 mb-8"
          >
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[120px] mb-4 xl:mb-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>

            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[120px] mb-4 xl:mb-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={20} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Projects completed
              </div>
            </div>

            {/* patents */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[120px] mb-4 xl:mb-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={6} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Granted patents
              </div>
            </div>

            {/* hackathons */}
            <div className="relative flex-1 min-w-[120px]">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={15} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Hackathons participated
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Showcase */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            className="mb-8 w-full"
          >
            <h3 className="text-xl font-bold mb-4 text-accent">Tech Stack</h3>
            <FloatingTechStack />
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-white/5"
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
            {aboutData[index].component === "GitHubStats" ? (
              <GitHubStats />
            ) : (
              aboutData[index].info.map((item, itemI) => (
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
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
