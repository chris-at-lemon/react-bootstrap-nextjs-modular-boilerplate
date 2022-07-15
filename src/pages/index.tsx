import type { NextPage } from 'next'
import { useState } from 'react';

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import PlacesAutocomplete from '../components/inputs/search';
import WeatherDisplay from '../components/weatherDisplay/weatherDisplay';

const Home: NextPage = () => {
  const { currentCoord, currentCity, currentWeather, fn } = HomeController();
  console.log(currentWeather?.mainCondition);
  

  return (
    <>
      <div className={`${styles['landingHero']} ${styles[`${currentWeather?.mainCondition}`]}`}>
        <div className={`${styles['appHeader']}`}>
          <PlacesAutocomplete setCoord={fn.setNewCoord} />
        </div>
        <div className={`${styles['appWeather']}`}>
        {Object.keys(currentWeather).length !== 0 &&
          <WeatherDisplay weatherData={currentWeather} />
        }
        </div>
        <div className={`${styles['appFooter']}`}></div>
      </div>

    </>
  )
}

export default Home
