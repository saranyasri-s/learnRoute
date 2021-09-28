import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationHeader.module.css";
function NavigationHeader() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavigationHeader;
