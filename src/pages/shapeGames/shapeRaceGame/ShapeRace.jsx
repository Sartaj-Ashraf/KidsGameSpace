import React, { useState } from 'react';
import "./styles.css";

import race_track from "../../../assets/images/race-track.jpg";
import yellow_car from "../../../assets/images/car-yellow.png";
import white_car from "../../../assets/images/car-white.png";
import { Link } from 'react-router-dom';
import SpeechUtils from '../../../utils/SpeechUtils';

const shapes = [
    { name: 'Circle', symbol: '●' },
    { name: 'Square', symbol: '■' },
    { name: 'Triangle', symbol: '▲' },
    { name: 'Rectangle', symbol: '▬' },
    { name: 'Pentagon', symbol: '⬟' },
    { name: 'Hexagon', symbol: '⬢' },
    { name: 'Octagon', symbol: '⯃' },
    { name: 'Ellipse', symbol: '⬭' },
    { name: 'Parallelogram', symbol: '⧦' },
    { name: 'Trapezoid', symbol: '⏢' },
];

const FINISH_LINE = 450; // Define finish line position

const ShapeRace = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [gameStatus, setGameStatus] = useState("Player 1's turn!");
    const [player1Position, setPlayer1Position] = useState(42);
    const [player2Position, setPlayer2Position] = useState(45);
    const [winnerWindow, setWinnerWindow] = useState(false);
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const getRandomShape = () => {
        const randomIndex = Math.floor(Math.random() * shapes.length);
        return shapes[randomIndex].name.toLowerCase();
    };

    // const correctShape = 'circle';
    const correctShape = getRandomShape();

    const handleShapeSelect = (shape) => {
        if (gameOver) return;

        if (currentPlayer === 1) {
            if (shape === correctShape) {
                const newPosition = player1Position + 50;
                setPlayer1Position(newPosition);
                if (newPosition >= FINISH_LINE) {
                    setGameStatus("Player 1 wins!");
                    setWinner("Player 1");
                    setGameOver(true);
                    setWinnerWindow(true);
                } else {
                    setGameStatus("Correct! Player 2's turn!");
                }
            } else {
                setGameStatus("Wrong! Player 2's turn!");
            }
            setCurrentPlayer(2); // Switch to player 2
        } else {
            if (shape === correctShape) {
                const newPosition = player2Position + 50;
                setPlayer2Position(newPosition);
                if (newPosition >= FINISH_LINE) {
                    setGameStatus("Player 2 wins!");
                    setWinner("Player 2");
                    setGameOver(true);
                    setWinnerWindow(true);
                } else {
                    setGameStatus("Correct! Player 1's turn!");
                }
            } else {
                setGameStatus("Wrong! Player 1's turn!");
            }
            setCurrentPlayer(1);
        }
    };

    // Reset the game state for a new game
    const handlePlayAgain = () => {
        setCurrentPlayer(1);
        setGameStatus("Player 1's turn!");
        setPlayer1Position(42);
        setPlayer2Position(45);
        setGameOver(false); // Reset game over state
        setWinnerWindow(false); // Hide the winner window
    };

    return (
        <div className="text-center">
            <span className="text-7xl orbiting-icon2">
                🚀
            </span>

            <div>
                {/* Race Track */}
                <div
                    id="track"
                    className="track w-full h-98 relative "
                    style={{
                        backgroundImage: `url(${race_track})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Player 1's car */}
                    <div
                        id="player1"
                        className="character w-40 h-40 absolute bottom-0 transition-all duration-1000"
                        style={{
                            left: `${player1Position}px`,
                            transform: `translateX(${player1Position}px)`
                        }}
                    >
                        <img src={white_car} alt="Player 1's car" className='w-full h-full -rotate-90' />
                    </div>

                    {/* Player 2's car */}
                    <div
                        id="player2"
                        className="character w-40 h-40 absolute bottom-30 transition-all duration-1000"
                        style={{
                            left: `${player2Position}px`,
                            transform: `translateX(${player2Position}px)`
                        }}
                    >
                        <img src={yellow_car} alt="Player 2's car" className='w-full h-full -rotate-90' />
                    </div>
                </div>

                {/* Shape Prompt for Current Player */}
                <div className="mb-5 flex items-center justify-center border-2">
                    {currentPlayer === 1 ? (
                        <>
                            <img src={white_car} alt="Player 1's car" className='w-16 h-16 mr-2' />
                            <div className="text-lg">
                                {SpeechUtils.speak(`Select ${correctShape}`)}
                                Select {correctShape}
                            </div>
                        </>
                    ) : (
                        <>
                            <img src={yellow_car} alt="Player 2's car" className='w-16 h-16 mr-2' />
                            <div className="text-lg">
                                {SpeechUtils.speak(`Select ${correctShape}`)}
                                Select {correctShape}
                            </div>
                        </>
                    )}
                </div>

                {/* Shape Options */}
                <div className="flex justify-center flex-wrap gap-4">
                    {shapes.map((shape) => (
                        <div
                            key={shape.name}
                            className="shape w-24 h-24 text-4xl bg-white border-2 border-[#01427a] flex justify-center items-center cursor-pointer hover:bg-[#00bcd4] hover:text-white transform hover:scale-110 transition-transform duration-300"
                            data-shape={shape.name.toLowerCase()}
                            onClick={() => handleShapeSelect(shape.name.toLowerCase())}
                        >
                            {shape.symbol}
                        </div>
                    ))}
                </div>
            </div>

            {/* Game Status */}
            <div id="status" className="mt-5 text-lg">{gameStatus}</div>

            {/* Play Again Button */}
            <div className='flex gap-2 items-center justify-center'>
                <button
                    id="play-again"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-lg rounded-lg cursor-pointer mt-5 "
                    onClick={handlePlayAgain}
                >
                    Play Again 🚗
                </button>

                {/* Go Back Button */}
                <Link to={`/game-lessons/games/${1}`}>
                    <button
                        id="go-back"
                        className="bg-[#00bcd4] text-white py-2 px-4 text-lg rounded-lg cursor-pointer mt-5 hover:bg-[#01427a]"

                    >
                        Go Back
                    </button>
                </Link>
            </div>
            {/* Winner Modal */}
            {winnerWindow && (
                <div className="fixed inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg text-center animate-fade-in shadow-lg transform scale-105 transition-transform">
                        <h2 className="text-4xl font-extrabold text-[#ff5757] mb-4 animate-bounce">{winner} Wins! 😜</h2>
                        <p className="text-2xl text-[#01427a]">🎉 Congratulations on your victory! 🏆🎖️</p>
                        <p className="mt-4 text-lg text-[#6c6c6c]">You're a superstar racer! 🌟 Keep racing to become the ultimate champion!</p>
                        <button
                            className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-lg rounded-lg cursor-pointer mt-5 transition-transform transform hover:scale-110"
                            onClick={handlePlayAgain}
                        >
                            Play Again 🚗💨
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShapeRace;
