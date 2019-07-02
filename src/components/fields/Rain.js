import React from "react";

import RenderParameter from "../helpers/RenderParameter";

const Rain = ({ data }) => {
  const parameter = data.RainHourly;

  return (
    <div className="Rain">
      <div className="row align-items-center">
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
      <div className="row align-items-center justify-content-center">
        <div className="col-4">
          <RenderParameter
            parameter={data.RainDaily}
            small
            label="Cumulative (last 24 hours)"
          />
        </div>
      </div>
    </div>
  );
};

export default Rain;
