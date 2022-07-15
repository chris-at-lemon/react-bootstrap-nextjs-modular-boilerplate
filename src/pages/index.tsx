import type { NextPage } from 'next'
import { useState } from 'react';

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import PlacesAutocomplete from '../components/inputs/search';
import WeatherDisplay from '../components/weatherDisplay/weatherDisplay';

const Home: NextPage = () => {
  const { currentCoord, currentCity, currentWeather, fn } = HomeController();

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>Get weather now</h1>
        <PlacesAutocomplete setCoord={fn.setNewCoord} />
        {Object.keys(currentWeather).length !== 0 &&
          <WeatherDisplay weatherData={currentWeather} />
        }
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
