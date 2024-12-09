import { NavLink } from "react-router-dom";

export function CustomNavlink({ to, children }) {
  const navLinkClass =
    "flex items-center gap-2 px-4 py-1 transition-all rounded-md hover:bg-primary-100/50 hover:text-primary-900";
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100/80 text-primary-900`
            : `${navLinkClass} text-secondary-600`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
