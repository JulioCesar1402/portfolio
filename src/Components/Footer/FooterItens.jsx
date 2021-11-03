import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../Context/MainContext';

function FooterItens() {
  const {homeActive,
    setHomeActive,
    exploreActive,
    setExploreActive,
    aboutActive,
    setAboutActive,
    setHomeNavBar,
    setProjectsNavBar,
    setGamesNavBar,
    setContactNavBar,
    setAboutNavBar} = useContext(MainContext);


  const handleGetTitle = ({ target: { title } }) => {
    if (title === "Home") {
      setHomeActive('active');
      setExploreActive('');
      setAboutActive('');
      setHomeNavBar(true)
      setProjectsNavBar(false)
      setGamesNavBar(false)
      setContactNavBar(false)
      setAboutNavBar(false)
    }
    if (title === "Explore") {
      setExploreActive('active');
      setHomeActive('');
      setAboutActive('');
      setHomeNavBar(false)
      setProjectsNavBar(false)
      setGamesNavBar(false)
      setContactNavBar(false)
      setAboutNavBar(false)
    }
    if (title === "About") {
      setAboutActive('active');
      setExploreActive('');
      setHomeActive('');
      setHomeNavBar(false)
      setProjectsNavBar(false)
      setGamesNavBar(false)
      setContactNavBar(false)
      setAboutNavBar(true)
    }
  };

  return (
    <ul className="FooterItens">
      <li
        className="navItem"
        title="Home"
        onClick={(e) => handleGetTitle(e)}
      >
        <Link to="/" className={`navItemTag ${homeActive}`} title="Home">
          {!homeActive
            ? <i className='bx bx-home bx-sm' title="Home"></i>
            : <i className='bx bxs-home bx-sm'></i>}
          <p className="textLink" title="Home">Home</p>
        </Link>
      </li>
      <li
        className="navItem"
        title="Explore"
        onClick={(e) => handleGetTitle(e)}
      >
        <Link to="/explore" className={`navItemTag ${exploreActive}`} title="Explore">
          {!exploreActive
            ? <i className='bx bx-compass bx-sm' title="Explore"></i>
            : <i className='bx bxs-compass bx-sm'></i>}
          <p className="textLink" title="Explore">Explore</p>
        </Link>
      </li>
      <li
        className="navItem"
        title="About"
        onClick={(e) => handleGetTitle(e)}
      >
        <Link to="/about" className={`navItemTag ${aboutActive}`} title="About">
          {!aboutActive
            ? <i className='bx bx-user bx-sm' title="About"></i>
            : <i className='bx bxs-user bx-sm'></i>}
          <p className="textLink" title="About">About</p>
        </Link>
      </li>
    </ul>
  );
}

export default FooterItens;
