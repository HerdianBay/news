import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewsHomepage from "./NewsHomepage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsHomepage />
  </StrictMode>
);
