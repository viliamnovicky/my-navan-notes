import { useQuery } from "@tanstack/react-query";
import { getTemplates } from "../utils/api"; // Import the function to fetch templates

// Custom hook to fetch templates
const useTemplates = () => {
    const { data: templates, isLoading, error } = useQuery({
        queryKey: ['templates'],  // Query key (can be an array with the query name)
        queryFn: getTemplates,    // The function that fetches the data
        // Optional settings (e.g., caching, refetching behavior)
        refetchOnWindowFocus: false, // Disable refetch on window focus (can be true if you want it)
      });

  return {
    templates,
    isLoading,
    error,
  };
};

export default useTemplates;
