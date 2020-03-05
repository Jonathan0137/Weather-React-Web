import React from "react";

class Weather extends React.Component{

    render(){
        return(
            <div className = "container">
                <div className = "content">
                    <h1 className = "country">
                        {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
                    </h1>

                    <h1 className = "icon">
                        <i className = {`wi ${this.props.weatherIcon} display-1`} />
                    </h1>

                    <h1 className = "degree">
                        {this.props.temp && <p>{this.props.temp}°C</p>}
                    </h1>

                    <h4 className = "description">
                        {this.props.main && this.props.description && <p>{this.props.main}, {this.props.description}</p>}
                    </h4>

                    <h4 className = "humidity">
                        {this.props.humidity && <p>{this.props.humidity}% humidity</p>}
                    </h4>
                    <h1 className = "error">
                        {this.props.error && <p>{this.props.error}</p>}
                    </h1>
                    
                </div>

            </div>

        )
    }


}

export default Weather;