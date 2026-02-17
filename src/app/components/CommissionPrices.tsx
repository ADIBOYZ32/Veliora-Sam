import { motion } from "motion/react";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Basic",
    price: "$150",
    description: "Perfect for simple projects",
    features: [
      "Simple 3D model",
      "Basic texturing",
      "1 revision included",
      "3-5 day delivery",
      "Commercial use license"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "$350",
    description: "Most popular choice",
    features: [
      "Detailed 3D character model",
      "Advanced texturing & shading",
      "Live2D or VRChat ready",
      "3 revisions included",
      "1-2 week delivery",
      "Full commercial rights",
      "Source files included"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$650",
    description: "Full package solution",
    features: [
      "Complex 3D character model",
      "PBR texturing & materials",
      "Fully rigged (Live2D/VRChat)",
      "Custom animations",
      "5 emote designs",
      "Unlimited revisions",
      "Priority 1 week delivery",
      "Full commercial rights",
      "All source files"
    ],
    popular: false
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored to your needs",
    features: [
      "Custom project scope",
      "Unique requirements",
      "Large-scale projects",
      "Team collaborations",
      "Long-term partnerships",
      "Flexible timeline"
    ],
    popular: false
  }
];

export function CommissionPrices() {
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
            Commission Prices
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing for quality digital art
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all ${
                tier.popular
                  ? "bg-gradient-to-b from-purple-600/20 to-cyan-600/20 border-purple-500/50 shadow-xl shadow-purple-500/20"
                  : "bg-white/5 border-white/10 hover:border-purple-500/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                <div className="text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {tier.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full transition-all ${
                tier.popular
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/30"
                  : "bg-white/10 hover:bg-white/20 border border-white/20"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-center"
        >
          <p className="text-gray-300">
            💡 <strong>Note:</strong> Prices may vary based on complexity. Contact me for a detailed quote!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
