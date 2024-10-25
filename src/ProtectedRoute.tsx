import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: React.ReactNode;
  token: string | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, token }) => {
  const isValidToken = (token: string | null): boolean => {
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

  return isValidToken(token) ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
