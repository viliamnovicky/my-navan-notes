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
import toast from "react-hot-toast";
import useTemplates from "../hooks/useTemplates";
import useAddTemplate from "../hooks/useAddTemplate";
import useDeleteTemplate from "../hooks/useDeleteTemplate";
import { useUpdateTemplate } from "../hooks/useUpdateTemplate";

const NoRecords = styled.p`
  width: 100%;
  height: 60rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
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

  img {
    height: 100%;
    width: auto;

    @media (max-width: 1365px) {
    width: 100%;
    height: auto;
  }
  }
`;

const StyledTemplates = styled.div`
  width: 100%;
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

  @media (max-width: 1365px) {
    width: 100% !important;
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
  width: 80rem;
  height: auto;

  @media (max-width: 1365px) {
    width: 100%;
  }
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
  padding-left: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 1365px) {
    width: 100%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
`;

function Templates() {
  const [searchParams] = useSearchParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [filter, setFilter] = useState("");
  const { templates, isLoading, error } = useTemplates(); // Fetch templates
  const { handleAddTemplate, isLoading: addingLoading, error: addError } = useAddTemplate();
  const { mutate: deleteTemplate } = useDeleteTemplate(); // Use the delete mutation
  const { mutate: updateTemplate, isLoading: isUpdating } = useUpdateTemplate();

  function handleOpenModal(data) {
    (setIsOpenModal(true), console.log(isOpenModal));
    setUpdate(true);
    setName(data.name);
    setOldName(data.name);
    setText(data.text);
  }

  const handleDeleteTemplate = async (name) => {
    try {
      deleteTemplate(name);
    } catch (error) {
      console.error("Error deleting template:", error);
    }
  };

  function handleUpdate(e) {
    e.preventDefault(); // Prevents page reload
    if (!name.trim() || !text.trim()) {
      toast.error("Template name and text cannot be empty.");
      return;
    }

    updateTemplate(
      { name: oldName, updatedName: name, updatedText: text },
      {
        onSuccess: () => {
          toast.success("Template updated successfully!");
          reset();
        },
        onError: (error) => {
          console.error("Update error:", error);
          toast.error("Failed to update template.");
        },
      },
    );
  }

  const newTemplate = {
    name,
    text: text.replace(/\r?\n/g, "\n"), // Ensures newlines are saved correctly
  };

  function reset() {
    setName("");
    setOldName("");
    setText("");
    setIsOpenModal(false);
    setUpdate(false);
  }

  function createNewTemplate() {
    handleAddTemplate(newTemplate);
    toast.success("New Template Created 🎉");
    reset();
  }

  if (isLoading) {
    return <div>Loading templates...</div>;
  }

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
                  <Button onClick={() => setIsOpenModal(true)}>Add template</Button>
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
        <Modal setIsOpenModal={setIsOpenModal} setUpdate={setUpdate} update={update}>
          <Heading weight="w300">
            {update === true ? "Update template" : "Add new template"}
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
              <Text
                id="note-name"
                value={text}
                placeholder="Template"
                onChange={(e) => handleInput(e, setText)}
                autoComplete="off" // Disable autocomplete
                rows={10}
              ></Text>
              <Label for="note-name">Template</Label>
            </FormGroup>
            <Buttons>
              <Button onClick={update ? handleUpdate : createNewTemplate}>save</Button>
              <Button variation="danger" onClick={reset}>
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
