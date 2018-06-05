import React from "react";

class Weather extends React.Component{
    render(){

        let chocolateMsg;
        if(this.props.clouds < 5){
            chocolateMsg = "This is a miracle. You will see the sun! Let's eat chocolate to celebrate";
        } else{
            chocolateMsg = "What do you expect? It's cloudy and cold. Let's grab some chocolate to feel better";
        }

        return(

        <div>

        {this.props.city && this.props.country && <p>Location: {this.props.city}</p>}
        
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        
        {this.props.description && <p>Conditions: {this.props.description}</p>}

        {this.props.clouds && <p>{this.props.clouds}</p>}

        {this.props.clouds && <p>{chocolateMsg}</p>}
        
        { this.props.error && <p>Alert: {this.props.error}</p>}
        
        </div>


        );
    }
};

export default Weather;