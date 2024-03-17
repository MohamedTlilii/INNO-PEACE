import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header  from "../Components/Header/Header"; 

function PublicLayout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
