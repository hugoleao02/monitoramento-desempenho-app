import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../provider/AuthProvider";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAuth();

  const isValidToken = () => {
    if (!token || token.split(".").length !== 3) return false;

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error("Token inválido:", error);
      return false;
    }
  };

  return isValidToken() ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
