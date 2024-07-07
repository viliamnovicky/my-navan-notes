import styled from "styled-components";
import Button from "./Button";

const Outer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  animation: modal-outer .2s forwards;
`;

const StyledModal = styled.div`
    padding: 4rem;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: modal .2s forwards;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      padding-top: 0 !important;
    }
`

function Modal({children, setIsOpenModal}) {
  return <Outer>
    <StyledModal>
        <Button size="dot" variation="light" use="cancel" onClick={() => setIsOpenModal(false)}>×</Button>
        {children}
    </StyledModal>
  </Outer>;
}

export default Modal;
