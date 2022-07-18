import { useState } from "react";

export const useSettingsController = () => {
  // Side drawer
  const [sideDrawerIsActive, setSideDrawerIsActive] = useState<boolean>(false);
  const toggleSideDrawer = () => {
    setSideDrawerIsActive(!sideDrawerIsActive);
  };
  const [searchHistoryIsActive, setsearchHistoryIsActive] = useState<boolean>(false);
  const togglesearchHistory = () => {
    setsearchHistoryIsActive(!searchHistoryIsActive);
  };

  return {
    sideDrawerIsActive,
    searchHistoryIsActive,
    fn: {
      toggleSideDrawer,
      togglesearchHistory,
    },
  };
};
