import styled from "styled-components";
import Main from "./Main";
import Header from "../ui/Header";

const StyledBody = styled.div`
  /* width: 100vw;
  height: 100vh; */
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem; */
  @media (min-width: 900px) {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
  }
`;

function Body() {
  return (
    <StyledBody>
      <Header />
      <Main />
    </StyledBody>
  );
}

export default Body;
