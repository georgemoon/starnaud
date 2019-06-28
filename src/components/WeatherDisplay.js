import React from "react";
import PropTypes from "prop-types";

import AirTemp from "./fields/AirTemp";
import Humidity from "./fields/Humidity";
import LastLogTime from "./fields/LastLogTime";
import { RainHourly, RainDaily } from "./fields/Rain";
import Wind from "./fields/Wind";

import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="WeatherDisplay">
      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title m-0">Current Weather</h2>
          <p className="m-0">
            As of <LastLogTime data={weatherData} />
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Temperature</h3>
            <AirTemp data={weatherData} />
          </li>
          <li className="list-group-item">
            <h3>Relative Humidity</h3>
            <Humidity data={weatherData} />
          </li>
          <li className="list-group-item">
            <h3>Wind</h3>
            <Wind data={weatherData} />
          </li>
          <li className="list-group-item">
            <h3>Rain (hourly)</h3>
            <RainHourly data={weatherData} />
          </li>
        </ul>
      </div>
      <div className="card text-center mt-4">
        <div className="card-header">
          <h2 className="card-title my-0">Past 24 Hours</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Rain (daily)</h3>
            <RainDaily data={weatherData} />
          </li>
        </ul>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <dl className="m-0">
            <dt>MetService</dt>
            <dd>
              <a href="http://www.metservice.com/mountain/nelson-lakes-national-park">
                Nelson Lakes National Park
              </a>
            </dd>
            <dt>Weather Data</dt>
            <dd className="m-0">
              <a href="http://nrfa.harvest.com/w.cgi?hsn=11720">
                Fire and Emergency New Zealand
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default WeatherDisplay;
