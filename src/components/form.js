import React from "react";

class Form extends React.Component{
    render(){
        return(

        <form className="weather-form" onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City"/>

            <input type="text" name="country" placeholder="Country"/>

            <button> Check Weather </button>

        </form>


        );
    }
};

export default Form;