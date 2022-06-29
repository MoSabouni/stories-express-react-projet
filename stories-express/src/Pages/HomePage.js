import React, { useContext, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../Components/NavBar/Navbar";
import NewsCardList from "../Components/NewsCard/NewsCardList";
import NewsTitleList from "../Components/NewsTitle/NewsTitleList";
import useFetch from "../Hooks/useFetch";
import { NewsContext } from "../Context/NewsContext";

const HomePage = () => {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`;
  const [data, loading, error] = useFetch(url);
  const [newsData, setNewsData] = useContext(NewsContext);

  useEffect(() => {
    setNewsData(data.results);
  }, [data]);

  if (loading) return <div> Loading news... </div>;

  if (error) return <div>Error loading news : {error}</div>;
  return (
    <div className="App">
      <Navbar />
      <div className="home-page__container">
        <NewsCardList newsData={newsData} />
        <NewsTitleList newsData={newsData} />
      </div>
    </div>
  );
};

export default HomePage;
