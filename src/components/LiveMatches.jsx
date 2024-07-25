import React, { useState, useEffect } from 'react';
import { fetchLiveMatches } from '../services/pandaScoreService';

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

  if (loading) return <p className="text-center">Loading live matches...</p>;
  if (error) return <p className="text-center text-danger">Error fetching matches: {error.message}</p>;
  if (matches.length === 0) return <p className="text-center">No live matches at the moment.</p>;

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h5 mb-0">Live Matches</h2>
      </div>
      <ul className="list-group list-group-flush">
        {matches.map((match) => (
          <li key={match.id} className="list-group-item">
            <h3 className="h6 mb-1">{match.name}</h3>
            <p className="mb-0 text-muted">{match.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMatches;
