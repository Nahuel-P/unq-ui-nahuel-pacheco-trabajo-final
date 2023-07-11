import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/unq-ui-nahuel-pacheco-trabajo-final">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
