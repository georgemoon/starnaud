import React from "react";

import RenderParameter from "../helpers/RenderParameter";

const Humidity = ({ data }) => {
  const parameter = data.Humidity;

  return (
    <div className="Humidity row align-items-center">
      <div className="col-3">
        <RenderParameter parameter={parameter} type="min" />
      </div>
      <div className="col-6">
        <RenderParameter parameter={parameter} />
      </div>
      <div className="col-3">
        <RenderParameter parameter={parameter} type="max" />
      </div>
    </div>
  );
};

export default Humidity;
