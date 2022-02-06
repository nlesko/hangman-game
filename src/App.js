import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import GameMenu from './containers/GameMenu/GameMenu';
import Game from './containers/Game/Game';
import { useSelector } from 'react-redux';
import { AppViews } from './constants';

function App() {

  const appView = useSelector((state) => state.app.currentView);


  const renderView = () => {
    console.log('current app view', appView);
    switch(appView){
      case AppViews.gameMenu:
        return (
          <GameMenu />
        )
      case AppViews.game:
        return <Game />
      default:
        return (
          <div> test </div>
        )
    }
  }

  return (
    <div className="App">
      <div className="container">
        {
          renderView()
        }
      </div>
      
    
    </div>
  );
}

export default App;
