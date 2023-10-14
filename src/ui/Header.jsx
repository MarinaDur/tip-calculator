import styled from "styled-components";

const StyledHeaderDiv = styled.div`
  width: 90px;
  margin: 3rem auto;

  @media (min-width: 900px) {
    position: absolute;
    right: 48%;
    top: 20px;
    /* transform: translate(-10%, 0%); */
  }
`;

const StyledHeader = styled.h1`
  font-size: 2rem;
  color: var(--color-very-dark-cyan);
  letter-spacing: 8px;
  text-align: center;
`;

function Header() {
  return (
    <StyledHeaderDiv>
      <StyledHeader>SPLITTER</StyledHeader>
    </StyledHeaderDiv>
  );
}

export default Header;
