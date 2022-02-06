import React from 'react';
import { useDispatch } from 'react-redux';
import CssClasses from './GameMenu.module.scss';
import { setAppView } from '../../app/actions/appActions';

import {
    Label, 
    Button,
    Input
} from '../../components/ui';
import { AppViews } from '../../constants';


const GameMenu = () => {
    const dispatch = useDispatch();

    const confirmClickHandler = () => {
        console.log('clicked');
        dispatch(setAppView(AppViews.game))
    }

    return(
        <div className={CssClasses.container}>
            <div className="">
                <h1>Welcome to Hangman</h1>
                <div>
                    <h4>Instructions</h4>
                    <ul>
                        <li>Enter name</li>
                    </ul>
                </div>
            </div>
            <Label />
            <Input />
            <Button 
                onClickHandler={confirmClickHandler}
                text="Confirm"
            />
        </div>
    )
}
export default GameMenu;