import React, { useState, createContext } from "react";
import useFetch from "../Hooks/useFetch";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [newsData, setNewsData] = useState([]);

  return (
    <NewsContext.Provider value={[newsData, setNewsData]}>
      {props.children}
    </NewsContext.Provider>
  );
};
