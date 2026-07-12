import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntCard from "./components/RestrauntCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contactus",
    element: <Contactus />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
