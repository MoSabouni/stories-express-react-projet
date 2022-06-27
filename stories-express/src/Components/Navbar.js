import React, { useState, useContext } from "react";
import "./Navbar.css";
import { NewsContext } from "../Context/NewsContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navActive, setNavActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [data] = useContext(NewsContext);
  console.log(data);

  const navToggle = () => {
    navActive === "nav__menu"
      ? setNavActive("nav__menu nav__active")
      : setNavActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav__container">
      <button className="nav__title">STORIES EXPRESS</button>
      <ul className={navActive}>
        <li className="nav__item">
          <button className="nav__btn">Home</button>
        </li>
        <li className="nav__item">
          <Link to={`/test`}>
            {" "}
            <button className="nav__btn">TEST</button>
          </Link>
        </li>
        <li className="nav__item">
          <button className="nav__btn">Politics</button>
        </li>
        <li className="nav__item">
          <button className="nav__btn">Technology</button>
        </li>
        <li className="nav__item">
          <button className="nav__btn">Enviroment</button>
        </li>
        <li className="nav__item">
          <button className="nav__btn">Health</button>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
