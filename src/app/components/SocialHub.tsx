import { motion } from "motion/react";
import { Instagram, Twitter, Youtube, Twitch, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    handle: "@yourusername",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#",
    handle: "@yourusername",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Twitch",
    icon: Twitch,
    url: "#",
    handle: "yourusername",
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "#",
    handle: "@yourchannel",
    color: "from-red-500 to-red-700"
  },
  {
    name: "Discord",
    icon: MessageCircle,
    url: "#",
    handle: "username#0000",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    name: "Email",
    icon: Mail,
    url: "#",
    handle: "hello@example.com",
    color: "from-cyan-500 to-cyan-700"
  }
];

export function SocialHub() {
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
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow me on social media and let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0`}>
                  <social.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg mb-1">{social.name}</h3>
                  <p className="text-sm text-gray-400 truncate">{social.handle}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-purple-500/30">
            <h3 className="text-2xl mb-3">Ready to start your project?</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Commission slots are open! Reach out and let's bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/50"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
