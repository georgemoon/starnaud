import React from "react";

import RenderParameter from "../helpers/RenderParameter";

const AirTemp = ({ data }) => {
  const parameter = data.AirTemp;

  return (
    <div className="AirTemp row align-items-center">
      <div className="col-4">
        <RenderParameter parameter={parameter} type="min" />
      </div>
      <div className="col-4">
        <RenderParameter parameter={parameter} />
      </div>
      <div className="col-4">
        <RenderParameter parameter={parameter} type="max" />
      </div>
    </div>
  );
};

export default AirTemp;
