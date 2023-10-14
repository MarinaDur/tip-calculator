import Container from "../ui/Container";
import Error from "../ui/Error";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Paragraph from "../ui/Paragraph";
import Tip from "./Tip";

function InputsForTips({
  bill,
  handleBill,
  handleNumOfPeople,
  numOfPeople,
  onHandleTip,
  tip,
  onClearBill,
  onClearNumOfPeople,
  onHandleCustomTip,
  customTip,
  onClearCustomTp,
}) {
  return (
    <Container type="inputForTips">
      <Container type="bill">
        <Container type="error">
          <Label inputId="bill">Bill</Label>
          {bill === "0" && <Error />}
        </Container>

        <Input
          inputId="bill"
          inputName="input"
          type="number"
          value={bill}
          onChange={handleBill}
          text="0"
          onClear={onClearBill}
          error={bill === "0"}
        />
      </Container>
      <Container type="tip">
        <Paragraph type="selectTip">Select Tip %</Paragraph>
        <Tip
          onHandleCustomTip={onHandleCustomTip}
          tipValue={tip}
          customTipValue={customTip}
          onClearCustomTp={onClearCustomTp}
          onHandleTip={onHandleTip}
        />
      </Container>
      <Container type="numOfPeople">
        <Container type="error">
          <Label inputId="numPeople">Number of People</Label>
          {numOfPeople === "0" && <Error />}
        </Container>
        <Input
          inputId="numPeople"
          inputName="input"
          type="number"
          value={numOfPeople}
          onChange={handleNumOfPeople}
          text="0"
          onClear={onClearNumOfPeople}
          error={numOfPeople === "0"}
        />
      </Container>
    </Container>
  );
}

export default InputsForTips;
