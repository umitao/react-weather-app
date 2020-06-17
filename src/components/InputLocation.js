import React from "react";
class InputLocation extends React.Component {
  state = {
    city: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", margin: "10px" }}>
        <input
          type="text"
          placeholder="Enter City"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => {
            this.props.getWeatherData(this.state.city);
          }}
        >
          Get Weather
        </button>
      </div>
    );
  }
}

export default InputLocation;
