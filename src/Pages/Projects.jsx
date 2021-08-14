import React, { useContext, useEffect } from 'react';
import MainContext from '../Context/MainContext';
import '../Style/Projects.css'
import site from '../Images/siteTest.jpeg'

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
    <section style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <div style={{display: "flex", width: "10%"}}>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 1</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 2</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <div style={{display: "flex", width: "10%"}}>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 1</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 2</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <div style={{display: "flex", width: "10%"}}>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 1</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div class="card">
          <img src={site} alt="Avatar" />
          <div class="container">
            <h4><b>Site 2</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      {/* <div style={{display: "flex", justifyContent: 'center', botton: "-500px"}}>
        <button style={{backgroundColor: "#0096B7", color: "#0096B7", width: "20px", height: "20px", borderRadius: "50%"}}>0</button>
        <button style={{backgroundColor: "#0096B7", color: "#0096B7", width: "20px", height: "20px", borderRadius: "50%"}}>0</button>
        <button style={{backgroundColor: "#0096B7", color: "#0096B7", width: "20px", height: "20px", borderRadius: "50%"}}>0</button>
      </div> */}
    </section>
  );
}

export default Projects;
