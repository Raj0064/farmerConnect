// src/pages/Dashboard.js
import React from "react";
import Navbar from "../../Components/Farmer/Navbar";
import ManageOrder from "../../Components/Farmer/ManageOrder";

const FarmerDashboard = () => {
  return (
    <>
      <div class="container-sm">
       <Navbar/>
       <ManageOrder/>
      </div>

    </>
  );
};

export default FarmerDashboard;
