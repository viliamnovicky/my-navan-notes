import { useQuery } from '@tanstack/react-query';
import { fetchListFromLocalStorage } from '../utils/localStorageUtils';


// Query to fetch the list from localStorage
export const useFetchList = (storageKey) => {
    return useQuery({
      queryKey: [storageKey],  // The query key
      queryFn: () => fetchListFromLocalStorage(storageKey),  // The query function
      staleTime: Infinity,  // Time the data remains fresh
      cacheTime: Infinity   // Time the data remains in the cache
    });
  };