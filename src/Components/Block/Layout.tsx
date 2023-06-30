import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopLearnMore from "../../Pages/Home/TopLearnMore";

const Layout = () => {
  return (
    <div>
      <TopLearnMore />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
