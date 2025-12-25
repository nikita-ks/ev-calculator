import { EnergyCalculatorWidget } from "@/widgets/EnergyCalculator";
import type { FC } from "react";

export const CalculatorPage: FC = () => {
  return (
    <div className="grid">
      <h1 className="text-3xl font-bold">Calculate Energy</h1>
      <EnergyCalculatorWidget />
    </div>
  );
};
