

import React, { useState } from 'react';

const GamePage = ({ match }) => {
    const { id } = match.params;

    // Add the logic for the game based on `id`
    if (id === 'counting') {
        return <CountingGame />;
    } else if (id === 'shapes') {
        return <ShapeMatchingGame />;
    } else if (id === 'addition') {
        return <AdditionGame />;
    }

    return <div>Game not found</div>;
};

const CountingGame = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center py-10">
            <h2 className="text-3xl font-bold">Counting Game</h2>
            <p>How many stars are there?</p>
            <div className="mt-6">
                <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Count: {count}
                </button>
            </div>
        </div>
    );
};

export default GamePage;
