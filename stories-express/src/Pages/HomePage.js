import React from "react";
import "./HomePage.css";
import Navbar from "../Components/NavBar/Navbar";
import NewsCardList from "../Components/NewsCard/NewsCardList";

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <NewsCardList />
    </div>
  );
};

export default HomePage;
