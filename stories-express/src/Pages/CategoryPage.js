import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import NewsCardListCategory from "../Components/NewsCard/NewsCardListCategory";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="App">
      <Navbar />
      <div className="category-page__container">
        <NewsCardListCategory category={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
