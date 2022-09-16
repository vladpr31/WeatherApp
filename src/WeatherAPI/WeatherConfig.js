const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const searchInput = (userInput) =>
  `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}&language=en-us`;
const currWeather = (location) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${apiKey}`;
const foreCast = (location, metric) =>
  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${apiKey}&metric=${metric}`;

export { searchInput, currWeather, foreCast };
