import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegularKeyboard from '../../components/RegularKeyboard/RegularKeyboard';
import GuessingWord from '../../components/GuessingWord/GuessingWord';
import { fetchNewWord } from '../../app/actions/gameActions';
import {
    Button,
    Spinner
} from '../../components/ui';
import HangmanDrawing from '../../components/HangmanDrawing/HangmanDrawing';

const Game = () => {
    const [time, setTime] = useState(0)

    const dispatch = useDispatch();
    const { currentWord, wrongGuessCount, maxWrongGuessCount, userName, completed, gameOver, hint } = useSelector((state) => state.game);
    const [loading, setLoading] = useState(true);
    const [showHint, setShowHint] = useState(false);


    useEffect(() => {
        if (currentWord.length > 0) {
            setLoading(false)
        } else {
            setLoading(true);
        }
    }, [currentWord])

    useEffect(() => {
        let interval = null;
        if (!loading) {

            if (!completed && !gameOver) {
                interval = setInterval(() => {
                    setTime((time) => time + 1)
                }, 1000)
            } else {
                clearInterval(interval);
            }

        }
        return () => {
            clearInterval(interval);
        };

    }, [loading, completed, gameOver])

    // useEffect(() => {
    //     if (completed) {
    //         onGameEnd();

    //     }
    // }, [completed, onGameEnd])



    const restartGame = () => {
        setShowHint(false);
        dispatch(fetchNewWord())
    }

    const toggleHint = () => {
        setShowHint(!showHint);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-900">
                <div className="text-center bg-slate-800 p-8 rounded-lg shadow-lg">
                    <Spinner />
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <div className="text-center bg-slate-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-white mb-4">Game has started {userName}, good luck!</h1>
                <div className="flex flex-col gap-4">
                    <span className="text-gray-400 text-xl mt-4 mb-2">{wrongGuessCount} / {maxWrongGuessCount} errors - Time: { time }</span>
                    <HangmanDrawing wrongGuesses={wrongGuessCount} />
                    <div>
                        {gameOver || completed ? (
                            <Button onClick={restartGame}>
                                {gameOver ? "Gameover!" : ""} Start new game?
                            </Button>
                        ) : (
                            <Button onClick={toggleHint}>
                                Need help?
                            </Button>
                        )}
                    </div>
                    <div>
                        <GuessingWord />
                        <div>
                            {showHint && <span className="text-gray-400 text-xl mb-4 mt-8">The word you are looking for is: {hint}</span>}
                        </div>
                    </div>
                    <RegularKeyboard />
                </div>
            </div>
        </div>
    )
}

export default Game;