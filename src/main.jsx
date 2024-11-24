import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/DashBoard/Dashboard";
import Products from "./pages/Products";
import Favoraits from "./pages/Favoraits";
import Orderlist from "./pages/Orderlist";
import ReadProducts from "./pages/ReadProducts";
import CreateProducts from "./pages/CreateProducts";
import UpdaiteProducts from "./pages/UpdaiteProducts";
import ShowProdect from "./pages/ShowProdect/ShowProdect";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Products />,
        children: [
          { path: "", element: <ReadProducts /> },
          { path: "/show/:id", element: <ShowProdect /> },
          { path: "CreateProducts", element: <CreateProducts /> },
          { path: "/UpdaiteProducts/:id", element: <UpdaiteProducts /> },
        ],
      },
      { path: "Favoraits", element: <Favoraits /> },
      { path: "Orderlist", element: <Orderlist /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
