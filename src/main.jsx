import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your theme
import "../node_modules/primereact/resources/primereact.min.css"; // Core CSS
import "../node_modules/primeicons/primeicons.css"; // Icons
import "../node_modules/primeflex/primeflex.css";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
