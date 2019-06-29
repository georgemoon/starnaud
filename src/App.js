import React from "react";

import WeatherDisplay from "./components/WeatherDisplay";
import { TasmanWebcamDisplay, NZTAWebcamDisplay } from "./components/Webcams";

const App = props => {
  return (
    <div className="App">
      <main>
        <h1 className="sr-only">Saint Arnaud</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
              <section className="mt-4">
                <WeatherDisplay />
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
};

export default App;
