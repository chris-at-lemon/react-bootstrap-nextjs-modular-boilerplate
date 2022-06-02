import type { NextPage } from 'next'

import { homeController } from '../controllers/pages/homeController'

import styles from '../styles/pages/home/home.module.scss'

const Home: NextPage = () => {
  const { fn } = homeController();

  return (
    <>
      <div className={`${styles['landingHero']}`}>
          <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
          <h2>Lightning fast, highly optimised pages Google will love</h2>
          <div>
        <button onClick={fn.handleLogin}>Login</button>
      </div>
      </div>
    </>
  )
}

export default Home
