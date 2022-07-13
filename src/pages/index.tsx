import type { NextPage } from 'next'

import LoginCard from '../components/login/loginCard'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

const Home: NextPage = () => {
  const { fn, showLoginCard } = HomeController();

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className={`${styles['landingHero']}`}>
        <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
        <h2>Lightning fast, highly optimised pages Google will love</h2>
        <div>
          <div className={`${styles['loginBtnWrapper']}`}>
            {!showLoginCard &&
              <button className={`${styles['btn']} ${styles['btn-primary']}`} onClick={fn.toggleLoginCard}>Login</button>
            }
          </div>
          <div className={`${styles['loginCardWrapper']}`}>
            {showLoginCard &&
              <LoginCard />
            }
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
