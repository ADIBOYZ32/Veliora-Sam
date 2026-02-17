import { CrystalScene } from "./CrystalScene";
import { motion } from "motion/react";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs - Pink + Purple Obsidian theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-fuchsia-900/30 rounded-full blur-[100px]"></div>
      </div>

      {/* Three.js Crystal Scene */}
      <div className="absolute inset-0 w-full h-full">
        <CrystalScene />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
            Creative Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Design • Animation • 3D Art
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="pointer-events-auto inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300 transition-all shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105"
          >
            Explore My Work
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
