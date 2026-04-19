import styled from "styled-components";
import LoginButton from "../ui/LoginButton";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  height: calc(100vh - 11rem);
`;

function LoginPage() {
  return (
    <StyledDiv>
      <LoginButton />
    </StyledDiv>
  );
}

export default LoginPage;
