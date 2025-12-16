import { useEffect, type FC } from "react";
import { BrowserRouter } from "./RouterProvider";
import { init, isTMA } from "@tma.js/sdk-react";

export const Entrypoint: FC = () => {
  useEffect(() => {
    if (isTMA()) {
      init();
    }
  }, []);
  return <BrowserRouter />;
};
