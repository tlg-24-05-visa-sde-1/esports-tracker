import React, { useState, useEffect } from 'react';
import axios from 'axios';

const streams = [
  { name: 'LEC', channel: 'lec' },
  { name: 'LCS', channel: 'lcs' },
  { name: 'LCK', channel: 'lck' },
  { name: 'VALORANT Champions Tour', channel: 'valorant' },
  { name: 'BLAST Premier', channel: 'blastpremier' },
  { name: 'ESL Pro League', channel: 'esl_csgo' },
  { name: 'Rocket League Championship Series', channel: 'rocketleague' },
  { name: 'Overwatch League', channel: 'overwatchleague' }
];

const StreamEmbed = () => {
  const [liveStream, setLiveStream] = useState(null);

  useEffect(() => {
    const checkStreams = async () => {
      for (const stream of streams) {
        try {
          const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${stream.channel}`, {
            headers: {
              'Client-ID': 'YOUR_TWITCH_CLIENT_ID',
              'Authorization': 'Bearer YOUR_TWITCH_ACCESS_TOKEN'
            }
          });

          if (response.data.data.length > 0) {
            setLiveStream(stream);
            break;
          }
        } catch (error) {
          console.error(`Error checking stream ${stream.name}:`, error);
        }
      }
    };

    checkStreams();
  }, []);

  if (!liveStream) {
    return (
      <div className="stream-embed">
        <h2>Live Stream</h2>
        <div style={{width: '100%', height: '315px', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
          No live streams available at the moment
        </div>
      </div>
    );
  }

  return (
    <div className="stream-embed">
      <h2>Live Stream: {liveStream.name}</h2>
      <iframe
        src={`https://player.twitch.tv/?channel=${liveStream.channel}&parent=${window.location.hostname}`}
        height="315"
        width="100%"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default StreamEmbed;
