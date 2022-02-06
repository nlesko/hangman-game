import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CssClasses from './Game.module.scss';
import RegularKeyboard from '../../components/RegularKeyboard/RegularKeyboard';
import GuessingWord from '../../components/GuessingWord/GuessingWord';
import { fetchNewWord } from '../../app/actions/gameActions';

const Game = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewWord())
    })

    return (
        <div className={CssClasses.container}>
            <h1>Game started</h1>
            <div className={CssClasses['guessingword-wrapper']}>
                <GuessingWord />
            </div>
            <div className={CssClasses['keyboard-wrapper']}>
                <RegularKeyboard />
            </div>
        </div>
    )
}

export default Game;