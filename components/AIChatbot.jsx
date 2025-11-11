import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiRobotLine, 
  RiCloseLine, 
  RiSendPlaneLine, 
  RiUserLine,
  RiSparklingLine,
  RiDeleteBin6Line
} from "react-icons/ri";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! 👋 I'm Chirag's AI assistant. Ask me anything about his work, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI responses based on keywords
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Skills and expertise
    if (message.includes("skill") || message.includes("technolog") || message.includes("stack")) {
      return "Chirag is proficient in:\n\n🔹 **Languages**: Python, JavaScript, Java, C++, PHP, SQL\n🔹 **AI/ML**: TensorFlow, PyTorch, Scikit-learn, NLP, Computer Vision\n🔹 **Web**: React.js, Next.js, Node.js, Laravel, Flutter\n🔹 **Cloud**: AWS, Docker, Kubernetes\n🔹 **Databases**: MySQL, MongoDB, PostgreSQL, Firebase\n\nHe has hands-on experience building enterprise-grade solutions!";
    }
    
    // Patents
    if (message.includes("patent") || message.includes("invention")) {
      return "Chirag has **6 granted patents** 🏆:\n\n1. Self-Deploying Rescue Airbag System for Miners\n2. Adaptive Learning Companion Device\n3. Thermal Imaging Based Attendance System\n4. Advanced Intelligent Commode\n5. Wearable Digital Posture Corrector\n6. Sustainable Waste Management System\n\nHis innovations span AI, IoT, and automation!";
    }
    
    // Projects
    if (message.includes("project") || message.includes("work") || message.includes("built")) {
      return "Chirag has completed **20+ innovative projects** 💻:\n\n🌟 **SynapseAudit**: AI-powered smart contract security\n🌍 **GeoJlix**: Location-based social platform\n📚 **EduSphere**: Educational management system\n♻️ **RecyCraft**: Sustainable waste management\n📝 **NotewAllah**: Smart note-taking application\n\nVisit the 'Work' section to explore all projects!";
    }
    
    // Experience
    if (message.includes("experience") || message.includes("work") || message.includes("job") || message.includes("ceo")) {
      return "Chirag's professional experience includes:\n\n🚀 **CEO & CTO** at Digidenone (Apr 2024 - Present)\n👥 **Founder** of Team codeARC (Dec 2023 - Present)\n🛡️ **President** at Tech Defenders Club (May 2024 - Present)\n💼 **Frontend Developer** at CodeAlpha\n🔬 **ML Intern** at CACLD\n\nHe has 3+ years of hands-on experience in leadership and development!";
    }
    
    // Education
    if (message.includes("education") || message.includes("degree") || message.includes("study") || message.includes("iit")) {
      return "Chirag is pursuing dual degrees 🎓:\n\n📚 **B.Tech in AI/ML** from JIS College of Engineering, Kalyani\n🏛️ **B.S. in Data Science** from IIT Madras\n\nHe also holds certifications in:\n✅ Programming in Java (NPTEL - Elite Silver)\n✅ Various technical domains from top platforms";
    }
    
    // Research
    if (message.includes("research") || message.includes("paper") || message.includes("publication")) {
      return "Chirag has published **3 research papers** 📄 in:\n\n🔬 Artificial Intelligence\n👁️ Computer Vision\n🤖 Machine Learning Applications\n\nHis research focuses on practical AI solutions for real-world problems. He's also won awards at multiple hackathons!";
    }
    
    // Hackathons
    if (message.includes("hackathon") || message.includes("competition") || message.includes("innovocon")) {
      return "Chirag is a hackathon enthusiast! 🏆\n\n✨ Participated in **15+ hackathons**\n🎯 Lead Organizer of **InnovoCon** (500+ participants)\n🥇 Multiple wins including JISTech 2K23 (1st Place)\n🥉 Trithon Trident 2023 (2nd Runner Up - ₹12,500)\n\nHe believes in learning through competition and collaboration!";
    }
    
    // Contact
    if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("hire")) {
      return "Ready to connect? 📧\n\n📮 **Email**: chiragnahata05@gmail.com\n📱 **Phone**: +91-7439611385\n💼 **LinkedIn**: linkedin.com/in/chirag-nahata\n💻 **GitHub**: github.com/chiragnahata\n\nVisit the 'Contact' page to send a message directly!";
    }
    
    // Company/Startup
    if (message.includes("digidenone") || message.includes("company") || message.includes("startup") || message.includes("business")) {
      return "**Digidenone** is Chirag's startup venture! 🚀\n\nFounded in April 2024, it focuses on:\n🔹 AI-powered solutions\n🔹 Enterprise software development\n🔹 Digital transformation services\n🔹 Innovative tech products\n\nAs CEO & CTO, Chirag leads both strategic vision and technical implementation!";
    }
    
    // Awards
    if (message.includes("award") || message.includes("achievement") || message.includes("recognition")) {
      return "Chirag's achievements include:\n\n🏆 Elite Silver Rank in NPTEL Java\n🥇 1st Place - JISTech 2K23\n🥉 2nd Runner Up - Trithon Trident 2023\n🌟 SSIP Gujarat Hackathon (Regional Qualifier)\n🌍 Guinness World Record Participant\n🎓 Multiple certifications and honors\n\nCheck the 'About' section for more details!";
    }
    
    // Location
    if (message.includes("location") || message.includes("where") || message.includes("based")) {
      return "Chirag is based in **Kalyani, West Bengal, India** 📍\n\nHe's open to remote opportunities and collaborations worldwide! 🌍";
    }
    
    // General greeting
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! 👋 I'm here to help you learn about Chirag's work and expertise.\n\nYou can ask me about:\n• Skills & Technologies\n• Projects & Work\n• Patents & Research\n• Experience & Education\n• Achievements & Awards\n\nWhat would you like to know?";
    }
    
    // Thank you
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! 😊 Feel free to ask me anything else about Chirag's work or reach out directly through the Contact page!";
    }
    
    // Default response
    return "That's an interesting question! 🤔\n\nI can help you with information about:\n\n💼 Professional Experience\n🛠️ Technical Skills\n🚀 Projects & Work\n🏆 Patents & Research\n🎓 Education\n📧 Contact Information\n\nTry asking something specific, or explore the portfolio sections!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        text: getAIResponse(input),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        text: "Chat cleared! How can I help you today?",
      },
    ]);
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your patents",
    "What projects have you built?",
    "How can I contact you?",
  ];

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-accent to-pink-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(241,48,36,0.5)] hover:shadow-[0_0_40px_rgba(241,48,36,0.7)] transition-all duration-300"
          >
            <RiRobotLine className="text-3xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50 w-[380px] h-[600px] bg-primary/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-pink-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <RiSparklingLine className="text-2xl text-white" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="font-bold text-white">AI Assistant</div>
                  <div className="text-xs text-white/80">Always here to help</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                  title="Clear chat"
                >
                  <RiDeleteBin6Line className="text-white text-lg" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                >
                  <RiCloseLine className="text-white text-2xl" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-white/5">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-pink-500 flex items-center justify-center flex-shrink-0">
                      <RiRobotLine className="text-white text-sm" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-accent text-white rounded-br-none"
                        : "bg-white/10 text-white rounded-bl-none"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                  </div>
                  {message.type === "user" && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <RiUserLine className="text-white text-sm" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-pink-500 flex items-center justify-center">
                    <RiRobotLine className="text-white text-sm" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-white/60 mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => handleSend(), 100);
                      }}
                      className="text-xs bg-white/5 hover:bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/50 transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-accent to-pink-500 p-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(241,48,36,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RiSendPlaneLine className="text-white text-xl" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
