import React from "react";

class Weather extends React.Component{
    render(){

        let chocolateMsg;
        if(this.props.clouds === 0){
            chocolateMsg = "This is a miracle. You will see the sun! Let's eat chocolate to celebrate";
        } else if(this.props.clouds < 5){
            chocolateMsg = "Not exactly a summer weather, eh? Let's grab some chocolate to feel better";
        } else{
            chocolateMsg = "What do you expect? It's cloudy. Let's grab some chocolate to feel better";
        }

        return(


        <div className="weather__info">

        {
            this.props.city && this.props.country && <p className="weather__key"> Location: 
            <span className="weather__value"> { this.props.city }, { this.props.country }</span>
            </p> 

        }
        
        {this.props.temperature && <p className="weather__key">Temperature: 
        <span className="weather__value"> { this.props.temperature }</span>
        </p>

        }
        
        {this.props.description && <p className="weather__key">Conditions:  
        <span className="weather__value">{ this.props.description }</span>
        </p>

        }

        {this.props.clouds && <p className="weather__key">Verdict: 
        <span className="weather__value"> {chocolateMsg}</span>
        <img src={require('./chocolate.jpg')} alt="Chocolate Verdict" />
        </p>

        }
        
        { this.props.error && <p className="error__key">Alert: {this.props.error}</p>}
        
        </div>


        );
    }
};

export default Weather;