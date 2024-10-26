// src/routes/AppRoutes.tsx
import React from "react";
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
import { useAuth } from "../provider/AuthProvider";

const AppRoutes: React.FC = () => {
  const { token } = useAuth();

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
                <ProtectedRoute>
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
