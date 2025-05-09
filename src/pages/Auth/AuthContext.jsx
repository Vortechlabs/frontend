import React, { createContext, useState, useEffect, useContext } from 'react';
import apiClient from '../../Services/GlobalApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    const [admin, setAdmin] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedAdmin = localStorage.getItem('admin');
        const storedToken = localStorage.getItem('token');
    
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const loginUser  = async (email, password) => {
        const response = await apiClient.post('/auth/login/user', { email, password });
        setUser (response.data.user);
        setToken(response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    };

    const loginAdmin = async (email, password) => {
        const response = await apiClient.post('/auth/login/admin', { email, password });
        setAdmin(response.data.user);
        setToken(response.data.token);
        localStorage.setItem('admin', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    };

    const logoutUser  = () => {
        setUser (null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const logoutAdmin = () => {
        setAdmin(null);
        setToken(null);
        localStorage.removeItem('admin');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, admin, token, loginUser , loginAdmin, logoutUser , logoutAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};