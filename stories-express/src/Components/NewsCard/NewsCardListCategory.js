import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import useFetch from "../../Hooks/useFetch";
import "./NewsCardList.css";
import { NewsContext } from "../../Context/NewsContext";

const NewsCardListCategory = ({ category }) => {
  const [newsData] = useContext(NewsContext);
  // console.log(data);
  const newsDataFiltered = newsData.filter(
    (article) => article.section === category
  );

  return (
    <div className="news-card-list__container">
      <div>
        {newsDataFiltered.map((article) => {
          return <NewsCard article={article} />;
        })}
      </div>
    </div>
  );
};

export default NewsCardListCategory;
