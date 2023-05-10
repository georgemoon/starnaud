import React, { Component } from "react";

import RenderParameter from "../helpers/RenderParameter";

class Wind extends Component {
  constructor(props) {
    super(props);
    this.generateWindDir = this.generateWindDir.bind(this);
  }

  generateWindDir() {
    const WindDir = this.props.data.WindDir;
    var degrees = WindDir.value;

    while (degrees < 0) {
      degrees += 360;
    }
    while (degrees >= 360) {
      degrees -= 360;
    }

    var cardinalMarks = [
      { name: "N", lower: 0.0, upper: 11.25 },
      { name: "NNE", lower: 11.25, upper: 33.75 },
      { name: "NE", lower: 33.75, upper: 56.25 },
      { name: "ENE", lower: 56.25, upper: 78.75 },
      { name: "E", lower: 78.75, upper: 101.25 },
      { name: "ESE", lower: 101.25, upper: 123.75 },
      { name: "SE", lower: 123.75, upper: 146.25 },
      { name: "SSE", lower: 146.25, upper: 168.75 },
      { name: "S", lower: 168.75, upper: 191.25 },
      { name: "SSW", lower: 191.25, upper: 213.75 },
      { name: "SW", lower: 213.75, upper: 236.25 },
      { name: "WSW", lower: 236.25, upper: 258.75 },
      { name: "W", lower: 258.75, upper: 281.25 },
      { name: "WNW", lower: 281.25, upper: 303.75 },
      { name: "NW", lower: 303.75, upper: 326.25 },
      { name: "NNW", lower: 326.25, upper: 348.75 },
      { name: "N", lower: 348.75, upper: 360.0 },
    ];

    var compass = "";

    for (var key in cardinalMarks) {
      if (
        degrees >= cardinalMarks[key].lower &&
        degrees < cardinalMarks[key].upper
      )
        compass = cardinalMarks[key].name;
    }

    WindDir.value = compass;

    return WindDir;
  }
  render() {
    const { data } = this.props;
    return (
      <div className="Wind">
        <div className="row align-items-center">
          <div className="col-4">
            <RenderParameter parameter={data.WindSpeed} type="min" />
          </div>
          <div className="col-4">
            <RenderParameter parameter={data.WindSpeed} />
          </div>
          <div className="col-4">
            <RenderParameter parameter={data.WindSpeed} type="max" />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-4">
            <RenderParameter
              parameter={this.generateWindDir()}
              small
              label="Direction"
            />
          </div>
          <div className="col-4">
            <RenderParameter parameter={data.WindGust} small label="Gust" />
          </div>
        </div>
      </div>
    );
  }
}

export default Wind;
