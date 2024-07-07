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
  const [isOpenModal, setIsOpenModal] = useState(false)

  const addNewNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  function updateNotes(updatedNotes) {
    setNotes(updatedNotes);
  }

  function handleCloseNote() {
    setOpenNote("");
    setActiveNote(null);
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

    setIsOpenModal(false)
    setOpenNote("")
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
      />
      <FullNote isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} data={openNote} onClose={handleCloseNote} allNotes={notes} onDelete={() => handleDeleteNote(openNote.name)}/>
      <NewNote addNewNote={addNewNote} setActiveNote={setActiveNote} setOpenNone={setOpenNote}/>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "var(--green-50)",
              color: "var(--green-400)",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "var(--red-50)",
              color: "var(--red-400)",
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
