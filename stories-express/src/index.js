import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./Context/NewsContext";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NewsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  </NewsProvider>
);
