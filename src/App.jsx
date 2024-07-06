
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HoursCount from "./ui/HoursCount";
import Header from "./ui/Header";
import Logo from "./ui/Logo";
import Notes from "./ui/Notes";
import FullNote from "./ui/FullNote"
import NewNote from "./ui/NewNote"
import { useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import Modal from "./ui/Modal";

// Create a new Query Client with default options if needed
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      retry: 1, // Retry failed requests once
    },
  },
});

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [notes, setNotes] = useLocalStorageState([], "notes");
  const [openNote, setOpenNote] = useState("")
  const [activeNote, setActiveNote] = useState(null);
  
  const addNewNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  function updateNotes(updatedNotes) {
    setNotes(updatedNotes)
  }

  function handleCloseNote() {
    setOpenNote("")
    setActiveNote(null)
  }


  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <Logo />
        <HoursCount />
      </Header>
      <Notes data={notes} setOpenNote={setOpenNote} updateNotes={updateNotes} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} setActiveNote={setActiveNote} activeNote={activeNote}/>
      <FullNote data={openNote} onClose={handleCloseNote} allNotes={notes}/>
      <NewNote addNewNote={addNewNote}/>
    </QueryClientProvider>
  );
}

export default App;
