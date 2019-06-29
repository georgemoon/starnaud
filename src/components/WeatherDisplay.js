import React, { Component } from "react";
import { connect } from "react-refetch";

import Loader from "./helpers/Loader";
import AirTemp from "./fields/AirTemp";
import Humidity from "./fields/Humidity";
import LastLogTime from "./fields/LastLogTime";
import { RainHourly, RainDaily } from "./fields/Rain";
import Wind from "./fields/Wind";

import "./WeatherDisplay.css";

const WEATHER_URL = `https://live.harvest.com/?hsn=11720&grp=Main&cmd=json`;

class WeatherDisplay extends Component {
  render() {
    const { weatherFetch } = this.props;

    if (weatherFetch.pending) {
      return <Loader />;
    } else if (weatherFetch.rejected) {
      return <span>Error</span>;
    } else if (weatherFetch.fulfilled) {
      const weatherData = weatherFetch.value;
      return (
        <div className="WeatherDisplay">
          <div className="card text-center">
            <div className="card-header">
              <h2 className="card-title m-0">
                Current Weather in Saint Arnaud
              </h2>
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
    } else return null;
  }
}

export default connect(props => ({
  weatherFetch: WEATHER_URL
}))(WeatherDisplay);
