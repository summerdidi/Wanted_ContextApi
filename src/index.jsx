import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ModalsProvider from "./ModalsProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </StrictMode>,
);
