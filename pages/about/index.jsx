import { motion } from "framer-motion";
import { useState } from "react";
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

//  data
export const aboutData = [
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
          FaPython
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
        title: "2nd Runner Up Track 3 Certificate of Appreciation, Trithon Trident 2023, Bhubheswar - Rs 12500 ",
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
      {
        title: "Co-Founder & CEO - Digidenone",
        stage: "April 2024 - Present",
      },
      {
        title: "Founder & Team Laeder - Team codeARC",
        stage: "December 2023 - Present",
      },
      {
        title: "Internshala Student Partner - Internshala",
        stage: "June 2024 - July 2024",
      },
      {
        title: "Sales & Marketing Intern - Skill Academia",
        stage: "May 2024 - June 2024",
      },
      {
        title: "Internship on Machine Learning - Centre For Advanced Computer Learning and Development | CACLD",
        stage: "Febuary 2024 - March 2024",
      },
      {
        title: "Digital Marketing Course Trainer - GANDHI INSTITUTE FOR TECHNOLOGY[GIFT] , BHUBANESWAR",
        stage: "Febuary 2024 - March 2024",
      },
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
      {
        title: "Certificate of Participation in HackForge : Forging the Future of Srijan 2024 - Unstop",
        stage: "March 2024",
      },
      {
        title: "2nd Runner Up Track 3 Certificate of Appreciation, Trithon Trident 2023, Bhubheswar - Trident Groups of Institutions",
        stage: "December 2023",
      },
      {
        title: "JISTech 2K23 : 1st Position in App-E-Teaser Competition - JIS College of Engineering",
        stage: "November 2023",
      },
      {
        title: "SSIP Gujarat Hackthon 2023 Regional Round Participation Certificate - SSIP Gujarat",
        stage: "November 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm Chirag Nahata, a passionate Full Stack Developer and entrepreneur driven by a relentless pursuit of innovation. I have a knack for crafting robust software, I thrive on creating impactful digital experiences. As the founder of Digidenone and Team codeARC, I'm dedicated to pushing the boundaries of technology and fostering growth through collaborative projects. Let's connect and explore how we can shape the future together through code and creativity.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* hackathons */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Hackathons Participated.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
  );
};

export default About;
