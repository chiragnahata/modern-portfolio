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
  // ... rest of the component code remains the same
};

export default About;
