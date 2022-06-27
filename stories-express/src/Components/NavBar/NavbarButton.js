import React, { useState } from "react";

const NavbarButton = ({ navActive, setNavActive }) => {
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    navActive === "nav__menu"
      ? setNavActive("nav__menu nav__active")
      : setNavActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <div onClick={navToggle} className={toggleIcon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
};

export default NavbarButton;
