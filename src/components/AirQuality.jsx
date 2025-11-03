import React from 'react';

const AirQuality = () => {
  const aqi = 45; // Índice de calidad del aire (ejemplo)
  
  const getAQILevel = (value) => {
    if (value <= 50) return { level: 'Buena', color: 'success', description: 'La calidad del aire es satisfactoria.' };
    if (value <= 100) return { level: 'Moderada', color: 'warning', description: 'La calidad del aire es aceptable.' };
    return { level: 'Mala', color: 'danger', description: 'La calidad del aire puede afectar grupos sensibles.' };
  };

  const aqiInfo = getAQILevel(aqi);

  return (
    <div className="weather-card h-100">
      <h4 className="text-white opacity-75 mb-3">Calidad del aire</h4>
      <div className="text-center">
        <div className="aqi-value mb-2">
          <span className="display-4 fw-bold text-white">{aqi}</span>
        </div>
        <div className={`aqi-level badge bg-${aqiInfo.color} mb-3`}>
          {aqiInfo.level}
        </div>
        <p className="text-white opacity-75 small">
          {aqiInfo.description}
        </p>
        
        <div className="aqi-details mt-4">
          <div className="row text-start">
            <div className="col-6 mb-2">
              <small className="text-white opacity-50">PM2.5</small>
              <div className="text-white">12 µg/m³</div>
            </div>
            <div className="col-6 mb-2">
              <small className="text-white opacity-50">PM10</small>
              <div className="text-white">20 µg/m³</div>
            </div>
            <div className="col-6 mb-2">
              <small className="text-white opacity-50">O₃</small>
              <div className="text-white">45 ppb</div>
            </div>
            <div className="col-6 mb-2">
              <small className="text-white opacity-50">NO₂</small>
              <div className="text-white">18 ppb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;