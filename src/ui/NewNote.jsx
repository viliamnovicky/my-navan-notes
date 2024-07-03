import styled from "styled-components";
import Heading from "./Heading";
import { Form, Label, Input, FormGroup, Text, Select } from "./Form";
import Button, { Buttons } from "./Button";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import NewNoteImage from "../../public/new-note.png";

const StyledNewNote = styled.div`
  background: var(--white);
  width: 25vw;
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  right: 2rem;
  transform: translateY(-50%);
  top: calc(50% + 4rem);
  overflow-y: auto;
  padding-left: 1.5rem;

  ${Buttons} {
    padding-bottom: 2rem;
  }
`;

const OpenForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  /* position: absolute;;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%); */
`;

function NewNote({ addNewNote }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [caseNum, setCaseNum] = useState("");
  const [bookingID, setBookingID] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [note, setNote] = useState("");

  const [notes, setNotes] = useLocalStorageState([], "notes");

  function reset() {
    setName("");
    setCaseNum("");
    setBookingID("");
    setPriority("");
    setDeadline(null);
    setNote("");
    setIsOpenForm(false);
  }

  function createNewNote() {
    const newNoteObject = {
      name,
      caseNum,
      bookingID,
      priority,
      deadline,
      note,
      date: Date.now(),
    };
    console.log(newNoteObject);
    notes.push(newNoteObject);
    localStorage.setItem("notes", JSON.stringify(notes));
    addNewNote(newNoteObject);
    reset();
  }

  function handleInput(e, setState) {
    setState(e.target.value);
  }

  if (!isOpenForm)
    return (
      <StyledNewNote>
        <OpenForm>
          <Image src={NewNoteImage}></Image>
          <Button size="large" onClick={() => setIsOpenForm(true)}>
            create new note
          </Button>
        </OpenForm>
      </StyledNewNote>
    );

  return (
    <StyledNewNote>
      <Heading weight="w400" size="large">
        create new note
      </Heading>
      <Form>
        <FormGroup>
          <Input
            id="note-name"
            value={name}
            placeholder="Name"
            onChange={(e) => handleInput(e, setName)}
          ></Input>
          <Label for="note-name">Name</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="date"
            id="deadline"
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => handleInput(e, setDeadline)}
          ></Input>
          <Label for="deadline">Deadline</Label>
        </FormGroup>
        <FormGroup>
          <Select
            id="priority"
            placeholder="Priority"
            onChange={(e) => handleInput(e, setPriority)}
          >
            <option value="none">No priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="urgent">Urgent</option>
          </Select>
          <Label for="priority">Priority</Label>
        </FormGroup>
        <FormGroup>
          <Input
            id="Case"
            placeholder="Case Num"
            value={caseNum}
            onChange={(e) => handleInput(e, setCaseNum)}
          ></Input>
          <Label for="Case">Case Num</Label>
        </FormGroup>
        <FormGroup>
          <Input
            id="Booking_id"
            placeholder="Booking ID"
            value={bookingID}
            onChange={(e) => handleInput(e, setBookingID)}
          ></Input>
          <Label for="Booking_id">Booking ID</Label>
        </FormGroup>
        <FormGroup>
          <Text
            rows="15"
            id="Booking_id"
            placeholder="Your Note"
            value={note}
            onChange={(e) => handleInput(e, setNote)}
          ></Text>
        </FormGroup>
      </Form>
      <Buttons>
        <Button variation="green" onClick={() => createNewNote()}>
          Create Note
        </Button>
        <Button variation="danger" onClick={() => setIsOpenForm(false)}>
          Cancel
        </Button>
      </Buttons>
    </StyledNewNote>
  );
}

export default NewNote;
