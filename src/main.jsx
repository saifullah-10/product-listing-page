import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "./context/ContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
