import { Children } from "react";
import styled from "styled-components";
import Note from "./Note";
import Button from "./Button";
import arrowDown from "../public/arrow-down.svg" 
import arrowUp from "../public/arrow-up.svg" 

const StyledNotes = styled.div`
  width: 25vw;
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  left: 2rem;
  transform: translateY(-50%);
  top: calc(50% + 4rem);
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

const Filter = styled.div`
  height: 10rem;
  width: 100%;
  position: sticky;
  z-index: 5;
  background: var(--white);
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  top: 0;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  img {
    height: 1.6rem;
    padding-left: 1rem;
  }
`;

function Notes({ data }) {
  return (
    <>
      <StyledNotes>
        <Filter>
          <Button variation="light">Date <img src={arrowDown}></img></Button>
          <Button variation="primary">Date <img src={arrowUp}></img></Button>
          <Button variation="light">Priority <img src={arrowDown}></img></Button>
          <Button variation="light">Priority <img src={arrowUp}></img></Button>
        </Filter>
        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
      </StyledNotes>
    </>
  );
}

export default Notes;
