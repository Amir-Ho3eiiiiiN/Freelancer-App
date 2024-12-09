import { useSearchParams } from "react-router-dom";

function FilterButton({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleChange(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center text-xs gap-x-2">
      <span>وضعیت</span>
      <div className="flex items-center p-1 border rounded-lg border-secondary-100 bg-secondary-0 gap-x-2">
        {options.map((item) => {
          const isActive = currentFilter === item.value;
          return (
            <button
              key={item.value}
              onClick={() => handleChange(item.value)}
              disabled={isActive}
              className={`${
                isActive
                  ? "!bg-primary-900 text-secondary-0"
                  : "!bg-secondary-0 text-secondary-800"
              } px-4 py-1 font-bold transition-all duration-300 rounded-md whitespace-nowrap`}
            >
              {item.lable}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButton;
