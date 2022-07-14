import type { NextPage } from 'next'
import { useState } from 'react';

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import PlacesAutocomplete from '../components/inputs/search';

const Home: NextPage = () => {
  const { fn } = HomeController();



  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>Get weather</h1>
        {/* <button onClick={fn.getWeather}>get weather</button>
        <button onClick={fn.getCity}>get city</button>
        <button onClick={fn.getCoordinates}>get coord</button> */}
        <PlacesAutocomplete />
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
