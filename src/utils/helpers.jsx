import toast from "react-hot-toast";

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

export function copyText(element, value) {
  // Check if the element is valid and has text content
  if (element && element.textContent) {
    // Create a temporary textarea element to hold the text to be copied
    const tempTextArea = document.createElement('textarea');
    
    // Set the textarea's value to the element's text content
    tempTextArea.value = element.textContent;
    
    // Append the textarea to the document body (it needs to be in the DOM to copy)
    document.body.appendChild(tempTextArea);
    
    // Select the text inside the textarea
    tempTextArea.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the textarea from the document
    document.body.removeChild(tempTextArea);
    toast.success(`${value} copied to clippboard`)
  }
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
