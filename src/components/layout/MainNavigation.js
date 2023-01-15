import classes from "./MainNavigation.module.css";

import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-quote"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
