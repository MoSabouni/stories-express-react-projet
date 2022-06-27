import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import useFetch from "../../Hooks/useFetch";
import "./NewsCardList.css";
import { NewsContext } from "../../Context/NewsContext";

const NewsCardList = () => {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dcaJ1BXWZcaHgq1a7ArABhxJKw58VzXg`;
  const [data, loading, error] = useFetch(url);
  const [newsData, setNewsData] = useContext(NewsContext);
  console.log(data);

  useEffect(() => {
    setNewsData(data.results);
  }, [data]);

  if (loading) return <div> Loading news... </div>;

  if (error) return <div>Error loading news : {error}</div>;

  if (newsData) {
    return (
      <div className="news-card-list__container">
        <div>
          {newsData.map((article, index) => {
            return <NewsCard key={index} article={article} />;
          })}
        </div>
      </div>
    );
  }
};

export default NewsCardList;
