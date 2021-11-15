import { makeAutoObservable, toJS } from "mobx";

import mapFlights from "../units/mapFlights";
import filterTickets from "../units/filterTickets";
import IFlight from "../types/Flights";

class TicketStore {
  allFlight: IFlight[] = mapFlights();
  filteredFlight: IFlight[] | [] = this.allFlight;
  sortOder: string | null = null;
  filterByHasTransfer: number | null = null;
  filterByCompany: string | null = null;
  filterByMinPrice: string = "";
  filterByMaxPrice: string = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSortOder(newOder: string) {
    this.sortOder = newOder;
    this.sortFlight();
  }

  setFilterByHasTransfer(newFilter: number) {
    this.filterByHasTransfer = newFilter;
    this.sortFlight();
  }

  setFilterByCompany(newFilter: string) {
    this.filterByCompany = newFilter;
    this.sortFlight();
  }

  setFilterByMinPrice(newMinPrice: string) {
    this.filterByMinPrice = newMinPrice;
    this.sortFlight();
  }

  setFilterByMaxPrice(newMinPrice: string) {
    this.filterByMaxPrice = newMinPrice;
    this.sortFlight();
  }

  setFilteredFlight(newFlight: IFlight[]) {
    this.filteredFlight = newFlight;
    this.sortFlight();
  }

  sortFlight() {
    this.filteredFlight = filterTickets();
  }
  // testThat() {
  //   this.setSortOder(`time`);
  //  this.setFilterByMinPrice('85000')
  //   this.setFilterByHasTransfer(true)
  //   this.setFilterByCompany("AY");
  //   this.sortFlight();
  //   console.log(toJS(this.filteredFlight));
  // }
}

export default new TicketStore();
