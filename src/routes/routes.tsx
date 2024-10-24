import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/home/HomePage';

const AppRoutes: React.FC = () => {
  const token = localStorage.getItem('token'); 

console.log('Token encontrado:', token);

  return (
    <Router>
      <Routes>
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
