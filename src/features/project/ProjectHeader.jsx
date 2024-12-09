import { ArrowRightIcon } from "@heroicons/react/16/solid";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center mb-8 gap-x-4">
      <button onClick={moveBack}>
        <ArrowRightIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold text-secondary-700">
        لیست درخواست‌های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
