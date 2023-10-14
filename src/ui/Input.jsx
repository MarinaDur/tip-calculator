import styled, { css } from "styled-components";
import Paragraph from "./Paragraph";

const StyledInput = styled.input`
  padding: 3px 15px;
  border: none;
  border-radius: 5px;
  font-size: 2.3rem;
  cursor: pointer;
  ${(props) =>
    props.$error &&
    css`
      border: 2px solid var(--color-error);
    `}

  &::placeholder {
    color: var(--color-grayish-cyan);
  }

  &:focus {
    border: ${(props) =>
      props.$error
        ? "2px solid var(--color-error)"
        : "2px solid var(--color-strong-cyan)"};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.name === "input" &&
    css`
      width: 100%;
      background: ${(props) =>
          props.id === "bill"
            ? "url('icon-dollar.svg') no-repeat left 15px center"
            : "url('icon-person.svg') no-repeat left 15px center"},
        var(--color-input);
      margin-top: 5px;
      text-align: right;
      color: var(--color-very-dark-cyan);
    `}

  ${(props) =>
    props.name === "custom" &&
    css`
      background: var(--color-input);
      border-radius: 5px;
      text-align: right;
      color: var(--color-very-dark-cyan);

      @media (min-width: 900px) {
        &::placeholder {
          font-size: 1.8rem;
          text-align: center;
        }
      }
    `}
`;

// const Label = styled.label`
//   font-size: 1.5rem;
//   color: var(--color-dark-grayish-cyan);
// `;

function Input({
  inputId,
  inputName,
  type,
  text,
  value,
  onChange,
  onClear,
  placeholder,
  error,
}) {
  // const handleChange = (e) => {
  //   if (onChange && typeof onChange === 'function') {
  //     onChange(e.target.value);
  //   }
  // };

  return (
    <StyledInput
      id={inputId}
      name={inputName}
      type={type}
      placeholder={text}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClear}
      $error={error}
    />
  );
}

export default Input;
