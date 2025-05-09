import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProtectedRoute, AdminProtectedRoute } from './components/ProtectedRoute';

// Auth pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminLogin from './pages/Auth/AdminLogin';
import AdminRegister from './pages/Auth/AdminRegister';

// User pages
import Home from './pages/User/Home';
import UserProfile from './pages/User/Profile';

// Admin pages
import Dashboard from './pages/Admin/Dashboard';
import UserManagement from './pages/Admin/UserManagement';
import { AuthProvider } from './pages/Auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        
        {/* Protected user routes */}
          <Route path="/profile" element={<UserProfile />} />
        
        {/* Protected admin routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;