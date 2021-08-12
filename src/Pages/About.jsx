import React from 'react';
import '../Style/About.css';
import Thumb from '../Images/thumb.png'
import MyIcon from '../Images/photo.jpeg'

function About() {
  return (
    <div className="bodyAbout">
      <img src={Thumb} alt="randow" className="imageThumb" title="Don't like it? Try reloading the page ;)"/>
      <img src={MyIcon} alt="randow" className="MyIcon" title="Don't like it? Try reloading the page ;)"/>
    </div>
  );
}

export default About;
