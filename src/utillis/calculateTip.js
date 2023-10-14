export function calculateTip(
  valueBill,
  valueNumOfPeople,
  valueTip,
  valueCustomTip
) {
  let calculatedTotalTip;
  let calculatedTotalBill;
  const pickedTip = valueTip ? valueTip : valueCustomTip ? valueCustomTip : 0;
  if (pickedTip && valueBill && valueNumOfPeople) {
    calculatedTotalTip = ((pickedTip / 100) * valueBill) / valueNumOfPeople;
    calculatedTotalBill = valueBill / valueNumOfPeople + calculatedTotalTip;
  } else {
    calculatedTotalTip = 0;
    calculatedTotalBill = 0;
  }

  return { calculatedTotalTip, calculatedTotalBill };
}
