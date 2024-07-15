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

  // Move aboutData inside the component
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            FaHtml5,
            FaCss3,
            FaJs,
            FaReact,
            FaPython,
          ],
        },
        {
          title: "UI/UX Design",
          icons: [SiAdobephotoshop],
        },
      ],
    },
    {
      title: "awards",
      info: [
        {
          title: "JISTech 2K23 - 1st Position in App-E-Teaser Competition",
          stage: "November 2023",
        },
        {
          title: "2nd Runner Up Track 3 Certificate of Appreciation, Trithon Trident 2023, Bhubheswar - Rs 12500",
          stage: "December 2023",
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Frontend Developer - CodeAplha",
          stage: "July 2024 - Present",
        },
        {
          title: "Full Stack Development Intern, Campus Ambassador & Tech Defenders Club President - CyberDojo : The School of CyberDefense",
          stage: "May 2024 - Present",
        },
        // ... (other experience items)
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title: "CCSF Course Completion Badge - CyberDojo : The School of CyberDefense",
          stage: "April 2024",
        },
        {
          title: "Certificate of Achievement - The Dark Pattern Busters Hackathon 2023 - Indian Institute of Technology (Banaras Hindu University), Varanasi",
          stage: "March 2024",
        },
        // ... (other credential items)
      ],
    },
  ];

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
          {/* ... (rest of the component remains the same) */}
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
