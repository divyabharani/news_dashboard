import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87c80c6b2cb247659836594f6c3c85a1'
          
        );
        console.log(response)
        setArticles(response.data.articles); 
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Top News</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank">Read more</a>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;

  

    

    