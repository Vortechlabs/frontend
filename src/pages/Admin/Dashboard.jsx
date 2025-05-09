import React, { useEffect } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { admin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Jika bukan admin, alihkan ke halaman login admin
        if (!admin) {
            navigate('/admin/login'); // Ganti dengan rute yang sesuai
        }
    }, [admin, navigate]); // Menambahkan admin dan navigate sebagai dependensi

    // Jika admin, tampilkan konten Dashboard
    if (!admin) {
        return null; // Menghindari rendering lebih lanjut
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Konten Dashboard lainnya */}
        </div>
    );
}

export default Dashboard;