import { useEffect, useState } from "react";
import { getWeather } from "../../modules/location";
import { getSearchHistory } from "../../globalState/atoms/localStorage/localStorage";

import { useRecoilValue } from 'recoil';
import { searchHistory } from '../../globalState/atoms/savedSearches';


export const useSearchesController = () => {
  const savedSearches = useRecoilValue(searchHistory);
  //console.log('savedSearches', savedSearches)
  const [savedSearchesToDisplay, setSavedSearchesToDisplay] = useState([]);
  
  // Runs every time we do a new search to save to saved searches
  useEffect(() => {
    const searches = [...savedSearches];
    const reversed = searches?.reverse();

    reversed.forEach( async (search: any) => {
      const weatherData: any = await getWeather(search.lat, search.lon);
      console.log('weatherData', weatherData.data.coord);

      const newWeatherToDisplay: any = [...savedSearchesToDisplay];
      newWeatherToDisplay.push(
        {
          temp: weatherData.data.main.temp,
          city: weatherData.data.name,
          icon: weatherData.data.weather[0].icon,
          coord: weatherData.data.coord
        }
      );
      setSavedSearchesToDisplay(newWeatherToDisplay);

      const historyInStorage = getSearchHistory();
      // console.log('historyInStorage', historyInStorage);
      
    })
    
  }, [savedSearches])
  
  return {
    savedSearchesToDisplay
  }
}