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

const Container = styled.div`
  width: 100;
  padding: 0 2rem;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  opacity: 0.2;
  z-index: -1;
`;

function FullNote({ data }) {
  return (
    <StyledFullNote>
      <Heading size="large" weight="w400">
        {data.name ? data.name : "Your Note"}
      </Heading>
      <Details>
        <Container>
          <Heading as="p" weight="w900">
            <Tag color="gradient">created </Tag>
            {data.date ? formatDateAndTime.format(data.date) : "??.??.????"}
          </Heading>
          <Heading as="p" weight="w900">
            <Tag color="gradient">deadline </Tag>
            {data.deadline ? formatDate.format(new Date(data.deadline)): "no deadline"}
          </Heading>
          <Heading as="p" weight="w900">
            <Tag color="gradient">booking </Tag>
            {data.bookingID ? data.bookingID : "XXXXXX"}
          </Heading>
        </Container>
        <Container>
          <Heading as="p" weight="w900">
            priority
            <Tag color={data.priority} size="medium">
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
      <Heading as="p" transform="none">
        {data.note ? data.note : "Your note will appear here"}
      </Heading>
      <Image src={Wave}></Image>
      {data.note && (
        <Buttons>
          <Button>Edit note</Button>
          <Button variation="danger">Delete note</Button>
        </Buttons>
      )}
    </StyledFullNote>
  );
}

export default FullNote;
