import { useState } from "react";

import AllSavedSearches from "../../components/savedSearches/allSavedSearches";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import styles from "../settings/settings.module.scss";

import { useSettingsController } from "./settingsController";

const Settings = ({ setNewCoord }: any) => {
  const { sideDrawerIsActive, searchHistoryIsActive, fn } = useSettingsController();

  return (
    <div className={`${styles["settings"]}`}>
      <button className={`${styles["btn-settings"]}`} data-test="settings-button">
        <FontAwesomeIcon onClick={fn.toggleSideDrawer} className={`${styles["settingsIcon"]}`} icon={faCog} />
      </button>
      <div className={`${styles["sideDrawer"]}  ${sideDrawerIsActive ? styles["d-block"] : styles["d-none"]} ${styles["slide-left"]}`}>
        <button onClick={fn.togglesearchHistory} className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["btn-sm"]} ${styles["btn-viewHistory"]} ${styles["d-block"]} ${styles["w-100"]}`} aria-label="toggle history">
          {searchHistoryIsActive ? "Hide search history" : "View full search history"}
        </button>
        <div className={`${styles["allSearches"]} ${searchHistoryIsActive ? styles["d-block"] : styles["d-none"]}`}>
          <AllSavedSearches setCoord={setNewCoord} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
