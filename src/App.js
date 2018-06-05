import React from "react";
import Titles from "./components/tittles";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = 'e726b17a71ae9f8804ac5eb95fa34175';
const encodeAPI_KEY = encodeURIComponent(API_KEY);


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      temperature: undefined,
      city: undefined,
      description: undefined,
      clouds: undefined,
      chocolate: undefined,
      error:undefined
    }
  }

  getWeather = async(e) => {
    e.preventDefault();
    
    let city = e.target.elements.city.value;
    const encodedCity = encodeURIComponent(city);
    let country = e.target.elements.country.value;
    const encodedCountry = encodeURIComponent(country);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity},${encodedCountry}&appid=${encodeAPI_KEY}&units=metric`;
    await fetch(url)
    .then(response => response.json())
    .then(data => {
    
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country:data.sys.country,
        description: data.weather[0].description,
        clouds: data.clouds.all,
        error: ""
      });
    } else{

      this.setState({
        temperature: undefined,
        city: undefined,
        country:undefined,
        description: undefined,
        clouds: undefined,
        error: "Please enter a valid value for City and Country"
      });
    }
  });
  }
  
  render(){

    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-4 title-img-container">
                </div>
                <div className="col-xs-7 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container"> 
                  <Form getWeather={this.getWeather}/>
                    <Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      clouds={this.state.clouds}
                      error={this.state.error}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      );
  }
};

export default App; 