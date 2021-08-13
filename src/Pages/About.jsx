import React from 'react';
import '../Style/About.css';
import Thumb from '../Images/thumb.png'
import MyIcon from '../Images/photo.jpeg'

function About() {
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
      <div className="knowledge">
        <i className='bx bxl-javascript bx-md icon'></i>
        <i className='bx bxl-html5 bx-md icon'></i>
        <i className='bx bxl-css3 bx-md icon'></i>
        <i className='bx bxl-react bx-md icon'></i>
        <i className='bx bxl-redux bx-md icon'></i>
        <i className='bx bxl-git bx-md icon'></i>
        <button type="button" className="contact-about">Contact</button>
      </div>
    </div>
  );
}

export default About;
