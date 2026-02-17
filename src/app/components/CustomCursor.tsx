import { useEffect, useState } from 'react';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;
            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Outer cursor ring */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            >
                <div className="w-8 h-8 border-2 border-white rounded-full opacity-50" />
            </div>

            {/* Inner cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full" />
            </div>
        </>
    );
}
