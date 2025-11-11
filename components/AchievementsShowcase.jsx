import { motion } from "framer-motion";
import {
  RiTrophyLine,
  RiAwardLine,
  RiMedalLine,
  RiStarLine,
  RiRocketLine,
  RiLightbulbLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiFileListLine,
  RiGlobalLine,
} from "react-icons/ri";

const AchievementsShowcase = () => {
  const achievements = [
    {
      category: "Patents & Innovation",
      icon: RiLightbulbLine,
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          title: "6 Granted Patents",
          description: "Innovations in AI, IoT, and Automation",
          date: "2024-2025",
          highlight: true,
        },
        {
          title: "Self-Deploying Rescue Airbag System",
          description: "Patent No. 202531035777 A",
          date: "Apr 2025",
        },
        {
          title: "Adaptive Learning Companion Device",
          description: "Patent No. 202531001611 A",
          date: "Jan 2025",
        },
        {
          title: "Thermal Imaging Attendance System",
          description: "Patent No. 202431088758 A",
          date: "Nov 2024",
        },
      ],
    },
    {
      category: "Research Publications",
      icon: RiFileListLine,
      color: "from-blue-500 to-purple-500",
      items: [
        {
          title: "3 Published Research Papers",
          description: "AI/ML and Computer Vision domains",
          date: "2023-2024",
          highlight: true,
        },
        {
          title: "AI in Smart Contract Security",
          description: "Conference Paper - SynapseAudit Research",
          date: "2024",
        },
        {
          title: "Machine Learning for Posture Correction",
          description: "Journal Publication",
          date: "2024",
        },
      ],
    },
    {
      category: "Hackathons & Competitions",
      icon: RiTrophyLine,
      color: "from-green-500 to-teal-500",
      items: [
        {
          title: "15+ Hackathon Participations",
          description: "Multiple wins and recognitions",
          date: "2022-2024",
          highlight: true,
        },
        {
          title: "1st Place - JISTech 2K23",
          description: "App-E-Teaser Competition",
          date: "2023",
          icon: RiMedalLine,
        },
        {
          title: "2nd Runner Up - Trithon Trident",
          description: "Track 3 - ₹12,500 Prize",
          date: "2023",
          icon: RiMedalLine,
        },
        {
          title: "SSIP Gujarat Hackathon",
          description: "Regional Round Qualified",
          date: "2023",
        },
      ],
    },
    {
      category: "Leadership & Community",
      icon: RiTeamLine,
      color: "from-pink-500 to-red-500",
      items: [
        {
          title: "InnovoCon Lead Organizer",
          description: "500+ participants hackathon",
          date: "2024",
          highlight: true,
        },
        {
          title: "CEO & CTO - Digidenone",
          description: "AI-powered solutions startup",
          date: "Apr 2024 - Present",
        },
        {
          title: "Founder - Team codeARC",
          description: "Technical community leader",
          date: "Dec 2023 - Present",
        },
        {
          title: "President - Tech Defenders Club",
          description: "Cybersecurity community",
          date: "May 2024 - Present",
        },
      ],
    },
    {
      category: "Projects & Development",
      icon: RiCodeSSlashLine,
      color: "from-purple-500 to-indigo-500",
      items: [
        {
          title: "20+ Completed Projects",
          description: "Full Stack, AI/ML, Cybersecurity",
          date: "2022-2024",
          highlight: true,
        },
        {
          title: "SynapseAudit",
          description: "AI-powered smart contract security platform",
          date: "2024",
        },
        {
          title: "GeoJlix",
          description: "Location-based social networking",
          date: "2024",
        },
        {
          title: "Multiple Open Source Contributions",
          description: "GitHub repositories and collaborations",
          date: "Ongoing",
        },
      ],
    },
    {
      category: "Certifications & Recognition",
      icon: RiAwardLine,
      color: "from-cyan-500 to-blue-500",
      items: [
        {
          title: "NPTEL Programming in Java",
          description: "Elite Silver Rank - Top Performers",
          date: "2023",
          highlight: true,
        },
        {
          title: "Guinness World Record Participant",
          description: "Most People Washing Hands Online",
          date: "2023",
        },
        {
          title: "Campus Ambassador",
          description: "Internshala & CyberDojo",
          date: "2023-2024",
        },
        {
          title: "Multiple Technical Certifications",
          description: "AWS, ML, Web Development",
          date: "Various",
        },
      ],
    },
  ];

  const stats = [
    { number: "6", label: "Patents Granted", icon: RiLightbulbLine },
    { number: "3", label: "Research Papers", icon: RiFileListLine },
    { number: "15+", label: "Hackathon Wins", icon: RiTrophyLine },
    { number: "500+", label: "InnovoCon Attendees", icon: RiTeamLine },
    { number: "20+", label: "Projects Built", icon: RiCodeSSlashLine },
    { number: "3+", label: "Years Experience", icon: RiRocketLine },
  ];

  return (
    <div className="space-y-12">
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-accent/30 text-center group hover:scale-105 transition-transform"
          >
            <stat.icon className="text-3xl text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements by Category */}
      <div className="space-y-8">
        {achievements.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                <category.icon className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                <div className="text-sm text-white/60">
                  {category.items.length} achievements
                </div>
              </div>
            </div>

            {/* Achievement Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.1 + itemIndex * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all ${
                    item.highlight
                      ? "border-accent shadow-[0_0_20px_rgba(241,48,36,0.2)]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute top-2 right-2">
                      <RiStarLine className="text-accent text-xl" />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    {item.icon && (
                      <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg flex-shrink-0`}>
                        <item.icon className="text-white text-lg" />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white mb-1">{item.title}</div>
                      <div className="text-sm text-white/70 mb-2">{item.description}</div>
                      <div className="text-xs text-accent font-semibold">{item.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-2xl p-8 text-center"
      >
        <RiGlobalLine className="text-5xl text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">
          Let's Create Something Amazing Together!
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          With a proven track record of innovation, leadership, and technical excellence, 
          I'm ready to bring your ideas to life.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/contact"
            className="bg-white hover:bg-white/90 text-accent font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="/work"
            className="bg-black/30 hover:bg-black/50 text-white font-bold px-8 py-3 rounded-xl border border-white/30 hover:border-white transition-all"
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementsShowcase;
