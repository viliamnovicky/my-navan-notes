import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTemplate } from "../utils/api"; // Import the function to add a template

// Custom hook to add a new template
const useAddTemplate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTemplate,  // Function that performs the mutation (adding template)
    onSuccess: () => {
      // After the mutation is successful, we refetch the templates data
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
    onError: (err) => {
      console.error("Error adding template:", err);
    },
  });

  return {
    handleAddTemplate: mutation.mutateAsync, // This is the function to call the mutation
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};

export default useAddTemplate;
