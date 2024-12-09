import Loading from "../../ui/Loading";
import ToggleSwitch from "../../ui/ToggleSwitch";
import useToggleProjectStatus from "./useToggleProjectStatus";

function ToggleStatusProject({ project }) {
  const { status, _id } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const handlerChangeStatus = () => {
    const newStatus = status === "OPEN" ? "ClOSE" : "OPEN";
    toggleProjectStatus({
      id: _id,
      data: { status: newStatus },
    });
  };
  return isUpdating ? (
    <Loading width="5rem" height="1rem" />
  ) : (
    <ToggleSwitch
      label={status === "OPEN" ? "باز" : "بسته"}
      enabled={status === "OPEN" ? true : false}
      onchange={handlerChangeStatus}
    />
  );
}

export default ToggleStatusProject;
