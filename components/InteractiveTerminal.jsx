import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiTerminalLine, RiCloseLine, RiSubtractLine } from "react-icons/ri";

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Chirag's Interactive Terminal! 💻" },
    { type: "output", text: "Type 'help' to see available commands." },
    { type: "output", text: "" },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: "Show available commands",
      execute: () => [
        "Available commands:",
        "  help       - Show this help message",
        "  about      - Learn about Chirag",
        "  skills     - Display technical skills",
        "  projects   - List featured projects",
        "  patents    - Show granted patents",
        "  contact    - Get contact information",
        "  experience - View work experience",
        "  education  - Show educational background",
        "  clear      - Clear terminal screen",
        "  social     - Display social media links",
        "  whoami     - Display current user info",
        "  date       - Show current date and time",
        "",
      ],
    },
    about: {
      description: "Information about Chirag",
      execute: () => [
        "╔════════════════════════════════════════════════╗",
        "║         CHIRAG NAHATA - TECH INNOVATOR        ║",
        "╚════════════════════════════════════════════════╝",
        "",
        "🚀 CEO & CTO at Digidenone",
        "🏆 6 Granted Patents | 3 Research Papers",
        "💼 20+ Projects | 15+ Hackathons",
        "🎓 B.Tech (AI/ML) & B.S. Data Science (IIT Madras)",
        "🌟 Full Stack Developer | AI Specialist",
        "",
      ],
    },
    skills: {
      description: "Display technical skills",
      execute: () => [
        "Technical Skills Stack:",
        "",
        "┌─ Languages",
        "│  Python, JavaScript, Java, C++, PHP, SQL",
        "│",
        "├─ AI/ML",
        "│  TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP",
        "│",
        "├─ Web Development",
        "│  React.js, Next.js, Node.js, Laravel, Flutter",
        "│",
        "├─ Cloud & DevOps",
        "│  AWS, Docker, Kubernetes, Git, Linux",
        "│",
        "└─ Databases",
        "   MySQL, MongoDB, PostgreSQL, Firebase",
        "",
      ],
    },
    projects: {
      description: "List featured projects",
      execute: () => [
        "Featured Projects:",
        "",
        "1. 🔐 SynapseAudit",
        "   AI-powered smart contract security platform",
        "   → synapseaudit.digidenone.tech",
        "",
        "2. 🌍 GeoJlix",
        "   Location-based social networking platform",
        "",
        "3. 📚 EduSphere",
        "   Comprehensive educational management system",
        "",
        "4. ♻️ RecyCraft",
        "   Sustainable waste management solution",
        "",
        "5. 📝 NotewAllah",
        "   AI-enhanced note-taking application",
        "",
        "Visit /work for complete portfolio!",
        "",
      ],
    },
    patents: {
      description: "Show granted patents",
      execute: () => [
        "Granted Patents (6):",
        "",
        "1. 202531035777 A - Self-Deploying Rescue Airbag System",
        "2. 202531001611 A - Adaptive Learning Companion Device",
        "3. 202431088758 A - Thermal Imaging Attendance System",
        "4. 202431086521 A - Advanced Intelligent Commode",
        "5. 202431085561 A - Wearable Digital Posture Corrector",
        "6. 202431065333 A - Sustainable Waste Management System",
        "",
      ],
    },
    contact: {
      description: "Get contact information",
      execute: () => [
        "Contact Information:",
        "",
        "📧 Email    : chiragnahata05@gmail.com",
        "📱 Phone    : +91-7439611385",
        "💼 LinkedIn : linkedin.com/in/chirag-nahata",
        "💻 GitHub   : github.com/chiragnahata",
        "🐦 Twitter  : @chiragnahata",
        "📍 Location : Kalyani, West Bengal, India",
        "",
      ],
    },
    experience: {
      description: "View work experience",
      execute: () => [
        "Work Experience:",
        "",
        "🚀 CEO & CTO - Digidenone",
        "   Apr 2024 - Present",
        "",
        "👥 Founder & Team Leader - Team codeARC",
        "   Dec 2023 - Present",
        "",
        "🛡️ President - Tech Defenders Club",
        "   May 2024 - Present",
        "",
        "💼 Frontend Developer - CodeAlpha",
        "   Jul 2024 - Present",
        "",
        "🔬 ML Intern - CACLD",
        "   Feb 2024 - Mar 2024",
        "",
      ],
    },
    education: {
      description: "Show educational background",
      execute: () => [
        "Education:",
        "",
        "🎓 B.Tech in Artificial Intelligence & Machine Learning",
        "   JIS College of Engineering, Kalyani",
        "   2022 - 2026",
        "",
        "🏛️ B.S. in Data Science",
        "   IIT Madras",
        "   2023 - 2027",
        "",
        "Certifications:",
        "✅ Programming in Java (NPTEL - Elite Silver)",
        "✅ Various technical certifications",
        "",
      ],
    },
    social: {
      description: "Display social media links",
      execute: () => [
        "Social Media:",
        "",
        "🔗 LinkedIn  → linkedin.com/in/chirag-nahata",
        "🔗 GitHub    → github.com/chiragnahata",
        "🔗 Twitter   → twitter.com/chiragnahata",
        "🔗 YouTube   → youtube.com/@chiragnahata",
        "🔗 Instagram → instagram.com/chirag_nahata",
        "",
      ],
    },
    whoami: {
      description: "Display current user info",
      execute: () => [
        "guest@chirag-portfolio",
        "Type: Visitor",
        "Access Level: Public",
        "",
      ],
    },
    date: {
      description: "Show current date and time",
      execute: () => [new Date().toString(), ""],
    },
    clear: {
      description: "Clear terminal screen",
      execute: () => {
        setHistory([]);
        return [];
      },
    },
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    const newHistory = [
      ...history,
      { type: "input", text: `$ ${cmd}` },
    ];

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].execute();
      output.forEach((line) => {
        newHistory.push({ type: "output", text: line });
      });
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
      });
      newHistory.push({ type: "output", text: "" });
    }

    setHistory(newHistory);
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matchingCommands = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button - Positioned on left side */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 bg-black/80 backdrop-blur-sm text-green-400 px-4 py-3 rounded-lg border border-green-400/30 hover:border-green-400 transition-all shadow-lg hidden xl:flex items-center gap-2 font-mono text-sm"
      >
        <RiTerminalLine className="text-xl" />
        <span>Terminal</span>
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            className="fixed bottom-24 left-8 z-40 w-[600px] h-[450px] bg-black/95 backdrop-blur-xl rounded-lg border border-green-400/30 shadow-2xl flex flex-col overflow-hidden font-mono"
          >
            {/* Title Bar */}
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-green-400/30 cursor-move">
              <div className="flex items-center gap-2">
                <RiTerminalLine className="text-green-400" />
                <span className="text-green-400 text-sm">terminal@chirag-portfolio</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
                />
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-4 text-sm scrollbar-thin scrollbar-thumb-green-400/30 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    line.type === "input"
                      ? "text-white"
                      : line.type === "error"
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {line.text}
                </div>
              ))}
              
              {/* Input Line */}
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white outline-none border-none caret-green-400"
                  autoFocus
                  spellCheck={false}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Minimized Terminal */}
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 left-8 z-40 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-400/30 cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div className="flex items-center gap-2 text-green-400">
              <RiTerminalLine />
              <span className="text-sm font-mono">Terminal (Click to restore)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveTerminal;
