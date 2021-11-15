import IFlight from "../types/Flights";

const getMinPrice = (flights: IFlight[], uid: string) => {
  const allPrice = flights
    .filter((el) => el.carrierUid === uid)
    .map((el) => el.price);
  return Math.min(...allPrice);
};
export default getMinPrice