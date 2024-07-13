export const formatDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour12: false,
});

export const formatDateAndTime = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function deleteObjectByKey(list, key) {
  return list.filter((item) => !item[key]);
}

export function setUrgency(date) {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const differenceInMs = new Date(date) - Date.now();
  const differenceInDays = differenceInMs / oneDay;

  let status = "";

  if (differenceInDays >= 5) {
    status = "low";
  } else if (differenceInDays < 5 && differenceInDays > 1) {
    status = "medium";
  } else if (differenceInDays <= 1 && differenceInDays >= 0) {
    status = "urgent";
  } else if (differenceInDays < 0) {
    status = "past";
  }

  return status;
}

export function handleInput(e, setState) {
  setState(e.target.value);
}

// Helper function to wrap matched text
export function highlightText(text, highlight) {
  if (!highlight) return text;
  
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} style={{ background: "var(--purple-400)", color: "var(--purple-50"}}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
