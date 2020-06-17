import React from "react";

class Output extends React.Component {
  state = {
    weather: "",
    location: "",
  };
  render() {
    return (
      <p style={{ textAlign: "center" }}>
        Temperature in {this.state.location} is {this.state.weather}°C
      </p>
    );
  }
}

export default Output;
