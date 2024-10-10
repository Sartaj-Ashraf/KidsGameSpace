{/* Additional Fun Content for Home */ }
{/* <div className="mt-16 flex justify-center items-center space-x-8">
                <div className="bg-yellow-100 p-6 rounded-lg shadow-lg w-1/4 hover:bg-yellow-200 transition duration-200">
                    <h3 className="text-xl font-semibold text-yellow-800">
                        Easy Level
                    </h3>
                    <p className="mt-2 text-gray-600">Start with simple puzzles!</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-1/4 hover:bg-blue-200 transition duration-200">
                    <h3 className="text-xl font-semibold text-blue-800">
                        Intermediate Level
                    </h3>
                    <p className="mt-2 text-gray-600">Get ready for some challenges!</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-lg shadow-lg w-1/4 hover:bg-pink-200 transition duration-200">
                    <h3 className="text-xl font-semibold text-pink-800">
                        Advanced Level
                    </h3>
                    <p className="mt-2 text-gray-600">Test your math mastery!</p>
                </div>
            </div> */}














//             import React from 'react';

// const shapes = [
//     { symbol: '●', name: 'Circle' },
//     { symbol: '■', name: 'Square' },
//     { symbol: '▲', name: 'Triangle' },
//     { symbol: '▬', name: 'Rectangle' },
//     { symbol: '⬟', name: 'Pentagon' },
//     { symbol: '⬢', name: 'Hexagon' },
//     { symbol: '⯃', name: 'Octagon' },
//     { symbol: '⬭', name: 'Ellipse' },
//     { symbol: '⧦', name: 'Parallelogram' },
//     { symbol: '⏢', name: 'Trapezoid' },
// ];

// const LearnShapes = () => {
//     const handleStartGame = () => {
//         window.location.href = 'game.html';
//     };

//     return (
//         <div className="p-5 text-center ">
//             <h1 className="text-[#01427a] text-4xl">Learn Shapes</h1>
//             <p className="text-lg my-2">
//                 Welcome to the Shape Race Game! Before you start racing, let's learn about the shapes you'll see in the game.
//             </p>

//             {/* Shape Education Section */}
//             <div className="flex justify-center flex-wrap gap-5 my-5">
//                 {shapes.map((shape, index) => (
//                     <div className="bg-[#fefefe] border-2 border-[#00bcd4] rounded-lg p-2 w-32 h-36 flex flex-col items-center justify-center text-3xl" key={index}>
//                         <div className="text-4xl mb-2">{shape.symbol}</div>
//                         <div className="font-bold text-[#01427a]">{shape.name}</div>
//                     </div>
//                 ))}
//             </div>

//             {/* Start Game Button */}
//             <button
//                 id="start-game"
//                 className="bg-[#00bcd4] text-white py-4 px-8 text-lg rounded-lg cursor-pointer mt-5 hover:bg-[#01427a]"
//                 onClick={handleStartGame}
//             >
//                 Start the Game!
//             </button>
//         </div>
//     );
// };

// export default LearnShapes;





// import React, { useState } from 'react';

// const shapes = [
//     { name: 'Circle', symbol: '●' },
//     { name: 'Square', symbol: '■' },
//     { name: 'Triangle', symbol: '▲' },
//     { name: 'Rectangle', symbol: '▬' },
//     { name: 'Pentagon', symbol: '⬟' },
//     { name: 'Hexagon', symbol: '⬢' },
//     { name: 'Octagon', symbol: '⯃' },
//     { name: 'Ellipse', symbol: '⬭' },
//     { name: 'Parallelogram', symbol: '⧦' },
//     { name: 'Trapezoid', symbol: '⏢' },
// ];

// const ShapeRaceGame = () => {
//     const [currentPlayer, setCurrentPlayer] = useState(1);
//     const [gameStatus, setGameStatus] = useState("Player 1's turn!");
//     const [player1Shape, setPlayer1Shape] = useState(null);
//     const [player2Shape, setPlayer2Shape] = useState(null);

//     const handleShapeSelect = (shape) => {
//         if (currentPlayer === 1) {
//             setPlayer1Shape(shape);
//             setCurrentPlayer(2);
//             setGameStatus("Player 2's turn!");
//         } else {
//             setPlayer2Shape(shape);
//             setCurrentPlayer(1);
//             setGameStatus("Game Over!");
//             determineWinner(shape);
//         }
//     };

//     const determineWinner = (player2Shape) => {
//         if (player1Shape === player2Shape) {
//             setGameStatus('It\'s a tie!');
//         } else {
//             setGameStatus('Player 1 wins!');
//         }
//     };

//     const handlePlayAgain = () => {
//         setCurrentPlayer(1);
//         setGameStatus("Player 1's turn!");
//         setPlayer1Shape(null);
//         setPlayer2Shape(null);
//     };

//     return (
//         <div className="p-5 text-center">
//             <h1 className="text-[#01427a] text-4xl">Shape Race Game</h1>
//             <div className="mt-5">
//                 {/* Racetrack */}
//                 <div id="track" className="w-full h-24 bg-gray-300 relative mb-5">
//                     <div id="player1" className="character w-12 h-12 bg-[#00bcd4] rounded-full absolute top-6 left-0 transition-all duration-500 ease-in-out"></div>
//                     <div id="player2" className="character w-12 h-12 bg-[#e14177] rounded-full absolute top-6 left-0 transition-all duration-500 ease-in-out"></div>
//                 </div>

//                 {/* Shape Prompts for Both Players */}
//                 <div className="flex justify-around mb-5">
//                     <div id="player1-prompt" className="text-lg">
//                         Player 1: Select the {currentPlayer === 1 ? 'Circle' : 'Triangle'}
//                     </div>
//                     <div id="player2-prompt" className="text-lg">
//                         Player 2: Select the {currentPlayer === 2 ? 'Circle' : 'Triangle'}
//                     </div>
//                 </div>

//                 {/* Shape Options */}
//                 <div className="flex justify-center flex-wrap gap-4">
//                     {shapes.map((shape) => (
//                         <div
//                             key={shape.name}
//                             className="shape w-24 h-24 text-4xl bg-white border-2 border-[#01427a] flex justify-center items-center cursor-pointer hover:bg-[#00bcd4] hover:text-white transform hover:scale-110 transition-transform duration-300"
//                             data-shape={shape.name.toLowerCase()}
//                             onClick={() => handleShapeSelect(shape.name.toLowerCase())}
//                         >
//                             {shape.symbol}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Game Status */}
//             <div id="status" className="mt-5 text-lg">{gameStatus}</div>

//             {/* Play Again Button */}
//             <button id="play-again" className="hidden bg-[#00bcd4] text-white py-2 px-4 text-lg rounded-lg cursor-pointer mt-5 hover:bg-[#01427a]" onClick={handlePlayAgain}>
//                 Play Again
//             </button>
//         </div>
//     );
// };

// export default ShapeRaceGame;
