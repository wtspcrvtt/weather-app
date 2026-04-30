import WeatherForm from './components/WeatherForm'
import { useState } from 'react'
function App() {
  const [city, setCity] = useState('');


  function handleCityChange() {
    (newCity: string) => {
      setCity(newCity);
      }
    }
    return (

      <WeatherForm onCityChange={handleCityChange} />
    )
  
}

export default App
