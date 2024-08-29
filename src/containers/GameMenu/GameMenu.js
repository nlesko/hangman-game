import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAppView } from '../../app/actions/appActions';
import { setNewUserName, fetchNewWord } from '../../app/actions/gameActions';
import {
    Button,
    Input,
    Card,
    CardTitle,
    CardBody,
    InputGroup
} from '../../components/ui';
import { AppViews } from '../../constants';

const GameMenu = () => {
    const dispatch = useDispatch();

    const confirmClickHandler = () => {
            dispatch(setAppView(AppViews.game));
            dispatch(fetchNewWord())
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <div className="text-center bg-slate-800 p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-6xl font-bold text-white mb-4">Hangman Game</h1>
                <p className="text-gray-400 text-xl mb-8">
                    Guess the word before you run out of attempts. Can you save the stick figure?
                </p>
                <button
                    onClick={confirmClickHandler}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg text-2xl font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                    Start Game
                </button>
            </div>
        </div>
    )
}
export default GameMenu;