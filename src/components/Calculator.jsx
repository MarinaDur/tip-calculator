import styled from "styled-components";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const StyledCalculator = styled.div`
  background: var(--color-very-dark-cyan);
  width: 100%;
  padding: 30px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 15px;
  margin-top: 30px;

  @media (min-width: 900px) {
    width: 50%;
    height: 100%;
    margin-top: 0px;
    padding: 35px;
  }
`;

function Calculator({ calculatedTotalTip, calculatedTotalBill, onClear }) {
  return (
    <StyledCalculator>
      <Container type="calculator">
        <div>
          <Paragraph type="text">Tip Amount</Paragraph>
          <Paragraph type="subText">/ person</Paragraph>
        </div>
        <Paragraph type="price">
          ${calculatedTotalTip ? calculatedTotalTip.toFixed(2) : "0.00"}
        </Paragraph>
      </Container>
      <Container type="calculator">
        <div>
          <Paragraph type="text">Total</Paragraph>
          <Paragraph type="subText">/ person</Paragraph>
        </div>
        <Paragraph type="price">
          ${calculatedTotalBill ? calculatedTotalBill.toFixed(2) : "0.00"}
        </Paragraph>
      </Container>
      <Button
        type="reset"
        onHandleTip={onClear}
        activeReset={calculatedTotalTip && calculatedTotalBill}
      >
        RESET
      </Button>
    </StyledCalculator>
  );
}

export default Calculator;
