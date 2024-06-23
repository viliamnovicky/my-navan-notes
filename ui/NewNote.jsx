import styled from "styled-components";
import Heading from "./Heading";
import { Form, Label, Input, FormGroup, Text } from "./Form";
import Button from "./Button";

const StyledNewNote = styled.div`
  background: var(--white);
  width: 25vw;
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  right: 2rem;
  transform: translateY(-50%);
  top: calc(50% + 4rem);
`;

const Buttons = styled.div`
    display: flex;
    margin: auto;
    width: 100;
    justify-content: center;
    gap: 2rem;
`

function NewNote() {
  return (
    <StyledNewNote>
      <Heading weight="w400" size="large">
        create new note
      </Heading>
      <Form>
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
