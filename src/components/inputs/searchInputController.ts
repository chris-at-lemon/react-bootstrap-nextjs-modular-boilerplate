import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export const useSearchInputController = (setCoord: any) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Google Maps Places API Options */
      types: ['(cities)']
    },
    debounce: 300,
    cache: 86400
  });

  
  const ref = useOnclickOutside(() => {
    // Helper for clicking outside of focussed element
    clearSuggestions();
  });
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set input value
    setValue(e.target.value);
  };
  
  const handleSelect = ({ description }: any) => () => {
      // Second argument (false) to prevent additional API call
      setValue(description, false);
      clearSuggestions();
  
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        // Callback that sets coordinates for main fetchWeather function
        setCoord(lat, lng)
      });
    };
  
    return {
      ready,
      value,
      status,
      data,
      fn: {
        ref,
        handleInput,
        handleSelect
      }
    }
}