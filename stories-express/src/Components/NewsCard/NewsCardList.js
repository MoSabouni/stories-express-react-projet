import React from "react";
import NewsCard from "./NewsCard";

const NewsCardList = ({ newsData }) => {
  if (newsData) {
    return (
      <div className="news-card-list__container">
        {newsData.map((article, index) => {
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    );
  }
};

export default NewsCardList;
