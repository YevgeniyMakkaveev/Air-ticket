import React from "react";
import { observer } from "mobx-react";
import ticketStore from "../../../store/ticketStore";

interface InputObj {
  name: string;
  id: string;
  value: number;
}

interface ITransferCheckbox {
  transferData: InputObj;
  storeValue: number | null;
  setFilter: (newFilter: number) => void;
}

const TransferCheckbox: React.FC<ITransferCheckbox> = (props) => {
  const { setFilter, storeValue, transferData } = props;
  const { id, name, value } = transferData;
  return (
    <div>
      <input
        type="checkbox"
        name={id}
        checked={value === storeValue}
        onChange={() => setFilter(value)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

const FilterByTransfer: React.FC = observer(() => {
  const { setFilterByHasTransfer, filterByHasTransfer } = ticketStore;
  const filteredData: InputObj[] = [
    { name: "Без пересадки", id: "noTransfer", value: 0 },
    { name: "С пересадкой", id: "hasTransfer", value: 1 },
  ];

  return (
    <div>
      {filteredData.map((el) => (
        <TransferCheckbox
          key={el.id}
          transferData={el}
          setFilter={setFilterByHasTransfer}
          storeValue={filterByHasTransfer}
        />
      ))}
    </div>
  );
});
export default FilterByTransfer;
