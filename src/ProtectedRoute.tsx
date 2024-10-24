import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  token: string | null;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ token, children }) => {
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
