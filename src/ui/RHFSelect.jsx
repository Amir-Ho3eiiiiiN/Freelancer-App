function RHFSelect({ lable, name, register, options, required, select = 0 }) {
  return (
    <div>
      <label
        htmlFor="name"
        className="block mb-2 text-right text-secondary-700"
      >
        {lable} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            selected={opt.value === select ? "selected" : ""}
          >
            <span>{opt.lable}</span>
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
