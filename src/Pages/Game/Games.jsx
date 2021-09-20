import React, { useContext, useEffect } from 'react';
import MainContext from '../../Context/MainContext';
// import App from './snake-game/src/App';

function Games({ location: { pathname } }) {
  const { setGamesNavBar,
    setHomeActive,
    setExploreActive,
    setAboutActive } = useContext(MainContext);

  useEffect(() => {
    if (pathname) {
      setGamesNavBar(true);
      setHomeActive('');
      setExploreActive('');
      setAboutActive('');
    }
  }, [pathname, setGamesNavBar, setHomeActive, setExploreActive, setAboutActive]);

  return (
    <div className="game-area">
      {/* <App /> */}
    </div>
  );
}

export default Games;
