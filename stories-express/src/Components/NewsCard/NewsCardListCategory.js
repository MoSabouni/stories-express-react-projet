import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { NewsContext } from "../../Context/NewsContext";

const NewsCardListCategory = ({ category }) => {
  const [newsData] = useContext(NewsContext);
  const newsDataFiltered = newsData.filter(
    (article) => article.section === category
  );

  return (
    <div>
      <div>
        {newsDataFiltered.map((article, index) => {
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    </div>
  );
};

export default NewsCardListCategory;
