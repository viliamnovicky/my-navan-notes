import { Input } from "./Form";

function Search({value, onChange}) {
  return <Input value={value} onChange={onChange} placeholder="Search by name, ID or Confirmation Num" />;
}

export default Search;
