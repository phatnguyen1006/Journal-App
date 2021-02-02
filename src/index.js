import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import ValueContextProvider from "../src/Features/JournalManagement/valueContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ValueContextProvider>
      <App />
    </ValueContextProvider>
  </StrictMode>,
  rootElement
);
