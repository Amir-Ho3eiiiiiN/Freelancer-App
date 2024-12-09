function RadioInput({
  value,
  register,
  name,
  id,
  lable,
  watch,
  validationSchema,
}) {
  return (
    <div className="flex items-center gap-2 text-secondary-600">
      <input
        className="cursor-pointer form-radio"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{lable}</label>
    </div>
  );
}

export default RadioInput;
