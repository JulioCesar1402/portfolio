import React from 'react';
import NavItemLeft from './NavItemLeft';
import NavBarRight from './NavItemRight';

function NavBar() {
  return (
    <nav className="navBar">
      <NavItemLeft />
      <NavBarRight />
    </nav>
  );
}

export default NavBar;
