// src/services/pandaScoreService.js
import axios from 'axios';

const API_KEY = 'MgDWw4S28FXcAX42xcyQPXiacx0V_aviuYDxkcalhhWh3rq-9n4';
const BASE_URL = 'https://api.pandascore.co';

export const fetchUpcomingMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/matches/upcoming`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming matches:', error);
    throw error;
  }
};

export const fetchLiveMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/lives`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching live matches:', error);
    throw error;
  }
};
