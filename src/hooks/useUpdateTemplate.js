import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTemplate } from "../utils/api"; // Adjust the path if needed

export function useUpdateTemplate() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async ({ name, updatedName, updatedText }) => {
        console.log(`useUpdateTemplate() triggered with:`, { name, updatedName, updatedText }); // Debugging step
        await updateTemplate(name, updatedName, updatedText);
      },
      onSuccess: () => {
        console.log("onSuccess: React Query mutation succeeded!"); // Debugging step
        queryClient.invalidateQueries({ queryKey: ["templates"] });
      },
      onError: (error) => {
        console.error("Mutation Error:", error);
      },
    });
  }
