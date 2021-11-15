import flight from "../db/flights.json";
import IFlights from "../types/Flights";

const db: any = flight;

const mapFlights = () => {
  return db.result.flights.map((f: any) => {
    const el = f.flight;

    const segments = el.legs[0].segments;

    const firstSegment = segments[0];

    const lastLeg = el.legs[el.legs.length - 1];

    const lastSegment = lastLeg.segments[lastLeg.segments.length - 1];

    const startDate = firstSegment.departureDate;

    const endDate = segments[segments.length - 1].arrivalDate;
    
    const res: IFlights = {
      carrier: el.carrier.caption,
      carrierUid: el.carrier.uid,
      price: +el.price.total.amount,
      currency: el.price.total.currencyCode,
      startCity: firstSegment.departureAirport.caption,
      startAirport: firstSegment.departureCity.caption,
      startPointUid: firstSegment.departureAirport.uid,
      startDate: startDate,
      endCity: lastSegment.departureCity.caption,
      endAirport: lastSegment.departureAirport.caption,
      endPointUid: lastSegment.departureAirport.uid,
      endDate: endDate,
      hasTranser: el.legs[0].segments.length > 1 ? true : false,
      duration: Date.parse(endDate) - Date.parse(startDate),
    };
    return res;
  });
};
export default mapFlights;
