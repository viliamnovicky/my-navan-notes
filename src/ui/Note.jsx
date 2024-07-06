import styled from "styled-components";
import Button from "./Button";
import Edit from "../../public/edit.svg";
import Add from "../../public/add-white.svg";
import Delete from "../../public/delete.svg";
import { deleteObjectByKey, formatDate, formatDateAndTime } from "../utils/helpers";
import Modal from "./Modal";

const Hover = styled.div`
  z-index: 0;
  height: 100%;
  position: absolute;
  animation: active-note 0.2s forwards;
  background: linear-gradient(87.87deg, #fb4b37, #a733ff);
`;

const Info = styled.div`
  display: flex;
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
  z-index: 1;
  background: var(--white);
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  position: absolute;
  right: -5rem;
  bottom: -4rem;

  ${Button} {
    position: absolute;
    right: 7rem;
    bottom: 6rem;
  }
`;

const Date = styled.p`
  padding: 1rem 0 0 1rem;
`;

const Id = styled.p`
  padding-left: 1rem;
`;

const Message = styled.p`
  color: var(--black-900);
`;

function Note({ data, onClick, onDelete, isActive, isOpenModal, setIsOpenModal }) {
  function handleDelete(data, name) {
    deleteObjectByKey(data, name);
  }

  return (
    <>
      <StyledNote onClick={onClick} className={isActive ? "active" : ""}>
        <Info>
          <Date>{formatDateAndTime.format(data.date)}</Date>
          <Name>{data.name}</Name>
          <Id>{data.bookingID}</Id>
          <Case>{data.caseNum}</Case>
        </Info>
        {isActive && <Hover />}

        <Buttons>
          <Button variation="secondary" size="dot" onClick={onDelete}>
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
      {/* {isOpenModal && (
        <Modal>
          <Message>Are you sure?</Message>
        </Modal>
      )} */}
    </>
  );
}

export default Note;
