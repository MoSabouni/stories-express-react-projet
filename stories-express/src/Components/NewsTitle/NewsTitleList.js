import React from "react";
import "./NewsTitleCard.css";
import NewsTitleCard from "./NewsTitleCard";

const NewsTitleList = ({ newsData }) => {
  let categories = {};
  // Here we organize data by pushing all articles with similar categories to be in one array
  if (newsData) {
    newsData.forEach((article) => {
      if (Object.keys(categories).includes(article.section)) {
        categories[article.section].push(article);
      } else {
        categories[article.section] = [];
        categories[article.section].push(article);
      }
    });
  }

  return (
    <div className="news-title-list__container">
      {Object.keys(categories).map((key, index) => {
        return (
          <NewsTitleCard
            key={index}
            category={key}
            titleList={categories[key]}
          />
        );
      })}
    </div>
  );
};

export default NewsTitleList;
