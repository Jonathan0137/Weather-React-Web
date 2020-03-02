import React from "react";

class Form extends React.Component{

    render(){
        return(
            <div className = "Form">
                 <form onSubmit={this.props.getWeather}>
                <input type="text" name = "city" placeholder = "City" autoComplete = "on"/>
                <input type="text" name = "country" placeholder = "Country" autoComplete = "on"/>
                <button>Get Weather</button>
            </form>
            </div>
           
        )
    }


}
export default Form;