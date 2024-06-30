import styled from "styled-components";
import Search from "./Search";
import Sort from "./Sort";
import Note from "./Note";

import EmptyNotes from "../../public/no-notes.png";

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

const NoRecords = styled.p`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--black-900);
  text-align: center;
  gap: 2rem;
  font-size: 2rem;

  span {
    font-family: "Pacifico", cursive;
  }
`;

function Notes({ data }) {
  return (
    <>
      <StyledNotes>
        {data.length === 0 ? (
          <NoRecords>
            <img src={EmptyNotes}></img>
            <span>
              Every great idea starts with a note. <br />
              Add yours now!
            </span>
          </NoRecords>
        ) : (
          <>
            <Filter>
              <Sort />
              <Search />
            </Filter>
            {data.map((note) => (
              <Note key={note.name} data={note}>
                {" "}
              </Note>
            ))}
          </>
        )}
      </StyledNotes>
    </>
  );
}

export default Notes;
