import styled from "styled-components";
import Heading from "./Heading";
import { Form, Label, Input, FormGroup, Text, Select } from "./Form";
import Button, { Buttons } from "./Button";

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

  ${Buttons} {
    padding-bottom: 2rem;
  }
`;

function NewNote() {
  return (
    <StyledNewNote>
      <Heading weight="w400" size="large">
        create new note
      </Heading>
      <Form>
        <FormGroup>
          <Select id="priority" autoComplete="NO-FUCKING-WAY" placeholder="Priority">
            <option>Low</option>
            <option>Medium</option>
            <option>Hight</option>
            <option>No priority</option>
          </Select>
          <Label for="priority">Priority</Label>
        </FormGroup>
        <FormGroup>
          <Input id="name" autoComplete="NO-FUCKING-WAY" placeholder="Name"></Input>
          <Label for="name">Name</Label>
        </FormGroup>
        <FormGroup>
          <Input id="Case" autoComplete="NO-FUCKING-WAY" placeholder="Case Num"></Input>
          <Label for="Case">Case Num</Label>
        </FormGroup>
        <FormGroup>
          <Input id="Booking_id" autoComplete="NO-FUCKING-WAY" placeholder="Booking ID"></Input>
          <Label for="Booking_id">Booking ID</Label>
        </FormGroup>
        <FormGroup>
          <Text rows="15" id="Booking_id" autoComplete="NO-FUCKING-WAY" placeholder="Your Note"></Text>
        </FormGroup>
      </Form>
      <Buttons>
        <Button variation="green">Create Note</Button>
        <Button variation="danger">Cancel</Button>
      </Buttons>
    </StyledNewNote>
  );
}

export default NewNote;
