import { atom } from "jotai";
import type { CalculatorState } from "./calculator.types";

export const calculatorAtom = atom<CalculatorState>({
  price: 17,
  capacity: 0,
  currentCharge: 0,
  desiredCharge: 0,
});

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
