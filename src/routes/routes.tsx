// src/routes/AppRoutes.tsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/home/HomePage";
import UserManagementPage from "../pages/UserManagementPage/UserManagementPage";
import Layout from "../layouts/Layout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleTokenChange);
    return () => window.removeEventListener("storage", handleTokenChange);
  }, []);

  const routes = [
    { path: "/login", element: <LoginPage />, protected: false },
    { path: "/home", element: <HomePage />, protected: true },
    {
      path: "/user-management",
      element: <UserManagementPage />,
      protected: true,
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute token={token}>
                  <Layout>{element}</Layout>
                </ProtectedRoute>
              ) : (
                element
              )
            }
          />
        ))}
        <Route
          path="*"
          element={<Navigate to={token ? "/home" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
