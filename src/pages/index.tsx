import type { NextPage } from 'next'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Div100vh from 'react-div-100vh'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import PlacesAutocomplete from '../components/inputs/search';
import WeatherDisplay from '../components/weatherDisplay/weatherDisplay';
import SavedSearches from '../components/savedSearches/savedSearches';

const Home: NextPage = () => {
  const { currentWeather, currentPermission, fn } = HomeController();
  console.log(currentWeather?.mainCondition);


  return (
    <Div100vh>
      <div className={`${styles['landingHero']} ${styles[`${currentWeather?.mainCondition}`]}`}>
        <div className={`${styles['appHeader']}`}>
          <h1 className={`${styles['h1']}`}>El tiempo para Encarni  <FontAwesomeIcon className={`${styles['searchIcon']}`} icon={faHeart} /></h1>
          <PlacesAutocomplete setCoord={fn.setNewCoord} />
        </div>
        <div className={`${styles['appWeather']}`}>
          {currentPermission === 'prompt' && !currentWeather || currentPermission === 'denied' && currentWeather ?
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className={`${styles['alert']} ${styles['alert-primary']}`}>
                    If you allow us to use your current location we can find the weather near you right now!
                  </div>
                  <p>Otherwise just type your desired location into the input above</p>
                </div>
              </div>
            </div>
            :
            ''
          }
          {currentWeather &&
           <WeatherDisplay weatherData={currentWeather} />
          }
        </div>
        <div className={`${styles['appFooter']}`}>
          <SavedSearches setCoord={fn.setNewCoord} />
        </div>
      </div>
    </Div100vh>
  )
}

export default Home
