import { motion } from "motion/react";

export function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl mb-8 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-pink-400 font-medium">Veliora Sam</span> (she/her), a Graphic Designer and Video
              Editor with <span className="text-rose-400 font-medium">4+ years of experience</span> helping brands,
              creators, and businesses bring their ideas to life
              through creative visuals. I specialize in crafting logos,
              branding, social media content, Twitch graphics,
              motion graphics, and engaging video edits that not
              only look professional but also connect with
              audiences and tell a compelling story.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
