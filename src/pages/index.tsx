import type { NextPage } from 'next'
import { loginUser } from '../modules/auth'

import styles from '../styles/pages/home/home.module.scss'

const Home: NextPage = () => {

  return (
    <>
      <div className={`${styles['landingHero']}`}>
          <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
          <h2>Lightning fast, highly optimised pages Google will love</h2>
          <div>
        <button onClick={() => loginUser({username: 'userChris', password: 'test'})}>Login</button>
      </div>
      </div>
    </>
  )
}

export default Home
