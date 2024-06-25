import styled from "styled-components";

const StyledHoursCount = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        background: var(--green-400);
        border-radius: 50%;
        color: var(--green-50);
        margin-left: 1rem;
        display: flex;
        width: 6rem;
        height: 6rem;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        cursor: pointer;
    }

`;

function HoursCount() {
  return (
    <StyledHoursCount>
      Hours count <span>+ 1.5</span>
    </StyledHoursCount>
  );
}

export default HoursCount;
