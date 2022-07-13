import type { NextPage } from 'next'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import axios from 'axios'

const Home: NextPage = () => {
  const { fn } = HomeController();

  // const options = {
  //   params: {
  //     q: 'London,uk',
  //     lat: '0',
  //     lon: '0',
  //     callback: 'test',
  //     id: '2172797',
  //     lang: 'null',
  //     units: 'imperial',
  //     mode: 'xml'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'f7c2fcdb11msh1942c6e2a678652p1915e5jsnb460a722d3da',
  //     'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
  //   }
  // };
  
  // axios.get('https://community-open-weather-map.p.rapidapi.com/weather', options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

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
       
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
