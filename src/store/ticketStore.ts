import { makeAutoObservable,toJS } from "mobx";

import mapFlights from "../units/mapFlights";
import filterTickets from "../units/filterTickets";
import IFlights from "../types/Flights";

class TicketStore {
  allFlight: IFlights[] = mapFlights();
  filteredFlight: IFlights[] | [] = this.allFlight;
  sortOder: string | null = null;
  filterByTransfer: string | null = null;
  filterByCompany: string | null = null;
  filterByPriceRange: [number, number] | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSortOder(newOder: string) {
    this.sortOder = newOder;
  }

  setFilterByTransfer(newFilter: string) {
    this.filterByTransfer = newFilter;
  }

  setFilterByCompany(newFilter: string) {
    this.filterByCompany = newFilter;
  }

  setPriceRange(newPriceRange: [number, number]) {
    if(!newPriceRange[0])newPriceRange[0]=0
    this.filterByPriceRange = newPriceRange;
  }

  setFilteredFlight(newFlight:IFlights[]){
   this.filteredFlight=newFlight
  }

  sortFlight(){
   this.filteredFlight=filterTickets()
  }
  testThat(){
this.setSortOder(`time`)
// this.setPriceRange([10000,40000])
this.setFilterByCompany('AY')
this.sortFlight()
console.log(toJS(this.filteredFlight))

  }
}

export default new TicketStore();
