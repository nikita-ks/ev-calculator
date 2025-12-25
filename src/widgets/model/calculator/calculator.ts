import { atom } from "jotai";
import type { CalculatorState } from "./calculator.types";
import { atomWithStorage } from "jotai/utils";

const initialValue: CalculatorState = {
  price: 19,
  capacity: 75,
  currentCharge: 50,
  desiredCharge: 85,
};
export const calculatorAtom = atomWithStorage<CalculatorState>(
  "ev-calc-state",
  initialValue,
  undefined,
  { getOnInit: true }
);

export const percentageDiffAtom = atom((get) => {
  const { currentCharge, desiredCharge } = get(calculatorAtom);
  return desiredCharge - currentCharge;
});

export const capacityDiffAtom = atom((get) => {
  const { capacity } = get(calculatorAtom);
  const percentageDiff = get(percentageDiffAtom);
  return Number((capacity * (percentageDiff / 100)).toFixed(2));
});

export const approximateCostAtom = atom((get) => {
  const capacityDiff = get(capacityDiffAtom);
  const { price } = get(calculatorAtom);
  return Number((capacityDiff * price).toFixed(2));
});
