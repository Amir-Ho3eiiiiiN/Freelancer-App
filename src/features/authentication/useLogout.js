import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authService";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { isPending, logout };
}
