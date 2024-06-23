import styled from "styled-components"

const StyledHeader = styled.header`
    background: var(--white-1000);
    width: 100vw;
    height: 8rem;
    box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;

`

function Header({children}) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}

export default Header
