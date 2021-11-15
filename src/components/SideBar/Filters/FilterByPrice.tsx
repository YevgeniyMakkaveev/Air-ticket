import React from "react";
import { observer } from "mobx-react";
import ticketStore from "../../../store/ticketStore";

const FilterByPrice: React.FC = observer(() => {
  const {
    filterByMaxPrice,
    filterByMinPrice,
    setFilterByMaxPrice,
    setFilterByMinPrice,
  } = ticketStore;

  const handleMinInput = (newInput: string) => {
    console.log(newInput, isNaN(+newInput));
    if (!isNaN(+newInput)) setFilterByMinPrice(newInput);
    if (!newInput) setFilterByMinPrice("");
  };
  const handleMaxInput = (newInput: string) => {
    if (!isNaN(+newInput)) setFilterByMaxPrice(newInput);
    if (!newInput) setFilterByMaxPrice("");
  };

  return (
    <div>
      <div>
        <label htmlFor="priceMin">От</label>
        <input
          type="textbox"
          name="priceMin"
          value={filterByMinPrice}
          onChange={(e) => handleMinInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priceMax">До</label>
        <input
          type="textbox"
          name="priceMax"
          value={filterByMaxPrice}
          onChange={(e) => handleMaxInput(e.target.value)}
        />
      </div>
    </div>
  );
});

export default FilterByPrice;
