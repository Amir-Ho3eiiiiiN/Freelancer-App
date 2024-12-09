import { UserIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "../features/authentication/LogOut";

function HeaderMenu() {
  return (
    <ul className="flex items-center justify-center gap-x-4">
      <li>
        <Link to="dashboard">
          <UserIcon className="size-6 text-primary-900 hover:text-primary-600" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <LogOut />
      </li>
    </ul>
  );
}

export default HeaderMenu;
