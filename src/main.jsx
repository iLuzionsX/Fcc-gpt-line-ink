import React from "react";
import { createRoot } from "react-dom/client";
import { InkApp } from "./InkHome.jsx";
import "./styles.css";
import "./desktop.css";
import "./ink.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InkApp />
  </React.StrictMode>,
);
