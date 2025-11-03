import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import AirQuality from './components/AirQuality';
import WeatherDetails from './components/WeatherDetails';
import './styles/App.css';
import './styles/components.css';
function App() {
  const [weatherData, setWeatherData] = useState({
    location: 'Ciudad de México',
    temperature: 22,
    condition: 'Soleado',
    highLow: { high: 25, low: 18 }
  });

  // Simular cambio de condiciones (para demostración del diseño)
  useEffect(() => {
    const conditions = ['Soleado', 'Parcialmente nublado', 'Nublado', 'Lluvioso'];
    const interval = setInterval(() => {
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setWeatherData(prev => ({
        ...prev,
        condition: randomCondition,
        temperature: Math.floor(Math.random() * 15) + 15
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundGradient = (condition) => {
    switch(condition) {
      case 'Soleado': return 'gradient-sunny';
      case 'Parcialmente nublado': return 'gradient-cloudy';
      case 'Nublado': return 'gradient-cloudy';
      case 'Lluvioso': return 'gradient-rainy';
      default: return 'gradient-sunny';
    }
  };

  return (
    <div className={`app-container ${getBackgroundGradient(weatherData.condition)}`}>
      <div className="container-fluid px-4 py-3">
        <Header location={weatherData.location} />
        <CurrentWeather 
          temperature={weatherData.temperature}
          condition={weatherData.condition}
          highLow={weatherData.highLow}
        />
        <HourlyForecast />
        <DailyForecast />
        <div className="row">
          <div className="col-md-6">
            <AirQuality />
          </div>
          <div className="col-md-6">
            <WeatherDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;