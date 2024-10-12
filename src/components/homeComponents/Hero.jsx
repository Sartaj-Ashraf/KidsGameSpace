import React from 'react';
import FallingNumbers from '../sharedComponents/FallingNumbers';
import FallingShapes from '../shapes/FallingShapes';
import Button from '../sharedComponents/Button';
import ShapesAnimation from '../sharedComponents/ShapesAnimation';

const Hero = () => {
    return (
        <div className="relative mx-auto text-center py-10 bg-gradient-to-r from-blue-200 via-yellow-100 to-pink-200 min-h-screen overflow-hidden">
            <FallingNumbers />
            <FallingShapes />
            {/* Fun Animated Title */}
            <h1 className="text-blue-700 font-bold text-5xl mb-6 drop-shadow-lg animate-bounce">
                Welcome to Fun Math Games!
            </h1>
            <p className="text-lg font-semibold text-gray-700 mb-4">
                Play fun games and learn math while having a blast!
            </p>

            <Button />
            <span className="text-7xl orbiting-icon2">
                🚀
            </span>

            {/* Main Banner Section with Math-Themed Image */}
            <div className="flex justify-center items-center mb-8">
                <img
                    src="https://img.freepik.com/free-vector/kids-learning-numbers-mathematics_53876-40274.jpg"
                    alt="Fun Math"
                    className="w-1/3 rounded-full shadow-xl transition-all duration-300 transform hover:rotate-6"
                />
            </div>

            {/* Add Kid-Friendly Animated Shapes */}
            <ShapesAnimation />

            {/* Fun Interactive Section for Kids */}
            <div className="mt-12 text-center space-y-6">
                <h2 className="text-2xl font-bold text-blue-600">
                    Math Can Be Fun!
                </h2>
                <p className="text-md text-gray-600">
                    Earn rewards, unlock badges, and become a math champion!
                </p>
                <div className="flex justify-center space-x-4">
                    {/* Sample icons - use suitable icons or badges for the project */}
                    <div className="bg-yellow-300 p-4 rounded-full shadow-md animate-bounce">
                        🏆
                    </div>
                    <div className="bg-pink-300 p-4 rounded-full shadow-md animate-bounce">
                        🎉
                    </div>
                    <div className="bg-blue-300 p-4 rounded-full shadow-md animate-bounce">
                        🎮
                    </div>
                </div>
                <span className="text-8xl orbiting-icon">
                    🚀
                </span>
            </div>
        </div>
    );
};

export default Hero;
