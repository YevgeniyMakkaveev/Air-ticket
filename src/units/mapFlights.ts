import flight from "../db/flights.json";
import IFlight, { IFlightDetail } from "../types/Flights";

const db: any = flight;

const mapFlights = () => {
  return db.result.flights.map((f: any) => {
    const el = f.flight;

    const firstLeg = el.legs[0];

    const lastLeg = el.legs[el.legs.length - 1];

    const res: IFlight = {
      carrier: el.carrier.caption,
      carrierUid: el.carrier.uid,
      price: +el.price.total.amount,
      currency: el.price.total.currencyCode,
      flightTo: makeFlightDetail(firstLeg),
      flightBack: makeFlightDetail(lastLeg),
    };
    return res;
  });
};
export default mapFlights;

const makeFlightDetail = (leg: any): IFlightDetail => {
  const { segments } = leg;
  const firstSegment = segments[0];
  const lastSegment = segments[segments.length - 1];
  const startDate = firstSegment.departureDate;
  const endDate = lastSegment.arrivalDate;
  return {
    startCity: firstSegment.departureCity?.caption ?? "",
    startDate: startDate,
    startAirport: firstSegment.departureAirport.caption,
    startPointUid: firstSegment.departureAirport.uid,
    endDate: endDate,
    endAirport: lastSegment.arrivalAirport.caption,
    endPointUid: lastSegment.arrivalAirport.uid,
    endCity: lastSegment.arrivalCity?.caption ?? "",
    transferNumber: segments.length - 1,
    airline: firstSegment.airline?.caption ?? "",
    hasTranser: segments.length > 1 ? true : false,
    duration: +Date.parse(endDate) - +Date.parse(startDate),
  };
};
