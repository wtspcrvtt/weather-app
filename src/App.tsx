import { useState } from 'react'
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
import './App.css';
function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({ name: 'Москва', temp: 20, feels_like: 18, description: 'Солнечно', condition: 'Солнечно' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function fetchWeather() {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Город не найден');
          }
          return response.json()
        })
        .then(data => {
          setWeatherData({
            name: data.name,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            description: data.weather[0].description,
            condition: data.weather[0].main
          });
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        })
    };
  

  return (
    <>
    <div className={`app ${weatherData?.condition || ''}`}>

      <h1 className='title'>Моя погода</h1>

      <WeatherForm value={city} onChange={setCity} onSearch={fetchWeather} />
        
    

      <WeatherDisplay data={weatherData} isLoading={isLoading} error={error} condition={weatherData?.condition} />

    </div>
      </>
      
  );
  
}

export default App
