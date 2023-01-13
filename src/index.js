import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const provider = new AuthProvider(process.env.REACT_APP_ARCANA_APP_ID);

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
