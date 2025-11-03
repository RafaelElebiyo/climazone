import React from 'react';

const CurrentWeather = ({ temperature, condition, highLow }) => {
  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'Soleado':
        return '☀️';
      case 'Parcialmente nublado':
        return '⛅';
      case 'Nublado':
        return '☁️';
      case 'Lluvioso':
        return '🌧️';
      default:
        return '☀️';
    }
  };

  return (
    <div className="weather-card text-center mb-4">
      <div className="current-weather">
        <div className="weather-icon mb-3" style={{ fontSize: '4rem' }}>
          {getWeatherIcon(condition)}
        </div>
        
        <div className="temperature-display mb-2">
          <span className="display-1 fw-bold text-white">
            {temperature}°
          </span>
        </div>
        
        <div className="weather-condition mb-3">
          <h3 className="h4 text-white opacity-75">{condition}</h3>
        </div>
        
        <div className="high-low text-white opacity-50">
          <span className="me-3">Máx: {highLow.high}°</span>
          <span>Mín: {highLow.low}°</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;