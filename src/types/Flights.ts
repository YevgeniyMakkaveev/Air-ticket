interface IFlight {
  carrier: string;
  carrierUid: string;
  price: number;
  currency: string;
  flightTo: IFlightDetail;
  flightBack: IFlightDetail;
}
export default IFlight;

export interface IFlightDetail {
  startCity: string;
  startDate: string;
  endDate: string;
  startAirport: string;
  startPointUid: string;
  endCity: string;
  endAirport: string;
  endPointUid: string;
  duration: number;
  hasTranser: boolean;
  transferNumber: number;
  airline: string;
}
