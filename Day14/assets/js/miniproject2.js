//2. Real-Time Air Quality Checker (Fetch API) 


async function getAirQuality() {
    const API_KEY = '58c3af0dc45edb3cdffed8737f4ea644'; 
    const lat = 50;  
    const lon = 180;

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);

      const aqi = data.list[0].main.aqi;
      let description = '';

      switch (aqi) {
        case 1:
          description = 'Good 🌞';
          break;
        case 2:
          description = 'Fair 😊';
          break;
        case 3:
          description = 'Moderate 😐';
          break;
        case 4:
          description = 'Poor 😷';
          break;
        case 5:
          description = 'Very Poor 🤢';
          break;
        default:
          description = 'Unknown';
      }

      document.getElementById('air-quality').innerHTML = `
        <h2>AQI Level: ${aqi}</h2>
        <p>Status: ${description}</p>
      `;

    } catch (error) {
      console.error('Error:', error);
      document.getElementById('air-quality').innerHTML = `
        <p>Failed to fetch air quality data. Please try again.</p>
      `;
    }
  }
  getAirQuality();
  