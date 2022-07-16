import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { useSearchInputController } from "./searchInputController";
import styles from '../inputs/search.module.scss'

const PlacesAutocomplete = ({setCoord}: any) => {
  const { ready, value, status, data, fn } = useSearchInputController(setCoord);

  return (
    <div ref={fn.ref}>
      <div className={`${styles['searchContainer']}`}>
        <input
          className={`${styles['form-control']}`}
          value={value}
          onChange={fn.handleInput}
          placeholder="Enter a city"
          aria-label="Search city"
        />
        <FontAwesomeIcon className={`${styles['searchIcon']}`} icon={faMagnifyingGlass} />
      </div>
      {status === "OK" && 
        <ul className={`${styles['suggestions']}`}>
          {data.map((suggestion) => {
            return (
              <li  key={suggestion.place_id} onClick={fn.handleSelect(suggestion)}>{suggestion.structured_formatting.main_text} {suggestion.structured_formatting.secondary_text}</li>
              )
          })}
        </ul>
      }
    </div>
  );
};

export default PlacesAutocomplete;