export default function TextField({
  label,
  name,
  register,
  validationSchema,
  required,
  type = "text",
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="textField__input"
        {...register(name, validationSchema)}
        autoComplete="off"
      />
      {errors && errors[name] && <span className="block mt-2 text-sm text-error">{errors[name]?.message}</span>}
    </div>
  );
}
