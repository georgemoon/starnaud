import React from "react";
import useSWR from "swr";

import AirTemp from "./fields/AirTemp";
import Humidity from "./fields/Humidity";
import LastLogTime from "./fields/LastLogTime";
import Rain from "./fields/Rain";
import Wind from "./fields/Wind";

const WEATHER_URL = `https://live.harvest.com/?hsn=11744&grp=Main&cmd=json`;

const WeatherDisplay = () => {
  const { data, error, isValidating } = useSWR(WEATHER_URL);

  if (isValidating)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading</span>
      </div>
    );
  else if (error) return <span>Error</span>;
  else if (data) {
    return (
      <div className="WeatherDisplay">
        <div className="card text-center">
          <div className="card-header">
            <h2 className="card-title m-0">Current Weather in Saint Arnaud</h2>
            <p className="m-0">
              As of <LastLogTime data={data} />
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Temperature</h3>
              <AirTemp data={data} />
            </li>
            <li className="list-group-item">
              <h3>Relative Humidity</h3>
              <Humidity data={data} />
            </li>
            <li className="list-group-item">
              <h3>Wind</h3>
              <Wind data={data} />
            </li>
            <li className="list-group-item">
              <h3>Rain (hourly)</h3>
              <Rain data={data} />
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
              <dt>NIWA</dt>
              <dd>
                <a href="https://weather.niwa.co.nz/parks/Nelson%20Lakes%20National%20Park">
                  Nelson Lakes National Park
                </a>
              </dd>
              <dt>Weather Data</dt>
              <dd className="m-0">
                <a href="http://nrfa.harvest.com/w.cgi?hsn=11744">
                  Fire and Emergency New Zealand
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default WeatherDisplay;
