import type { RouteObject } from "react-router";
import { CalculatorPage } from "../../pages/calculator";
import { pathKeys } from "../../shared/lib/react-router/config";

export const CalculatorRoute: RouteObject = {
  path: pathKeys.calculator(),
  Component: CalculatorPage,
};
