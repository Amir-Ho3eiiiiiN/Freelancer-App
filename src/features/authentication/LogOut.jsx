import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function LogOut() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <ArrowLeftStartOnRectangleIcon className="text-red-900 size-6 hover:text-red-600" />
    </button>
  );
}

export default LogOut;
