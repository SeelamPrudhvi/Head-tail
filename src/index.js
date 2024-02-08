import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./Head & Tail Project/Navbar";
import Home from "./headproject/home";
import HeadTail from "./headproject/headtail";
import About from "./headproject/about";

const router = createBrowserRouter([
  {
    // element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Head & Tail Game",
        element: <HeadTail />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
