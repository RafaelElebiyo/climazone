// Mapeo de condiciones climáticas a imágenes
export const getWeatherIcon = (condition) => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('soleado') || conditionLower.includes('clear')) {
    return '/assets/clear.png';
  } else if (conditionLower.includes('nublado') || conditionLower.includes('cloud')) {
    return '/assets/clouds.png';
  } else if (conditionLower.includes('lluvia') || conditionLower.includes('rain')) {
    return '/assets/rain.png';
  } else if (conditionLower.includes('llovizna') || conditionLower.includes('drizzle')) {
    return '/assets/drizzle.png';
  } else if (conditionLower.includes('nieve') || conditionLower.includes('snow')) {
    return '/assets/snow.png';
  } else if (conditionLower.includes('niebla') || conditionLower.includes('mist') || conditionLower.includes('fog')) {
    return '/assets/mist.png';
  } else {
    return '/assets/clear.png'; // default
  }
};

// Iconos para detalles del clima
export const weatherDetailIcons = {
  humidity: '/assets/humidity.png',
  wind: '/assets/wind.png',
  temperature: '/assets/celsius.svg',
  search: '/assets/search.png'
};