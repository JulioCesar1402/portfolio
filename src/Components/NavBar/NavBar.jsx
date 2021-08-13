import React from 'react';
import NavItemLeft from './NavItemLeft';
import NavBarRight from './NavItemRight';

function NavBar() {
  return (
    <nav class="navBar">
      <NavItemLeft />
      <NavBarRight />
    </nav>
  );
}

export default NavBar;
