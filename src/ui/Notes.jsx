import styled from "styled-components";
import Search from "./Search";
import Sort from "./Sort";
import Note from "./Note";

import EmptyNotes from "../../public/no-notes.png";
import { useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import Modal from "./Modal";
import Button, { Buttons } from "./Button";
import Heading from "./Heading";

import { useSearchParams } from "react-router-dom";
import { handleInput } from "../utils/helpers";

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
  overflow-y: scroll;

  .active {
    color: var(--white);
  }
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

function Notes({
  data,
  isOpenModal,
  setIsOpenModal,
  openNote,
  setOpenNote,
  updateNotes,
  setActiveNote,
  activeNote,
  onDelete,
}) {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState("");

  // Filter data with partial matches
  const filteredNotes = data.filter((note) => {
    if (!filter) return true; // No filter applied
    return (
      note.name.toString().toLowerCase().includes(filter.toLowerCase()) ||
      note.bookingID.toString().toLowerCase().includes(filter.toLowerCase()) ||
      note.caseNum.toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  // Sort
  const sortBy = searchParams.get("sort") || "date-asc";
const [field, direction] = sortBy.split("-");

const modifier = direction === "asc" ? 1 : -1;
const sortedNotes = [...filteredNotes].sort((a, b) => {
  if (field === "deadline") {
    // For deadline, handle notes without a deadline
    const aDeadline = a[field] ? new Date(a[field]).getTime() : Infinity;
    const bDeadline = b[field] ? new Date(b[field]).getTime() : Infinity;

    return (aDeadline - bDeadline) * modifier;
  } else if (typeof a[field] === "string" && typeof b[field] === "string") {
    return a[field].localeCompare(b[field]) * modifier;
  } else {
    return (a[field] - b[field]) * modifier;
  }
});

  function handleSetOpenNote(note) {
    setOpenNote(note);
    setActiveNote(note.name);
  }

  return (
    <>
      <StyledNotes>
        {sortedNotes.length === 0 ? (
          <>
            {filter && (
              <Filter>
                <Sort />
                <Search value={filter} onChange={(e) => handleInput(e, setFilter)} />
              </Filter>
            )}
            <NoRecords>
              <img src={EmptyNotes} alt="no notes"></img>
              {!filter ? <span>
                Every great idea starts with a note. <br />
                Add yours now!
              </span> : <span>You filtered too much!</span>}
            </NoRecords>
          </>
        ) : (
          <>
            <Filter>
              <Sort />
              <Search value={filter} onChange={(e) => handleInput(e, setFilter)} />
            </Filter>
            {sortedNotes.map((note) => (
              <Note
                key={note.name}
                data={note}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                isActive={note.name === activeNote}
                onClick={() => handleSetOpenNote(note)}
                onDelete={() => setIsOpenModal(true)}
                filter={filter}
              />
            ))}
          </>
        )}
      </StyledNotes>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <Heading weight="w300">Are you sure?</Heading>
          <Buttons>
            <Button onClick={onDelete}>delete</Button>
            <Button variation="danger" onClick={() => setIsOpenModal(false)}>
              cancel
            </Button>
          </Buttons>
        </Modal>
      )}
    </>
  );
}

export default Notes;
