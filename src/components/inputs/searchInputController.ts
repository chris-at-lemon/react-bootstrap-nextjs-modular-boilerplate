import { useRef, useEffect } from "react";

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import { ISetCoord } from "../inputs/searchInterface";

export const useSearchInputController = (setCoord: ISetCoord) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Google Maps Places API Options */
      types: ["(cities)"],
    },
    debounce: 300,
    cache: 86400,
  });

  const ref = useOnclickOutside(() => {
    // Helper for clicking outside of focussed element
    clearSuggestions();
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set input value
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // Second argument (false) to prevent additional API call
      setValue(description, false);
      clearSuggestions();
      //Reset input
      setValue("");

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        // Callback that sets coordinates for main fetchWeather function
        setCoord(lat, lng, true);
      });
    };

  const searchInput: any = useRef(null);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  return {
    ready,
    value,
    status,
    data,
    searchInput,
    fn: {
      ref,
      handleInput,
      handleSelect,
    },
  };
};
