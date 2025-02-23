import { useLocation } from "react-router-dom";
import { Input } from "./Form";

function Search({ value, onChange }) {
  const location = useLocation(); // Get the current route
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={`${
        location.pathname === "/templates"
          ? "Search by template name"
          : "Search by name, ID or Confirmation Num"
      }`}
    />
  );
}

export default Search;
