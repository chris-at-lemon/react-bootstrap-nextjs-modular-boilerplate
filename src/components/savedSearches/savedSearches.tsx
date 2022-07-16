import { useSearchesController } from "../savedSearches/savedSearchesController"

import styles from "../savedSearches/savedSearches.module.scss"

const SavedSearches = ({ setCoord }: any) => {
  const { savedSearchesToDisplay, fn } = useSearchesController();

  return (
    <>
      {savedSearchesToDisplay &&

        savedSearchesToDisplay.map((search: any, i: number) => {
            return (
              <div className={`${styles['savedSearchWrapper']}`} key={search.id}>
                <div onClick={() => setCoord(search.coord.lat, search.coord.lon, false)} className={`${styles['data']}`}>
                  <div>{search.city}</div>
                  <div>{search.temp}</div>
                </div>
                <div className={`${styles['icon']}`}>
                  <img src={`https://openweathermap.org/img/wn/${search.icon}.png`} alt={search.temp} />
                </div>
                <button className={`${styles['btn']} ${styles['btn-dismiss']}`} onClick={() => fn.handleRemove(search.id)}>x</button>
              </div>
            )
        })}
    </>
  )
}

export default SavedSearches;