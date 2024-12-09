import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectService";

export default function useProject() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["project",id],
    queryFn: () => getProjectApi(id),
    retry: false,
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    // refetchOnReconnect:true,
    // refetchOnWindowFocus : true
  });
  const { project } = data || {};
  return { isLoading, project };
} 
