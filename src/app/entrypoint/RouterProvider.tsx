import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "../layout/main";
import { CalculatorRoute } from "../routes/calculator";

const browserRouter = createBrowserRouter([
  { Component: MainLayout, children: [CalculatorRoute] },
]);

export const BrowserRouter: FC = () => (
  <RouterProvider router={browserRouter} />
);
