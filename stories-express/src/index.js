import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./Context/NewsContext";
import TEST from "./Components/TEST";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NewsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<TEST />} />
      </Routes>
    </Router>
  </NewsProvider>
);
