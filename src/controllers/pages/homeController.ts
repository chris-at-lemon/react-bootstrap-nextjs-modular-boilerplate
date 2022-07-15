import { type } from 'os';
import { useEffect, useState } from 'react'
import { getCity, getWeather } from '../../modules/location';

export const HomeController = () => {
    // Source of truth: Coordinates decide location
    // Coordinates also decide weather props
    const [currentCoord, setCurrentCoord] = useState({
        lat: 37.3911379,
        lon: -5.9938443
    });
    //console.log(currentCoord)
    
    // City name always a result of coordinates
    const [currentCity, setCurrentCity] = useState({
        city: 'Berlin',
        countryCode: 'de'
    })

    type WeatherObject = {
        temperature?: number,
        name?: string,
        descr?: string,
        feels_like?: number,
        icon?: string
      };

    // Weather always a result of coordinates
    const [currentWeather, setCurrentWeather] = useState<WeatherObject>({})
    //console.log(currentWeather);
    

    // Run once when app loads to set coordinates and city if geoLocation available
    useEffect(() => {
        const getCurrentPosition = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);
        getCurrentPosition();
        
        // set new coordinates, city and weather
        function onSuccess(position: any) {
           const {
              latitude,
              longitude
          } = position.coords;
          
          // set new city
          let newCoordinates = { ...currentCoord };
          newCoordinates = {
            lat: latitude,
            lon: longitude
          }

          setCurrentCoord(newCoordinates);
          fetchCity(newCoordinates.lat, newCoordinates.lon);
          fetchWeather(newCoordinates.lat, newCoordinates.lon)
      }
      // Catch error
      function onError() {
        console.log('not allowed');
      }
    }, [])

    // set new city
    const fetchCity = async (lat: number, lon: number) => {
        const newCityData: any = await getCity(lat, lon);
        let newCity = { ...currentCity }

        if (newCityData.status === 200) {
            //console.log(newCityData.data);
            newCity = {
                city: newCityData.data[0].name,
                countryCode: newCityData.data[0].country
            }
            setCurrentCity(newCity)
        } else {
            console.log('error');
        }
    }

    // set new weather
    const fetchWeather = async (lat: number, lon: number) => {
        const weatherData: any = await getWeather(lat, lon);
        console.log(weatherData);
        
        let newWeather = { ...currentWeather }
        
        newWeather = {
            temperature: weatherData.data.main.temp,
            name: weatherData.data.name,
            descr: weatherData.data.weather[0].description,
            feels_like: weatherData.data.main.feels_like,
            icon: weatherData.data.weather[0].icon
        }

        setCurrentWeather(newWeather);
    }

    // set new city and coordinates from dropdown
    const setNewCoord = (lat: number, lon: number) => {
        let newCoord = { ...currentCoord }
        newCoord = {
            lat: lat,
            lon: lon
        }
        setCurrentCoord(newCoord);
        fetchCity(lat, lon);
        fetchWeather(lat, lon);
    }

    return {
        currentCoord,
        currentCity,
        currentWeather,
        fn: {
            setNewCoord
        }
    }
}
