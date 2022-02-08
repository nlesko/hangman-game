import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssClasses from './Game.module.scss';
import RegularKeyboard from '../../components/RegularKeyboard/RegularKeyboard';
import GuessingWord from '../../components/GuessingWord/GuessingWord';

import {
    Card,
    CardTitle,
    CardBody
} from '../../components/ui';
import { fetchNewWord } from '../../app/actions/gameActions';

const Game = () => {
    const dispatch = useDispatch();
    const wrongGuessCount = useSelector((state) => state.game.wrongGuessCount);    
    const maxWrongGuessCount = useSelector((state) => state.game.maxWrongGuessCount);    
    const username = useSelector ((state) => state.game.username);
    const completed = useSelector ((state) => state.game.completed);
    const gameOver = useSelector ((state) => state.game.gameOver);

    useEffect(() => {        
        console.log('username', username);
    })

    const restartGame = () => {
        dispatch(fetchNewWord())
    }

    return (
        <Card>
            <CardTitle tag="h1">
                Game has started {username}, good luck!
            </CardTitle>
            <CardBody column>
                <h3>{wrongGuessCount} / {maxWrongGuessCount}</h3>
                {gameOver && (
                    <div onClick={restartGame}>
                        Game over! Try with new word?
                    </div>
                )}
                <div className={CssClasses['guessingword-wrapper']}>
                    <GuessingWord />
                </div>
                <div className={CssClasses['keyboard-wrapper']}>
                    <RegularKeyboard />
                </div>
            </CardBody>
        
        </Card>
    )
}

export default Game;