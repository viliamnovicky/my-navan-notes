import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--gray-900);
    font-size: 1.6rem;
    font-weight: 500;
    padding: .5rem 1.5rem;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-bottom: 2px solid var(--purple-400);
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavLink to="/notes">Notes</StyledNavLink>
      <StyledNavLink to="/templates">Templates</StyledNavLink>
    </StyledNavbar>
  );
}

export default Navbar;
