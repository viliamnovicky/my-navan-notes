import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.6rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 3rem;
  `,
  x_large: css`
    font-size: 4rem;
  `,
};

const weights = {
  w100: css`
    font-weight: 100;
  `,
  w300: css`
    font-weight: 300;
  `,
  w400: css`
    font-weight: 400;
  `,
  w700: css`
    font-weight: 700;
  `,
  w900: css`
    font-weight: 900;
  `,
};

const transformations = {
    uppercase: css`
        text-transform: uppercase;
    `,
    lowercase: css`
        text-transform: lowercase;
    `,
    capitalize: css`
        text-transform: capitalize;
    `,
    none: css`
        text-transform: none;
    `
}

const aligns = {
    left: css`
        text-align: left;
    `,
    right: css`
        text-align: right;
    `,
    center: css`
        text-align: center;
    `
}

const fonts = {
  curs: css`
    font-family: "Pacifico", cursive;
  `
}

const Heading = styled.h1`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  ${(props) => sizes[props.size]}
  ${(props) => weights[props.weight]}
  ${(props) => transformations[props.transform]}
  ${(props) => aligns[props.align]}
  ${(props) => fonts[props.font]}
`;

export default Heading;
