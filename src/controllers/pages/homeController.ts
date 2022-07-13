import { useState } from 'react'
import { httpGet } from '../../modules/http'

export const HomeController = () => {
    const config = {
        params: {
            q: 'London',
            lat: '',
            lon: '0',
            id: '2172797',
            lang: 'null',
            units: 'metric',
          },
          headers: {
            'X-RapidAPI-Key': 'f7c2fcdb11msh1942c6e2a678652p1915e5jsnb460a722d3da',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
          }
    }
    
    const getWeather = async () => {
        const weatherData = await httpGet('https://community-open-weather-map.p.rapidapi.com/weather', config)
    }

    const getCity = async () => {
        const cityName = await httpGet('https://maps.googleapis.com/maps/api/geocode/json?latlng=51.5085,-0.1257&key=AIzaSyASj51Y1vhC74Cr-wPqKSHLg8DW8HMTITI')
    }
    
    const getCoordinates = async () => {
        const coord = await httpGet('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=47f409a9010a803408dc5f5242fd4b2d')
    }

    return {
        fn: {
            getWeather,
            getCity,
            getCoordinates
        }
    }
}
