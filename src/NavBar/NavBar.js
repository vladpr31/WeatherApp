import React from "react";
import WeatherAPIBanner from "../WeatherAPI/WeatherAPIBanner";

import "./NavBar.css";
const NavBar = (props) => {
  const [activeBar, setActiveBar] = React.useState(0);
  const changeFavoriteActiveBar = () => {
    if (activeBar == 0) {
      setActiveBar(1);
      props.page(1);
    }
  };
  const changeHomeActiveBar = () => {
    if (activeBar == 1) {
      setActiveBar(0);
      props.page(0);
    }
  };

  return (
    <>
      <div className="topnav" id="myTopnav">
        <h1 className="navTitle">Herolo Weather App</h1>
        <a
          className={activeBar == 1 ? "active" : ""}
          onClick={changeFavoriteActiveBar}
        >
          Favorites
        </a>
        <a
          className={activeBar == 0 ? "active" : ""}
          onClick={changeHomeActiveBar}
        >
          Home
        </a>
      </div>
      <WeatherAPIBanner />
    </>
  );
};
export default NavBar;
