import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ lable, date, setDate }) {
  console.log(date);

  return (
    <div>
      <label htmlFor="tags" className="block mb-2 text-secondary-700">
        {lable}
      </label>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
