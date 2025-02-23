import { Outlet } from "react-router-dom";
import Header from "./Header";
import HoursCount from "./HoursCount";
import Logo from "./Logo";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Header>
        <Logo />
        {/* <HoursCount /> */}
        <Navbar />
      </Header>
      <Outlet />
    </>
  );
}

export default AppLayout;
