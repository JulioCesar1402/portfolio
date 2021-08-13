import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/explore" className="navItemTag">
          <i class='bx bx-compass bx-sm'></i>
          <p className="textLink">Explore</p>
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
