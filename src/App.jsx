import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Light from "./Pages/Light";
import Filter from "./Pages/Filter";
import Pool from "./Pages/Pool";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutPage /> },
        { path: "light", element: <Light /> },
        { path: "pump", element: <Pool /> },
        { path: "filter", element: <Filter /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
