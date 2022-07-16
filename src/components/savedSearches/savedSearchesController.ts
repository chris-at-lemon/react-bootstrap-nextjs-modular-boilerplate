import { useEffect, useState } from "react";
import uuid from "react-uuid"

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
    const reversed = searches?.reverse().slice(0, 3);
    console.log('reversed', reversed)

    reversed.forEach( async (search: any) => {
      const weatherData: any = await getWeather(search.lat, search.lon);
      console.log('weatherData', weatherData.data);

      const newWeatherToDisplay: any = [...savedSearchesToDisplay];
      newWeatherToDisplay.push(
        {
          temp: weatherData.data.main.temp,
          city: weatherData.data.name,
          icon: weatherData.data.weather[0].icon,
          coord: weatherData.data.coord,
          id: uuid()
        }
      );
      setSavedSearchesToDisplay(newWeatherToDisplay);

      const historyInStorage = getSearchHistory();
      // console.log('historyInStorage', historyInStorage);
      
    })
    
  }, [savedSearches]);

  if (savedSearchesToDisplay.length > 3) {
    handleRemove(savedSearchesToDisplay[0].id);
  }

  function handleRemove(id: number) {
    console.log(id)
    const newList = savedSearchesToDisplay.filter((item: any) => item.id !== id);
    console.log('newList', newList);
    
    setSavedSearchesToDisplay(newList);
    }
  
  return {
    savedSearchesToDisplay,
    fn: {
      handleRemove
    }
  }
}