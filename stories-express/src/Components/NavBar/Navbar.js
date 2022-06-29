import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { NewsContext } from "../../Context/NewsContext";
import { Link } from "react-router-dom";
import NavBarCategory from "./NavBarCategory";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [navActive, setNavActive] = useState("nav__menu");
  const [newsData] = useContext(NewsContext);
  const [newsCategories, setNewsCategories] = useState([]);

  useEffect(() => {
    if (newsData) {
      const categoriesData = [];
      newsData.forEach((article) => {
        if (!categoriesData.includes(article.section)) {
          categoriesData.push(article.section);
        }
      });

      setNewsCategories(categoriesData);
    }
  }, [newsData]);

  return (
    <nav className="nav__container">
      <button className="nav__title">
        STORIES E<span className="x-letter">X</span>PRESS
      </button>
      <ul className={navActive}>
        <li className="nav__item">
          <Link to={`/`}>
            <button className="nav__btn">Home</button>
          </Link>
        </li>
        {newsCategories.map((category, index) => {
          return <NavBarCategory key={index} category={category} />;
        })}
      </ul>
      <NavbarButton navActive={navActive} setNavActive={setNavActive} />
    </nav>
  );
};

export default Navbar;
