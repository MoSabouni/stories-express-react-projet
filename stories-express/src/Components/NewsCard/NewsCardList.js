import React from "react";
import NewsCard from "./NewsCard";
import useFetch from "../../Hooks/useFetch";
import "./NewsCardList.css";

const NewsCardList = () => {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dcaJ1BXWZcaHgq1a7ArABhxJKw58VzXg`;
  const [data, loading, error] = useFetch(url);

  console.log(data);

  if (loading) return <div> Loading products... </div>;

  if (error) return <div>Error loading products : {error}</div>;
  const articles = data.results;
  if (articles) {
    return (
      <div className="news-card-list__container">
        <div>
          {articles.map((article) => {
            return <NewsCard article={article} />;
          })}
        </div>
      </div>
    );
  }
};

export default NewsCardList;
