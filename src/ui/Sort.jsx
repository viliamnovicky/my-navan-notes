import styled from "styled-components";
import Button, { Buttons } from "./Button";

import dateDown from "../../public/date-down.svg";
import dateUp from "../../public/date-down.svg";
import dateDownActive from "../../public/date-down-active.svg";
import dateUpActive from "../../public/date-up-active.svg";

const StyledSort = styled.div`
  width: 100%;
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  img {
    height: 3rem;
  }
`;

function Sort({children}) {
  return (
    <StyledSort>
      <Buttons amount="four">
        <Button variation="light" size="dot">
          <img src={dateDown}></img>
        </Button>
        <Button variation="primary" size="dot">
          <img src={dateUpActive}></img>
        </Button>
        <Button variation="light" size="small">
          Priority <img src={""}></img>
        </Button>
        <Button variation="light" size="small">
          Priority <img src={""}></img>
        </Button>
      </Buttons>
      {children}
    </StyledSort>
  );
}

export default Sort;
