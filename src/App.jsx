import React from 'react';
import UpcomingMatches from './components/UpcomingMatches';
import LiveMatches from './components/LiveMatches';
import NewsFeed from './components/NewsFeed';
import StreamEmbed from './components/StreamEmbed';
import './App.css';

const App = () => {
  return (
    <div className="App container-fluid">
      <header className="row bg-dark text-white py-3 mb-4">
        <div className="col">
          <h1 className="text-center">Esports News and Matches</h1>
        </div>
      </header>
      <main className="row">
        <div className="col-md-6">
          <LiveMatches />
          <UpcomingMatches />
        </div>
        <div className="col-md-6">
          <StreamEmbed />
          <NewsFeed />
        </div>
      </main>
    </div>
  );
};

export default App;
