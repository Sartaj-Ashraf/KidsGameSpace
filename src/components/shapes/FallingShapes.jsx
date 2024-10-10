import React, { useEffect, useState, useCallback, useMemo } from 'react';
import '../../assets/styles.css'; // Make sure you have relevant CSS for animations
import './styles.css';

const shapes = [
    { symbol: '●', name: 'Circle' },
    { symbol: '■', name: 'Square' },
    { symbol: '▲', name: 'Triangle' },
    { symbol: '▬', name: 'Rectangle' },
    { symbol: '⬟', name: 'Pentagon' },
    { symbol: '⬢', name: 'Hexagon' },
    { symbol: '⯃', name: 'Octagon' },
    { symbol: '⬭', name: 'Oval' },
    { symbol: '⬔', name: 'Trapezoid' },
    { symbol: '◆', name: 'Diamond' },
    { symbol: '★', name: 'Star' },
    { symbol: '✶', name: 'Snowflake' },
    { symbol: '♥', name: 'Heart' },
];

const FallingShapes = () => {
    const [fallingShapes, setFallingShapes] = useState([]);

    // Memoize the shapes array to avoid recreating it on every render
    const memoizedShapes = useMemo(() => shapes, []);

    // Memoize the shape generation function using useCallback
    const generateShape = useCallback(() => {
        const randomShape = memoizedShapes[Math.floor(Math.random() * memoizedShapes.length)];
        const position = Math.random() * 100; // Random horizontal position (0 to 100vw)
        const duration = Math.random() * 3 + 2; // Random fall duration (between 2s to 5s)

        const newShape = {
            id: Math.random(),
            symbol: randomShape.symbol,
            left: position,
            duration: duration,
        };

        // Update state without unnecessary re-renders
        setFallingShapes((prev) => [...prev, newShape]);

        // Remove the shape after it falls
        setTimeout(() => {
            setFallingShapes((prev) => prev.filter((shape) => shape.id !== newShape.id));
        }, duration * 1000); // Match the duration to the timeout
    }, [memoizedShapes]);

    // Use effect to generate shapes on an interval
    useEffect(() => {
        const interval = setInterval(generateShape, 1000); // Generate a new shape every second

        return () => clearInterval(interval);
    }, [generateShape]);

    return (
        <div className="falling-shapes">
            {fallingShapes.map((shape) => (
                <div
                    key={shape.id}
                    className="falling-shape font-extrabold opacity-50 text-4xl"
                    style={{
                        left: `${shape.left}vw`, // Horizontal position
                        animationDuration: `${shape.duration}s`, // Falling duration
                    }}
                >
                    {shape.symbol}
                </div>
            ))}
        </div>
    );
};

export default FallingShapes;
