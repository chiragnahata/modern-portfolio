import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiDownload2Line,
  RiFilePdfLine,
  RiEyeLine,
  RiPrinterLine,
  RiShareLine,
  RiCheckLine,
} from "react-icons/ri";

const InteractiveResume = () => {
  const [downloadCount, setDownloadCount] = useState(256);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    // Track download analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: "Resume PDF Download",
      });
    }

    // Trigger actual download
    const link = document.createElement("a");
    link.href = "/Chirag_Nahata_Resume.pdf";
    link.download = "Chirag_Nahata_Resume.pdf";
    link.click();
  };

  const actions = [
    {
      icon: RiDownload2Line,
      label: "Download PDF",
      onClick: handleDownload,
      color: "from-accent to-orange-500",
    },
    {
      icon: RiEyeLine,
      label: "Quick View",
      onClick: () => window.open("/Chirag_Nahata_Resume.pdf", "_blank"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RiPrinterLine,
      label: "Print",
      onClick: () => window.print(),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: RiShareLine,
      label: "Share",
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: "Chirag Nahata - Resume",
            text: "Check out my resume!",
            url: window.location.href + "/Chirag_Nahata_Resume.pdf",
          });
        }
      },
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-accent to-orange-500 p-4 rounded-2xl">
            <RiFilePdfLine className="text-3xl text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Resume & CV</h3>
            <p className="text-white/70">
              Download my comprehensive resume with details about experience, skills, and
              achievements.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
            <div className="text-3xl font-bold text-accent mb-1">{downloadCount}</div>
            <div className="text-sm text-white/60">Downloads</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
            <div className="text-3xl font-bold text-white mb-1">4</div>
            <div className="text-sm text-white/60">Pages</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={action.onClick}
              className={`bg-gradient-to-br ${action.color} p-4 rounded-xl text-white font-medium flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <action.icon className="text-2xl" />
              <span className="text-xs">{action.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-500/50 rounded-xl p-3"
            >
              <RiCheckLine className="text-green-400 text-xl" />
              <span className="text-green-400 font-medium">
                Resume downloaded successfully!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* File Info */}
        <div className="flex items-center justify-between text-sm text-white/50 pt-4 border-t border-white/10">
          <span>PDF Format • 2.4 MB</span>
          <span>Last updated: Nov 2025</span>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveResume;
