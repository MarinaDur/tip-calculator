import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.3rem;

  ${(props) =>
    props.type === "selectTip" &&
    css`
      color: var(--color-dark-grayish-cyan);
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      color: var(--color-white);
    `}

  ${(props) =>
    props.type === "subText" &&
    css`
      font-size: 1.1rem;
      color: var(--color-grayish-cyan);
      letter-spacing: 0.3px;
    `}

    
  ${(props) =>
    props.type === "price" &&
    css`
      font-size: clamp(2.5rem, 2vw, 3rem);
      color: var(--color-strong-cyan);
    `}


    ${(props) =>
    props.type === "error" &&
    css`
      color: var(--color-error);
    `}
`;
export default Paragraph;
