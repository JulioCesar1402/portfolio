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

  const [snakeDots, setSnakeDots] = useState([ [0, 0], [2, 0]]);
  const [foodDots, setFoodDots] = useState([6, 8]);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(200);


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
    setAboutNavBar,

    snakeDots, setSnakeDots,
    foodDots, setFoodDots,
    direction, setDirection,
    speed, setSpeed,
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