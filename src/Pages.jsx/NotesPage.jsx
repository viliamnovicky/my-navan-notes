import { useState } from "react";
import toast from "react-hot-toast";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import FullNote from "../ui/FullNote";
import NewNote from "../ui/NewNote";
import Notes from "../ui/Notes";

function NotesPage() {
  const [notes, setNotes] = useLocalStorageState([], "notes");
  const [openNote, setOpenNote] = useState("");
  const [activeNote, setActiveNote] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");
  const [caseNum, setCaseNum] = useState("");
  const [bookingID, setBookingID] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [note, setNote] = useState("");

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [update, setUpdate] = useState(false);

  const addNewNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  function updateNote(oldName, data) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.name === oldName ? { ...note, ...data } : note))
    );
    console.log(data);
  }

  function updateNotes(updatedNotes) {
    setNotes(updatedNotes);
  }

  function handleCloseNote() {
    setOpenNote("");
    setActiveNote(null);
  }

  function handleOpenNoteForUpdate(openNote) {
    setName(openNote.name);
    setOldName(openNote.name);
    setDeadline(openNote.deadline);
    setCaseNum(openNote.caseNum);
    setBookingID(openNote.bookingID);
    setNote(openNote.note);
    setIsOpenForm(true);
    setUpdate(true);
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
    <>
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
    </>
  );
}

export default NotesPage;
