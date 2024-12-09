import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "..//services/projectService";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";

export default function useProject() {
  const { search } = useLocation();
  // const queryObject = queryString.parse(search);

  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
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
