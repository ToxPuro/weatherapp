import React from 'react';
import ReactDOM from 'react-dom';
const baseURL = process.env.ENDPOINT;


class WeatherUI extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className="icon">
        {this.props.current_weather.description}
        <img src={`/img/${this.props.current_weather.icon}.svg`} alt="" style={{ width: 400, height: 400 }} />
        {this.props.weather_3h_from_now.description}
        <img src={`/img/${this.props.weather_3h_from_now.icon}.svg`} alt="" style={{ width: 400, height: 400 }} />
      </div>

    )

  }

}

// Old code but might need in the future
// const getWeatherFromApi = async () => {
//   try {
//     const response = await fetch(`${baseURL}/weather`);
//     return response.json();
//   } catch (error) {
//     console.error(error);
//   }

//   return {};
// };

const getForecastFromApi = async (lat, lon) => {
  try {
    const response = await fetch(`${baseURL}/forecast/${lat}/${lon}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};



class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_weather: {},
      weather_3h_from_now: {},
    };
  }

  async componentDidMount() {
    let lon = 0.0;
    let lat = 0.0;
    await navigator.geolocation.getCurrentPosition(async function (position) {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
    });

    const forecast = await getForecastFromApi(lat, lon);
    this.setState({ current_weather:  { icon: forecast[0].icon.slice(0, -1), description: forecast[0].description } });
    this.setState({ weather_3h_from_now:  { icon: forecast[1].icon.slice(0, -1), description: forecast[1].description } });
  }

  render() {
    const { current_weather, weather_3h_from_now } = this.state;

    return (
      <div>
        <WeatherUI current_weather={current_weather} weather_3h_from_now={weather_3h_from_now}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app'),
);

module.exports = {WeatherUI}
