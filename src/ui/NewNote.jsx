import styled from "styled-components";
import Heading from "./Heading";
import NewCCA from "./NewCCA";
import { Form, Label, Input, FormGroup, Text, Select } from "./Form";
import Button, { Buttons } from "./Button";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import NewNoteImage from "../../public/new-note.png";
import toast from "react-hot-toast";
import { handleInput } from "../utils/helpers";

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

function NewNote({
  addNewNote,
  setActiveNote,
  setOpenNote,
  isOpenForm,
  setIsOpenForm,
  onUpdate,
  update,
  setUpdate,
  name,
  setName,
  caseNum,
  setCaseNum,
  bookingID,
  setBookingID,
  deadline,
  setDeadline,
  note,
  setNote,
  updateNote,
  oldName,
}) {
  const [isOpenCCAForm, setIsOpenCCAForm] = useState(false);

  const [guestName, setGuestName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [expNumber, setExpNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [charges, setCharges] = useState([])

  const [notes, setNotes] = useLocalStorageState([], "notes");

  function reset() {
    setName("");
    setCaseNum("");
    setBookingID("");
    setDeadline(null);
    setNote("");
    setIsOpenForm(false);
    setUpdate(false);
  }

  const newNoteObject = {
    name,
    caseNum: caseNum.toUpperCase(),
    bookingID,
    deadline,
    note,
    date: Date.now(),
  };

  function handleUpdateNote() {
    updateNote(oldName, newNoteObject);
    localStorage.setItem("notes", JSON.stringify(notes));
    toast.success("New Note Updated 🎉");
    setIsOpenForm(false);
    setUpdate(false);
    setActiveNote(name);
    setOpenNote(newNoteObject);
    reset();
  }

  function createNewNote() {
    notes.push(newNoteObject);
    localStorage.setItem("notes", JSON.stringify(notes));
    addNewNote(newNoteObject);
    toast.success("New Note Created 🎉");
    setActiveNote(name);
    setOpenNote(newNoteObject);
    reset();
  }

  if (!isOpenForm && !isOpenCCAForm)
    return (
      <StyledNewNote>
        <OpenForm>
          <Image src={NewNoteImage}></Image>
          <Buttons>
            <Button size="large" onClick={() => setIsOpenForm(true)}>
              create new note
            </Button>
            <Button size="large" onClick={() => setIsOpenCCAForm(true)}>
              create CCA form
            </Button>
          </Buttons>
        </OpenForm>
      </StyledNewNote>
    );

  if (isOpenCCAForm) {
    return (
      <StyledNewNote>
        <Heading weight="w400" size="large">
          create new cca form
        </Heading>
        <NewCCA
          expNumber={expNumber}
          setExpNumber={setExpNumber}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cvc={cvc}
          setCvc={setCvc}
          cardName={cardName}
          setCardName={setCardName}
          companyAddress={companyAddress}
          setCompanyAddress={setCompanyAddress}
          confirmation={confirmation}
          setConfirmation={setConfirmation}
          guestName={guestName}
          setGuestName={setGuestName}
          hotelName={hotelName}
          setHotelName={setHotelName}
          arrival={arrival}
          setArrival={setArrival}
          departure={departure}
          setDeparture={setDeparture}
          companyName={companyName}
          setCompanyName={setCompanyName}
          taxId={taxId}
          setTaxId={setTaxId}
          setIsOpenCCAForm={setIsOpenCCAForm}
          charges={charges}
          setCharges={setCharges}
        />
      </StyledNewNote>
    );
  }

  return (
    <StyledNewNote>
      <Heading weight="w400" size="large">
        {update ? "update note" : "create new note"}
      </Heading>
      <Form>
        <FormGroup>
          <Input
            id="note-name"
            value={name}
            placeholder="Name"
            onChange={(e) => handleInput(e, setName)}
            autoComplete="off" // Disable autocomplete
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
            autoComplete="off" // Disable autocomplete
          ></Input>
          <Label for="deadline">Deadline</Label>
        </FormGroup>

        <FormGroup>
          <Input
            id="Case"
            placeholder="Case Num"
            value={caseNum}
            onChange={(e) => handleInput(e, setCaseNum)}
            autoComplete="off" // Disable autocomplete
          ></Input>
          <Label for="Case">Case Num</Label>
        </FormGroup>
        <FormGroup>
          <Input
            id="Booking_id"
            placeholder="Booking ID"
            value={bookingID.toUpperCase()}
            onChange={(e) => handleInput(e, setBookingID)}
            autoComplete="off" // Disable autocomplete
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
            autoComplete="off" // Disable autocomplete
          ></Text>
        </FormGroup>
      </Form>
      <Buttons>
        {update ? (
          <Button variation="green" onClick={handleUpdateNote}>
            Update Note
          </Button>
        ) : (
          <Button variation="green" onClick={() => createNewNote()}>
            Create Note
          </Button>
        )}
        <Button variation="danger" onClick={() => reset()}>
          Cancel
        </Button>
      </Buttons>
    </StyledNewNote>
  );
}

export default NewNote;
