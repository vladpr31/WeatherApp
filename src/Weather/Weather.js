import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import WeatherCard from "./WeatherCard";
import "./Weather.css";
import { searchInput } from "../WeatherAPI/WeatherConfig";
const Weather = ({ locationKey }) => {
  //States
  const [autoCompleteData, setAutoCompleteData] = React.useState([]); //state for all the autocompleteData.
  const [weatherData, setData] = React.useState(null); //state for getting Weather Data.
  const [local, setLocal] = React.useState(locationKey);
  const [childLocation, setChildLocation] = React.useState("");

  //Fetch AutoComplete Data.
  const makeAPICall = async (e) => {
    try {
      const response = await fetch(searchInput(e.target.value), {
        mode: "cors",
      });
      const data = await response.json();
      setData(data);
      var locationsArray = [];
      data.map((a) => locationsArray.push(a.LocalizedName));
      setAutoCompleteData(locationsArray);
    } catch (err) {
      console.log(err);
    }
  };

  //Click Handler to Generate Weather Card of Searched Location.
  const clickHandler = () => {
    weatherData.filter((item) => {
      if (item.LocalizedName == local) {
        setChildLocation(item);
      }
    });
  };
  useEffect(() => {
    async function fetchNewLocation() {
      try {
        const response = await fetch(searchInput(locationKey), {
          mode: "cors",
        });
        const data = await response.json();
        data.filter((item) => {
          if (item.LocalizedName == locationKey) {
            setChildLocation(item);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (locationKey) {
      fetchNewLocation();
    }
  }, [local]);

  return (
    <div className="weather-container">
      <div className="searchBar">
        <button id="searchIcon" onClick={clickHandler}>
          <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
        </button>
        <Autocomplete
          freeSolo
          onChange={(event, value) => setLocal(value)}
          id="searchInput"
          disableClearable
          onKeyDown={makeAPICall}
          style={{ width: "50%" }}
          options={autoCompleteData.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location.."
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>
      {childLocation != "" ? (
        <WeatherCard key={childLocation.Key} location={childLocation} />
      ) : (
        <WeatherCard key={locationKey} location={childLocation} />
      )}
    </div>
  );
};
export default Weather;
