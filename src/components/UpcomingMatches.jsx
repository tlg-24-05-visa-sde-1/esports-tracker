import React, { useState, useEffect } from 'react';
import { fetchUpcomingMatches } from '../services/pandaScoreService.js';
import './Matches.css';

const UpcomingMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await fetchUpcomingMatches();
        setMatches(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getMatches();
  }, []);

  if (loading) return <p>Loading upcoming matches...</p>;
  if (error) return <p>Error fetching matches: {error.message}</p>;

  return (
    <div className="matches-section">
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <p>{match.name}</p>
            <p>{new Date(match.scheduled_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMatches;
