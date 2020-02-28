import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"
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
    error: undefined
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
        error: ""
      })
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
      <div className="box">
        <div className = "content">
          <img src="" alt="icon" id="icon"></img>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather 
            temp = {this.state.temp}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            main = {this.state.main}
            error = {this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
