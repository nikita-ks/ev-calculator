import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Entrypoint } from "./entrypoint";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Entrypoint />
  </StrictMode>
);
