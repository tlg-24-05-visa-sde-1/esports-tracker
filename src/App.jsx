import React from 'react';
import UpcomingMatches from './components/UpcomingMatches';
import LiveMatches from './components/LiveMatches';
import NewsFeed from './components/NewsFeed'; 
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Esports News and Matches</h1>
      </header>
      <main className="App-content">
        <div className="section">
          <LiveMatches />
        </div>
        <div className="section">
          <UpcomingMatches />
        </div>
        <div className="section">
          <NewsFeed />
        </div>
      </main>
    </div>
  );
};

export default App;
