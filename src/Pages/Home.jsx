import React from 'react';
import '../Style/Home.css'

function Home() {
  return (
    <div className="body">
      <div className="subBody">
        <div>
          <div className="intro title">
            <i className='bx bxs-info-square bx-lg infoIcon' ></i>
            <h1 className="title">I'm Julio Cesar</h1>
          </div>
          <div className="subTitle">
            <h4>Currently studying Software Development at Trybe</h4>
          </div>
        </div>
        <img src="https://picsum.photos/536/354" alt="randow" className="randowImage" title="Don't like it? Try reloading the page ;)"/>
      </div>
      <button type="button" className="startButton">
        <i class='bx bxs-right-arrow bx-sm' ></i>
        <p>Start</p>
      </button>
    </div>
  );
}

export default Home;
