import styled from "styled-components"
import NavanLogo from "../../public/navan-logo-full.png"
import Button from "./Button"

const StyledLogo = styled.img`
height: 90%;
padding-left: 2rem;

@media (max-width: 1365px) {
    padding-left: 0rem;
    width: 10rem;
    height: auto;
  }
`


function Logo() {
    return (
        <>
        <StyledLogo src={NavanLogo}/>
        </>
    )
}

export default Logo
