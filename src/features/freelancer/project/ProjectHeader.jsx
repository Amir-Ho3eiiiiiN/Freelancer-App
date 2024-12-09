import FilterButton from "../../../ui/FilterButton";
import FilterDropDown from "../../../ui/filterDropDown";
import useCategory from "../../projects/useCategory";

const sortOptions = [
  {
    value: "latest",
    lable: "مرتب سازی (جدیدترین)",
  },
  {
    value: "eraliest",
    lable: "مرتب سازی (قدیمی‌ترین)",
  },
];

const statusOptions = [
  { value: "ALL", lable: "همه" },
  { value: "OPEN", lable: "باز" },
  { value: "CLOSED", lable: "بسته" },
];

function ProjectHeader() {
  const { transformCategories } = useCategory();
  return (
    <div className="flex items-center justify-between mb-6 text-secondary-500">
      <h1 className="text-lg font-bold">لیست پروژه‌ها </h1>
      <div className="flex items-center gap-x-2">
        <FilterButton filterField={"status"} options={statusOptions} />
        <FilterDropDown
          filterField={"category"}
          options={[
            {
              value: "ALL",
              lable: "دسته‌بندی (همه)",
            },
            ...transformCategories,
          ]}
        />
        <FilterDropDown filterField={"sort"} options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectHeader;
