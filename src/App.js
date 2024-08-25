import React from 'react';
import GameMenu from './containers/GameMenu/GameMenu';
import Game from './containers/Game/Game';
import { useSelector } from 'react-redux';
import { AppViews } from './constants';

function App() {

  const appView = useSelector((state) => state.app.currentView);


  const renderView = () => {
    switch (appView) {
      case AppViews.gameMenu:
        return (
          <GameMenu />
        )
      case AppViews.game:
        return <Game />
      default:
        return (
          <GameMenu />
        )
    }
  }

  return (
    renderView()
  );
}

export default App;
