import React from "react"

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

module.exports = {WeatherUI}