import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.type === "calculator" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) => props.type === "bill" && css``}


  ${(props) =>
    props.type === "tip" &&
    css`
      margin-top: 30px;

      @media (min-width: 900px) {
        margin-top: 20px;
      }
    `}


    
  ${(props) =>
    props.type === "numOfPeople" &&
    css`
      margin-top: 30px;
      @media (min-width: 900px) {
        margin-top: 20px;
      }
    `}
${(props) =>
    props.type === "inputForTips" &&
    css`
      @media (min-width: 900px) {
        width: 45%;
      }
    `}


      ${(props) =>
    props.type === "error" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;
export default Container;
