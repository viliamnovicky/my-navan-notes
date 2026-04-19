// components/LoginButton.jsx
import styled from "styled-components";
import { login } from "../utils/apiAuth";
import { useNavigate } from "react-router-dom";

const Button = styled.div`
  background: var(--purple-400);
  color: var(--purple-100);
  display: flex;
  padding: 2rem 2rem;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--purple-500) !important;
  }
`;

export default function LoginButton() {
  const navigate = useNavigate();
  async function handleLogin() {
    try {
      await login();
      navigate("/templates");
    } catch (err) {
      console.error(err);
    }
  }

  return <Button onClick={handleLogin}>Sign in with Google</Button>;
}
