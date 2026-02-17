import { motion } from "motion/react";
import { MessageCircle, Twitter, Instagram, FileText } from "lucide-react";

// Custom TikTok Icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/Veliora13",
    username: "@Veliora13",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/veliora_sam?igsh=OW5yaDd4Y3huNjB1",
    username: "@veliora_sam",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    url: "https://www.tiktok.com/@veliora_vt?_r=1&_t=ZP-93zJtNjQo3z",
    username: "@veliora_vt",
    color: "from-gray-900 to-black"  // TikTok uses black/dark branding
  },
  {
    name: "Reddit",
    icon: FileText,
    url: "https://www.reddit.com/user/Veliora_Sam/",
    username: "u/Veliora_Sam",
    color: "from-orange-500 to-red-600"
  }
];

export function ContactMe() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg mb-2">{social.name}</h3>
                <p className="text-sm text-gray-400">{social.username}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-md border border-pink-500/30"
        >
          <h3 className="text-2xl sm:text-3xl mb-4">Ready to start your project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a custom 3D model, Twitch graphics, or video editing,
            I'm here to bring your creative vision to life.
            <br />
            <span className="text-pink-300 font-semibold mt-2 block">
              For commissions, contact me on Twitter!
            </span>
          </p>
          <motion.a
            href="https://x.com/Veliora13"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 transition-all shadow-lg shadow-pink-500/50"
          >
            Let's Collaborate
          </motion.a>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Veliora Sam. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
