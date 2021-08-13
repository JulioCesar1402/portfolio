import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NavBar.css';

function FooterItens() {
  return (
    <ul className="FooterItens">
      <li className="navItem" title="Home">
        <Link to="/" className="navItemTag">
          <i class='bx bx-home-alt bx-sm'></i>
          <p className="textLink">Home</p>
        </Link>
      </li>
      <li className="navItem" title="Projects">
        <Link to="/projects" className="navItemTag">
          <i class='bx bx-folder bx-sm'></i>
          <p className="textLink">Projects</p>
        </Link>
      </li>
      <li className="navItem" title="Games">
        <Link to="/games" className="navItemTag">
          <i class='bx bx-joystick-button bx-sm'></i>
          <p className="textLink">Games</p>
        </Link>
      </li>
      <li className="navItem" title="Contact">
        <Link to="/contact" className="navItemTag">
          <i class='bx bx-paper-plane bx-sm'></i>
          <p className="textLink">Contact</p>
        </Link>
      </li>
      <li className="navItem" title="About">
        <Link to="/about" className="navItemTag">
          <i class='bx bx-user bx-sm'></i>
          <p className="textLink">About</p>
        </Link>
      </li>
    </ul>
  );
}

export default FooterItens;
