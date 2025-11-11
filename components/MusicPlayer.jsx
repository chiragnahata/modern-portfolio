import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMusicLine,
  RiPlayLine,
  RiPauseLine,
  RiSkipForwardLine,
  RiSkipBackLine,
  RiVolumeMuteLine,
  RiVolumeUpLine,
  RiCloseLine,
} from "react-icons/ri";

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);

  const playlist = [
    { title: "Coding Flow", artist: "Lo-Fi Beats", duration: "3:24" },
    { title: "Focus Mode", artist: "Chill Vibes", duration: "4:12" },
    { title: "Deep Work", artist: "Ambient", duration: "3:56" },
    { title: "Night Coding", artist: "Synthwave", duration: "4:32" },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Music Player Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-[100px] z-40 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all shadow-lg hidden xl:flex items-center gap-2 text-sm"
      >
        <RiMusicLine className="text-xl" />
        <span>Music</span>
        {isPlaying && (
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Music Player Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-40 w-[320px] bg-gradient-to-br from-purple-900/95 to-pink-900/95 backdrop-blur-xl rounded-2xl border border-purple-400/30 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <RiMusicLine className="text-2xl text-white" />
                <span className="font-bold text-white">Now Playing</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <RiCloseLine className="text-white text-xl" />
              </button>
            </div>

            {/* Album Art */}
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{
                      duration: 3,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "linear",
                    }}
                    className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <RiMusicLine className="text-5xl text-white" />
                  </motion.div>
                </div>
                
                {/* Status Badge */}
                {isPlaying && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Playing
                  </div>
                )}
              </div>

              {/* Track Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">
                  {playlist[currentTrack].title}
                </h3>
                <p className="text-white/60 text-sm">
                  {playlist[currentTrack].artist}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{ width: isPlaying ? "45%" : "0%" }}
                    animate={{ width: isPlaying ? ["0%", "100%"] : "45%" }}
                    transition={{ duration: 180, ease: "linear" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/60 mt-1">
                  <span>{isPlaying ? "1:32" : "0:00"}</span>
                  <span>{playlist[currentTrack].duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <RiSkipBackLine className="text-white text-xl" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayPause}
                  className="p-4 bg-white hover:bg-white/90 rounded-full transition-all"
                >
                  {isPlaying ? (
                    <RiPauseLine className="text-purple-900 text-2xl" />
                  ) : (
                    <RiPlayLine className="text-purple-900 text-2xl" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <RiSkipForwardLine className="text-white text-xl" />
                </motion.button>
              </div>

              {/* Volume Control */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="text-white/80 hover:text-white transition-all"
                >
                  {isMuted ? (
                    <RiVolumeMuteLine className="text-xl" />
                  ) : (
                    <RiVolumeUpLine className="text-xl" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgba(167, 139, 250, 0.8) 0%, rgba(236, 72, 153, 0.8) ${volume}%, rgba(255, 255, 255, 0.2) ${volume}%, rgba(255, 255, 255, 0.2) 100%)`,
                  }}
                />
                <span className="text-white/60 text-xs w-8">{volume}%</span>
              </div>
            </div>

            {/* Playlist Preview */}
            <div className="px-4 pb-4">
              <div className="text-xs text-white/60 mb-2">Up Next</div>
              <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400/30 scrollbar-track-transparent">
                {playlist
                  .filter((_, index) => index !== currentTrack)
                  .slice(0, 2)
                  .map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                      onClick={() => setCurrentTrack(playlist.indexOf(track))}
                    >
                      <div className="flex-1">
                        <div className="text-white text-sm">{track.title}</div>
                        <div className="text-white/60 text-xs">{track.artist}</div>
                      </div>
                      <span className="text-white/60 text-xs">{track.duration}</span>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
