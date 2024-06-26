import styled from "styled-components";
import Search from "./Search";
import Sort from "./Sort";
import Note from "./Note";

const StyledNotes = styled.div`
  width: calc(25vw + 1rem);
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  left: 2rem;
  transform: translateY(-50%);
  top: calc(50% + 4rem);
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

const Filter = styled.div`
  background: var(--white);
  padding: 2rem;
  box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 5;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

function Notes({ data }) {
  return (
    <>
      <StyledNotes>
        <Filter>
          <Sort />
          <Search />
        </Filter>

        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
        <Note data={data} />
      </StyledNotes>
    </>
  );
}

export default Notes;
