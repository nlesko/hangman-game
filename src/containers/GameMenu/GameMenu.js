import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CssClasses from './GameMenu.module.scss';
import { setAppView } from '../../app/actions/appActions';
import { setNewUsername, fetchNewWord } from '../../app/actions/gameActions';
import {
    Label,
    Button,
    Input,
    Card,
    CardTitle,
    CardBody
} from '../../components/ui';
import { AppViews } from '../../constants';

const GameMenu = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [showUsernameValidationError, setShowUsernameValidationError] = useState(false);

    const onUsernameChangeHandler = (value) => {
        setUsername(value)
        if(value.length > 3 && showUsernameValidationError && showUsernameValidationError){
            setShowUsernameValidationError(false);
        } else if(value.length <= 3 && !showUsernameValidationError){
            setShowUsernameValidationError(true);
        }
    }

    const confirmClickHandler = () => {
        if(username.length > 3){
            setShowUsernameValidationError(true)
            dispatch(setNewUsername(username));
            dispatch(setAppView(AppViews.game));
            dispatch(fetchNewWord())
        } else {
            setShowUsernameValidationError(true);
        }
        
    }   

    return (
        <div className={CssClasses.container}>
            <div className="card">
                <Card>
                    <CardTitle tag="h1">
                        Welcome to hangman
                    </CardTitle>
                    <CardBody>
                        <div>
                            <h4>Instructions</h4>
                            <ul>
                                <li>Enter name</li>
                            </ul>
                        </div>
                    </CardBody>

                </Card>
            </div>
            <Label />
            <Input onChangeHandler={onUsernameChangeHandler} />
            {showUsernameValidationError &&
                <span className={CssClasses['validation-error']}>
                    Please enter usrename that is 3 characters or more long.
                </span>
            }
            
            <Button
                onClickHandler={confirmClickHandler}
                text="Confirm"
            />
        </div>
    )
}
export default GameMenu;