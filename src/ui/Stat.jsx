import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: `bg-primary-100 text-primary-700`,
  green: `bg-green-100 text-green-700`,
  red: `bg-red-100 text-red-700`,
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="grid col-span-1 grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`flex items-center justify-center row-span-2 p-2 rounded-full aspect-square ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="self-center text-lg font-bold text-secondary-500">
        {title}
      </h5>
      <p className="text-2xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}

export default Stat;
