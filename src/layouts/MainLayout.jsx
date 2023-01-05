import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
