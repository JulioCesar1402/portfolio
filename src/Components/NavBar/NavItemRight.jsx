import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NavBar.css'

function NavBarRight() {
  return (
    <ul class="navbar-nav">
      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">
        <Link class="nav-link active" aria-current="page" to="/">
          <i class='bx bx-home-alt bx-sm iconStyle'></i>
        </Link>
      </li>
      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Projects">
        <Link class="nav-link active" aria-current="page" to="/projects">
        <i class='bx bx-folder bx-sm iconStyle'></i>
        </Link>
      </li>
      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Games">
        <Link class="nav-link active" aria-current="page" to="/games">
          <i class='bx bx-joystick-button bx-sm iconStyle'></i>
        </Link>
      </li>
      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact">
        <Link class="nav-link active" aria-current="page" to="/contact">
          <i class='bx bx-paper-plane bx-sm iconStyle'></i>
        </Link>
      </li>
      <li class="nav-item " data-bs-toggle="tooltip" data-bs-placement="bottom" title="About">
        <Link class="nav-link active" aria-current="page" to="/about">
          <i class='bx bx-user bx-sm iconStyle'></i>
        </Link>
      </li>
    </ul>
  );
}

export default NavBarRight;
