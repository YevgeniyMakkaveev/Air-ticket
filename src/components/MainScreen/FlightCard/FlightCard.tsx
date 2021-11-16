import React from "react";

import IFlight from "../../../types/Flights";
import "./FlightCard.scss";
import FlightInfo from "./FligtInfo";
import getLogo from "../../../units/getLogo";

const FlightCard: React.FC<IFlight> = (props) => {
  const { carrier, price, carrierUid, flightBack, flightTo } = props;

  return (
    <div className="card">
      <div className="head">
        <div className="logo">
          <img src={getLogo(carrierUid)} alt={carrier} />
        </div>
        <div className="price-group">
          <div className='price'> {price} ₽</div>
          <div className='price-label'> Стоимость для одного взрослого пассажира</div>
        </div>
      </div>
      <FlightInfo
        key={`${flightTo.startPointUid}+${price}+${Math.random().toFixed(10)}`}
        {...flightTo}
      />
      <div className='line-wrap' > <div className='blue-line' /> </div>
      <FlightInfo
        key={`${flightBack.endPointUid}+${price}+${Math.random().toFixed(10)}`}
        {...flightBack}
      />
      <div className='big-orange-button'> ВЫБРАТЬ</div>
    </div>
  );
};
export default FlightCard;
