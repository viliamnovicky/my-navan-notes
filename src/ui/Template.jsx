import toast from "react-hot-toast";
import styled from "styled-components";
import { highlightText } from "../utils/helpers";
import Button, { Buttons } from "./Button";

const StyledTemplate = styled.div`
  width: 100%;
  display: flex;
  border-radius: 2rem;
  background: var(--white);
  justify-content: space-between;
  padding: 2rem;
  gap: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    //width: 100vw;
  }
`;

const StyledName = styled.button`
  display: flex;
  height: 5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 100rem;
  border: none;
  justify-content: center;
  align-items: center;
  background: var(--purple-500);
  color: var(--white);
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background: var(--purple-700);
  }
`;

const StyledText = styled.p`
  max-width: 65%;
`;

function Template({ data, filter, onClick, onUpdate }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.text);
      toast.success("Template copied");
    } catch (err) {
      toast.error("Failed to copy:", err);
    }
  };

  return (
    <StyledTemplate>
      <div>
        <StyledName onClick={handleCopy}>{highlightText(data.name, filter)}</StyledName>

        <Buttons>
          <Button size="small" onClick={onUpdate} variation="green">edit</Button>
          <Button onClick={onClick} size="small" variation="danger">delete</Button>
        </Buttons>
      </div>
      <StyledText>{data.text}</StyledText>
    </StyledTemplate>
  );
}

export default Template;
