import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { OpenAPI } from "./openapi";

import Root from "./Root";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  OpenAPI.BASE = "http://localhost:3000/api";
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
