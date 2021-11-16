import IFlight from "../types/Flights";

const getMinPrice = (flights: IFlight[], uid: string) => {
  const allPrice = flights
    .filter((el) => el.carrierUid === uid)
    .map((el) => el.price);
    const res=allPrice[0]?  `от ${Math.min(...allPrice)}`: `Билетов нет`
  return res;
};
export default getMinPrice