import IFlights from "../types/Flights";
import ICompany from "../types/Company";
const getCompanies = (flights: IFlights[]) => {
  const res = [] as ICompany[];
  const name = Array.from(new Set(flights.map((el) => el.carrier)));
  const uid = Array.from(new Set(flights.map((el) => el.carrierUid)));

  for (let i = 0; i < name.length; i++) {
    res.push({ name: name[i], uid: uid[i] });
  }
  return res;
};
export default getCompanies;
