import { useEffect, type FC } from "react";
import { BrowserRouter } from "./RouterProvider";
import { init } from "@tma.js/sdk-react";

export const Entrypoint: FC = () => {
  useEffect(() => {
    init();
  }, []);
  return <BrowserRouter />;
};
