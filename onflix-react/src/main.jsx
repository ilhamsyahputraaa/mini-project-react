import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import SignInModal from "./components/SignInModal";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/login",
    element: <SignInModal />,
    errorElement: <p>Page Not Found</p>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);