import React, { useState } from "react";
import Article from "./Article";

const Headlines = () => {
  const [articles, setArticles] = useState([{}, {}, {}]);

  async function handleClick(e) {
    let url = e.target.id;
    let fetchedArticles = await fetch(url);
    let data = await fetchedArticles.json()
    console.log(data)
    let chosenArticles = await [
      data.articles[0],
      data.articles[1],
      data.articles[2],
    ];
    setArticles(chosenArticles);
  }

  return (
    <div>
      <h1>Select A News Category</h1>
      <div>
        <span
          id="https://newsapi.org/v2/everything?q=politics&from=2021-10-14&sortBy=publishedAt&apiKey=66e9475f48ba444b98fc824b43de8af8"
          onClick={(e) => handleClick(e)}
        >
          Politics
        </span>
        <span
          id="https://newsapi.org/v2/everything?q=business&from=2021-10-14&sortBy=publishedAt&apiKey=66e9475f48ba444b98fc824b43de8af8"
          onClick={(e) => handleClick(e)}
        >
          Business
        </span>
        <span
          id="https://newsapi.org/v2/everything?q=technology&from=2021-10-14&sortBy=publishedAt&apiKey=66e9475f48ba444b98fc824b43de8af8"
          onClick={(e) => handleClick(e)}
        >
          Tech
        </span>
        <span
          id="https://newsapi.org/v2/everything?q=health&from=2021-10-14&sortBy=publishedAt&apiKey=66e9475f48ba444b98fc824b43de8af8"
          onClick={(e) => handleClick(e)}
        >
          Health
        </span>
      </div>
      <Article
        title1={articles[0].title}
        title2={articles[1].title}
        title3={articles[2].title}
        description1={articles[0].description}
        description2={articles[1].description}
        description3={articles[2].description}
        urlToImage1={articles[0].urlToImage}
        urlToImage2={articles[1].urlToImage}
        urlToImage3={articles[2].urlToImage}
      />
    </div>
  );
};

export default Headlines;
