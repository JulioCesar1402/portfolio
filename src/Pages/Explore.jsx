import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../Context/MainContext';

function Explore({ location: { pathname } }) {
  const { setExploreActive, setAboutActive, setHomeActive } = useContext(MainContext);
  useEffect(() => {
    if (pathname) {
      setExploreActive('active')
      setAboutActive('')
      setHomeActive('')
    }
  }, [pathname, setExploreActive, setAboutActive, setHomeActive])
  return (
    <div className="explore-body">
      <div className="explore-option">
        <Link to="/projects" className="Link">
         <div className="explore-name">
           <i className='bx bx-folder bx-lg'></i>
         </div>
         <p>Projects</p>
        </Link>
      </div>
      <div className="explore-option">
        <Link to="/games" className="Link">
         <div className="explore-name">
           <i className='bx bx-joystick-button bx-lg'></i>
         </div>
         <p>Games</p>
        </Link>
      </div>
      <div className="explore-option">
        <Link to="/contact" className="Link">
         <div className="explore-name">
           <i className='bx bx-paper-plane bx-lg'></i>
         </div>
         <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Explore;
