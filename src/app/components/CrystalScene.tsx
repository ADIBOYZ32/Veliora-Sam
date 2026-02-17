import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function CrystalScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Create multiple floating crystals
        const crystals: THREE.Mesh[] = [];
        const crystalCount = 8;

        // Crystal geometries (various geometric shapes)
        const geometries = [
            new THREE.OctahedronGeometry(0.5, 0),
            new THREE.TetrahedronGeometry(0.5, 0),
            new THREE.IcosahedronGeometry(0.5, 0),
            new THREE.DodecahedronGeometry(0.5, 0),
        ];

        // Create crystals with gradient materials - Pink/Rose/Lavender theme
        for (let i = 0; i < crystalCount; i++) {
            const geometry = geometries[i % geometries.length];

            // Pink + Purple Obsidian Palette
            const colors = [
                { color: 0xec4899, emissive: 0xbe185d }, // Pink Obsidian (Pink-500 : Pink-700)
                { color: 0xa855f7, emissive: 0x7e22ce }, // Purple Obsidian (Purple-500 : Purple-700)
                { color: 0x1a1025, emissive: 0xec4899 }, // Dark Obsidian with Pink Glow
                { color: 0x2e1065, emissive: 0xa855f7 }, // Deep Violet with Purple Glow
            ];

            const colorScheme = colors[i % colors.length];

            const material = new THREE.MeshPhongMaterial({
                color: colorScheme.color,
                emissive: colorScheme.emissive,
                emissiveIntensity: 0.6,
                shininess: 150,
                specular: 0xffffff,
                transparent: true,
                opacity: 0.9,
                wireframe: false,
                flatShading: true,
            });

            const crystal = new THREE.Mesh(geometry, material);

            // Random initial positions
            crystal.position.x = (Math.random() - 0.5) * 8;
            crystal.position.y = (Math.random() - 0.5) * 6;
            crystal.position.z = (Math.random() - 0.5) * 3;

            // Random rotation
            crystal.rotation.x = Math.random() * Math.PI;
            crystal.rotation.y = Math.random() * Math.PI;

            // Store initial position for floating animation
            (crystal as any).initialY = crystal.position.y;
            (crystal as any).floatSpeed = 0.5 + Math.random() * 0.5;
            (crystal as any).floatOffset = Math.random() * Math.PI * 2;

            crystals.push(crystal);
            scene.add(crystal);
        }

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xf472b6, 1.2, 100); // pink-400
        pointLight1.position.set(5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xe9d5ff, 1.2, 100); // purple-200 (lavender)
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xfda4af, 0.8, 100); // rose-300
        pointLight3.position.set(0, 5, -5);
        scene.add(pointLight3);

        // Mouse move handler
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            };
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation loop
        let animationFrameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Smooth lerp for target position
            targetPosition.current.x += (mousePosition.current.x * 2 - targetPosition.current.x) * 0.05;
            targetPosition.current.y += (mousePosition.current.y * 2 - targetPosition.current.y) * 0.05;

            crystals.forEach((crystal, index) => {
                // Floating animation
                const floatY = Math.sin(elapsedTime * (crystal as any).floatSpeed + (crystal as any).floatOffset) * 0.3;
                crystal.position.y = (crystal as any).initialY + floatY;

                // Follow cursor with varying speeds (parallax effect)
                const followSpeed = 0.1 + (index * 0.05);
                crystal.position.x += (targetPosition.current.x - crystal.position.x) * followSpeed;
                crystal.position.y += (targetPosition.current.y - crystal.position.y) * followSpeed;

                // Continuous rotation
                crystal.rotation.x += 0.005;
                crystal.rotation.y += 0.008;
                crystal.rotation.z += 0.003;

                // Pulse effect
                const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.1;
                crystal.scale.set(scale, scale, scale);
            });

            // Rotate lights
            pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 5;
            pointLight1.position.z = Math.cos(elapsedTime * 0.5) * 5;

            pointLight2.position.x = Math.cos(elapsedTime * 0.7) * -5;
            pointLight2.position.z = Math.sin(elapsedTime * 0.7) * 5;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            crystals.forEach(crystal => {
                crystal.geometry.dispose();
                (crystal.material as THREE.Material).dispose();
            });

            geometries.forEach(geo => geo.dispose());
            renderer.dispose();

            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
            style={{ cursor: 'none' }}
        />
    );
}
