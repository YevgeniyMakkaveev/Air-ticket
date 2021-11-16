import { makeAutoObservable} from "mobx";

import mapFlights from "../units/mapFlights";
import filterTickets from "../units/filterTickets";
import IFlight from "../types/Flights";

class TicketStore {
  allFlight: IFlight[] = mapFlights();
  filteredBeforeCompany: IFlight[]|[]=this.allFlight;
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
    this.filterFlight();
  }

  setFilterByHasTransfer(newFilter: number) {
    this.filterByHasTransfer = newFilter;
    this.filterBeforeCompany();
    this.filterFlight();
  }

  setFilterByCompany(newFilter: string) {
    this.filterByCompany = newFilter;
    this.filterFlight();
  }

  setFilterByMinPrice(newMinPrice: string) {
    this.filterByMinPrice = newMinPrice;
    this.filterBeforeCompany();
    this.filterFlight();
  }

  setFilterByMaxPrice(newMinPrice: string) {
    this.filterByMaxPrice = newMinPrice;
    this.filterBeforeCompany();
    this.filterFlight();
  }

  setFilteredFlight(newFlight: IFlight[]) {
    this.filteredFlight = newFlight;
    this.filterFlight();
  }

  resetSearch(){
    this.sortOder=null;
    this.filterByMaxPrice='';
    this.filterByMinPrice='';
    this.filterByHasTransfer=null;
    this.filterByCompany=null;
    this.filterByHasTransfer=null;
    this.filteredBeforeCompany=this.allFlight
    this.filteredFlight=this.allFlight
  }

  
filterBeforeCompany(){
this.filteredBeforeCompany=filterTickets(false)
}

  filterFlight() {
    this.filteredFlight = filterTickets(true);
  }

}

export default new TicketStore();
