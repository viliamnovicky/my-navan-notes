import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateLocalStorage } from '../utils/localStorageUtils';

export const useAddObject = (list, storageKey) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (newObject) => {
        const updatedList = [...list, newObject];
        updateLocalStorage(storageKey, updatedList);
        return updatedList;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [storageKey] });
      }
    });
  };
  
  export const useUpdateObject = (list, storageKey) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ index, updatedObject }) => {
        const updatedList = list.map((item, i) => (i === index ? updatedObject : item));
        updateLocalStorage(storageKey, updatedList);
        return updatedList;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [storageKey] });
      }
    });
  };
  
  export const useRemoveObject = (list, storageKey) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        updateLocalStorage(storageKey, updatedList);
        return updatedList;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [storageKey] });
      }
    });
  };