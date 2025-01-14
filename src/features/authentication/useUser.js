import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    // refetchOnReconnect:true,
    // refetchOnWindowFocus : true
  });
  const { user } = data || {};
  return { isLoading, user };
}
