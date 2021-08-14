import React, { useContext, useEffect } from 'react';
import MainContext from '../Context/MainContext';
import '../Style/Projects.css'

function Projects({ location: { pathname } }) {
  const { setProjectsNavBar,
    setHomeActive,
    setExploreActive,
    setAboutActive, } = useContext(MainContext);
  useEffect(() => {
    if (pathname) {
      setProjectsNavBar(true);
      setHomeActive('');
      setExploreActive('');
      setAboutActive('');
    }
  }, [pathname, setProjectsNavBar, setHomeActive, setExploreActive, setAboutActive])
  return (
    <div>
      oi Sou a Projects
    </div>
  );
}

export default Projects;
