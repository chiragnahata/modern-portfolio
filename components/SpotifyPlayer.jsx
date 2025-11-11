import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiSpotifyFill, RiPlayCircleLine, RiMusic2Line, RiCloseLine } from "react-icons/ri";

const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Your Spotify playlist/profile
  const spotifyProfile = "70ph7fb9dd2flamitr2wh8udk"; // Your Spotify username
  const playlistId = "4xEd8462dtvVuUpQ6ZKQhx"; // Your actual playlist ID from Spotify URL
  // Playlist: https://open.spotify.com/playlist/4xEd8462dtvVuUpQ6ZKQhx
  // Profile: https://open.spotify.com/user/70ph7fb9dd2flamitr2wh8udk
  
  const topTracks = [
    { name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
    { name: "Shape of You", artist: "Ed Sheeran", album: "÷" },
    { name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
    { name: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera" },
  ];

  return (
    <>
      {/* Spotify Widget Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-[180px] z-40 bg-[#1DB954] hover:bg-[#1ed760] text-white px-4 py-3 rounded-lg shadow-lg hidden xl:flex items-center gap-2 transition-all text-sm font-semibold"
      >
        <RiSpotifyFill className="text-xl" />
        <span>My Playlist</span>
      </motion.button>

      {/* Spotify Player Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-8 z-40 w-[350px] bg-gradient-to-br from-[#1DB954]/95 to-[#191414]/95 backdrop-blur-xl rounded-2xl border border-[#1DB954]/30 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black/40 p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <RiSpotifyFill className="text-3xl text-[#1DB954]" />
                <div>
                  <div className="font-bold text-white">Coding Vibes</div>
                  <div className="text-xs text-white/70">Chirag's Playlist</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                <RiCloseLine className="text-white text-xl" />
              </button>
            </div>

            {/* Embedded Spotify Player */}
            <div className="p-4">
              <iframe
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* Quick Info */}
            <div className="px-4 pb-4">
              <div className="bg-black/30 rounded-xl p-3">
                <div className="text-sm text-white/90 mb-2 font-semibold">
                  🎵 What I Code To
                </div>
                <div className="text-xs text-white/70">
                  My curated mix of lo-fi, electronic, and focus music. Perfect for deep work sessions and late-night coding!
                </div>
              </div>

              {/* Top Tracks Preview */}
              <div className="mt-3 space-y-2">
                <div className="text-xs text-white/60 mb-2">Featured Tracks:</div>
                {topTracks.slice(0, 3).map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-black/20 p-2 rounded-lg hover:bg-black/30 transition-all cursor-pointer"
                  >
                    <RiMusic2Line className="text-[#1DB954] text-sm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">
                        {track.name}
                      </div>
                      <div className="text-white/60 text-xs truncate">
                        {track.artist}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Follow Button */}
              <a
                href={`https://open.spotify.com/user/${spotifyProfile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-white hover:bg-white/90 text-black font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition-all text-sm"
              >
                <RiSpotifyFill className="text-lg" />
                Follow on Spotify
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpotifyPlayer;
