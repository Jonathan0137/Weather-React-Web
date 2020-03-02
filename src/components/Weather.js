import React from "react";

class Weather extends React.Component{

    render(){
        return(
            <div className = "container">
                <div className = "content">
                    {this.props.city && this.props.country && <h1>{this.props.city}, {this.props.country}</h1>}
                    <h1 className = "icon">
                        <i className = {`wi ${this.props.weatherIcon} display-1}`} />
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

                </div>
                {this.props.error && <h1>{this.props.error}</h1>}
            </div>

        )
    }


}

export default Weather;