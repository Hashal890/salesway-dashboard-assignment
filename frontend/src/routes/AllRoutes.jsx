import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../routes/Login";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
