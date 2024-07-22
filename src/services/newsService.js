// src/services/newsService.js
import axios from 'axios';

const API_KEY = 'pub_49082b0c63f48908a649f3fc462c2d3839c92';
const BASE_URL = 'https://newsdata.io/api/1';

export const fetchLatestNews = async (query, language = 'en') => {
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: {
        apikey: API_KEY,
        q: query,
        language,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchArchivedNews = async (query, fromDate, toDate, language = 'en') => {
  try {
    const response = await axios.get(`${BASE_URL}/archive`, {
      params: {
        apikey: API_KEY,
        q: query,
        from_date: fromDate,
        to_date: toDate,
        language,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching archived news:', error);
    throw error;
  }
};
