import { Outlet } from "react-router-dom";
import Header from "./Header";
import HoursCount from "./HoursCount";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 0 1rem;
  width: 100vw;
`

function AppLayout() {
  return (
    <>
      <Header>
        <Logo />
        {/* <HoursCount /> */}
        <Navbar />
      </Header>
      <StyledLayout>
        <Outlet />
      </StyledLayout>
    </>
  );
}

export default AppLayout;
