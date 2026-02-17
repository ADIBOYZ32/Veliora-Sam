import { motion } from "motion/react";
import { Box, Wand2, Gamepad2, Smile, Tv, Sparkles } from "lucide-react";

const skills = [
  { name: "3D Modeling", icon: Box, description: "High-quality character models" },
  { name: "Live2D", icon: Wand2, description: "Animated avatar rigging" },
  { name: "VRChat", icon: Gamepad2, description: "Custom avatar creation" },
  { name: "Emotes", icon: Smile, description: "Expressive Twitch emotes" },
  { name: "Twitch Assets", icon: Tv, description: "Stream overlays & panels" },
  { name: "Blender", icon: Sparkles, description: "Professional 3D software" },
];

export function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in creating digital art that brings characters to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}