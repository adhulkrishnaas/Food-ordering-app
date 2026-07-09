import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntCard from "./components/RestrauntCard";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
