import toast from "react-hot-toast";
import { getProposalsApi } from "../../services/proposalService";
import { useQuery } from "@tanstack/react-query";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
    retry: false,
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  const { proposals } = data || {};

  return { isLoading, proposals };
}
