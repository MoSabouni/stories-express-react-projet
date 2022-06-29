import React from "react";
import "./NewsTitleCard.css";
import { Link } from "react-router-dom";

const NewsTitleCard = ({ category, titleList }) => {
  return (
    <div className="news-title-card__container">
      <Link to={`/category/${category}`}>
        <h3 className="news-title-card__category">{category}</h3>
      </Link>
      <ul>
        {titleList.map((article, index) => {
          return (
            <li key={index} className="news-title-card__title">
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsTitleCard;
