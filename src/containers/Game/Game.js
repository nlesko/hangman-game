import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssClasses from './Game.module.scss';
import RegularKeyboard from '../../components/RegularKeyboard/RegularKeyboard';
import GuessingWord from '../../components/GuessingWord/GuessingWord';

import {
    Card,
    CardTitle,
    CardBody,
    Button,
    Spinner
} from '../../components/ui';
import { fetchHighscores, fetchNewWord, submitHighscore } from '../../app/actions/gameActions';
import Highscore from '../../components/Highscore/Highscore';

const Game = () => {
    const [time, setTime] = useState(0)

    const dispatch = useDispatch();
    const { currentWord, wrongGuessCount, maxWrongGuessCount, userName, completed, gameOver, hint, quoteId, currentWordUniqueLetterCount, currentWordLetterCount } = useSelector((state) => state.game);
    const [loading, setLoading] = useState(true);
    const [showHint, setShowHint] = useState(false);

    const onGameEnd = useCallback(() => {
        dispatch(submitHighscore({
            quoteId,
            uniqueCharacters: currentWordUniqueLetterCount,
            length: currentWordLetterCount,
            userName,
            errors: wrongGuessCount,
            duration: time
        }));
        dispatch(fetchHighscores())
    }, [currentWordLetterCount, wrongGuessCount, userName, time, quoteId, currentWordUniqueLetterCount, dispatch]);


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

    useEffect(() => {
        if (completed) {
            onGameEnd();

        }
    }, [completed, onGameEnd])



    const restartGame = () => {
        setShowHint(false);
        dispatch(fetchNewWord())
    }

    const toggleHint = () => {
        setShowHint(!showHint);
    }

    if(loading){
        return (
            <Card>
                <Spinner />
            </Card>
        )
    }

    return (
        <div className={CssClasses.container}>
            <div className={'row'}>
                <Card className={CssClasses['game-wrapper']}>
                    <CardTitle tag="h1">
                        Game has started {userName}, good luck!

                    </CardTitle>
                    <CardBody column>


                        <h3>{wrongGuessCount} / {maxWrongGuessCount} errors</h3>
                        <div className={CssClasses['action wrapper']}>
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
                        
                        
                                <div className={CssClasses['guessingword-wrapper']}>
                                    <GuessingWord />
                                    <div>
                                        
                                        {showHint && <span>The word you are looking for is: {hint}</span>}
                                    </div>
                                </div>
                            
                    

                        <div className={CssClasses['keyboard-wrapper']}>
                            <RegularKeyboard />
                            
                        </div>

                    </CardBody>
                </Card>
                <Card className={CssClasses['highscore-wrapper']}>
                    {completed && <>
                        <CardTitle>Highscores</CardTitle>
                        <CardBody>

                            <Highscore />


                        </CardBody>
                    </>
                    }
                </Card>
            </div>
        </div>
    )
}

export default Game;