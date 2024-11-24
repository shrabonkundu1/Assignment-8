import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Gadgetscard from "./components/Gadgetscard/Gadgetscard";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/allData.json"),
        children: [
          {
            path: "/category",
            element: <Gadgetscard></Gadgetscard>,
            // element: <Gadgets></Gadgets>,
            loader: () => fetch("/allData.json"),
          },
          {
            path: "/",
            element: <Gadgetscard></Gadgetscard>,
            // element: <Gadgets></Gadgets>,
            loader: () => fetch("/allData.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgetscard></Gadgetscard>,
            //
            loader: () => fetch("/allData.json"),
          },
        ],
      },
      // {
      //   path: "Gadgets/:productId",
      //   element: <GadgetDetail></GadgetDetail>,
        
      // },
      {
        path: "statistics/:productId",
        element: <Statistics></Statistics>,
        loader: () => fetch("/allData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/allData.json"),
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
            loader: () => fetch("/allData.json"),
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch("/allData.json"),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
