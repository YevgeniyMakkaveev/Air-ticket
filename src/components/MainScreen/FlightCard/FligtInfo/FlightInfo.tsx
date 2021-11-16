import React from "react";

import { IFlightDetail } from "../../../../types/Flights";
import "./FlightInfo.scss";

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
    transferNumber,
  } = props;

  return (
    <div className="flight-detail">
      <div className="airport-details">
        <span>
          {startCity}, {startAirport}
          <span className="blue">{`(${startPointUid}) →`}</span> {endCity},
          {endAirport} <span className="blue">{`(${endPointUid})`}</span>
        </span>
      </div>
      <div className="time-details">
        <div className="time-group">
          <span className="time-label">
            {new Date(startDate).toLocaleDateString("ru")}
          </span>
          <span className="blue day-label">
            {new Date(startDate).toLocaleString("ru", {
              day: "numeric",
              month: "short",
            })}
            <span className="day-label-end">
              {new Date(startDate).toLocaleString("ru", {
                weekday: "short",
              })}
            </span>
          </span>
        </div>
        <div>
          <span className="time-label">
            {" "}
            <i className="fa fa-clock-o" />{" "}
            {new Date(duration).toLocaleString("ru", { hour: "numeric" })} ч.{" "}
            {new Date(duration).toLocaleString("ru", { minute: "2-digit" })}{" "}
            мин.{" "}
          </span>
        </div>
        <div className="time-group">
          <span className="time-label">
            {new Date(endDate).toLocaleDateString("ru")}
          </span>
          <span className="blue day-label">
            {new Date(endDate).toLocaleString("ru", {
              weekday: "short",
            })}
            <span className="day-label-end">
              {new Date(endDate).toLocaleString("ru", {
                day: "numeric",
                month: "short",
              })}
            </span>
          </span>
        </div>
      </div>
      <TransferLine transfer={transferNumber} />

      <div className="flight-company">Рейс выполняет {airline}</div>
    </div>
  );
};
export default FlightInfo;

interface ITransLine {
  transfer: number;
}

const TransferLine: React.FC<ITransLine> = (props) => {
  const { transfer } = props;
  const justLine = <div className="line" />;
  const lineAndText = (
    <>
      <div className="line" />
      <div className="line-text">
        {transfer} {transfer === 1 ? "пересадка" : "пересадки"}
      </div>
      <div className="line" />
    </>
  );

  return (
    <div className="transfer-wrap">
      {transfer === 0 ? justLine : lineAndText}
    </div>
  );
};
