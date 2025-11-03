import React from 'react';

const Header = ({ location }) => {
  return (
    <div className="header-container mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1 className="h3 mb-0 fw-bold text-white">ClimaZone</h1>
        </div>
        
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-sm glass-effect text-white border-0">
            <i className="bi bi-list"></i>
          </button>
          <button className="btn btn-sm glass-effect text-white border-0">
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      
      <div className="text-center mt-3">
        <h2 className="h5 text-white opacity-75">{location}</h2>
        <div className="text-white opacity-50 small">
          {new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;