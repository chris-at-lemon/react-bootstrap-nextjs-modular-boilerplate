import type { NextPage } from "next";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";

import Div100vh from "react-div-100vh";

import { HomeController } from "../globalControllers/pages/homeController";
import styles from "../styles/pages/home/home.module.scss";

import PlacesAutocomplete from "../components/inputs/search";
import WeatherDisplay from "../components/weatherDisplay/weatherDisplay";
import SavedSearches from "../components/savedSearches/savedSearches";
import Settings from "../components/settings/settings";

const Home: NextPage = () => {
  const { currentWeather, currentPermission, fn } = HomeController();
  //console.log(currentWeather?.mainCondition);

  return (
    <Div100vh>
      <div className={`${styles["landingHero"]} ${styles[`${currentWeather?.mainCondition}`]} ${currentWeather?.icon?.slice(-1) === "n" && styles["night"]}`}>
        <div className={`${styles["appHeader"]}`}>
          <div className={`${styles["brandContainer"]}`}>
            <div className={`${styles["brand"]}`}>
              <div className={`${styles["logoIcon"]}`}>
                <FontAwesomeIcon className={`${styles["brandIcon"]}`} icon={faRainbow} />
              </div>
              <div>Rainbow Weather</div>
            </div>
          </div>
          <div className={`${styles["searchContainer"]}`}>
            <PlacesAutocomplete setCoord={fn.setNewCoord} />
          </div>
          <div className={`${styles["settingsContainer"]}`}>
            <Settings setNewCoord={fn.setNewCoord} />
          </div>
        </div>
        <div className={`${styles["appWeather"]}`}>
          {(currentPermission === "prompt" && !currentWeather) || (currentPermission === "denied" && !currentWeather) ? (
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className={`${styles["alert"]} ${styles["alert-primary"]}`}>If you allow us to use your current location we can find the weather near you right now!</div>
                  <button onClick={fn.getCurrentPosition} className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["btn-findWeather"]}`} aria-label="find weather">
                    Find weather near me
                  </button>
                  <p>Otherwise just type your desired location into the input above</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {currentWeather && <WeatherDisplay weatherData={currentWeather} />}
        </div>
        <div className={`${styles["appFooter"]}`}>
          <SavedSearches setCoord={fn.setNewCoord} />
        </div>
      </div>
    </Div100vh>
  );
};

export default Home;
