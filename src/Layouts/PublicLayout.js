import React from "react";
import { Outlet } from "react-router-dom";
import Header  from "../Components/Header/Header"; // Adjusted import path
import Footer from "../Components/Footer/Footer"; // Adjusted import path

function PublicLayout() {
  return (
    <div>
      <Header  />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
