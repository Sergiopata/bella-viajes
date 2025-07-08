import React from "react";
import ReactDOM from "react-dom/client"; // Usa createRoot en React 18+
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./components/LeerExcel.js";


const root = ReactDOM.createRoot(document.getElementById("root")); // Cambia render() por createRoot()
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
