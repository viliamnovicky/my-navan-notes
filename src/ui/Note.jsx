import styled from "styled-components";
import Button from "./Button";
import Edit from "../../public/edit.svg";
import Add from "../../public/add-white.svg";
import Delete from "../../public/delete.svg";
import { formatDate, formatDateAndTime } from "../utils/helpers";

const Hover = styled.div`
  z-index: 0;
  transition: all 0.2s;
  background: red;
  border-radius: 2rem;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
  width: 30rem;
  height: 100%;
  position: absolute;
  bottom: -2rem;
  left: -30rem;
  background: linear-gradient(87.87deg, #fb4b37, #a733ff);
`;

const Info = styled.div`
  display: flex;
  transition: all 0.2s;
  flex-direction: column;
  justify-content: space-between;
  background-position: 0px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const StyledNote = styled.div`
  background: var(--white);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 15rem;

  &:hover {
    background: var(--gray-50);
  }

  &:active {
    color: var(--white);
  }

  &:active ${Hover} {
    left: 0;
    bottom: 0;
  }

  img {
    width: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 2rem;
  padding-left: 1rem;
`;

const Case = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  padding: 0 0 1rem 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
`;

const Date = styled.p`
  padding: 1rem 0 0 1rem;
`;

const Id = styled.p`
  padding-left: 1rem;
`

function Note({ data, onClick }) {
  
  return (
    <StyledNote onClick={onClick}>
      <Info>
        <Date>{formatDateAndTime.format(data.date)}</Date>
        <Name>{data.name}</Name>
        <Id>{data.bookingID}</Id>
        <Case>{data.caseNum}</Case>
      </Info>
      <Hover />

      <Buttons>
        <Button variation="secondary" size="dot">
          <img src={Delete}></img>
        </Button>
        {/* <Button variation="green" size="dot">
          <img src={Add}></img>
        </Button> */}
        {/* <Button variation="light" size="dot">
          <img src={Edit}></img>
        </Button> */}
      </Buttons>
    </StyledNote>
  );
}

export default Note;
