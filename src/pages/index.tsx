import type { NextPage } from 'next'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

const Home: NextPage = () => {
  const {  } = HomeController();

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
        <h2>Lightning fast, highly optimised pages Google will love</h2>
        
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
