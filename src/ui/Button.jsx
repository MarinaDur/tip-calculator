import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 3px 15px;
  border: none;
  border-radius: 5px;
  font-size: 2.3rem;
  /* width: 50%; */
  background: ${(props) =>
    props.$clicked
      ? "var(--color-strong-cyan)"
      : "var(--color-very-dark-cyan)"};
  border-radius: 5px;
  text-align: center;
  color: ${(props) =>
    props.$clicked ? "var(--color-very-dark-cyan)" : "var(--color-white)"};

  &:hover {
    background: var(--color-light-grayish-cyan);
    color: var(--color-very-dark-cyan);
  }

  ${(props) =>
    props.type === "reset" &&
    css`
      background: ${(props) =>
        props.$activeReset
          ? "var(--color-strong-cyan)"
          : "var(--color-button-still)"};
      color: var(--color-very-dark-cyan);
      width: 100%;
      font-size: 1.8rem;
      padding: 8px 15px;

      @media (min-width: 900px) {
        margin-top: auto;
      }
    `}
`;

function Button({ children, type, onHandleTip, clicked, activeReset }) {
  return (
    <StyledButton
      type={type}
      onClick={onHandleTip}
      $clicked={clicked}
      $activeReset={activeReset}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
