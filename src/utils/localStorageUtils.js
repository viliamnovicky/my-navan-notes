// Utility function to fetch list from localStorage
export const fetchListFromLocalStorage = async (storageKey) => {
    const storedList = localStorage.getItem(storageKey);
    return storedList ? JSON.parse(storedList) : [];
  };
  
  // Utility function to update localStorage
  export const updateLocalStorage = (storageKey, newList) => {
    localStorage.setItem(storageKey, JSON.stringify(newList));
  };