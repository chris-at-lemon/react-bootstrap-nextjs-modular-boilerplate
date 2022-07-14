import { useEffect, useState } from 'react'
import { getCity } from '../../modules/location';

export const HomeController = () => {
    // Source of truth: Coordinates decide location
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

    // Run once when app loads to set coordinates and city if geoLocation available
    useEffect(() => {
        const getCurrentPosition = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);
        getCurrentPosition();
        
        // set new coordinates
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
      }
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
                countryCode: newCityData.data[0].country.toLowerCase()
            }
            setCurrentCity(newCity)
        } else {
            console.log('error');
        }
    }

    // set new city and coordinates from dropdown
    const setNewCoord = (lat: number, lon: number) => {
        setCurrentCoord({lat: lat, lon: lon})
        fetchCity(lat, lon)
    }

    return {
        currentCoord,
        currentCity,
        fn: {
            setNewCoord
        }
    }
}
