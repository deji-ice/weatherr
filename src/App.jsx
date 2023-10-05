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
      <div  className='flex  p-5 flex-col items-center gap-10 text-white  w-screen h-screen'>
        {/* <h1>{currentWeather?.feelslike_c}</h1>
        <div><p>{currentWeather?.condition.text}</p> <img  src={currentWeather?.condition.icon} /></div>
        <p> {location?.name} ,{location?.country}</p> */}

        <div className='flex justify-between w-full items-start'>
          <div>search</div>
          <div className='flex flex-col items-end gap-2'>
            <div className='flex items-center'>
              <img className='w-10' src={currentWeather?.condition.icon} />
              <h1 className='text-lg font-semibold'>{currentWeather?.feelslike_c} </h1>
            </div>

            <p>{location?.name} ,{location?.country}</p>
          </div>
        </div>
        <div className='gap-10 flex flex-col items-center justify-center '>
          <div className='flex flex-col gap-  justify-center items-center'>
            <h1 className='text-[10rem] p-auto shadow-xl'>16:04</h1>
            <h3 className='text-5xl font-semibold shadow-xl'>Good afternoon, Ayodeji</h3>
          </div>
          <div className='flex flex-col gap-10'>
            <p className='text-3xl shadow-xl'>What is your main focus for today?</p>
            <hr className='border w-full' />
          </div>

          <div className='mt-5'>paragraphs</div>
        </div>
      </div>
    </>
  )
}

export default App
