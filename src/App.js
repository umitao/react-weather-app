import React from "react";
import Header from "./components/Header";
import InputLocation from "./components/InputLocation";

class App extends React.Component {
  state = {
    weather: "",
    location: "",
  };

  getWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          weather: data.main.temp.toFixed(1),
          location: data.name,
        });
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <InputLocation getWeatherData={this.getWeatherData} />
        <p style={{ textAlign: "center" }}>
          Temperature in {this.state.location} is {this.state.weather}°C
        </p>
      </React.Fragment>
    );
  }
}

export default App;
