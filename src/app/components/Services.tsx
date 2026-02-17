import { motion } from "motion/react";
import {
  Star,
  Trophy,
  FileImage,
  Box,
  Users,
  Smile,
  Tv,
  Sparkles,
  Home,
  Film,
  Palette,
  BookOpen
} from "lucide-react";
import { InteractiveModel } from "./InteractiveModel";

const services = [
  { name: "Mascot Logo", icon: Star, description: "Unique brand mascots crafting your digital identity." },
  { name: "Gaming Headers", icon: Trophy, description: "Eye-catching pro headers tailored for champions." },
  { name: "Gaming Flyer 2D Models", icon: FileImage, description: "Dynamic flyers that bring events to life." },
  { name: "3D Models", icon: Box, description: "Interactive 3D showcase.", highlight: true },
  { name: "Rigged Models", icon: Users, description: "Fully rigged characters ready for VTubing or animation." },
  { name: "Twitch Emotes", icon: Smile, description: "Expressive custom emotes for your community." },
  { name: "Twitch Overlays", icon: Tv, description: "Stream overlays that elevate your broadcast quality." },
  { name: "Animated Overlays & Emotes", icon: Sparkles, description: "Motion graphics that add fluid energy to streams." },
  { name: "Room Arts", icon: Home, description: "Immersive environment designs for virtual sets." },
  { name: "Lore Animation", icon: Film, description: "Bringing your character's backstory to cinematic life." },
  { name: "Design Method", icon: Palette, description: "My proprietary creative process from concept to final." },
  { name: "Design Method Contd.", icon: BookOpen, description: "Advanced techniques ensuring pixel-perfect results." }
];

export function Services() {
  return (
    <section id="services" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute -right-1/4 bottom-1/4 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            Services Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my creative offerings, crafted with passion and precision.
          </p>
        </motion.div>

        {/* Vertical Services Stack */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Connector Line */}
              {index !== services.length - 1 && (
                <div className="absolute left-1/2 -bottom-32 w-px h-32 bg-gradient-to-b from-pink-500/50 via-purple-500/30 to-transparent hidden md:block transform -translate-x-1/2"></div>
              )}

              <div className={`
                relative p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-xl transition-all duration-500
                ${service.name === "3D Models"
                  ? "bg-gradient-to-b from-[#1a0b2e]/90 to-black/90 border-pink-500/40 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
                  : "bg-gradient-to-br from-[#120818]/80 to-black/80 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]"
                }
              `}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                  {/* Icon / Number */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div className={`
                      w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 mb-4
                      ${service.name === "3D Models"
                        ? "bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/40"
                        : "bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-white/5"
                      }
                    `}>
                      <service.icon className={`w-10 h-10 md:w-12 md:h-12 ${service.name === "3D Models" ? "text-white" : "text-pink-400 group-hover:text-purple-300 transition-colors"}`} />
                    </div>
                    <span className="text-4xl font-black text-white/10 select-none font-serif italic">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
                      {service.name}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6 mx-auto md:mx-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    {/* Content Placeholder (Art would go here) */}
                    <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-500 font-mono text-center md:text-left">
                      [Art Preview: {service.name}]
                    </div>

                    {/* Special Interactive Section for 3D Models */}
                    {service.name === "3D Models" && (
                      <div className="mt-8 relative z-20 flex justify-center md:justify-start">
                        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-2xl shadow-purple-500/20">
                          <div className="bg-black/90 rounded-xl overflow-hidden p-1">
                            <InteractiveModel />
                            <div className="py-2 bg-black text-center border-t border-white/10">
                              <p className="text-xs text-pink-300 font-mono tracking-widest uppercase">
                                Interactive • WebGL • Live
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
