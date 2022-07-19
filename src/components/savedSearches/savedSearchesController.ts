import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { searchHistory } from "../../globalState/atoms/savedSearches";

import { ISavedSearch } from "./savedSearchesInterface";

export const useSearchesController = () => {
  const [savedSearches, setSavedSearches] = useRecoilState(searchHistory);
  const [allSavedSearchesToDisplay, setAllSavedSearchesToDisplay] = useState<ISavedSearch[]>([]);
  const [savedSearchesToDisplay, setSavedSearchesToDisplay] = useState<ISavedSearch[]>([]);

  // Set initial saved searches to last 3 from persisted history
  // Update when global state changes
  useEffect(() => {
    const history: ISavedSearch[] = [...savedSearches];
    const slicedReverseHistory = history.reverse().slice(0, 3);

    setSavedSearchesToDisplay(slicedReverseHistory);
    setAllSavedSearchesToDisplay(history);
  }, [savedSearches]);

  // Remove search history item
  const handleRemove = (id: number) => {
    let newList = savedSearches.filter((item: any) => item.id !== id);
    setSavedSearches(newList);
  };

  // Remove all search history
  const handleRemoveAll = () => {
    let newList = [...savedSearches];
    newList.length = 0;
    setSavedSearches(newList);
  };

  const [showTooltip, setShowTooltip] = useState<string>("");
  const handletooltip = (id: string) => {
    setShowTooltip(id);
  };

  return {
    savedSearchesToDisplay,
    allSavedSearchesToDisplay,
    showTooltip,
    fn: {
      handleRemove,
      handleRemoveAll,
      handletooltip,
    },
  };
};
