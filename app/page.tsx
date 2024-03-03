'use client'

import News from "./_components/news";
import Todo from "./_components/todo";
import CurrentWeather from "./_components/weather";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-4 gap-x-3 p-4">
      <div className="col-span-1">
        <CurrentWeather></CurrentWeather>
        <Todo></Todo>
      </div>
      <div className="col-span-1 md:col-span-2">
        <News></News>
      </div>
    </div>
  );
}
