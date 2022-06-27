import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import NewsCardListCategory from "../Components/NewsCard/NewsCardListCategory";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="App">
      <Navbar />
      <NewsCardListCategory category={category} />
    </div>
  );
};

export default CategoryPage;
