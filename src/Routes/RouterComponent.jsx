import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../Container/LoginForm";
import Dashboard from "../pages/Farmer/FarmerDashboard";
import FarmerDashboard from "../pages/Farmer/FarmerDashboard";
import ManageOrder from "../Components/Farmer/ManageOrder";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/orders" element={<ManageOrder />} />
        <Route path="/org/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
