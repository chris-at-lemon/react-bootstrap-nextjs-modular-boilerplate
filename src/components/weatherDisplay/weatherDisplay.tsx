interface IWeather {
  weatherData: {
    temperature?: number,
    name?: string,
    descr?: string,
    feels_like?: number,
    icon?: string
  }
}

import styles from '../weatherDisplay/weatherDisplay.module.scss'

const WeatherDisplay = ( {weatherData}: IWeather ) => {

  return (
    <>
    <h1 className={`${styles['weatherH1']}`}>{weatherData.name}</h1>
    <div className={`${styles['weatherIconWrapper']}`} style={{backgroundImage: `url(https://openweathermap.org/img/wn/${weatherData.icon}@4x.png)`}}>
      {/* <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`} alt={weatherData.descr} /> */}
      <div className={`${styles['temperature']}`}>
      {weatherData.temperature?.toString().split('.')[0]}º
      </div>
    </div>
    <div className={`${styles['description']}`}>
    <p>{weatherData.descr} and it feels like {weatherData.feels_like?.toString().split('.')[0]}º</p>
      
    </div>
    </>
  )
}

export default WeatherDisplay