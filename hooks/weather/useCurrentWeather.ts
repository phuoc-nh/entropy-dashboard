'use client';

import { useEffect, useState } from "react";

type Weather = {
  name: string
  description: string
  icon: string
  temp: number
}

export default function useCurrentWeather(city: string) {
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = setTimeout(() => { // debounce
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === 200) {
            setCurrentWeather({
              name: data.name,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              temp: data.main.temp
            });
          }
        }).finally(() => setLoading(false))
    }, 500)
  
      return () => clearTimeout(getData)
  }, [city]);

  return [currentWeather, loading] as [Weather, boolean];
}