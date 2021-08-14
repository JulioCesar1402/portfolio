import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [homeActive, setHomeActive] = useState('');
  const [exploreActive, setExploreActive] = useState('');
  const [aboutActive, setAboutActive] = useState('');

  const [homeNavBar, setHomeNavBar] = useState(false);
  const [projectsNavBar, setProjectsNavBar] = useState(false);
  const [gamesNavBar, setGamesNavBar] = useState(false);
  const [contactNavBar, setContactNavBar] = useState(false);
  const [aboutNavBar, setAboutNavBar] = useState(false);


  const context = {
    homeActive,
    setHomeActive,
    exploreActive,
    setExploreActive,
    aboutActive,
    setAboutActive,

    homeNavBar,
    setHomeNavBar,
    projectsNavBar,
    setProjectsNavBar,
    gamesNavBar,
    setGamesNavBar,
    contactNavBar,
    setContactNavBar,
    aboutNavBar,
    setAboutNavBar
  }

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
}

export default Provider

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;