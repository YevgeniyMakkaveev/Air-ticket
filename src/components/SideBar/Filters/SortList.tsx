import React from "react";
import { observer } from "mobx-react";
import ticketStore from "../../../store/ticketStore";

interface ISortConditions {
  value: string;
  name: string;
}
interface ISortCheckbox {
  sortData: ISortConditions;
  storeValue: string | null;
  set: (newOder: string) => void;
}
const SortCheckbox: React.FC<ISortCheckbox> = (props) => {
  const { set, sortData, storeValue } = props;
  const { value, name } = sortData;
  return (
    <div>
      <input
        type="radio"
        name={value}
        checked={value === storeValue}
        onChange={() => set(value)}
      />
      <label htmlFor={value}>{name}</label>
    </div>
  );
};

const SortList: React.FC = observer(() => {
  const { sortOder, setSortOder } = ticketStore;

  const sortCondition: ISortConditions[] = [
    { value: "priceUp", name: "По возрастанию цены" },
    { value: "priceDown", name: "По убыванию цены" },
    { value: "time", name: "По времени" },
  ];

  return (
    <>
      {sortCondition.map((el) => (
        <SortCheckbox
          key={`${el.value}+${Math.random().toFixed(10)}`}
          sortData={el}
          storeValue={sortOder}
          set={setSortOder}
        />
      ))}
    </>
  );
});

export default SortList;
