import React, { useEffect } from "react";
import { addToFavorites, inFavorites, updater } from "../Favorites/Favorites";
import { currWeather, foreCast } from "../WeatherAPI/WeatherConfig";
import Loader from "../Loader/Loader";
import sunny from "../Assets/wi-day-sunny.svg";
import cloudy from "../Assets/wi-cloud.svg";

import "./WeatherCard.css";

const WeatherCard = ({ location }) => {
  //States
  const [weatherMetric, setMetric] = React.useState(null); //state for Temperature (Celsius, didnt used Farenheit).
  const [locationName, setLocationName] = React.useState("Tel Aviv"); //default location Tel Aviv, state for location name.
  const [weatherText, setWeatherText] = React.useState(null); //state for getting the weather description for fetched data.
  const [cardData, setCard] = React.useState([]); //state for the data fetched.
  const [loader, setLoader] = React.useState(true); //waits for fetch and then render 5 days forecast.
  const [local, setLocal] = React.useState("215854"); //state for local(Key of location) default is set to Tel Aviv Key.
  const [date, setDate] = React.useState(new Date().toDateString());
  const [favorite, setFavorite] = React.useState(false);
  //Fetch Current Weather
  const getCurrentWeather = async () => {
    try {
      const response = await fetch(currWeather(local), {
        mode: "cors",
      });
      const foreCastresponse = await fetch(foreCast(local, true), {
        mode: "cors",
      });
      const data = await response.json();
      const foreCastdata = await foreCastresponse.json();
      setMetric(data[0].Temperature.Metric.Value);
      setDate(new Date(data[0].LocalObservationDateTime).toDateString());
      setWeatherText(data[0].WeatherText);
      setCard(foreCastdata.DailyForecasts);
      if (cardData && data) {
        setLoader(false);
        if (location) {
          setLocationName(location.LocalizedName);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Add To Favorites Function.
  const favoriteHandler = () => {
    addToFavorites(local, locationName, weatherMetric, weatherText);
    updater();
    setFavorite(true);
  };

  //Update Page if Location is Changed.
  useEffect(() => {
    if (location) {
      if (location.LocalizedName != "Tel Aviv") {
        setLocal(location.Key);
      }
    }
    getCurrentWeather();
    if (inFavorites(local)) {
      setFavorite(true);
    }
  }, [local]);

  return (
    <>
      <div id="current" className="wrapper">
        <h1 className="location">
          {locationName},{location ? location.Country.LocalizedName : " Israel"}
        </h1>
        <h2 className="date">{date}</h2>
        <div className="weatherIcon">
          <div className="sunny">
            {weatherMetric > 28 ? (
              <img className="temperature-icons" src={sunny}></img>
            ) : (
              <img className="temperature-icons" src={cloudy}></img>
            )}
          </div>
        </div>
        <p className="temp">{weatherMetric}</p>
        <p className="conditions">{weatherText}</p>
        <div className="favorites-container">
          <button
            className="favBtn"
            onClick={favoriteHandler}
            disabled={favorite}
          >
            <span>Favorite</span>
          </button>
        </div>
      </div>
      <div id="future" className="wrapper">
        {loader ? (
          <Loader />
        ) : (
          <>
            {cardData.map((item, index) => {
              return (
                <div className="container" key={index}>
                  <h3 className="day">
                    {new Date(item.Date).toLocaleString("en-us", {
                      weekday: "long",
                    })}
                  </h3>
                  <div className="weatherIcon">
                    <div>
                      {item.Temperature.Maximum.Value > 28 ? (
                        <img className="temperature-icons" src={sunny}></img>
                      ) : (
                        <img className="temperature-icons" src={cloudy}></img>
                      )}
                    </div>
                  </div>
                  <p className="conditions">Partly Cloudy</p>
                  <p className="tempRange">
                    <span className="high">
                      {" "}
                      {item.Temperature.Maximum.Value}
                      <sup>{"\xB0" + item.Temperature.Maximum.Unit}</sup>
                    </span>{" "}
                    |{" "}
                    <span className="low">
                      {" "}
                      {item.Temperature.Minimum.Value}
                      <sup>{"\xB0" + item.Temperature.Maximum.Unit}</sup>
                    </span>
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
export default WeatherCard;
/*
<div className="wrapper">
      <div className="content">
        <div className="weather-card">
          <div className="favorites-container">
            <button className="favBtn" onClick={favoriteHandler}>
              <span>Favorite</span>
            </button>
          </div>
          <div className="quick-info">
            <h2 id="cityName">{locationName}</h2>
            {weatherMetric > 28 ? (
              <img className="temperature-icons" src={sunny}></img>
            ) : (
              <img className="temperature-icons" src={cloudy}></img>
            )}
            <h6 id="currentTemp">
              {weatherMetric}
              <sup>{"\xB0" + "C"}</sup>
            </h6>
          </div>
        </div>
        <div className="weather-description">
          <h1 id="weather-desc">{weatherText}</h1>
        </div>
        <div className="day-cards">
          {loader ? (
            <Loader />
          ) : (
            <ul className="cards">
              {cardData.map((item) => {
                return (
                  <li key={item.Key}>
                    {item.Temperature.Maximum.Value > 28 ? (
                      <img className="temperature-icons" src={sunny}></img>
                    ) : (
                      <img className="temperature-icons" src={cloudy}></img>
                    )}
                    <h4>
                      {new Date(item.Date).toLocaleString("en-us", {
                        weekday: "long",
                      })}
                    </h4>
                    <h6>
                      {item.Temperature.Maximum.Value}
                      <sup>{"\xB0" + item.Temperature.Maximum.Unit}</sup>
                    </h6>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
 */
