import React from "react";
import { Routes as MyRoutes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./paths";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";
import { Search } from "../pages/Search";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.DETAILS} element={<Details />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </MyRoutes>
  );
};

export default Routes;
