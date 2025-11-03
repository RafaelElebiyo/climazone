import React from 'react';

const DailyForecast = () => {
  // Datos de ejemplo para pronóstico de 10 días
  const dailyData = [
    { day: 'Hoy', high: 25, low: 18, icon: '☀️', precipitation: 0 },
    { day: 'Mañana', high: 24, low: 17, icon: '⛅', precipitation: 20 },
    { day: 'Miér', high: 23, low: 16, icon: '🌧️', precipitation: 80 },
    { day: 'Juev', high: 22, low: 15, icon: '🌧️', precipitation: 70 },
    { day: 'Vier', high: 24, low: 16, icon: '⛅', precipitation: 30 },
    { day: 'Sáb', high: 26, low: 17, icon: '☀️', precipitation: 0 },
    { day: 'Dom', high: 27, low: 18, icon: '☀️', precipitation: 0 },
  ];

  return (
    <div className="weather-card mb-4">
      <h4 className="text-white opacity-75 mb-3">Pronóstico de 7 días</h4>
      <div className="daily-forecast">
        {dailyData.map((day, index) => (
          <div key={index} className="row align-items-center py-2 border-bottom border-opacity-10 border-white">
            <div className="col-3">
              <span className="text-white opacity-75">{day.day}</span>
            </div>
            <div className="col-2 text-center">
              <span style={{ fontSize: '1.25rem' }}>{day.icon}</span>
            </div>
            <div className="col-3 text-center">
              {day.precipitation > 0 ? (
                <span className="text-primary small">{day.precipitation}%</span>
              ) : (
                <span className="text-white opacity-50 small">-</span>
              )}
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-between">
                <span className="text-white">{day.high}°</span>
                <span className="text-white opacity-50">{day.low}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;