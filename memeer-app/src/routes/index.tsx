import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./../components/Root";
import Home from "./../components/Home";

const CustomRoutes: React.FC<any> = () => {
  return (
    <Routes>
      <Route path="/app" element={<Root />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
