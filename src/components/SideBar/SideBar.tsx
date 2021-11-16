import React from "react";
import FilterByCompany from "./Filters/FilterByCompany";
import FilterByPrice from "./Filters/FilterByPrice";
import SortList from "./Filters/SortList";
import FilterByTransfer from "./Filters/FilterByTransfer";
import ticketStore from "../../store/ticketStore";
import './SideBar.scss'

const SideBar: React.FC = () => {
  const {resetSearch}=ticketStore
  return (
    <div className='sidebar'>
      <div className='controls'>
        <div className='control-element'>
      <div className='label'>Сортировать</div>
      <SortList />
      </div>
      <div className='control-element'>
       <div className='label'>Фильтровать</div>
      <FilterByTransfer />
      </div>
      <div className='control-element'>
      <div className='label'>Цена</div>
      <FilterByPrice />
      </div>
      <div className='control-element'>
      <div className='label'>Авиакомпании</div>
      <FilterByCompany />
      </div>
      <div className='reset-btn' onClick={()=>resetSearch()}>Сбросить</div>
      </div>
    </div>
  );
};
export default SideBar;
