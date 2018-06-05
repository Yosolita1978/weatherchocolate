import React from "react";

class Weather extends React.Component{
    render(){

        let chocolateMsg;
        if(this.props.clouds === 0){
            chocolateMsg = "This is a miracle. You will see the sun! Let's eat chocolate to celebrate";
        } else if(this.props.clouds < 5){
            chocolateMsg = "What do you expect? Let's grab some chocolate to feel better";
        } else{
            chocolateMsg = "What do you expect? It's cloudy and cold. Let's grab some chocolate to feel better";
        }

        return(

        <div className="weather__info">

        {
            this.props.city && this.props.country && <p className="weather__key"> Location: 
            <span className="weather__value"> { this.props.city }, { this.props.country }</span>
            </p> 

        }
        
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        
        {this.props.description && <p>Conditions: {this.props.description}</p>}

        {this.props.clouds && <p>{chocolateMsg}</p>}
        
        { this.props.error && <p>Alert: {this.props.error}</p>}
        
        </div>


        );
    }
};

export default Weather;