import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    width: 10rem;
    height: 3.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    width: 12rem;
    height: 4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.2rem 2.8rem;
    font-weight: 500;
  `,
  dot: css`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50rem;
  `,
};

const variations = {
  primary: css`
    color: var(--purple-50);
    background: var(--purple-400);

    &:hover {
      background: var(--purple-500);
    }
  `,
  secondary: css`
    color: var(--red-50);
    background: var(--red-400);

    &:hover {
      background: var(--red-500);
    }
  `,
  light: css`
    background: var(--white);
  `,

  green: css`
    color: var(--green-50);
    background: var(--green-400);

    &:hover {
      background: var(--green-500);
    }
  `,
  danger: css`
    color: var(--red-50);
    background: var(--red-400);

    &:hover {
      background: var(--red-500);
    }
  `,
};

const use = {
  cancel: css`
    position: absolute !important;
    right: 2rem !important;
    top: 2rem !important;
    font-family: "dosis", "sans-serif" !important;
    animation: opacity .2s forwards;
    padding: 0;
    font-size: 1.6rem !important;

    img {
      width: 100%;
    }
    
  `
}

const amount = {
  four: css`
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
  `
}

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${(props) => amount[props.amount]}
`

const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150rem;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 0.2rem 1rem rgba(0, 0, 0, 0.5);
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  ${(props) => use[props.use]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
