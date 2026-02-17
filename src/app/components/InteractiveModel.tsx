import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Import the specific VRM file URL directly
// Note: You need to ensure your build tool handles .vrm files or move it to public folder
// If this import fails, move MRig.vrm to public/MRig.vrm and use "/MRig.vrm"
import modelUrl from '../../assets/MRig.vrm?url';

export function InteractiveModel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        // Blender-like "Light Black" background (Dark Grey)
        scene.background = new THREE.Color(0x2b2b2b);

        // Add a grid helper (Blender floor)
        const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x333333);
        scene.add(gridHelper);

        // --- Camera ---
        const camera = new THREE.PerspectiveCamera(30, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 20.0);
        camera.position.set(0.0, 1.4, 3.0); // Eye level(ish)

        // --- Renderer ---
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputColorSpace = THREE.SRGBColorSpace; // Important for VRM colors
        containerRef.current.appendChild(renderer.domElement);

        // --- Controls ---
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.target.set(0.0, 1.0, 0.0); // Look at chest height
        controls.update();

        // --- Lights ---
        const light = new THREE.DirectionalLight(0xffffff, 1.0);
        light.position.set(1.0, 1.0, 1.0).normalize();
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Soft fill
        scene.add(ambientLight);

        // --- Load VRM ---
        const loader = new GLTFLoader();
        loader.register((parser) => {
            return new VRMLoaderPlugin(parser);
        });

        loader.load(
            modelUrl, // Use the imported URL
            (gltf) => {
                const vrm = gltf.userData.vrm;

                // Rotate if needed (VRM is usually +Z facing, camera is at +Z looking -Z)
                // Usually VRM loads facing +Z. We want it facing camera.
                // Actually standard GLTF is +Z. Let's see. If back to camera, rotate.
                VRMUtils.removeUnnecessaryVertices(gltf.scene);
                VRMUtils.combineSkeletons(gltf.scene);

                if (vrm) {
                    console.log("VRM Loaded");
                    vrm.scene.rotation.y = Math.PI; // Sometimes needed, sometimes not. Let's check visually.
                    // Typically VRM defines +Z as forward. Three.js camera looks down -Z. 
                    // So model at 0,0,0 facing +Z looks at camera.
                    // If it's facing away, remove this line.
                }

                scene.add(vrm.scene);
                setLoading(false);
            },
            (progressEvent) => {
                const percent = (progressEvent.loaded / progressEvent.total) * 100;
                setProgress(Math.round(percent));
            },
            (error) => {
                console.error("Failed to load VRM:", error);
                setLoading(false);
            }
        );

        // --- Animation ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const delta = clock.getDelta();

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // --- Resize Handler ---
        const handleResize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();

            // gridHelper.dispose(); // No dispose on Helper in older Types?
            // Clean scene
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="relative w-full max-w-[800px] h-[450px] mx-auto group rounded-xl overflow-hidden shadow-2xl border border-white/10">

            {/* 3D Viewport Container */}
            <div
                ref={containerRef}
                className="w-full h-full bg-[#2b2b2b] cursor-move"
                title="Left Click: Rotate | Right Click: Pan | Scroll: Zoom"
            />

            {/* Overlay UI (Blender-like header) */}
            <div className="absolute top-0 left-0 w-full p-2 bg-[#1a1a1a]/80 backdrop-blur-sm flex justify-between items-center text-[10px] md:text-xs text-gray-400 font-mono border-b border-white/5 pointer-events-none">
                <div className="flex gap-4">
                    <span className="text-white font-bold">Object Mode</span>
                    <span>View Layer</span>
                    <span>Scene Collection</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    {loading ? `LOADING ${progress}%` : 'REALTIME EEVEE'}
                </div>
            </div>

            {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2b2b2b] z-20">
                    <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="text-pink-400 font-mono text-sm tracking-wider">LOADING MODEL... {progress}%</div>
                </div>
            )}

            {/* Help Text */}
            <div className="absolute bottom-2 right-4 text-[10px] text-white/30 font-mono pointer-events-none">
                Interactive 3D Viewport
            </div>
        </div>
    );
}
