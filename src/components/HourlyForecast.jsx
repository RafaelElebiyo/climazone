import React from 'react';

const HourlyForecast = () => {
  // Datos de ejemplo para el pronóstico por hora
  const hourlyData = [
    { time: 'Ahora', temp: 22, icon: '☀️', precipitation: 0 },
    { time: '13:00', temp: 23, icon: '☀️', precipitation: 0 },
    { time: '14:00', temp: 24, icon: '⛅', precipitation: 10 },
    { time: '15:00', temp: 23, icon: '⛅', precipitation: 20 },
    { time: '16:00', temp: 22, icon: '🌧️', precipitation: 60 },
    { time: '17:00', temp: 21, icon: '🌧️', precipitation: 80 },
    { time: '18:00', temp: 20, icon: '🌧️', precipitation: 70 },
    { time: '19:00', temp: 19, icon: '⛅', precipitation: 30 },
  ];

  return (
    <div className="weather-card mb-4">
      <h4 className="text-white opacity-75 mb-3">Pronóstico por hora</h4>
      <div className="hourly-scroll">
        <div className="d-flex overflow-auto pb-2" style={{ gap: '1rem' }}>
          {hourlyData.map((hour, index) => (
            <div key={index} className="text-center flex-shrink-0" style={{ minWidth: '60px' }}>
              <div className="text-white opacity-75 small mb-1">{hour.time}</div>
              <div className="mb-1" style={{ fontSize: '1.5rem' }}>{hour.icon}</div>
              <div className="text-white fw-bold">{hour.temp}°</div>
              {hour.precipitation > 0 && (
                <div className="text-primary small mt-1">
                  {hour.precipitation}%
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;