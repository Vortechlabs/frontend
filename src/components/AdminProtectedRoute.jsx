import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Protected route for regular users
export const UserProtectedRoute = () => {
  const { user, token } = useAuth();
  
  if (!user || !token) {
    // Redirect to login if not authenticated as user
    return <Navigate to="/login" replace />;
  }
  
  // Render child routes if authenticated
  return <Outlet />;
};

// Protected route for admin users
export const AdminProtectedRoute = () => {
  const { admin, token } = useAuth();
  
  if (!admin || !token) {
    // Redirect to admin login if not authenticated as admin
    return <Navigate to="/admin/login" replace />;
  }
  
  // Render child routes if authenticated as admin
  return <Outlet />;
};