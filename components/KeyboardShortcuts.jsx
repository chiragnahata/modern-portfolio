import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiKeyboardLine, RiCloseLine } from "react-icons/ri";

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Open shortcuts overlay with Shift + ?
      if (e.shiftKey && e.key === "?") {
        e.preventDefault();
        setIsOpen(true);
      }
      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  const shortcuts = [
    {
      category: "Navigation",
      items: [
        { keys: ["⌘", "K"], action: "Open Command Palette" },
        { keys: ["Ctrl", "K"], action: "Open Command Palette (Windows)" },
        { keys: ["H"], action: "Go to Home" },
        { keys: ["A"], action: "Go to About" },
        { keys: ["P"], action: "Go to Projects" },
        { keys: ["S"], action: "Go to Services" },
        { keys: ["B"], action: "Go to Blog" },
        { keys: ["C"], action: "Go to Contact" },
      ],
    },
    {
      category: "Interface",
      items: [
        { keys: ["Shift", "?"], action: "Show Keyboard Shortcuts" },
        { keys: ["Esc"], action: "Close Modals" },
        { keys: ["↑", "↓"], action: "Navigate Command Palette" },
        { keys: ["Enter"], action: "Select Command" },
      ],
    },
    {
      category: "Features",
      items: [
        { keys: ["T"], action: "Toggle Theme" },
        { keys: ["/"], action: "Focus Search (Blog)" },
        { keys: ["Ctrl", "C"], action: "Open Chatbot" },
      ],
    },
  ];

  return (
    <>
      {/* Keyboard Icon Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-[440px] z-40 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 hover:border-accent hover:bg-accent/20 transition-all shadow-lg hidden xl:block"
        title="Keyboard Shortcuts (Shift + ?)"
      >
        <RiKeyboardLine className="text-xl" />
      </motion.button>

      {/* Shortcuts Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] w-full max-w-3xl bg-primary/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-accent to-pink-500 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RiKeyboardLine className="text-3xl text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Keyboard Shortcuts</h2>
                    <p className="text-white/80 text-sm">Master the portfolio like a pro</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                >
                  <RiCloseLine className="text-white text-3xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shortcuts.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-accent rounded"></span>
                        {section.category}
                      </h3>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all"
                          >
                            <span className="text-white/80 text-sm">{item.action}</span>
                            <div className="flex gap-1">
                              {item.keys.map((key, keyIndex) => (
                                <kbd
                                  key={keyIndex}
                                  className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono min-w-[28px] text-center"
                                >
                                  {key}
                                </kbd>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pro Tip */}
                <div className="mt-8 bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-accent/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">Pro Tip</h4>
                      <p className="text-white/80 text-sm">
                        Press <kbd className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">Shift</kbd> + <kbd className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">?</kbd> anytime to view these shortcuts!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
