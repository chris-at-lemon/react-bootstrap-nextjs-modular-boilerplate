import { useEffect, useState } from "react";
import { getCity, getWeather } from "../../modules/location";
import { useRecoilState } from "recoil";
import { searchHistory } from "../../globalState/atoms/savedSearches";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export const HomeController = () => {
  // Source of truth: Coordinates decide location
  // Coordinates also decide weather props
  const [currentCoord, setCurrentCoord] = useState({
    lat: 37.3911379,
    lon: -5.9938443,
  });
  //console.log(currentCoord)

  // City name always a result of coordinates
  const [currentCity, setCurrentCity] = useState({
    city: "Berlin",
    countryCode: "de",
  });

  // Global store of previous searches,source of truth for all search istory (current state and persisted state)
  const [savedSearches, setSavedSearches] = useRecoilState(searchHistory);
  //console.log('savedSearches', savedSearches);

  interface WeatherObject {
    temperature?: number;
    name?: string;
    descr?: string;
    feelsLike?: number;
    icon?: string;
    mainCondition?: string;
    id?: string;
    coord?: {};
    date?: any;
  }

  // Weather always a result of coordinates
  const [currentWeather, setCurrentWeather] = useState<WeatherObject>();
  // {
  // for weather background testing
  // temperature: 33,
  // name: 'Berlin',
  // descr: 'feels great',
  // feels_like: 32,
  // icon: '01d',
  // mainCondition: 'Thunderstorm'
  // }
  //console.log(currentWeather);

  // Weather forecast
  const [forecast, setForecast] = useState();

  // permissions and gheolocation
  const [currentPermission, setCurrentPermission] = useState<string>("prompt");
  console.log("currentPermission", currentPermission);

  // Run once when app loads to set coordinates and city if geoLocation available
  useEffect(() => {
    const getCurrentPosition = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);
    getCurrentPosition();

    // set new coordinates, city and weather
    function onSuccess(position: any) {
      const { latitude, longitude } = position.coords;

      // set new city
      let newCoordinates = { ...currentCoord };
      newCoordinates = {
        lat: latitude,
        lon: longitude,
      };

      setCurrentCoord(newCoordinates);
      fetchCity(newCoordinates.lat, newCoordinates.lon);
      fetchWeather(newCoordinates.lat, newCoordinates.lon);
      setCurrentPermission("granted");
    }
    // Catch error
    function onError(error: any) {
      console.log("error:", error);
      setCurrentPermission("denied");
    }
  }, []);

  // set new city
  const fetchCity = async (lat: number, lon: number) => {
    const newCityData: any = await getCity(lat, lon);
    console.log(newCityData);

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
  const fetchWeather = async (lat: number, lon: number, updateSearchHistory?: boolean) => {
    const weatherData: any = await getWeather(lat, lon);
    console.log(weatherData);
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
  const setNewCoord = (lat: number, lon: number, updateSearchHistory?: boolean) => {
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

  // Side drawer
  const [sideDrawerIsActive, setSideDrawerIsActive] = useState<boolean>(false);
  const toggleSideDrawer = () => {
    setSideDrawerIsActive(!sideDrawerIsActive);
  };
  const [searchHistoryIsActive, setsearchHistoryIsActive] = useState<boolean>(false);
  const togglesearchHistory = () => {
    setsearchHistoryIsActive(!searchHistoryIsActive);
  };

  return {
    currentCoord,
    currentCity,
    currentWeather,
    currentPermission,
    sideDrawerIsActive,
    searchHistoryIsActive,
    fn: {
      setNewCoord,
      toggleSideDrawer,
      togglesearchHistory,
    },
  };
};
