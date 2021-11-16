import React from "react";
import { observer } from "mobx-react";
import getMinPrice from "../../../units/getMinPrice";
import getCompanies from "../../../units/getCompanies";
import ticketStore from "../../../store/ticketStore";
import ICompany from "../../../types/Company";
import './FilterStyle.scss'


interface ICompanyCheckbox {
  company: ICompany;
  storeValue: string | null;
  minPrice: string;
  onChange: (newFilter: string) => void;
}

const CompanyCheckbox: React.FC<ICompanyCheckbox> = (props) => {
  const { company, storeValue, minPrice, onChange } = props;
  const { name, uid } = company;
  return (
    <div>
      <input
        type="checkbox"
        name={uid}
        disabled={minPrice==='Билетов нет'}
        checked={uid === storeValue}
        onChange={() => onChange(uid)}
      />
      <label className={minPrice==='Билетов нет'?'disabled':''} htmlFor={uid}>- {name} {minPrice}</label>
    </div>
  );
};

const FilterByCompany: React.FC = observer(() => {
  const { allFlight, setFilterByCompany, filterByCompany,filteredBeforeCompany } = ticketStore;
  const allCompanies = getCompanies(allFlight);

  return (
    <div>
      {allCompanies.map((el) => (
        <CompanyCheckbox
          key={el.uid}
          company={el}
          storeValue={filterByCompany}
          minPrice={getMinPrice(filteredBeforeCompany,el.uid)}
          onChange={setFilterByCompany}
        />
      ))}
    </div>
  );
});

export default FilterByCompany;
