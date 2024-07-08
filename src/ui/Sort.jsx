import styled from "styled-components";
import Button, { Buttons } from "./Button";

import { useSearchParams } from "react-router-dom";

import dateDown from "../../public/date-down.svg";
import dateUp from "../../public/date-up.svg";
import dateDownActive from "../../public/date-down-active.svg";
import dateUpActive from "../../public/date-up-active.svg";
import nameAsc from "../../public/name-asc.svg";
import nameAscActive from "../../public/name-asc-active.svg";
import nameDesc from "../../public/name-desc.svg";
import nameDescActive from "../../public/name-desc-active.svg";
import deadlineDesc from "../../public/priority-desc.png";
import deadlineDescActive from "../../public/priority-desc-active.png";
import deadlineAsc from "../../public/priority-asc.png";
import deadlineAscActive from "../../public/priority-asc-active.png";
import { useState } from "react";

const StyledSort = styled.div`
  width: 100%;
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  img {
    height: 3rem;
  }
`;

function Sort({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "date-asc";
  const [activeFilterButton, setActiveFilterButton] = useState(sortBy)

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setActiveFilterButton(e.target.value)
    setSearchParams(searchParams);
  }

  return (
    <StyledSort>
      <Buttons amount="four">
      <Button variation={activeFilterButton !== "name-asc" ? "light" : "primary"} size="dot" value="name-asc" onClick={handleChange}>
        <img src={activeFilterButton !== "name-asc" ? nameAsc : nameAscActive}></img>
        </Button>
        <Button variation={activeFilterButton !== "name-desc" ? "light" : "primary"} size="dot" value="name-desc" onClick={handleChange}>
        <img src={activeFilterButton !== "name-desc" ? nameDesc : nameDescActive}></img>
        </Button>
        <Button variation={activeFilterButton !== "date-asc" ? "light" : "primary"} size="dot" value="date-asc" onClick={handleChange}>
          <img src={activeFilterButton !== "date-asc" ? dateDown : dateDownActive}></img>
        </Button>
        <Button variation={activeFilterButton !== "date-desc" ? "light" : "primary"} size="dot" value="date-desc" onClick={handleChange}>
        <img src={activeFilterButton !== "date-desc" ? dateUp : dateUpActive}></img>
        </Button>
        <Button variation={activeFilterButton !== "deadline-desc" ? "light" : "primary"} size="dot" value="deadline-desc" onClick={handleChange}>
           <img src={activeFilterButton !== "deadline-desc" ? deadlineAsc : deadlineAscActive}></img>
        </Button>
        <Button variation={activeFilterButton !== "deadline-asc" ? "light" : "primary"} size="dot" value="deadline-asc" onClick={handleChange}>
           <img src={activeFilterButton !== "deadline-asc" ? deadlineDesc : deadlineDescActive}></img>
        </Button>
        
      </Buttons>
      {children}
    </StyledSort>
  );
}

export default Sort;
