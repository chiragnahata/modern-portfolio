import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {
  RiHome5Line,
  RiUser3Line,
  RiBriefcase4Line,
  RiServiceLine,
  RiContactsLine,
  RiMessage3Line,
  RiSearchLine,
  RiCloseLine,
  RiArticleLine,
  RiTrophyLine,
  RiShareBoxLine,
} from "react-icons/ri";

const commands = [
  { name: "Home", path: "/", icon: RiHome5Line, shortcut: "H" },
  { name: "About", path: "/about", icon: RiUser3Line, shortcut: "A" },
  { name: "Projects", path: "/work", icon: RiBriefcase4Line, shortcut: "P" },
  { name: "Services", path: "/services", icon: RiServiceLine, shortcut: "S" },
  { name: "Blog", path: "/blog", icon: RiArticleLine, shortcut: "B" },
  { name: "Achievements", path: "/achievements", icon: RiTrophyLine, shortcut: "E" },
  { name: "Social Links", path: "/social", icon: RiShareBoxLine, shortcut: "L" },
  { name: "Testimonials", path: "/testimonials", icon: RiMessage3Line, shortcut: "T" },
  { name: "Contact", path: "/contact", icon: RiContactsLine, shortcut: "C" },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = useCallback((e) => {
    // Open palette with Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }

    // Close with Escape
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearch("");
    }

    // Navigate with arrow keys
    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      }
      if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        router.push(filteredCommands[selectedIndex].path);
        setIsOpen(false);
        setSearch("");
      }
    }
  }, [isOpen, selectedIndex, filteredCommands, router]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleCommandClick = (path) => {
    router.push(path);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 xl:hidden"
        title="Quick Navigation (⌘K)"
      >
        <RiSearchLine className="text-xl" />
        <span className="text-sm font-medium">Quick Nav</span>
      </motion.button>

      {/* Desktop hint */}
      <div className="fixed bottom-8 right-8 z-50 hidden xl:block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-sm text-white/60">Press </span>
          <kbd className="px-2 py-1 text-xs bg-white/10 rounded">⌘K</kbd>
          <span className="text-sm text-white/60"> to navigate</span>
        </motion.div>
      </div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]"
              onClick={() => setIsOpen(false)}
            />
            
            <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[20vh] px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="w-full max-w-2xl bg-[#1a1a2e] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                  <RiSearchLine className="text-2xl text-white/40" />
                  <input
                    type="text"
                    placeholder="Type a command or search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none text-lg"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <RiCloseLine className="text-2xl" />
                  </button>
                </div>

                {/* Commands List */}
                <div className="max-h-[400px] overflow-y-auto p-2">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((command, index) => (
                      <motion.div
                        key={command.path}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleCommandClick(command.path)}
                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                          selectedIndex === index
                            ? "bg-accent text-white"
                            : "hover:bg-white/5 text-white/80"
                        }`}
                      >
                        <command.icon className="text-2xl" />
                        <span className="flex-1 font-medium">{command.name}</span>
                        <kbd className="px-3 py-1 text-xs bg-white/10 rounded">
                          {command.shortcut}
                        </kbd>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-white/40">
                      No commands found
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-white/10 text-sm text-white/40">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      <kbd className="px-2 py-1 text-xs bg-white/10 rounded">↑</kbd>
                      <kbd className="px-2 py-1 text-xs bg-white/10 rounded">↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-2">
                      <kbd className="px-2 py-1 text-xs bg-white/10 rounded">↵</kbd>
                      Select
                    </span>
                  </div>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 text-xs bg-white/10 rounded">ESC</kbd>
                    Close
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
