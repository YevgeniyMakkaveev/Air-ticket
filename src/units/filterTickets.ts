import ticketStore from "../store/ticketStore";
import IFlight from "../types/Flights";

const filterTickets = (filterCompany:boolean) => {
  const {
    filterByCompany,
    filterByHasTransfer,
    sortOder,
    allFlight,
    filterByMaxPrice,
    filterByMinPrice,
  } = ticketStore;
  let res = [...allFlight];
  if (filterByCompany&&filterCompany)
    res = res.filter((el) => el.carrierUid === filterByCompany);
  if (filterByMaxPrice) res = res.filter((el) => el.price < +filterByMaxPrice);
  if (filterByMinPrice) res = res.filter((el) => el.price > +filterByMinPrice);
  if (sortOder) res = sortArr(res, sortOder);
  if (filterByHasTransfer !== null)
    res = res.filter(
      (el) => el.flightTo.transferNumber === filterByHasTransfer
    );
  return res;
};
export default filterTickets;

const sortArr = (arr: IFlight[] | [], oder: string) => {
  if (!arr) return arr;
  switch (oder) {
    case "priceUp":
      return arr.sort((a, b) => a.price - b.price);
    case "priceDown":
      return arr.sort((a, b) => b.price - a.price);
    case "time":
      return arr.sort((a, b) => a.flightTo.duration - b.flightTo.duration);
    default:
      return arr;
  }
};
