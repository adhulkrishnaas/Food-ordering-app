import React, { Suspense, use, useState, useContext, useEffect } from "react";
import { lazy } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntCard from "./components/RestrauntCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    const data = {
      name: "Adhul",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {" "}
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app-layout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
