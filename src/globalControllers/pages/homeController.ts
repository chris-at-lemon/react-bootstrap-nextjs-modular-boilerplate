import { useEffect, useState } from "react";
import { getCity, getWeather } from "../../modules/location";
import { useRecoilState } from "recoil";
import { searchHistory } from "../../globalState/atoms/savedSearches";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import { IWeatherObject, ICoords, ICity, ISetNewCoord, IFetchWheater } from "../../globalInterfaces/pages/home";

export const HomeController = () => {
  // Source of truth: Coordinates decide location
  // Coordinates also decide weather props
  const [currentCoord, setCurrentCoord] = useState<ICoords>({
    lat: 0,
    lon: 0,
  });
  //console.log(currentCoord)

  // City name always a result of coordinates
  const [currentCity, setCurrentCity] = useState<ICity>({});

  // Global store of previous searches,source of truth for all search istory (current state and persisted state)
  const [savedSearches, setSavedSearches] = useRecoilState(searchHistory);
  //console.log('savedSearches', savedSearches);

  // Weather always a result of coordinates
  const [currentWeather, setCurrentWeather] = useState<IWeatherObject>();

  //console.log(currentWeather);

  // permissions and gheolocation
  const [currentPermission, setCurrentPermission] = useState<string>("prompt");
  //console.log("currentPermission", currentPermission);

  // Check for permissions, if granted run geoLocation, if not offer alternative.
  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then(function (result) {
      if (result.state === "granted") {
        //console.log("granted permission");
        getCurrentPosition();
        setCurrentPermission("granted");
      }
      if (result.state === "prompt") {
        //console.log("prompt for permission");
        setCurrentPermission("prompt");
      }
      if (result.state === "denied") {
        //console.log("permission denied");
        setCurrentPermission("denied");
      }
    });
  }, [currentPermission]);

  // Get current position
  const getCurrentPosition = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);

  // set new coordinates, city and weather
  function onSuccess(position: any) {
    const { latitude, longitude } = position.coords;

    // set new city
    let newCoordinates: ICoords = { ...currentCoord };
    newCoordinates = {
      lat: latitude,
      lon: longitude,
    };

    setCurrentCoord(newCoordinates);
    fetchCity(newCoordinates.lat, newCoordinates.lon);
    fetchWeather(newCoordinates.lat, newCoordinates.lon);
    setCurrentPermission("granted");
  }
  // Catch error / not really needed as permissions were sniffed above
  function onError() {
    //console.log("not allowed");
    setCurrentPermission("denied");
  }

  // set new city
  const fetchCity = async (lat: number, lon: number) => {
    const newCityData: any = await getCity(lat, lon);
    //console.log(newCityData);

    let newCity = { ...currentCity };

    if (newCityData.status === 200) {
      //console.log(newCityData.data);
      newCity = {
        city: newCityData.data[0].name,
        countryCode: newCityData.data[0].country,
      };
      setCurrentCity(newCity);
    } else {
      console.log("error");
    }
  };

  // set new weather
  const fetchWeather: IFetchWheater = async (lat, lon, updateSearchHistory) => {
    const weatherData: any = await getWeather(lat, lon);
    //console.log(weatherData);
    // Use Google API for better accuracy in city names
    const cityData: any = await getCity(lat, lon);
    // Get date and time
    const newDate = new Date();
    const searchDate = dayjs(newDate).format("DD/MM/YYYY, hh:mm A");

    let newWeather = { ...currentWeather };

    newWeather = {
      temperature: weatherData.data.main.temp,
      name: cityData.data[0].name,
      descr: weatherData.data.weather[0].description.charAt(0).toUpperCase() + weatherData.data.weather[0].description.slice(1),
      feelsLike: weatherData.data.main.feels_like,
      icon: weatherData.data.weather[0].icon,
      mainCondition: weatherData.data.weather[0].main,
      id: uuidv4(),
      coord: { lat: weatherData.data.coord.lat, lon: weatherData.data.coord.lon },
      date: searchDate,
    };

    setCurrentWeather(newWeather);

    if (updateSearchHistory) {
      let currentSavedSearches = [...savedSearches];
      currentSavedSearches.push(newWeather);
      setSavedSearches(currentSavedSearches);
    }
  };

  // set new city and coordinates from dropdown
  const setNewCoord: ISetNewCoord = (lat, lon, updateSearchHistory) => {
    // Set the new reference coordinates
    let newCoord = { ...currentCoord };
    newCoord = {
      lat: lat,
      lon: lon,
    };
    setCurrentCoord(newCoord);

    // Use new coordinates for:
    //geit city and weather
    fetchCity(lat, lon);
    fetchWeather(lat, lon, updateSearchHistory);
  };

  return {
    currentCoord,
    currentCity,
    currentWeather,
    currentPermission,
    fn: {
      setNewCoord,
      getCurrentPosition,
    },
  };
};
