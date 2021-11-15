import React from "react";

import { IFlightDetail } from "../../../types/Flights";

const FlightInfo: React.FC<IFlightDetail> = (props) => {
  const {
    duration,
    startCity,
    startAirport,
    endCity,
    endAirport,
    endDate,
    startPointUid,
    endPointUid,
    startDate,
    airline,
  } = props;

  return (
    <div className="flight-detail">
      <div className="airport-details">
        <span>
          {startCity} {startAirport}
          <span className="blue">{`(${startPointUid})`}</span> → {endCity}
          {endAirport} <span className="blue">{`(${endPointUid})`}</span>
        </span>
      </div>
      <div className="time-details">
        <div>{new Date(startDate).toLocaleDateString("ru")}</div>
        <div>
          <i className="fa fa-clock-o" /> {new Date(duration).toLocaleTimeString("ru")}
        </div>
        <div>{new Date(endDate).toLocaleDateString("ru")} </div>
      </div>
      <div>{airline}</div>
    </div>
  );
};
export default FlightInfo;
