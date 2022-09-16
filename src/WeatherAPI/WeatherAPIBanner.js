import React from "react";
import "./WeatherAPIBanner.css";
const WeatherAPIBanner = () => {
  return (
    <div className="api">
      <div className="container">
        🌞 This demo needs an AccuWeather API key to work.{" "}
        <a target="_blank" href="https://developer.accuweather.com/">
          Get yours here for free!
        </a>
      </div>
    </div>
  );
};
export default WeatherAPIBanner;
