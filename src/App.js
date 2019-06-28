import React, { Component } from "react";
import { connect } from "react-refetch";

import Loader from "./components/helpers/Loader";
import WeatherDisplay from "./components/WeatherDisplay";
import { TasmanWebcamDisplay, NZTAWebcamDisplay } from "./components/Webcams";

const WEATHER_URL = `https://live.harvest.com/?hsn=11720&grp=Main&cmd=json`;

class App extends Component {
  render() {
    const { weatherFetch } = this.props;

    if (weatherFetch.pending) {
      return <Loader />;
    } else if (weatherFetch.rejected) {
      return <span>Error</span>;
    } else if (weatherFetch.fulfilled) {
      return (
        <div className="App">
          <main>
            <h1 className="sr-only">Saint Arnaud</h1>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6">
                  <section className="mt-4">
                    <WeatherDisplay weatherData={weatherFetch.value} />
                  </section>
                </div>
                <div className="col-md-5 col-lg-6">
                  <section className="mt-4">
                    <TasmanWebcamDisplay />
                  </section>
                  <section className="mt-4">
                    <NZTAWebcamDisplay />
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    } else return null;
  }
}

export default connect(props => ({
  weatherFetch: WEATHER_URL
}))(App);
