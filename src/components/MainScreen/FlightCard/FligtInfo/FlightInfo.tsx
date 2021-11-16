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
      <div className="small-line" />
      <div className="time-details">
        <div className="time-group">
          <span className="time-label">
            {new Date(startDate).toLocaleString("ru", {
              hour: "numeric",
              minute: "numeric",
            })}
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
            <i className="fa fa-clock-o" />
            {` ${new Date(duration).toLocaleString("ru", {
              hour: "2-digit",
            })}`}
            ч.
            {` ${new Date(duration).toLocaleString("ru", {
              minute: "2-digit",
            })} `}
            мин.
          </span>
        </div>
        <div className="time-group">
          <span className="blue day-label">
            <span className="day-label-end">
              {`${new Date(endDate).toLocaleString("ru", {
                day: "numeric",
                month: "short",
              })} `}
              {`${new Date(endDate).toLocaleString("ru", {
                weekday: "short",
              })} `}
            </span>
          </span>
          <span className="time-label">
            {new Date(endDate).toLocaleString("ru", {
              hour: "numeric",
              minute: "numeric",
            })}
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

const TransferLine: React.FC<ITransLine> = ({ transfer }) => (
  <>
    {transfer === 0 && (
      <div className="line-wrap">
        <div className="line" />
      </div>
    )}
    {transfer !== 0 && (
      <div className="transfer-wrap">
        <div className="line" />
        <div className="line-text">
          {transfer} {transfer === 1 ? "пересадка" : "пересадки"}
        </div>
        <div className="line" />
      </div>
    )}
  </>
);
