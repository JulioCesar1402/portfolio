import React, { useContext, useEffect } from 'react';
import '../Style/About.css';
import Thumb from '../Images/thumb.png'
import MyIcon from '../Images/photo.jpeg'
import { Link } from 'react-router-dom';
import MainContext from '../Context/MainContext';

function About({ location: { pathname } }) {
  const { setAboutActive, setHomeActive, setExploreActive, setAboutNavBar, setContactNavBar, setHomeNavBar } = useContext(MainContext);
  useEffect(() => {
    if (pathname) {
      setAboutActive('active');
      setHomeActive('');
      setExploreActive('');
      setAboutNavBar(true);
      setHomeNavBar(false);
    }
  }, [pathname, setAboutActive, setAboutNavBar, setHomeNavBar, setExploreActive, setHomeActive])
  return (
    <div className="headerAbout">
      <div className="bodyAbout">
        <img src={Thumb} alt="randow" className="imageThumb"/>
        <img src={MyIcon} alt="randow" className="MyIcon"/>
      </div>
      <div className="about">
        <h3>Julio Cesar</h3>
        <p className="subtitle-about">Web Developer</p>
        <div className="summary">
          <p>Currently studying Software Development at Trybe, a school that teaches how to program, learn and work, seeking to spread my passion for technology around the world, in order to always seek to learn more and more.</p>
        </div>
      </div>
      <div className="knowledge-contact">
        <div className="knowledge">
          <i className='bx bxl-javascript bx-md icon'></i>
          <i className='bx bxl-html5 bx-md icon'></i>
          <i className='bx bxl-css3 bx-md icon'></i>
          <i className='bx bxl-react bx-md icon'></i>
          <i className='bx bxl-redux bx-md icon'></i>
          <i className='bx bxl-git bx-md icon'></i>
        </div>
        <Link to="/contact">
          <button type="button" className="contact-about" onClick={() => setContactNavBar('')}>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
