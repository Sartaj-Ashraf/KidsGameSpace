import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    const { title, description, link, gameId, imgUrl } = props;

    return (
        <div className="bg-white shadow-lg rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
            <div className="overflow-hidden rounded-xl mb-4 w-48 h-48 mx-auto">
                <img
                    src={imgUrl}
                    alt="game"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">{title}</h3>
            <p className="mb-4 text-lg text-gray-700">{description}</p>
            {/* Use the Link component and pass the gameLessonId in the URL */}
            <Link
                to={`${link}/${gameId}`}
                className="bg-green-500 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600 transition-all"
            >
                🎉 Start Game
            </Link>
        </div>
    );
};

export default GameCard;
