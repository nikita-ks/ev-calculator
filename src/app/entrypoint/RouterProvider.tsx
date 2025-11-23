import type { FC } from "react";
import { createHashRouter, RouterProvider } from "react-router";
import { MainLayout } from "../layout/main";
import { CalculatorRoute } from "../routes/calculator";

const browserRouter = createHashRouter([
  {
    Component: MainLayout,
    children: [CalculatorRoute],
  },
]);

export const BrowserRouter: FC = () => (
  <RouterProvider router={browserRouter} />
);
