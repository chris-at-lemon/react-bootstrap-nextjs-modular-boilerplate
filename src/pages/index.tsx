import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/pages/home/home.module.scss'

const Home: NextPage = () => {
  return (
      <div className={`${styles['landingHero']}`}>
          <h1>React Bootstrap NextJS Modular SCSS Boilerplate</h1>
          <h2>Lightning fast, highly optimised pages Google will love</h2>
      </div>
  )
}

export default Home
