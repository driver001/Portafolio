import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css/animate.min.css";
import "./index.css";
import { store } from "./redux/store.tsx";

import { Provider } from "react-redux";
import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import MainPage from "./pages/MainPage.tsx";
import MainLayout from "./layout/MainLayout.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
