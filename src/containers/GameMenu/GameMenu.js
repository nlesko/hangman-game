import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CssClasses from './GameMenu.module.scss';
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
    const [userName, setUserName] = useState('');
    const [showUserNameValidationError, setShowUserNameValidationError] = useState(false);

    const onUsernameChangeHandler = (e) => {
        setUserName(e.target.value)
        if(e.target.value.length > 3 && showUserNameValidationError && showUserNameValidationError){
            setShowUserNameValidationError(false);
        } else if(e.target.value.length <= 3 && !showUserNameValidationError){
            setShowUserNameValidationError(true);
        }
    }

    const confirmClickHandler = () => {
        if(userName.length > 3){
            setShowUserNameValidationError(true)
            dispatch(setNewUserName(userName));
            dispatch(setAppView(AppViews.game));
            dispatch(fetchNewWord())
        } else {
            setShowUserNameValidationError(true);
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
            
            
            <InputGroup>            
            <Input value={userName} onChange={(e) => onUsernameChangeHandler(e)} placeholder="Ente your name" />
            {showUserNameValidationError &&
                <span className={CssClasses['validation-error']}>
                    Please enter usrename that is 3 characters or more long.
                </span>
            }
            </InputGroup>
            
            <Button
                onClick={confirmClickHandler}                
            >
                Start game
            </Button>
        </div>
    )
}
export default GameMenu;