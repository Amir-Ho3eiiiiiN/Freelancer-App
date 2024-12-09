import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {!isDarkMode ? (
        <SunIcon className="text-yellow-400 size-6 hover:text-yellow-700" />
      ) : (
        <MoonIcon className="text-secondary-300 size-6 hover:text-secondary-400" />
      )}
    </button>
  );
}

export default DarkModeToggle;
