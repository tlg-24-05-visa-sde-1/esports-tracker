import React, { useState, useEffect } from 'react';
import { fetchLatestNews } from '../services/newsService';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchLatestNews('esports');
        setNews(data.results || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h2 className="h5 mb-0">News</h2>
      </div>
      <ul className="list-group list-group-flush">
        {news.map((item, index) => (
          <li key={index} className="list-group-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
