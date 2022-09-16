import React, { useEffect } from "react";
import "./Favorites.css";
import sunny from "../Assets/wi-day-sunny.svg";
import cloudy from "../Assets/wi-cloud.svg";
const LocationsList = []; //List of Objects of Locations added to favorite;
const Keys = [];
var updated = 0;
var currKey;
export function addToFavorites(
  Key,
  locationName,
  locationMetrics,
  weatherDescription
) {
  const newLocation = {
    locationKey: Key,
    name: locationName,
    temperature: locationMetrics,
    weatherDesc: weatherDescription,
  };
  currKey = Key;
  if (!Keys.includes(Key)) {
    LocationsList.push(newLocation);
    Keys.push(Key);
  }
}
export function inFavorites(key) {
  if (Keys.includes(key)) {
    return true;
  }
  return false;
}
export function updater() {
  updated = currKey;
}
export const Favorites = ({ isClicked }) => {
  const [pState, setNewState] = React.useState(LocationsList);

  useEffect(() => {
    setNewState(LocationsList);
    //isClicked(updated);
  }, [pState]);

  const clickHandler = (e) => {
    const key = e.target.getAttribute("item-key");
    console.log(key);
    isClicked(key);
  };
  return (
    <div className="fav-container">
      <h1 id="favTitle">Favorites</h1>
      <div className="fav-wrapper">
        {LocationsList.length > 0 ? (
          <ul className="fav-items">
            {pState.map((local) => {
              return (
                <li key={local.locationKey}>
                  <button
                    id="list-click"
                    onClick={clickHandler}
                    item-key={local.name}
                  >
                    <h3 id="city-name">{local.name}</h3>
                    {local.temperature > 28 ? (
                      <img className="temperature-icons" src={sunny}></img>
                    ) : (
                      <img className="temperature-icons" src={cloudy}></img>
                    )}
                    <h4 class="city-temp">
                      {local.temperature}
                      <sup>°C</sup>
                    </h4>
                    <figure>
                      <figcaption>{local.weatherDesc}</figcaption>
                    </figure>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1 className="fav-empty">No Favorite Locations.</h1>
        )}
      </div>
    </div>
  );
};
/* */
