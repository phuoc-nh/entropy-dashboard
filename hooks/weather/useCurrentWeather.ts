'use client';

import { useEffect, useState } from "react";

export default function useCurrentWeather(city: string) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = setTimeout(() => { // debounce
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === 200) {
            setCurrentWeather(data);
          }
        }).finally(() => setLoading(false))
    }, 500)
  
      return () => clearTimeout(getData)
  }, [city]);

  return [currentWeather, loading];
}