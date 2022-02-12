import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssClasses from './Game.module.scss';
import RegularKeyboard from '../../components/RegularKeyboard/RegularKeyboard';
import GuessingWord from '../../components/GuessingWord/GuessingWord';

import {
    Card,
    CardTitle,
    CardBody
} from '../../components/ui';
import { fetchHighscores, fetchNewWord } from '../../app/actions/gameActions';
import { setAppView } from '../../app/actions/appActions';
import { AppViews } from '../../constants';
import Highscore from '../../components/Highscore/Highscore';

const Game = () => {
    const [time, setTime] = useState(0)
    
    const dispatch = useDispatch();
    const wrongGuessCount = useSelector((state) => state.game.wrongGuessCount);    
    const maxWrongGuessCount = useSelector((state) => state.game.maxWrongGuessCount);    
    const username = useSelector ((state) => state.game.username);
    const completed = useSelector ((state) => state.game.completed);        
    const gameOver = useSelector ((state) => state.game.gameOver);

    useEffect(() => {        
        let interval =  null;
        if(!completed && !gameOver){
            interval = setInterval(() => {
                setTime((time) => time+10)
            }, 10)
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [completed, gameOver])

    useEffect(() => {
        if(completed){            
            dispatch(fetchHighscores())            
        }        
    }, [completed, dispatch])

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
                    <div onClick={restartGame} className={CssClasses['try-again-container']}>
                        Game over! Try with new word?
                    </div>
                )}
                <div className={CssClasses['guessingword-wrapper']}>
                    <GuessingWord />
                    <div>
                        {time}
                    </div>
                </div>
                <div className={CssClasses['keyboard-wrapper']}>
                    <RegularKeyboard />
                </div>
                {completed &&
                    <div className={CssClasses['highscore-table-wrapper']}>
                        <Highscore />
                    </div>
                }
                
            </CardBody>        
        </Card>
        
    )
}

export default Game;