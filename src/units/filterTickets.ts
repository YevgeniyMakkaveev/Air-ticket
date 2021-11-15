import ticketStore from "../store/ticketStore";
import IFlights from "../types/Flights";

const filterTickets = () => {
  const {
    filterByCompany,
    filterByTransfer,
    filterByPriceRange,
    sortOder,
    allFlight,
  } = ticketStore;
  let res = [...allFlight] ;
  if (filterByCompany) res = res.filter((el) => el.carrierUid === filterByCompany);
  if (filterByPriceRange)
    res = res.filter((el) => el.price > filterByPriceRange[0] && el.price < filterByPriceRange[1]
    );
  if (sortOder) res = sortArr(res, sortOder);
  return res;
};
export default filterTickets;

const sortArr = (arr: IFlights[] | [], oder: string) => {
  if (!arr) return arr;
  switch (oder) {
    case "priceUp":
      return arr.sort((a, b) => a.price - b.price);
    case "priceDown":
      return arr.sort((a, b) => b.price - a.price);
    case "time":
      return arr.sort((a, b) => a.duration - b.duration);
    default:
      return arr;
  }
};
