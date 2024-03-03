'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useCurrentWeather from "@/hooks/weather/useCurrentWeather";
import Image from "next/image"
import { useState } from "react";
import { Loading } from "../../../components/ui/Loading";

const CurrentWeather = () => {
  const [city, setCity] = useState<string>("sydney")
  const [data, loading] = useCurrentWeather(city)
  // w-[300px] h-[300px]
  return (
    <Card className="mb-4">
      {loading ? <Loading></Loading>: (
        <>
          <CardHeader className="items-center">
            <Input className="w-[200px]" value={city} onChange={(e) => setCity(e.target.value)}></Input>
          </CardHeader>
          <CardContent className="flex justify-center items-center flex-col">
            <CardTitle className="mb-2">{data?.name}</CardTitle>
            <CardDescription className="capitalize">{data?.weather?.[0].description}</CardDescription>
            <Image src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`} alt="weather-icon" width={60} height={60}></Image>
            <CardDescription className="text-xl">{Math.round(data?.main?.temp - 273)}°C</CardDescription>
          </CardContent>
        </>
      )}
      
    </Card>
  )
}

export default CurrentWeather