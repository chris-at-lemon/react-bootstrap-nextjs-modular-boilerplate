import Image from "next/image";

import { useSearchesController } from "../savedSearches/savedSearchesController";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "../savedSearches/allSavedSearches.module.scss";

const AllSavedSearches = ({ setCoord }: any) => {
  const { allSavedSearchesToDisplay, fn } = useSearchesController();

  return (
    <>
      <button onClick={fn.handleRemoveAll} className={`${styles["btn"]} ${styles["btn-danger"]} ${styles["btn-delete"]} ${styles["btn-sm"]} ${styles["d-block"]} ${styles["w-100"]}`} aria-label="remove all items">
        Delete search history
      </button>
      {allSavedSearchesToDisplay &&
        allSavedSearchesToDisplay.map((search: any, i: number) => {
          return (
            <div className={`${styles["savedSearchWrapper"]}`} key={search.id}>
              <div onClick={() => setCoord(search.coord.lat, search.coord.lon, false)} className={`${styles["data"]}`}>
                <div className={`${styles["city"]}`}>{search.name}</div>
                <div className={`${styles["searchDate"]}`}>{search.date}</div>
                <div>{search.temperature?.toString().split(".")[0]}º</div>
              </div>
              <div className={`${styles["refreshSearch"]}`}>
                <div onClick={() => setCoord(search.coord.lat, search.coord.lon, true)}>
                  <FontAwesomeIcon className={`${styles["refreshIcon"]}`} icon={faRefresh} />
                </div>
              </div>
              <div className={`${styles["icon"]}`}>
                <Image src={`https://openweathermap.org/img/wn/${search.icon}.png`} alt={search.descr} width={50} height={50} />
              </div>
              <button className={`${styles["btn"]} ${styles["btn-dismiss"]}`} onClick={() => fn.handleRemove(search.id)} aria-label="remove from list">
                <FontAwesomeIcon className={`${styles["closeIcon"]}`} icon={faTimes} />
              </button>
            </div>
          );
        })}
    </>
  );
};

export default AllSavedSearches;
