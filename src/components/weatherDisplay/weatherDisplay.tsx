interface IWeather {
  weatherData: {
    temperature?: number,
    name?: string,
    descr?: string,
    feels_like?: number,
    icon?: string
  }

}

const WeatherDisplay = ( {weatherData}: IWeather ) => {

  return (
    <>
    <h4>{weatherData.name}</h4>
    <p>{weatherData.temperature}º</p>
    <p>{weatherData.descr}</p>
    <p>Feels like {weatherData.feels_like}º</p>
    <p><img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={weatherData.descr} /></p>
    </>
  )
}

export default WeatherDisplay