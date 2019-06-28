import React from "react";
import moment from "moment";

const LastLogTime = ({ data }) => {
  const timeDecoded = decodeURIComponent(data.LastLogTime.time);
  const value = moment
    .utc(timeDecoded, "YYYY-MM-DD+HH:mm:ss")
    .local()
    .format("DD MMMM, h:mm a");

  return <span className="LastLogTime">{value}</span>;
};

export default LastLogTime;
