import styled from "styled-components";

import InputsForTips from "./InputsForTips";
import Calculator from "./Calculator";
import { useEffect, useState } from "react";
import { calculateTip } from "../utillis/calculateTip";

const StyledMain = styled.main`
  /* width: 300px; */

  width: 100%;
  max-width: 850px;
  background: var(--color-white);
  border-radius: 15px;
  padding: 30px;
  margin: 0 auto;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    height: 400px;
    padding: 40px;
  }
`;

function Main() {
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustopmTip] = useState("");

  const [calculatedTotalTip, setCalculatedTotalTip] = useState(null);
  const [calculatedTotalBill, setCalculatedTotalBill] = useState(null);

  useEffect(() => {
    if (bill && numOfPeople) {
      if (tip || customTip) {
        const { calculatedTotalTip, calculatedTotalBill } = calculateTip(
          Number(bill),
          Number(numOfPeople),
          Number(tip),
          Number(customTip)
        );

        setCalculatedTotalTip(calculatedTotalTip);
        setCalculatedTotalBill(calculatedTotalBill);
      }
    }
  }, [bill, numOfPeople, tip, customTip]);

  function handleChangeBill(num) {
    setBill(num);
  }

  function handleChangeNumOfPeople(num) {
    setNumOfPeople(num);
  }

  function handleTip(num) {
    setTip(num);
    setCustopmTip("");
  }

  function handleCustomTip(num) {
    setCustopmTip(num);
    setTip(0);
  }

  function handleClearTip() {
    setTip(0);
  }

  function handleClearBill() {
    setBill("");
  }

  function handleClearNumOfPeople() {
    setNumOfPeople("");
  }

  function handleClearCustopmTip() {
    setCustopmTip("");
  }

  function handleClearAll() {
    if (calculatedTotalTip && calculatedTotalBill) {
      handleClearBill();
      handleClearNumOfPeople();
      handleClearCustopmTip();
      handleClearTip();
      setCalculatedTotalTip(null);
      setCalculatedTotalBill(null);
    }
  }
  console.log(calculatedTotalTip, calculatedTotalBill);

  return (
    <StyledMain>
      <InputsForTips
        bill={bill}
        handleBill={handleChangeBill}
        handleNumOfPeople={handleChangeNumOfPeople}
        numOfPeople={numOfPeople}
        onHandleTip={handleTip}
        tip={tip}
        onHandleCustomTip={handleCustomTip}
        customTip={customTip}
        onClearBill={handleClearBill}
        onClearNumOfPeople={handleClearNumOfPeople}
        onClearCustomTp={handleClearCustopmTip}
      />
      <Calculator
        calculatedTotalTip={calculatedTotalTip}
        calculatedTotalBill={calculatedTotalBill}
        onClear={handleClearAll}
      />
    </StyledMain>
  );
}

export default Main;
