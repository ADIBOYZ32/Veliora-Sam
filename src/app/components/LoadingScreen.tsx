import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';

const assetsToLoad = [
  // Core Hero/About Images
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/about%20me/am1.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/about%20me/am2.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/about%20me/am3.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Design%20Method/de1.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/Design%20Method/de2.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/2d%20model/de3-2d1.jpeg",
  "https://zpzirzwzuiyyalfmdvsw.supabase.co/storage/v1/object/public/athetheria-assets/public/lore%20animation/lore%20(1).mp4",
];

export function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => {
    onFinishedRef.current = onFinished;
  }, [onFinished]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    let loadedCount = 0;
    const total = assetsToLoad.length;

    // 1. Asset Loading Logic
    assetsToLoad.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        const currentProgress = Math.floor((loadedCount / total) * 100);
        setProgress(currentProgress);
        if (loadedCount === total) {
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => onFinishedRef.current(), 1000);
          }, 800);
        }
      };
      img.onerror = () => {
        if (img.onload) (img.onload as any)(new Event('error'));
      }; // Don't get stuck if a file fails
    });

    // 2. Three.js Obsidian Core Animation
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Create the "Obsidian Shard"
    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x1a1025, // Deep Obsidian
      emissive: 0xec4899, // Pink Glow
      emissiveIntensity: 0,
      shininess: 100,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });
    const shard = new THREE.Mesh(geometry, material);
    scene.add(shard);

    // Add lighting
    const light = new THREE.PointLight(0xa855f7, 2, 10);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      shard.rotation.y += 0.01;
      shard.rotation.x += 0.005;

      // Pulse glow based on progress
      const p = progressRef.current;
      material.emissiveIntensity = (p / 100) * 1.5 + Math.sin(Date.now() * 0.005) * 0.2;
      const scale = 1 + (p / 100) * 0.2;
      shard.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#0a0a0f] flex flex-col items-center justify-center p-4"
        >
          {/* 3D Core */}
          <div ref={containerRef} className="w-[300px] h-[300px] relative">
            <div className="absolute inset-0 bg-pink-500/10 blur-[60px] rounded-full animate-pulse"></div>
          </div>

          <div className="mt-8 space-y-6 w-full max-w-xs text-center">
            <div className="space-y-2">
              <h2 className="text-pink-400 font-mono text-xs uppercase tracking-[0.4em] animate-pulse">
                Initializing Obsidian Core
              </h2>
              <div className="text-4xl font-black text-white font-mono">
                {progress}%
              </div>
            </div>

            {/* Custom Progress Bar */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
              />
            </div>

            <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">
              Fetching assets from Supabase CDN...<br />
              Optimizing experience
            </p>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/40 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/40 blur-[150px] rounded-full"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
