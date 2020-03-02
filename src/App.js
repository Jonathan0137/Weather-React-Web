import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"
import 'weather-icons/css/weather-icons.css'
const config = require('./config.json');
const dotenv = require('dotenv');
dotenv.config()

const API_Key = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    main: undefined,
    error: undefined,
    icon: undefined
  }
  weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };

  setWeatherIcon(icons, main){
    switch(true){
      case main === "Thunderstorm":
        this.setState({icon:icons.Thunderstorm})
      break;

      case main === "Drizzle":
        this.setState({icon:icons.Drizzle})
      break;

      case main === "Rain":
        this.setState({icon:icons.Rain})
      break;

      case main === "Snow":
        this.setState({icon:icons.Snow})
      break;

      case main === "Atmosphere":
        this.setState({icon:icons.Atmosphere})
      break;

      case main === "Clear":
        this.setState({icon:icons.Clear})
      break;

      case main === "Clouds":
        this.setState({icon:icons.Clouds})
      break;
      
      default:
        this.setState({icon:icons.Clear})
    }
  }
  getWeather = async (e) => {
    e.preventDefault(); // prevent web to refresh when pressed the button
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    var url = config.api.weatherURLwithUnits;
    url=url.replace("!!!", API_Key)
    url=url.replace("???", city+','+country)
    url=url.replace("$$$", "metric")

    const api_call = await fetch(url);
    const data = await api_call.json();
    
    if(city && country)
    {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        main: data.weather[0].main,
        error: "",
        // icon: this.weatherIcon.Rain
      })
      this.setWeatherIcon(this.weatherIcon, data.weather[0].main)

    }
    else
    {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        main: undefined,
        error: "Please Enter The Correct Location"
      })
    }

  }


  render(){
    return(
        <div className = "wrapper">
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather 
            temp = {this.state.temp}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            main = {this.state.main}
            weatherIcon = {this.state.icon}
            error = {this.state.error}
          />
        </div>

    );
  }
}

export default App;
