import styled from "styled-components";
import Heading from "./Heading";
import Tag from "./Tag";
import Wave from "../../public/wave.png";
import Button, { Buttons } from "./Button";
import { formatDate, formatDateAndTime } from "../utils/helpers";

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
    bottom: 2rem;
    right: 50%;
    transform: translateX(50%);
    height: 70%;
    opacity: 1;
    z-index: -1;
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
  animation: opacity .2s forwards;

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
`

const Container = styled.div`
  width: 100;
  padding: 0 2rem;
`;

const Image = styled.img`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  height: 30%;
  opacity: 0.1;
  z-index: -1;
  transition: all 0.2s;
`;

function FullNote({ data, onClose }) {
  
  return (
    <StyledFullNote>
      <Heading size="large" weight="w400" font="curs" transform="none">
        {data.name ? data.name : "Your Note Details"}
        {data && <Button variation="light" size="dot" use="cancel" onClick={onClose}>×</Button>}
      </Heading>
      { data &&
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
            {data.bookingID ? data.bookingID : "XXXXXX"}
          </Heading>
        </Container>
        <Container>
          <Heading as="p" weight="w900">
            priority
            <Tag color={data.priority ? data.priority : "none"} size="medium">
              {data.priority ? data.priority : "none"}
            </Tag>
          </Heading>
          <Heading as="p" weight="w900" />
          <Heading as="p" weight="w900">
            case num
            <Tag color="black" size="medium">
              {data.caseNum ? data.caseNum : "XXXXXXXX"}
            </Tag>
          </Heading>
        </Container>
      </Details>
}
      <Note>
        <Heading as="p" transform="none">
          {data.note ? data.note : "Click on some note to see all the details here"}
        </Heading>
      </Note>
        {data.note && (
          <Buttons>
            <Button>Edit note</Button>
            <Button variation="danger">Delete note</Button>
          </Buttons>
        )}
        <Image src={Wave} className={data.note ? "" : "empty"}></Image>
    </StyledFullNote>
  );
}

export default FullNote;
