import type { FC } from "react";
import { CalculatorForm } from "./Form";
import { Result } from "./Result";

export const EnergyCalculatorWidget: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CalculatorForm />
      <Result />
    </div>
  );
};
