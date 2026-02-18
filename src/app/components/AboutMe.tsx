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

          {/* About Me Images */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['am1.jpeg', 'am2.jpeg', 'am3.jpeg'].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateZ: i % 2 === 0 ? 1 : -1,
                  filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.4))"
                }}
                className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-[4/5] shadow-2xl"
              >
                <img
                  src={`/about me/${img}`}
                  alt={`Veliora Sam ${i + 1}`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
