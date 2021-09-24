import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from './fetchWather';
import './App.css';
import { moc } from "./moc"
import { Today } from './components/today';
import { ForADay } from "./components/forADay"


function App() {
  const [weather, setWather] = useState(moc)
  const [location, setLocation] = useState()


  // const { isLoaded, request, error } = useHttp()
  const { request, error } = useHttp()


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => getweather(e.coords))

  }, [])

  const getweather = useCallback((city) => {
    (async () => {
      //const resW = await request(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&lang=ru&appid=a65a3f613545bf5b9fac5ec4b39fe7bd`)



      setLocation(city)

      //setWather((prev) => ({ ...prev, ...resW }))

    })()
  }, [])



  let isLoaded = true

  return (

    <>
      {

        !isLoaded ? (

          <img style={{ height: "100vh", width: "100vh" }} src={require("./img/loaded.gif").default} alt="" />

        ) : isLoaded && weather ? (
          <div className="App">
            <Today today={weather} />
            <ForADay forecast={weather.list} location={location} />
          </div>
        ) : (
          <p>{error}</p>
        )
      }

    </>
  );
}

export default App;
