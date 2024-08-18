import HoursCount from "./ui/HoursCount";
import Header from "./ui/Header";
import Logo from "./ui/Logo";
import Notes from "./ui/Notes";
import FullNote from "./ui/FullNote";
import NewNote from "./ui/NewNote";
import { useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import Modal from "./ui/Modal";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useLocalStorageState([], "notes");
  const [openNote, setOpenNote] = useState("");
  const [activeNote, setActiveNote] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("")
  const [caseNum, setCaseNum] = useState("");
  const [bookingID, setBookingID] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [note, setNote] = useState("");

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [update, setUpdate] = useState(false)

  const addNewNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  function updateNote(oldName, data) {
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.name === oldName ? { ...note, ...data } : note
      )
    );
    console.log(data)
  }

  function updateNotes(updatedNotes) {
    setNotes(updatedNotes);
  }

  function handleCloseNote() {
    setOpenNote("");
    setActiveNote(null);
  }

  function handleOpenNoteForUpdate(openNote) {
    setName(openNote.name)
    setOldName(openNote.name)
    setDeadline(openNote.deadline)
    setCaseNum(openNote.caseNum)
    setBookingID(openNote.bookingID)
    setNote(openNote.note)
    setIsOpenForm(true)
    setUpdate(true)
  }

  function handleDeleteNote(name) {
    const updatedData = notes.filter((note) => note.name !== name);
    updateNotes(updatedData);
    toast.success("Note Deleted 🎈", {
      style: {
        backgroundColor: "var(--red-50)",
        color: "var(--red-400)",
      },
    });

    setIsOpenModal(false);
    setOpenNote("");
  }

  return (
    <BrowserRouter>
      <Header>
        <Logo />
        <HoursCount />
      </Header>
      <Notes
        data={notes}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        openNote={openNote}
        setOpenNote={setOpenNote}
        updateNotes={updateNotes}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
        onDelete={() => handleDeleteNote(openNote.name)}
        onEdit={() => handleOpenNoteForUpdate(openNote)}
        setIsOpenForm={setIsOpenForm}
        setUpdate={setUpdate}
        setName={setName}
        setDeadline={setDeadline}
        setCaseNum={setCaseNum}
        setBookingID={setBookingID}
        setNote={setNote}
      />
      <FullNote
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        data={openNote}
        onClose={handleCloseNote}
        allNotes={notes}
        onDelete={() => handleDeleteNote(openNote.name)}
        setUpdate={setUpdate}
        onEdit={() => handleOpenNoteForUpdate(openNote)}

      />
      <NewNote
        addNewNote={addNewNote}
        setActiveNote={setActiveNote}
        setOpenNote={setOpenNote}
        isOpenForm={isOpenForm}
        setIsOpenForm={setIsOpenForm}
        update={update}
        setUpdate={setUpdate}
        name={name}
        setName={setName}
        deadline={deadline}
        setDeadline={setDeadline}
        caseNum={caseNum}
        setCaseNum={setCaseNum}
        bookingID={bookingID}
        setBookingID={setBookingID}
        note={note}
        setNote={setNote}
        notes={notes}
        setNotes={setNotes}
        updateNote={updateNote}
        oldName={oldName}
      />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1500,
            style: {
              backgroundColor: "var(--green-50)",
              color: "var(--green-700)",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "var(--red-50)",
              color: "var(--red-700)",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
