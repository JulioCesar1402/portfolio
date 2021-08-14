import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../Context/MainContext';
import '../Style/Home.css'

function Home({ location: { pathname } }) {
  const { setHomeActive, setAboutActive, setExploreActive, setHomeNavBar } = useContext(MainContext);
  useEffect(() => {
    if (pathname) {
      setHomeActive('active');
      setExploreActive('');
      setAboutActive('');
      setHomeNavBar(true);
    }
  }, [pathname, setHomeActive, setHomeNavBar])
  return (
    <div className="body">
      <div className="subBody">
        <div>
          <div className="intro">
            <i className='bx bxs-info-square bx-lg infoIcon'></i>
            <h1 className="">I'm Julio Cesar</h1>
          </div>
          <div className="subTitle">
            <h4>Currently studying Software Development</h4>
            <h4>at Trybe</h4>
          </div>
        </div>
        <img src="https://picsum.photos/536/354" alt="randow" className="randowImage" title="Don't like it? Try reloading the page ;)"/>
      </div>
      <Link to="/explore" className="Link" onClick={() => setHomeActive('')}>
        <button type="button" className="startButton">
          <i className='bx bxs-right-arrow bx-sm' ></i>
          <p>Get start</p>
        </button>
      </Link>
    </div>
  );
}

export default Home;
