import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { logged } =
    JSON.parse(window.sessionStorage.getItem("loginData")) || false;
  return logged ? children : <Navigate to="/login" />;
}
