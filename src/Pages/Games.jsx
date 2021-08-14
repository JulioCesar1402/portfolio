import React, { useContext, useEffect } from 'react';
import MainContext from '../Context/MainContext';

function Games({ location: { pathname } }) {
  const { setGamesNavBar,
    setHomeActive,
    setExploreActive,
    setAboutActive,} = useContext(MainContext);
    useEffect(() => {
    if (pathname) {
      setGamesNavBar(true);
      setHomeActive('');
      setExploreActive('');
      setAboutActive('');
    }
  }, [pathname, setGamesNavBar, setHomeActive, setExploreActive, setAboutActive])
  return (
    <div>
      oi Sou a Games
    </div>
  );
}

export default Games;
