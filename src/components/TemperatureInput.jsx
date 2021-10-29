import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({
  temperature,
  scale,
  onTempperatureChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTempperatureChange(e,scale)}
        />
      </fieldset>
    </div>
  );
}
