<a name="readme-top"></a>





<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vladpr31/WeatherApp">
    <img src="https://pbs.twimg.com/media/EVKk70aU4AAGnTY.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">WetherApp using AccuWeatherAPI</h3>

  <p align="center">
    Simple Weather App Page using the AccuWeather API.
    <br />
    <a href="https://developer.accuweather.com/documentation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/vladpr31/weatherApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/vladpr31/weatherApp/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact">Known Issues</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
 Simple Weather App Page using the AccuWeather API.
   As default shows Tel Aviv weather.
  - You can search for a spesific location using the search bar.
  - Add location to favorites.
  - Five days forecast.
## Screenshot
<img src="https://i.imgur.com/VbJs9pO.png"/>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

1. First you'll need an API key, you can get your key for free [Here](https://developer.accuweather.com/)
2. update the WeatherConfig.js with your API key.
3. start the app.
Note - AccuWeather allows max 50 uses for each API key.
### Prerequisites

npm install
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [AccuWeather](https://developer.accuweather.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/vladpr31/WeatherApp-test-.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `WeatherConfig.js`
   ```js
   const apiKey = 'YOUR API KEY';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact


Project Link: [WeatherApp](https://github.com/vladpr31/weatherApp)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Known BUGS\Issues

* Sometimes the search bar has a delay with the searched location.
* Favorites saved for session(on app rerun favorites deletes.), the favorite location are not stored on any DB.


<p align="right">(<a href="#readme-top">back to top</a>)</p>




