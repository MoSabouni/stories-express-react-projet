import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBarCategory = ({ categorey }) => {
  return (
    <li className="nav__item">
      <Link to={`/category/${categorey}`}>
        <button className="nav__btn">{categorey}</button>
      </Link>
    </li>
  );
};

export default NavBarCategory;
