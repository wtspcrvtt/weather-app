import { useState } from 'react'
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({ name: 'Москва', temp: 20, description: 'Солнечно' });
  
  

  function fetchWeather() {
    console.log(city);
  }

  return (
    <>
      <WeatherForm value={city} onChange={setCity} onSearch={fetchWeather} />
        
    

      <WeatherDisplay data={weatherData} />
      </>
      
  );
  
}

export default App
