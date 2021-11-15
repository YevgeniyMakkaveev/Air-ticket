import React from "react";

import IFlight from "../../../types/Flights"
import './FlightCard.scss'
import FlightInfo from "./FlightInfo";


const FlightCard:React.FC<IFlight>=(props)=>{
const {carrier,price,carrierUid,flightBack,flightTo}=props

return <div className='card'>
<div className='head'>
 <div className='logo'>{carrier}</div>
 <div className='price'>{price}</div>
</div>
<FlightInfo key={`${flightTo.startPointUid}+${price}+${Math.random().toFixed(10)}`} {...flightTo}/>
<FlightInfo key={`${flightBack.endPointUid}+${price}+${Math.random().toFixed(10)}`} {...flightBack}/>
</div>
}
export default FlightCard