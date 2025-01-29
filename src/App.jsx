import { useState, useEffect } from 'react';
import './App.css';
import { getWeatherData, getForecastData } from './components/WeatherApp';

const App = () => {
  const [city, setCity] = useState('Srinagar');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    const fetchWeatherData = async () => {
      try {
        const currentWeather = await getWeatherData(city);
        const weatherForecast = await getForecastData(city);

        if (currentWeather && weatherForecast) {
          setWeather(currentWeather);
          setForecast(weatherForecast);
        } else {
          setError('Weather data not available for this city...');
        }
      } catch (error) {
        setError('Failed to fetch weather data....');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleSearchChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchCity.trim() !== '') {
      setCity(searchCity);
      setSearchCity('');
    }
  };

  const getBackgroundImage = (description) => {
    if (!description) return '/images/default.jpg'; // Fallback

    const timeOfDay = new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'day' : 'night';
    const desc = description.toLowerCase().trim();

    const images = {
      clear: "clear.jpg",
      sunny: "clear.jpg",
      "partly cloudy": "clouds.jpg",
      cloudy: "clouds.jpg",
      overcast: "clouds.jpg",
      drizzle: "drizzle.jpg",
      rain: "rain.jpg",
      shower: "rain.jpg",
      snow: "snow.jpg",
      fog: "fog.jpg",
      mist: "mist.jpg",
      haze: "haze.jpg",
      thunderstorm: "thunderstorm.jpg",
      hail: "hail.jpg",
      sleet: "sleet.jpg",
    };

    for (const key in images) {
      if (desc.includes(key)) {
        return `/images/${timeOfDay}/${images[key]}`;
      }
    }

    console.warn("No matching image found for:", description);
    return `/images/${timeOfDay}/default.jpg`;
  };

  if (loading) {
    return <div id="preloader"><div className="loader"></div></div>;
  }

  if (error) {
    return (
      <div className="errormsg">
        <h2 className='typing-text'>{error}</h2>
        <div className='searchbar'>
          <form onSubmit={handleSearchSubmit} id="location">
            <input
              type="text"
              value={searchCity}
              onChange={handleSearchChange}
              placeholder="Search Location..."
              className="search"
            />
            <button type="submit" className="btn"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>
    );
  }

  if (!weather || !forecast) {
    return (
      <div className="weather-wrapper">
        <div className="weather-wrapper-container">
          <h3 className="header">Weather App <i className="ri-cloudy-fill"></i></h3>
          <div className="search-container">
            <form onSubmit={handleSearchSubmit} id="location">
              <input
                type="text"
                value={searchCity}
                onChange={handleSearchChange}
                placeholder="Search Location..."
                className="search"
              />
              <button type="submit" className="btn"><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const { current, location } = weather;
  const { temp_c, humidity, pressure_mb, wind_kph, condition } = current;
  const { text, icon } = condition;
  const backgroundImage = getBackgroundImage(text);

  // Get current date and day
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div
      className="weather-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="weather-wrapper-container">
        <h3 className="header">Weather App <i className="ri-cloudy-fill"></i></h3>
        <h1 className="temp">{temp_c}&#176;</h1>
        <div className="city-time">
          <h1 className="city-name">{location.name}</h1>
          <span className="time">{currentDay}, {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="weather">
          <img src={`https:${icon}`} className="w-icon" alt={text} />
          <span className="condition">{text}</span>
        </div>
      </div>

      <div className="search-container">
        <form onSubmit={handleSearchSubmit} id="location">
          <input
            type="text"
            value={searchCity}
            onChange={handleSearchChange}
            placeholder="Search Location..."
            className="search"
          />
          <button className="btn"><i className="fas fa-search"></i></button>
        </form>

        <ul className="w-details">
  <h4>Weather Details</h4>
  <li><span>Condition</span><span className="cloud">{condition.text}</span></li>
  <li><span>Feels Like</span><span className="feels-like">{current.feelslike_c}°C</span></li>
  <li><span>Humidity</span><span className="humidity">{humidity}%</span></li>
  <li><span>Wind Speed</span><span className="wind">{wind_kph} km/h</span></li>
  <li><span>Wind Direction</span><span className="wind-dir">{current.wind_dir}</span></li>
  <li><span>Pressure</span><span className="pressure">{pressure_mb} hPa</span></li>
  <li><span>Visibility</span><span className="visibility">{current.vis_km} km</span></li>
  <li><span>UV Index</span><span className="uv-index">{current.uv}</span></li>

  <h4>Air Quality</h4>
  <li><span>PM2.5</span><span className="air-quality">{current.air_quality.pm2_5} µg/m³</span></li>
  <li><span>PM10</span><span className="air-quality">{current.air_quality.pm10} µg/m³</span></li>
  <li><span>CO (Carbon Monoxide)</span><span className="air-quality">{current.air_quality.co} µg/m³</span></li>
  <li><span>NO₂ (Nitrogen Dioxide)</span><span className="air-quality">{current.air_quality.no2} µg/m³</span></li>
  <li><span>O₃ (Ozone)</span><span className="air-quality">{current.air_quality.o3} µg/m³</span></li>
  <li><span>SO₂ (Sulfur Dioxide)</span><span className="air-quality">{current.air_quality.so2} µg/m³</span></li>
</ul>


<div className="weather-forecast-container">
  <h3>7 Days Weather Forecast</h3>

  {forecast.forecast.forecastday.map((day, index) => {
    const date = new Date(day.date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    return (
      <div key={index} className="forecast-day">
        <p>{dayName} <br />{date.toLocaleDateString()}</p> <br />
      <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} />
        <p>{day.day.avgtemp_c}°C <br />{day.day.condition.text}</p>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default App;
