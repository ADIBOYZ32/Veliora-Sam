import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const artworks = [
  {
    id: 1,
    title: "VRChat Avatar",
    category: "3D Model",
    image: "https://images.unsplash.com/photo-1770242546655-e6f7b96b6cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGNoYXJhY3RlciUyMG1vZGVsJTIwZGlnaXRhbCUyMGFydHxlbnwxfHx8fDE3NzEyNjE3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Custom Character",
    category: "Live2D",
    image: "https://images.unsplash.com/photo-1675191817298-b58c570af3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMFZSQ2hhdCUyMGF2YXRhcnxlbnwxfHx8fDE3NzEyNjE3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Character Design",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1739513275763-84d4393a84ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc3MTE2NDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Neon Character",
    category: "3D Model",
    image: "https://images.unsplash.com/photo-1613487971624-24f87ffdbfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc3MTI2MTcxOHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Twitch Emotes",
    category: "Emotes",
    image: "https://images.unsplash.com/photo-1763770446778-aef8e7fc6751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhaWklMjBhbmltZSUyMHN0aWNrZXJ8ZW58MXx8fHwxNzcxMjYxNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Blender Render",
    category: "3D Model",
    image: "https://images.unsplash.com/photo-1669605140640-d5908ffe8524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwYmxlbmRlciUyMHJlbmRlcnxlbnwxfHx8fDE3NzEyNjE3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Gaming Setup",
    category: "Stream Assets",
    image: "https://images.unsplash.com/photo-1644560287583-3b83e1bc3777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMG5lb258ZW58MXx8fHwxNzcxMjYxNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "VTuber Model",
    category: "Live2D",
    image: "https://images.unsplash.com/photo-1770242546655-e6f7b96b6cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGNoYXJhY3RlciUyMG1vZGVsJTIwZGlnaXRhbCUyMGFydHxlbnwxfHx8fDE3NzEyNjE3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

const categories = ["All", "3D Model", "Live2D", "Emotes", "Stream Assets", "Illustration"];

export function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Work Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my latest creations
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:border-purple-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-lg mb-1">{artwork.title}</h3>
                <p className="text-sm text-purple-300">{artwork.category}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs">
                {artwork.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
