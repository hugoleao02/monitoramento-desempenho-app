import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/home/HomePage";
import UserManagementPage from "../pages/UserManagementPage/UserManagementPage";
import Layout from "../layouts/Layout";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../provider/AuthProvider";

const AppRoutes: React.FC = () => {
  const { token } = useAuth();

  const routes = [
    { path: "/login", element: <LoginPage />, protected: false },
    { path: "/home", element: <HomePage /> },
    {
      path: "/user-management",
      element: <UserManagementPage />,
    },
  ];

  return (
    <Routes>
      {routes.map(({ path, element, protected: isProtected = true }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? (
              <ProtectedRoute>
                <Layout>{element}</Layout>
              </ProtectedRoute>
            ) : (
              element
            )
          }
        />
      ))}
      <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />
    </Routes>
  );
};

export default AppRoutes;
