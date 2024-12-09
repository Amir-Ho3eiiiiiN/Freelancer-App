import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading, user } = useUser();
  return (
    <div className="px-8 py-4 shadow-lg bg-secondary-0">
      <div
        className={`container flex items-center justify-end xl:max-w-screen-lg gap-x-8
        ${isLoading ? "blur-sm opacity-50" : ""}
        `}
      >
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
