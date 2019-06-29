import React from "react";

import RenderParameter from "../helpers/RenderParameter";

export const RainDaily = ({ data }) => {
  const parameter = data.RainDaily;

  return <RenderParameter parameter={parameter} />;
};

export const RainHourly = ({ data }) => {
  const parameter = data.RainHourly;

  return (
    <div className="RainHourly row align-items-center">
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
