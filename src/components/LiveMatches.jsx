// src/components/LiveMatches.jsx
import React, { useState, useEffect } from 'react';
import { fetchLiveMatches } from '../services/pandaScoreService';
import './Matches.css';

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await fetchLiveMatches();
        setMatches(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getMatches();
  }, []);

  if (loading) return <p>Loading live matches...</p>;
  if (error) return <p>Error fetching matches: {error.message}</p>;
  if (matches.length === 0) return <p>No live matches at the moment.</p>;

  return (
    <div className="matches-section">
      <h2>Live Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <p>{match.name}</p>
            <p>{match.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMatches;
