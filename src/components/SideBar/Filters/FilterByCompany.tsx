import React from "react";
import { observer } from "mobx-react";
import getMinPrice from "../../../units/getMinPrice";
import getCompanies from "../../../units/getCompanies";
import ticketStore from "../../../store/ticketStore";
import ICompany from "../../../types/Company";


interface ICompanyCheckbox {
  company: ICompany;
  storeValue: string | null;
  minPrice: number;
  onChange: (newFilter: string) => void;
}

const CompanyCheckbox: React.FC<ICompanyCheckbox> = (props) => {
  const { company, storeValue, minPrice, onChange } = props;
  const { name, uid } = company;
  return (
    <div>
      <input
        type="radio"
        name={uid}
        checked={uid === storeValue}
        onChange={() => onChange(uid)}
      />
      <label htmlFor={uid}>{name} от {minPrice}</label>
    </div>
  );
};

const FilterByCompany: React.FC = observer(() => {
  const { allFlight, setFilterByCompany, filterByCompany,filteredFlight } = ticketStore;
  const allCompanies = getCompanies(allFlight);

  return (
    <div>
      {allCompanies.map((el) => (
        <CompanyCheckbox
          key={el.uid}
          company={el}
          storeValue={filterByCompany}
          minPrice={getMinPrice(filteredFlight,el.uid)}
          onChange={setFilterByCompany}
        />
      ))}
    </div>
  );
});

export default FilterByCompany;
