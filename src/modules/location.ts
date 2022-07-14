import { httpGet } from "./http"
const openWeatherApiKey= process.env.openWeatherApiKey;
const rapidApiKey= process.env.rapidApiKey;
const googleMapsApiKey= process.env.googleMapsApiKey;

export const getCityGoogle = async (lat: number, lon: number) => {
  const cityData = await httpGet(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleMapsApiKey}`);

  return cityData;
}

export const getCity = async (lat: number, lon: number) => {
  const cityData = await httpGet(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`);

  return cityData;
}

export const getCoordinates = async (city: string) => {
  const coord = await httpGet(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${openWeatherApiKey}`);

  return coord;
}

export const getWeather =async (lat: number, lon: number) => {
  const weather = await httpGet(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`);

  return weather;
}