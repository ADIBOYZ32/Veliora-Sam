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


const services = [
  { name: "Mascot Logo", icon: Star, description: "Unique brand mascots crafting your digital identity." },
  { name: "Gaming Headers", icon: Trophy, description: "Eye-catching pro headers tailored for champions." },
  { name: "Gaming Flyer", icon: FileImage, description: "Eye-catching promotional flyers for events and brands." },
  { name: "2D Models", icon: FileImage, description: "Dynamic 2D models and character illustrations." },
  { name: "3D Models", icon: Box, description: "High-quality 3D assets and environments.", highlight: true },
  { name: "Rigged Models", icon: Users, description: "Fully rigged characters ready for VTubing or animation." },
  { name: "Twitch Emotes", icon: Smile, description: "Expressive custom emotes for your community." },
  { name: "Twitch Overlays", icon: Tv, description: "Stream overlays that elevate your broadcast quality." },
  { name: "Animated Overlays & Emotes", icon: Sparkles, description: "Motion graphics that add fluid energy to streams." },
  { name: "Room Arts", icon: Home, description: "Immersive environment designs for virtual sets." },
  { name: "Lore Animation", icon: Film, description: "Epic cinematic storytelling and detailed character lore animations." },
  { name: "Design Method", icon: Palette, description: "My proprietary creative process from concept to final." }
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

                    {/* Preview Section (Art/Videos) */}
                    <div className="mt-8 relative z-20 flex justify-center md:justify-start">
                      <div className="w-full max-w-[800px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-pink-500/30 transition-all duration-500">
                        {service.name === "Design Method" ? (
                          <div className="p-6 md:p-10 space-y-12">
                            <div className="space-y-12">
                              {/* Step 01 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400 text-xs font-bold">01</span>
                                    <h3 className="text-xl font-bold text-white">Outline Creation</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Start with a clean black and white line drawing. Focus on defining shapes, facial features, clothing, and main objects clearly while ensuring accurate proportions.
                                  </p>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl order-1 md:order-2">
                                  <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Design%20Method/de1.jpeg" alt="Outline Creation" loading="lazy" decoding="async" className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                              </div>

                              {/* Step 02 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                  <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Design%20Method/de2.jpeg" alt="Base Coloring" loading="lazy" decoding="async" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold">02</span>
                                    <h3 className="text-xl font-bold text-white">Base Coloring</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Add flat colors and basic shading to the outline. Apply skin tones and clothing details while maintaining a neat, vector-style appearance.
                                  </p>
                                </div>
                              </div>

                              {/* Step 03 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs font-bold">03</span>
                                    <h3 className="text-xl font-bold text-white">Final Design & Presentation</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Place the character into a stylized background with advanced lighting, shadows, and effects. Integrate branding elements like nameplates or emblems to finalize the design.
                                  </p>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl order-1 md:order-2">
                                  <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/2d%20model/de3-2d1.jpeg" alt="Final Design" loading="lazy" decoding="async" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                              </div>
                            </div>
                            <div className="pt-6 border-t border-white/5 text-center">
                              <p className="text-xs text-gray-500 font-mono uppercase tracking-[0.3em]">Advanced Creative Workflow Enabled</p>
                            </div>
                          </div>
                        ) : service.name === "3D Models" ? (
                          <div className="p-6 space-y-8">
                            {/* Top Row: 3d1 and 3d3 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <motion.div
                                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))" }}
                                className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-video shadow-xl"
                              >
                                <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/3d%20model/3d1.webp" alt="3D Model" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))" }}
                                className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] shadow-xl"
                              >
                                <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/3d%20model/3d3.jpeg" alt="3D Model" loading="lazy" decoding="async" className="w-full h-auto block" />
                              </motion.div>
                            </div>
                            {/* Bottom Row: 3d2 centered rectangle */}
                            <div className="grid grid-cols-1 max-w-[600px] mx-auto">
                              <motion.div
                                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))" }}
                                className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-video shadow-xl"
                              >
                                <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/3d%20model/3d2.jpeg" alt="3D Model" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                              </motion.div>
                            </div>
                          </div>
                        ) : service.name === "2D Models" ? (
                          <div className="p-6 md:p-10 space-y-12">
                            <div className="space-y-12">
                              {/* 2D Case 01 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400 text-xs font-bold">01</span>
                                    <h3 className="text-xl font-bold text-white">Character Illustration I</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    High-detail line art and base coloring for unique digital avatars, focusing on character silhouette and personality.
                                  </p>
                                </div>
                                <motion.div
                                  whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))" }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] shadow-xl order-1 md:order-2"
                                >
                                  <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/2d%20model/de3-2d1.jpeg" alt="2D Model 1" loading="lazy" decoding="async" className="w-full h-auto block" />
                                </motion.div>
                              </div>

                              {/* 2D Case 02 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <motion.div
                                  whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))" }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-xl"
                                >
                                  <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/2d%20model/model.jpeg" alt="Character Concept" loading="lazy" decoding="async" className="w-full h-auto block" />
                                </motion.div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold">02</span>
                                    <h3 className="text-xl font-bold text-white">Advanced Character Concept</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Detailed character designs exploring specialized gear, armor, and thematic elements for specialized roleplay or games.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : service.name === "Rigged Models" ? (
                          <div className="p-6 md:p-10 space-y-16">
                            <div className="space-y-16">
                              {/* 2D Case 01 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400 text-xs font-bold">01</span>
                                    <h3 className="text-xl font-bold text-white">2D Character Rigging - Type A</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Smooth XY movement, eye tracking, and physics-based hair/clothing animation. Perfect for live streaming and content creation.
                                  </p>
                                </div>
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl order-1 md:order-2 bg-black aspect-video"
                                >
                                  <video src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/rigged%20model/2d/rig1.mp4" autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-contain" />
                                </motion.div>
                              </div>

                              {/* 2D Case 02 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                                >
                                  <video src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/rigged%20model/2d/rig2.mp4" autoPlay loop muted playsInline preload="metadata" className="w-full h-auto block" />
                                </motion.div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold">02</span>
                                    <h3 className="text-xl font-bold text-white">Enhanced Expressions and Breathing Animations</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Enhanced expressions and breathing animations with customizable parameters for varied emotional ranges.
                                  </p>
                                </div>
                              </div>

                              {/* 3D Case 01 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 order-2 md:order-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs font-bold">01</span>
                                    <h3 className="text-xl font-bold text-white">3D Environment Rigging</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Full skeletal architecture for high-detail 3D models, ensuring seamless animation in cinematic and gaming environments.
                                  </p>
                                </div>
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl order-1 md:order-2 bg-black aspect-video"
                                >
                                  <video src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/rigged%20model/3d/rig31.mp4" autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-contain" />
                                </motion.div>
                              </div>

                              {/* 3D Case 02 */}
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                                >
                                  <video src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/rigged%20model/3d/Rig32.mp4" autoPlay loop muted playsInline preload="metadata" className="w-full h-auto block" />
                                </motion.div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400 text-xs font-bold">02</span>
                                    <h3 className="text-xl font-bold text-white">Dynamic 3D Simulation</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    Complex physics simulations for garments and accessories, providing ultra-realistic character interactivity.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : service.name === "Animated Overlays & Emotes" ? (
                          <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['AniOver1.mp4', 'AniOver2.mp4'].map((vid) => (
                                <motion.div
                                  key={vid}
                                  whileHover={{
                                    scale: 1.02,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-xl"
                                >
                                  <video
                                    src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Animated%20Overlays%20&%20Emotes/${vid}`}
                                    autoPlay loop muted playsInline
                                    preload="metadata"
                                    className="w-full h-auto block"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : service.name === "Gaming Flyer" ? (
                          <div className="p-6">
                            <motion.div
                              whileHover={{
                                scale: 1.02,
                                filter: "drop-shadow(0 0 25px rgba(236, 72, 153, 0.6))"
                              }}
                              className="rounded-2xl overflow-hidden border border-white/10 bg-[#1a1025] shadow-2xl mx-auto max-w-[500px]"
                            >
                              <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/gaming%20flyer/GF.jpeg" alt="Gaming Flyer" loading="lazy" decoding="async" className="w-full h-auto" />
                            </motion.div>
                          </div>
                        ) : service.name === "Mascot Logo" ? (
                          <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {['ml1.jpeg', 'ml2.jpeg', 'ml3.jpeg'].map((img, i) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-square shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/mascot%20logos/${img}`} alt={`Mascot ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {['ml4 (1).jpeg', 'ml5.jpeg', 'ml6.jpeg'].map((img, i) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-square shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/mascot%20logos/${img}`} alt={`Mascot ${i + 4}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : service.name === "Twitch Emotes" ? (
                          <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['TE (1).jpeg', 'TE (2).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/twitch%20emotes/${img.replace(' ', '%20')}`} alt="Twitch Emote" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['TE (3).jpeg', 'TE (4).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/twitch%20emotes/${img.replace(' ', '%20')}`} alt="Twitch Emote" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : service.name === "Twitch Overlays" ? (
                          <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['TwOV (1).jpeg', 'TwOV (2).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/twitch%20overlays/${img}`} alt="Twitch Overlay" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 max-w-[500px] mx-auto">
                              <motion.div
                                whileHover={{
                                  scale: 1.05,
                                  filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))"
                                }}
                                className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                              >
                                <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/twitch%20overlays/TwOV%20(3).jpeg" alt="Twitch Overlay" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                              </motion.div>
                            </div>
                          </div>
                        ) : service.name === "Gaming Headers" ? (
                          <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['GH (1).jpeg', 'GH (2).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/gaming%20headers/${img.replace(' ', '%20')}`} alt="Gaming Header" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['GH (3).jpeg', 'GH (4).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/gaming%20headers/${img.replace(' ', '%20')}`} alt="Gaming Header" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['GH (5).jpeg', 'GH(6).jpg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/gaming%20headers/${img.replace(' ', '%20')}`} alt="Gaming Header" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : service.name === "Room Arts" ? (
                          <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['room (1).jpeg', 'room (2).jpeg'].map((img) => (
                                <motion.div
                                  key={img}
                                  whileHover={{
                                    scale: 1.05,
                                    filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))"
                                  }}
                                  className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                                >
                                  <img src={`https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Room%20Arts/${img.replace(' ', '%20')}`} alt="Room Art" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 max-w-[500px] mx-auto">
                              <motion.div
                                whileHover={{
                                  scale: 1.05,
                                  filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))"
                                }}
                                className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1025] aspect-video shadow-xl"
                              >
                                <img src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Room%20Arts/room%20(3).jpeg" alt="Room Art" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                              </motion.div>
                            </div>
                          </div>
                        ) : service.name === "Lore Animation" ? (
                          <div className="p-6">
                            <motion.div
                              whileHover={{
                                scale: 1.01,
                                filter: "drop-shadow(0 0 30px rgba(236, 72, 153, 0.4))"
                              }}
                              className="rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl relative group/video"
                            >
                              <video
                                src="https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/lore%20animation/lore%20(1).mp4"
                                autoPlay loop playsInline
                                controls
                                preload="metadata"
                                className="w-full h-auto block"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                                <p className="text-white/90 text-sm font-medium italic font-serif tracking-wide drop-shadow-md">Cinematic Character Lore - Animated Storyboard</p>
                              </div>
                            </motion.div>
                          </div>
                        ) : (
                          <div className="aspect-video w-full h-full flex items-center justify-center text-gray-600 font-mono text-xs uppercase tracking-tighter">
                            [ {service.name} Preview ]
                          </div>
                        )}
                      </div>
                    </div>
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
