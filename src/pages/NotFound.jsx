import { ArrowRightIcon } from "@heroicons/react/16/solid";
import useMoveBack from "../hooks/useMoveBack";

function NOtFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl ">
        <div className="pt-10 xs:max-w-screen-xs">
          <div>
            <h1 className="mb-8 text-xl font-bold text-secondary-700">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button className="flex items-center gap-2" onClick={moveBack}>
              <ArrowRightIcon className="size-6 text-primary-900" />
              <span>برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NOtFound;
