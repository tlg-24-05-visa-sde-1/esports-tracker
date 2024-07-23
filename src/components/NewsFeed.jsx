import React, { useState, useEffect } from 'react';
import { fetchLatestNews } from '../services/newsService';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchLatestNews('esports');
        setArticles(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error fetching news: {error.message}</p>;

  return (
    <div>
      <h2>Latest Esports News</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <img src={article.image_url} alt={article.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
