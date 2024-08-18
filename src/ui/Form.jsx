import styled, { css } from "styled-components";

export const Form = styled.form`
  background: transparent;
  padding: 2rem;

  .inactive {
    cursor: not-allowed;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  animation: opacity 0.2s forwards;
`;

export const CheckboxGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0 4rem 0;
  margin: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    label {
      top: 0;
      font-weight: 400;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding-left: 2rem;
      font-size: 1.4rem;

      &:before {
        width: 1.1rem;
        height: 1.1rem;
        background: var(--white);
        border: 2px solid var(--white);
        outline: 2px solid var(--purple-400);
        border-radius: 50%;
        content: "";
        position: absolute;
        left: 0rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  visibility: hidden;

  &:checked + label:before {
    background: var(--purple-400);
  }
`;

export const Text = styled.textarea`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--gray-50);
  font-size: 1.6rem;
  width: 100%;
`;

export const Label = styled.label`
  padding-left: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  transition: all 0.2s;
  top: 0.5rem;
`;

export const Select = styled.select`
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  outline: none;
  border: none;
  background: var(--gray-50);
  font-size: 1.6rem;
  width: 100%;

  & option {
    background: var(--gray-50);
  }

  &:active,
  &:focus {
    outline: 5px solid var(--color-primary-500);
    background: var(--gray-50);
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--gray-50);
  font-size: 1.6rem;
  width: 100%;
  width: 100%;

  &:disabled {
    background: var(--gray-50);
    border: none;
    outline: none;

    &:focus,
    &:active {
      outline: none;
      background: var(--gray-50);
    }
  }

  &::placeholder {
    transition: opacity, 0.5s;
  }

  & + label {
    opacity: 0;
    visibility: hidden;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    opacity: 1;
    visibility: visible;
    margin-top: 1rem;
    color: var(--color-primary-700);
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::file-selector-button {
    border-radius: 10rem;
    color: var(--color-primary-50);
    background: var(--color-primary-300);
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: var(--color-primary-600);
    }
    ${(props) =>
      props.as === "textarea" &&
      css`
        height: 30rem;
      `}
  }
  &:active,
  &:focus {
    outline: 5px solid var(--purple-400);
    background: var(--white);
  }
`;
