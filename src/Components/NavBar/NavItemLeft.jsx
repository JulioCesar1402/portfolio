import React from 'react';
import { Link } from 'react-router-dom';

function NavItemLeft() {
  return (
    <div className="navbarLeft">
      <Link to="/">
        <i class='bx bxs-cube-alt bx-md logoIcon'></i>
      </Link>
    </div>
  );
}

export default NavItemLeft;
