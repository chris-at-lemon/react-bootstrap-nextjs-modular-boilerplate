import type { NextPage } from 'next'
import { useState } from 'react';

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// const GooglePlacesAutocomplete = dynamic(() => import('react-google-places-autocomplete'), {
//   suspense: true,
// })

import axios from 'axios'

const Home: NextPage = () => {
  const { fn } = HomeController();

  const customStyles = {
      input: (provided) => ({
        ...provided,
        color: 'red',
      }),
      option: (provided) => ({
        ...provided,
        color: 'blue',
      }),
      singleValue: (provided) => ({
        ...provided,
        color: 'blue',
      }),
  }

  const [searchValue, setSearchValue] = useState();
  console.log(searchValue)

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
        <h2>Lightning fast, highly optimised pages Google will love</h2>
        <button onClick={fn.getWeather}>get weather</button>
        <button onClick={fn.getCity}>get city</button>
        <button onClick={fn.getCoordinates}>get coord</button>
        <div  className={`${styles['searchContainer']}`}>
          <GooglePlacesAutocomplete
            apiKey='AIzaSyASj51Y1vhC74Cr-wPqKSHLg8DW8HMTITI'
            selectProps={{
              styles: customStyles,
              value: searchValue,
              onChange: setSearchValue,
              defaultInputValue: searchValue
            }}
            />
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
