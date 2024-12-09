import { useSearchParams } from "react-router-dom";
import SelectOption from "./SelectOption";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <SelectOption options={options} onchange={handleChange} value={value} />
  );
}

export default FilterDropDown;
