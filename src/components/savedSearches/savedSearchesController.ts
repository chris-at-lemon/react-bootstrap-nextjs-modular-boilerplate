import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { getWeather } from "../../modules/location";
import { getSearchHistory } from "../../globalState/localStorage/localStorage";

import { useRecoilValue } from 'recoil';
import { searchHistory } from '../../globalState/atoms/savedSearches';


export const useSearchesController = () => {
  const savedSearches = useRecoilValue(searchHistory);
  console.log('savedSearches', savedSearches)

  // interface ISaved {
  //   temp?: number,
  //   city?: string,
  //   icon?: string,
  //   coord?: {lat: number, lon: number},
  //   id?: string
  // }
  
  const [savedSearchesToDisplay, setSavedSearchesToDisplay] = useState<any>([]);
  console.log('savedSearchesToDisplay', savedSearchesToDisplay)
  
  // Runs every time we do a new search to save to saved searches
  useEffect(() => {
    const searches = [...savedSearches];
    const reversed = searches?.reverse().slice(0, 3);
    console.log('reversed', reversed)

    reversed.forEach( async (search: any) => {
      const weatherData: any = await getWeather(search.lat, search.lon);
      //console.log('weatherData', weatherData.data);

      const newWeatherToDisplay: any = [...savedSearchesToDisplay];
      newWeatherToDisplay.push(
        {
          temp: weatherData.data.main.temp,
          city: weatherData.data.name,
          icon: weatherData.data.weather[0].icon,
          coord: weatherData.data.coord,
          id: uuidv4()
        }
      );
      setSavedSearchesToDisplay(newWeatherToDisplay);

    })
    
  }, [savedSearches]);

  // if (savedSearchesToDisplay.length > 3) {
  //   handleRemove(savedSearchesToDisplay[0].id);
  // }

  function handleRemove(id: number) {
    console.log(id)
    // const newList = savedSearchesToDisplay.filter((item: any) => item.id !== id);
    // console.log('newList', newList);
    
    // setSavedSearchesToDisplay(newList);
    }
  
  return {
    savedSearchesToDisplay,
    fn: {
      handleRemove
    }
  }
}