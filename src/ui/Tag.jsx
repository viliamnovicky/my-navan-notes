import styled, { css } from "styled-components";

const colors = {
  urgent: css`
    background: var(--red-400);
    color: var(--red-50);
  `,
  low: css`
    background: var(--green-400);
    color: var(--green-50);
  `,
  medium: css`
    background: var(--orange-400);
    color: var(--orange-50);
  `,
  none: css`
    background: var(--gray-50);
    color: var(--black-900) !important;
  `,
  no_bg: css`
    background: transparent;
    color: var(--black-900) !important;
  `,
  past: css`
    background: var(--gray-900);
    color: var(--gray-50);
  `,
  black: css`
  background: var(--gray-700);
  color: var(--gray-50);
`,
  gradient: css`
    background: linear-gradient(87.87deg, #fb4b37, #a733ff);
    color: var(--purple-50);
  `,
};

const sizes = {
  small: css`
    font-size: 1rem;
    width: 6rem;
    padding: 0.5rem 1rem;
  `,
  medium: css`
    font-size: 1.2rem;
    width: 12rem;
    padding: 0.7rem 1.2rem;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 0.7rem 1.2rem;
  `,
};

const click = {
  true: css`
    cursor: pointer;
  `
}

const Tag = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);
  border-radius: 10rem;
  ${(props) => colors[props.color]}
  ${(props) => sizes[props.size]}
  ${(props) => click[props.click]}
  display: flex;
  justify-content: center;
`;

Tag.defaultProps = {
  color: "gradient",
  size: "small",
};

export default Tag;
