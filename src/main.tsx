import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/globals.css";

const rootElement = document.getElementById("root")!;

// Service landing pages include a lightweight static HTML SEO shell at build
// time. Once JavaScript loads, React replaces that shell with the full
// interactive application.
rootElement.replaceChildren();

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
