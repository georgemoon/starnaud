import React, { Component } from "react";
import PropTypes from "prop-types";

import "./RenderParameter.css";

class RenderParameter extends Component {
  renderTrend(trend) {
    switch (trend) {
      case -1:
        return "↓";
      case 0:
        return "–";
      case 1:
        return "↑";
      default:
        return "";
    }
  }

  render() {
    const { parameter, type, small } = this.props;

    const isCurrent = type === "current" ? true : false;

    var classNames = ["parameter", type];
    if (small) classNames.push("small");

    return (
      <span className={classNames.join(" ")}>
        <span className="value">
          {isCurrent ? parameter["value"] : parameter[type]}
        </span>
        <span className="units">{parameter.units}</span>
        {isCurrent && (
          <span className="trend">{this.renderTrend(parameter.trend)}</span>
        )}
      </span>
    );
  }
}

RenderParameter.propTypes = {
  parameter: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    trend: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired,
  small: PropTypes.bool.isRequired
};

RenderParameter.defaultProps = {
  type: "current",
  small: false
};

export default RenderParameter;
