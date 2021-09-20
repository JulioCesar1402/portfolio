import React, { useContext, useEffect } from 'react';
import MainContext from '../Context/MainContext';
import '../Style/Projects.css'
import site from '../Images/siteTest.jpeg'
import todo from '../Images/todo.png'
import pomodoro from '../Images/pomodoro.png'

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
        <a href="https://juliocesar1402.github.io/Todo-list/" className="link-to-projects">
          <div class="card">
            <img src={todo} alt="Avatar" />
            <div class="container">
              <h4><b>ToDo List</b></h4>
              <p>A website to organize your tasks</p>
            </div>
          </div>
        </a>
        <a href="https://juliocesar1402.github.io/Pomodoro/#/" className="link-to-projects">
          <div class="card">
            <img src={pomodoro} alt="Avatar" />
            <div class="container">
              <h4><b>Pomodoro</b></h4>
              <p>A website for time management</p>
            </div>
          </div>
        </a>
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
