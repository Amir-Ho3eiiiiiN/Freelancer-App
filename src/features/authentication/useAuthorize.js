import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  let isAuthorize = false;
  // if (pathname.includes("owner")) {
  //   if (user && user.role === "OWNER") isAuthorize = true;
  // }
  // if (pathname.includes("freelancer")) {
  //   if (user && user.role === "FREELANCER") isAuthorize = true;
  // }
  // if (pathname.includes("admin")) {
  //   if (user && user.role === "ADMIN") isAuthorize = true;
  // }

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorize = true;
  }

  if (user && user.role === "ADMIN") isAuthorize = true;

  return { isLoading, isAuthenticated, isAuthorize, user, isVerified };
}
