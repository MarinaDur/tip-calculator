import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 1.3rem;
  color: var(--color-dark-grayish-cyan);
`;

function Label({ inputId, children }) {
  return <StyledLabel id={inputId}>{children && children}</StyledLabel>;
}

export default Label;
