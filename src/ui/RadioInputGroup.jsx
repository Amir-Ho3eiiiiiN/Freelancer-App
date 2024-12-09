import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex items-center justify-center gap-8">
        {options.map((opt) => (
          <RadioInput
            key={opt.value}
            lable={opt.lable}
            value={opt.value}
            id={opt.id}
            name={name}
            register={register}
            validationSchema={validationSchema}
            watch={watch}
          />
        ))}
      </div>
      <div>
        {errors && errors[name] && (
          <span className="mt-2 text-sm text-error">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioInputGroup;
