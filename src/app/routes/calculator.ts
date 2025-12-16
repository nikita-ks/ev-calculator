import type { RouteObject } from "react-router";
import { CalculatorPage } from "../../pages/calculator";
import { pathKeys } from "../../shared/lib/react-router/config";
import { withErrorBoundary } from "react-error-boundary";
import { CommonErrorHandler } from "@/shared/ui/ErrorBoundary";

export const CalculatorRoute: RouteObject = {
  path: pathKeys.calculator(),
  Component: withErrorBoundary(CalculatorPage, {
    FallbackComponent: CommonErrorHandler,
  }),
};
