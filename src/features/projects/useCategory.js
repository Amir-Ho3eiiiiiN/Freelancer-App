import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../../services/CategoryServices";
import toast from "react-hot-toast";

export default function useCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategoryApi,
    retry: false,
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    // refetchOnReconnect:true,
    // refetchOnWindowFocus : true
  });
  const { categories: rawCategories = [] } = data || {};
  const categories = rawCategories.map((cat) => ({
    lable: cat.title,
    value: cat._id,
  }));
  const transformCategories = rawCategories.map((cat) => ({
    lable: cat.title,
    value: cat.englishTitle,
  }));
  return { isLoading, categories, transformCategories };
}
