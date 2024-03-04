'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import useCurrentWeather from "@/hooks/weather/useCurrentWeather";
import Image from "next/image"
import { useState } from "react";
import { Loading } from "../../../components/ui/Loading";
import useQuote from "@/hooks/quote/useQuote";

const CurrentWeather = () => {
  const [city, setCity] = useState<string>("sydney")
  const [data, loading] = useCurrentWeather(city)
  const [quote, _] = useQuote()

  return (
    <Card className="mb-4">
      {loading ? <Loading></Loading>: (
        <>
          <CardHeader className="items-center">
            <Input className="w-[200px]" value={city} onChange={(e) => setCity(e.target.value)}></Input>
          </CardHeader>
          <CardContent className="flex justify-center items-center flex-col text-center">
            <CardTitle className="mb-2">{data.name}</CardTitle>
            <CardDescription className="capitalize">{data.description}</CardDescription>
            <Image src={`http://openweathermap.org/img/w/${data.icon}.png`} alt="weather-icon" width={60} height={60}></Image>
            <CardDescription className="text-xl">{Math.round(data.temp - 273)}°C</CardDescription>
            <CardDescription className="italic">{quote}</CardDescription>
          </CardContent>
        </>
      )}
      
    </Card>
  )
}

export default CurrentWeather