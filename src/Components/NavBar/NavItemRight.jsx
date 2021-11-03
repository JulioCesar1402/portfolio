import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../Context/MainContext'

function NavBarRight() {
  const {homeNavBar,
    setHomeNavBar,
    projectsNavBar,
    setProjectsNavBar,
    gamesNavBar,
    setGamesNavBar,
    contactNavBar,
    setContactNavBar,
    aboutNavBar,
    setAboutNavBar} = useContext(MainContext);


  const handleGetTitle = ({ target: { title } }) => {
    switch (title) {
      case "Home":
        setHomeNavBar(true);
        setGamesNavBar(false);
        setProjectsNavBar(false);
        setContactNavBar(false);
        setAboutNavBar(false);
        break;
      case "Projects":
        setHomeNavBar(false);
        setProjectsNavBar(true);
        setGamesNavBar(false);
        setContactNavBar(false);
        setAboutNavBar(false);
        break;
      case "Games":
        setHomeNavBar(false);
        setProjectsNavBar(false);
        setGamesNavBar(true);
        setProjectsNavBar(false);
        setContactNavBar(false);
        setAboutNavBar(false);
        break;
      case "Contact":
        setHomeNavBar(false);
        setGamesNavBar(false);
        setProjectsNavBar(false);
        setContactNavBar(true);
        setAboutNavBar(false);
        break;
      case "About":
        setHomeNavBar(false);
        setGamesNavBar(false);
        setProjectsNavBar(false);
        setContactNavBar(false);
        setAboutNavBar(true);
        break;

      default:
        break;
    }

  };
  return (
    <ul className="navbarRight">
      <li onClick={(e) => handleGetTitle(e)} className="navItem" title="Home">
        <Link to="/" title="Home">
          {!homeNavBar
            ? <i className='bx bx-home bx-sm iconStyle' title="Home"></i>
            : <i className='bx bxs-home bx-sm iconStyle'></i>}
        </Link>
      </li>
      <li onClick={(e) => handleGetTitle(e)} className="navItem" title="Projects">
        <Link to="/projects" title="Projects">
          {!projectsNavBar
              ? <i className='bx bx-folder bx-sm iconStyle' title="Projects"></i>
              : <i className='bx bxs-folder bx-sm iconStyle'></i>}
        </Link>
      </li>
      <li onClick={(e) => handleGetTitle(e)} className="navItem" title="Games">
        <Link to="/games"  title="Games">
          {!gamesNavBar
              ? <i className='bx bx-joystick-button bx-sm iconStyle' title="Games"></i>
              : <i className='bx bxs-joystick-button bx-sm iconStyle'></i>}
        </Link>
      </li>
      <li onClick={(e) => handleGetTitle(e)} className="navItem" title="Contact">
        <Link to="/contact" title="Contact">
          {!contactNavBar
              ? <i className='bx bx-paper-plane bx-sm iconStyle' title="Contact"></i>
              : <i className='bx bxs-paper-plane bx-sm iconStyle'></i>}
        </Link>
      </li>
      <li onClick={(e) => handleGetTitle(e)} className="navItem" title="About">
        <Link to="/about" title="About">
          {!aboutNavBar
              ? <i className='bx bx-user bx-sm iconStyle' title="About"></i>
              : <i className='bx bxs-user bx-sm iconStyle'></i>}
        </Link>
      </li>
    </ul>
  );
}

export default NavBarRight;
