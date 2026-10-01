import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "https://kit.fontawesome.com/f8fef2d2ca.js";
import App from "./App.tsx";
import "./input.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
