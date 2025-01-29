import axios from 'axios';

const API_KEY = 'f3bbd755daf44a6a899120948241909';  

// Get current weather by city
export const getWeatherData = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'yes', 
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

// Get 7-day forecast
export const getForecastData = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
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
