import { useEffect, useState } from "react";

import { useRecoilState } from 'recoil';
import { searchHistory } from '../../globalState/atoms/savedSearches';


export const useSearchesController = () => {
  const [savedSearches, setSavedSearches] = useRecoilState(searchHistory);
  //console.log('savedSearches', savedSearches)
  const [allSavedSearches, setAllSavedSearches] = useState();
  const [savedSearchesToDisplay, setSavedSearchesToDisplay] = useState<any[]>([]);
  
  // Set initial saved searches to last 3 from persisted history
  // Update when global state changes
  useEffect(() => {
    const history: any[] = [...savedSearches];
    const slicedReverseHistory = history.reverse().slice(0, 3);
    const allReverseHistory = history.reverse();
    
    setSavedSearchesToDisplay(slicedReverseHistory);
  }, [savedSearches])

  //console.log('savedSearchesToDisplay', savedSearchesToDisplay)

  // Remove search history items
  function handleRemove(id: number) {
    const newList = savedSearches.filter((item: any) => item.id !== id);
    console.log('newList', newList);
    setSavedSearches(newList);
  }
  
  return {
    savedSearchesToDisplay,
    fn: {
      handleRemove
    }
  }
}