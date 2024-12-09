import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useOwnerProject() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
    retry: false,
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    // refetchOnReconnect:true,
    // refetchOnWindowFocus : true
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
