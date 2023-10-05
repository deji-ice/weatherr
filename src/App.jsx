import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [location, setLocation] = useState({})
  const [currentWeather, setCurrentWeather] = useState()


  useEffect(() => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=aae2ec7663d84f2695090841230510&q=Lagos")
      .then(res => {
        console.log(res.data)
        console.log(res.data.location);
        setCurrentWeather(res.data.current)
        setLocation(res.data.location)
      })
  }, [])

  return (
    <>
      <div>
        <h1>{currentWeather?.feelslike_c}</h1>
        <div><p>{currentWeather?.condition.text}</p> <img  src={currentWeather?.condition.icon} /></div>
        <p> {location?.name} ,{location?.country}</p>
      </div>
    </>
  )
}

export default App
