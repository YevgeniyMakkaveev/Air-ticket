import React from "react";
import FilterByCompany from "./Filters/FilterByCompany";
import FilterByPrice from "./Filters/FilterByPrice";
import SortList from "./Filters/SortList";
import FilterByTransfer from "./Filters/FilterByTransfer";

const SideBar: React.FC = () => {
  return (
    <div>
      <SortList />
      <FilterByTransfer />
      <FilterByPrice />
      <FilterByCompany />
    </div>
  );
};
export default SideBar;
