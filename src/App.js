import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Weather from "./Weather/Weather";
import { Favorites } from "./Favorites/Favorites";
const App = () => {
  const [currPage, setPage] = React.useState(0);
  const [clicked, setClicked] = React.useState();
  useEffect(
    (prevState) => {
      if (prevState != clicked) {
        setPage(0);
      }
    },
    [clicked]
  );

  return (
    <>
      <section className="navigation">
        <NavBar key={clicked} page={setPage} />
      </section>

      <section className="main">
        {currPage == 0 ? (
          <Weather key={clicked} locationKey={clicked} />
        ) : (
          <Favorites key={clicked} isClicked={setClicked} />
        )}
      </section>
    </>
  );
};
export default App;
