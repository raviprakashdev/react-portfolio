import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author Ravi Prakash
 * @function NavMenu
 **/

const NavMenu = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
