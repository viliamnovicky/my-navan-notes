import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteTemplate } from "../utils/api"; // Adjust path as necessary

// Custom hook to delete a template from Firestore
const useDeleteTemplate = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
      mutationFn: deleteTemplate,
      onSuccess: () => {
        toast.success("Template deleted successfully 🎉");
        queryClient.invalidateQueries({ queryKey: ['templates'] });

      },
      onError: (error) => {
        toast.error(`Error deleting template: ${error.message}`);
      },
    });
  
    return mutation;
  };
  
  export default useDeleteTemplate;
