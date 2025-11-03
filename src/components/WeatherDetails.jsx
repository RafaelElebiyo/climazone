import React from 'react';

const WeatherDetails = () => {
  const details = [
    { label: 'Sensación térmica', value: '23°', icon: '🌡️' },
    { label: 'Probabilidad de lluvia', value: '20%', icon: '💧' },
    { label: 'Viento', value: '5 km/h SO', icon: '💨' },
    { label: 'Ráfagas', value: '8 km/h', icon: '🌪️' },
    { label: 'Humedad', value: '65%', icon: '💦' },
    { label: 'Presión', value: '1014 hPa', icon: '📊' },
    { label: 'Visibilidad', value: '16 km', icon: '👁️' },
    { label: 'UV', value: '4 Moderado', icon: '☀️' },
  ];

  return (
    <div className="weather-card h-100">
      <h4 className="text-white opacity-75 mb-3">Detalles del clima</h4>
      <div className="row g-3">
        {details.map((detail, index) => (
          <div key={index} className="col-6">
            <div className="glass-effect p-3 rounded-3 h-100">
              <div className="d-flex align-items-center mb-2">
                <span className="me-2" style={{ fontSize: '1.25rem' }}>{detail.icon}</span>
                <small className="text-white opacity-75">{detail.label}</small>
              </div>
              <div className="text-white fw-bold h5 mb-0">{detail.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;