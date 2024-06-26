import styled from "styled-components";
import Button, { Buttons } from "./Button";
import dateDown from "../../public/date-down.svg";
import dateUp from "../../public/date-down.svg";
import dateDownActive from "../../public/date-down-active.svg";
import dateUpActive from "../../public/date-up-active.svg";

import Search from "./Search";

const StyledNotes = styled.div`
  width: 25vw;
  height: calc(100% - 12rem);
  border-radius: 2rem;
  position: absolute;
  left: 2rem;
  transform: translateY(-50%);
  top: calc(50% + 4rem);
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

const Filter = styled.div`
  width: 100%;
  position: sticky;
  z-index: 5;
  background: var(--white);
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
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

function Notes({ storageKey, defaultList }) {

  return (
    <>
      <StyledNotes>
        <Filter>
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
          <Search />
        </Filter>
        {/* <Note data={data} />
        <Note data={data} />
        <Note data={data} />
        <Note data={data} /> */}
      </StyledNotes>
    </>
  );
}

export default Notes;
