import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";

const tips = [
  {
    id: 1,
    tip: 5,
  },
  {
    id: 2,
    tip: 10,
  },
  {
    id: 3,
    tip: 15,
  },
  {
    id: 4,
    tip: 25,
  },
  {
    id: 5,
    tip: 50,
  },
];

const StyledTipContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-top: 15px;
`;

function Tip({
  onHandleTip,
  tipValue,
  onHandleCustomTip,
  customTipValue,
  onClearCustomTp,
}) {
  return (
    <StyledTipContainer>
      {tips.map((tip) => (
        <Button
          key={tip.id}
          onHandleTip={() => onHandleTip(tip.tip)}
          clicked={tip.tip === tipValue}
        >
          {tip.tip}%
        </Button>
      ))}
      <Input
        inputId="tip"
        text="Custom"
        type="number"
        inputName="custom"
        onChange={onHandleCustomTip}
        value={customTipValue}
        onClear={onClearCustomTp}
      />
    </StyledTipContainer>
  );
}

export default Tip;
