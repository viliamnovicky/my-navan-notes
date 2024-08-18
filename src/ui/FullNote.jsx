import styled from "styled-components";
import Heading from "./Heading";
import Tag from "./Tag";
import Wave from "../../public/wave.png";
import Button, { Buttons } from "./Button";
import { copyText, formatDate, formatDateAndTime, setUrgency } from "../utils/helpers";
import Modal from "./Modal";


const StyledFullNote = styled.div`
  background: var(--white);
  width: 45vw;
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: calc(50% + 4rem);
  padding: 4rem;
  overflow: hidden;

  ${Buttons} {
    margin-top: 5rem;
  }

  .empty {
    position: absolute;
    bottom: 10rem;
    right: 50%;
    transform: translateX(50%);
    width: 70%;
    opacity: 1;
    z-index: -1;
  }

  .notes {
    font-family: "Shadows Into Light Two", cursive;
    font-size: 2rem;
    padding: 0;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding-left: 5rem;
    padding-right: 1rem;
    text-align: left;
    position: relative;
    line-height: 2; /* Adjust line height to space out the lines */
    background: linear-gradient(to bottom, #f1f1f4, 1px, transparent 1px) repeat-y; /* Line color */
    background-size: 100% 4rem; /* Adjust to match the line height */
    margin: 0; /* Remove default margin to better control layout */
  
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      background: var(--red-400);
      left: 4rem;
    }

    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(100% - 4rem);
      background: var(--gray-50);
      left: 2rem;
      bottom: 0;
    }
  
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin: auto;
  padding: 3rem;
  background: var(--gray-50);
  border-radius: 2rem;
  margin-top: 2rem;
  animation: opacity 0.2s forwards;

  ${Heading} {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    width: 25rem;
    height: 6rem;
    margin-left: 0;
    padding: 1.5rem;
    border-radius: 2rem;
    width: 100%;
  }

  ${Heading}:nth-child(1),${Heading}:nth-child(3) {
    background: var(--white);
  }
`;

const Note = styled.div`
  margin-top: 2rem;
  max-height: 40%;
  overflow-x: auto;
`;

const Container = styled.div`
  width: 100;
  padding: 0 2rem;
`;

const Image = styled.img`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 30%;
  opacity: 0.1;
  z-index: -1;
  transition: all 0.2s;
`;

function FullNote({ data, onClose, allNotes, onDelete, isOpenModal, setIsOpenModal, setUpdate, onEdit}) {

  return (
    <>
    <StyledFullNote>
      <Heading size="large" weight="w400" font="curs" transform="none">
        {allNotes.length === 0 ? <span>Your Note Details Will Appear Here<br/>Go ahead and create your first one</span> : data.name ? data.name : <span>Your Note Details Will Appear Here<br/>"Click" On Some Note</span>}
        {data && (
          <Button variation="light" size="dot" use="cancel" onClick={onClose}>
            ✖
          </Button>
        )}
      </Heading>
      {data && (
        <Details>
          <Container>
            <Heading as="p" weight="w900">
              <Tag color="gradient">created </Tag>
              {data.date ? formatDateAndTime.format(data.date) : "??.??.????"}
            </Heading>
            <Heading as="p" weight="w900">
              <Tag color="gradient">deadline </Tag>
              {data.deadline ? formatDate.format(new Date(data.deadline)) : "no deadline"}
            </Heading>
            <Heading as="p" weight="w900">
              <Tag color="gradient">booking </Tag>
              {data.bookingID ? <Tag click="true" color="no_bg" size="large" onClick={(e) => copyText(e.target, "Bookind ID")}>{data.bookingID}</Tag> : "XXXXXX"}
            </Heading>
          </Container>
          <Container>
            <Heading as="p" weight="w900">
              priority
              <Tag color={data.deadline ? setUrgency(data.deadline) : "none"} size="medium">
              {data.deadline ? setUrgency(data.deadline) : "none"}
              </Tag>
            </Heading>
            <Heading as="p" weight="w900" />
            <Heading as="p" weight="w900">
              case num
              <Tag color="black" click="true" size="medium" onClick={(e) => copyText(e.target, "Case Number")}>
                {data.caseNum ? data.caseNum : "XXXXXXXX"}
              </Tag>
            </Heading>
          </Container>
        </Details>
      )}
      <Note>
        <Heading as="p" transform="none" className="notes" weight="w400">
          {data.note && data.note}
        </Heading>
      </Note>
      {data.note && (
        <Buttons>
          <Button onClick={onEdit}>Edit note</Button>
          <Button variation="danger" onClick={() => setIsOpenModal(true)}>Delete note</Button>
        </Buttons>
      )}
      <Image src={Wave} className={data.note ? "" : "empty"}></Image>
    </StyledFullNote>
    {isOpenModal && <Modal setIsOpenModal={setIsOpenModal}>
          <Heading weight="w300" >Are you sure?</Heading>
          <Buttons>
            <Button onClick={onDelete}>delete</Button>
            <Button variation="danger" onClick={() => setIsOpenModal(false)}>cancel</Button>
          </Buttons>
        </Modal>}
    </>
  );
}

export default FullNote;
