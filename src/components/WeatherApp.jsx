import axios from 'axios';

const API_KEY = 'f3bbd755daf44a6a899120948241909'; 

// Get weather by city or coordinates
export const getWeatherData = async (query) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
                key: API_KEY,
                q: query, 
                aqi: 'yes',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};


export const getForecastData = async (query) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            params: {
                key: API_KEY,
                q: query,
                days: 7,
                aqi: 'yes',
                alerts: 'yes',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        return null;
    }
};


export const getLocationByIP = async () => {
    try {
        const response = await axios.get('https://ipapi.co/json/');
        return response.data;
    } catch (error) {
        console.error('Error fetching IP location:', error);
        return null;
    }
};
