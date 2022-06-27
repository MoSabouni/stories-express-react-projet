import React, { useState, createContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [newsData, setNewsData] = useState([]);

  return (
    <NewsContext.Provider value={[newsData, setNewsData]}>
      {props.children}
    </NewsContext.Provider>
  );
};
