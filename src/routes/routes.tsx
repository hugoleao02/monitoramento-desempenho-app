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
import ProtectedRoute from "../ProtectedRoute";

const AppRoutes: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
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
        {routes.map(({ path, element, protected: isProtected }) => {
          if (isProtected) {
            return (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute token={token}>{element}</ProtectedRoute>
                }
              />
            );
          }

          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={token ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={token ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
