import React from "react";
import BoilingVerdict from "./BoilingVerdict";
class Calculator extends React.Component {
  state = {
    temperature: "",
  };
  onTempperatureChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };
  render() {
    const { temperature } = this.state;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.onTempperatureChange}
          />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
      </div>
    );
  }
}
export default Calculator;
