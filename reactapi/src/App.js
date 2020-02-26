import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"
const config = require('./config.json');


const API_Key = 'b942a4a2b51d0b5bc823a2d128537f4e'

class App extends React.Component {


  getWeather = async (e) => {
    e.preventDefault(); // prevent web to refresh when pressed the button
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    var url = config.api.weatherURLwithUnits;
    url=url.replace("!!!", API_Key)
    url=url.replace("???", city+','+country)

    const api_call = await fetch(url);
    const data = await api_call.json();
    console.log(data)
  }


  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;