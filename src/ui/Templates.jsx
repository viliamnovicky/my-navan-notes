import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Sort from "./Sort";
import { Form, FormGroup, Input, Label, Text } from "./Form";
import Search from "./Search";
import { handleInput } from "../utils/helpers";
import EmptyTemplates from "../../public/no-notes.png";
import Template from "./Template";
import Modal from "./Modal";
import Heading from "./Heading";
import Button, { Buttons } from "./Button";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import toast from "react-hot-toast";

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
  border-radius: 2rem;

  span {
    font-family: "Pacifico", cursive;
  }
`;

const StyledTemplates = styled.div`
  max-width: 80rem;
  margin: auto;
  margin-top: 2rem;
  height: calc(100vh - 11rem);
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;

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
  border-radius: 2rem;
  width: 100%;
  height: auto;
`;

const TemplatesContainer = styled.div`
  max-width: 80rem;
  height: calc(100vh - 31rem);
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  padding-left: 2rem;

  @media screen and (max-width: 1000px) {
    padding-left: 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
`;

function Templates() {
  const [searchParams] = useSearchParams();
  const [templates, setTemplates] = useLocalStorageState([], "templates");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);

  function handleOpenModal(data) {
    setIsOpenModal(true), 
    console.log(isOpenModal);
    setUpdate(true);
    setName(data.name)
    setOldName(data.name)
    setText(data.text)
  }

  const newTemplate = { 
    name,
    text,
  }

  function updateTemplates(updatedTemplates) {
    setTemplates(updatedTemplates);
  }

  function reset() {
    setName("");
    setOldName("");
    setText(""); 
    setIsOpenModal(false);
    setUpdate(false);
  }

  function createNewTemplate() {
    templates.push(newTemplate);
    localStorage.setItem("templates", JSON.stringify(templates));
    toast.success("New Template Created 🎉");
    reset();
  }

  function updateTemplate(oldName, data) {
    setTemplates((prevTemplates) =>
      prevTemplates.map((temp) => (temp.name === oldName ? { ...temp, ...data } : temp))
    );
  }

  function handleDeleteTemplate(name) {
    const updatedData = templates.filter((template) => template.name !== name);
    updateTemplates(updatedData);
    toast.success("Template Deleted 🎈", {
      style: {
        backgroundColor: "var(--red-50)",
        color: "var(--red-400)",
      },
    });

    setIsOpenModal(false);
  }

  const data = [
    { name: ".providingPL", text: "Thank you for PL" },
    { name: ".wellNoted", text: "This is well noted" },
    {
      name: ".doNotAcceptCCA",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      name: ".payUponArrivalCustomer",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and  uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];

  const [filter, setFilter] = useState("");

  // Filter data with partial matches
  const filteredTemplates = templates.filter((temp) => {
    if (!filter) return true; // No filter applied
    return temp.name.toString().toLowerCase().includes(filter.toLowerCase());
  });

  // Sort
  const sortBy = searchParams.get("sort") || "date-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (field === "deadline") {
      // For deadline, handle Templates without a deadline
      const aDeadline = a[field] ? new Date(a[field]).getTime() : Infinity;
      const bDeadline = b[field] ? new Date(b[field]).getTime() : Infinity;

      return (aDeadline - bDeadline) * modifier;
    } else if (typeof a[field] === "string" && typeof b[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return (a[field] - b[field]) * modifier;
    }
  });

  return (
    <>
      <StyledTemplates>
        {sortedTemplates.length === 0 ? (
          <>
            {filter && (
              <Filter>
                <Sort />
                <Search value={filter} onChange={(e) => handleInput(e, setFilter)} />
              </Filter>
            )}
            <NoRecords>
              <img src={EmptyTemplates} alt="no templates"></img>
              {!filter ? (
                <>
                  <span>Add your first template</span>
                  <Button onClick={handleOpenModal}>Add template</Button>
                </>
              ) : (
                <span>You filtered too much!</span>
              )}
            </NoRecords>
          </>
        ) : (
          <>
            <Filter>
              <Sort />
              <Search value={filter} onChange={(e) => handleInput(e, setFilter)} />
            </Filter>
            <TemplatesContainer>
              {sortedTemplates.map((temp) => (
                <Template
                  key={temp.name}
                  templates={temp}
                  data={temp}
                  isOpenModal={isOpenModal}
                  setIsOpenModal={setIsOpenModal}
                  onUpdate={() => handleOpenModal(temp)}
                  onClick={() => handleDeleteTemplate(temp.name)}
                  filter={filter}
                />
              ))}
            </TemplatesContainer>
            <ActionButtons>
              <Button onClick={() => setIsOpenModal(true)}>Add Template</Button>
            </ActionButtons>
          </>
        )}
      </StyledTemplates>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal } setUpdate={setUpdate} update={update}>
          <Heading weight="w300">{update === true ? "Update template" : "Add new template"}</Heading>
          <Form>
            <FormGroup>
              <Input
                id="note-name"
                value={name}
                placeholder="Name"
                onChange={(e) => handleInput(e, setName)}
                autoComplete="off" // Disable autocomplete
                name="dummy" // Use a non-standard name
              ></Input>
              <Label for="note-name">Name</Label>
            </FormGroup>
            <FormGroup>
              <Text
                id="note-name"
                value={text}
                placeholder="Template"
                onChange={(e) => handleInput(e, setText)}
                autoComplete="off" // Disable autocomplete
                name="dummy" // Use a non-standard name
                rows={10}
              ></Text>
              <Label for="note-name">Template</Label>
            </FormGroup>
          <Buttons>
            <Button onClick={update ? () => updateTemplate(oldName, newTemplate) : createNewTemplate}>save</Button>
            <Button variation="danger" onClick={() => setIsOpenModal(false)}>
              cancel
            </Button>
          </Buttons>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default Templates;
