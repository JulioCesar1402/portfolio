import React from 'react';
import '../../Style/NavBar.css'
import NavItemLeft from './NavItemLeft';
import NavBarRight from './NavItemRight';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <NavItemLeft />
        <div class="d-flex" id="navbarNav">
          <NavBarRight />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
