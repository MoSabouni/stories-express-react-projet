import React from "react";
import keyExistCheck from "../../Helpers/keyExistCheck";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
  // Here we check if we have an image url with helper function, if that is true we access the url from data
  const imgUrl = keyExistCheck(article, "media-metadata")
    ? article.media[0]["media-metadata"][2].url
    : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMTkyLjE5IDIzMy45M2MtMTAuODkxIDAtMTkuODI4IDguOTQxNC0xOS44MjggMTkuODMydjE4Ny42NmMwIDEwLjg5NSA4LjkzNzUgMTkuODMyIDE5LjgyOCAxOS44MzJoMjQ3LjQ1YzYuNDIxOSAzMi4zMzYgMzQuOTc3IDU2LjgyOCA2OS4yNTggNTYuODI4IDM5LjAwOCAwIDcwLjc0Mi0zMS42NjggNzAuNzQyLTcwLjU5IDAtMzguOTI2LTMxLjczNC03MC40NDUtNzAuNzQyLTcwLjQ0NS00Ljk4NDQgMC05LjgwNDcgMC40OTYwOS0xNC41IDEuNDc2NnYtMTI0Ljc2YzAtMTAuODkxLTguOTQxNC0xOS44MzItMTkuODMyLTE5LjgzMnptMCA5LjQ3MjdoMTQxLjE5YzAuNTU4NTkgMzAuMzkxIDI1LjY4IDU2LjgyOCA1Ni44MjggNTYuODI4IDMxLjE0OCAwIDU2LjI3My0yNi40MzggNTYuODMyLTU2LjgyOGgyNy41MjdjNS43NTM5IDAgMTAuMzU5IDQuNjA1NSAxMC4zNTkgMTAuMzU5djEyMC4xN2wtMzkuMjE5LTM5LjIxOWMtMS43MzA1LTEuNzIyNy00LjQ4NDQtMS44NTE2LTYuMzYzMy0wLjI5Njg4bC00OS4yODEgNDAuMjU0LTk2LjQ5Mi03My41NTFjLTEuMDE5NS0wLjc2MTcyLTIuMjk2OS0xLjA4Mi0zLjU1NDctMC44OTA2My0wLjY4NzUgMC4xMDU0Ny0xLjM0MzggMC4zNTU0Ny0xLjkyMTkgMC43NDIxOWwtMTA2LjI2IDc1LjMyOHYtMTIyLjU0YzAtNS43NTM5IDQuNjA1NS0xMC4zNTkgMTAuMzU5LTEwLjM1OXptMTUwLjY2IDBoOTQuNzE1Yy0wLjU1MDc4IDI1LjE4OC0yMS42NiA0Ny4zNTktNDcuMzU5IDQ3LjM1OS0yNS42OTUgMC00Ni44MDUtMjIuMTcyLTQ3LjM1NS00Ny4zNTl6bS01Mi4wOTQgNjcuMzM2IDk2LjY0MSA3My43MDNjMS43MzQ0IDEuMjY1NiA0LjEwMTYgMS4yMDMxIDUuNzY5NS0wLjE0ODQ0bDQ4LjY5MS0zOS45NTcgMzguNjI1IDM4LjYyNWMtMjQuODYzIDEwLjkyMi00Mi4xNzYgMzUuNjkxLTQyLjE3NiA2NC41MjcgMCAxLjQzNzUgMC4wNjI1IDIuODcxMSAwLjE0NDUzIDQuMjg5MWgtMjQ2LjI2Yy01Ljc1MzkgMC0xMC4zNTktNC42MDU1LTEwLjM1OS0xMC4zNTl2LTUzLjU3NHptMjE4LjE0IDc1LjYyNWMxNS4xNjggMCAyOS4xMTMgNS40MTQxIDM5LjgxMiAxNC41MDRsLTg2LjI4MSA4Ni40M2MtOS4yMzA1LTEwLjcwNy0xNC44MDEtMjQuNTY2LTE0LjgwMS0zOS44MDkgMC0zMy44MTIgMjcuMzkxLTYxLjEyNSA2MS4yNy02MS4xMjV6bTQ2LjQ3MyAyMS4zMTJjOS4yMzA1IDEwLjcwNyAxNC43OTcgMjQuNTY2IDE0Ljc5NyAzOS44MTIgMCAzMy44MDktMjcuMzg3IDYxLjEyMS02MS4yNyA2MS4xMjEtMTUuMjMgMC0yOS4wOS01LjQ4ODMtMzkuODA5LTE0LjY1MnoiLz4KPC9zdmc+Cg==";

  return (
    <div className="news-card__container">
      <div className="img-container">
        <img src={imgUrl} alt={article.title} className="news-card__img-main" />
      </div>
      <div className="news-card__text-container">
        <h2 className="news-card__title">{article.title}</h2>
        <h3>{article.abstract}</h3>
        <p>
          Published in {article.published_date} {article.byline}
        </p>
        <div className="news-card__btn-container">
          <button className="news-card__btn">
            <a href={article.url} target="_blank" rel="noreferrer">
              Visit website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
