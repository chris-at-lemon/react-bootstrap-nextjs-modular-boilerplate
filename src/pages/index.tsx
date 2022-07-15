import type { NextPage } from 'next'
import { useState } from 'react';

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import PlacesAutocomplete from '../components/inputs/search';

const Home: NextPage = () => {
  const { currentCoord, currentCity, currentWeather, fn } = HomeController();

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>Get weather now</h1>
        {/* <button onClick={fn.getWeather}>get weather</button>
        <button onClick={fn.getCity}>get city</button>
        <button onClick={fn.getCoordinates}>get coord</button>  */}
        <PlacesAutocomplete setCoord={fn.setNewCoord} />
        <h4>{currentCity.city} {currentCity.countryCode}</h4>
        <p>{currentWeather.temperature}º</p>
        <p>{currentWeather.descr}</p>
        <p>Feels like {currentWeather.feels_like}º</p>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
