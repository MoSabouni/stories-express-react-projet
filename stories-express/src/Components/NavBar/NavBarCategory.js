import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBarCategory = ({ category }) => {
  return (
    <li className="nav__item">
      <Link to={`/category/${category}`}>
        <button className="nav__btn">{category}</button>
      </Link>
    </li>
  );
};

export default NavBarCategory;
