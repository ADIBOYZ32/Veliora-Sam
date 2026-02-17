import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* 3D Model Canvas Placeholder - Replace with your Three.js canvas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-2xl h-[600px] flex items-center justify-center">
          <div className="text-center text-gray-500 border-2 border-dashed border-gray-700 rounded-3xl p-12 backdrop-blur-sm bg-white/5">
            <p className="text-lg">Three.js 3D Model Canvas</p>
            <p className="text-sm mt-2">Replace this div with your Three.js canvas</p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm text-purple-300">4+ Years Experience</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Digital Artist
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            3D Modeling • Live2D • VRChat • Custom Models
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Creating stunning 3D characters, Twitch assets, and immersive VRChat avatars. 
            Specializing in Blender modeling, Live2D rigging, and custom emote designs.
          </p>

          <motion.button
            onClick={scrollToGallery}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
