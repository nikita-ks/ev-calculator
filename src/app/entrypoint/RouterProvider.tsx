import { pathKeys } from "@/shared/lib/react-router";
import { type FC } from "react";
import { createHashRouter, redirect, RouterProvider } from "react-router";
import { MainLayout } from "../layout/main";
import { CalculatorRoute } from "../routes/calculator";

const browserRouter = createHashRouter([
  {
    Component: MainLayout,
    children: [CalculatorRoute],
  },
  {
    path: "*",
    loader: () => redirect(pathKeys.calculator()),
  },
]);

export const BrowserRouter: FC = () => (
  <RouterProvider router={browserRouter} />
);
