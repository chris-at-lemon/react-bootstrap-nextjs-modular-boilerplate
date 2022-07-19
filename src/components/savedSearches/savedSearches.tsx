import Image from "next/image";

import { useSearchesController } from "../savedSearches/savedSearchesController";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faTimes, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import styles from "../savedSearches/savedSearches.module.scss";

const SavedSearches = ({ setCoord }: any) => {
  const { savedSearchesToDisplay, showTooltip, fn } = useSearchesController();

  return (
    <>
      {savedSearchesToDisplay &&
        savedSearchesToDisplay.map((search: any, i: number) => {
          return (
            <div className={`${styles["savedSearchWrapper"]}`} key={search.id}>
              <div onClick={() => setCoord(search.coord.lat, search.coord.lon, false)} className={`${styles["data"]}`}>
                <div className={`${styles["city"]}`}>
                  {search.name} &nbsp; <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
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

export default SavedSearches;
