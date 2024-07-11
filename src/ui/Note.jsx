import styled from "styled-components";
import Button from "./Button";
import Delete from "../../public/delete.svg";
import Edit from "../../public/edit.svg";
import { formatDateAndTime, setUrgency } from "../utils/helpers";
import Tag from "./Tag";

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
  position: relative;

  ${Tag} {
    margin-left: 2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 2;
  }

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
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${Button}:last-child {
    margin-bottom: 5rem;
  }

  ${Button} {
    margin-right: 5rem;
    animation: opacity .2s forwards;
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
  console.log(data.deadline)
  console.log(setUrgency(data.deadline))
  return (
    <>
      <StyledNote onClick={onClick} className={isActive ? "active" : ""}>
          <Tag color={data.deadline ? setUrgency(data.deadline) : "none"} size="small">{data.deadline ? setUrgency(data.deadline) : "none"}</Tag>
        <Info>
          <Date>{formatDateAndTime.format(data.date)}</Date>
          <Name>{data.name}</Name>
          <Id>{data.bookingID}</Id>
          <Case>{data.caseNum}</Case>
        </Info>
        {isActive && <Hover />}

        {isActive && (
          <Buttons>
            <Button variation="light" size="dot">
              <img src={Edit}></img>
            </Button>
            <Button variation="secondary" size="dot" onClick={onDelete}>
              <img src={Delete}></img>
            </Button>
            {/* <Button variation="green" size="dot">
          <img src={Add}></img>
        </Button> */}
          </Buttons>
        )}
      </StyledNote>
    </>
  );
}

export default Note;
