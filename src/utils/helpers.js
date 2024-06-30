export const formatDate = new Intl.DateTimeFormat("en" , {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false
  });

  export const formatDateAndTime = new Intl.DateTimeFormat("en" , {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });