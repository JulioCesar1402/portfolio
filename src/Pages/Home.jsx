import React from 'react';
import '../Style/Home.css'

function Home() {
  return (
    <body className="body">
      <div>
        <div className="intro title">
          <i class='bx bxs-info-square bx-lg infoIcon' ></i>
          <h1>I'm Julio Cesar</h1>
        </div>
        <div className="subTitle">
          <h4>Currently studying Software Development at Trybe</h4>
        </div>
      </div>
      <img src="https://picsum.photos/536/354" alt="randow" className="randowImage" title="Don't like it? Try reloading the page ;)"/>
    </body>
  );
}

export default Home;
