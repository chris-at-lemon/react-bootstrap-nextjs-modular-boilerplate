import { useEffect, useState } from "react";
import { getWeather, getCityGoogle } from "../../modules/location";

export const savedSearchesController = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  console.log('recentSearches', recentSearches)
  
  useEffect(() => {
		const savedSearchHistory = localStorage.getItem('searchHistory');
		const parsedSearchHistory = JSON.parse(savedSearchHistory);

    setRecentSearches(parsedSearchHistory)
  }, [])

  const [savedWeatherData, setSavedWeatherData] = useState([]);
  console.log(savedWeatherData);
  
  let array: any[] = [];
  console.log(array)

  useEffect(() => {
    recentSearches.forEach((element: any, i: number) => {
      const fetchWeather = async () => {
        const weatherData: any = await getCityGoogle(element.lat, element.lon);
        console.log(weatherData, i);
        array.push(weatherData);
      };
        console.log('running')
        return fetchWeather();
      })
  }, [])


  
  return {

  }
}