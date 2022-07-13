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


    return {
        fn: {
            getWeather,
            getCity
        }
    }
}
