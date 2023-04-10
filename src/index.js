import React from "react";
import { createRoot } from "react-dom";

import "./styles/index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("pf"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
