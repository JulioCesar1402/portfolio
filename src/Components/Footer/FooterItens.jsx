import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NavBar.css';
import './Footer.css';

function FooterItens() {
  return (
    <ul className="FooterItens">
      <li className="navItem" title="Home">
        <Link to="/">
          <i class='bx bx-home-alt bx-sm iconStyle'></i>
        </Link>
      </li>
      <li className="navItem" title="Projects">
        <Link to="/projects">
        <i class='bx bx-folder bx-sm iconStyle'></i>
        </Link>
      </li>
      <li className="navItem" title="Games">
        <Link to="/games">
          <i class='bx bx-joystick-button bx-sm iconStyle'></i>
        </Link>
      </li>
      <li className="navItem" title="Contact">
        <Link to="/contact">
          <i class='bx bx-paper-plane bx-sm iconStyle'></i>
        </Link>
      </li>
      <li className="navItem" title="About">
        <Link to="/about">
          <i class='bx bx-user bx-sm iconStyle'></i>
        </Link>
      </li>
    </ul>
  );
}

export default FooterItens;
