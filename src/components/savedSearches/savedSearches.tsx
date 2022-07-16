import { useSearchesController } from "../savedSearches/savedSearchesController"

import styles from "../savedSearches/savedSearches.module.scss"

const SavedSearches = ({setCoord}: any) => {
  const { savedSearchesToDisplay } = useSearchesController();

  return (
    <>
      {savedSearchesToDisplay &&

        savedSearchesToDisplay.map((search: any, i:number) => {
          return (
          <div onClick={() => setCoord(search.coord.lat, search.coord.lon, false)} className={`${styles['savedSearchWrapper']}`} key={i}>
            <div className={`${styles['data']}`}>
              <div>{search.city}</div>
              <div>{search.temp}</div>
            </div>
            <div className={`${styles['icon']}`}>
              <img src={`https://openweathermap.org/img/wn/${search.icon}.png`} alt={search.temp} />
            </div>
          </div>
          )
        })}
    </>
  )
}

export default SavedSearches;