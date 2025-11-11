import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMessage3Line,
  RiSendPlane2Fill,
  RiCloseLine,
  RiUser3Line,
  RiRobotLine,
} from "react-icons/ri";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm Chirag's AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "What are Chirag's skills?",
    "Tell me about his projects",
    "How can I contact him?",
    "What are his achievements?",
  ];

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("skill") || msg.includes("technology") || msg.includes("tech stack")) {
      return "Chirag is skilled in:\n\n🔹 Languages: Python, JavaScript, Java, C++\n🔹 Web: React, Next.js, Node.js, Laravel\n🔹 AI/ML: TensorFlow, PyTorch, OpenCV\n🔹 Cloud: AWS, Docker, Kubernetes\n🔹 Databases: MongoDB, MySQL, PostgreSQL\n\nHe has 3+ years of hands-on experience!";
    }
    
    if (msg.includes("project") || msg.includes("work") || msg.includes("portfolio")) {
      return "Chirag has built 20+ innovative projects including:\n\n🚀 SynapseAudit - AI-powered smart contract security\n🌍 GeoJlix - Location-based social networking\n📚 EduSphere - Learning management platform\n♻️ RecyCraft - Waste management system\n\nCheck out the 'Projects' section for more details!";
    }
    
    if (msg.includes("contact") || msg.includes("reach") || msg.includes("email") || msg.includes("phone")) {
      return "You can reach Chirag at:\n\n📧 Email: chiragnahata05@gmail.com\n📱 Phone: +91-7439611385\n🔗 LinkedIn: linkedin.com/in/chirag-nahata\n💼 GitHub: github.com/chiragnahata\n\nFeel free to connect!";
    }
    
    if (msg.includes("achievement") || msg.includes("award") || msg.includes("patent") || msg.includes("publication")) {
      return "Chirag's achievements are impressive:\n\n🏆 6 Granted Patents in AI & IoT\n📝 3 Research Publications\n🥇 15+ Hackathon Wins\n👥 Organized InnovoCon with 500+ participants\n🎓 NPTEL Elite Silver Rank\n\nCheck the 'Achievements' page for complete details!";
    }
    
    if (msg.includes("experience") || msg.includes("work") || msg.includes("job") || msg.includes("company")) {
      return "Chirag's professional experience:\n\n💼 CEO & CTO at Digidenone (Apr 2024 - Present)\n👥 Founder at Team codeARC (Dec 2023 - Present)\n🛡️ President at Tech Defenders Club (May 2024 - Present)\n\nHe's a proven leader in tech innovation!";
    }
    
    if (msg.includes("education") || msg.includes("degree") || msg.includes("study") || msg.includes("college")) {
      return "Chirag is pursuing dual degrees:\n\n🎓 B.Tech in AI & ML - JIS College of Engineering (2022-2026)\n📊 B.S. in Data Science - IIT Madras (2023-2026)\n\nCGPA: 9.21/10 - Outstanding academic performance!";
    }
    
    if (msg.includes("hire") || msg.includes("available") || msg.includes("opportunity") || msg.includes("job offer")) {
      return "Yes! Chirag is open to exciting opportunities!\n\n✨ Specializes in Full Stack Development, AI/ML, and Cloud\n🌟 Strong leadership and team management skills\n🚀 Proven track record with patents and publications\n\nPlease reach out via the contact form or email to discuss opportunities!";
    }
    
    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're welcome! 😊 Feel free to ask anything else or reach out directly to Chirag. Have a great day!";
    }
    
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! 👋 Great to meet you! I'm here to help you learn about Chirag. What would you like to know?";
    }
    
    return "That's a great question! For more specific information, please check:\n\n📄 The 'About' section for background\n💼 The 'Projects' page for work samples\n🏆 The 'Achievements' page for accomplishments\n📧 Or reach out directly via the contact form!\n\nWhat else can I help with?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: getBotResponse(input),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-8 z-[100] bg-gradient-to-br from-accent to-orange-500 text-white p-4 rounded-full shadow-2xl"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <RiMessage3Line className="text-2xl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-primary animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-[100] w-[380px] h-[600px] rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            style={{
              background: "rgba(26, 26, 46, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <RiRobotLine className="text-2xl text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Chirag's AI Assistant</h3>
                  <p className="text-white/80 text-xs">Online • Instant reply</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <RiCloseLine className="text-2xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.type === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === "user"
                        ? "bg-accent"
                        : "bg-white/10 border border-white/20"
                    }`}
                  >
                    {msg.type === "user" ? (
                      <RiUser3Line className="text-white" />
                    ) : (
                      <RiRobotLine className="text-white" />
                    )}
                  </div>
                  <div
                    className={`flex-1 ${msg.type === "user" ? "text-right" : "text-left"}`}
                  >
                    <div
                      className={`inline-block max-w-[85%] p-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-accent text-white rounded-tr-none"
                          : "bg-white/10 backdrop-blur-sm text-white rounded-tl-none border border-white/10"
                      }`}
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    </div>
                    <p className="text-xs text-white/40 mt-1">{msg.time}</p>
                  </div>
                </motion.div>
              ))}
              
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <RiRobotLine className="text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-none p-3 border border-white/10">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-white/50 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.slice(0, 2).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-white/5 hover:bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
                    >
                      {reply}
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
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
                >
                  <RiSendPlane2Fill className="text-xl" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
