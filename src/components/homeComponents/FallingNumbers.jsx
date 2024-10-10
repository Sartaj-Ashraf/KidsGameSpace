import React, { useEffect, useState, useCallback } from 'react';
import '../../assets/styles.css';

const FallingNumbers = () => {
    const [numbers, setNumbers] = useState([]);

    // Memoize the function to generate new random numbers
    const generateNumber = useCallback(() => {
        const number = Math.floor(Math.random() * 100); // Random number between 0 and 99
        const position = Math.random() * 100; // Random horizontal position (0 to 100vw)
        const duration = Math.random() * 3 + 2; // Random fall duration (between 2s to 5s)

        const newNumber = {
            id: Math.random(),
            value: number,
            left: position,
            duration: duration,
        };

        // Update state efficiently, appending new numbers to the list
        setNumbers((prev) => [...prev, newNumber]);

        // Remove the number after it falls
        setTimeout(() => {
            setNumbers((prev) => prev.filter((n) => n.id !== newNumber.id));
        }, duration * 1000); // Duration determines how long it stays on screen
    }, []);

    // Effect to generate new numbers at regular intervals
    useEffect(() => {
        const interval = setInterval(generateNumber, 1000); // Generate a new number every second

        return () => clearInterval(interval); // Clear interval when component unmounts
    }, [generateNumber]); // Dependency on memoized `generateNumber` function

    return (
        <div className="falling-numbers">
            {numbers.map((number) => (
                <div
                    key={number.id}
                    className="falling-number font-extrabold opacity-50 text-3xl"
                    style={{
                        left: `${number.left}vw`, // Horizontal position
                        animationDuration: `${number.duration}s`, // Falling duration
                    }}
                >
                    {number.value}
                </div>
            ))}
        </div>
    );
};

export default FallingNumbers;
