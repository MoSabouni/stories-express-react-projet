import React from "react";
import useFetch from "../Hooks/useFetch";

const NewsCard = () => {
  const [data, loading, error] = useFetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dcaJ1BXWZcaHgq1a7ArABhxJKw58VzXg`
  );

  console.log(data.results);
  if (loading) <div>loading</div>;

  return (
    <div>
      {data.results.map((article) => {
        return (
          <div>
            <h1>{article.title}</h1>
            <h3>{article.abstract}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
