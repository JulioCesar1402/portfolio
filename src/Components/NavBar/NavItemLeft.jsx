import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NavBar.css'

function NavItemLeft() {
  return (
    <Link class="navbar-brand" to="/">
      <i class='bx bxs-cube-alt bx-md logoIcon'></i>
    </Link>
  );
}

export default NavItemLeft;
