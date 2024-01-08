import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { Layout } from "./components/Layout/Layout.tsx";

const router = createBrowserRouter([{ path: "*", element: <Layout /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
