function SelectOption({ value, onchange, options }) {
  return (
    <select value={value} onChange={onchange} className="text-sm textField__input">
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.lable}
        </option>
      ))}
    </select>
  );
}

export default SelectOption;
