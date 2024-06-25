import styled, { css } from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import Button, { Buttons } from "./Button";

const colors = {
  red: css`
    background: var(--red-600);
    color: var(--red-50);
  `,
  green: css`
    background: var(--green-600);
    color: var(--green-50);
  `,
  gray: css`
    background: var(--gray-600);
    color: var(--gray-50);
  `
};

const StyledHoursCount = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

const Hours = styled.span`
  border-radius: 50%;
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  ${(props) => colors[props.color]}
`

const HoursCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

function HoursCount() {
  const [hours, setHours] = useLocalStorageState(0, "hours");
  //setHours("1.5")

  return (
    <StyledHoursCount>
        Hours count
      <HoursCont>
        <Button size="dot" variation="secondary" onClick={() => setHours(hours - 0.25)}>
          -
        </Button><Hours color={hours > 0 ? "green" : hours === 0 ? "gray" : "red"}>{hours}</Hours>
        
        <Button size="dot" variation="green" onClick={() => setHours(hours + 0.25)}>
          +
        </Button>
      </HoursCont>
    </StyledHoursCount>
  );
}

export default HoursCount;
